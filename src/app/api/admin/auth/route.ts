import { NextRequest, NextResponse } from 'next/server';
import { createToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        if (
            username === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD
        ) {
            const token = await createToken({ role: 'admin' });
            
            const response = NextResponse.json({ success: true });
            response.cookies.set('auth_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24, // 24 hours
                path: '/',
            });

            // Add non-httpOnly hint cookies for the client-side UI
            response.cookies.set('is_logged_in', 'true', {
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
                path: '/',
            });

            response.cookies.set('user_role', 'admin', {
                httpOnly: false,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
                path: '/',
            });
            
            return response;
        }

        return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error logging in' }, { status: 500 });
    }
}
