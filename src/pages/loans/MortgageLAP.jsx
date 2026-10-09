import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home as HomeIcon,
  ChevronRight,
  ChevronDown,
  Phone,
  ArrowRight,
  ShieldCheck,
  FileText,
  Building2,
  BookOpen,
  Scale,
  Wallet,
  CreditCard,
  Percent,
  UserCheck,
  Briefcase,
  TrendingUp,
  User,
  Sparkles,
  GraduationCap,
  CheckSquare,
  CheckCircle2,
  Landmark,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'How much home loan can I get?',
    answer: 'Eligibility depends on your monthly income, existing debt commitments, age, credit profile, and the property valuation. Generally, lenders allow an EMI of up to 40% to 50% of your net monthly income.'
  },
  {
    question: 'Can a self-employed person apply?',
    answer: 'Yes. Self-employed professionals, traders, and business owners can apply by providing business registration, past 2 to 3 years\' Income Tax Returns (ITR) with financial statements, and recent bank statements.'
  },
  {
    question: 'Can I finance both land and construction?',
    answer: 'Yes, composite loans (plot purchase plus construction) are offered by many lenders where plot acquisition and staged construction financing are structured together under one facility.'
  },
  {
    question: 'Does a good credit score guarantee approval?',
    answer: 'A good credit score is essential and improves eligibility, but approval also requires satisfactory property legal verification, technical valuation, and documented repayment capability.'
  }
];

function MortgageLAP() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="mortgage-lap-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .mortgage-lap-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .lap-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .lap-section {
          padding: 42px 0;
        }

        .lap-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .lap-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
        }

        .lap-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .lap-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .lap-img-placeholder {
          background-color: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          width: 100%;
          min-height: 240px;
          height: 100%;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .lap-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        /* 2. BREADCRUMB */
        .lap-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .lap-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .lap-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .lap-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .lap-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .lap-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .lap-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 3. HERO SECTION */
        .lap-hero-section {
          padding: 24px 0 46px;
        }

        .lap-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 44px;
          align-items: center;
        }

        .lap-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .lap-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background-color: #FFFBEB;
          border: 1px solid #FCD34D;
          border-radius: 50px;
          font-size: 11.5px;
          font-weight: 700;
          color: #B45309;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .lap-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .lap-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .lap-hero-title {
          font-size: 37px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.16;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .lap-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .lap-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #ECA822 0%, #D97706 100%);
          color: #FFFFFF;
          font-size: 14.5px;
          font-weight: 700;
          padding: 13px 26px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .lap-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .lap-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          color: #0A1B3A;
          border: 1.5px solid #0A1B3A;
          font-size: 14.5px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }

        .lap-btn-secondary:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        .lap-hero-visual-card {
          position: relative;
          min-height: 380px;
          height: 100%;
          background-color: #F1F5F9;
          border: 2px solid #FCD34D;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lap-floating-card {
          position: absolute;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          z-index: 2;
        }

        .lap-floating-card-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .lap-floating-card-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        .lap-float-1 {
          top: 24px;
          left: 40px;
        }

        .lap-float-2 {
          top: 48%;
          left: 20px;
          transform: translateY(-50%);
        }

        .lap-float-3 {
          bottom: 24px;
          right: 32px;
        }

        /* 4. MORTGAGE LOAN / LAP SECTION */
        .lap-mortgage-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .lap-cards-row-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        .lap-info-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .lap-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .lap-info-card-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .lap-number-badge {
          background-color: #FEF3C7;
          color: #D97706;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
        }

        .lap-info-card-icon {
          width: 20px;
          height: 20px;
          color: #003B73;
        }

        .lap-info-card-text {
          font-size: 12.5px;
          font-weight: 600;
          color: #0A1B3A;
          line-height: 1.45;
          margin: 0;
        }

        /* 5. LAND MORTGAGE SECTION */
        .lap-land-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        .lap-cards-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        /* 6. COMMERCIAL PROPERTY MORTGAGE */
        .lap-commercial-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        /* 7. TWO-COLUMN: WHO MAY APPLY & WHAT LENDERS EVALUATE */
        .lap-two-col-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 36px;
          align-items: start;
        }

        .lap-subtext {
          font-size: 13.5px;
          color: #475569;
          line-height: 1.6;
          margin: -10px 0 20px 0;
        }

        .lap-applicant-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .lap-applicant-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .lap-applicant-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
        }

        .lap-applicant-img-holder {
          width: 100%;
          height: 105px;
          background-color: #F1F5F9;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lap-applicant-info {
          padding: 10px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-align: center;
        }

        .lap-applicant-icon {
          width: 16px;
          height: 16px;
          color: #003B73;
          flex-shrink: 0;
        }

        .lap-applicant-title {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.25;
        }

        .lap-evaluate-cards-wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .lap-eval-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .lap-eval-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .lap-eval-card-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .lap-eval-card-text {
          font-size: 12px;
          font-weight: 600;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 8 & 9. COMMON DOCUMENTS & HOW BALAJI ASSOCIATES HELPS */
        .lap-docs-helps-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 36px;
          align-items: start;
        }

        .lap-docs-inner-grid {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 20px;
          align-items: start;
        }

        .lap-docs-img-holder {
          width: 100%;
          min-height: 220px;
          height: 100%;
          background-color: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lap-docs-lead {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
          margin: 0 0 12px 0;
        }

        .lap-docs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .lap-doc-bullet {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: #334155;
          line-height: 1.4;
        }

        .lap-doc-check-icon {
          width: 16px;
          height: 16px;
          color: #D97706;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .lap-process-flow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 16px 12px;
        }

        .lap-flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          flex: 1;
        }

        .lap-flow-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .lap-flow-icon-circle-green {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
        }

        .lap-flow-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.25;
        }

        .lap-flow-arrow {
          color: #ECA822;
          font-size: 18px;
          font-weight: bold;
          flex-shrink: 0;
          padding: 0 2px;
        }

        /* 10 & 11. FAQS & RELATED SERVICES */
        .lap-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        .lap-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .lap-faq-header {
          width: 100%;
          background: none;
          border: none;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          gap: 12px;
        }

        .lap-faq-question {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .lap-faq-chevron {
          width: 18px;
          height: 18px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .lap-faq-chevron.rotate {
          transform: rotate(180deg);
        }

        .lap-faq-body {
          padding: 0 18px 14px;
          font-size: 13px;
          line-height: 1.6;
          color: #475569;
        }

        .lap-related-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .lap-related-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          min-height: 125px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }

        .lap-related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
        }

        .lap-related-card.active {
          background: #FFFBEB;
          border: 1.5px solid #F59E0B;
        }

        .lap-related-card-top {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .lap-related-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .lap-related-title {
          font-size: 13px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
        }

        .lap-related-arrow {
          font-size: 15px;
          font-weight: bold;
          color: #003B73;
          margin-top: 10px;
        }

        /* 12. DISCLAIMER / INFORMATION BAR */
        .lap-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 36px 0 12px;
        }

        .lap-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .lap-disclaimer-icon {
          width: 18px;
          height: 18px;
          color: #1E40AF;
        }

        .lap-disclaimer-content {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          font-size: 13px;
          color: #1E3A8A;
          line-height: 1.5;
        }

        .lap-disclaimer-bold {
          font-weight: 700;
        }

        .lap-disclaimer-sep {
          color: #93C5FD;
          font-weight: 300;
        }

        .lap-disclaimer-sub {
          font-weight: 500;
        }

        /* 13. BOTTOM CTA */
        .lap-bottom-cta-section {
          padding: 32px 0 60px;
        }

        .lap-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 20px;
          padding: 36px 44px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
        }

        .lap-bottom-cta-text {
          font-size: 16px;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .lap-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .lap-btn-cta-gold {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #ECA822 0%, #D97706 100%);
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(217, 119, 6, 0.4);
          transition: transform 0.2s;
        }

        .lap-btn-cta-gold:hover {
          transform: translateY(-2px);
        }

        .lap-btn-cta-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid #FFFFFF;
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 700;
          padding: 11px 22px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.2s;
        }

        .lap-btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .lap-bottom-cta-img-placeholder {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          min-height: 200px;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .lap-hero-grid,
          .lap-mortgage-grid,
          .lap-land-grid,
          .lap-commercial-grid,
          .lap-two-col-grid,
          .lap-docs-helps-grid,
          .lap-split-grid,
          .lap-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .lap-docs-inner-grid {
            grid-template-columns: 1fr;
          }

          .lap-hero-visual-card {
            min-height: 300px;
          }

          .lap-hero-title {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .lap-cards-row-3,
          .lap-cards-row-2,
          .lap-applicant-cards,
          .lap-evaluate-cards-wrap,
          .lap-related-cards {
            grid-template-columns: 1fr;
          }

          .lap-process-flow {
            flex-direction: column;
            gap: 14px;
          }

          .lap-flow-arrow {
            transform: rotate(90deg);
          }

          .lap-bottom-cta-card {
            padding: 28px 20px;
          }
        }
      `}</style>

      {/* 2. BREADCRUMB */}
      <div className="lap-breadcrumb-wrap">
        <div className="lap-container">
          <div className="lap-breadcrumb">
            <HomeIcon className="lap-breadcrumb-home-icon" />
            <Link to="/" className="lap-breadcrumb-link">Home</Link>
            <span className="lap-breadcrumb-sep">&gt;</span>
            <Link to="/home-property-loans/" className="lap-breadcrumb-link">Loans</Link>
            <span className="lap-breadcrumb-sep">&gt;</span>
            <span className="lap-breadcrumb-current">Mortgage &amp; Loan Against Property</span>
          </div>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="lap-section lap-hero-section">
        <div className="lap-container">
          <div className="lap-hero-grid">
            <div className="lap-hero-left">
              <div className="lap-hero-top-row">
                <div className="lap-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>MORTGAGE &amp; LOAN AGAINST PROPERTY</span>
                </div>
                <div className="lap-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="lap-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="lap-hero-title">
                Mortgage, LAP &amp; Property-Backed Finance Assistance in Madurai
              </h1>

              <p className="lap-text-p">
                An owned property can sometimes be used as security for an eligible borrowing requirement. This is commonly referred to as a Mortgage Loan or Loan Against Property (LAP). The facility is secured, so the lender evaluates both the borrower and the property before making a credit decision.
              </p>

              <p className="lap-text-p">
                Balaji Associates helps property owners understand property-backed financing routes for permitted personal or business needs.
              </p>

              <div className="lap-hero-actions">
                <Link to="/contact/" className="lap-btn-primary">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="lap-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="lap-hero-right">
              <div className="lap-hero-visual-card">
                <ImageIcon className="lap-placeholder-icon" />

                <div className="lap-floating-card lap-float-1">
                  <HomeIcon className="lap-floating-card-icon" />
                  <span className="lap-floating-card-label">Property</span>
                </div>

                <div className="lap-floating-card lap-float-2">
                  <FileText className="lap-floating-card-icon" />
                  <span className="lap-floating-card-label">Documents</span>
                </div>

                <div className="lap-floating-card lap-float-3">
                  <Landmark className="lap-floating-card-icon" />
                  <span className="lap-floating-card-label">Assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MORTGAGE LOAN / LOAN AGAINST PROPERTY */}
      <section className="lap-section">
        <div className="lap-container">
          <div className="lap-header-row">
            <h2 className="lap-heading">Mortgage Loan / Loan Against Property</h2>
            <div className="lap-gold-line"></div>
          </div>

          <div className="lap-mortgage-grid">
            <div className="lap-img-placeholder">
              <ImageIcon className="lap-placeholder-icon" />
            </div>

            <div className="lap-mortgage-content">
              <p className="lap-text-p">
                LAP generally involves borrowing against an eligible property already owned by the applicant or acceptable security provider. The permitted end-use, amount and structure depend on the lender.
              </p>

              <div className="lap-cards-row-3">
                <div className="lap-info-card">
                  <div className="lap-info-card-top">
                    <span className="lap-number-badge">01</span>
                    <Briefcase className="lap-info-card-icon" />
                  </div>
                  <p className="lap-info-card-text">
                    Business expansion or working capital
                  </p>
                </div>

                <div className="lap-info-card">
                  <div className="lap-info-card-top">
                    <span className="lap-number-badge">02</span>
                    <GraduationCap className="lap-info-card-icon" />
                  </div>
                  <p className="lap-info-card-text">
                    Eligible education or family financial needs
                  </p>
                </div>

                <div className="lap-info-card">
                  <div className="lap-info-card-top">
                    <span className="lap-number-badge">03</span>
                    <CheckSquare className="lap-info-card-icon" />
                  </div>
                  <p className="lap-info-card-text">
                    Other lender-permitted purposes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LAND MORTGAGE */}
      <section className="lap-section">
        <div className="lap-container">
          <div className="lap-header-row">
            <h2 className="lap-heading">Land Mortgage</h2>
            <div className="lap-gold-line"></div>
          </div>

          <div className="lap-land-grid">
            <div className="lap-land-content">
              <p className="lap-text-p">
                Land-backed finance is more property-specific than many borrowers expect. Classification, title, access, location, marketability and lender policy can determine whether a parcel is acceptable. Avoid assuming that every land document automatically qualifies.
              </p>

              <div className="lap-cards-row-2">
                <div className="lap-info-card">
                  <div className="lap-info-card-top">
                    <span className="lap-number-badge">01</span>
                    <BookOpen className="lap-info-card-icon" />
                  </div>
                  <p className="lap-info-card-text">
                    Eligible land/property only
                  </p>
                </div>

                <div className="lap-info-card">
                  <div className="lap-info-card-top">
                    <span className="lap-number-badge">02</span>
                    <Scale className="lap-info-card-icon" />
                  </div>
                  <p className="lap-info-card-text">
                    Subject to legal and valuation checks
                  </p>
                </div>
              </div>
            </div>

            <div className="lap-img-placeholder">
              <ImageIcon className="lap-placeholder-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMERCIAL PROPERTY MORTGAGE */}
      <section className="lap-section">
        <div className="lap-container">
          <div className="lap-header-row">
            <h2 className="lap-heading">Commercial Property Mortgage</h2>
            <div className="lap-gold-line"></div>
          </div>

          <div className="lap-commercial-grid">
            <div className="lap-img-placeholder">
              <ImageIcon className="lap-placeholder-icon" />
            </div>

            <div className="lap-commercial-content">
              <p className="lap-text-p">
                Eligible shops, offices and other commercial properties may be considered by certain lenders. The property's legal status, usage, valuation and marketability are assessed together with the applicant's business/income profile.
              </p>

              <div className="lap-cards-row-3">
                <div className="lap-info-card">
                  <div className="lap-info-card-top">
                    <span className="lap-number-badge">01</span>
                    <Building2 className="lap-info-card-icon" />
                  </div>
                  <p className="lap-info-card-text">
                    Business expansion
                  </p>
                </div>

                <div className="lap-info-card">
                  <div className="lap-info-card-top">
                    <span className="lap-number-badge">02</span>
                    <TrendingUp className="lap-info-card-icon" />
                  </div>
                  <p className="lap-info-card-text">
                    Working capital
                  </p>
                </div>

                <div className="lap-info-card">
                  <div className="lap-info-card-top">
                    <span className="lap-number-badge">03</span>
                    <CheckSquare className="lap-info-card-icon" />
                  </div>
                  <p className="lap-info-card-text">
                    Other permitted business requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TWO-COLUMN: WHO MAY APPLY & WHAT LENDERS EVALUATE */}
      <section className="lap-section">
        <div className="lap-container">
          <div className="lap-two-col-grid">
            {/* Left: Who May Apply */}
            <div className="lap-apply-col">
              <div className="lap-header-row">
                <h2 className="lap-heading">Who May Apply</h2>
                <div className="lap-gold-line"></div>
              </div>

              <p className="lap-subtext">
                Eligibility is lender-specific, but common applicant groups include salaried employees, self-employed professionals and business owners with acceptable income and documentation.
              </p>

              <div className="lap-applicant-cards">
                <div className="lap-applicant-card">
                  <div className="lap-applicant-img-holder">
                    <ImageIcon className="lap-placeholder-icon" style={{ width: '24px', height: '24px' }} />
                  </div>
                  <div className="lap-applicant-info">
                    <User className="lap-applicant-icon" />
                    <span className="lap-applicant-title">Salaried Employees</span>
                  </div>
                </div>

                <div className="lap-applicant-card">
                  <div className="lap-applicant-img-holder">
                    <ImageIcon className="lap-placeholder-icon" style={{ width: '24px', height: '24px' }} />
                  </div>
                  <div className="lap-applicant-info">
                    <UserCheck className="lap-applicant-icon" />
                    <span className="lap-applicant-title">Self-Employed Professionals</span>
                  </div>
                </div>

                <div className="lap-applicant-card">
                  <div className="lap-applicant-img-holder">
                    <ImageIcon className="lap-placeholder-icon" style={{ width: '24px', height: '24px' }} />
                  </div>
                  <div className="lap-applicant-info">
                    <Briefcase className="lap-applicant-icon" />
                    <span className="lap-applicant-title">Business Owners</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: What Lenders Commonly Evaluate */}
            <div className="lap-eval-col">
              <div className="lap-header-row">
                <h2 className="lap-heading">What Lenders Commonly Evaluate</h2>
                <div className="lap-gold-line"></div>
              </div>

              <p className="lap-subtext">
                No single factor determines approval. Banks/NBFCs typically assess the complete borrower and property profile.
              </p>

              <div className="lap-evaluate-cards-wrap">
                <div className="lap-eval-card">
                  <div className="lap-eval-card-top">
                    <span className="lap-number-badge">01</span>
                    <Wallet className="lap-info-card-icon" />
                  </div>
                  <p className="lap-eval-card-text">
                    Income and repayment capacity
                  </p>
                </div>

                <div className="lap-eval-card">
                  <div className="lap-eval-card-top">
                    <span className="lap-number-badge">02</span>
                    <Briefcase className="lap-info-card-icon" />
                  </div>
                  <p className="lap-eval-card-text">
                    Employment or business stability
                  </p>
                </div>

                <div className="lap-eval-card">
                  <div className="lap-eval-card-top">
                    <span className="lap-number-badge">03</span>
                    <CreditCard className="lap-info-card-icon" />
                  </div>
                  <p className="lap-eval-card-text">
                    Credit history and existing EMIs
                  </p>
                </div>

                <div className="lap-eval-card">
                  <div className="lap-eval-card-top">
                    <span className="lap-number-badge">04</span>
                    <User className="lap-info-card-icon" />
                  </div>
                  <p className="lap-eval-card-text">
                    Applicant/co-applicant age and profile
                  </p>
                </div>

                <div className="lap-eval-card">
                  <div className="lap-eval-card-top">
                    <span className="lap-number-badge">05</span>
                    <Building2 className="lap-info-card-icon" />
                  </div>
                  <p className="lap-eval-card-text">
                    Property title, approvals and valuation
                  </p>
                </div>

                <div className="lap-eval-card">
                  <div className="lap-eval-card-top">
                    <span className="lap-number-badge">06</span>
                    <Percent className="lap-info-card-icon" />
                  </div>
                  <p className="lap-eval-card-text">
                    Requested amount, margin and tenure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 & 9. COMMON DOCUMENTS & HOW BALAJI ASSOCIATES HELPS */}
      <section className="lap-section">
        <div className="lap-container">
          <div className="lap-docs-helps-grid">
            {/* Common Documents Column */}
            <div className="lap-docs-col">
              <div className="lap-header-row">
                <h2 className="lap-heading">Common Documents</h2>
                <div className="lap-gold-line"></div>
              </div>

              <div className="lap-docs-inner-grid">
                <div className="lap-docs-img-holder">
                  <ImageIcon className="lap-placeholder-icon" />
                </div>

                <div className="lap-docs-content">
                  <p className="lap-docs-lead">The final checklist comes from the lender.</p>

                  <ul className="lap-docs-list">
                    <li className="lap-doc-bullet">
                      <CheckCircle2 className="lap-doc-check-icon" />
                      <span>PAN and identity/address proof</span>
                    </li>
                    <li className="lap-doc-bullet">
                      <CheckCircle2 className="lap-doc-check-icon" />
                      <span>Salary slips/income proof for salaried applicants</span>
                    </li>
                    <li className="lap-doc-bullet">
                      <CheckCircle2 className="lap-doc-check-icon" />
                      <span>ITR, financial statements or business records for applicable self-employed/owned applicants</span>
                    </li>
                    <li className="lap-doc-bullet">
                      <CheckCircle2 className="lap-doc-check-icon" />
                      <span>Bank statements</span>
                    </li>
                    <li className="lap-doc-bullet">
                      <CheckCircle2 className="lap-doc-check-icon" />
                      <span>Existing loan details</span>
                    </li>
                    <li className="lap-doc-bullet">
                      <CheckCircle2 className="lap-doc-check-icon" />
                      <span>Property title/sale/construction documents</span>
                    </li>
                    <li className="lap-doc-bullet">
                      <CheckCircle2 className="lap-doc-check-icon" />
                      <span>Approved plan and estimate for construction cases where required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How Balaji Associates Helps Column */}
            <div className="lap-helps-col">
              <div className="lap-header-row">
                <h2 className="lap-heading">How Balaji Associates Helps</h2>
                <div className="lap-gold-line"></div>
              </div>

              <p className="lap-text-p">
                We help customers clarify whether the requirement is a standard housing loan, construction loan or land-plus-construction route, understand the broad document requirements and explore suitable Bank/NBFC options. Final eligibility, sanction and disbursement remain with the lender.
              </p>

              <div className="lap-process-flow">
                <div className="lap-flow-step">
                  <FileText className="lap-flow-icon" />
                  <span className="lap-flow-label">Requirement</span>
                </div>

                <span className="lap-flow-arrow">→</span>

                <div className="lap-flow-step">
                  <User className="lap-flow-icon" />
                  <span className="lap-flow-label">Property /<br />Borrower<br />Understanding</span>
                </div>

                <span className="lap-flow-arrow">→</span>

                <div className="lap-flow-step">
                  <FileText className="lap-flow-icon" />
                  <span className="lap-flow-label">Document<br />Guidance</span>
                </div>

                <span className="lap-flow-arrow">→</span>

                <div className="lap-flow-step">
                  <Landmark className="lap-flow-icon" />
                  <span className="lap-flow-label">Explore<br />Bank/NBFC<br />Options</span>
                </div>

                <span className="lap-flow-arrow">→</span>

                <div className="lap-flow-step">
                  <div className="lap-flow-icon-circle-green">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="lap-flow-label">Lender<br />Decision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 & 11. FREQUENTLY ASKED QUESTIONS & RELATED SERVICES */}
      <section className="lap-section">
        <div className="lap-container">
          <div className="lap-split-grid">
            {/* FAQ Column */}
            <div className="lap-faq-col">
              <div className="lap-header-row">
                <h2 className="lap-heading">Frequently Asked Questions</h2>
                <div className="lap-gold-line"></div>
              </div>

              <div className="lap-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="lap-faq-item" key={idx}>
                      <button
                        className="lap-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="lap-faq-question">{faq.question}</span>
                        <ChevronDown className={`lap-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="lap-faq-body">
                              <p style={{ margin: 0 }}>{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Related Services Column */}
            <div className="lap-related-col">
              <div className="lap-header-row">
                <h2 className="lap-heading">Related Services</h2>
                <div className="lap-gold-line"></div>
              </div>

              <div className="lap-related-cards">
                <Link to="/business-msme-loans/" className="lap-related-card">
                  <div className="lap-related-card-top">
                    <Briefcase className="lap-related-icon" />
                    <span className="lap-related-title">Business &amp; MSME Loans</span>
                  </div>
                  <span className="lap-related-arrow">→</span>
                </Link>

                <Link to="/working-capital-finance/" className="lap-related-card">
                  <div className="lap-related-card-top">
                    <TrendingUp className="lap-related-icon" />
                    <span className="lap-related-title">Working Capital Finance</span>
                  </div>
                  <span className="lap-related-arrow">→</span>
                </Link>

                <Link to="/home-property-loans/" className="lap-related-card active">
                  <div className="lap-related-card-top">
                    <HomeIcon className="lap-related-icon" />
                    <span className="lap-related-title">Home &amp; Property Loans</span>
                  </div>
                  <span className="lap-related-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 12. DISCLAIMER / INFORMATION BAR */}
          <div className="lap-disclaimer-strip">
            <div className="lap-disclaimer-icon-wrap">
              <ShieldCheck className="lap-disclaimer-icon" />
            </div>
            <div className="lap-disclaimer-content">
              <span className="lap-disclaimer-bold">Final loan decisions are made by Banks/NBFCs.</span>
              <span className="lap-disclaimer-sep">|</span>
              <span className="lap-disclaimer-sub">Property eligibility, valuation, documentation and lender policy apply.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13. BOTTOM CTA */}
      <section className="lap-bottom-cta-section">
        <div className="lap-container">
          <div className="lap-bottom-cta-card">
            <div className="lap-bottom-cta-content">
              <p className="lap-bottom-cta-text">
                Not sure which option fits your requirement? Speak with Balaji Associates before you apply. We can help you understand the next step, while the respective lender makes the final credit decision.
              </p>

              <div className="lap-bottom-cta-buttons">
                <Link to="/contact/" className="lap-btn-cta-gold">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="lap-btn-cta-outline">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="lap-bottom-cta-visual">
              <div className="lap-bottom-cta-img-placeholder">
                <ImageIcon className="lap-placeholder-icon" style={{ opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MortgageLAP;
