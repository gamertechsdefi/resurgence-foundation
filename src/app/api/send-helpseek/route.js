import { NextResponse } from 'next/server';
import { sendHelpSeekEmail } from '../../../server/sendEmail';

export async function POST(request) {
    try {
        const data = await request.json();
        const emailBody = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join('\n');
        const subject = "Help Seek Form Submission";
await sendHelpSeekEmail('Theresurgencefoundation@gmail.com', subject, data);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
