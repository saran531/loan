const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const { sendEnquiryMail, verifyConnection } = require('./mailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middlewares
// Limit JSON payload size to 10kb to prevent payload abuse
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Handle malformed JSON body
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ success: false, message: 'Invalid JSON payload received.' });
  }
  next(err);
});

// CORS setup
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((o) => o.trim())
  : ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:4173'];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, postman) or if in allowed list
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        return callback(null, true);
      }
      return callback(null, true); // Dev-friendly fallback
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
  })
);

// Simple In-Memory Rate Limiting (15 requests per 15 minutes per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 mins
const MAX_REQUESTS_PER_WINDOW = 15;

// Clean up stale rate limit entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now - data.startTime > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}, 10 * 60 * 1000);

function rateLimiter(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress || 'unknown-ip';
  const now = Date.now();

  const record = rateLimitMap.get(ip);
  if (!record || now - record.startTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return next();
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      message: 'Too many enquiries submitted from this network. Please wait a few minutes before trying again or reach us directly by phone.'
    });
  }

  record.count += 1;
  next();
}

// Utility: Sanitize and escape HTML entities to prevent HTML injection in emails
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Format date and time
function getFormattedTimestamp() {
  return new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });
}

// Generate stylized HTML email
function buildEmailTemplate({ title, subtitle, badgeColor, fields }) {
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

// Build Plaintext alternative
function buildPlainText({ title, fields }) {
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Balaji Associates Form Mailer API',
    timestamp: new Date().toISOString()
  });
});

/**
 * Endpoint 1: Loan Enquiry Form Submission
 * URL: /api/enquiry/loan (and alias /api/loan-enquiry)
 */
async function handleLoanEnquiry(req, res) {
  try {
    const {
      name,
      mobile,
      city,
      loanType,
      approxAmount,
      employmentType,
      message,
      callbackTime,
      consent
    } = req.body || {};

    // Validate required fields
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Full name is required.' });
    }
    if (!mobile || typeof mobile !== 'string' || !mobile.trim()) {
      return res.status(400).json({ success: false, message: 'Mobile number is required.' });
    }
    // Mobile validation: digits and allowed formatting characters (+, -, space), min 10 digits
    const cleanedDigits = mobile.replace(/\D/g, '');
    if (cleanedDigits.length < 10) {
      return res.status(400).json({ success: false, message: 'Please provide a valid 10-digit mobile number.' });
    }
    if (!city || typeof city !== 'string' || !city.trim()) {
      return res.status(400).json({ success: false, message: 'City is required.' });
    }
    if (!loanType || typeof loanType !== 'string' || !loanType.trim()) {
      return res.status(400).json({ success: false, message: 'Please select a Loan Type.' });
    }
    if (!consent || consent !== true && consent !== 'true') {
      return res.status(400).json({ success: false, message: 'Please accept the consent checkbox to be contacted.' });
    }

    const fields = [
      { label: 'Customer Name', value: name.trim() },
      { label: 'Mobile Number', value: mobile.trim() },
      { label: 'City', value: city.trim() },
      { label: 'Loan Type Required', value: loanType.trim() },
      { label: 'Approximate Amount', value: approxAmount ? approxAmount.trim() : 'Not specified' },
      { label: 'Employment Type', value: employmentType ? employmentType.trim() : 'Not specified' },
      { label: 'Preferred Callback Time', value: callbackTime ? callbackTime.trim() : 'Any time' },
      { label: 'Short Message', value: message ? message.trim() : 'No additional message' },
      { label: 'Consent to Contact', value: 'Yes, consent granted' }
    ];

    const subject = `[Loan Enquiry] ${loanType.trim()} - ${name.trim()}`;
    const htmlContent = buildEmailTemplate({
      title: 'New Loan Enquiry Received',
      subtitle: 'Loan Consultation Request',
      badgeColor: '#D97706',
      fields
    });
    const textContent = buildPlainText({
      title: 'New Loan Enquiry Received',
      fields
    });

    // Send email using Nodemailer module
    await sendEnquiryMail({
      subject,
      htmlContent,
      textContent
    });

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your loan enquiry has been successfully submitted. Our team will contact you shortly.'
    });
  } catch (error) {
    console.error('[Error handling Loan Enquiry]:', error.message);
    return res.status(500).json({
      success: false,
      message: error.message || 'Unable to submit your loan enquiry at this time. Please try again later or call us directly.'
    });
  }
}

/**
 * Endpoint 2: Insurance Enquiry Form Submission
 * URL: /api/enquiry/insurance (and alias /api/insurance-enquiry)
 */
async function handleInsuranceEnquiry(req, res) {
  try {
    const {
      name,
      mobile,
      city,
      insuranceType,
      policyCategory,
      message,
      callbackTime,
      consent
    } = req.body || {};

    // Validate required fields
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Full name is required.' });
    }
    if (!mobile || typeof mobile !== 'string' || !mobile.trim()) {
      return res.status(400).json({ success: false, message: 'Mobile number is required.' });
    }
    const cleanedDigits = mobile.replace(/\D/g, '');
    if (cleanedDigits.length < 10) {
      return res.status(400).json({ success: false, message: 'Please provide a valid 10-digit mobile number.' });
    }
    if (!city || typeof city !== 'string' || !city.trim()) {
      return res.status(400).json({ success: false, message: 'City is required.' });
    }
    if (!consent || consent !== true && consent !== 'true') {
      return res.status(400).json({ success: false, message: 'Please accept the consent checkbox to be contacted.' });
    }

    const fields = [
      { label: 'Customer Name', value: name.trim() },
      { label: 'Mobile Number', value: mobile.trim() },
      { label: 'City', value: city.trim() },
      { label: 'Insurance Type', value: insuranceType ? insuranceType.trim() : 'General Insurance' },
      { label: 'Policy Category', value: policyCategory ? policyCategory.trim() : 'Not specified' },
      { label: 'Preferred Callback Time', value: callbackTime ? callbackTime.trim() : 'Any time' },
      { label: 'Short Message', value: message ? message.trim() : 'No additional message' },
      { label: 'Consent to Contact', value: 'Yes, consent granted' }
    ];

    const typeLabel = insuranceType ? insuranceType.trim() : 'General Insurance';
    const subject = `[Insurance Enquiry] ${typeLabel} - ${name.trim()}`;
    const htmlContent = buildEmailTemplate({
      title: 'New Insurance Enquiry Received',
      subtitle: 'Insurance Consultation Request',
      badgeColor: '#16A34A',
      fields
    });
    const textContent = buildPlainText({
      title: 'New Insurance Enquiry Received',
      fields
    });

    // Send email using Nodemailer module
    await sendEnquiryMail({
      subject,
      htmlContent,
      textContent
    });

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your insurance enquiry has been successfully submitted. Our team will contact you shortly.'
    });
  } catch (error) {
    console.error('[Error handling Insurance Enquiry]:', error.message);
    return res.status(500).json({
      success: false,
      message: error.message || 'Unable to submit your insurance enquiry at this time. Please try again later or call us directly.'
    });
  }
}

// Routes with rate limiting applied
app.post('/api/enquiry/loan', rateLimiter, handleLoanEnquiry);
app.post('/api/loan-enquiry', rateLimiter, handleLoanEnquiry);

app.post('/api/enquiry/insurance', rateLimiter, handleInsuranceEnquiry);
app.post('/api/insurance-enquiry', rateLimiter, handleInsuranceEnquiry);

// Generic /api/enquiry router if called with type
app.post('/api/enquiry', rateLimiter, (req, res) => {
  const type = req.body?.type || req.query?.type;
  if (type === 'insurance') {
    return handleInsuranceEnquiry(req, res);
  }
  return handleLoanEnquiry(req, res);
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'API route not found' });
});

// Central error handler
app.use((err, req, res, next) => {
  console.error('[Unhandled Server Error]:', err.message);
  res.status(500).json({
    success: false,
    message: 'An unexpected server error occurred. Please try again later.'
  });
});

// Start Server
app.listen(PORT, async () => {
  console.log(`\n=================================================`);
  console.log(`  Balaji Associates Backend Server Started`);
  console.log(`  Port: ${PORT}`);
  console.log(`  Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=================================================\n`);

  // Verify SMTP connection on startup if credentials exist
  await verifyConnection();
});
