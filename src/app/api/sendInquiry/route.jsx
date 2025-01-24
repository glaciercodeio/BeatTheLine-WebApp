import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

export async function POST(req) {
    try {
        const { email, message } = await req.json();

        if (!email || !message) {
            return NextResponse.json({ success: false, message: 'Email and message are required' }, { status: 400 });
        }

        sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

        // Send email to your business with reply-to set to the user's email
        await sendgrid.send({
            to: 'jose@glaciercode.io',  // Your business email
            from: process.env.VERIFIED_SENDER_EMAIL,  // Your verified sender email
            replyTo: email,  // This ensures replies go to the user
            subject: 'New Inquiry from Contact Us Form',
            text: `You received a new message from: ${email}\n\nMessage: ${message}`,
        });

        return NextResponse.json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Error sending emails:', error);
        return NextResponse.json({ success: false, message: 'Error sending emails' }, { status: 500 });
    }
}
