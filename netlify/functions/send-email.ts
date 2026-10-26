export async function handler(event: any) {
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers: { 'Allow': 'POST' },
      body: 'Method Not Allowed' 
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { sendContactEmails } = await import('../../src/lib/sendEmail');
    await sendContactEmails(data);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Email sent successfully!' }),
    };
  } catch (err: any) {
    console.error('Netlify Function Email Error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, error: err.message || 'Failed to send email' }),
    };
  }
}
