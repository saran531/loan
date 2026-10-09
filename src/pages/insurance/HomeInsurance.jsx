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
  House,
  Building2,
  Sofa,
  Gem,
  Users,
  FileText,
  HeartPulse,
  CalendarDays,
  Luggage,
  BookOpen,
  Clock,
  TriangleAlert,
  Mountain,
  Globe,
  LifeBuoy,
  Lock,
  Laptop,
  FileCheck,
  CarFront,
  BriefcaseBusiness,
  Plane,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'Does home insurance cover every natural disaster?',
    answer: 'No. Standard home insurance policies cover specific named natural perils like fire, lightning, storm, tempest, or flood according to policy terms. Earthquakes, landslides, or terrorism often require specific add-on covers, while exclusions like gradual wear and tear apply.'
  },
  {
    question: 'Can tenants buy home insurance?',
    answer: 'Yes, tenants can take a home contents insurance policy to protect their personal belongings, furniture, appliances, and valuables against fire, theft, and damage, while the building structure remains the landlord\'s responsibility.'
  },
  {
    question: 'Is theft automatically covered?',
    answer: 'Theft or burglary cover depends on the policy terms. Many basic standard home policies cover fire and allied perils only; burglary, housebreaking, and portable equipment theft often need to be specifically included as an option or rider.'
  },
  {
    question: 'How should I value my home or contents?',
    answer: 'The building structure should generally be valued based on the cost of reconstruction (built-up area multiplied by current construction rate per square foot, excluding land value). Contents should be valued based on current replacement or market value depending on policy terms.'
  }
];

function HomeInsurance() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="home-insurance-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .home-insurance-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .home-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .home-section {
          padding: 40px 0;
        }

        .home-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .home-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .home-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .home-subtext {
          font-size: 14px;
          color: #64748B;
          margin: -10px 0 22px 0;
        }

        .home-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .home-img-placeholder {
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

        .home-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        .home-placeholder-label {
          font-size: 11.5px;
          font-weight: 600;
          color: #94A3B8;
          margin-top: 8px;
          letter-spacing: 0.3px;
        }

        /* 1. BREADCRUMB */
        .home-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .home-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .home-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .home-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .home-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .home-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .home-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 2. HERO SECTION */
        .home-hero-section {
          padding: 24px 0 44px;
          background: linear-gradient(180deg, rgba(240, 249, 255, 0.5) 0%, rgba(255, 255, 255, 1) 100%);
        }

        .home-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }

        .home-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .home-hero-badge {
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

        .home-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .home-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .home-hero-title {
          font-size: 40px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .home-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .home-btn-primary {
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

        .home-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .home-hero-visual-card {
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

        .home-floating-stack {
          position: absolute;
          top: 24px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          z-index: 2;
        }

        .home-floating-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .home-floating-icon {
          width: 17px;
          height: 17px;
          color: #003B73;
        }

        .home-floating-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        /* 3. SECTION — WHAT CAN BE INSURED */
        .home-insured-4-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .home-insured-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .home-insured-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }

        .home-insured-top {
          padding: 16px 14px 12px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-height: 70px;
        }

        .home-insured-icon-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ECFDF5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .home-insured-label {
          font-size: 12.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        .home-insured-img-box {
          height: 130px;
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* 4. SECTION — RISKS & EXCLUSIONS & OWNERS VS TENANTS */
        .home-split-row-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .home-split-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .home-risks-subgrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: center;
          margin-top: 14px;
        }

        .home-owners-imgs-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 14px;
          margin-bottom: 14px;
        }

        .home-owner-img-box {
          position: relative;
          height: 130px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .home-overlay-badge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: #064E3B;
          color: #FFFFFF;
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        /* 5. SECTION — WHAT TO CHECK */
        .home-check-10-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .home-check-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .home-check-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .home-check-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .home-check-icon-wrap.green {
          background: #ECFDF5;
          color: #059669;
        }

        .home-check-icon-wrap.gold {
          background: #FFFBEB;
          color: #D97706;
        }

        .home-check-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 6. SECTION — HOW BALAJI ASSOCIATES HELPS & FAQS */
        .home-helps-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .home-helps-subgrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: center;
          margin-top: 14px;
        }

        .home-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .home-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .home-faq-item:hover {
          border-color: #CBD5E1;
        }

        .home-faq-header {
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

        .home-faq-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .home-faq-shield-icon {
          width: 16px;
          height: 16px;
          color: #1D4ED8;
          flex-shrink: 0;
        }

        .home-faq-question {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .home-faq-plus {
          width: 16px;
          height: 16px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .home-faq-plus.rotate {
          transform: rotate(45deg);
        }

        .home-faq-body {
          padding: 0 18px 14px 44px;
          font-size: 12.5px;
          line-height: 1.6;
          color: #475569;
        }

        /* 7. SECTION — INFOGRAPHIC & IMPORTANT POLICY NOTE */
        .home-info-note-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 28px;
          align-items: center;
          margin-top: 10px;
        }

        .home-infographic-card {
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 20px;
          padding: 24px 20px;
          display: grid;
          grid-template-columns: 100px 1fr auto 1fr;
          gap: 10px;
          align-items: center;
          min-height: 240px;
        }

        .home-infographic-house-thumb {
          height: 180px;
          border-radius: 12px;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .home-info-pills-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .home-info-pill-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 50px;
          padding: 5px 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
          font-weight: 800;
          color: #0A1B3A;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
          white-space: nowrap;
        }

        .home-info-pill-item svg {
          width: 12px;
          height: 12px;
          color: #059669;
          flex-shrink: 0;
        }

        .home-info-pill-item.red svg {
          color: #DC2626;
        }

        .home-info-pill-item.gold svg {
          color: #D97706;
        }

        .home-infographic-hub {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: #0A1B3A;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(10, 27, 58, 0.25);
        }

        .home-hub-title {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.5px;
          margin-top: 2px;
        }

        /* Policy Note Right Card */
        .home-policy-note-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 20px;
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          box-shadow: 0 12px 28px rgba(10, 27, 58, 0.2);
          color: #FFFFFF;
        }

        .home-policy-note-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .home-policy-note-shield {
          width: 36px;
          height: 36px;
          color: #FBBF24;
        }

        .home-policy-note-heading {
          font-size: 18px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .home-policy-note-text {
          font-size: 12px;
          line-height: 1.6;
          color: #E2E8F0;
          margin: 0;
        }

        /* 8. SECTION — RELATED SERVICES */
        .home-related-cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .home-related-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .home-related-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
        }

        .home-related-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .home-related-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
        }

        .home-related-title {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .home-related-arrow {
          font-size: 13px;
          color: #1D4ED8;
          font-weight: bold;
        }

        /* 9. BOTTOM CTA BANNER */
        .home-bottom-cta-section {
          padding: 24px 0 16px;
        }

        .home-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 24px;
          padding: 0;
          display: grid;
          grid-template-columns: 0.8fr 1.4fr 0.8fr;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
          position: relative;
          overflow: hidden;
        }

        .home-bottom-cta-img-col {
          height: 180px;
          background: #1E293B;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .home-bottom-cta-center {
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .home-bottom-cta-phone-badge {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFFFFF;
          color: #D97706;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .home-bottom-cta-title {
          font-size: 17px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.35;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .home-btn-cta-circle {
          width: 38px;
          height: 38px;
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

        .home-btn-cta-circle:hover {
          transform: scale(1.05);
        }

        /* 10. DISCLAIMER / INFORMATION BAR */
        .home-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 16px 0 28px 0;
        }

        .home-disclaimer-left-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .home-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home-disclaimer-icon {
          width: 17px;
          height: 17px;
          color: #1E40AF;
        }

        .home-disclaimer-badge-title {
          font-size: 12px;
          font-weight: 800;
          color: #0A1B3A;
          white-space: nowrap;
        }

        .home-disclaimer-text {
          font-size: 12px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.55;
          margin: 0;
          border-left: 1px solid #BFDBFE;
          padding-left: 16px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .home-hero-grid,
          .home-split-row-grid,
          .home-helps-faq-grid,
          .home-info-note-grid,
          .home-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .home-insured-4-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .home-check-10-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .home-infographic-card {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .home-related-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .home-hero-title {
            font-size: 32px;
          }

          .home-disclaimer-strip {
            flex-direction: column;
            align-items: flex-start;
          }

          .home-disclaimer-text {
            border-left: none;
            padding-left: 0;
          }
        }

        @media (max-width: 640px) {
          .home-insured-4-grid {
            grid-template-columns: 1fr;
          }

          .home-check-10-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .home-risks-subgrid,
          .home-helps-subgrid {
            grid-template-columns: 1fr;
          }

          .home-related-cards {
            grid-template-columns: 1fr;
          }

          .home-bottom-cta-center {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="home-breadcrumb-wrap">
        <div className="home-container">
          <div className="home-breadcrumb">
            <HomeIcon className="home-breadcrumb-home-icon" />
            <Link to="/" className="home-breadcrumb-link">Home</Link>
            <span className="home-breadcrumb-sep">&gt;</span>
            <Link to="/insurance/" className="home-breadcrumb-link">Insurance</Link>
            <span className="home-breadcrumb-sep">&gt;</span>
            <span className="home-breadcrumb-current">Home Insurance</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="home-section home-hero-section">
        <div className="home-container">
          <div className="home-hero-grid">
            <div className="home-hero-left">
              <div className="home-hero-top-row">
                <div className="home-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>HOME INSURANCE</span>
                </div>
                <div className="home-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="home-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="home-hero-title">
                Home Insurance<br />
                Assistance in Madurai
              </h1>

              <p className="home-text-p">
                A home represents years of savings, but many homeowners focus on financing the property and overlook protecting it. Home insurance can cover specified risks to an eligible building structure and/or contents, depending on the policy.
              </p>

              <p className="home-text-p">
                Balaji Associates helps homeowners and eligible occupants understand the protection questions to ask before selecting home insurance.
              </p>

              <div className="home-hero-actions">
                <a href="tel:9842817644" className="home-btn-primary">
                  <Phone className="w-4 h-4" />
                  <span>Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="home-hero-right">
              <div className="home-hero-visual-card">
                <ImageIcon className="home-placeholder-icon" />
                <span className="home-placeholder-label">Family &amp; Home with Madurai Temple</span>

                {/* 5 Floating Cards */}
                <div className="home-floating-stack">
                  <div className="home-floating-card">
                    <House className="home-floating-icon" />
                    <span className="home-floating-label">Home Insurance</span>
                  </div>

                  <div className="home-floating-card">
                    <Building2 className="home-floating-icon" />
                    <span className="home-floating-label">Building Structure</span>
                  </div>

                  <div className="home-floating-card">
                    <Sofa className="home-floating-icon" />
                    <span className="home-floating-label">Household Contents</span>
                  </div>

                  <div className="home-floating-card">
                    <ShieldCheck className="home-floating-icon" />
                    <span className="home-floating-label">Insured Risks</span>
                  </div>

                  <div className="home-floating-card">
                    <FileText className="home-floating-icon" />
                    <span className="home-floating-label">Policy Questions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION — WHAT CAN BE INSURED */}
      <section className="home-section">
        <div className="home-container">
          <div className="home-header-row">
            <h2 className="home-heading">What Can Be Insured</h2>
            <div className="home-gold-line"></div>
          </div>
          <p className="home-subtext">
            Coverage varies by insurer and policy.
          </p>

          <div className="home-insured-4-grid">
            {/* Card 1 */}
            <div className="home-insured-card">
              <div className="home-insured-top">
                <div className="home-insured-icon-badge">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="home-insured-label">Building structure where eligible</h3>
              </div>
              <div className="home-insured-img-box">
                <ImageIcon className="home-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="home-placeholder-label">Modern House Exterior</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="home-insured-card">
              <div className="home-insured-top">
                <div className="home-insured-icon-badge">
                  <Sofa className="w-5 h-5" />
                </div>
                <h3 className="home-insured-label">Household contents where included</h3>
              </div>
              <div className="home-insured-img-box">
                <ImageIcon className="home-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="home-placeholder-label">Modern Living Room</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="home-insured-card">
              <div className="home-insured-top">
                <div className="home-insured-icon-badge">
                  <Gem className="w-5 h-5" />
                </div>
                <h3 className="home-insured-label">Specified valuables or additional items where specifically covered</h3>
              </div>
              <div className="home-insured-img-box">
                <ImageIcon className="home-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="home-placeholder-label">Jewellery &amp; Valuables</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="home-insured-card">
              <div className="home-insured-top">
                <div className="home-insured-icon-badge">
                  <House className="w-5 h-5" />
                </div>
                <h3 className="home-insured-label">Other insured property according to the policy</h3>
              </div>
              <div className="home-insured-img-box">
                <ImageIcon className="home-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="home-placeholder-label">Insured Residential Property</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION — RISKS & EXCLUSIONS & OWNERS VS TENANTS */}
      <section className="home-section">
        <div className="home-container">
          <div className="home-split-row-grid">
            {/* Left: Risks & Exclusions */}
            <div className="home-split-card">
              <div>
                <div className="home-header-row" style={{ marginBottom: '12px' }}>
                  <h2 className="home-heading" style={{ fontSize: '24px' }}>Risks &amp; Exclusions</h2>
                  <div className="home-gold-line"></div>
                </div>

                <div className="home-risks-subgrid">
                  <div className="home-img-placeholder" style={{ minHeight: '170px' }}>
                    <ImageIcon className="home-placeholder-icon" />
                    <span className="home-placeholder-label">House &amp; Policy Shield</span>
                  </div>

                  <div>
                    <p className="home-text-p" style={{ fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                      Policies may cover specified events such as fire or certain natural perils, while exclusions and special conditions also apply. Theft/burglary or portable items may require specific coverage. Never assume a risk is covered unless it appears in the policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Owners vs Tenants */}
            <div className="home-split-card">
              <div>
                <div className="home-header-row" style={{ marginBottom: '12px' }}>
                  <h2 className="home-heading" style={{ fontSize: '24px' }}>Owners vs Tenants</h2>
                  <div className="home-gold-line"></div>
                </div>

                <div className="home-owners-imgs-row">
                  <div className="home-owner-img-box">
                    <ImageIcon className="home-placeholder-icon" style={{ opacity: 0.35 }} />
                    <div className="home-overlay-badge">
                      <House className="w-3.5 h-3.5" />
                      <span>Owners</span>
                    </div>
                  </div>

                  <div className="home-owner-img-box">
                    <ImageIcon className="home-placeholder-icon" style={{ opacity: 0.35 }} />
                    <div className="home-overlay-badge">
                      <Users className="w-3.5 h-3.5" />
                      <span>Tenants</span>
                    </div>
                  </div>
                </div>

                <p className="home-text-p" style={{ fontSize: '12.5px', lineHeight: 1.55, margin: 0 }}>
                  Owners may need to think about the structure and contents. Tenants may primarily need contents protection depending on the policy and tenancy. The appropriate arrangement depends on who owns what and the insurer's product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION — WHAT TO CHECK */}
      <section className="home-section">
        <div className="home-container">
          <div className="home-header-row">
            <h2 className="home-heading">What to Check</h2>
            <div className="home-gold-line"></div>
          </div>
          <p className="home-subtext">
            Do not assume every travel inconvenience is covered.
          </p>

          <div className="home-check-10-grid">
            <div className="home-check-card">
              <div className="home-check-icon-wrap green">
                <HeartPulse className="w-4 h-4" />
              </div>
              <p className="home-check-label">Emergency medical coverage</p>
            </div>

            <div className="home-check-card">
              <div className="home-check-icon-wrap gold">
                <CalendarDays className="w-4 h-4" />
              </div>
              <p className="home-check-label">Trip cancellation/interruption terms</p>
            </div>

            <div className="home-check-card">
              <div className="home-check-icon-wrap gold">
                <Luggage className="w-4 h-4" />
              </div>
              <p className="home-check-label">Baggage loss/delay conditions</p>
            </div>

            <div className="home-check-card">
              <div className="home-check-icon-wrap green">
                <BookOpen className="w-4 h-4" />
              </div>
              <p className="home-check-label">Passport-related cover where offered</p>
            </div>

            <div className="home-check-card">
              <div className="home-check-icon-wrap gold">
                <Clock className="w-4 h-4" />
              </div>
              <p className="home-check-label">Flight-delay conditions</p>
            </div>

            <div className="home-check-card">
              <div className="home-check-icon-wrap gold">
                <FileText className="w-4 h-4" />
              </div>
              <p className="home-check-label">Deductibles/excess</p>
            </div>

            <div className="home-check-card">
              <div className="home-check-icon-wrap gold">
                <TriangleAlert className="w-4 h-4" />
              </div>
              <p className="home-check-label">Pre-existing condition rules</p>
            </div>

            <div className="home-check-card">
              <div className="home-check-icon-wrap green">
                <Mountain className="w-4 h-4" />
              </div>
              <p className="home-check-label">Adventure/sports exclusions</p>
            </div>

            <div className="home-check-card">
              <div className="home-check-icon-wrap green">
                <Globe className="w-4 h-4" />
              </div>
              <p className="home-check-label">Destination and visa requirements</p>
            </div>

            <div className="home-check-card">
              <div className="home-check-icon-wrap gold">
                <LifeBuoy className="w-4 h-4" />
              </div>
              <p className="home-check-label">Emergency assistance process</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — HOW BALAJI ASSOCIATES HELPS & FAQS */}
      <section className="home-section">
        <div className="home-container">
          <div className="home-helps-faq-grid">
            {/* Left: How Balaji Associates Helps */}
            <div className="home-split-card">
              <div>
                <div className="home-header-row" style={{ marginBottom: '12px' }}>
                  <h2 className="home-heading" style={{ fontSize: '24px' }}>How Balaji Associates Helps</h2>
                  <div className="home-gold-line"></div>
                </div>

                <div className="home-helps-subgrid">
                  <div className="home-img-placeholder" style={{ minHeight: '170px' }}>
                    <ImageIcon className="home-placeholder-icon" />
                    <span className="home-placeholder-label">Adviser Consultation</span>
                  </div>

                  <div>
                    <p className="home-text-p" style={{ fontSize: '13.5px', lineHeight: 1.6, margin: 0 }}>
                      We help customers identify whether they are trying to protect the structure, contents or both and understand the policy questions that matter before purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Frequently Asked Questions */}
            <div>
              <div className="home-header-row" style={{ marginBottom: '12px' }}>
                <h2 className="home-heading" style={{ fontSize: '24px' }}>Frequently Asked Questions</h2>
                <div className="home-gold-line"></div>
              </div>

              <div className="home-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="home-faq-item" key={idx}>
                      <button
                        className="home-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <div className="home-faq-header-left">
                          <ShieldCheck className="home-faq-shield-icon" />
                          <span className="home-faq-question">{faq.question}</span>
                        </div>
                        <Plus className={`home-faq-plus ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="home-faq-body">
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
        </div>
      </section>

      {/* 7. SECTION — INFOGRAPHIC & IMPORTANT POLICY NOTE */}
      <section className="home-section" style={{ paddingTop: '10px' }}>
        <div className="home-container">
          <div className="home-info-note-grid">
            {/* Left: Home Infographic */}
            <div className="home-infographic-card">
              <div className="home-infographic-house-thumb">
                <House className="w-8 h-8 text-slate-400 mb-1" />
                <span className="home-placeholder-label">Home Visual</span>
              </div>

              {/* Left 4 connected pills */}
              <div className="home-info-pills-col">
                <div className="home-info-pill-item">
                  <Building2 />
                  <span>BUILDING STRUCTURE</span>
                </div>
                <div className="home-info-pill-item">
                  <Sofa />
                  <span>HOUSEHOLD CONTENTS</span>
                </div>
                <div className="home-info-pill-item">
                  <Gem />
                  <span>SPECIFIED VALUABLES</span>
                </div>
                <div className="home-info-pill-item">
                  <House />
                  <span>OTHER INSURED PROPERTY</span>
                </div>
              </div>

              {/* Center Hub */}
              <div className="home-infographic-hub">
                <House className="w-6 h-6" />
                <span className="home-hub-title">HOME</span>
              </div>

              {/* Right 6 connected pills */}
              <div className="home-info-pills-col">
                <div className="home-info-pill-item red">
                  <TriangleAlert />
                  <span>RISKS &amp; EXCLUSIONS</span>
                </div>
                <div className="home-info-pill-item gold">
                  <ShieldCheck />
                  <span>INSURED EVENTS</span>
                </div>
                <div className="home-info-pill-item gold">
                  <FileText />
                  <span>SPECIAL CONDITIONS</span>
                </div>
                <div className="home-info-pill-item gold">
                  <Lock />
                  <span>THEFT / BURGLARY</span>
                </div>
                <div className="home-info-pill-item gold">
                  <Laptop />
                  <span>PORTABLE ITEMS</span>
                </div>
                <div className="home-info-pill-item gold">
                  <FileCheck />
                  <span>POLICY</span>
                </div>
              </div>
            </div>

            {/* Right: Important Policy Note */}
            <div className="home-policy-note-card">
              <div className="home-policy-note-header">
                <ShieldCheck className="home-policy-note-shield" />
                <FileText className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h4 className="home-policy-note-heading">Important Policy Note</h4>
                <div className="home-gold-line" style={{ width: '32px', height: '2.5px', margin: '8px 0' }}></div>
                <p className="home-policy-note-text">
                  The final policy benefits, premium, eligibility, exclusions, waiting periods, deductibles, add-ons, underwriting and claim conditions are determined by the insurer and policy wording. Product-specific claims on the website must match approved insurer material.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION — RELATED SERVICES */}
      <section className="home-section" style={{ paddingTop: '10px' }}>
        <div className="home-container">
          <div className="home-header-row" style={{ marginBottom: '16px' }}>
            <h2 className="home-heading">Related Services</h2>
            <div className="home-gold-line"></div>
          </div>

          <div className="home-related-cards">
            <Link to="/insurance/" className="home-related-card">
              <div className="home-related-left">
                <FileText className="home-related-icon" />
                <span className="home-related-title">Insurance Services</span>
              </div>
              <span className="home-related-arrow">→</span>
            </Link>

            <Link to="/health-insurance-madurai/" className="home-related-card">
              <div className="home-related-left">
                <HeartPulse className="home-related-icon" />
                <span className="home-related-title">Health Insurance</span>
              </div>
              <span className="home-related-arrow">→</span>
            </Link>

            <Link to="/motor-insurance-madurai/" className="home-related-card">
              <div className="home-related-left">
                <CarFront className="home-related-icon" />
                <span className="home-related-title">Motor Insurance</span>
              </div>
              <span className="home-related-arrow">→</span>
            </Link>

            <Link to="/sme-business-insurance/" className="home-related-card">
              <div className="home-related-left">
                <BriefcaseBusiness className="home-related-icon" />
                <span className="home-related-title">SME &amp; Business Insurance</span>
              </div>
              <span className="home-related-arrow">→</span>
            </Link>

            <Link to="/travel-insurance-madurai/" className="home-related-card">
              <div className="home-related-left">
                <Plane className="home-related-icon" />
                <span className="home-related-title">Travel Insurance</span>
              </div>
              <span className="home-related-arrow">→</span>
            </Link>
          </div>

          {/* 10. DISCLAIMER / INFORMATION BAR */}
          <div className="home-disclaimer-strip">
            <div className="home-disclaimer-left-badge">
              <div className="home-disclaimer-icon-wrap">
                <ShieldCheck className="home-disclaimer-icon" />
              </div>
              <span className="home-disclaimer-badge-title">Insurance Disclaimer</span>
            </div>
            <p className="home-disclaimer-text">
              Insurance is the subject matter of solicitation. Balaji Associates' exact insurance intermediary/agent status, licence/registration number and authorised insurer relationships must be displayed as legally required. Coverage, premium, underwriting, exclusions, waiting periods, deductibles, add-ons and claims are governed by the respective insurer and policy wording. Read the policy document carefully before purchase.
            </p>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BANNER */}
      <section className="home-bottom-cta-section">
        <div className="home-container">
          <div className="home-bottom-cta-card">
            <div className="home-bottom-cta-img-col">
              <ImageIcon className="home-placeholder-icon" style={{ opacity: 0.35 }} />
              <span className="home-placeholder-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Home Exterior</span>
            </div>

            <div className="home-bottom-cta-center">
              <div className="home-bottom-cta-phone-badge">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <h3 className="home-bottom-cta-title">
                  Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644
                </h3>
              </div>

              <a href="tel:9842817644" className="home-btn-cta-circle">
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="home-bottom-cta-img-col">
              <ImageIcon className="home-placeholder-icon" style={{ opacity: 0.35 }} />
              <span className="home-placeholder-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Adviser &amp; Temple</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeInsurance;
