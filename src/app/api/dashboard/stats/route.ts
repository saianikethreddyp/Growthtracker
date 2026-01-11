import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Problem from '@/models/Problem';
import ActivityLog from '@/models/ActivityLog';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import mongoose from 'mongoose';

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

        const totalSolved = await Problem.countDocuments({
            user: userId,
            status: 'Solved',
        });

        const hardSolved = await Problem.countDocuments({
            user: userId,
            status: 'Solved',
            difficulty: 'Hard',
        });

        // Calculate Streak
        // 1. Get all unique dates of activity for this user, sorted desc
        const activities = await ActivityLog.aggregate([
            { $match: { user: new mongoose.Types.ObjectId(userId) } },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                    date: { $first: "$date" }
                }
            },
            { $sort: { "_id": -1 } }
        ]);

        let streak = 0;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        // Check if there is activity today or yesterday to start the streak
        if (activities.length > 0) {
            const lastActivityDate = new Date(activities[0].date);
            lastActivityDate.setHours(0, 0, 0, 0);

            // If last activity was today or yesterday, we have an active streak
            if (lastActivityDate.getTime() === today.getTime() || lastActivityDate.getTime() === yesterday.getTime()) {
                streak = 1;
                // Iterate backwards
                for (let i = 0; i < activities.length - 1; i++) {
                    const current = new Date(activities[i].date);
                    const previous = new Date(activities[i + 1].date);

                    current.setHours(0, 0, 0, 0);
                    previous.setHours(0, 0, 0, 0);

                    const diffTime = Math.abs(current.getTime() - previous.getTime());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    if (diffDays === 1) {
                        streak++;
                    } else {
                        break;
                    }
                }
            }
        }

        // Fetch recent activity
        const recentProblems = await Problem.find({ user: userId })
            .sort({ updatedAt: -1 })
            .limit(5);

        return NextResponse.json({
            totalSolved,
            hardSolved,
            streak,
            studyHours: 0, // Still placeholder, requires time tracking
            recentProblems,
        }, { status: 200 });
    } catch (error) {
        console.error('Dashboard Stats Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
