import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Course from '@/models/Course';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import { z } from 'zod';

const assessmentSchema = z.object({
    title: z.string(),
    type: z.enum(['Exam', 'Quiz', 'Assignment', 'Project', 'Other']),
    totalMarks: z.coerce.number(),
    obtainedMarks: z.coerce.number().optional(),
    weightage: z.coerce.number().optional(),
});

const courseSchema = z.object({
    semester: z.coerce.number().min(1),
    code: z.string().min(1),
    name: z.string().min(1),
    credits: z.coerce.number().min(1),
    status: z.enum(['Ongoing', 'Completed', 'Dropped']),
    targetGrade: z.string().optional(),
    achievedGrade: z.string().optional(),
    assessments: z.array(assessmentSchema).optional(),
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
        const courses = await Course.find({ user: userId }).sort({ semester: -1, createdAt: -1 });

        return NextResponse.json(courses, { status: 200 });
    } catch (error) {
        console.error('Fetch Courses Error:', error);
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
        const result = courseSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: result.error.issues[0].message },
                { status: 400 }
            );
        }

        const newCourse = await Course.create({
            ...result.data,
            user: userId,
        });

        const savedCourse = await newCourse.save();

        return NextResponse.json(savedCourse, { status: 201 });
    } catch (error) {
        console.error('Create Course Error:', error);
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

        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Course ID is required' }, { status: 400 });
        }

        await connectToDatabase();
        const deleted = await Course.findOneAndDelete({ _id: id, user: userId });

        if (!deleted) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Course deleted' }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
