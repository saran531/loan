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
  Receipt,
  Landmark,
  FileCheck,
  Briefcase,
  TrendingUp,
  User,
  Sparkles
} from 'lucide-react';

const faqList = [
  {
    question: 'What is the difference between a home loan and LAP?',
    answer: 'A home loan is specifically designed for purchasing or constructing a residential property. A Loan Against Property (LAP) is a mortgage on an already owned freehold residential or commercial property, where funds can be used for business or personal purposes.'
  },
  {
    question: 'Can commercial property be mortgaged?',
    answer: 'Yes, eligible commercial properties with clear title, approved building plans, and proper property documentation can be mortgaged under commercial Loan Against Property (LAP) programs, subject to lender valuation and legal checks.'
  },
  {
    question: 'Can any land be mortgaged?',
    answer: 'Not all land qualifies. Lenders typically consider approved residential or commercial plots within designated municipal limits and approved layouts. Unapproved layouts or agricultural land generally involve stricter restrictions or separate criteria.'
  },
  {
    question: 'Does a higher property value guarantee a bigger loan?',
    answer: 'No. While property valuation sets the maximum Loan-to-Value (LTV) limit, the actual sanctioned amount depends primarily on the borrower\'s income, repayment capacity, existing financial commitments, and credit profile.'
  }
];

function HomePropertyLoans() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="home-property-page">
      <style>{`
        /* Global Page Container & Shared Elements */
        .home-property-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .hpl-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hpl-section {
          padding: 44px 0;
        }

        .hpl-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }

        .hpl-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
        }

        .hpl-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .hpl-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .hpl-img-placeholder {
          background-color: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          width: 100%;
          min-height: 250px;
          height: 100%;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
          position: relative;
          overflow: hidden;
        }

        /* 2. BREADCRUMB */
        .hpl-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .hpl-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .hpl-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .hpl-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .hpl-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .hpl-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .hpl-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 3. HERO SECTION */
        .hpl-hero-section {
          padding: 24px 0 48px;
        }

        .hpl-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 44px;
          align-items: center;
        }

        .hpl-hero-left {
          position: relative;
        }

        .hpl-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .hpl-hero-badge {
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

        .hpl-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .hpl-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .hpl-hero-title {
          font-size: 38px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .hpl-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .hpl-btn-primary {
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

        .hpl-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .hpl-btn-secondary {
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

        .hpl-btn-secondary:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        .hpl-hero-visual-card {
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

        .hpl-floating-card {
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

        .hpl-floating-card-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .hpl-floating-card-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        .hpl-float-1 {
          top: 24px;
          left: 40px;
        }

        .hpl-float-2 {
          top: 48%;
          left: 20px;
          transform: translateY(-50%);
        }

        .hpl-float-3 {
          bottom: 24px;
          right: 32px;
        }

        /* 4. HOUSING LOAN SECTION */
        .hpl-housing-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .hpl-cards-row-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 24px;
        }

        .hpl-info-card {
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

        .hpl-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .hpl-info-card-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hpl-number-badge {
          background-color: #FEF3C7;
          color: #D97706;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
        }

        .hpl-info-card-icon {
          width: 20px;
          height: 20px;
          color: #003B73;
        }

        .hpl-info-card-text {
          font-size: 12.5px;
          font-weight: 600;
          color: #0A1B3A;
          line-height: 1.45;
          margin: 0;
        }

        /* 5. LAND PURCHASE + CONSTRUCTION */
        .hpl-land-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        /* 6. WHAT LENDERS EVALUATE */
        .hpl-subheading {
          font-size: 15px;
          font-weight: 700;
          color: #0A1B3A;
          margin: -12px 0 20px 0;
        }

        .hpl-evaluate-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 28px;
          align-items: stretch;
        }

        .hpl-evaluate-cards-wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .hpl-eval-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .hpl-eval-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .hpl-eval-card-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hpl-eval-card-text {
          font-size: 12.5px;
          font-weight: 600;
          color: #0A1B3A;
          line-height: 1.4;
          margin: 0;
        }

        /* 7. DOCUMENTS REQUESTED */
        .hpl-docs-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .hpl-docs-lead {
          font-size: 14.5px;
          font-weight: 700;
          color: #0A1B3A;
          margin-bottom: 14px;
        }

        .hpl-docs-checklist {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .hpl-doc-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: border-color 0.2s;
        }

        .hpl-doc-item:hover {
          border-color: #CBD5E1;
        }

        .hpl-doc-icon {
          width: 17px;
          height: 17px;
          color: #003B73;
          flex-shrink: 0;
        }

        .hpl-doc-name {
          font-size: 12.5px;
          font-weight: 600;
          color: #0A1B3A;
          line-height: 1.35;
        }

        /* 8. HOW BALAJI ASSOCIATES HELPS */
        .hpl-helps-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .hpl-process-flow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 24px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 18px 16px;
        }

        .hpl-flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          flex: 1;
        }

        .hpl-flow-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .hpl-flow-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.3;
        }

        .hpl-flow-arrow {
          color: #ECA822;
          font-size: 18px;
          font-weight: bold;
          flex-shrink: 0;
          padding: 0 4px;
        }

        /* 9 & 10. FAQS & RELATED SERVICES */
        .hpl-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        .hpl-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .hpl-faq-header {
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

        .hpl-faq-question {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .hpl-faq-chevron {
          width: 18px;
          height: 18px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .hpl-faq-chevron.rotate {
          transform: rotate(180deg);
        }

        .hpl-faq-body {
          padding: 0 18px 14px;
          font-size: 13px;
          line-height: 1.6;
          color: #475569;
        }

        .hpl-related-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .hpl-related-card {
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

        .hpl-related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
        }

        .hpl-related-card.active {
          background: #FFFBEB;
          border: 1.5px solid #F59E0B;
        }

        .hpl-related-card-top {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hpl-related-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .hpl-related-title {
          font-size: 13px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
        }

        .hpl-related-arrow {
          font-size: 15px;
          font-weight: bold;
          color: #003B73;
          margin-top: 10px;
        }

        /* 11. ASSISTANCE DISCLAIMER */
        .hpl-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 36px 0 12px;
        }

        .hpl-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hpl-disclaimer-icon {
          width: 18px;
          height: 18px;
          color: #1E40AF;
        }

        .hpl-disclaimer-text {
          font-size: 13px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.5;
          margin: 0;
        }

        /* 12. BOTTOM CTA */
        .hpl-bottom-cta-section {
          padding: 32px 0 60px;
        }

        .hpl-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 20px;
          padding: 36px 44px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
        }

        .hpl-bottom-cta-text {
          font-size: 16px;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .hpl-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hpl-btn-cta-gold {
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

        .hpl-btn-cta-gold:hover {
          transform: translateY(-2px);
        }

        .hpl-btn-cta-outline {
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

        .hpl-btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .hpl-bottom-cta-img-placeholder {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          min-height: 200px;
          height: 100%;
          width: 100%;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .hpl-hero-grid,
          .hpl-housing-grid,
          .hpl-land-grid,
          .hpl-evaluate-grid,
          .hpl-docs-grid,
          .hpl-helps-grid,
          .hpl-split-grid,
          .hpl-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .hpl-hero-visual-card {
            min-height: 300px;
          }

          .hpl-hero-title {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .hpl-cards-row-3,
          .hpl-evaluate-cards-wrap,
          .hpl-related-cards {
            grid-template-columns: 1fr;
          }

          .hpl-docs-checklist {
            grid-template-columns: 1fr;
          }

          .hpl-process-flow {
            flex-direction: column;
            gap: 14px;
          }

          .hpl-flow-arrow {
            transform: rotate(90deg);
          }

          .hpl-bottom-cta-card {
            padding: 28px 20px;
          }
        }
      `}</style>

      {/* 2. BREADCRUMB */}
      <div className="hpl-breadcrumb-wrap">
        <div className="hpl-container">
          <div className="hpl-breadcrumb">
            <HomeIcon className="hpl-breadcrumb-home-icon" />
            <Link to="/" className="hpl-breadcrumb-link">Home</Link>
            <span className="hpl-breadcrumb-sep">&gt;</span>
            <Link to="/home-property-loans/" className="hpl-breadcrumb-link">Loans</Link>
            <span className="hpl-breadcrumb-sep">&gt;</span>
            <span className="hpl-breadcrumb-current">Home &amp; Property Loans</span>
          </div>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="hpl-section hpl-hero-section">
        <div className="hpl-container">
          <div className="hpl-hero-grid">
            <div className="hpl-hero-left">
              <div className="hpl-hero-top-row">
                <div className="hpl-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>HOME &amp; PROPERTY LOANS</span>
                </div>
                <div className="hpl-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="hpl-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="hpl-hero-title">
                Home &amp; Property Loan<br />
                Assistance in Madurai
              </h1>

              <p className="hpl-text-p">
                Buying a home or building one on your own land is a major financial commitment. The right financing route depends on what you are buying, how the property is structured, your income and repayment capacity, and whether the property meets the lender's legal and technical requirements.
              </p>

              <p className="hpl-text-p">
                Balaji Associates assists eligible customers in Madurai with housing-loan and land purchase + construction enquiries through Banks and NBFCs.
              </p>

              <div className="hpl-hero-actions">
                <Link to="/contact/" className="hpl-btn-primary">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="hpl-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="hpl-hero-right">
              <div className="hpl-hero-visual-card">
                <div className="hpl-floating-card hpl-float-1">
                  <HomeIcon className="hpl-floating-card-icon" />
                  <span className="hpl-floating-card-label">Home Purchase</span>
                </div>

                <div className="hpl-floating-card hpl-float-2">
                  <FileText className="hpl-floating-card-icon" />
                  <span className="hpl-floating-card-label">Property Documents</span>
                </div>

                <div className="hpl-floating-card hpl-float-3">
                  <Building2 className="hpl-floating-card-icon" />
                  <span className="hpl-floating-card-label">Construction Finance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOUSING LOAN */}
      <section className="hpl-section">
        <div className="hpl-container">
          <div className="hpl-header-row">
            <h2 className="hpl-heading">Housing Loan</h2>
            <div className="hpl-gold-line"></div>
          </div>

          <div className="hpl-housing-grid">
            <div className="hpl-img-placeholder" />

            <div className="hpl-housing-content">
              <p className="hpl-text-p">
                A housing loan is generally used for an eligible residential purchase or construction requirement. Lenders assess the borrower and the property separately: a financially eligible applicant can still face issues if the property documentation does not meet lender requirements, and a good property alone does not establish repayment capacity.
              </p>
              <p className="hpl-text-p">
                Applicants should compare more than the advertised rate. Tenure, EMI affordability, processing costs, prepayment conditions, insurance requirements if any, and the lender's service process also matter.
              </p>

              <div className="hpl-cards-row-3">
                <div className="hpl-info-card">
                  <div className="hpl-info-card-top">
                    <span className="hpl-number-badge">01</span>
                    <HomeIcon className="hpl-info-card-icon" />
                  </div>
                  <p className="hpl-info-card-text">
                    Purchase of an eligible new or resale home/flat
                  </p>
                </div>

                <div className="hpl-info-card">
                  <div className="hpl-info-card-top">
                    <span className="hpl-number-badge">02</span>
                    <Building2 className="hpl-info-card-icon" />
                  </div>
                  <p className="hpl-info-card-text">
                    Construction of a residential house on eligible land
                  </p>
                </div>

                <div className="hpl-info-card">
                  <div className="hpl-info-card-top">
                    <span className="hpl-number-badge">03</span>
                    <FileText className="hpl-info-card-icon" />
                  </div>
                  <p className="hpl-info-card-text">
                    Other eligible housing purposes supported by the lender
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LAND PURCHASE + CONSTRUCTION */}
      <section className="hpl-section">
        <div className="hpl-container">
          <div className="hpl-header-row">
            <h2 className="hpl-heading">Land Purchase + Construction</h2>
            <div className="hpl-gold-line"></div>
          </div>

          <div className="hpl-land-grid">
            <div className="hpl-land-content">
              <p className="hpl-text-p">
                Customers who want to purchase a residential plot and construct a house may need a product specifically structured for both stages. The lender may review the land title, approved plan, construction estimate, proposed timeline and stage-wise disbursement conditions.
              </p>
              <p className="hpl-text-p">
                Planning the total project cost is important. The land price is only one component; construction, approvals, professional fees, utilities, interiors and contingency costs can affect the overall requirement.
              </p>

              <div className="hpl-cards-row-3">
                <div className="hpl-info-card">
                  <div className="hpl-info-card-top">
                    <span className="hpl-number-badge">01</span>
                    <BookOpen className="hpl-info-card-icon" />
                  </div>
                  <p className="hpl-info-card-text">
                    Eligible plot purchase
                  </p>
                </div>

                <div className="hpl-info-card">
                  <div className="hpl-info-card-top">
                    <span className="hpl-number-badge">02</span>
                    <Building2 className="hpl-info-card-icon" />
                  </div>
                  <p className="hpl-info-card-text">
                    Residential construction
                  </p>
                </div>

                <div className="hpl-info-card">
                  <div className="hpl-info-card-top">
                    <span className="hpl-number-badge">03</span>
                    <FileText className="hpl-info-card-icon" />
                  </div>
                  <p className="hpl-info-card-text">
                    Stage-baible construction funding subject to lender rules
                  </p>
                </div>
              </div>
            </div>

            <div className="hpl-img-placeholder" />
          </div>
        </div>
      </section>

      {/* 6. WHAT LENDERS COMMONLY EVALUATE */}
      <section className="hpl-section">
        <div className="hpl-container">
          <div className="hpl-header-row">
            <h2 className="hpl-heading">What Lenders Commonly Evaluate</h2>
            <div className="hpl-gold-line"></div>
          </div>

          <p className="hpl-subheading">
            Property value alone does not decide the loan.
          </p>

          <div className="hpl-evaluate-grid">
            <div className="hpl-evaluate-cards-wrap">
              <div className="hpl-eval-card">
                <div className="hpl-eval-card-top">
                  <span className="hpl-number-badge">01</span>
                  <FileText className="hpl-info-card-icon" />
                </div>
                <p className="hpl-eval-card-text">
                  Clear title and ownership
                </p>
              </div>

              <div className="hpl-eval-card">
                <div className="hpl-eval-card-top">
                  <span className="hpl-number-badge">02</span>
                  <Building2 className="hpl-info-card-icon" />
                </div>
                <p className="hpl-eval-card-text">
                  Property type, location, age and marketability
                </p>
              </div>

              <div className="hpl-eval-card">
                <div className="hpl-eval-card-top">
                  <span className="hpl-number-badge">03</span>
                  <Scale className="hpl-info-card-icon" />
                </div>
                <p className="hpl-eval-card-text">
                  Independent legal/technical/valuation checks
                </p>
              </div>

              <div className="hpl-eval-card">
                <div className="hpl-eval-card-top">
                  <span className="hpl-number-badge">04</span>
                  <Wallet className="hpl-info-card-icon" />
                </div>
                <p className="hpl-eval-card-text">
                  Income or business cash flow
                </p>
              </div>

              <div className="hpl-eval-card">
                <div className="hpl-eval-card-top">
                  <span className="hpl-number-badge">05</span>
                  <CreditCard className="hpl-info-card-icon" />
                </div>
                <p className="hpl-eval-card-text">
                  Credit profile and existing liabilities
                </p>
              </div>

              <div className="hpl-eval-card">
                <div className="hpl-eval-card-top">
                  <span className="hpl-number-badge">06</span>
                  <Percent className="hpl-info-card-icon" />
                </div>
                <p className="hpl-eval-card-text">
                  Regusobed amount and lender loan-to-value policy
                </p>
              </div>
            </div>

            <div className="hpl-img-placeholder" />
          </div>
        </div>
      </section>

      {/* 7. DOCUMENTS COMMONLY REQUESTED */}
      <section className="hpl-section">
        <div className="hpl-container">
          <div className="hpl-header-row">
            <h2 className="hpl-heading">Documents Commonly Requested</h2>
            <div className="hpl-gold-line"></div>
          </div>

          <div className="hpl-docs-grid">
            <div className="hpl-img-placeholder" />

            <div className="hpl-docs-content">
              <p className="hpl-docs-lead">Exact requirements vary.</p>

              <div className="hpl-docs-checklist">
                <div className="hpl-doc-item">
                  <UserCheck className="hpl-doc-icon" />
                  <span className="hpl-doc-name">Identity/address and PAN</span>
                </div>

                <div className="hpl-doc-item">
                  <FileText className="hpl-doc-icon" />
                  <span className="hpl-doc-name">Title deed and property chain documents</span>
                </div>

                <div className="hpl-doc-item">
                  <Receipt className="hpl-doc-icon" />
                  <span className="hpl-doc-name">Income/business financial documents</span>
                </div>

                <div className="hpl-doc-item">
                  <FileCheck className="hpl-doc-icon" />
                  <span className="hpl-doc-name">Tax receipts/approvals where applicable</span>
                </div>

                <div className="hpl-doc-item">
                  <Landmark className="hpl-doc-icon" />
                  <span className="hpl-doc-name">Bank statements</span>
                </div>

                <div className="hpl-doc-item">
                  <Building2 className="hpl-doc-icon" />
                  <span className="hpl-doc-name">Commercial-use documents where relevant</span>
                </div>

                <div className="hpl-doc-item">
                  <FileCheck className="hpl-doc-icon" />
                  <span className="hpl-doc-name">Existing loan details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW BALAJI ASSOCIATES HELPS */}
      <section className="hpl-section">
        <div className="hpl-container">
          <div className="hpl-header-row">
            <h2 className="hpl-heading">How Balaji Associates Helps</h2>
            <div className="hpl-gold-line"></div>
          </div>

          <div className="hpl-helps-grid">
            <div className="hpl-img-placeholder" />

            <div className="hpl-helps-content">
              <p className="hpl-text-p">
                We help clarify the purpose, borrower profile and property type, then assist with the document journey and exploration of relevant Bank/NBFC options. We do not promise a specific valuation or sanctioned percentage.
              </p>

              <div className="hpl-process-flow">
                <div className="hpl-flow-step">
                  <FileText className="hpl-flow-icon" />
                  <span className="hpl-flow-label">Requirement</span>
                </div>

                <span className="hpl-flow-arrow">→</span>

                <div className="hpl-flow-step">
                  <User className="hpl-flow-icon" />
                  <span className="hpl-flow-label">Borrower<br />Profile</span>
                </div>

                <span className="hpl-flow-arrow">→</span>

                <div className="hpl-flow-step">
                  <HomeIcon className="hpl-flow-icon" />
                  <span className="hpl-flow-label">Property<br />Type</span>
                </div>

                <span className="hpl-flow-arrow">→</span>

                <div className="hpl-flow-step">
                  <FileText className="hpl-flow-icon" />
                  <span className="hpl-flow-label">Documents</span>
                </div>

                <span className="hpl-flow-arrow">→</span>

                <div className="hpl-flow-step">
                  <Landmark className="hpl-flow-icon" />
                  <span className="hpl-flow-label">Bank/NBFC<br />Options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 & 10. FREQUENTLY ASKED QUESTIONS & RELATED SERVICES */}
      <section className="hpl-section">
        <div className="hpl-container">
          <div className="hpl-split-grid">
            {/* FAQ Column */}
            <div className="hpl-faq-col">
              <div className="hpl-header-row">
                <h2 className="hpl-heading">Frequently Asked Questions</h2>
                <div className="hpl-gold-line"></div>
              </div>

              <div className="hpl-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="hpl-faq-item" key={idx}>
                      <button
                        className="hpl-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="hpl-faq-question">{faq.question}</span>
                        <ChevronDown className={`hpl-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="hpl-faq-body">
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
            <div className="hpl-related-col">
              <div className="hpl-header-row">
                <h2 className="hpl-heading">Related Services</h2>
                <div className="hpl-gold-line"></div>
              </div>

              <div className="hpl-related-cards">
                <Link to="/business-msme-loans/" className="hpl-related-card">
                  <div className="hpl-related-card-top">
                    <Briefcase className="hpl-related-icon" />
                    <span className="hpl-related-title">Business &amp; MSME Loans</span>
                  </div>
                  <span className="hpl-related-arrow">→</span>
                </Link>

                <Link to="/working-capital-finance/" className="hpl-related-card">
                  <div className="hpl-related-card-top">
                    <TrendingUp className="hpl-related-icon" />
                    <span className="hpl-related-title">Working Capital Finance</span>
                  </div>
                  <span className="hpl-related-arrow">→</span>
                </Link>

                <Link to="/home-property-loans/" className="hpl-related-card active">
                  <div className="hpl-related-card-top">
                    <HomeIcon className="hpl-related-icon" />
                    <span className="hpl-related-title">Home &amp; Property Loans</span>
                  </div>
                  <span className="hpl-related-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 11. ASSISTANCE DISCLAIMER */}
          <div className="hpl-disclaimer-strip">
            <div className="hpl-disclaimer-icon-wrap">
              <ShieldCheck className="hpl-disclaimer-icon" />
            </div>
            <p className="hpl-disclaimer-text">
              Balaji Associates provides loan assistance. The respective Bank/NBFC makes the final credit decision, including sanction, terms and disbursement.
            </p>
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CTA */}
      <section className="hpl-bottom-cta-section">
        <div className="hpl-container">
          <div className="hpl-bottom-cta-card">
            <div className="hpl-bottom-cta-content">
              <p className="hpl-bottom-cta-text">
                Not sure which option fits your requirement? Speak with Balaji Associates before you apply. We can help you understand the next step, while the respective lender makes the final credit decision.
              </p>

              <div className="hpl-bottom-cta-buttons">
                <Link to="/contact/" className="hpl-btn-cta-gold">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="hpl-btn-cta-outline">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="hpl-bottom-cta-visual">
              <div className="hpl-bottom-cta-img-placeholder" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePropertyLoans;
