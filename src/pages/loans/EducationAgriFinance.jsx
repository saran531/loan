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
  FileText,
  Briefcase,
  Wallet,
  Receipt,
  Calendar,
  Car,
  GraduationCap,
  Plane,
  BookOpen,
  Sprout,
  Users,
  CheckCircle2,
  Sparkles,
  Tractor,
  Landmark,
  FileCheck,
  Compass,
  Clock,
  Building2,
  MessageSquare,
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

function EducationAgriFinance() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="education-agri-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .education-agri-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .eaf-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .eaf-section {
          padding: 42px 0;
        }

        .eaf-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .eaf-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .eaf-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .eaf-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .eaf-img-placeholder {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          width: 100%;
          min-height: 250px;
          height: 100%;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .eaf-placeholder-icon {
          width: 40px;
          height: 40px;
          color: #CBD5E1;
        }

        .eaf-placeholder-label {
          font-size: 12px;
          font-weight: 600;
          color: #94A3B8;
          margin-top: 8px;
          letter-spacing: 0.3px;
        }

        /* 1. BREADCRUMB */
        .eaf-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .eaf-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .eaf-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .eaf-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .eaf-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .eaf-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .eaf-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 2. HERO SECTION */
        .eaf-hero-section {
          padding: 24px 0 46px;
          background: linear-gradient(180deg, rgba(240, 249, 255, 0.4) 0%, rgba(255, 255, 255, 1) 100%);
        }

        .eaf-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 44px;
          align-items: center;
        }

        .eaf-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .eaf-hero-badge {
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

        .eaf-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .eaf-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .eaf-hero-title {
          font-size: 40px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .eaf-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .eaf-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0A1B3A;
          color: #FFFFFF;
          font-size: 14.5px;
          font-weight: 700;
          padding: 13px 26px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(10, 27, 58, 0.25);
          transition: transform 0.2s, background 0.2s;
        }

        .eaf-btn-primary:hover {
          background: #002D62;
          transform: translateY(-2px);
        }

        .eaf-btn-secondary {
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

        .eaf-btn-secondary:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        .eaf-hero-visual-card {
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

        .eaf-floating-card {
          position: absolute;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 12px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          z-index: 2;
        }

        .eaf-floating-card-icon {
          width: 24px;
          height: 24px;
        }

        .eaf-floating-card-icon.blue {
          color: #003B73;
        }

        .eaf-floating-card-icon.green {
          color: #059669;
        }

        .eaf-floating-card-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        .eaf-float-1 {
          top: 28px;
          left: 28px;
        }

        .eaf-float-2 {
          bottom: 28px;
          left: 28px;
        }

        .eaf-float-3 {
          top: 28px;
          right: 28px;
        }

        .eaf-float-4 {
          bottom: 28px;
          right: 28px;
        }

        /* 3. SECTION — EDUCATION LOAN */
        .eaf-edu-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: center;
        }

        .eaf-cards-3-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        .eaf-info-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .eaf-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        }

        .eaf-info-card-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ECFDF5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .eaf-info-card-icon {
          width: 22px;
          height: 22px;
          color: #059669;
        }

        .eaf-info-card-text {
          font-size: 12.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 4. SECTION — EDUCATION LOAN DOCUMENTS */
        .eaf-docs-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: center;
        }

        .eaf-docs-card-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
          position: relative;
        }

        .eaf-docs-corner-badge {
          position: absolute;
          top: 18px;
          right: 20px;
          background: #EFF6FF;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .eaf-docs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .eaf-doc-item {
          background: #F8FAFC;
          border: 1px solid #F1F5F9;
          border-radius: 10px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: background 0.2s, border-color 0.2s;
        }

        .eaf-doc-item:hover {
          background: #FFFFFF;
          border-color: #E2E8F0;
        }

        .eaf-doc-check {
          width: 18px;
          height: 18px;
          color: #D97706;
          flex-shrink: 0;
        }

        .eaf-doc-file-icon {
          width: 17px;
          height: 17px;
          color: #1E40AF;
          flex-shrink: 0;
        }

        .eaf-doc-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #0A1B3A;
        }

        /* 5. SECTION — AGRI OD / AGRICULTURAL FINANCE */
        .eaf-agri-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: center;
        }

        .eaf-cards-2-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 22px;
        }

        /* 6. SECTION — TWO DIFFERENT FINANCIAL REQUIREMENTS */
        .eaf-two-diff-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .eaf-req-card {
          border-radius: 20px;
          padding: 24px 28px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
        }

        .eaf-req-card.blue-card {
          background-color: #F0F7FF;
          border: 1.5px solid #BFDBFE;
        }

        .eaf-req-card.green-card {
          background-color: #F0FDF4;
          border: 1.5px solid #BBF7D0;
        }

        .eaf-req-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .eaf-req-icon {
          width: 26px;
          height: 26px;
        }

        .eaf-req-icon.blue {
          color: #1D4ED8;
        }

        .eaf-req-icon.green {
          color: #059669;
        }

        .eaf-req-title {
          font-size: 16px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: 0.4px;
        }

        .eaf-req-split {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 20px;
          align-items: start;
        }

        .eaf-req-img-holder {
          background-color: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 14px;
          min-height: 280px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .eaf-req-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .eaf-req-bullet-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .eaf-req-check {
          width: 15px;
          height: 15px;
          color: #D97706;
          flex-shrink: 0;
        }

        /* 7. SECTION — APPLICATION / DOCUMENT JOURNEY */
        .eaf-journey-flow-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 20px;
          align-items: center;
        }

        .eaf-journey-flow-card:last-child {
          margin-bottom: 0;
        }

        .eaf-journey-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 20px;
          border-radius: 14px;
          width: 140px;
          text-align: center;
        }

        .eaf-journey-badge.blue {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          color: #1D4ED8;
        }

        .eaf-journey-badge.green {
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          color: #059669;
        }

        .eaf-journey-badge-text {
          font-size: 13px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.25;
        }

        .eaf-journey-steps-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          overflow-x: auto;
          padding: 8px 4px;
        }

        .eaf-step-box {
          flex: 1;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          min-width: 105px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .eaf-step-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
        }

        .eaf-step-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .eaf-step-icon-circle.blue {
          background: #EFF6FF;
          color: #1D4ED8;
        }

        .eaf-step-icon-circle.green {
          background: #ECFDF5;
          color: #059669;
        }

        .eaf-step-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.3;
          margin: 0;
        }

        .eaf-step-arrow {
          color: #D97706;
          font-size: 18px;
          font-weight: 800;
          flex-shrink: 0;
          user-select: none;
        }

        .eaf-journey-thumb {
          width: 120px;
          height: 96px;
          border-radius: 12px;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* 8. SECTION — WHAT LENDERS EVALUATE (Dark Navy) */
        .eaf-eval-dark-section {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          color: #FFFFFF;
          border-radius: 24px;
          padding: 40px 44px;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
        }

        .eaf-subtext-white {
          font-size: 13.5px;
          color: #CBD5E1;
          margin: -10px 0 24px 0;
        }

        .eaf-eval-cards-wrap {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .eaf-eval-card {
          background: #FFFFFF;
          border-radius: 14px;
          padding: 18px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .eaf-eval-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
        }

        .eaf-eval-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #FFFBEB;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D97706;
        }

        .eaf-eval-card-text {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 9. SECTION — HOW BALAJI ASSOCIATES HELPS */
        .eaf-helps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .eaf-helps-images-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .eaf-help-img-box {
          position: relative;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          min-height: 160px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .eaf-help-img-badge {
          position: absolute;
          bottom: 12px;
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .eaf-help-img-badge.blue {
          background: #1D4ED8;
        }

        .eaf-help-img-badge.green {
          background: #059669;
        }

        /* 10 & 11. FAQS & RELATED SERVICES */
        .eaf-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        .eaf-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .eaf-faq-item:hover {
          border-color: #CBD5E1;
        }

        .eaf-faq-header {
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

        .eaf-faq-question {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .eaf-faq-plus-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .eaf-faq-plus-icon.rotate {
          transform: rotate(45deg);
        }

        .eaf-faq-body {
          padding: 0 18px 14px;
          font-size: 13px;
          line-height: 1.6;
          color: #475569;
        }

        .eaf-related-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .eaf-related-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .eaf-related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
        }

        .eaf-related-img-holder {
          width: 100%;
          height: 90px;
          background-color: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .eaf-related-footer {
          padding: 12px 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .eaf-related-title {
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.3;
        }

        .eaf-related-arrow {
          font-size: 14px;
          font-weight: bold;
          color: #003B73;
        }

        /* 12. DISCLAIMER / INFORMATION BAR */
        .eaf-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 28px 0 0 0;
        }

        .eaf-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .eaf-disclaimer-icon {
          width: 18px;
          height: 18px;
          color: #1E40AF;
        }

        .eaf-disclaimer-text {
          font-size: 13px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.5;
          margin: 0;
        }

        /* 13. BOTTOM CTA */
        .eaf-bottom-cta-section {
          padding: 32px 0 20px;
        }

        .eaf-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 24px;
          padding: 38px 46px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
          position: relative;
          overflow: hidden;
        }

        .eaf-bottom-cta-card::before {
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

        .eaf-bottom-cta-text {
          font-size: 16px;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .eaf-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .eaf-btn-cta-gold {
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

        .eaf-btn-cta-gold:hover {
          transform: translateY(-2px);
        }

        .eaf-btn-cta-outline {
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

        .eaf-btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .eaf-bottom-cta-img-placeholder {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          min-height: 200px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .eaf-hero-grid,
          .eaf-edu-grid,
          .eaf-docs-grid,
          .eaf-agri-grid,
          .eaf-two-diff-grid,
          .eaf-helps-grid,
          .eaf-split-grid,
          .eaf-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .eaf-journey-flow-card {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .eaf-journey-thumb {
            display: none;
          }

          .eaf-hero-visual-card {
            min-height: 320px;
          }

          .eaf-hero-title {
            font-size: 32px;
          }

          .eaf-eval-cards-wrap {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .eaf-container {
            padding: 0 16px;
          }

          .eaf-breadcrumb {
            flex-wrap: wrap;
            row-gap: 4px;
          }

          .eaf-cards-3-row,
          .eaf-cards-2-row,
          .eaf-eval-cards-wrap,
          .eaf-related-cards {
            grid-template-columns: 1fr;
          }

          .eaf-req-split {
            grid-template-columns: 1fr;
          }

          .eaf-helps-images-row {
            grid-template-columns: 1fr;
          }

          .eaf-journey-steps-wrap {
            flex-direction: column;
            gap: 10px;
          }

          .eaf-step-box {
            width: 100%;
          }

          .eaf-step-arrow {
            transform: rotate(90deg);
          }

          .eaf-bottom-cta-card {
            padding: 28px 20px;
          }

          .eaf-disclaimer-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .eaf-section {
            padding: 32px 0;
          }

          .eaf-hero-title {
            font-size: 24px;
            line-height: 1.25;
          }

          .eaf-hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .eaf-btn-primary,
          .eaf-btn-secondary {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .eaf-heading {
            font-size: 22px;
          }

          .eaf-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 18px;
          }

          .eaf-hero-visual-card {
            min-height: 260px;
          }

          .eaf-floating-card {
            padding: 8px 10px;
            font-size: 10px;
          }

          .eaf-float-1 {
            top: 14px;
            left: 14px;
          }

          .eaf-float-2 {
            top: 50%;
            left: 14px;
          }

          .eaf-float-3 {
            bottom: 14px;
            right: 14px;
          }

          .eaf-bottom-cta-card {
            padding: 24px 16px;
          }

          .eaf-bottom-cta-buttons {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .eaf-btn-cta-gold,
          .eaf-btn-cta-outline {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .eaf-faq-header {
            padding: 12px 14px;
          }

          .eaf-faq-question {
            font-size: 13px;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="eaf-breadcrumb-wrap">
        <div className="eaf-container">
          <div className="eaf-breadcrumb">
            <HomeIcon className="eaf-breadcrumb-home-icon" />
            <Link to="/" className="eaf-breadcrumb-link">Home</Link>
            <span className="eaf-breadcrumb-sep">&gt;</span>
            <Link to="/home-property-loans/" className="eaf-breadcrumb-link">Loans</Link>
            <span className="eaf-breadcrumb-sep">&gt;</span>
            <span className="eaf-breadcrumb-current">Education &amp; Agri Finance</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="eaf-section eaf-hero-section">
        <div className="eaf-container">
          <div className="eaf-hero-grid">
            <div className="eaf-hero-left">
              <div className="eaf-hero-top-row">
                <div className="eaf-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>EDUCATION &amp; AGRI FINANCE</span>
                </div>
                <div className="eaf-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="eaf-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="eaf-hero-title">
                Education Loan &amp;<br />
                Eligible Agri OD Assistance<br />
                in Madurai
              </h1>

              <p className="eaf-text-p">
                Education finance and agricultural working-capital finance are very different products, but both can require careful documentation and lender-specific assessment. This consolidated page keeps the site compact while giving each service a dedicated section.
              </p>

              <p className="eaf-text-p">
                Balaji Associates assists eligible students/families with education-loan enquiries and eligible agricultural customers with Agri OD/finance enquiries where relevant products are available.
              </p>

              <div className="eaf-hero-actions">
                <Link to="/contact/" className="eaf-btn-primary">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="eaf-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="eaf-hero-right">
              <div className="eaf-hero-visual-card">
                <ImageIcon className="eaf-placeholder-icon" />
                <span className="eaf-placeholder-label">Student &amp; Farmer Montage</span>

                <div className="eaf-floating-card eaf-float-1">
                  <GraduationCap className="eaf-floating-card-icon blue" />
                  <span className="eaf-floating-card-label">Education Loan</span>
                </div>

                <div className="eaf-floating-card eaf-float-2">
                  <Users className="eaf-floating-card-icon blue" />
                  <span className="eaf-floating-card-label">Student / Family</span>
                </div>

                <div className="eaf-floating-card eaf-float-3">
                  <Sprout className="eaf-floating-card-icon green" />
                  <span className="eaf-floating-card-label">Agri OD</span>
                </div>

                <div className="eaf-floating-card eaf-float-4">
                  <Tractor className="eaf-floating-card-icon green" />
                  <span className="eaf-floating-card-label">Agricultural Finance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION — EDUCATION LOAN */}
      <section className="eaf-section">
        <div className="eaf-container">
          <div className="eaf-edu-grid">
            <div className="eaf-img-placeholder">
              <ImageIcon className="eaf-placeholder-icon" />
              <span className="eaf-placeholder-label">Education / Student Study</span>
            </div>

            <div className="eaf-edu-content">
              <div className="eaf-header-row">
                <h2 className="eaf-heading">Education Loan</h2>
                <div className="eaf-gold-line"></div>
              </div>

              <p className="eaf-text-p">
                Higher education can involve tuition, living, travel, equipment and other eligible costs. Lenders may assess the course, institution, destination, student profile, co-applicant income and security requirements.
              </p>

              <div className="eaf-cards-3-row">
                <div className="eaf-info-card">
                  <div className="eaf-info-card-icon-wrap">
                    <GraduationCap className="eaf-info-card-icon" />
                  </div>
                  <p className="eaf-info-card-text">
                    Eligible higher education in India
                  </p>
                </div>

                <div className="eaf-info-card">
                  <div className="eaf-info-card-icon-wrap">
                    <Plane className="eaf-info-card-icon" />
                  </div>
                  <p className="eaf-info-card-text">
                    Eligible overseas study
                  </p>
                </div>

                <div className="eaf-info-card">
                  <div className="eaf-info-card-icon-wrap">
                    <BookOpen className="eaf-info-card-icon" />
                  </div>
                  <p className="eaf-info-card-text">
                    Permitted education-related costs according to lender product
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION — EDUCATION LOAN DOCUMENTS */}
      <section className="eaf-section">
        <div className="eaf-container">
          <div className="eaf-header-row">
            <h2 className="eaf-heading">Education Loan Documents</h2>
            <div className="eaf-gold-line"></div>
          </div>

          <p className="eaf-text-p" style={{ marginBottom: '24px' }}>
            Applicants should begin preparing early.
          </p>

          <div className="eaf-docs-grid">
            <div className="eaf-img-placeholder">
              <ImageIcon className="eaf-placeholder-icon" />
              <span className="eaf-placeholder-label">Passport, Books &amp; Study Materials</span>
            </div>

            <div className="eaf-docs-content">
              <div className="eaf-docs-card-box">
                <div className="eaf-docs-corner-badge">
                  <GraduationCap className="w-5 h-5 text-blue-700" />
                </div>

                <ul className="eaf-docs-list">
                  <li className="eaf-doc-item">
                    <CheckCircle2 className="eaf-doc-check" />
                    <FileText className="eaf-doc-file-icon" />
                    <span className="eaf-doc-title">Admission letter</span>
                  </li>

                  <li className="eaf-doc-item">
                    <CheckCircle2 className="eaf-doc-check" />
                    <FileText className="eaf-doc-file-icon" />
                    <span className="eaf-doc-title">Course and fee structure</span>
                  </li>

                  <li className="eaf-doc-item">
                    <CheckCircle2 className="eaf-doc-check" />
                    <FileText className="eaf-doc-file-icon" />
                    <span className="eaf-doc-title">Academic documents</span>
                  </li>

                  <li className="eaf-doc-item">
                    <CheckCircle2 className="eaf-doc-check" />
                    <FileText className="eaf-doc-file-icon" />
                    <span className="eaf-doc-title">Student and co-applicant KYC</span>
                  </li>

                  <li className="eaf-doc-item">
                    <CheckCircle2 className="eaf-doc-check" />
                    <FileText className="eaf-doc-file-icon" />
                    <span className="eaf-doc-title">Income/bank documents</span>
                  </li>

                  <li className="eaf-doc-item">
                    <CheckCircle2 className="eaf-doc-check" />
                    <FileText className="eaf-doc-file-icon" />
                    <span className="eaf-doc-title">Passport/visa documents for overseas study where applicable</span>
                  </li>

                  <li className="eaf-doc-item">
                    <CheckCircle2 className="eaf-doc-check" />
                    <FileText className="eaf-doc-file-icon" />
                    <span className="eaf-doc-title">Collateral/property documents where required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION — AGRI OD / AGRICULTURAL FINANCE */}
      <section className="eaf-section">
        <div className="eaf-container">
          <div className="eaf-agri-grid">
            <div className="eaf-img-placeholder">
              <ImageIcon className="eaf-placeholder-icon" />
              <span className="eaf-placeholder-label">Farmer in Field with Tractor</span>
            </div>

            <div className="eaf-agri-content">
              <div className="eaf-header-row">
                <h2 className="eaf-heading">Agri OD / Agricultural Finance</h2>
                <div className="eaf-gold-line"></div>
              </div>

              <p className="eaf-text-p">
                Agricultural finance is product-specific. Eligibility can depend on agricultural activity, land/tenancy records, crop or allied activity, income pattern and lender rules. The website must not imply that every landowner automatically qualifies.
              </p>

              <div className="eaf-cards-2-row">
                <div className="eaf-info-card">
                  <div className="eaf-info-card-icon-wrap">
                    <Sprout className="eaf-info-card-icon" />
                  </div>
                  <p className="eaf-info-card-text">
                    Eligible agricultural working-capital requirements
                  </p>
                </div>

                <div className="eaf-info-card">
                  <div className="eaf-info-card-icon-wrap">
                    <FileText className="eaf-info-card-icon" />
                  </div>
                  <p className="eaf-info-card-text">
                    Other purposes permitted by the relevant lender
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — TWO DIFFERENT FINANCIAL REQUIREMENTS */}
      <section className="eaf-section">
        <div className="eaf-container">
          <div className="eaf-header-row">
            <h2 className="eaf-heading">Two Different Financial Requirements</h2>
            <div className="eaf-gold-line"></div>
          </div>

          <div className="eaf-two-diff-grid">
            {/* Left Card: Education Loan */}
            <div className="eaf-req-card blue-card">
              <div className="eaf-req-header">
                <GraduationCap className="eaf-req-icon blue" />
                <h3 className="eaf-req-title">EDUCATION LOAN</h3>
              </div>

              <div className="eaf-req-split">
                <div className="eaf-req-img-holder">
                  <ImageIcon className="eaf-placeholder-icon" style={{ opacity: 0.4 }} />
                  <span className="eaf-placeholder-label">Student Desk</span>
                </div>

                <ul className="eaf-req-bullets">
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Higher education</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>India</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Overseas study</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Tuition</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Living</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Travel</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Equipment</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Course</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Institution</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Student profile</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Co-applicant income</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Security requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Card: Agri OD / Agricultural Finance */}
            <div className="eaf-req-card green-card">
              <div className="eaf-req-header">
                <Sprout className="eaf-req-icon green" />
                <h3 className="eaf-req-title">AGRI OD / AGRICULTURAL FINANCE</h3>
              </div>

              <div className="eaf-req-split">
                <div className="eaf-req-img-holder">
                  <ImageIcon className="eaf-placeholder-icon" style={{ opacity: 0.4 }} />
                  <span className="eaf-placeholder-label">Farmer Crop</span>
                </div>

                <ul className="eaf-req-bullets">
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Agricultural working capital</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Agricultural activity</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Land/tenancy records</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Crop or allied activity</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Income pattern</span>
                  </li>
                  <li className="eaf-req-bullet-item">
                    <CheckCircle2 className="eaf-req-check" />
                    <span>Lender rules</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION — APPLICATION / DOCUMENT JOURNEY */}
      <section className="eaf-section">
        <div className="eaf-container">
          <div className="eaf-header-row">
            <h2 className="eaf-heading">Application / Document Journey</h2>
            <div className="eaf-gold-line"></div>
          </div>

          {/* Flow 1: Education Loan */}
          <div className="eaf-journey-flow-card">
            <div className="eaf-journey-badge blue">
              <GraduationCap className="w-6 h-6" />
              <span className="eaf-journey-badge-text">Education Loan</span>
            </div>

            <div className="eaf-journey-steps-wrap">
              <div className="eaf-step-box">
                <div className="eaf-step-icon-circle blue">
                  <Compass className="w-4 h-4" />
                </div>
                <p className="eaf-step-label">Requirement</p>
              </div>

              <span className="eaf-step-arrow">→</span>

              <div className="eaf-step-box">
                <div className="eaf-step-icon-circle blue">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <p className="eaf-step-label">Course /<br />Institution</p>
              </div>

              <span className="eaf-step-arrow">→</span>

              <div className="eaf-step-box">
                <div className="eaf-step-icon-circle blue">
                  <FileText className="w-4 h-4" />
                </div>
                <p className="eaf-step-label">Documents</p>
              </div>

              <span className="eaf-step-arrow">→</span>

              <div className="eaf-step-box">
                <div className="eaf-step-icon-circle blue">
                  <Users className="w-4 h-4" />
                </div>
                <p className="eaf-step-label">Co-applicant<br />information</p>
              </div>

              <span className="eaf-step-arrow">→</span>

              <div className="eaf-step-box">
                <div className="eaf-step-icon-circle blue">
                  <Landmark className="w-4 h-4" />
                </div>
                <p className="eaf-step-label">Lender<br />assessment</p>
              </div>
            </div>

            <div className="eaf-journey-thumb">
              <ImageIcon className="w-6 h-6 text-slate-300" />
              <span style={{ fontSize: '10px', color: '#94A3B8', marginTop: '4px' }}>Student</span>
            </div>
          </div>

          {/* Flow 2: Agri OD / Agricultural Finance */}
          <div className="eaf-journey-flow-card">
            <div className="eaf-journey-badge green">
              <Sprout className="w-6 h-6" />
              <span className="eaf-journey-badge-text">Agri OD /<br />Agricultural Finance</span>
            </div>

            <div className="eaf-journey-steps-wrap">
              <div className="eaf-step-box">
                <div className="eaf-step-icon-circle green">
                  <Sprout className="w-4 h-4" />
                </div>
                <p className="eaf-step-label">Agricultural<br />activity</p>
              </div>

              <span className="eaf-step-arrow">→</span>

              <div className="eaf-step-box">
                <div className="eaf-step-icon-circle green">
                  <FileCheck className="w-4 h-4" />
                </div>
                <p className="eaf-step-label">Relevant<br />records</p>
              </div>

              <span className="eaf-step-arrow">→</span>

              <div className="eaf-step-box">
                <div className="eaf-step-icon-circle green">
                  <Clock className="w-4 h-4" />
                </div>
                <p className="eaf-step-label">Income/activity<br />information</p>
              </div>

              <span className="eaf-step-arrow">→</span>

              <div className="eaf-step-box">
                <div className="eaf-step-icon-circle green">
                  <Landmark className="w-4 h-4" />
                </div>
                <p className="eaf-step-label">Lender<br />assessment</p>
              </div>
            </div>

            <div className="eaf-journey-thumb">
              <ImageIcon className="w-6 h-6 text-slate-300" />
              <span style={{ fontSize: '10px', color: '#94A3B8', marginTop: '4px' }}>Farmer</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION — WHAT LENDERS EVALUATE (Dark Navy) */}
      <section className="eaf-section">
        <div className="eaf-container">
          <div className="eaf-eval-dark-section">
            <div className="eaf-header-row" style={{ marginBottom: '14px' }}>
              <h2 className="eaf-heading" style={{ color: '#FFFFFF' }}>What Lenders Evaluate</h2>
              <div className="eaf-gold-line"></div>
            </div>

            <p className="eaf-subtext-white">
              Retail credit assessment commonly includes:
            </p>

            <div className="eaf-eval-cards-wrap">
              <div className="eaf-eval-card">
                <div className="eaf-eval-icon-circle">
                  <Wallet className="w-5 h-5" />
                </div>
                <p className="eaf-eval-card-text">Monthly income</p>
              </div>

              <div className="eaf-eval-card">
                <div className="eaf-eval-icon-circle">
                  <Briefcase className="w-5 h-5" />
                </div>
                <p className="eaf-eval-card-text">Employment/<br />business stability</p>
              </div>

              <div className="eaf-eval-card">
                <div className="eaf-eval-icon-circle">
                  <FileText className="w-5 h-5" />
                </div>
                <p className="eaf-eval-card-text">Credit history</p>
              </div>

              <div className="eaf-eval-card">
                <div className="eaf-eval-icon-circle">
                  <Receipt className="w-5 h-5" />
                </div>
                <p className="eaf-eval-card-text">Existing EMIs</p>
              </div>

              <div className="eaf-eval-card">
                <div className="eaf-eval-icon-circle">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="eaf-eval-card-text">Age and repayment tenure</p>
              </div>

              <div className="eaf-eval-card">
                <div className="eaf-eval-icon-circle">
                  <Car className="w-5 h-5" />
                </div>
                <p className="eaf-eval-card-text">Vehicle price/down payment for car loans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION — HOW BALAJI ASSOCIATES HELPS */}
      <section className="eaf-section">
        <div className="eaf-container">
          <div className="eaf-helps-grid">
            <div className="eaf-helps-content">
              <div className="eaf-header-row">
                <h2 className="eaf-heading">How Balaji Associates Helps</h2>
                <div className="eaf-gold-line"></div>
              </div>

              <p className="eaf-text-p">
                For education finance, we help families organise the funding requirement and application information. For Agri OD, we help clarify the activity and relevant documentation before exploring available lender routes.
              </p>
            </div>

            <div className="eaf-helps-images-row">
              <div className="eaf-help-img-box">
                <ImageIcon className="eaf-placeholder-icon" />
                <div className="eaf-help-img-badge blue">
                  <GraduationCap className="w-3 h-3" />
                  <span>Education Finance</span>
                </div>
              </div>

              <div className="eaf-help-img-box">
                <ImageIcon className="eaf-placeholder-icon" />
                <div className="eaf-help-img-badge green">
                  <Sprout className="w-3 h-3" />
                  <span>Agri OD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 & 11. FAQS & RELATED SERVICES */}
      <section className="eaf-section">
        <div className="eaf-container">
          <div className="eaf-split-grid">
            {/* FAQ Column */}
            <div className="eaf-faq-col">
              <div className="eaf-header-row">
                <h2 className="eaf-heading">Frequently Asked Questions</h2>
                <div className="eaf-gold-line"></div>
              </div>

              <div className="eaf-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="eaf-faq-item" key={idx}>
                      <button
                        className="eaf-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="eaf-faq-question">{faq.question}</span>
                        <Plus className={`eaf-faq-plus-icon ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="eaf-faq-body">
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
            <div className="eaf-related-col">
              <div className="eaf-header-row">
                <h2 className="eaf-heading">Related Services</h2>
                <div className="eaf-gold-line"></div>
              </div>

              <div className="eaf-related-cards">
                <Link to="/personal-car-loans/" className="eaf-related-card">
                  <div className="eaf-related-img-holder">
                    <Car className="w-7 h-7 text-amber-600" />
                  </div>
                  <div className="eaf-related-footer">
                    <span className="eaf-related-title">Personal &amp; Car Loans</span>
                    <span className="eaf-related-arrow">→</span>
                  </div>
                </Link>

                <Link to="/business-msme-loans/" className="eaf-related-card">
                  <div className="eaf-related-img-holder">
                    <Briefcase className="w-7 h-7 text-blue-700" />
                  </div>
                  <div className="eaf-related-footer">
                    <span className="eaf-related-title">Business &amp; MSME Loans</span>
                    <span className="eaf-related-arrow">→</span>
                  </div>
                </Link>

                <Link to="/contact/" className="eaf-related-card">
                  <div className="eaf-related-img-holder" style={{ background: '#EFF6FF' }}>
                    <MessageSquare className="w-7 h-7 text-blue-900" />
                  </div>
                  <div className="eaf-related-footer">
                    <span className="eaf-related-title">Contact</span>
                    <span className="eaf-related-arrow">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* 12. DISCLAIMER / INFORMATION BAR */}
          <div className="eaf-disclaimer-strip">
            <div className="eaf-disclaimer-icon-wrap">
              <ShieldCheck className="eaf-disclaimer-icon" />
            </div>
            <p className="eaf-disclaimer-text">
              Balaji Associates provides loan consultancy/application assistance. Loan approval, eligible amount, rate of interest, fees, tenure, security requirements and disbursement are subject to the respective Bank/NBFC's policies, documentation, credit assessment and applicable terms. Balaji Associates does not guarantee loan sanction.
            </p>
          </div>
        </div>
      </section>

      {/* 13. BOTTOM CTA */}
      <section className="eaf-bottom-cta-section">
        <div className="eaf-container">
          <div className="eaf-bottom-cta-card">
            <div className="eaf-bottom-cta-content">
              <p className="eaf-bottom-cta-text">
                Not sure which option fits your requirement? Speak with Balaji Associates before you apply. We can help you understand the next step, while the respective lender makes the final credit decision.
              </p>

              <div className="eaf-bottom-cta-buttons">
                <Link to="/contact/" className="eaf-btn-cta-gold">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="eaf-btn-cta-outline">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="eaf-bottom-cta-visual">
              <div className="eaf-bottom-cta-img-placeholder">
                <ImageIcon className="eaf-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="eaf-placeholder-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Madurai Temple &amp; Finance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EducationAgriFinance;
