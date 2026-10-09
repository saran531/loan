import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home as HomeIcon,
  ChevronRight,
  Plus,
  Phone,
  ArrowRight,
  ShieldCheck,
  Building2,
  House,
  Package,
  Settings,
  Scale,
  Users,
  UsersRound,
  Truck,
  TriangleAlert,
  Flame,
  Ship,
  BriefcaseBusiness,
  FileText,
  TrendingUp,
  FileCheck,
  CarFront,
  Plane,
  HeartPulse,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'What is SME insurance?',
    icon: Building2,
    answer: 'It is a broad term for insurance solutions designed to protect eligible small and medium businesses against specified risks. The exact covers depend on the policy.'
  },
  {
    question: 'Does one policy cover every business risk?',
    icon: ShieldCheck,
    answer: 'Not necessarily. Businesses may need different covers depending on operations and exposures.'
  },
  {
    question: 'How should I decide the insured value?',
    icon: Scale,
    answer: 'Values should be based on the policy basis and accurate business information. Underinsurance can create problems, so the insurer/adviser should explain the applicable method.'
  },
  {
    question: 'Are business claims guaranteed?',
    icon: FileText,
    answer: 'No. Claims are assessed under policy terms, coverage, exclusions and documentation.'
  }
];

function SMEBusinessInsurance() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="sme-business-insurance-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .sme-business-insurance-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .sme-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .sme-section {
          padding: 40px 0;
        }

        .sme-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .sme-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .sme-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .sme-subtext {
          font-size: 14px;
          color: #64748B;
          margin: -10px 0 22px 0;
        }

        .sme-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .sme-img-placeholder {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          width: 100%;
          min-height: 220px;
          height: 100%;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .sme-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        .sme-placeholder-label {
          font-size: 11.5px;
          font-weight: 600;
          color: #94A3B8;
          margin-top: 8px;
          letter-spacing: 0.3px;
        }

        /* 1. BREADCRUMB */
        .sme-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .sme-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .sme-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .sme-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .sme-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .sme-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .sme-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 2. HERO SECTION */
        .sme-hero-section {
          padding: 24px 0 44px;
          background: linear-gradient(180deg, rgba(240, 249, 255, 0.5) 0%, rgba(255, 255, 255, 1) 100%);
        }

        .sme-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }

        .sme-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sme-hero-badge {
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

        .sme-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .sme-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .sme-hero-title {
          font-size: 40px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .sme-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .sme-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
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

        .sme-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .sme-hero-visual-card {
          position: relative;
          min-height: 420px;
          height: 100%;
          background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%);
          border: 2px solid #FCD34D;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sme-floating-stack {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 2;
        }

        .sme-floating-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 6px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
        }

        .sme-floating-icon {
          width: 16px;
          height: 16px;
          color: #003B73;
        }

        .sme-floating-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        /* 3. SECTION — START WITH THE BUSINESS RISK */
        .sme-biz-types-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .sme-biz-card {
          position: relative;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          height: 140px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .sme-biz-card-label {
          position: absolute;
          bottom: 10px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 50px;
          padding: 4px 14px;
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .sme-risk-strip-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
        }

        .sme-risk-strip-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 12px 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .sme-risk-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #EFF6FF;
          color: #1D4ED8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sme-risk-strip-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.3;
        }

        /* 4. SECTION — POTENTIAL PROTECTION AREAS */
        .sme-protect-8-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .sme-protect-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 18px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .sme-protect-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .sme-protect-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ECFDF5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sme-protect-icon-wrap.gold {
          background: #FFFBEB;
          color: #D97706;
        }

        .sme-protect-label {
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 5. SECTION — BUSINESS RISK VISUAL AND INFORMATION */
        .sme-info-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .sme-infographic-box {
          position: relative;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 20px;
          padding: 30px 20px;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .sme-infographic-hub {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #0A1B3A;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(10, 27, 58, 0.25);
          z-index: 2;
        }

        .sme-hub-title {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.5px;
          margin-top: 2px;
        }

        .sme-info-pill {
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 50px;
          padding: 5px 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 9.5px;
          font-weight: 800;
          color: #0A1B3A;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
          position: absolute;
          z-index: 2;
          white-space: nowrap;
        }

        .sme-info-pill svg {
          width: 13px;
          height: 13px;
          color: #059669;
        }

        /* Positions around the hub */
        .sme-ip-top { top: 32px; left: 50%; transform: translateX(-50%); }
        .sme-ip-top-right { top: 38%; right: 12%; }
        .sme-ip-bottom-right { bottom: 22%; right: 10%; }
        .sme-ip-bottom { bottom: 28px; left: 50%; transform: translateX(-50%); }
        .sme-ip-bottom-left { bottom: 22%; left: 10%; }
        .sme-ip-top-left { top: 38%; left: 12%; }

        .sme-prepare-subgrid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 16px;
          align-items: center;
        }

        .sme-checklist {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sme-check-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 9px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.01);
        }

        .sme-check-icon {
          width: 15px;
          height: 15px;
          color: #059669;
          flex-shrink: 0;
        }

        .sme-check-text {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        /* 6. SECTION — HOW BALAJI ASSOCIATES HELPS & FAQS */
        .sme-faq-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .sme-helps-column-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .sme-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sme-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .sme-faq-item:hover {
          border-color: #CBD5E1;
        }

        .sme-faq-header {
          width: 100%;
          background: none;
          border: none;
          padding: 13px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          gap: 12px;
        }

        .sme-faq-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sme-faq-icon-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #EFF6FF;
          color: #1D4ED8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sme-faq-question {
          font-size: 13px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .sme-faq-plus {
          width: 16px;
          height: 16px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .sme-faq-plus.rotate {
          transform: rotate(45deg);
        }

        .sme-faq-body {
          padding: 0 16px 12px 50px;
          font-size: 12.5px;
          line-height: 1.6;
          color: #475569;
        }

        /* 7. SECTION — IMPORTANT POLICY NOTE */
        .sme-policy-note-banner {
          background: #FFFBEB;
          border: 1.5px solid #FDE68A;
          border-radius: 20px;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 10px;
        }

        .sme-policy-shields-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .sme-policy-shield-gold {
          width: 44px;
          height: 44px;
          color: #D97706;
        }

        .sme-policy-content {
          flex: 1;
        }

        .sme-policy-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
        }

        .sme-policy-heading {
          font-size: 17px;
          font-weight: 800;
          color: #0A1B3A;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .sme-policy-text {
          font-size: 12.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }

        .sme-policy-doc-holder {
          width: 50px;
          height: 60px;
          border-radius: 8px;
          background: #FFFFFF;
          border: 1px solid #FCD34D;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D97706;
          flex-shrink: 0;
        }

        /* 8. SECTION — RELATED SERVICES */
        .sme-related-cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .sme-related-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .sme-related-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
        }

        .sme-related-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sme-related-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
        }

        .sme-related-title {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .sme-related-arrow {
          font-size: 13px;
          color: #1D4ED8;
          font-weight: bold;
        }

        /* 9. BOTTOM CTA BANNER */
        .sme-bottom-cta-section {
          padding: 24px 0 16px;
        }

        .sme-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 24px;
          padding: 34px 44px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
          position: relative;
          overflow: hidden;
        }

        .sme-bottom-cta-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .sme-bottom-cta-phone-badge {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #FFFFFF;
          color: #D97706;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .sme-bottom-cta-title {
          font-size: 18px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.35;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .sme-btn-cta-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ECA822 0%, #D97706 100%);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(217, 119, 6, 0.4);
          transition: transform 0.2s;
        }

        .sme-btn-cta-circle:hover {
          transform: scale(1.05);
        }

        .sme-bottom-cta-img-placeholder {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          min-height: 160px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* 10. DISCLAIMER / INFORMATION BAR */
        .sme-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 16px 0 28px 0;
        }

        .sme-disclaimer-icons-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .sme-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sme-disclaimer-icon {
          width: 17px;
          height: 17px;
          color: #1E40AF;
        }

        .sme-disclaimer-text {
          font-size: 12.5px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.55;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .sme-hero-grid,
          .sme-info-split-grid,
          .sme-faq-split-grid,
          .sme-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .sme-biz-types-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .sme-risk-strip-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .sme-protect-8-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sme-related-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .sme-hero-title {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .sme-biz-types-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sme-risk-strip-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sme-protect-8-grid {
            grid-template-columns: 1fr;
          }

          .sme-prepare-subgrid {
            grid-template-columns: 1fr;
          }

          .sme-policy-note-banner {
            flex-direction: column;
            text-align: center;
          }

          .sme-bottom-cta-left {
            flex-direction: column;
            text-align: center;
          }

          .sme-related-cards {
            grid-template-columns: 1fr;
          }

          .sme-bottom-cta-card {
            padding: 26px 20px;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="sme-breadcrumb-wrap">
        <div className="sme-container">
          <div className="sme-breadcrumb">
            <HomeIcon className="sme-breadcrumb-home-icon" />
            <Link to="/" className="sme-breadcrumb-link">Home</Link>
            <span className="sme-breadcrumb-sep">&gt;</span>
            <Link to="/insurance/" className="sme-breadcrumb-link">Insurance</Link>
            <span className="sme-breadcrumb-sep">&gt;</span>
            <span className="sme-breadcrumb-current">SME &amp; Business Insurance</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="sme-section sme-hero-section">
        <div className="sme-container">
          <div className="sme-hero-grid">
            <div className="sme-hero-left">
              <div className="sme-hero-top-row">
                <div className="sme-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>SME &amp; BUSINESS INSURANCE</span>
                </div>
                <div className="sme-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="sme-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="sme-hero-title">
                SME &amp; Business Insurance<br />
                Assistance in Madurai
              </h1>

              <p className="sme-text-p">
                A business can recover from a slow month. Recovering from a major fire, theft, property loss, liability event or operational disruption can be much harder without the right protection. SME insurance should therefore begin with a risk conversation, not a generic package.
              </p>

              <p className="sme-text-p">
                Balaji Associates helps eligible businesses in Madurai understand insurance categories that may be relevant to their operations, subject to insurer offerings and the client's verified authorisation.
              </p>

              <div className="sme-hero-actions">
                <a href="tel:9842817644" className="sme-btn-primary">
                  <Phone className="w-4 h-4" />
                  <span>Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="sme-hero-right">
              <div className="sme-hero-visual-card">
                <ImageIcon className="sme-placeholder-icon" />
                <span className="sme-placeholder-label">Business Consultation &amp; Madurai Temple</span>

                {/* 6 Floating Cards */}
                <div className="sme-floating-stack">
                  <div className="sme-floating-card">
                    <Building2 className="sme-floating-icon" />
                    <span className="sme-floating-label">SME Insurance</span>
                  </div>

                  <div className="sme-floating-card">
                    <Building2 className="sme-floating-icon" />
                    <span className="sme-floating-label">Business Insurance</span>
                  </div>

                  <div className="sme-floating-card">
                    <House className="sme-floating-icon" />
                    <span className="sme-floating-label">Property</span>
                  </div>

                  <div className="sme-floating-card">
                    <Package className="sme-floating-icon" />
                    <span className="sme-floating-label">Stock</span>
                  </div>

                  <div className="sme-floating-card">
                    <Settings className="sme-floating-icon" />
                    <span className="sme-floating-label">Equipment</span>
                  </div>

                  <div className="sme-floating-card">
                    <ShieldCheck className="sme-floating-icon" />
                    <span className="sme-floating-label">Liability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION — START WITH THE BUSINESS RISK */}
      <section className="sme-section">
        <div className="sme-container">
          <div className="sme-header-row">
            <h2 className="sme-heading">Start With the Business Risk</h2>
            <div className="sme-gold-line"></div>
          </div>

          <p className="sme-text-p" style={{ marginBottom: '22px' }}>
            retail shop, warehouse, manufacturer, office and service company do not have identical exposures. Before discussing a policy, identify the premises, stock, machinery/equipment, employees, customer/public exposure, goods movement and other operational risks.
          </p>

          {/* 5 Business Type Cards */}
          <div className="sme-biz-types-grid">
            <div className="sme-biz-card">
              <ImageIcon className="sme-placeholder-icon" style={{ opacity: 0.35 }} />
              <div className="sme-biz-card-label">Retail Shop</div>
            </div>

            <div className="sme-biz-card">
              <ImageIcon className="sme-placeholder-icon" style={{ opacity: 0.35 }} />
              <div className="sme-biz-card-label">Warehouse</div>
            </div>

            <div className="sme-biz-card">
              <ImageIcon className="sme-placeholder-icon" style={{ opacity: 0.35 }} />
              <div className="sme-biz-card-label">Manufacturer</div>
            </div>

            <div className="sme-biz-card">
              <ImageIcon className="sme-placeholder-icon" style={{ opacity: 0.35 }} />
              <div className="sme-biz-card-label">Office</div>
            </div>

            <div className="sme-biz-card">
              <ImageIcon className="sme-placeholder-icon" style={{ opacity: 0.35 }} />
              <div className="sme-biz-card-label">Service Company</div>
            </div>
          </div>

          {/* 7 Risk Category Strip Cards */}
          <div className="sme-risk-strip-grid">
            <div className="sme-risk-strip-card">
              <div className="sme-risk-icon-wrap">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="sme-risk-strip-label">Premises</span>
            </div>

            <div className="sme-risk-strip-card">
              <div className="sme-risk-icon-wrap">
                <Package className="w-4 h-4" />
              </div>
              <span className="sme-risk-strip-label">Stock</span>
            </div>

            <div className="sme-risk-strip-card">
              <div className="sme-risk-icon-wrap">
                <Settings className="w-4 h-4" />
              </div>
              <span className="sme-risk-strip-label">Machinery/Equipment</span>
            </div>

            <div className="sme-risk-strip-card">
              <div className="sme-risk-icon-wrap">
                <Users className="w-4 h-4" />
              </div>
              <span className="sme-risk-strip-label">Employees</span>
            </div>

            <div className="sme-risk-strip-card">
              <div className="sme-risk-icon-wrap">
                <UsersRound className="w-4 h-4" />
              </div>
              <span className="sme-risk-strip-label">Customer/Public Exposure</span>
            </div>

            <div className="sme-risk-strip-card">
              <div className="sme-risk-icon-wrap">
                <Truck className="w-4 h-4" />
              </div>
              <span className="sme-risk-strip-label">Goods Movement</span>
            </div>

            <div className="sme-risk-strip-card">
              <div className="sme-risk-icon-wrap">
                <TriangleAlert className="w-4 h-4" />
              </div>
              <span className="sme-risk-strip-label">Other Operational Risks</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION — POTENTIAL PROTECTION AREAS */}
      <section className="sme-section">
        <div className="sme-container">
          <div className="sme-header-row">
            <h2 className="sme-heading">Potential Protection Areas</h2>
            <div className="sme-gold-line"></div>
          </div>
          <p className="sme-subtext">
            Exact products and coverage vary by insurer.
          </p>

          <div className="sme-protect-8-grid">
            <div className="sme-protect-card">
              <div className="sme-protect-icon-wrap">
                <Building2 className="w-5 h-5" />
              </div>
              <p className="sme-protect-label">Building/premises where applicable</p>
            </div>

            <div className="sme-protect-card">
              <div className="sme-protect-icon-wrap gold">
                <Package className="w-5 h-5" />
              </div>
              <p className="sme-protect-label">Stock and contents</p>
            </div>

            <div className="sme-protect-card">
              <div className="sme-protect-icon-wrap">
                <Settings className="w-5 h-5" />
              </div>
              <p className="sme-protect-label">Machinery/equipment</p>
            </div>

            <div className="sme-protect-card">
              <div className="sme-protect-icon-wrap gold">
                <Flame className="w-5 h-5" />
              </div>
              <p className="sme-protect-label">Fire and specified perils</p>
            </div>

            <div className="sme-protect-card">
              <div className="sme-protect-icon-wrap gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="sme-protect-label">Burglary/theft where covered</p>
            </div>

            <div className="sme-protect-card">
              <div className="sme-protect-icon-wrap">
                <Scale className="w-5 h-5" />
              </div>
              <p className="sme-protect-label">Liability exposures</p>
            </div>

            <div className="sme-protect-card">
              <div className="sme-protect-icon-wrap">
                <Ship className="w-5 h-5" />
              </div>
              <p className="sme-protect-label">Transit/marine-related needs where relevant</p>
            </div>

            <div className="sme-protect-card">
              <div className="sme-protect-icon-wrap">
                <BriefcaseBusiness className="w-5 h-5" />
              </div>
              <p className="sme-protect-label">Other business-specific risks supported by the insurer</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION — BUSINESS RISK VISUAL AND INFORMATION */}
      <section className="sme-section">
        <div className="sme-container">
          <div className="sme-info-split-grid">
            {/* Left: Start With the Business Risk Infographic */}
            <div>
              <div className="sme-header-row" style={{ marginBottom: '14px' }}>
                <h2 className="sme-heading">Start With the Business Risk</h2>
                <div className="sme-gold-line"></div>
              </div>

              <div className="sme-infographic-box">
                {/* Center Hub */}
                <div className="sme-infographic-hub">
                  <Building2 className="w-6 h-6" />
                  <span className="sme-hub-title">BUSINESS</span>
                </div>

                {/* Floating Category Pills */}
                <div className="sme-info-pill sme-ip-top">
                  <Building2 />
                  <span>PREMISES</span>
                </div>

                <div className="sme-info-pill sme-ip-top-right">
                  <Settings />
                  <span>MACHINERY / EQUIPMENT</span>
                </div>

                <div className="sme-info-pill sme-ip-bottom-right">
                  <UsersRound />
                  <span>CUSTOMER / PUBLIC EXPOSURE</span>
                </div>

                <div className="sme-info-pill sme-ip-bottom">
                  <TriangleAlert />
                  <span>OTHER OPERATIONAL RISKS</span>
                </div>

                <div className="sme-info-pill sme-ip-bottom-left">
                  <Truck />
                  <span>GOODS MOVEMENT</span>
                </div>

                <div className="sme-info-pill sme-ip-top-left">
                  <Package />
                  <span>STOCK</span>
                </div>
              </div>
            </div>

            {/* Right: Information Businesses Should Prepare */}
            <div>
              <div className="sme-header-row" style={{ marginBottom: '8px' }}>
                <h2 className="sme-heading">Information Businesses Should Prepare</h2>
                <div className="sme-gold-line"></div>
              </div>
              <p className="sme-subtext" style={{ marginBottom: '16px' }}>
                Accurate information helps the insurer assess the risk.
              </p>

              <div className="sme-prepare-subgrid">
                <div className="sme-img-placeholder" style={{ minHeight: '260px' }}>
                  <ImageIcon className="sme-placeholder-icon" />
                  <span className="sme-placeholder-label">Reviewing Business Info</span>
                </div>

                <ul className="sme-checklist">
                  <li className="sme-check-item">
                    <BriefcaseBusiness className="sme-check-icon" />
                    <span className="sme-check-text">Nature of business</span>
                  </li>

                  <li className="sme-check-item">
                    <Building2 className="sme-check-icon" />
                    <span className="sme-check-text">Premises details</span>
                  </li>

                  <li className="sme-check-item">
                    <Package className="sme-check-icon" />
                    <span className="sme-check-text">Asset/stock values</span>
                  </li>

                  <li className="sme-check-item">
                    <ShieldCheck className="sme-check-icon" />
                    <span className="sme-check-text">Security/fire-safety arrangements</span>
                  </li>

                  <li className="sme-check-item">
                    <FileText className="sme-check-icon" />
                    <span className="sme-check-text">Past claims where requested</span>
                  </li>

                  <li className="sme-check-item">
                    <TrendingUp className="sme-check-icon" />
                    <span className="sme-check-text">Turnover or other underwriting information</span>
                  </li>

                  <li className="sme-check-item">
                    <FileCheck className="sme-check-icon" />
                    <span className="sme-check-text">Specific activities/exposures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — HOW BALAJI ASSOCIATES HELPS & FAQS */}
      <section className="sme-section">
        <div className="sme-container">
          <div className="sme-faq-split-grid">
            {/* Left: How Balaji Associates Helps */}
            <div className="sme-helps-column-card">
              <div>
                <div className="sme-header-row" style={{ marginBottom: '12px' }}>
                  <h2 className="sme-heading">How Balaji Associates Helps</h2>
                  <div className="sme-gold-line"></div>
                </div>
                <p className="sme-text-p" style={{ fontSize: '14px', lineHeight: 1.65 }}>
                  help the business owner frame the right questions and identify which risk areas need discussion. Product-specific recommendations and benefits must be based on authorised insurer material.
                </p>
              </div>

              <div className="sme-img-placeholder" style={{ minHeight: '220px' }}>
                <ImageIcon className="sme-placeholder-icon" />
                <span className="sme-placeholder-label">Adviser &amp; Business Owner Consultation</span>
              </div>
            </div>

            {/* Right: Frequently Asked Questions */}
            <div>
              <div className="sme-header-row">
                <h2 className="sme-heading">Frequently Asked Questions</h2>
                <div className="sme-gold-line"></div>
              </div>

              <div className="sme-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  const IconComp = faq.icon;
                  return (
                    <div className="sme-faq-item" key={idx}>
                      <button
                        className="sme-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <div className="sme-faq-header-left">
                          <div className="sme-faq-icon-badge">
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <span className="sme-faq-question">{faq.question}</span>
                        </div>
                        <Plus className={`sme-faq-plus ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="sme-faq-body">
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
          </div>

          {/* 7. IMPORTANT POLICY NOTE */}
          <div className="sme-policy-note-banner">
            <div className="sme-policy-shields-wrap">
              <ShieldCheck className="sme-policy-shield-gold" />
            </div>

            <div className="sme-policy-content">
              <div className="sme-policy-title-row">
                <h4 className="sme-policy-heading">Important Policy Note</h4>
                <div className="sme-gold-line" style={{ width: '32px', height: '2.5px' }}></div>
              </div>
              <p className="sme-policy-text">
                The final policy benefits, premium, eligibility, exclusions, waiting periods, deductibles, add-ons, underwriting and claim conditions are determined by the insurer and policy wording. Product-specific claims on the website must match approved insurer material.
              </p>
            </div>

            <div className="sme-policy-doc-holder">
              <FileText className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION — RELATED SERVICES */}
      <section className="sme-section" style={{ paddingTop: '10px' }}>
        <div className="sme-container">
          <div className="sme-header-row" style={{ marginBottom: '16px' }}>
            <h2 className="sme-heading">Related Services</h2>
            <div className="sme-gold-line"></div>
          </div>

          <div className="sme-related-cards">
            <Link to="/insurance/" className="sme-related-card">
              <div className="sme-related-left">
                <FileText className="sme-related-icon" />
                <span className="sme-related-title">Insurance Services</span>
              </div>
              <span className="sme-related-arrow">→</span>
            </Link>

            <Link to="/health-insurance-madurai/" className="sme-related-card">
              <div className="sme-related-left">
                <HeartPulse className="sme-related-icon" />
                <span className="sme-related-title">Health Insurance</span>
              </div>
              <span className="sme-related-arrow">→</span>
            </Link>

            <Link to="/motor-insurance-madurai/" className="sme-related-card">
              <div className="sme-related-left">
                <CarFront className="sme-related-icon" />
                <span className="sme-related-title">Motor Insurance</span>
              </div>
              <span className="sme-related-arrow">→</span>
            </Link>

            <Link to="/travel-insurance-madurai/" className="sme-related-card">
              <div className="sme-related-left">
                <Plane className="sme-related-icon" />
                <span className="sme-related-title">Travel Insurance</span>
              </div>
              <span className="sme-related-arrow">→</span>
            </Link>

            <Link to="/home-insurance-madurai/" className="sme-related-card">
              <div className="sme-related-left">
                <House className="sme-related-icon" />
                <span className="sme-related-title">Home Insurance</span>
              </div>
              <span className="sme-related-arrow">→</span>
            </Link>
          </div>

          {/* 10. DISCLAIMER / INFORMATION BAR */}
          <div className="sme-disclaimer-strip">
            <div className="sme-disclaimer-icons-wrap">
              <div className="sme-disclaimer-icon-wrap">
                <ShieldCheck className="sme-disclaimer-icon" />
              </div>
              <div className="sme-disclaimer-icon-wrap">
                <FileText className="sme-disclaimer-icon" />
              </div>
            </div>
            <p className="sme-disclaimer-text">
              Insurance is the subject matter of solicitation. Balaji Associates' exact intermediary/agent status, licence/registration number and authorised insurer relationships must be displayed as legally required. Coverage, premium, underwriting, exclusions, waiting periods, deductibles, add-ons and claims are governed by the respective insurer and policy wording. Read the policy document carefully before purchase.
            </p>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BANNER */}
      <section className="sme-bottom-cta-section">
        <div className="sme-container">
          <div className="sme-bottom-cta-card">
            <div className="sme-bottom-cta-left">
              <div className="sme-bottom-cta-phone-badge">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <h3 className="sme-bottom-cta-title">
                  Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644
                </h3>
              </div>

              <a href="tel:9842817644" className="sme-btn-cta-circle">
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="sme-bottom-cta-visual">
              <div className="sme-bottom-cta-img-placeholder">
                <ImageIcon className="sme-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="sme-placeholder-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Business &amp; Madurai Temple</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SMEBusinessInsurance;
