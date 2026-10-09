export const mainNavigation = [
  { label: 'Home', path: '/' },
  { label: 'Loans', path: '/home-property-loans/', hasDropdown: true, key: 'loans' },
  { label: 'Insurance', path: '/insurance/', hasDropdown: true, key: 'insurance' },
  { label: 'About', path: '/about/' },
  { label: 'Resources', path: '/resources/' },
  { label: 'FAQs', path: '/faq/' },
  { label: 'Contact', path: '/contact/' },
];

export const loansDropdown = [
  { label: 'Home & Property', path: '/home-property-loans/' },
  { label: 'Mortgage / LAP', path: '/mortgage-loan-against-property/' },
  { label: 'Business & MSME', path: '/business-msme-loans/' },
  { label: 'Machinery & Equipment', path: '/machinery-equipment-finance/' },
  { label: 'Working Capital', path: '/working-capital-finance/' },
  { label: 'Personal & Car', path: '/personal-car-loans/' },
  { label: 'Education & Agri', path: '/education-agri-finance/' },
];

export const insuranceDropdown = [
  { label: 'Insurance Overview', path: '/insurance/' },
  { label: 'Health', path: '/health-insurance-madurai/' },
  { label: 'Motor', path: '/motor-insurance-madurai/' },
  { label: 'SME & Business', path: '/sme-business-insurance/' },
  { label: 'Travel', path: '/travel-insurance-madurai/' },
  { label: 'Home', path: '/home-insurance-madurai/' },
];

export const dropdowns = {
  loans: loansDropdown,
  insurance: insuranceDropdown,
};

export const footerLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy/' },
  { label: 'Terms', path: '/terms/' },
  { label: 'Disclaimer', path: '/disclaimer/' },
];

export default mainNavigation;
