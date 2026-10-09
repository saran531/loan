import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  House,
  ChevronRight,
  ArrowRight,
  Phone,
  Search,
  Plus,
  Minus,
  Coins,
  ShieldCheck,
  ClipboardCheck,
  CircleHelp,
  MapPin,
  Leaf,
  FileText,
  BriefcaseBusiness,
  CreditCard,
  Building2,
  ArrowLeftRight,
  Settings,
  HeartPulse,
  Heart,
  CarFront,
  Plane,
  Landmark,
  ChartNoAxesCombined,
  GraduationCap,
  Image as ImageIcon
} from 'lucide-react';

const loanFaqs = [
  {
    id: 'l-1',
    question: 'Which loan is right for my requirement?',
    icon: Leaf,
    answer: 'The ideal loan depends on your specific objective—such as buying property (Home Loan), unlocking property value (LAP), managing working capital (OD/CC), purchasing equipment (Machinery Finance), or expanding operations (Business Loan). We help evaluate your requirement to identify suitable options.'
  },
  {
    id: 'l-2',
    question: 'What documents do lenders usually ask for?',
    icon: FileText,
    answer: 'Standard documentation includes KYC (Aadhaar, PAN), proof of residence, last 6-12 months bank statements, income proof (IT returns with computations, P&L, balance sheets or salary slips), and relevant property or business registration papers.'
  },
  {
    id: 'l-3',
    question: 'Can self-employed people apply for loans?',
    icon: BriefcaseBusiness,
    answer: 'Yes. Self-employed professionals and business owners can apply by demonstrating business continuity, banking track record, audited financials/IT returns, and valid registration proof.'
  },
  {
    id: 'l-4',
    question: 'Can I get a loan with existing EMIs?',
    icon: CreditCard,
    answer: 'Yes, subject to your Total Debt Service Ratio (FOIR/DBR). Lenders assess your net monthly income against total existing obligations to verify sufficient repayment buffer for the requested loan.'
  },
  {
    id: 'l-5',
    question: 'What is Loan Against Property?',
    icon: Building2,
    answer: 'Loan Against Property (LAP) is a secured term loan or mortgage facility where borrowers pledge an existing residential, commercial, or industrial property to access funds for business expansion, working capital, or personal financial requirements.'
  },
  {
    id: 'l-6',
    question: 'What is the difference between OD and CC?',
    icon: ArrowLeftRight,
    answer: 'Cash Credit (CC) is typically backed by current assets such as hypothecation of stock and book debts to finance day-to-day working capital. Overdraft (OD) is a credit facility against collateral, deposits, or financial assets permitting withdrawals beyond available balance up to an agreed limit.'
  },
  {
    id: 'l-7',
    question: 'What is CGTMSE?',
    icon: ShieldCheck,
    answer: 'CGTMSE is a credit-guarantee framework set up by the Ministry of MSME and SIDBI that provides collateral guarantees to eligible credit facilities extended by registered Member Lending Institutions to qualifying Micro and Small Enterprises. CGTMSE does not directly sanction loans.'
  },
  {
    id: 'l-8',
    question: 'Does CGTMSE guarantee approval?',
    icon: Settings,
    answer: 'No. Loan sanction remains entirely at the discretion of the lending Bank or NBFC. The lender evaluates the applicant\'s business viability, cash flow, and repayment capability before deciding whether to sanction and apply for CGTMSE coverage.'
  }
];

const insuranceFaqs = [
  {
    id: 'i-1',
    question: 'What should I compare in health insurance?',
    icon: HeartPulse,
    answer: 'Compare room rent caps, ICU limits, co-payments, pre- and post-hospitalisation periods, waiting periods for pre-existing diseases, network hospital cashless tie-ups, daycare procedures, and sub-limits rather than premium alone.'
  },
  {
    id: 'i-2',
    question: 'What is the difference between third-party and comprehensive motor insurance?',
    icon: CarFront,
    answer: 'Third-party insurance is legally mandatory and covers third-party bodily injury, death, and property damage. Comprehensive insurance covers both mandatory third-party liability and own damage to your vehicle from accidents, theft, fire, and natural disasters.'
  },
  {
    id: 'i-3',
    question: 'What is SME insurance?',
    icon: BriefcaseBusiness,
    answer: 'SME insurance protects small and medium enterprises against operational risks, including fire and allied perils, burglary, machinery breakdown, business interruption, public liability, and group health/personal accident for employees.'
  },
  {
    id: 'i-4',
    question: 'Does travel insurance cover every cancellation or delay?',
    icon: Plane,
    answer: 'No. Travel policies cover specific named events such as medical emergencies, trip delay, or baggage loss defined in policy terms. Routine cancellations, known circumstances, or unapproved reasons are excluded.'
  },
  {
    id: 'i-5',
    question: 'Does home insurance cover the building and contents?',
    icon: House,
    answer: 'Standard policies can cover structure (reconstruction cost of building), contents (furniture, appliances, valuables), or both against named perils like fire, lightning, storm, and flood based on selected coverage.'
  },
  {
    id: 'i-6',
    question: 'Can Balaji Associates guarantee an insurance claim?',
    icon: ShieldCheck,
    answer: 'No. Balaji Associates assists with policy understanding and claim documentation. Underwriting, policy issuance, claim assessment, and settlements are strictly governed by the authorised insurance company and policy wording.'
  },
  {
    id: 'i-7',
    question: 'Can Balaji Associates guarantee a loan?',
    icon: Landmark,
    answer: 'No. Balaji Associates provides loan consultancy and application guidance. Final loan approval, interest rate, tenure, and disbursement are strictly determined by the lending Bank or NBFC.'
  }
];

const relatedLoanPages = [
  { label: 'Home & Property Loans', icon: House, path: '/home-property-loans/' },
  { label: 'Mortgage & Loan Against Property', icon: Building2, path: '/mortgage-loan-against-property/' },
  { label: 'Business & MSME Loans', icon: BriefcaseBusiness, path: '/business-msme-loans/' },
  { label: 'Machinery & Equipment Finance', icon: Settings, path: '/machinery-equipment-finance/' },
  { label: 'Working Capital Finance', icon: ChartNoAxesCombined, path: '/working-capital-finance/' },
  { label: 'Personal & Car Loans', icon: CarFront, path: '/personal-car-loans/' },
  { label: 'Education & Agri Finance', icon: GraduationCap, path: '/education-agri-finance/' }
];

const relatedInsurancePages = [
  { label: 'Insurance Services', icon: FileText, path: '/insurance/' },
  { label: 'Health Insurance', icon: Heart, path: '/health-insurance-madurai/' },
  { label: 'Motor Insurance', icon: CarFront, path: '/motor-insurance-madurai/' },
  { label: 'SME & Business Insurance', icon: BriefcaseBusiness, path: '/sme-business-insurance/' },
  { label: 'Travel Insurance', icon: Plane, path: '/travel-insurance-madurai/' },
  { label: 'Home Insurance', icon: House, path: '/home-insurance-madurai/' }
];

function FAQ() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openLoanIndex, setOpenLoanIndex] = useState(null);
  const [openInsuranceIndex, setOpenInsuranceIndex] = useState(null);

  const toggleLoanFaq = (idx) => {
    setOpenLoanIndex(openLoanIndex === idx ? null : idx);
  };

  const toggleInsuranceFaq = (idx) => {
    setOpenInsuranceIndex(openInsuranceIndex === idx ? null : idx);
  };

  const filteredLoanFaqs = useMemo(() => {
    if (activeFilter === 'Insurance') return [];
    if (!searchQuery.trim()) return loanFaqs;
    return loanFaqs.filter((item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeFilter, searchQuery]);

  const filteredInsuranceFaqs = useMemo(() => {
    if (activeFilter === 'Loan') return [];
    if (!searchQuery.trim()) return insuranceFaqs;
    return insuranceFaqs.filter((item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeFilter, searchQuery]);

  const showLoanColumn = activeFilter === 'All' || activeFilter === 'Loan';
  const showInsuranceColumn = activeFilter === 'All' || activeFilter === 'Insurance';

  return (
    <div className="faq-page">
      <style>{`
        /* Global Page & Container */
        .faq-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.5;
        }

        .faq-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Section Headings */
        .faq-section {
          padding: 30px 0;
        }

        .faq-header-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .faq-panel-title {
          font-size: 24px;
          font-weight: 700;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .faq-gold-line {
          width: 44px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* Breadcrumb */
        .faq-breadcrumb-bar {
          background-color: #FFFFFF;
          border-bottom: 1px solid #F1F5F9;
          padding: 10px 0;
        }

        .faq-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .faq-breadcrumb-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .faq-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .faq-breadcrumb-sep {
          width: 13px;
          height: 13px;
          color: #94A3B8;
        }

        .faq-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* HERO SECTION */
        .faq-hero-section {
          background: linear-gradient(135deg, #071329 0%, #0A1B3A 55%, #0F2856 100%);
          padding: 40px 0 46px 0;
          position: relative;
          overflow: hidden;
        }

        .faq-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 36px;
          align-items: center;
        }

        .faq-hero-left {
          display: flex;
          flex-direction: column;
        }

        .faq-hero-badge {
          color: #F59E0B;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.9px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .faq-hero-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 38px;
          line-height: 1.18;
          color: #FFFFFF;
          margin: 0 0 16px 0;
          letter-spacing: -0.4px;
        }

        .faq-hero-p {
          font-size: 14px;
          line-height: 1.65;
          color: #CBD5E1;
          margin: 0 0 20px 0;
          max-width: 580px;
        }

        .faq-hero-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          align-self: flex-start;
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          color: #0A1B3A;
          font-size: 13.5px;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.3);
          transition: all 0.2s ease;
        }

        .faq-hero-cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.4);
        }

        /* Hero Right Visual with Floating Cards */
        .faq-hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .faq-hero-img-box {
          position: relative;
          width: 100%;
          min-height: 320px;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
        }

        .faq-hero-float-card {
          position: absolute;
          z-index: 5;
          background-color: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 12px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
          white-space: nowrap;
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          transition: transform 0.2s ease;
        }

        .faq-hero-float-card:hover {
          transform: translateY(-2px);
        }

        .faq-float-loan {
          top: 18px;
          right: 20px;
        }

        .faq-float-insurance {
          top: 72px;
          right: 20px;
        }

        .faq-float-answers {
          top: 126px;
          right: 20px;
        }

        .faq-float-madurai {
          bottom: 24px;
          right: 20px;
        }

        /* CATEGORY NAVIGATION & SEARCH BAR */
        .faq-controls-bar {
          background-color: #FFFFFF;
          padding: 20px 0 12px 0;
        }

        .faq-controls-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .faq-cat-cards-group {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .faq-cat-card-loan {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0A1B3A;
          color: #FFFFFF;
          border-radius: 10px;
          padding: 9px 18px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid #0A1B3A;
          transition: all 0.2s ease;
        }

        .faq-cat-card-loan:hover {
          background: #10264E;
          transform: translateY(-1px);
        }

        .faq-cat-card-ins {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          color: #0A1B3A;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 9px 18px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(10, 27, 58, 0.03);
          transition: all 0.2s ease;
        }

        .faq-cat-card-ins:hover {
          border-color: #CBD5E1;
          background-color: #F8FAFC;
          transform: translateY(-1px);
        }

        .faq-search-filter-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .faq-search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 7px 14px;
          min-width: 250px;
          transition: border-color 0.2s;
        }

        .faq-search-box:focus-within {
          border-color: #0A1B3A;
        }

        .faq-search-input {
          border: none;
          outline: none;
          font-size: 13px;
          color: #1E293B;
          width: 100%;
          background: transparent;
        }

        .faq-filter-pills {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .faq-filter-pill {
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 12.5px;
          font-weight: 600;
          border: 1px solid #E2E8F0;
          background-color: #FFFFFF;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .faq-filter-pill.active {
          background-color: #0A1B3A;
          color: #FFFFFF;
          border-color: #0A1B3A;
        }

        .faq-filter-pill:hover:not(.active) {
          background-color: #F8FAFC;
          border-color: #CBD5E1;
        }

        /* TWO-COLUMN MAIN FAQ PANELS */
        .faq-main-grid {
          display: grid;
          grid-template-columns: ${
            activeFilter === 'All'
              ? '1fr 1fr'
              : '1fr'
          };
          gap: 24px;
          align-items: start;
        }

        .faq-panel {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 4px 16px rgba(10, 27, 58, 0.03);
          display: flex;
          flex-direction: column;
        }

        .faq-panel-header-img {
          width: 100%;
          height: 120px;
          border-radius: 12px;
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 18px;
          padding: 12px;
        }

        /* Accordion List */
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        .faq-item-card {
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          background-color: #FFFFFF;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .faq-item-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 2px 8px rgba(10, 27, 58, 0.04);
        }

        .faq-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          cursor: pointer;
          gap: 12px;
          user-select: none;
        }

        .faq-item-left {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .faq-item-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .faq-item-question {
          font-size: 13.5px;
          font-weight: 600;
          color: #0A1B3A;
          line-height: 1.35;
        }

        .faq-toggle-icon {
          width: 16px;
          height: 16px;
          color: #0284C7;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .faq-item-body {
          padding: 0 14px 14px 42px;
          font-size: 13px;
          line-height: 1.6;
          color: #475569;
          border-top: 1px dashed #F1F5F9;
          background-color: #FAFCFF;
          padding-top: 10px;
        }

        /* Related Service Pages within Panels */
        .faq-subheading {
          font-size: 14px;
          font-weight: 700;
          color: #0A1B3A;
          margin: 0 0 12px 0;
        }

        .faq-related-grid-3col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .faq-related-grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .faq-service-link-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          gap: 6px;
          box-shadow: 0 1px 4px rgba(10, 27, 58, 0.02);
          transition: all 0.2s ease;
        }

        .faq-service-link-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 3px 8px rgba(10, 27, 58, 0.05);
          transform: translateY(-1px);
        }

        .faq-service-left {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
        }

        .faq-service-icon {
          width: 14px;
          height: 14px;
          color: #0A1B3A;
          flex-shrink: 0;
        }

        .faq-service-label {
          font-size: 11px;
          font-weight: 600;
          color: #0A1B3A;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .faq-service-arrow {
          width: 11px;
          height: 11px;
          color: #0284C7;
          flex-shrink: 0;
        }

        /* RESOURCE PROCESS BANNER */
        .faq-process-banner {
          background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%);
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 18px 24px;
          box-shadow: 0 4px 16px rgba(10, 27, 58, 0.03);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 24px;
          margin: 24px 0 20px 0;
        }

        .faq-process-img-box {
          background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%);
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          height: 110px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10px;
        }

        .faq-process-icons-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .faq-process-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(10, 27, 58, 0.1);
        }

        .faq-process-circle-navy {
          background-color: #0A1B3A;
          color: #FFFFFF;
        }

        .faq-process-circle-green {
          background-color: #16A34A;
          color: #FFFFFF;
        }

        .faq-process-arrow {
          width: 18px;
          height: 18px;
          color: #0284C7;
        }

        /* DISCLAIMER STRIPS */
        .faq-disclaimers-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 10px 0 24px 0;
        }

        .faq-disclaimer-card {
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          border: 1px solid transparent;
        }

        .faq-disclaimer-loan {
          background-color: #EFF6FF;
          border-color: #BFDBFE;
        }

        .faq-disclaimer-insurance {
          background-color: #FEF9EE;
          border-color: #FDE68A;
        }

        .faq-disclaimer-shield {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .faq-disclaimer-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .faq-disclaimer-heading {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
          margin: 0;
        }

        .faq-disclaimer-text {
          font-size: 11.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }

        /* BOTTOM CTA BANNER */
        .faq-bottom-cta-section {
          padding: 10px 0 36px 0;
        }

        .faq-bottom-cta-card {
          background: linear-gradient(135deg, #071329 0%, #0A1B3A 55%, #0F2856 100%);
          border-radius: 18px;
          padding: 24px 32px;
          display: grid;
          grid-template-columns: auto 1fr auto 240px;
          align-items: center;
          gap: 24px;
          box-shadow: 0 16px 40px rgba(10, 27, 58, 0.2);
          position: relative;
          overflow: hidden;
        }

        .faq-bottom-cta-phone-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0A1B3A;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.4);
          flex-shrink: 0;
        }

        .faq-bottom-cta-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .faq-bottom-cta-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 22px;
          line-height: 1.3;
          color: #FFFFFF;
          margin: 0;
        }

        .faq-bottom-cta-phone-link {
          color: #FFFFFF;
          text-decoration: none;
        }

        .faq-bottom-cta-phone-link:hover {
          text-decoration: underline;
        }

        .faq-bottom-cta-arrow-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0A1B3A;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.3);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .faq-bottom-cta-arrow-btn:hover {
          transform: scale(1.05);
        }

        .faq-bottom-cta-img-box {
          background: rgba(255, 255, 255, 0.08);
          border: 1px dashed rgba(255, 255, 255, 0.25);
          border-radius: 12px;
          height: 90px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 8px;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .faq-hero-grid {
            grid-template-columns: 1fr;
          }
          .faq-main-grid {
            grid-template-columns: 1fr;
          }
          .faq-bottom-cta-card {
            grid-template-columns: auto 1fr auto;
          }
          .faq-bottom-cta-img-box {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .faq-controls-flex {
            flex-direction: column;
            align-items: stretch;
          }
          .faq-cat-cards-group {
            flex-direction: column;
            width: 100%;
          }
          .faq-cat-card-loan,
          .faq-cat-card-ins {
            width: 100%;
            justify-content: center;
          }
          .faq-search-filter-group {
            flex-direction: column;
            width: 100%;
          }
          .faq-search-box {
            width: 100%;
          }
          .faq-filter-pills {
            width: 100%;
            justify-content: flex-start;
          }
          .faq-related-grid-3col {
            grid-template-columns: repeat(2, 1fr);
          }
          .faq-process-banner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .faq-process-icons-row {
            justify-content: center;
          }
          .faq-disclaimers-row {
            grid-template-columns: 1fr;
          }
          .faq-hero-title {
            font-size: 30px;
          }
          .faq-bottom-cta-card {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 16px;
          }
          .faq-bottom-cta-phone-icon,
          .faq-bottom-cta-arrow-btn {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .faq-related-grid-3col,
          .faq-related-grid-2col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="faq-breadcrumb-bar">
        <div className="faq-container">
          <nav className="faq-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="faq-breadcrumb-link">
              <House className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="faq-breadcrumb-sep" />
            <span className="faq-breadcrumb-current">FAQs</span>
          </nav>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="faq-hero-section">
        <div className="faq-container">
          <div className="faq-hero-grid">
            {/* Left Column */}
            <div className="faq-hero-left">
              <div className="faq-hero-badge">
                <span>&rsaquo;</span> FAQ / FINANCIAL GUIDANCE
              </div>

              <h1 className="faq-hero-title">
                Common Loan &amp; Insurance Questions — Answered Clearly
              </h1>

              <p className="faq-hero-p">
                This page is designed for users, Google search and answer engines, Keep answers concise, factual and linked to deeper service pages. Add real customer questions over time from calls, WhatsApp conversations and Search Console queries.
              </p>

              <a href="tel:9842817644" className="faq-hero-cta-btn">
                <span>Discuss Your Requirement | Call / WhatsApp 98428 17644</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Column: Hero Visual with 4 Floating Cards */}
            <div className="faq-hero-right">
              {/* Floating Card 1: Loan Questions */}
              <div className="faq-hero-float-card faq-float-loan">
                <CircleHelp className="w-4 h-4 text-emerald-600" />
                <span>Loan Questions</span>
              </div>

              {/* Floating Card 2: Insurance Questions */}
              <div className="faq-hero-float-card faq-float-insurance">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Insurance Questions</span>
              </div>

              {/* Floating Card 3: Clear Answers */}
              <div className="faq-hero-float-card faq-float-answers">
                <ClipboardCheck className="w-4 h-4 text-amber-500" />
                <span>Clear Answers</span>
              </div>

              {/* Floating Card 4: Madurai */}
              <div className="faq-hero-float-card faq-float-madurai">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Madurai</span>
              </div>

              {/* Dedicated Hero Image Placeholder */}
              <div className="faq-hero-img-box">
                <ImageIcon className="w-10 h-10 text-slate-400 mb-2 opacity-50" />
                <span className="text-white text-xs font-semibold">
                  Family &amp; Consultant Financial Discussion
                </span>
                <span className="text-slate-300 text-[11px] mt-1">
                  Laptop and documents with Madurai temple backdrop
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY NAVIGATION & SEARCH */}
      <section className="faq-controls-bar">
        <div className="faq-container">
          <div className="faq-controls-flex">
            {/* Category Navigation Cards */}
            <div className="faq-cat-cards-group">
              <button
                type="button"
                className="faq-cat-card-loan"
                onClick={() => setActiveFilter('Loan')}
              >
                <Coins className="w-4 h-4 text-amber-400" />
                <span>Loan Questions</span>
              </button>

              <button
                type="button"
                className="faq-cat-card-ins"
                onClick={() => setActiveFilter('Insurance')}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Insurance Questions</span>
              </button>
            </div>

            {/* Search Input & Filter Pills */}
            <div className="faq-search-filter-group">
              <div className="faq-search-box">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search FAQs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="faq-search-input"
                />
              </div>

              <div className="faq-filter-pills">
                <button
                  type="button"
                  className={`faq-filter-pill ${activeFilter === 'All' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('All')}
                >
                  All
                </button>
                <button
                  type="button"
                  className={`faq-filter-pill ${activeFilter === 'Loan' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('Loan')}
                >
                  Loan
                </button>
                <button
                  type="button"
                  className={`faq-filter-pill ${activeFilter === 'Insurance' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('Insurance')}
                >
                  Insurance
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN TWO-COLUMN FAQ CONTENT */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-main-grid">
            {/* LEFT PANEL: LOAN QUESTIONS */}
            {showLoanColumn && (
              <div className="faq-panel">
                {/* Header Image Placeholder */}
                <div className="faq-panel-header-img">
                  <ImageIcon className="w-7 h-7 text-slate-400 opacity-40 mb-1" />
                  <span className="text-xs text-slate-600 font-semibold">
                    Residential House Model &amp; Coins
                  </span>
                  <span className="text-[10px] text-slate-400">Financial Documents</span>
                </div>

                {/* Panel Title */}
                <div className="faq-header-row">
                  <h2 className="faq-panel-title">Loan Questions</h2>
                  <div className="faq-gold-line"></div>
                </div>

                {/* Loan Accordion List */}
                <div className="faq-accordion-list">
                  {filteredLoanFaqs.map((item, idx) => {
                    const IconComp = item.icon;
                    const isOpen = openLoanIndex === idx;
                    return (
                      <div key={item.id} className="faq-item-card">
                        <div
                          className="faq-item-header"
                          onClick={() => toggleLoanFaq(idx)}
                          role="button"
                          tabIndex={0}
                        >
                          <div className="faq-item-left">
                            <IconComp className="faq-item-icon text-sky-600" />
                            <span className="faq-item-question">{item.question}</span>
                          </div>
                          {isOpen ? (
                            <Minus className="faq-toggle-icon" />
                          ) : (
                            <Plus className="faq-toggle-icon" />
                          )}
                        </div>

                        {isOpen && (
                          <div className="faq-item-body">
                            <p style={{ margin: 0 }}>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Related Loan Pages Subsection */}
                <div>
                  <h3 className="faq-subheading">Related Loan Pages</h3>
                  <div className="faq-related-grid-3col">
                    {relatedLoanPages.map((service) => {
                      const ServiceIcon = service.icon;
                      return (
                        <Link
                          key={service.label}
                          to={service.path}
                          className="faq-service-link-card"
                        >
                          <div className="faq-service-left">
                            <ServiceIcon className="faq-service-icon" />
                            <span className="faq-service-label">{service.label}</span>
                          </div>
                          <ArrowRight className="faq-service-arrow" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* RIGHT PANEL: INSURANCE QUESTIONS */}
            {showInsuranceColumn && (
              <div className="faq-panel">
                {/* Header Image Placeholder */}
                <div className="faq-panel-header-img">
                  <ImageIcon className="w-7 h-7 text-slate-400 opacity-40 mb-1" />
                  <span className="text-xs text-slate-600 font-semibold">
                    Travel, Luggage &amp; Family Protection
                  </span>
                  <span className="text-[10px] text-slate-400">Insurance Concepts</span>
                </div>

                {/* Panel Title */}
                <div className="faq-header-row">
                  <h2 className="faq-panel-title">Insurance Questions</h2>
                  <div className="faq-gold-line"></div>
                </div>

                {/* Insurance Accordion List */}
                <div className="faq-accordion-list">
                  {filteredInsuranceFaqs.map((item, idx) => {
                    const IconComp = item.icon;
                    const isOpen = openInsuranceIndex === idx;
                    return (
                      <div key={item.id} className="faq-item-card">
                        <div
                          className="faq-item-header"
                          onClick={() => toggleInsuranceFaq(idx)}
                          role="button"
                          tabIndex={0}
                        >
                          <div className="faq-item-left">
                            <IconComp className="faq-item-icon text-emerald-600" />
                            <span className="faq-item-question">{item.question}</span>
                          </div>
                          {isOpen ? (
                            <Minus className="faq-toggle-icon" />
                          ) : (
                            <Plus className="faq-toggle-icon" />
                          )}
                        </div>

                        {isOpen && (
                          <div className="faq-item-body">
                            <p style={{ margin: 0 }}>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Related Insurance Pages Subsection */}
                <div>
                  <h3 className="faq-subheading">Related Insurance Pages</h3>
                  <div className="faq-related-grid-2col">
                    {relatedInsurancePages.map((service) => {
                      const ServiceIcon = service.icon;
                      return (
                        <Link
                          key={service.label}
                          to={service.path}
                          className="faq-service-link-card"
                        >
                          <div className="faq-service-left">
                            <ServiceIcon className="faq-service-icon" />
                            <span className="faq-service-label">{service.label}</span>
                          </div>
                          <ArrowRight className="faq-service-arrow" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. RESOURCE PROCESS BANNER */}
      <section className="faq-container">
        <div className="faq-process-banner">
          {/* Left Photograph Placeholder */}
          <div className="faq-process-img-box">
            <ImageIcon className="w-6 h-6 text-slate-400 opacity-50 mb-1" />
            <span className="text-[11px] text-slate-600 font-semibold">
              Laptop Search &amp; House Model
            </span>
          </div>

          {/* Central Connecting Icons */}
          <div className="faq-process-icons-row">
            <div className="faq-process-circle faq-process-circle-navy">
              <CircleHelp className="w-5 h-5 text-white" />
            </div>

            <ArrowRight className="faq-process-arrow" />

            <div className="faq-process-circle faq-process-circle-green">
              <FileText className="w-5 h-5 text-white" />
            </div>

            <ArrowRight className="faq-process-arrow" />

            <div className="faq-process-circle faq-process-circle-navy">
              <House className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Right Photograph Placeholder */}
          <div className="faq-process-img-box">
            <ImageIcon className="w-6 h-6 text-slate-400 opacity-50 mb-1" />
            <span className="text-[11px] text-slate-600 font-semibold">
              Professional Woman on Laptop
            </span>
            <span className="text-[9.5px] text-slate-400">Madurai backdrop</span>
          </div>
        </div>
      </section>

      {/* 6. LOAN AND INSURANCE DISCLAIMERS */}
      <section className="faq-container">
        <div className="faq-disclaimers-row">
          {/* Left: Loan Disclaimer */}
          <div className="faq-disclaimer-card faq-disclaimer-loan">
            <ShieldCheck className="faq-disclaimer-shield text-blue-900" />
            <div className="faq-disclaimer-content">
              <h4 className="faq-disclaimer-heading">Loan Disclaimer</h4>
              <p className="faq-disclaimer-text">
                Balaji Associates provides loan consultancy/application assistance. Loan approval, eligible amount, rate of interest, tenure, security requirements and disbursement are subject to the respective Bank/NBFC's policies, documentation, credit assessment and applicable terms. Balaji Associates does not guarantee loan sanction.
              </p>
            </div>
          </div>

          {/* Right: Insurance Disclaimer */}
          <div className="faq-disclaimer-card faq-disclaimer-insurance">
            <ShieldCheck className="faq-disclaimer-shield text-amber-600" />
            <div className="faq-disclaimer-content">
              <h4 className="faq-disclaimer-heading">Insurance Disclaimer</h4>
              <p className="faq-disclaimer-text">
                Insurance is the subject matter of solicitation. Balaji Associates' exact insurance intermediary/agent status, licence/registration number and authorised insurer relationships must be displayed as legally required. Coverage, premium, underwriting, exclusions, waiting periods, deductibles, add-ons and claims are governed by the respective insurer and policy wording. Read the policy document carefully before purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="faq-bottom-cta-section">
        <div className="faq-container">
          <div className="faq-bottom-cta-card">
            {/* Circular Gold Phone Icon */}
            <div className="faq-bottom-cta-phone-icon">
              <Phone className="w-6 h-6" />
            </div>

            {/* Title & Phone Link */}
            <div className="faq-bottom-cta-text-wrap">
              <h3 className="faq-bottom-cta-title">
                Discuss Your Requirement |{' '}
                <a href="tel:9842817644" className="faq-bottom-cta-phone-link">
                  Call / WhatsApp 98428 17644
                </a>
              </h3>
            </div>

            {/* Circular Arrow Button */}
            <a
              href="tel:9842817644"
              className="faq-bottom-cta-arrow-btn"
              aria-label="Call or WhatsApp"
            >
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Right-Side Photo Placeholder */}
            <div className="faq-bottom-cta-img-box">
              <ImageIcon className="w-6 h-6 text-white opacity-40 mb-1" />
              <span className="text-[10px] text-white/70 font-semibold">
                Financial Consultation
              </span>
              <span className="text-[9px] text-white/40">Madurai Temple Backdrop</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
