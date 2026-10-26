export interface InquiryData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  submittedAt?: string;
}

export function generateAdminEmailHtml(data: InquiryData): string {
  const dateStr = data.submittedAt || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry - Nakshikar's Studio</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f1ea; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #2c2c2c; -webkit-text-size-adjust: 100%;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #f4f1ea; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.08); border: 1px solid #e2d9c8;">
          
          <!-- HEADER -->
          <tr>
            <td align="center" style="background-color: #ffffff; padding: 30px 24px; text-align: center; border-bottom: 3px solid #cca651;">
              <a href="https://nakshikarsstudio.com" target="_blank" style="text-decoration: none;">
                <img src="https://nakshikarsstudio.com/logo.png" alt="Nakshikar's Studio" style="display: block; margin: 0 auto; height: 50px; width: auto; border: 0;" />
              </a>
              <p style="margin: 10px 0 0 0; color: #cca651; font-size: 10px; text-transform: uppercase; font-weight: 600; letter-spacing: 2px;">
                NEW CLIENT ENQUIRY
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding: 36px 32px; background-color: #ffffff;">
              <p style="margin: 0 0 20px 0; font-size: 15px; color: #4a4a4a; leading-height: 1.6;">
                You have received a new inquiry from the <strong>Nakshikar's Studio</strong> website contact form.
              </p>

              <!-- CLIENT DETAILS CARD -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #faf8f5; border-radius: 12px; padding: 24px; border: 1px solid #ede6d8; margin-bottom: 24px;">
                <tr>
                  <td style="padding-bottom: 12px; width: 35%; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #16213e; font-weight: bold;">
                    Client Name
                  </td>
                  <td style="padding-bottom: 12px; font-size: 15px; color: #111111; font-weight: 600;">
                    ${escapeHtml(data.name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #16213e; font-weight: bold;">
                    Email Address
                  </td>
                  <td style="padding-bottom: 12px; font-size: 15px;">
                    <a href="mailto:${escapeHtml(data.email)}" style="color: #cca651; text-decoration: none; font-weight: 600;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #16213e; font-weight: bold;">
                    Phone Number
                  </td>
                  <td style="padding-bottom: 12px; font-size: 15px; color: #333333;">
                    ${data.phone ? `<a href="tel:${escapeHtml(data.phone)}" style="color: #16213e; text-decoration: none;">${escapeHtml(data.phone)}</a>` : '<em style="color:#999;">Not provided</em>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #16213e; font-weight: bold;">
                    Service Needed
                  </td>
                  <td style="padding-bottom: 12px; font-size: 14px;">
                    <span style="background-color: #16213e; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; display: inline-block;">
                      ${escapeHtml(data.service || 'General Inquiry')}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #16213e; font-weight: bold;">
                    Date & Time
                  </td>
                  <td style="font-size: 13px; color: #666666;">
                    ${dateStr}
                  </td>
                </tr>
              </table>

              <!-- PROJECT DETAILS / MESSAGE -->
              <h3 style="margin: 0 0 12px 0; font-family: Georgia, serif; font-size: 16px; color: #16213e;">
                Project Vision & Message:
              </h3>
              <div style="background-color: #ffffff; border-left: 4px solid #cca651; padding: 18px; border-radius: 0 10px 10px 0; font-size: 14px; line-height: 1.7; color: #333333; box-shadow: inset 0 0 0 1px #e8e2d5;">
                ${escapeHtml(data.message).replace(/\n/g, '<br>')}
              </div>

              <!-- ACTION BUTTON -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(data.email)}?subject=Re: Your Inquiry - Nakshikar's Studio" style="display: inline-block; background-color: #16213e; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; padding: 14px 28px; border-radius: 30px; border: 1px solid #cca651;">
                      Reply Directly to Client &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center" style="background-color: #faf8f5; padding: 24px 30px; border-top: 1px solid #e8e2d5; text-align: center;">
              <a href="https://nakshikarsstudio.com" target="_blank" style="text-decoration: none;">
                <img src="https://nakshikarsstudio.com/logo.png" alt="Nakshikar's Studio" style="display: block; margin: 0 auto 10px auto; height: 32px; width: auto; border: 0;" />
              </a>
              <p style="margin: 0 0 12px 0; font-size: 12px; color: #888888;">
                Pune, Maharashtra, India
              </p>
              <a href="https://nakshikarsstudio.com" target="_blank" style="color: #cca651; text-decoration: none; font-size: 13px; font-weight: 600;">
                Visit Website: nakshikarsstudio.com
              </a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function generateClientAutoReplyHtml(data: InquiryData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for reaching out - Nakshikar's Studio</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f1ea; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #2c2c2c;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #f4f1ea; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.08); border: 1px solid #e2d9c8;">
          
          <!-- HEADER -->
          <tr>
            <td align="center" style="background-color: #ffffff; padding: 30px 24px; text-align: center; border-bottom: 3px solid #cca651;">
              <a href="https://nakshikarsstudio.com" target="_blank" style="text-decoration: none;">
                <img src="https://nakshikarsstudio.com/logo.png" alt="Nakshikar's Studio" style="display: block; margin: 0 auto; height: 50px; width: auto; border: 0;" />
              </a>
              <p style="margin: 10px 0 0 0; color: #cca651; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">
                WHERE ART IS BORN
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding: 36px 32px; background-color: #ffffff;">
              <h2 style="margin: 0 0 16px 0; font-family: Georgia, serif; font-size: 22px; color: #16213e; font-weight: normal;">
                Dear ${escapeHtml(data.name)},
              </h2>
              <p style="margin: 0 0 16px 0; font-size: 15px; color: #4a4a4a; line-height: 1.6;">
                Thank you for reaching out to <strong>Nakshikar's Studio</strong>. We have successfully received your inquiry regarding <strong>${escapeHtml(data.service || 'our art services')}</strong>.
              </p>
              <p style="margin: 0 0 24px 0; font-size: 15px; color: #4a4a4a; line-height: 1.6;">
                Our creative team is reviewing your project requirements and will get back to you within <strong>1 business day</strong> to discuss how we can bring your artistic vision to life.
              </p>

              <!-- SUMMARY BOX -->
              <div style="background-color: #faf8f5; border-radius: 12px; padding: 20px; border: 1px solid #ede6d8; margin-bottom: 28px;">
                <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #cca651; font-weight: bold;">
                  Summary of your inquiry:
                </p>
                <p style="margin: 0; font-size: 14px; color: #333333; font-style: italic; line-height: 1.5;">
                  "${escapeHtml(data.message)}"
                </p>
              </div>

              <!-- CTA BUTTON -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="https://nakshikarsstudio.com" target="_blank" style="display: inline-block; background-color: #cca651; background: linear-gradient(135deg, #cca651 0%, #b8923d 100%); color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; padding: 14px 30px; border-radius: 30px; box-shadow: 0 4px 15px rgba(204,166,81,0.3);">
                      Explore Our Portfolio &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center" style="background-color: #faf8f5; padding: 24px 30px; border-top: 1px solid #e8e2d5; text-align: center;">
              <a href="https://nakshikarsstudio.com" target="_blank" style="text-decoration: none;">
                <img src="https://nakshikarsstudio.com/logo.png" alt="Nakshikar's Studio" style="display: block; margin: 0 auto 10px auto; height: 32px; width: auto; border: 0;" />
              </a>
              <p style="margin: 0 0 10px 0; font-size: 12px; color: #666666;">
                Paintings • Murals • Sculptures • Signages • Branding • Custom Art
              </p>
              <p style="margin: 0; font-size: 12px; color: #888888;">
                Email: studio@nakshikars.com | Web: <a href="https://nakshikarsstudio.com" style="color: #cca651; text-decoration: none;">nakshikarsstudio.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
