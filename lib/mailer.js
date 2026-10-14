import nodemailer from 'nodemailer';

/**
 * Utility: Sanitize and escape HTML entities to prevent HTML injection in emails
 */
export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Format timestamp in Indian Standard Time (IST)
 */
export function getFormattedTimestamp() {
  return new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });
}

/**
 * Build stylized, branded HTML email for Balaji Associates enquiries
 */
export function buildEmailTemplate({ title, subtitle, badgeColor, fields }) {
  const timestamp = getFormattedTimestamp();

  const rows = fields
    .map(
      (f) => `
      <tr>
        <td style="padding: 10px 14px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569; width: 35%; background-color: #F8FAFC;">
          ${escapeHtml(f.label)}
        </td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">
          ${escapeHtml(f.value || 'Not provided')}
        </td>
      </tr>
    `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${escapeHtml(title)}</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F1F5F9; margin: 0; padding: 24px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.08); border: 1px solid #E2E8F0;">
        <!-- Header -->
        <tr>
          <td style="background: linear-gradient(135deg, #071329 0%, #0A1B3A 100%); padding: 24px; text-align: center;">
            <h1 style="color: #FFFFFF; margin: 0 0 6px 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">
              BALAJI ASSOCIATES
            </h1>
            <p style="color: #94A3B8; margin: 0; font-size: 13px;">
              Official Website Form Notification
            </p>
          </td>
        </tr>

        <!-- Badge & Title -->
        <tr>
          <td style="padding: 24px 24px 12px 24px;">
            <div style="display: inline-block; background-color: ${badgeColor}; color: #FFFFFF; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; margin-bottom: 10px;">
              ${escapeHtml(subtitle)}
            </div>
            <h2 style="color: #0A1B3A; margin: 0 0 8px 0; font-size: 18px;">
              ${escapeHtml(title)}
            </h2>
            <p style="color: #64748B; margin: 0; font-size: 13px;">
              A new prospective client submitted an enquiry through the website contact page. Details are below:
            </p>
          </td>
        </tr>

        <!-- Table Details -->
        <tr>
          <td style="padding: 12px 24px 24px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; font-size: 14px;">
              ${rows}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #F8FAFC; padding: 16px 24px; border-top: 1px solid #E2E8F0; text-align: center; color: #64748B; font-size: 12px;">
            <p style="margin: 0 0 4px 0;">Received at: <strong>${timestamp}</strong></p>
            <p style="margin: 0;">Balaji Associates &bull; 86/1, 2nd Floor, Vakkil New Street, Simmakkal, Madurai - 625001</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

/**
 * Build Plaintext alternative email
 */
export function buildPlainText({ title, fields }) {
  const timestamp = getFormattedTimestamp();
  let text = `=========================================\n`;
  text += `BALAJI ASSOCIATES - ${title.toUpperCase()}\n`;
  text += `Received at: ${timestamp}\n`;
  text += `=========================================\n\n`;

  fields.forEach((f) => {
    text += `${f.label}: ${f.value || 'Not provided'}\n`;
  });

  text += `\n---\nSent from Balaji Associates Website Contact Page\n`;
  return text;
}

/**
 * Create Nodemailer transporter
 */
export function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    },
    tls: {
      rejectUnauthorized: true
    }
  });
}

/**
 * Send an enquiry email using Nodemailer
 */
export async function sendEnquiryMail({ subject, htmlContent, textContent, replyTo }) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.RECEIVER_EMAIL;

  if (!user || !pass || !receiver) {
    throw new Error('Email service credentials are not configured in environment variables.');
  }

  const transporter = createTransporter();

  const mailOptions = {
    from: `"Balaji Associates Enquiry" <${user}>`,
    to: receiver,
    subject: subject,
    text: textContent,
    html: htmlContent
  };

  if (replyTo && typeof replyTo === 'string' && replyTo.includes('@')) {
    mailOptions.replyTo = replyTo.trim();
  }

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}
