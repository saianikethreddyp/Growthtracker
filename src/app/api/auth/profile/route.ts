import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';
import { verifyToken, hashPassword, comparePassword } from '@/lib/auth';
import { cookies } from 'next/headers';
import { z } from 'zod';

const updateProfileSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    currentPassword: z.string().optional(),
    newPassword: z.string().min(6).optional(),
});

async function getUser(req: Request) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) return null;

    const decoded = verifyToken(token);
    return decoded ? decoded.userId : null;
}

export async function PATCH(req: Request) {
    try {
        const userId = await getUser(req);
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectToDatabase();
        const body = await req.json();
        const result = updateProfileSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: result.error.issues[0].message },
                { status: 400 }
            );
        }

        const { name, email, currentPassword, newPassword } = result.data;
        const user = await User.findById(userId).select('+password');

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Update Basic Info
        if (name) user.name = name;
        if (email && email !== user.email) {
            // Check for duplicate email
            const existing = await User.findOne({ email });
            if (existing) {
                return NextResponse.json(
                    { error: 'Email already in use' },
                    { status: 409 }
                );
            }
            user.email = email;
        }

        // Update Password
        if (newPassword) {
            if (!currentPassword) {
                return NextResponse.json(
                    { error: 'Current password is required to set new password' },
                    { status: 400 }
                );
            }

            const isMatch = await comparePassword(currentPassword, user.password!);
            if (!isMatch) {
                return NextResponse.json(
                    { error: 'Incorrect current password' },
                    { status: 401 }
                );
            }

            user.password = await hashPassword(newPassword);
        }

        await user.save();

        return NextResponse.json({
            message: 'Profile updated successfully',
            user: { name: user.name, email: user.email }
        }, { status: 200 });

    } catch (error) {
        console.error('Update Profile Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
