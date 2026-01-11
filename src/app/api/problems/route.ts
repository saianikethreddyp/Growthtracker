import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Problem from '@/models/Problem';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { logActivity } from '@/lib/activity';

const problemSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    link: z.string().url('Invalid URL'),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    platform: z.enum(['LeetCode', 'HackerRank', 'CodeStudio', 'Other']).optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(['Solved', 'Revision', 'Failed', 'Pending']).optional(),
});

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

        await connectToDatabase();
        // Support filtering maybe? For now fetching all.
        const problems = await Problem.find({ user: userId }).sort({ createdAt: -1 });

        return NextResponse.json(problems, { status: 200 });
    } catch (error) {
        console.error('Fetch Problems Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const userId = await getUser(req);
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectToDatabase();
        const body = await req.json();
        const result = problemSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: result.error.issues[0].message },
                { status: 400 }
            );
        }

        const newProblem = await Problem.create({
            ...result.data,
            user: userId,
        });

        return NextResponse.json(newProblem, { status: 201 });
    } catch (error) {
        console.error('Create Problem Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
export async function DELETE(req: Request) {
    try {
        const userId = await getUser(req);
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectToDatabase();
        const { link } = await req.json();

        if (!link) {
            return NextResponse.json({ error: 'Link is required' }, { status: 400 });
        }

        const deleted = await Problem.findOneAndDelete({ user: userId, link: link });

        if (!deleted) {
            return NextResponse.json({ error: 'Problem not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Problem un-solved' }, { status: 200 });
    } catch (error) {
        console.error('Delete Problem Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
