export async function POST(request) {
    const data = await request.json();
    const { sendPartnershipEmail } = await import('../../../server/sendEmail.js');
    try {
        const emailBody = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join('\n');
        const subject = "Partnership Form Submission";
        await sendPartnershipEmail('Theresurgencefoundation@gmail.com', subject, emailBody);
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
