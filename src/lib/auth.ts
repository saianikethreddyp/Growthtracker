import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET!;

if (!JWT_SECRET) {
    throw new Error('Please define the JWT_SECRET environment variable');
}

export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export async function comparePassword(
    plainText: string,
    hashed: string
): Promise<boolean> {
    return await bcrypt.compare(plainText, hashed);
}

export function signToken(payload: any): string {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: '7d', // Token valid for 7 days
    });
}

export function verifyToken(token: string): any {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}
