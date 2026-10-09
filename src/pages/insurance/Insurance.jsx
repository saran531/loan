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
  CarFront,
  Building2,
  Plane,
  House,
  Sparkles,
  FileText,
  FileWarning,
  Receipt,
  FileCheck,
  Clock,
  SlidersHorizontal,
  Coins,
  ClipboardCheck,
  CheckCircle2,
  Sprout,
  Users,
  Search,
  ClipboardList,
  Award,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'Can overseas education be financed?',
    answer: 'Yes, eligible overseas courses and recognized foreign universities can be considered for education finance, subject to lender approval, co-applicant income, and security requirements where applicable.'
  },
  {
    question: 'Is collateral required for an education loan?',
    answer: 'Collateral requirements depend on the loan amount, lender product, and applicant/co-applicant profile. Smaller loan amounts may be unsecured, while higher loan limits—especially for overseas study—frequently require tangible collateral.'
  },
  {
    question: 'Is Agri OD available to every landowner?',
    answer: 'No. Agri OD eligibility depends on active agricultural cultivation or allied activities, landholding documentation, clear title/tenancy records, and individual lender policies. Owning land does not automatically guarantee eligibility.'
  },
  {
    question: 'Can Balaji Associates guarantee sanction?',
    answer: 'No. Balaji Associates provides loan consultancy and documentation assistance. Final approval, sanctioned amount, interest rate, and terms are strictly determined by the lending Bank or NBFC.'
  }
];

function Insurance() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="insurance-overview-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .insurance-overview-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .ins-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .ins-section {
          padding: 40px 0;
        }

        .ins-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .ins-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .ins-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .ins-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .ins-img-placeholder {
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

        .ins-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        .ins-placeholder-label {
          font-size: 11.5px;
          font-weight: 600;
          color: #94A3B8;
          margin-top: 8px;
          letter-spacing: 0.3px;
        }

        /* 1. BREADCRUMB */
        .ins-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .ins-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .ins-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .ins-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .ins-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .ins-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .ins-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 2. HERO SECTION */
        .ins-hero-section {
          padding: 24px 0 44px;
          background: linear-gradient(180deg, rgba(240, 249, 255, 0.5) 0%, rgba(255, 255, 255, 1) 100%);
        }

        .ins-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }

        .ins-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .ins-hero-badge {
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

        .ins-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .ins-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .ins-hero-title {
          font-size: 38px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.18;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .ins-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .ins-btn-primary {
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

        .ins-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .ins-btn-secondary {
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

        .ins-btn-secondary:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        .ins-hero-visual-card {
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

        .ins-floating-card {
          position: absolute;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          z-index: 2;
        }

        .ins-floating-icon-wrap {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #EFF6FF;
          color: #1D4ED8;
          flex-shrink: 0;
        }

        .ins-floating-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        .ins-hero-float-health {
          top: 24px;
          left: 20px;
        }

        .ins-hero-float-sme {
          bottom: 24px;
          left: 20px;
        }

        .ins-hero-float-motor {
          top: 24px;
          right: 20px;
        }

        .ins-hero-float-travel {
          top: 48%;
          right: 18px;
          transform: translateY(-50%);
        }

        .ins-hero-float-home {
          bottom: 24px;
          right: 20px;
        }

        /* 3. SECTION — OUR INSURANCE CATEGORIES */
        .ins-categories-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .ins-cat-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }

        .ins-cat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }

        .ins-cat-img-box {
          width: 100%;
          height: 120px;
          background-color: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .ins-cat-body {
          padding: 16px 14px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .ins-cat-icon-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          background: #ECFDF5;
          color: #059669;
        }

        .ins-cat-icon-badge.gold {
          background: #FFFBEB;
          color: #D97706;
        }

        .ins-cat-title {
          font-size: 14.5px;
          font-weight: 800;
          color: #0A1B3A;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .ins-cat-desc {
          font-size: 11.5px;
          line-height: 1.55;
          color: #64748B;
          margin: 0 0 14px 0;
          flex: 1;
        }

        .ins-cat-arrow-wrap {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .ins-cat-arrow-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #FFFBEB;
          color: #D97706;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transition: transform 0.2s, background 0.2s;
        }

        .ins-cat-card:hover .ins-cat-arrow-circle {
          background: #D97706;
          color: #FFFFFF;
          transform: translateX(2px);
        }

        /* 4. SECTION — UNDERSTAND RISK & KEY POINTS */
        .ins-risk-keys-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 36px;
          align-items: start;
        }

        .ins-risk-5-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }

        .ins-risk-col-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 12px 10px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .ins-risk-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          margin-bottom: 8px;
        }

        .ins-risk-icon-pill {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ECFDF5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ins-risk-name {
          font-size: 11px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: 0.3px;
        }

        .ins-risk-thumb {
          width: 100%;
          height: 64px;
          border-radius: 8px;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .ins-risk-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ins-risk-bullet {
          font-size: 10.5px;
          font-weight: 600;
          color: #475569;
          line-height: 1.35;
          text-align: center;
        }

        /* Key Points To Consider */
        .ins-keys-layout {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 16px;
          align-items: center;
        }

        .ins-keys-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ins-key-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 9px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s;
        }

        .ins-key-item:hover {
          transform: translateY(-2px);
        }

        .ins-key-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #FFFBEB;
          color: #D97706;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ins-key-title {
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          margin: 0;
        }

        .ins-policy-clip-box {
          background: #F8FAFC;
          border: 2px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 110px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
          position: relative;
        }

        .ins-policy-badge {
          background: #0A1B3A;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .ins-policy-shield-icon {
          width: 36px;
          height: 36px;
          color: #059669;
        }

        /* 5. SECTION — EDUCATION LOAN DOCUMENTS & AGRI OD */
        .ins-split-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .ins-edu-docs-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
        }

        .ins-edu-docs-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 20px;
          align-items: center;
          margin-top: 14px;
        }

        .ins-checklist {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ins-check-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: #334155;
        }

        .ins-check-icon {
          width: 15px;
          height: 15px;
          color: #059669;
          flex-shrink: 0;
        }

        .ins-agri-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
        }

        .ins-agri-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 20px;
          align-items: center;
          margin-top: 14px;
        }

        .ins-cards-2-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 16px;
        }

        .ins-sub-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 12px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ins-sub-icon-wrap {
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

        .ins-sub-text {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.3;
          margin: 0;
        }

        /* 6. SECTION — HOW BALAJI ASSOCIATES HELPS */
        .ins-helps-3-col {
          display: grid;
          grid-template-columns: 0.8fr 1.4fr 0.8fr;
          gap: 24px;
          align-items: center;
        }

        .ins-helps-thumb-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          min-height: 150px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* 7. SECTION — INSURANCE ASSISTANCE PROCESS & FAQS */
        .ins-process-steps-wrap {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          gap: 8px;
          overflow-x: auto;
          padding: 6px 2px;
        }

        .ins-step-card {
          flex: 1;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 14px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          min-width: 100px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .ins-step-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
        }

        .ins-step-num {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #FEF3C7;
          color: #D97706;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
        }

        .ins-step-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .ins-step-title {
          font-size: 11.5px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.25;
          margin: 0;
        }

        .ins-step-desc {
          font-size: 10px;
          line-height: 1.45;
          color: #64748B;
          margin: 0;
        }

        .ins-step-arrow {
          color: #D97706;
          font-size: 18px;
          font-weight: bold;
          display: flex;
          align-items: center;
          user-select: none;
        }

        /* FAQ Column */
        .ins-faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ins-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .ins-faq-item:hover {
          border-color: #CBD5E1;
        }

        .ins-faq-header {
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

        .ins-faq-question {
          font-size: 13px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .ins-faq-plus {
          width: 16px;
          height: 16px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .ins-faq-plus.rotate {
          transform: rotate(45deg);
        }

        .ins-faq-body {
          padding: 0 16px 12px;
          font-size: 12.5px;
          line-height: 1.6;
          color: #475569;
        }

        /* 8. SECTION — RELATED SERVICES & VERIFIED NOTICE */
        .ins-related-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
        }

        .ins-related-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .ins-related-card {
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

        .ins-related-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
        }

        .ins-related-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ins-related-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
        }

        .ins-related-title {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .ins-related-arrow {
          font-size: 13px;
          color: #1D4ED8;
          font-weight: bold;
        }

        .ins-verified-notice-card {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: 14px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ins-verified-shield-wrap {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #DCFCE7;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #15803D;
          flex-shrink: 0;
        }

        .ins-verified-text {
          font-size: 12px;
          line-height: 1.5;
          color: #166534;
          font-weight: 600;
          margin: 0;
          flex: 1;
        }

        .ins-verified-building {
          width: 24px;
          height: 24px;
          color: #15803D;
          flex-shrink: 0;
        }

        /* 9. BOTTOM CTA */
        .ins-bottom-cta-section {
          padding: 24px 0 16px;
        }

        .ins-bottom-cta-card {
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

        .ins-bottom-cta-card::before {
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

        .ins-bottom-cta-title {
          font-size: 22px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 18px 0;
          line-height: 1.35;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .ins-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .ins-btn-cta-gold {
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

        .ins-btn-cta-gold:hover {
          transform: translateY(-2px);
        }

        .ins-btn-cta-outline {
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

        .ins-btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .ins-bottom-cta-img-placeholder {
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

        /* 10. DISCLAIMER / INFORMATION BAR */
        .ins-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 16px 0 28px 0;
        }

        .ins-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ins-disclaimer-icon {
          width: 18px;
          height: 18px;
          color: #1E40AF;
        }

        .ins-disclaimer-text {
          font-size: 12.5px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.55;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .ins-hero-grid,
          .ins-risk-keys-grid,
          .ins-split-row,
          .ins-helps-3-col,
          .ins-related-grid,
          .ins-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .ins-categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ins-risk-5-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .ins-hero-title {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .ins-container {
            padding: 0 16px;
          }

          .ins-breadcrumb {
            flex-wrap: wrap;
            row-gap: 4px;
          }

          .ins-categories-grid {
            grid-template-columns: 1fr;
          }

          .ins-risk-5-grid {
            grid-template-columns: 1fr;
          }

          .ins-keys-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .ins-edu-docs-grid,
          .ins-agri-grid {
            grid-template-columns: 1fr;
          }

          .ins-process-steps-wrap {
            flex-direction: column;
            gap: 10px;
          }

          .ins-step-arrow {
            transform: rotate(90deg);
            justify-content: center;
          }

          .ins-related-cards {
            grid-template-columns: 1fr;
          }

          .ins-bottom-cta-card {
            padding: 26px 20px;
          }

          .ins-disclaimer-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .ins-section {
            padding: 32px 0;
          }

          .ins-hero-title {
            font-size: 24px;
            line-height: 1.25;
          }

          .ins-hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .ins-btn-primary,
          .ins-btn-secondary {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .ins-heading {
            font-size: 22px;
          }

          .ins-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 18px;
          }

          .ins-hero-visual-card {
            min-height: 260px;
          }

          .ins-floating-card {
            padding: 8px 10px;
            font-size: 10px;
          }

          .ins-float-1 {
            top: 14px;
            left: 14px;
          }

          .ins-float-2 {
            top: 50%;
            left: 14px;
          }

          .ins-float-3 {
            bottom: 14px;
            right: 14px;
          }

          .ins-bottom-cta-card {
            padding: 24px 16px;
          }

          .ins-bottom-cta-buttons {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .ins-btn-cta-gold,
          .ins-btn-cta-outline {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .ins-faq-header {
            padding: 12px 14px;
          }

          .ins-faq-question {
            font-size: 13px;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="ins-breadcrumb-wrap">
        <div className="ins-container">
          <div className="ins-breadcrumb">
            <HomeIcon className="ins-breadcrumb-home-icon" />
            <Link to="/" className="ins-breadcrumb-link">Home</Link>
            <span className="ins-breadcrumb-sep">&gt;</span>
            <span className="ins-breadcrumb-current">Insurance</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="ins-section ins-hero-section">
        <div className="ins-container">
          <div className="ins-hero-grid">
            <div className="ins-hero-left">
              <div className="ins-hero-top-row">
                <div className="ins-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>INSURANCE SERVICES</span>
                </div>
                <div className="ins-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="ins-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="ins-hero-title">
                Insurance Assistance in<br />
                Madurai for Families,<br />
                Vehicles, Businesses,<br />
                Travel &amp; Homes
              </h1>

              <p className="ins-text-p">
                Insurance works best when it protects a risk you genuinely understand. The lowest premium is not automatically the best policy, and the highest sum insured does not tell the full story. Exclusions, waiting periods, deductibles, sub-limits, add-ons, insured value, policy conditions and the claim process can all affect how useful a policy is when you need it.
              </p>

              <p className="ins-text-p">
                Balaji Associates assists customers in Madurai with enquiries across Health, Motor, SME, Travel and Home Insurance. Product availability and the exact role of Balaji Associates must be presented in line with its verified insurance licence/registration and insurer arrangements.
              </p>

              <div className="ins-hero-actions">
                <Link to="/contact/" className="ins-btn-primary">
                  <span>Discuss Your Insurance Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="ins-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="ins-hero-right">
              <div className="ins-hero-visual-card">
                <ImageIcon className="ins-placeholder-icon" />
                <span className="ins-placeholder-label">Family with Adviser &amp; Madurai Temple</span>

                {/* Floating category cards */}
                <div className="ins-floating-card ins-hero-float-health">
                  <div className="ins-floating-icon-wrap">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <span className="ins-floating-label">Health Insurance</span>
                </div>

                <div className="ins-floating-card ins-hero-float-sme">
                  <div className="ins-floating-icon-wrap">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="ins-floating-label">SME &amp; Business Insurance</span>
                </div>

                <div className="ins-floating-card ins-hero-float-motor">
                  <div className="ins-floating-icon-wrap">
                    <CarFront className="w-4 h-4" />
                  </div>
                  <span className="ins-floating-label">Motor Insurance</span>
                </div>

                <div className="ins-floating-card ins-hero-float-travel">
                  <div className="ins-floating-icon-wrap">
                    <Plane className="w-4 h-4" />
                  </div>
                  <span className="ins-floating-label">Travel Insurance</span>
                </div>

                <div className="ins-floating-card ins-hero-float-home">
                  <div className="ins-floating-icon-wrap">
                    <House className="w-4 h-4" />
                  </div>
                  <span className="ins-floating-label">Home Insurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION — OUR INSURANCE CATEGORIES */}
      <section className="ins-section">
        <div className="ins-container">
          <div className="ins-header-row">
            <h2 className="ins-heading">Our Insurance Categories</h2>
            <div className="ins-gold-line"></div>
          </div>

          <div className="ins-categories-grid">
            {/* Card 1: Health Insurance */}
            <Link to="/health-insurance-madurai/" className="ins-cat-card">
              <div className="ins-cat-img-box">
                <ImageIcon className="ins-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ins-placeholder-label">Healthcare Professional</span>
              </div>
              <div className="ins-cat-body">
                <div className="ins-cat-icon-badge gold">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="ins-cat-title">Health Insurance</h3>
                <p className="ins-cat-desc">
                  Protection against eligible medical expenses according to the policy, with options that may include individual or family structures depending on the insurer.
                </p>
                <div className="ins-cat-arrow-wrap">
                  <span className="ins-cat-arrow-circle">→</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Motor Insurance */}
            <Link to="/motor-insurance-madurai/" className="ins-cat-card">
              <div className="ins-cat-img-box">
                <ImageIcon className="ins-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ins-placeholder-label">Car / Vehicle</span>
              </div>
              <div className="ins-cat-body">
                <div className="ins-cat-icon-badge">
                  <CarFront className="w-5 h-5" />
                </div>
                <h3 className="ins-cat-title">Motor Insurance</h3>
                <p className="ins-cat-desc">
                  Coverage for eligible vehicles, including statutory third-party requirements and broader own-damage/comprehensive options where available.
                </p>
                <div className="ins-cat-arrow-wrap">
                  <span className="ins-cat-arrow-circle">→</span>
                </div>
              </div>
            </Link>

            {/* Card 3: SME & Business Insurance */}
            <Link to="/sme-business-insurance/" className="ins-cat-card">
              <div className="ins-cat-img-box">
                <ImageIcon className="ins-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ins-placeholder-label">Commercial Business</span>
              </div>
              <div className="ins-cat-body">
                <div className="ins-cat-icon-badge">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="ins-cat-title">SME &amp; Business Insurance</h3>
                <p className="ins-cat-desc">
                  Protection designed around business risks such as property, stock, equipment, liability or other exposures, depending on the insurer and product.
                </p>
                <div className="ins-cat-arrow-wrap">
                  <span className="ins-cat-arrow-circle">→</span>
                </div>
              </div>
            </Link>

            {/* Card 4: Travel Insurance */}
            <Link to="/travel-insurance-madurai/" className="ins-cat-card">
              <div className="ins-cat-img-box">
                <ImageIcon className="ins-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ins-placeholder-label">Traveller / Airport</span>
              </div>
              <div className="ins-cat-body">
                <div className="ins-cat-icon-badge">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="ins-cat-title">Travel Insurance</h3>
                <p className="ins-cat-desc">
                  Coverage for specified travel risks such as eligible medical emergencies and certain trip-related events, according to policy wording.
                </p>
                <div className="ins-cat-arrow-wrap">
                  <span className="ins-cat-arrow-circle">→</span>
                </div>
              </div>
            </Link>

            {/* Card 5: Home Insurance */}
            <Link to="/home-insurance-madurai/" className="ins-cat-card">
              <div className="ins-cat-img-box">
                <ImageIcon className="ins-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ins-placeholder-label">Residential Home</span>
              </div>
              <div className="ins-cat-body">
                <div className="ins-cat-icon-badge">
                  <House className="w-5 h-5" />
                </div>
                <h3 className="ins-cat-title">Home Insurance</h3>
                <p className="ins-cat-desc">
                  Protection for eligible home structure and/or contents against insured events, depending on the policy.
                </p>
                <div className="ins-cat-arrow-wrap">
                  <span className="ins-cat-arrow-circle">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SECTION — UNDERSTAND THE RISK BEFORE CHOOSING THE POLICY & KEY POINTS TO CONSIDER */}
      <section className="ins-section">
        <div className="ins-container">
          <div className="ins-risk-keys-grid">
            {/* Left: Understand the Risk Before Choosing the Policy */}
            <div className="ins-risk-left-wrap">
              <div className="ins-header-row">
                <h2 className="ins-heading">Understand the Risk Before Choosing the Policy</h2>
                <div className="ins-gold-line"></div>
              </div>

              <div className="ins-risk-5-grid">
                {/* 1. HEALTH */}
                <div className="ins-risk-col-card">
                  <div className="ins-risk-header">
                    <div className="ins-risk-icon-pill">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <span className="ins-risk-name">HEALTH</span>
                  </div>
                  <div className="ins-risk-thumb">
                    <ImageIcon className="w-4 h-4 text-slate-300" />
                  </div>
                  <ul className="ins-risk-bullets">
                    <li className="ins-risk-bullet">Eligible medical expenses</li>
                    <li className="ins-risk-bullet">Individual / family structures</li>
                  </ul>
                </div>

                {/* 2. MOTOR */}
                <div className="ins-risk-col-card">
                  <div className="ins-risk-header">
                    <div className="ins-risk-icon-pill">
                      <CarFront className="w-4 h-4" />
                    </div>
                    <span className="ins-risk-name">MOTOR</span>
                  </div>
                  <div className="ins-risk-thumb">
                    <ImageIcon className="w-4 h-4 text-slate-300" />
                  </div>
                  <ul className="ins-risk-bullets">
                    <li className="ins-risk-bullet">Eligible vehicles</li>
                    <li className="ins-risk-bullet">Third-party</li>
                    <li className="ins-risk-bullet">Own-damage/comprehensive</li>
                  </ul>
                </div>

                {/* 3. SME & BUSINESS */}
                <div className="ins-risk-col-card">
                  <div className="ins-risk-header">
                    <div className="ins-risk-icon-pill">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="ins-risk-name">SME &amp; BUSINESS</span>
                  </div>
                  <div className="ins-risk-thumb">
                    <ImageIcon className="w-4 h-4 text-slate-300" />
                  </div>
                  <ul className="ins-risk-bullets">
                    <li className="ins-risk-bullet">Property</li>
                    <li className="ins-risk-bullet">Stock</li>
                    <li className="ins-risk-bullet">Equipment</li>
                    <li className="ins-risk-bullet">Liability</li>
                    <li className="ins-risk-bullet">Other exposures</li>
                  </ul>
                </div>

                {/* 4. TRAVEL */}
                <div className="ins-risk-col-card">
                  <div className="ins-risk-header">
                    <div className="ins-risk-icon-pill">
                      <Plane className="w-4 h-4" />
                    </div>
                    <span className="ins-risk-name">TRAVEL</span>
                  </div>
                  <div className="ins-risk-thumb">
                    <ImageIcon className="w-4 h-4 text-slate-300" />
                  </div>
                  <ul className="ins-risk-bullets">
                    <li className="ins-risk-bullet">Medical emergencies</li>
                    <li className="ins-risk-bullet">Trip-related events</li>
                    <li className="ins-risk-bullet">Policy wording</li>
                  </ul>
                </div>

                {/* 5. HOME */}
                <div className="ins-risk-col-card">
                  <div className="ins-risk-header">
                    <div className="ins-risk-icon-pill">
                      <House className="w-4 h-4" />
                    </div>
                    <span className="ins-risk-name">HOME</span>
                  </div>
                  <div className="ins-risk-thumb">
                    <ImageIcon className="w-4 h-4 text-slate-300" />
                  </div>
                  <ul className="ins-risk-bullets">
                    <li className="ins-risk-bullet">Building structure</li>
                    <li className="ins-risk-bullet">Contents</li>
                    <li className="ins-risk-bullet">Insured events</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Key Points to Consider */}
            <div className="ins-keys-right-wrap">
              <div className="ins-header-row">
                <h2 className="ins-heading">Key Points to Consider</h2>
                <div className="ins-gold-line"></div>
              </div>

              <div className="ins-keys-layout">
                {/* Left 4 items */}
                <div className="ins-keys-col">
                  <div className="ins-key-item">
                    <div className="ins-key-icon-wrap">
                      <FileWarning className="w-4 h-4" />
                    </div>
                    <span className="ins-key-title">Exclusions</span>
                  </div>

                  <div className="ins-key-item">
                    <div className="ins-key-icon-wrap">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <span className="ins-key-title">Deductibles</span>
                  </div>

                  <div className="ins-key-item">
                    <div className="ins-key-icon-wrap">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="ins-key-title">Add-ons</span>
                  </div>

                  <div className="ins-key-item">
                    <div className="ins-key-icon-wrap">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <span className="ins-key-title">Policy conditions</span>
                  </div>
                </div>

                {/* Middle Policy Clipboard Graphic */}
                <div className="ins-policy-clip-box">
                  <span className="ins-policy-badge">POLICY</span>
                  <ShieldCheck className="ins-policy-shield-icon" />
                </div>

                {/* Right 4 items */}
                <div className="ins-keys-col">
                  <div className="ins-key-item">
                    <div className="ins-key-icon-wrap">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="ins-key-title">Waiting periods</span>
                  </div>

                  <div className="ins-key-item">
                    <div className="ins-key-icon-wrap">
                      <SlidersHorizontal className="w-4 h-4" />
                    </div>
                    <span className="ins-key-title">Sub-limits</span>
                  </div>

                  <div className="ins-key-item">
                    <div className="ins-key-icon-wrap">
                      <Coins className="w-4 h-4" />
                    </div>
                    <span className="ins-key-title">Insured value</span>
                  </div>

                  <div className="ins-key-item">
                    <div className="ins-key-icon-wrap">
                      <ClipboardCheck className="w-4 h-4" />
                    </div>
                    <span className="ins-key-title">Claim process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION — EDUCATION LOAN DOCUMENTS & AGRI OD / AGRICULTURAL FINANCE */}
      <section className="ins-section">
        <div className="ins-container">
          <div className="ins-split-row">
            {/* Left: Education Loan Documents */}
            <div className="ins-edu-docs-card">
              <div className="ins-header-row" style={{ marginBottom: '8px' }}>
                <h2 className="ins-heading">Education Loan Documents</h2>
                <div className="ins-gold-line"></div>
              </div>
              <p className="ins-text-p" style={{ marginBottom: '14px', fontSize: '13px' }}>
                Applicants should begin preparing early.
              </p>

              <div className="ins-edu-docs-grid">
                <div className="ins-img-placeholder" style={{ minHeight: '180px' }}>
                  <ImageIcon className="ins-placeholder-icon" />
                  <span className="ins-placeholder-label">Passport &amp; Documents</span>
                </div>

                <ul className="ins-checklist">
                  <li className="ins-check-item">
                    <CheckCircle2 className="ins-check-icon" />
                    <span>Admission letter</span>
                  </li>
                  <li className="ins-check-item">
                    <CheckCircle2 className="ins-check-icon" />
                    <span>Course and fee structure</span>
                  </li>
                  <li className="ins-check-item">
                    <CheckCircle2 className="ins-check-icon" />
                    <span>Academic documents</span>
                  </li>
                  <li className="ins-check-item">
                    <CheckCircle2 className="ins-check-icon" />
                    <span>Student and co-applicant KYC</span>
                  </li>
                  <li className="ins-check-item">
                    <CheckCircle2 className="ins-check-icon" />
                    <span>Income/bank documents</span>
                  </li>
                  <li className="ins-check-item">
                    <CheckCircle2 className="ins-check-icon" />
                    <span>Passport/visa documents for overseas study where applicable</span>
                  </li>
                  <li className="ins-check-item">
                    <CheckCircle2 className="ins-check-icon" />
                    <span>Collateral/property documents where required</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Agri OD / Agricultural Finance */}
            <div className="ins-agri-box">
              <div className="ins-header-row" style={{ marginBottom: '8px' }}>
                <h2 className="ins-heading">Agri OD / Agricultural Finance</h2>
                <div className="ins-gold-line"></div>
              </div>

              <div className="ins-agri-grid">
                <div className="ins-img-placeholder" style={{ minHeight: '180px' }}>
                  <ImageIcon className="ins-placeholder-icon" />
                  <span className="ins-placeholder-label">Farmer &amp; Tractor</span>
                </div>

                <div>
                  <p className="ins-text-p" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
                    Agricultural finance is product-specific. Eligibility can depend on agricultural activity, land/tenancy records, crop or allied activity, income pattern and lender rules. The website must not imply that every landowner automatically qualifies.
                  </p>

                  <div className="ins-cards-2-row">
                    <div className="ins-sub-card">
                      <div className="ins-sub-icon-wrap">
                        <Sprout className="w-4 h-4" />
                      </div>
                      <p className="ins-sub-text">
                        Eligible agricultural working-capital requirements
                      </p>
                    </div>

                    <div className="ins-sub-card">
                      <div className="ins-sub-icon-wrap">
                        <FileText className="w-4 h-4" />
                      </div>
                      <p className="ins-sub-text">
                        Other purposes permitted by the relevant lender
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — HOW BALAJI ASSOCIATES HELPS */}
      <section className="ins-section">
        <div className="ins-container">
          <div className="ins-header-row">
            <h2 className="ins-heading">How Balaji Associates Helps</h2>
            <div className="ins-gold-line"></div>
          </div>

          <div className="ins-helps-3-col">
            <div className="ins-helps-thumb-box">
              <ImageIcon className="ins-placeholder-icon" />
              <span className="ins-placeholder-label">Consultation / Meeting</span>
            </div>

            <div>
              <p className="ins-text-p" style={{ fontSize: '14.5px', lineHeight: 1.7, margin: 0 }}>
                For education finance, we help families organise the funding requirement and application information. For Agri OD, we help clarify the activity and relevant documentation before exploring available lender routes.
              </p>
            </div>

            <div className="ins-helps-thumb-box">
              <ImageIcon className="ins-placeholder-icon" />
              <span className="ins-placeholder-label">Advisor &amp; Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION — INSURANCE ASSISTANCE PROCESS & FAQS */}
      <section className="ins-section">
        <div className="ins-container">
          <div className="ins-split-row">
            {/* Left: Insurance Assistance Process */}
            <div>
              <div className="ins-header-row">
                <h2 className="ins-heading">Insurance Assistance Process</h2>
                <div className="ins-gold-line"></div>
              </div>

              <div className="ins-process-steps-wrap">
                <div className="ins-step-card">
                  <span className="ins-step-num">1</span>
                  <ShieldCheck className="ins-step-icon" />
                  <h4 className="ins-step-title">Identify the Risk</h4>
                  <p className="ins-step-desc">Health, vehicle, business, travel or home protection needs are discussed.</p>
                </div>

                <span className="ins-step-arrow">→</span>

                <div className="ins-step-card">
                  <span className="ins-step-num">2</span>
                  <Search className="ins-step-icon" />
                  <h4 className="ins-step-title">Understand Coverage Priorities</h4>
                  <p className="ins-step-desc">We look at what needs protection and what questions should be answered before choosing a policy.</p>
                </div>

                <span className="ins-step-arrow">→</span>

                <div className="ins-step-card">
                  <span className="ins-step-num">3</span>
                  <FileText className="ins-step-icon" />
                  <h4 className="ins-step-title">Review Available Options</h4>
                  <p className="ins-step-desc">Policy features, sum insured, exclusions, waiting periods, deductibles, limits and insurer terms.</p>
                </div>

                <span className="ins-step-arrow">→</span>

                <div className="ins-step-card">
                  <span className="ins-step-num">4</span>
                  <ClipboardList className="ins-step-icon" />
                  <h4 className="ins-step-title">Proposal &amp; Disclosure</h4>
                  <p className="ins-step-desc">Accurate disclosure of material information is essential. The insurer assesses the proposal according to underwriting rules.</p>
                </div>

                <span className="ins-step-arrow">→</span>

                <div className="ins-step-card">
                  <span className="ins-step-num">5</span>
                  <Award className="ins-step-icon" />
                  <h4 className="ins-step-title">Policy Issuance / Service</h4>
                  <p className="ins-step-desc">Coverage begins only according to the insurer's policy terms and issuance confirmation, subject to underwriting and insurer assessment.</p>
                </div>
              </div>
            </div>

            {/* Right: Frequently Asked Questions */}
            <div>
              <div className="ins-header-row">
                <h2 className="ins-heading">Frequently Asked Questions</h2>
                <div className="ins-gold-line"></div>
              </div>

              <div className="ins-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="ins-faq-item" key={idx}>
                      <button
                        className="ins-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="ins-faq-question">{faq.question}</span>
                        <Plus className={`ins-faq-plus ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="ins-faq-body">
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

      {/* 8. SECTION — RELATED SERVICES & VERIFIED NOTICE */}
      <section className="ins-section" style={{ paddingTop: '10px' }}>
        <div className="ins-container">
          <div className="ins-related-grid">
            {/* Left: Related Services */}
            <div>
              <div className="ins-header-row" style={{ marginBottom: '14px' }}>
                <h2 className="ins-heading">Related Services</h2>
                <div className="ins-gold-line"></div>
              </div>

              <div className="ins-related-cards">
                <Link to="/personal-car-loans/" className="ins-related-card">
                  <div className="ins-related-left">
                    <CarFront className="ins-related-icon" />
                    <span className="ins-related-title">Personal &amp; Car Loans</span>
                  </div>
                  <span className="ins-related-arrow">→</span>
                </Link>

                <Link to="/business-msme-loans/" className="ins-related-card">
                  <div className="ins-related-left">
                    <Building2 className="ins-related-icon" />
                    <span className="ins-related-title">Business &amp; MSME Loans</span>
                  </div>
                  <span className="ins-related-arrow">→</span>
                </Link>

                <Link to="/contact/" className="ins-related-card">
                  <div className="ins-related-left">
                    <Phone className="ins-related-icon" />
                    <span className="ins-related-title">Contact</span>
                  </div>
                  <span className="ins-related-arrow">→</span>
                </Link>
              </div>
            </div>

            {/* Right: Verified notice box */}
            <div className="ins-verified-notice-card">
              <div className="ins-verified-shield-wrap">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="ins-verified-text">
                Product availability and the exact role of Balaji Associates must be presented in line with its verified insurance licence/registration and insurer arrangements.
              </p>
              <Building2 className="ins-verified-building" />
            </div>
          </div>

          {/* 10. DISCLAIMER / INFORMATION BAR */}
          <div className="ins-disclaimer-strip">
            <div className="ins-disclaimer-icon-wrap">
              <ShieldCheck className="ins-disclaimer-icon" />
            </div>
            <p className="ins-disclaimer-text">
              Insurance is the subject matter of solicitation. Coverage, premium, underwriting, exclusions, waiting periods, deductibles, add-ons and claims are governed by the respective insurer and policy wording. Read the policy document carefully. Balaji Associates' exact intermediary/agent licence details and insurer relationships must be verified and displayed as required before publication.
            </p>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA */}
      <section className="ins-bottom-cta-section">
        <div className="ins-container">
          <div className="ins-bottom-cta-card">
            <div className="ins-bottom-cta-content">
              <h3 className="ins-bottom-cta-title">
                Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644
              </h3>

              <div className="ins-bottom-cta-buttons">
                <Link to="/contact/" className="ins-btn-cta-gold">
                  <span>Discuss Your Insurance Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="ins-btn-cta-outline">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="ins-bottom-cta-visual">
              <div className="ins-bottom-cta-img-placeholder">
                <ImageIcon className="ins-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="ins-placeholder-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Family &amp; Adviser / Temple Visual</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insurance;
