import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: `${name} <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `${subject}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#09090f;color:#fff;border-radius:16px">
          <h2 style="margin:0 0 24px;color:#646cff">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#8888aa;width:80px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#8888aa">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#00d4ff">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#8888aa">Subject</td><td style="padding:8px 0;font-weight:600">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid rgba(100,108,255,0.2);margin:24px 0"/>
          <p style="color:#8888aa;margin:0 0 8px;font-size:0.85rem;text-transform:uppercase;letter-spacing:1px">Message</p>
          <p style="margin:0;line-height:1.8;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
