import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home as HomeIcon,
  Plus,
  Phone,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  UserRound,
  Users,
  UsersRound,
  BriefcaseBusiness,
  ClipboardCheck,
  Building2,
  Clock,
  FileHeart,
  Receipt,
  Bed,
  Share2,
  Ban,
  RefreshCw,
  Calendar,
  Sparkles,
  FileText,
  Stethoscope,
  Wallet,
  ClipboardList,
  CarFront,
  Plane,
  House,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'What is the best health insurance in Madurai?',
    answer: 'There is no single "best" policy for everyone. The right plan depends on age, family size, hospital network preference in Madurai, pre-existing conditions, required sum insured, and budget. Comparing policy terms and exclusions is more important than choosing solely based on brand name or low premium.'
  },
  {
    question: 'What is a waiting period?',
    answer: 'A waiting period is the initial duration during which certain medical conditions or treatments are not covered by the insurer. Common waiting periods include an initial 30-day waiting period (except accidents), 1 to 2 years for specific named ailments, and 2 to 4 years for pre-existing diseases.'
  },
  {
    question: 'Does cashless mean every bill is automatically paid?',
    answer: 'No. Cashless facility means the insurer settles admissible medical expenses directly with network hospitals according to policy terms. Non-medical expenses, deductibles, co-pays, and costs exceeding sub-limits (like room rent limits) must still be borne by the insured.'
  },
  {
    question: 'Should I disclose existing medical conditions?',
    answer: 'Yes, absolutely. Truthful disclosure of pre-existing conditions, past surgeries, and ongoing treatments is critical during application. Non-disclosure can lead to claim rejection or cancellation of the policy under insurance underwriting rules.'
  }
];

function HealthInsurance() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="health-insurance-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .health-insurance-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .hi-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hi-section {
          padding: 40px 0;
        }

        .hi-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .hi-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .hi-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .hi-subtext {
          font-size: 14px;
          color: #64748B;
          margin: -10px 0 22px 0;
        }

        .hi-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .hi-img-placeholder {
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

        .hi-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        .hi-placeholder-label {
          font-size: 11.5px;
          font-weight: 600;
          color: #94A3B8;
          margin-top: 8px;
          letter-spacing: 0.3px;
        }

        /* 1. BREADCRUMB */
        .hi-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .hi-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .hi-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .hi-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .hi-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .hi-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .hi-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 2. HERO SECTION */
        .hi-hero-section {
          padding: 24px 0 44px;
          background: linear-gradient(180deg, rgba(240, 249, 255, 0.5) 0%, rgba(255, 255, 255, 1) 100%);
        }

        .hi-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }

        .hi-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .hi-hero-badge {
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

        .hi-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .hi-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .hi-hero-title {
          font-size: 40px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .hi-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .hi-btn-primary {
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
          transition: transform 0.2s, background 0.2s;
        }

        .hi-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .hi-btn-secondary {
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

        .hi-btn-secondary:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        .hi-hero-visual-card {
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

        .hi-floating-card {
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

        .hi-floating-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .hi-floating-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        .hi-float-top-left {
          top: 24px;
          left: 24px;
        }

        .hi-float-bottom-left {
          bottom: 24px;
          left: 24px;
        }

        .hi-float-top-right {
          top: 24px;
          right: 24px;
        }

        .hi-float-bottom-right {
          bottom: 24px;
          right: 24px;
        }

        /* 3. SECTION — WHO MAY NEED HEALTH INSURANCE */
        .hi-need-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .hi-need-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .hi-need-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }

        .hi-need-img-box {
          width: 100%;
          height: 130px;
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .hi-need-body {
          padding: 16px 14px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .hi-need-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #FFFBEB;
          color: #D97706;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .hi-need-title {
          font-size: 13px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.4;
          margin: 0 0 14px 0;
          flex: 1;
        }

        .hi-need-arrow-wrap {
          display: flex;
          justify-content: flex-end;
        }

        .hi-need-arrow-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #FFFBEB;
          color: #D97706;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transition: background 0.2s, color 0.2s;
        }

        .hi-need-card:hover .hi-need-arrow-circle {
          background: #D97706;
          color: #FFFFFF;
        }

        /* 4. SECTION — WHAT TO COMPARE */
        .hi-compare-10-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          margin-bottom: 30px;
        }

        .hi-comp-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .hi-comp-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .hi-comp-icon-wrap {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #FFFBEB;
          color: #D97706;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hi-comp-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* Visual comparison section below cards */
        .hi-comparison-visual-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
          align-items: center;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
        }

        .hi-comp-vis-left {
          background: linear-gradient(135deg, #F0FDF4 0%, #EFF6FF 100%);
          border: 1px solid #BFDBFE;
          border-radius: 16px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: center;
          min-height: 240px;
        }

        .hi-comp-vis-heading {
          font-size: 18px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0 0 16px 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .hi-comp-vis-shield-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 8px;
        }

        .hi-comp-vis-right-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 20px;
        }

        .hi-comp-item-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hi-comp-check-icon {
          width: 17px;
          height: 17px;
          color: #059669;
          flex-shrink: 0;
        }

        .hi-comp-item-text {
          font-size: 12.5px;
          font-weight: 600;
          color: #334155;
        }

        /* 5. SECTION — ACCURATE DISCLOSURE MATTERS */
        .hi-disclosure-card {
          display: grid;
          grid-template-columns: 0.8fr 1.4fr 0.8fr;
          gap: 24px;
          align-items: center;
        }

        /* 6. SECTION — HOW BALAJI ASSOCIATES HELPS */
        .hi-helps-card {
          display: grid;
          grid-template-columns: 0.8fr 1.4fr 0.8fr;
          gap: 24px;
          align-items: center;
        }

        /* 7. SECTION — FAQS & KEY FACTORS BEFORE CHOOSING A POLICY */
        .hi-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        .hi-faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .hi-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .hi-faq-item:hover {
          border-color: #CBD5E1;
        }

        .hi-faq-header {
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

        .hi-faq-question {
          font-size: 13px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .hi-faq-plus {
          width: 16px;
          height: 16px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .hi-faq-plus.rotate {
          transform: rotate(45deg);
        }

        .hi-faq-body {
          padding: 0 16px 12px;
          font-size: 12.5px;
          line-height: 1.6;
          color: #475569;
        }

        /* Key Factors Box */
        .hi-key-factors-box {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 16px;
          align-items: center;
        }

        .hi-key-factor-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hi-key-factor-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .hi-key-factor-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ECFDF5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hi-key-factor-label {
          font-size: 11px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: 0.4px;
        }

        .hi-key-factors-center-doc {
          background: #F8FAFC;
          border: 2px solid #E2E8F0;
          border-radius: 16px;
          padding: 22px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 100px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.03);
        }

        /* 8. SECTION — IMPORTANT POLICY NOTE */
        .hi-note-strip {
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 16px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 10px;
        }

        .hi-note-icons-group {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .hi-note-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ECFDF5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hi-note-icon-circle.blue {
          background: #EFF6FF;
          color: #1D4ED8;
        }

        .hi-note-content {
          flex: 1;
        }

        .hi-note-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .hi-note-heading {
          font-size: 16px;
          font-weight: 800;
          color: #0A1B3A;
          margin: 0;
        }

        .hi-note-text {
          font-size: 12.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }

        /* 9. SECTION — RELATED SERVICES */
        .hi-related-cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .hi-related-card {
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

        .hi-related-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
        }

        .hi-related-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hi-related-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
        }

        .hi-related-title {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .hi-related-arrow {
          font-size: 13px;
          color: #1D4ED8;
          font-weight: bold;
        }

        /* 10. BOTTOM CTA */
        .hi-bottom-cta-section {
          padding: 24px 0 16px;
        }

        .hi-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 24px;
          padding: 36px 44px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
          position: relative;
          overflow: hidden;
        }

        .hi-bottom-cta-card::before {
          content: "";
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(236, 168, 34, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .hi-bottom-cta-title {
          font-size: 22px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 18px 0;
          line-height: 1.35;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .hi-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hi-btn-cta-gold {
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

        .hi-btn-cta-gold:hover {
          transform: translateY(-2px);
        }

        .hi-btn-cta-outline {
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

        .hi-btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .hi-bottom-cta-img-placeholder {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          min-height: 180px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* 11. DISCLAIMER / INFORMATION BAR */
        .hi-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 16px 0 28px 0;
        }

        .hi-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hi-disclaimer-icon {
          width: 18px;
          height: 18px;
          color: #1E40AF;
        }

        .hi-disclaimer-text {
          font-size: 12.5px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.55;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .hi-hero-grid,
          .hi-comparison-visual-box,
          .hi-disclosure-card,
          .hi-helps-card,
          .hi-split-grid,
          .hi-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .hi-need-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hi-compare-10-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .hi-related-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .hi-hero-title {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .hi-need-cards-grid {
            grid-template-columns: 1fr;
          }

          .hi-compare-10-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hi-comp-vis-right-grid {
            grid-template-columns: 1fr;
          }

          .hi-key-factors-box {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hi-note-strip {
            flex-direction: column;
            text-align: center;
          }

          .hi-note-title-row {
            justify-content: center;
          }

          .hi-related-cards {
            grid-template-columns: 1fr;
          }

          .hi-bottom-cta-card {
            padding: 26px 20px;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="hi-breadcrumb-wrap">
        <div className="hi-container">
          <div className="hi-breadcrumb">
            <HomeIcon className="hi-breadcrumb-home-icon" />
            <Link to="/" className="hi-breadcrumb-link">Home</Link>
            <span className="hi-breadcrumb-sep">&gt;</span>
            <Link to="/insurance/" className="hi-breadcrumb-link">Insurance</Link>
            <span className="hi-breadcrumb-sep">&gt;</span>
            <span className="hi-breadcrumb-current">Health Insurance</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="hi-section hi-hero-section">
        <div className="hi-container">
          <div className="hi-hero-grid">
            <div className="hi-hero-left">
              <div className="hi-hero-top-row">
                <div className="hi-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>HEALTH INSURANCE</span>
                </div>
                <div className="hi-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="hi-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="hi-hero-title">
                Health Insurance<br />
                Assistance in Madurai
              </h1>

              <p className="hi-text-p">
                A medical emergency can create both emotional and financial pressure. Health insurance is designed to provide financial protection for covered medical expenses according to the policy, but choosing a plan requires more than checking the premium.
              </p>

              <p className="hi-text-p">
                Balaji Associates helps customers understand the questions that matter before selecting a health-insurance option: who needs cover, what sum insured is appropriate to consider, what waiting periods or exclusions apply, whether there are co-payments or sub-limits, and how the insurer's hospital/claim process works.
              </p>

              <div className="hi-hero-actions">
                <Link to="/contact/" className="hi-btn-primary">
                  <span>Discuss Your Insurance Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="hi-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="hi-hero-right">
              <div className="hi-hero-visual-card">
                <ImageIcon className="hi-placeholder-icon" />
                <span className="hi-placeholder-label">Family with Adviser &amp; Madurai Temple</span>

                {/* 4 Floating Cards */}
                <div className="hi-floating-card hi-float-top-left">
                  <UserRound className="hi-floating-icon" />
                  <span className="hi-floating-label">Individual Health</span>
                </div>

                <div className="hi-floating-card hi-float-bottom-left">
                  <Users className="hi-floating-icon" />
                  <span className="hi-floating-label">Family Health</span>
                </div>

                <div className="hi-floating-card hi-float-top-right">
                  <ShieldCheck className="hi-floating-icon" />
                  <span className="hi-floating-label">Coverage</span>
                </div>

                <div className="hi-floating-card hi-float-bottom-right">
                  <ClipboardList className="hi-floating-icon" />
                  <span className="hi-floating-label">Policy Terms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION — WHO MAY NEED HEALTH INSURANCE */}
      <section className="hi-section">
        <div className="hi-container">
          <div className="hi-header-row">
            <h2 className="hi-heading">Who May Need Health Insurance</h2>
            <div className="hi-gold-line"></div>
          </div>
          <p className="hi-subtext">
            Needs differ by age, family structure, employer cover and financial situation.
          </p>

          <div className="hi-need-cards-grid">
            {/* Card 1 */}
            <div className="hi-need-card">
              <div className="hi-need-img-box">
                <ImageIcon className="hi-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="hi-placeholder-label">Individual Professional</span>
              </div>
              <div className="hi-need-body">
                <div className="hi-need-icon-wrap">
                  <UserRound className="w-5 h-5" />
                </div>
                <h3 className="hi-need-title">Individuals without adequate existing cover</h3>
                <div className="hi-need-arrow-wrap">
                  <span className="hi-need-arrow-circle">→</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hi-need-card">
              <div className="hi-need-img-box">
                <ImageIcon className="hi-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="hi-placeholder-label">Family with Adviser</span>
              </div>
              <div className="hi-need-body">
                <div className="hi-need-icon-wrap">
                  <UsersRound className="w-5 h-5" />
                </div>
                <h3 className="hi-need-title">Families looking for family health protection</h3>
                <div className="hi-need-arrow-wrap">
                  <span className="hi-need-arrow-circle">→</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hi-need-card">
              <div className="hi-need-img-box">
                <ImageIcon className="hi-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="hi-placeholder-label">Self-Employed Professional</span>
              </div>
              <div className="hi-need-body">
                <div className="hi-need-icon-wrap">
                  <BriefcaseBusiness className="w-5 h-5" />
                </div>
                <h3 className="hi-need-title">Self-employed professionals and business owners</h3>
                <div className="hi-need-arrow-wrap">
                  <span className="hi-need-arrow-circle">→</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="hi-need-card">
              <div className="hi-need-img-box">
                <ImageIcon className="hi-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="hi-placeholder-label">Reviewing Documents</span>
              </div>
              <div className="hi-need-body">
                <div className="hi-need-icon-wrap">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <h3 className="hi-need-title">People reviewing whether existing employer/personal cover is sufficient</h3>
                <div className="hi-need-arrow-wrap">
                  <span className="hi-need-arrow-circle">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION — WHAT TO COMPARE */}
      <section className="hi-section">
        <div className="hi-container">
          <div className="hi-header-row">
            <h2 className="hi-heading">What to Compare</h2>
            <div className="hi-gold-line"></div>
          </div>
          <p className="hi-subtext">
            Two policies with similar premiums can behave very differently at claim time.
          </p>

          {/* 10 Feature Cards */}
          <div className="hi-compare-10-grid">
            <div className="hi-comp-card">
              <div className="hi-comp-icon-wrap">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="hi-comp-label">Sum insured</p>
            </div>

            <div className="hi-comp-card">
              <div className="hi-comp-icon-wrap">
                <Building2 className="w-4 h-4" />
              </div>
              <p className="hi-comp-label">Hospitalisation coverage and policy scope</p>
            </div>

            <div className="hi-comp-card">
              <div className="hi-comp-icon-wrap">
                <Clock className="w-4 h-4" />
              </div>
              <p className="hi-comp-label">Waiting periods</p>
            </div>

            <div className="hi-comp-card">
              <div className="hi-comp-icon-wrap">
                <FileHeart className="w-4 h-4" />
              </div>
              <p className="hi-comp-label">Pre-existing disease conditions</p>
            </div>

            <div className="hi-comp-card">
              <div className="hi-comp-icon-wrap">
                <Receipt className="w-4 h-4" />
              </div>
              <p className="hi-comp-label">Co-payments and deductibles</p>
            </div>

            <div className="hi-comp-card">
              <div className="hi-comp-icon-wrap">
                <Bed className="w-4 h-4" />
              </div>
              <p className="hi-comp-label">Room-rent or treatment sub-limits where applicable</p>
            </div>

            <div className="hi-comp-card">
              <div className="hi-comp-icon-wrap">
                <Share2 className="w-4 h-4" />
              </div>
              <p className="hi-comp-label">Network/cashless arrangements according to insurer</p>
            </div>

            <div className="hi-comp-card">
              <div className="hi-comp-icon-wrap">
                <Ban className="w-4 h-4" />
              </div>
              <p className="hi-comp-label">Exclusions</p>
            </div>

            <div className="hi-comp-card">
              <div className="hi-comp-icon-wrap">
                <RefreshCw className="w-4 h-4" />
              </div>
              <p className="hi-comp-label">Restoration/bonus features if offered</p>
            </div>

            <div className="hi-comp-card">
              <div className="hi-comp-icon-wrap">
                <Calendar className="w-4 h-4" />
              </div>
              <p className="hi-comp-label">Renewal conditions</p>
            </div>
          </div>

          {/* Comparison Visual and Checklist Box */}
          <div className="hi-comparison-visual-box">
            <div className="hi-comp-vis-left">
              <h3 className="hi-comp-vis-heading">
                Two policies with similar premiums can behave very differently at claim time.
              </h3>
              <div className="hi-comp-vis-shield-wrap">
                <ShieldCheck className="w-12 h-12 text-emerald-600" />
                <Stethoscope className="w-10 h-10 text-blue-600" />
              </div>
            </div>

            <div className="hi-comp-vis-right-grid">
              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Sum insured</span>
              </div>
              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Room-rent / treatment sub-limits</span>
              </div>

              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Hospitalisation coverage</span>
              </div>
              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Network / cashless</span>
              </div>

              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Waiting periods</span>
              </div>
              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Exclusions</span>
              </div>

              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Pre-existing disease conditions</span>
              </div>
              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Restoration / bonus</span>
              </div>

              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Co-payments</span>
              </div>
              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Renewal</span>
              </div>

              <div className="hi-comp-item-row">
                <CheckCircle2 className="hi-comp-check-icon" />
                <span className="hi-comp-item-text">Deductibles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION — ACCURATE DISCLOSURE MATTERS */}
      <section className="hi-section">
        <div className="hi-container">
          <div className="hi-header-row">
            <h2 className="hi-heading">Accurate Disclosure Matters</h2>
            <div className="hi-gold-line"></div>
          </div>

          <div className="hi-disclosure-card">
            <div className="hi-img-placeholder" style={{ minHeight: '170px' }}>
              <ImageIcon className="hi-placeholder-icon" />
              <span className="hi-placeholder-label">Consultation &amp; Discussion</span>
            </div>

            <div>
              <p className="hi-text-p" style={{ fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>
                Health-insurance proposals require truthful disclosure of material information requested by the insurer. Hiding medical history or giving incomplete answers can create problems later. Customers should answer proposal questions accurately and read the final policy schedule and wording.
              </p>
            </div>

            <div className="hi-img-placeholder" style={{ minHeight: '170px' }}>
              <ImageIcon className="hi-placeholder-icon" />
              <span className="hi-placeholder-label">Policy Document &amp; Shield</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — HOW BALAJI ASSOCIATES HELPS */}
      <section className="hi-section">
        <div className="hi-container">
          <div className="hi-header-row">
            <h2 className="hi-heading">How Balaji Associates Helps</h2>
            <div className="hi-gold-line"></div>
          </div>

          <div className="hi-helps-card">
            <div className="hi-img-placeholder" style={{ minHeight: '170px' }}>
              <ImageIcon className="hi-placeholder-icon" />
              <span className="hi-placeholder-label">Family Guidance</span>
            </div>

            <div>
              <p className="hi-text-p" style={{ fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>
                We help customers organise their requirements and understand the comparison questions to ask. Any recommendation must be made within Balaji Associates' verified licence/authorisation and based on approved insurer information.
              </p>
            </div>

            <div className="hi-img-placeholder" style={{ minHeight: '170px' }}>
              <ImageIcon className="hi-placeholder-icon" />
              <span className="hi-placeholder-label">Adviser Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION — FAQS & KEY FACTORS BEFORE CHOOSING A POLICY */}
      <section className="hi-section">
        <div className="hi-container">
          <div className="hi-split-grid">
            {/* Left: Frequently Asked Questions */}
            <div>
              <div className="hi-header-row">
                <h2 className="hi-heading">Frequently Asked Questions</h2>
                <div className="hi-gold-line"></div>
              </div>

              <div className="hi-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="hi-faq-item" key={idx}>
                      <button
                        className="hi-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="hi-faq-question">{faq.question}</span>
                        <Plus className={`hi-faq-plus ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="hi-faq-body">
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

            {/* Right: Key Factors Before Choosing a Policy */}
            <div>
              <div className="hi-header-row">
                <h2 className="hi-heading">Key Factors Before Choosing a Policy</h2>
                <div className="hi-gold-line"></div>
              </div>

              <div className="hi-key-factors-box">
                {/* Left 3 factors */}
                <div className="hi-key-factor-col">
                  <div className="hi-key-factor-item">
                    <div className="hi-key-factor-icon-wrap">
                      <UserRound className="w-4 h-4" />
                    </div>
                    <span className="hi-key-factor-label">AGE</span>
                  </div>

                  <div className="hi-key-factor-item">
                    <div className="hi-key-factor-icon-wrap">
                      <UsersRound className="w-4 h-4" />
                    </div>
                    <span className="hi-key-factor-label">FAMILY MEMBERS</span>
                  </div>

                  <div className="hi-key-factor-item">
                    <div className="hi-key-factor-icon-wrap">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <span className="hi-key-factor-label">MEDICAL HISTORY</span>
                  </div>
                </div>

                {/* Center document illustration */}
                <div className="hi-key-factors-center-doc">
                  <FileText className="w-10 h-10 text-slate-400 mb-2" />
                  <ShieldCheck className="w-8 h-8 text-emerald-600" />
                </div>

                {/* Right 3 factors */}
                <div className="hi-key-factor-col">
                  <div className="hi-key-factor-item">
                    <div className="hi-key-factor-icon-wrap">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <span className="hi-key-factor-label">BUDGET</span>
                  </div>

                  <div className="hi-key-factor-item">
                    <div className="hi-key-factor-icon-wrap">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="hi-key-factor-label">COVERAGE NEEDS</span>
                  </div>

                  <div className="hi-key-factor-item">
                    <div className="hi-key-factor-icon-wrap">
                      <ClipboardList className="w-4 h-4" />
                    </div>
                    <span className="hi-key-factor-label">POLICY TERMS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 8. SECTION — IMPORTANT POLICY NOTE */}
          <div className="hi-note-strip">
            <div className="hi-note-icons-group">
              <div className="hi-note-icon-circle">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="hi-note-icon-circle blue">
                <FileText className="w-5 h-5" />
              </div>
            </div>

            <div className="hi-note-content">
              <div className="hi-note-title-row">
                <h4 className="hi-note-heading">Important Policy Note</h4>
                <div className="hi-gold-line" style={{ width: '32px', height: '2.5px' }}></div>
              </div>
              <p className="hi-note-text">
                The final policy benefits, premium, eligibility, exclusions, waiting periods, deductibles, add-ons, underwriting and claim conditions are determined by the insurer and policy wording. Product-specific claims on the website must match approved insurer material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION — RELATED SERVICES */}
      <section className="hi-section" style={{ paddingTop: '10px' }}>
        <div className="hi-container">
          <div className="hi-header-row" style={{ marginBottom: '16px' }}>
            <h2 className="hi-heading">Related Services</h2>
            <div className="hi-gold-line"></div>
          </div>

          <div className="hi-related-cards">
            <Link to="/insurance/" className="hi-related-card">
              <div className="hi-related-left">
                <ShieldCheck className="hi-related-icon" />
                <span className="hi-related-title">Insurance Services</span>
              </div>
              <span className="hi-related-arrow">→</span>
            </Link>

            <Link to="/motor-insurance-madurai/" className="hi-related-card">
              <div className="hi-related-left">
                <CarFront className="hi-related-icon" />
                <span className="hi-related-title">Motor Insurance</span>
              </div>
              <span className="hi-related-arrow">→</span>
            </Link>

            <Link to="/sme-business-insurance/" className="hi-related-card">
              <div className="hi-related-left">
                <Building2 className="hi-related-icon" />
                <span className="hi-related-title">SME &amp; Business Insurance</span>
              </div>
              <span className="hi-related-arrow">→</span>
            </Link>

            <Link to="/travel-insurance-madurai/" className="hi-related-card">
              <div className="hi-related-left">
                <Plane className="hi-related-icon" />
                <span className="hi-related-title">Travel Insurance</span>
              </div>
              <span className="hi-related-arrow">→</span>
            </Link>

            <Link to="/home-insurance-madurai/" className="hi-related-card">
              <div className="hi-related-left">
                <House className="hi-related-icon" />
                <span className="hi-related-title">Home Insurance</span>
              </div>
              <span className="hi-related-arrow">→</span>
            </Link>
          </div>

          {/* 11. DISCLAIMER / INFORMATION BAR */}
          <div className="hi-disclaimer-strip">
            <div className="hi-disclaimer-icon-wrap">
              <ShieldCheck className="hi-disclaimer-icon" />
            </div>
            <p className="hi-disclaimer-text">
              Insurance is the subject matter of solicitation. Coverage, premium, underwriting, exclusions, waiting periods, deductibles, add-ons and claims are governed by the respective insurer and policy wording. Read the policy document carefully. Balaji Associates' exact intermediary/agent licence details and insurer relationships must be verified and displayed as required before publication.
            </p>
          </div>
        </div>
      </section>

      {/* 10. BOTTOM CTA */}
      <section className="hi-bottom-cta-section">
        <div className="hi-container">
          <div className="hi-bottom-cta-card">
            <div className="hi-bottom-cta-content">
              <h3 className="hi-bottom-cta-title">
                Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644
              </h3>

              <div className="hi-bottom-cta-buttons">
                <Link to="/contact/" className="hi-btn-cta-gold">
                  <span>Discuss Your Insurance Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="hi-btn-cta-outline">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="hi-bottom-cta-visual">
              <div className="hi-bottom-cta-img-placeholder">
                <ImageIcon className="hi-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="hi-placeholder-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Family &amp; Adviser / Temple Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HealthInsurance;
