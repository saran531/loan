import { sendEnquiryMail, buildEmailTemplate, buildPlainText } from '../lib/mailer.js';

export default async function handler(req, res) {
  // CORS support
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ success: false, message: 'Invalid JSON payload received.' });
      }
    }

    if (!body || typeof body !== 'object') {
      return res.status(400).json({ success: false, message: 'Invalid request body.' });
    }

    // Safety: check payload size (< 10KB)
    if (JSON.stringify(body).length > 10240) {
      return res.status(413).json({ success: false, message: 'Payload too large.' });
    }

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
    } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Full name is required.' });
    }
    if (!mobile || typeof mobile !== 'string' || !mobile.trim()) {
      return res.status(400).json({ success: false, message: 'Mobile number is required.' });
    }
    const cleanDigits = mobile.replace(/\D/g, '');
    if (cleanDigits.length < 10) {
      return res.status(400).json({ success: false, message: 'Please provide a valid 10-digit mobile number.' });
    }
    if (!city || typeof city !== 'string' || !city.trim()) {
      return res.status(400).json({ success: false, message: 'City is required.' });
    }
    if (!loanType || typeof loanType !== 'string' || !loanType.trim()) {
      return res.status(400).json({ success: false, message: 'Please select a Loan Type.' });
    }
    if (!consent || (consent !== true && consent !== 'true')) {
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
