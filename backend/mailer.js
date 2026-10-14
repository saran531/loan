const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const nodemailer = require('nodemailer');

// Validate required environment variables at startup
function validateEnv() {
  const missing = [];
  if (!process.env.SMTP_USER) missing.push('SMTP_USER');
  if (!process.env.SMTP_PASS) missing.push('SMTP_PASS');
  if (!process.env.RECEIVER_EMAIL) missing.push('RECEIVER_EMAIL');

  if (missing.length > 0) {
    console.warn('\x1b[33m%s\x1b[0m', `[Mailer Warning] Missing SMTP environment variables in .env: ${missing.join(', ')}`);
    console.warn('\x1b[33m%s\x1b[0m', '[Mailer Warning] Form submissions will not be able to deliver emails until these credentials are provided.');
    return false;
  }
  return true;
}

const isConfigured = validateEnv();

// Create Nodemailer Transporter using port 465 and secure TLS
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  },
  tls: {
    // Reject unauthorized certificates for security
    rejectUnauthorized: true
  }
});

/**
 * Verify SMTP connection safely (without logging credentials)
 */
async function verifyConnection() {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('[Mailer] SMTP credentials not provided yet in backend/.env. Skipping SMTP verification.');
    return false;
  }

  try {
    await transporter.verify();
    console.log('\x1b[32m%s\x1b[0m', '[Mailer] SMTP Transporter successfully connected and ready to send emails.');
    return true;
  } catch (err) {
    console.error('\x1b[31m%s\x1b[0m', `[Mailer Error] SMTP connection verification failed: ${err.message}`);
    return false;
  }
}

/**
 * Send an enquiry email
 * @param {Object} options
 * @param {string} options.subject Email subject
 * @param {string} options.htmlContent HTML email body
 * @param {string} options.textContent Plaintext fallback
 * @param {string} [options.replyTo] Optional reply-to address
 * @returns {Promise<Object>}
 */
async function sendEnquiryMail({ subject, htmlContent, textContent, replyTo }) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.RECEIVER_EMAIL) {
    throw new Error('Email service is not configured yet. Please verify SMTP credentials in backend/.env.');
  }

  const mailOptions = {
    from: `"Balaji Associates Enquiry" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: subject,
    text: textContent,
    html: htmlContent
  };

  // Only attach replyTo if an explicit, valid address is provided
  if (replyTo && typeof replyTo === 'string' && replyTo.includes('@')) {
    mailOptions.replyTo = replyTo.trim();
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`[Mailer] Email sent successfully. Message ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    // Log safe error without exposing credentials
    console.error(`[Mailer Delivery Error] Failed to send email: ${error.message}`);
    throw new Error('Failed to send enquiry email. Please check SMTP configuration or try again later.');
  }
}

module.exports = {
  transporter,
  verifyConnection,
  sendEnquiryMail,
  isConfigured
};
