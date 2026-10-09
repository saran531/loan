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
  Plane,
  Globe,
  MapPin,
  Luggage,
  Users,
  GraduationCap,
  HeartPulse,
  CalendarDays,
  BookOpen,
  Clock,
  FileText,
  TriangleAlert,
  Mountain,
  LifeBuoy,
  UserRound,
  CarFront,
  BriefcaseBusiness,
  House,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'Is travel insurance mandatory for every international trip?',
    answer: 'It is mandatory for certain destinations (such as Schengen countries and select others requiring proof of insurance for visa issuance), while highly recommended for others to safeguard against unexpected foreign medical costs and travel disruptions.'
  },
  {
    question: 'Does travel insurance cover all medical expenses abroad?',
    answer: 'It typically covers emergency illnesses, accidental injuries, and emergency hospitalisation abroad according to the policy terms and sum insured. Pre-existing conditions, routine treatments, and non-emergency care are generally excluded or subject to strict limitations.'
  },
  {
    question: 'Does it cover lost baggage or flight delay?',
    answer: 'Yes, many comprehensive plans cover total loss of checked-in baggage, baggage delay beyond a specified number of hours, and flight delays subject to deductible hours and insurer policy limits.'
  },
  {
    question: 'When should I buy travel insurance?',
    answer: 'It is ideal to purchase travel insurance as soon as your travel bookings, flight tickets, or visa applications are confirmed so that trip cancellation benefits (if included in the plan) become active before departure.'
  }
];

function TravelInsurance() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="travel-insurance-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .travel-insurance-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .ti-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .ti-section {
          padding: 40px 0;
        }

        .ti-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .ti-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .ti-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .ti-subtext {
          font-size: 14px;
          color: #64748B;
          margin: -10px 0 22px 0;
        }

        .ti-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .ti-img-placeholder {
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

        .ti-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        .ti-placeholder-label {
          font-size: 11.5px;
          font-weight: 600;
          color: #94A3B8;
          margin-top: 8px;
          letter-spacing: 0.3px;
        }

        /* 1. BREADCRUMB */
        .ti-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .ti-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .ti-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .ti-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .ti-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .ti-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .ti-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 2. HERO SECTION */
        .ti-hero-section {
          padding: 24px 0 44px;
          background: linear-gradient(180deg, rgba(240, 249, 255, 0.5) 0%, rgba(255, 255, 255, 1) 100%);
        }

        .ti-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }

        .ti-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .ti-hero-badge {
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

        .ti-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .ti-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .ti-hero-title {
          font-size: 40px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .ti-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .ti-btn-primary {
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

        .ti-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .ti-hero-visual-card {
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

        .ti-floating-stack {
          position: absolute;
          top: 24px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          z-index: 2;
        }

        .ti-floating-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .ti-floating-icon {
          width: 17px;
          height: 17px;
          color: #003B73;
        }

        .ti-floating-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        /* 3. SECTION — WHO MAY CONSIDER TRAVEL INSURANCE */
        .ti-consider-5-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .ti-consider-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .ti-consider-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }

        .ti-consider-top {
          padding: 16px 14px 12px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          min-height: 70px;
        }

        .ti-consider-icon-badge {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #ECFDF5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ti-consider-title {
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        .ti-consider-img-box {
          height: 120px;
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* 4. SECTION — WHAT TO CHECK */
        .ti-check-10-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .ti-check-card {
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

        .ti-check-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .ti-check-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ti-check-icon-wrap.green {
          background: #ECFDF5;
          color: #059669;
        }

        .ti-check-icon-wrap.gold {
          background: #FFFBEB;
          color: #D97706;
        }

        .ti-check-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 5. TRAVEL INSURANCE VISUAL INFOGRAPHIC */
        .ti-infographic-banner {
          position: relative;
          background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%);
          border: 1.5px solid #E2E8F0;
          border-radius: 24px;
          padding: 36px 28px;
          min-height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-top: 36px;
        }

        .ti-infographic-center-hub {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #0A1B3A;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 24px rgba(10, 27, 58, 0.25);
          z-index: 2;
        }

        .ti-hub-text {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          margin-top: 4px;
        }

        .ti-info-column {
          display: flex;
          flex-direction: column;
          gap: 14px;
          z-index: 2;
        }

        .ti-info-pill-item {
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 50px;
          padding: 6px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 800;
          color: #0A1B3A;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
          white-space: nowrap;
        }

        .ti-info-pill-item svg {
          width: 14px;
          height: 14px;
          color: #059669;
        }

        .ti-infographic-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 40px;
          align-items: center;
          width: 100%;
          max-width: 950px;
          z-index: 2;
        }

        /* 6. SECTION — DESTINATION & VISA & HOW WE HELP */
        .ti-two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .ti-col-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* 7. SECTION — FAQS & RIGHT INFOGRAPHIC */
        .ti-faq-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .ti-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ti-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .ti-faq-item:hover {
          border-color: #CBD5E1;
        }

        .ti-faq-header {
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

        .ti-faq-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ti-faq-chevron {
          width: 14px;
          height: 14px;
          color: #D97706;
          transition: transform 0.2s;
        }

        .ti-faq-question {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .ti-faq-plus {
          width: 16px;
          height: 16px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .ti-faq-plus.rotate {
          transform: rotate(45deg);
        }

        .ti-faq-body {
          padding: 0 18px 14px 42px;
          font-size: 12.5px;
          line-height: 1.6;
          color: #475569;
        }

        /* Right Side Second Infographic */
        .ti-diag-infographic-box {
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 20px;
          padding: 24px 20px;
          display: grid;
          grid-template-columns: 0.9fr auto 1.1fr;
          gap: 14px;
          align-items: center;
        }

        .ti-diag-left-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ti-diag-right-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ti-diag-center-plane {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #0A1B3A;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .ti-diag-pill {
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

        .ti-diag-pill svg {
          width: 12px;
          height: 12px;
          color: #D97706;
          flex-shrink: 0;
        }

        /* 8. IMPORTANT POLICY NOTE */
        .ti-policy-note-banner {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 20px;
          padding: 28px 36px;
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 10px;
          box-shadow: 0 12px 28px rgba(10, 27, 58, 0.2);
        }

        .ti-policy-note-img-holder {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ti-policy-note-content {
          flex: 1;
        }

        .ti-policy-note-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .ti-policy-note-heading {
          font-size: 18px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .ti-policy-note-text {
          font-size: 13px;
          line-height: 1.6;
          color: #E2E8F0;
          margin: 0;
        }

        /* 9. RELATED SERVICES */
        .ti-related-cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .ti-related-card {
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

        .ti-related-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
        }

        .ti-related-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ti-related-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
        }

        .ti-related-title {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .ti-related-arrow {
          font-size: 13px;
          color: #1D4ED8;
          font-weight: bold;
        }

        /* 10. BOTTOM CTA BANNER */
        .ti-bottom-cta-section {
          padding: 24px 0 16px;
        }

        .ti-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 24px;
          padding: 0;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
          position: relative;
          overflow: hidden;
        }

        .ti-bottom-cta-img-col {
          height: 200px;
          background: #1E293B;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .ti-bottom-cta-content {
          padding: 34px 44px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ti-bottom-cta-title {
          font-size: 20px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.35;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .ti-btn-cta-gold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #ECA822 0%, #D97706 100%);
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 26px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(217, 119, 6, 0.4);
          transition: transform 0.2s;
          align-self: flex-start;
        }

        .ti-btn-cta-gold:hover {
          transform: translateY(-2px);
        }

        /* 11. DISCLAIMER / INFORMATION BAR */
        .ti-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 16px 0 28px 0;
        }

        .ti-disclaimer-left-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .ti-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ti-disclaimer-icon {
          width: 17px;
          height: 17px;
          color: #1E40AF;
        }

        .ti-disclaimer-badge-text {
          display: flex;
          flex-direction: column;
        }

        .ti-disclaimer-badge-title {
          font-size: 12px;
          font-weight: 800;
          color: #0A1B3A;
        }

        .ti-disclaimer-badge-sub {
          font-size: 10px;
          color: #64748B;
        }

        .ti-disclaimer-text {
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
          .ti-hero-grid,
          .ti-two-col-grid,
          .ti-faq-split-grid,
          .ti-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .ti-consider-5-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .ti-check-10-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .ti-infographic-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            text-align: center;
          }

          .ti-diag-infographic-box {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .ti-related-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .ti-hero-title {
            font-size: 32px;
          }

          .ti-disclaimer-strip {
            flex-direction: column;
            align-items: flex-start;
          }

          .ti-disclaimer-text {
            border-left: none;
            padding-left: 0;
          }
        }

        @media (max-width: 640px) {
          .ti-consider-5-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ti-check-10-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ti-policy-note-banner {
            flex-direction: column;
            text-align: center;
          }

          .ti-related-cards {
            grid-template-columns: 1fr;
          }

          .ti-bottom-cta-content {
            padding: 24px 20px;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="ti-breadcrumb-wrap">
        <div className="ti-container">
          <div className="ti-breadcrumb">
            <HomeIcon className="ti-breadcrumb-home-icon" />
            <Link to="/" className="ti-breadcrumb-link">Home</Link>
            <span className="ti-breadcrumb-sep">&gt;</span>
            <Link to="/insurance/" className="ti-breadcrumb-link">Insurance</Link>
            <span className="ti-breadcrumb-sep">&gt;</span>
            <span className="ti-breadcrumb-current">Travel Insurance</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="ti-section ti-hero-section">
        <div className="ti-container">
          <div className="ti-hero-grid">
            <div className="ti-hero-left">
              <div className="ti-hero-top-row">
                <div className="ti-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>TRAVEL INSURANCE</span>
                </div>
                <div className="ti-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="ti-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="ti-hero-title">
                Travel Insurance<br />
                Assistance in Madurai
              </h1>

              <p className="ti-text-p">
                Travel plans can be disrupted by illness, medical emergencies, baggage issues, delays or other unexpected events. Travel insurance can provide protection for specified risks according to the policy, but coverage varies widely by destination, trip duration and plan.
              </p>

              <p className="ti-text-p">
                Balaji Associates helps travellers understand the cover questions to ask before purchasing a domestic or international travel policy.
              </p>

              <div className="ti-hero-actions">
                <a href="tel:9842817644" className="ti-btn-primary">
                  <Phone className="w-4 h-4" />
                  <span>Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="ti-hero-right">
              <div className="ti-hero-visual-card">
                <ImageIcon className="ti-placeholder-icon" />
                <span className="ti-placeholder-label">Traveller in Airport &amp; Madurai Temple</span>

                {/* 5 Floating Cards */}
                <div className="ti-floating-stack">
                  <div className="ti-floating-card">
                    <Plane className="ti-floating-icon" />
                    <span className="ti-floating-label">Travel Insurance</span>
                  </div>

                  <div className="ti-floating-card">
                    <Globe className="ti-floating-icon" />
                    <span className="ti-floating-label">International Travel</span>
                  </div>

                  <div className="ti-floating-card">
                    <MapPin className="ti-floating-icon" />
                    <span className="ti-floating-label">Domestic Travel</span>
                  </div>

                  <div className="ti-floating-card">
                    <ShieldCheck className="ti-floating-icon" />
                    <span className="ti-floating-label">Medical</span>
                  </div>

                  <div className="ti-floating-card">
                    <Luggage className="ti-floating-icon" />
                    <span className="ti-floating-label">Trip-related Risks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION — WHO MAY CONSIDER TRAVEL INSURANCE */}
      <section className="ti-section">
        <div className="ti-container">
          <div className="ti-header-row">
            <h2 className="ti-heading">Who May Consider Travel Insurance</h2>
            <div className="ti-gold-line"></div>
          </div>
          <p className="ti-subtext">
            Product availability varies.
          </p>

          <div className="ti-consider-5-grid">
            {/* Card 1 */}
            <div className="ti-consider-card">
              <div className="ti-consider-top">
                <div className="ti-consider-icon-badge">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="ti-consider-title">International travellers</h3>
              </div>
              <div className="ti-consider-img-box">
                <ImageIcon className="ti-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ti-placeholder-label">Airport Traveller</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="ti-consider-card">
              <div className="ti-consider-top">
                <div className="ti-consider-icon-badge">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="ti-consider-title">Domestic travellers where applicable</h3>
              </div>
              <div className="ti-consider-img-box">
                <ImageIcon className="ti-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ti-placeholder-label">Domestic Trip</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="ti-consider-card">
              <div className="ti-consider-top">
                <div className="ti-consider-icon-badge">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="ti-consider-title">Families travelling together</h3>
              </div>
              <div className="ti-consider-img-box">
                <ImageIcon className="ti-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ti-placeholder-label">Family Luggage</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="ti-consider-card">
              <div className="ti-consider-top">
                <div className="ti-consider-icon-badge">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="ti-consider-title">Students travelling abroad where suitable products are available</h3>
              </div>
              <div className="ti-consider-img-box">
                <ImageIcon className="ti-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ti-placeholder-label">Student Abroad</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="ti-consider-card">
              <div className="ti-consider-top">
                <div className="ti-consider-icon-badge">
                  <Plane className="w-4 h-4" />
                </div>
                <h3 className="ti-consider-title">Frequent travellers where relevant plans exist</h3>
              </div>
              <div className="ti-consider-img-box">
                <ImageIcon className="ti-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ti-placeholder-label">Frequent Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION — WHAT TO CHECK */}
      <section className="ti-section">
        <div className="ti-container">
          <div className="ti-header-row">
            <h2 className="ti-heading">What to Check</h2>
            <div className="ti-gold-line"></div>
          </div>
          <p className="ti-subtext">
            Do not assume every travel inconvenience is covered.
          </p>

          <div className="ti-check-10-grid">
            <div className="ti-check-card">
              <div className="ti-check-icon-wrap green">
                <HeartPulse className="w-4 h-4" />
              </div>
              <p className="ti-check-label">Emergency medical coverage</p>
            </div>

            <div className="ti-check-card">
              <div className="ti-check-icon-wrap gold">
                <CalendarDays className="w-4 h-4" />
              </div>
              <p className="ti-check-label">Trip cancellation/interruption terms</p>
            </div>

            <div className="ti-check-card">
              <div className="ti-check-icon-wrap gold">
                <Luggage className="w-4 h-4" />
              </div>
              <p className="ti-check-label">Baggage loss/delay conditions</p>
            </div>

            <div className="ti-check-card">
              <div className="ti-check-icon-wrap green">
                <BookOpen className="w-4 h-4" />
              </div>
              <p className="ti-check-label">Passport-related cover where offered</p>
            </div>

            <div className="ti-check-card">
              <div className="ti-check-icon-wrap gold">
                <Clock className="w-4 h-4" />
              </div>
              <p className="ti-check-label">Flight-delay conditions</p>
            </div>

            <div className="ti-check-card">
              <div className="ti-check-icon-wrap gold">
                <FileText className="w-4 h-4" />
              </div>
              <p className="ti-check-label">Deductibles/excess</p>
            </div>

            <div className="ti-check-card">
              <div className="ti-check-icon-wrap gold">
                <TriangleAlert className="w-4 h-4" />
              </div>
              <p className="ti-check-label">Pre-existing condition rules</p>
            </div>

            <div className="ti-check-card">
              <div className="ti-check-icon-wrap green">
                <Mountain className="w-4 h-4" />
              </div>
              <p className="ti-check-label">Adventure/sports exclusions</p>
            </div>

            <div className="ti-check-card">
              <div className="ti-check-icon-wrap green">
                <Globe className="w-4 h-4" />
              </div>
              <p className="ti-check-label">Destination and visa requirements</p>
            </div>

            <div className="ti-check-card">
              <div className="ti-check-icon-wrap gold">
                <LifeBuoy className="w-4 h-4" />
              </div>
              <p className="ti-check-label">Emergency assistance process</p>
            </div>
          </div>

          {/* 5. TRAVEL INSURANCE VISUAL INFOGRAPHIC */}
          <div className="ti-infographic-banner">
            <div className="ti-infographic-grid">
              {/* Left side 5 pills */}
              <div className="ti-info-column">
                <div className="ti-info-pill-item">
                  <Plane />
                  <span>EMERGENCY MEDICAL COVERAGE</span>
                </div>
                <div className="ti-info-pill-item">
                  <CalendarDays />
                  <span>TRIP CANCELLATION / INTERRUPTION</span>
                </div>
                <div className="ti-info-pill-item">
                  <Luggage />
                  <span>BAGGAGE LOSS / DELAY</span>
                </div>
                <div className="ti-info-pill-item">
                  <BookOpen />
                  <span>PASSPORT-RELATED COVER</span>
                </div>
                <div className="ti-info-pill-item">
                  <Clock />
                  <span>FLIGHT-DELAY CONDITIONS</span>
                </div>
              </div>

              {/* Center Hub */}
              <div className="ti-infographic-center-hub">
                <Plane className="w-7 h-7 text-white" />
                <span className="ti-hub-text">TRAVEL</span>
              </div>

              {/* Right side 5 pills */}
              <div className="ti-info-column">
                <div className="ti-info-pill-item">
                  <GraduationCap />
                  <span>DEDUCTIBLES / EXCESS</span>
                </div>
                <div className="ti-info-pill-item">
                  <TriangleAlert />
                  <span>PRE-EXISTING CONDITION RULES</span>
                </div>
                <div className="ti-info-pill-item">
                  <Mountain />
                  <span>ADVENTURE / SPORTS EXCLUSIONS</span>
                </div>
                <div className="ti-info-pill-item">
                  <Globe />
                  <span>DESTINATION AND VISA REQUIREMENTS</span>
                </div>
                <div className="ti-info-pill-item">
                  <LifeBuoy />
                  <span>EMERGENCY ASSISTANCE PROCESS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — DESTINATION & VISA & HOW WE HELP */}
      <section className="ti-section">
        <div className="ti-container">
          <div className="ti-two-col-grid">
            {/* Left: Destination & Visa Requirements */}
            <div className="ti-col-card">
              <div>
                <div className="ti-header-row" style={{ marginBottom: '12px' }}>
                  <h2 className="ti-heading" style={{ fontSize: '24px' }}>Destination &amp; Visa Requirements</h2>
                  <div className="ti-gold-line"></div>
                </div>
                <p className="ti-text-p" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                  Some destinations or visa processes may require specific insurance conditions. Customers should verify the latest official destination/visa requirements rather than relying only on generic website copy.
                </p>
              </div>

              <div className="ti-img-placeholder" style={{ minHeight: '170px', marginTop: '14px' }}>
                <ImageIcon className="ti-placeholder-icon" />
                <span className="ti-placeholder-label">Passport, Map &amp; Airplane</span>
              </div>
            </div>

            {/* Right: How Balaji Associates Helps */}
            <div className="ti-col-card">
              <div>
                <div className="ti-header-row" style={{ marginBottom: '12px' }}>
                  <h2 className="ti-heading" style={{ fontSize: '24px' }}>How Balaji Associates Helps</h2>
                  <div className="ti-gold-line"></div>
                </div>
                <p className="ti-text-p" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                  We help customers discuss destination, travel dates, traveller age and coverage priorities so the appropriate authorised insurer options can be considered.
                </p>
              </div>

              <div className="ti-img-placeholder" style={{ minHeight: '170px', marginTop: '14px' }}>
                <ImageIcon className="ti-placeholder-icon" />
                <span className="ti-placeholder-label">Travel Consultation &amp; Globe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION — FAQS & RIGHT INFOGRAPHIC */}
      <section className="ti-section">
        <div className="ti-container">
          <div className="ti-faq-split-grid">
            {/* Left: Frequently Asked Questions */}
            <div>
              <div className="ti-header-row">
                <h2 className="ti-heading">Frequently Asked Questions</h2>
                <div className="ti-gold-line"></div>
              </div>

              <div className="ti-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="ti-faq-item" key={idx}>
                      <button
                        className="ti-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <div className="ti-faq-header-left">
                          <ChevronRight
                            className="ti-faq-chevron"
                            style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}
                          />
                          <span className="ti-faq-question">{faq.question}</span>
                        </div>
                        <Plus className={`ti-faq-plus ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="ti-faq-body">
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

            {/* Right: Second Infographic */}
            <div>
              <div className="ti-diag-infographic-box">
                {/* Left 5 Traveller pills */}
                <div className="ti-diag-left-col">
                  <div className="ti-diag-pill">
                    <UserRound />
                    <span>TRAVELLER</span>
                  </div>
                  <div className="ti-diag-pill">
                    <MapPin />
                    <span>DESTINATION</span>
                  </div>
                  <div className="ti-diag-pill">
                    <CalendarDays />
                    <span>TRAVEL DATES</span>
                  </div>
                  <div className="ti-diag-pill">
                    <Users />
                    <span>TRAVELLER AGE</span>
                  </div>
                  <div className="ti-diag-pill">
                    <ShieldCheck />
                    <span>COVERAGE PRIORITIES</span>
                  </div>
                </div>

                {/* Center Airplane connector */}
                <div className="ti-diag-center-plane">
                  <Plane className="w-4 h-4" />
                </div>

                {/* Right 10 Coverage pills */}
                <div className="ti-diag-right-col">
                  <div className="ti-diag-pill">
                    <HeartPulse />
                    <span>EMERGENCY MEDICAL COVERAGE</span>
                  </div>
                  <div className="ti-diag-pill">
                    <CalendarDays />
                    <span>TRIP CANCELLATION / INTERRUPTION</span>
                  </div>
                  <div className="ti-diag-pill">
                    <Luggage />
                    <span>BAGGAGE LOSS / DELAY</span>
                  </div>
                  <div className="ti-diag-pill">
                    <BookOpen />
                    <span>PASSPORT-RELATED COVER</span>
                  </div>
                  <div className="ti-diag-pill">
                    <Clock />
                    <span>FLIGHT-DELAY CONDITIONS</span>
                  </div>
                  <div className="ti-diag-pill">
                    <FileText />
                    <span>DEDUCTIBLES / EXCESS</span>
                  </div>
                  <div className="ti-diag-pill">
                    <TriangleAlert />
                    <span>PRE-EXISTING CONDITION RULES</span>
                  </div>
                  <div className="ti-diag-pill">
                    <Mountain />
                    <span>ADVENTURE / SPORTS EXCLUSIONS</span>
                  </div>
                  <div className="ti-diag-pill">
                    <Globe />
                    <span>DESTINATION AND VISA REQUIREMENTS</span>
                  </div>
                  <div className="ti-diag-pill">
                    <LifeBuoy />
                    <span>EMERGENCY ASSISTANCE PROCESS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 8. IMPORTANT POLICY NOTE */}
          <div className="ti-policy-note-banner">
            <div className="ti-policy-note-img-holder">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
            </div>

            <div className="ti-policy-note-content">
              <div className="ti-policy-note-title-row">
                <h4 className="ti-policy-note-heading">Important Policy Note</h4>
                <div className="ti-gold-line" style={{ width: '32px', height: '2.5px' }}></div>
              </div>
              <p className="ti-policy-note-text">
                The final policy benefits, premium, eligibility, exclusions, waiting periods, deductibles, add-ons, underwriting and claim conditions are determined by the insurer and policy wording. Product-specific claims on the website must match approved insurer material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION — RELATED SERVICES */}
      <section className="ti-section" style={{ paddingTop: '10px' }}>
        <div className="ti-container">
          <div className="ti-header-row" style={{ marginBottom: '16px' }}>
            <h2 className="ti-heading">Related Services</h2>
            <div className="ti-gold-line"></div>
          </div>

          <div className="ti-related-cards">
            <Link to="/insurance/" className="ti-related-card">
              <div className="ti-related-left">
                <ShieldCheck className="ti-related-icon" />
                <span className="ti-related-title">Insurance Services</span>
              </div>
              <span className="ti-related-arrow">→</span>
            </Link>

            <Link to="/health-insurance-madurai/" className="ti-related-card">
              <div className="ti-related-left">
                <HeartPulse className="ti-related-icon" />
                <span className="ti-related-title">Health Insurance</span>
              </div>
              <span className="ti-related-arrow">→</span>
            </Link>

            <Link to="/motor-insurance-madurai/" className="ti-related-card">
              <div className="ti-related-left">
                <CarFront className="ti-related-icon" />
                <span className="ti-related-title">Motor Insurance</span>
              </div>
              <span className="ti-related-arrow">→</span>
            </Link>

            <Link to="/sme-business-insurance/" className="ti-related-card">
              <div className="ti-related-left">
                <BriefcaseBusiness className="ti-related-icon" />
                <span className="ti-related-title">SME &amp; Business Insurance</span>
              </div>
              <span className="ti-related-arrow">→</span>
            </Link>

            <Link to="/home-insurance-madurai/" className="ti-related-card">
              <div className="ti-related-left">
                <House className="ti-related-icon" />
                <span className="ti-related-title">Home Insurance</span>
              </div>
              <span className="ti-related-arrow">→</span>
            </Link>
          </div>

          {/* 11. DISCLAIMER / INFORMATION BAR */}
          <div className="ti-disclaimer-strip">
            <div className="ti-disclaimer-left-badge">
              <div className="ti-disclaimer-icon-wrap">
                <ShieldCheck className="ti-disclaimer-icon" />
              </div>
              <div className="ti-disclaimer-badge-text">
                <span className="ti-disclaimer-badge-title">Insurance Disclaimer</span>
                <span className="ti-disclaimer-badge-sub">Travel Insurance Services</span>
              </div>
            </div>
            <p className="ti-disclaimer-text">
              Insurance is the subject matter of solicitation. Balaji Associates' exact insurance intermediary/agent status, licence/registration number and authorised insurer relationships must be displayed as legally required. Coverage, premium, underwriting, exclusions, waiting periods, deductibles, add-ons and claims are governed by the respective insurer and policy wording. Read the policy document carefully before purchase.
            </p>
          </div>
        </div>
      </section>

      {/* 10. BOTTOM CTA BANNER */}
      <section className="ti-bottom-cta-section">
        <div className="ti-container">
          <div className="ti-bottom-cta-card">
            <div className="ti-bottom-cta-img-col">
              <ImageIcon className="ti-placeholder-icon" style={{ opacity: 0.35 }} />
              <span className="ti-placeholder-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Traveller, Airport &amp; Skyline</span>
            </div>

            <div className="ti-bottom-cta-content">
              <h3 className="ti-bottom-cta-title">
                Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644
              </h3>

              <a href="tel:9842817644" className="ti-btn-cta-gold">
                <Phone className="w-4 h-4" />
                <span>Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TravelInsurance;
