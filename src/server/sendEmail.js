import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export async function sendPartnershipEmail(to, subject, body) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: body
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export async function sendHelpSeekEmail(to, subject, data) {
    const emailBody = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join('\n');
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: emailBody
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Help Seek Email sent successfully');
    } catch (error) {
        console.error('Error sending help seek email:', error);
        throw error;
    }
}
