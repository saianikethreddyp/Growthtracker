import connectToDatabase from '@/lib/db';
import ActivityLog from '@/models/ActivityLog';

export async function logActivity(userId: string, action: 'ProblemSolved' | 'Login' | 'StudySession', details?: string) {
    await connectToDatabase();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if activity already exists for today (to avoid duplicate streak counts if we only care about "did something today")
    // Or we can just log everything. For streaks, we care about unique days.
    // Let's just log it. We can aggregate distinct days later.

    await ActivityLog.create({
        user: userId,
        action,
        date: today,
        details
    });
}
