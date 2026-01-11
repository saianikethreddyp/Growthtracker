import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Note from '@/models/Note';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

async function getUser(req: Request) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) return null;

    const decoded = verifyToken(token);
    return decoded ? decoded.userId : null;
}

export async function GET(req: Request) {
    try {
        const userId = await getUser(req);
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const link = searchParams.get('link');

        if (!link) {
            return NextResponse.json({ error: 'Link is required' }, { status: 400 });
        }

        await connectToDatabase();
        const note = await Note.findOne({ user: userId, problemLink: link });

        return NextResponse.json(note || { content: '' });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const userId = await getUser(req);
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { link, content } = await req.json();

        if (!link) {
            return NextResponse.json({ error: 'Link is required' }, { status: 400 });
        }

        await connectToDatabase();

        // Upsert note
        const note = await Note.findOneAndUpdate(
            { user: userId, problemLink: link },
            { content, updatedAt: new Date() },
            { upsert: true, new: true }
        );

        return NextResponse.json(note);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
