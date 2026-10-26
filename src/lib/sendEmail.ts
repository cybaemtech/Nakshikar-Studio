import nodemailer from 'nodemailer';
import { generateAdminEmailHtml, generateClientAutoReplyHtml, InquiryData } from './emailTemplates';

export async function sendContactEmails(data: InquiryData) {
  const smtpHost = process.env.SMTP_HOST || 'nakshikarsstudio.com';
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER || 'noreply@nakshikarsstudio.com';
  const smtpPass = process.env.SMTP_PASS || 'Cloud@023$';
  const adminEmail = process.env.ADMIN_EMAIL || 'sandesh.j@nakshikarsstudio.com';

  const isSecure = smtpPort === 465;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: isSecure,
    pool: true, // Enable connection pooling to reuse sockets for multiple messages
    maxConnections: 3,
    maxMessages: 10,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: { rejectUnauthorized: false },
  });

  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const dataWithTime: InquiryData = { ...data, submittedAt };

  const adminHtml = generateAdminEmailHtml(dataWithTime);
  const clientHtml = generateClientAutoReplyHtml(dataWithTime);

  // Define email sending promises to execute them concurrently
  const adminPromise = transporter.sendMail({
    from: `"Nakshikar's Studio Website" <${smtpUser}>`,
    to: adminEmail,
    replyTo: data.email,
    subject: `🎨 New Inquiry: ${data.name} — ${data.service || 'General'}`,
    html: adminHtml,
  });

  let clientPromise: Promise<any> = Promise.resolve(null);
  if (data.email && data.email.includes('@')) {
    clientPromise = transporter.sendMail({
      from: `"Nakshikar's Studio" <${smtpUser}>`,
      to: data.email,
      subject: `Thank you for reaching out — Nakshikar's Studio`,
      html: clientHtml,
    }).catch((clientErr) => {
      console.warn('Auto-reply to client failed:', clientErr);
      return null;
    });
  }

  // Run both email dispatches concurrently (parallel)
  const [adminResult] = await Promise.all([adminPromise, clientPromise]);

  return adminResult;
}
