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
  TrendingUp,
  Briefcase,
  Landmark,
  User,
  CheckCircle2,
  Settings,
  Sparkles,
  Wrench,
  Cpu,
  Wallet,
  Users,
  Scale,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'Can an MSME get machinery finance?',
    answer: 'Yes, eligible MSMEs, proprietorships, partnerships, and manufacturing or service enterprises can access machinery financing from Banks and NBFCs, subject to business vintage, cash flow, and quotation assessment.'
  },
  {
    question: 'Is collateral required?',
    answer: 'In many cases, the machinery or equipment being financed serves as the primary security (hypothecation). However, depending on loan size, credit profile, or lender norms, collateral or third-party guarantee may be required, or CGTMSE-backed options may be explored.'
  },
  {
    question: 'Can old machinery be used for finance?',
    answer: 'Certain lenders consider finance against existing unencumbered machinery or refinancing recently purchased equipment. Eligibility depends heavily on machine age, invoice trail, residual operating life, working condition, and certified valuation.'
  },
  {
    question: 'Is machinery finance the same as a business loan?',
    answer: 'No. A general business loan is typically a term loan or working-capital facility for broad business expenses. Machinery finance is an asset-specific facility structured around acquiring or hypothecating productive equipment, often with terms tailored to equipment lifecycle.'
  }
];

function MachineryEquipmentFinance() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="machinery-finance-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .machinery-finance-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .mef-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .mef-section {
          padding: 42px 0;
        }

        .mef-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .mef-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
        }

        .mef-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .mef-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .mef-img-placeholder {
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

        .mef-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        /* 2. BREADCRUMB */
        .mef-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .mef-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .mef-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .mef-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .mef-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .mef-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .mef-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 3. HERO SECTION */
        .mef-hero-section {
          padding: 24px 0 46px;
        }

        .mef-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 44px;
          align-items: center;
        }

        .mef-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .mef-hero-badge {
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

        .mef-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .mef-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .mef-hero-title {
          font-size: 38px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .mef-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .mef-btn-primary {
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

        .mef-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .mef-btn-secondary {
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

        .mef-btn-secondary:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        .mef-hero-visual-card {
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

        .mef-floating-card {
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

        .mef-floating-card-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .mef-floating-card-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        .mef-float-1 {
          top: 24px;
          left: 36px;
        }

        .mef-float-2 {
          bottom: 28px;
          left: 36px;
        }

        .mef-float-3 {
          top: 36px;
          right: 36px;
        }

        .mef-float-4 {
          bottom: 32px;
          right: 36px;
        }

        /* 4. SECTION — MACHINERY PURCHASE FINANCE */
        .mef-purchase-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .mef-cards-2x2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 22px;
        }

        .mef-info-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px 14px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .mef-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .mef-info-card-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ECFDF5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mef-info-card-icon {
          width: 20px;
          height: 20px;
          color: #059669;
        }

        .mef-info-card-text {
          font-size: 13px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.4;
          margin: 0;
        }

        /* 5. SECTION — MACHINERY MORTGAGE (Mint Background) */
        .mef-mortgage-section {
          background-color: #F2FBF7;
          border-top: 1px solid #DCFCE7;
          border-bottom: 1px solid #DCFCE7;
        }

        .mef-mortgage-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        .mef-mortgage-cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        .mef-mortgage-card {
          background: #FFFFFF;
          border: 1px solid #BBF7D0;
          border-radius: 12px;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .mef-mortgage-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.08);
        }

        .mef-mortgage-icon {
          width: 24px;
          height: 24px;
          color: #059669;
        }

        .mef-mortgage-card-text {
          font-size: 12.5px;
          font-weight: 600;
          color: #064E3B;
          line-height: 1.4;
          margin: 0;
        }

        .mef-mortgage-right-wrap {
          position: relative;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 16px;
          align-items: center;
        }

        .mef-mortgage-process-card {
          background: #FFFFFF;
          border: 1px solid #BBF7D0;
          border-radius: 14px;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          text-align: center;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .mef-vert-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .mef-vert-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ECFDF5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #059669;
        }

        .mef-vert-label {
          font-size: 10.5px;
          font-weight: 700;
          color: #064E3B;
          white-space: nowrap;
        }

        .mef-vert-arrow {
          color: #10B981;
          font-size: 14px;
          font-weight: bold;
        }

        /* 6. SECTION — WHAT LENDERS EVALUATE */
        .mef-eval-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.65fr;
          gap: 28px;
          align-items: stretch;
        }

        .mef-subtext {
          font-size: 13.5px;
          color: #475569;
          line-height: 1.6;
          margin: -10px 0 20px 0;
        }

        .mef-eval-cards-wrap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .mef-eval-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .mef-eval-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .mef-eval-card-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mef-number-badge {
          background-color: #FEF3C7;
          color: #D97706;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
        }

        .mef-eval-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
        }

        .mef-eval-card-text {
          font-size: 12px;
          font-weight: 600;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 7. SECTION — DOCUMENTS */
        .mef-docs-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .mef-docs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mef-doc-card-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: border-color 0.2s;
        }

        .mef-doc-card-item:hover {
          border-color: #CBD5E1;
        }

        .mef-doc-check-icon {
          width: 18px;
          height: 18px;
          color: #059669;
          flex-shrink: 0;
        }

        .mef-doc-text {
          font-size: 13px;
          font-weight: 600;
          color: #0A1B3A;
        }

        /* 8. SECTION — HOW BALAJI ASSOCIATES HELPS */
        .mef-helps-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .mef-process-flow-6 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 22px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 16px 12px;
        }

        .mef-flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          flex: 1;
        }

        .mef-flow-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .mef-flow-icon-circle-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748B;
        }

        .mef-flow-label {
          font-size: 10.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.25;
        }

        .mef-flow-arrow {
          color: #ECA822;
          font-size: 18px;
          font-weight: bold;
          flex-shrink: 0;
          padding: 0 2px;
        }

        /* 9 & 10. FAQS & RELATED SERVICES */
        .mef-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        .mef-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .mef-faq-header {
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

        .mef-faq-question {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .mef-faq-chevron {
          width: 18px;
          height: 18px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .mef-faq-chevron.rotate {
          transform: rotate(180deg);
        }

        .mef-faq-body {
          padding: 0 18px 14px;
          font-size: 13px;
          line-height: 1.6;
          color: #475569;
        }

        .mef-related-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .mef-related-card {
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

        .mef-related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .mef-related-img-holder {
          width: 100%;
          height: 80px;
          background-color: #F1F5F9;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mef-related-footer {
          padding: 12px 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mef-related-title {
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.3;
        }

        .mef-related-arrow {
          font-size: 14px;
          font-weight: bold;
          color: #003B73;
        }

        /* 11. BOTTOM CTA */
        .mef-bottom-cta-section {
          padding: 32px 0 20px;
        }

        .mef-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 20px;
          padding: 36px 44px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
        }

        .mef-bottom-cta-text {
          font-size: 16px;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .mef-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .mef-btn-cta-gold {
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

        .mef-btn-cta-gold:hover {
          transform: translateY(-2px);
        }

        .mef-btn-cta-outline {
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

        .mef-btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .mef-bottom-cta-img-placeholder {
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

        /* 12. DISCLAIMER / INFORMATION BAR */
        .mef-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 16px 0 40px;
        }

        .mef-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mef-disclaimer-icon {
          width: 18px;
          height: 18px;
          color: #1E40AF;
        }

        .mef-disclaimer-text {
          font-size: 13px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.5;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .mef-hero-grid,
          .mef-purchase-grid,
          .mef-mortgage-grid,
          .mef-eval-grid,
          .mef-docs-grid,
          .mef-helps-grid,
          .mef-split-grid,
          .mef-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .mef-hero-visual-card {
            min-height: 300px;
          }

          .mef-hero-title {
            font-size: 32px;
          }

          .mef-eval-cards-wrap {
            grid-template-columns: repeat(2, 1fr);
          }

          .mef-mortgage-right-wrap {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .mef-container {
            padding: 0 16px;
          }

          .mef-breadcrumb {
            flex-wrap: wrap;
            row-gap: 4px;
          }

          .mef-cards-2x2,
          .mef-mortgage-cards-row,
          .mef-eval-cards-wrap,
          .mef-related-cards {
            grid-template-columns: 1fr;
          }

          .mef-process-flow-6 {
            flex-direction: column;
            gap: 14px;
          }

          .mef-flow-arrow {
            transform: rotate(90deg);
          }

          .mef-bottom-cta-card {
            padding: 28px 20px;
          }

          .mef-disclaimer-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .mef-section {
            padding: 32px 0;
          }

          .mef-hero-title {
            font-size: 24px;
            line-height: 1.25;
          }

          .mef-hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .mef-btn-primary,
          .mef-btn-secondary {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .mef-heading {
            font-size: 22px;
          }

          .mef-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 18px;
          }

          .mef-hero-visual-card {
            min-height: 260px;
          }

          .mef-floating-card {
            padding: 8px 10px;
            font-size: 10px;
          }

          .mef-float-1 {
            top: 14px;
            left: 14px;
          }

          .mef-float-2 {
            top: 50%;
            left: 14px;
          }

          .mef-float-3 {
            bottom: 14px;
            right: 14px;
          }

          .mef-bottom-cta-card {
            padding: 24px 16px;
          }

          .mef-bottom-cta-buttons {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .mef-btn-cta-gold,
          .mef-btn-cta-outline {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .mef-faq-header {
            padding: 12px 14px;
          }

          .mef-faq-question {
            font-size: 13px;
          }
        }
      `}</style>

      {/* 2. BREADCRUMB */}
      <div className="mef-breadcrumb-wrap">
        <div className="mef-container">
          <div className="mef-breadcrumb">
            <HomeIcon className="mef-breadcrumb-home-icon" />
            <Link to="/" className="mef-breadcrumb-link">Home</Link>
            <span className="mef-breadcrumb-sep">&gt;</span>
            <Link to="/home-property-loans/" className="mef-breadcrumb-link">Loans</Link>
            <span className="mef-breadcrumb-sep">&gt;</span>
            <span className="mef-breadcrumb-current">Machinery &amp; Equipment Finance</span>
          </div>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="mef-section mef-hero-section">
        <div className="mef-container">
          <div className="mef-hero-grid">
            <div className="mef-hero-left">
              <div className="mef-hero-top-row">
                <div className="mef-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>MACHINERY &amp; EQUIPMENT FINANCE</span>
                </div>
                <div className="mef-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="mef-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="mef-hero-title">
                Machinery Purchase &amp;<br />
                Equipment Finance<br />
                Assistance in Madurai
              </h1>

              <p className="mef-text-p">
                Machinery is often the engine behind business capacity. New equipment can increase output, improve quality or reduce manual work, but the investment needs to fit the business's cash flow and repayment ability.
              </p>

              <p className="mef-text-p">
                Balaji Associates assists eligible manufacturers, workshops, industrial units and MSMEs in exploring machinery and equipment financing through Banks and NBFCs.
              </p>

              <div className="mef-hero-actions">
                <Link to="/contact/" className="mef-btn-primary">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="mef-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="mef-hero-right">
              <div className="mef-hero-visual-card">
                <ImageIcon className="mef-placeholder-icon" />

                <div className="mef-floating-card mef-float-1">
                  <Settings className="mef-floating-card-icon" />
                  <span className="mef-floating-card-label">Machinery Finance</span>
                </div>

                <div className="mef-floating-card mef-float-2">
                  <Building2 className="mef-floating-card-icon" />
                  <span className="mef-floating-card-label">MSME</span>
                </div>

                <div className="mef-floating-card mef-float-3">
                  <Wrench className="mef-floating-card-icon" />
                  <span className="mef-floating-card-label">Equipment Finance</span>
                </div>

                <div className="mef-floating-card mef-float-4">
                  <FileText className="mef-floating-card-icon" />
                  <span className="mef-floating-card-label">Asset-Backed Finance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION — MACHINERY PURCHASE FINANCE */}
      <section className="mef-section">
        <div className="mef-container">
          <div className="mef-header-row">
            <h2 className="mef-heading">Machinery Purchase Finance</h2>
            <div className="mef-gold-line"></div>
          </div>

          <div className="mef-purchase-grid">
            <div className="mef-img-placeholder">
              <ImageIcon className="mef-placeholder-icon" />
            </div>

            <div className="mef-purchase-content">
              <p className="mef-text-p">
                Dedicated machinery finance may be suitable when the requirement is specifically linked to acquiring productive equipment. The lender may review the quotation, supplier, equipment type, business performance and proposed contribution/margin.
              </p>

              <div className="mef-cards-2x2">
                <div className="mef-info-card">
                  <div className="mef-info-card-icon-wrap">
                    <Settings className="mef-info-card-icon" />
                  </div>
                  <p className="mef-info-card-text">New machinery</p>
                </div>

                <div className="mef-info-card">
                  <div className="mef-info-card-icon-wrap">
                    <Wrench className="mef-info-card-icon" />
                  </div>
                  <p className="mef-info-card-text">Equipment upgrades</p>
                </div>

                <div className="mef-info-card">
                  <div className="mef-info-card-icon-wrap">
                    <TrendingUp className="mef-info-card-icon" />
                  </div>
                  <p className="mef-info-card-text">Capacity expansion</p>
                </div>

                <div className="mef-info-card">
                  <div className="mef-info-card-icon-wrap">
                    <Cpu className="mef-info-card-icon" />
                  </div>
                  <p className="mef-info-card-text">Automation and process improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION — MACHINERY MORTGAGE / ASSET-BACKED FINANCE (Mint Background) */}
      <section className="mef-section mef-mortgage-section">
        <div className="mef-container">
          <div className="mef-header-row">
            <h2 className="mef-heading">Machinery Mortgage / Asset-Backed Finance</h2>
            <div className="mef-gold-line"></div>
          </div>

          <div className="mef-mortgage-grid">
            <div className="mef-mortgage-content">
              <p className="mef-text-p">
                Businesses that already own eligible machinery may have financing possibilities involving those assets, but this is highly lender- and asset-specific. Age, ownership, invoice trail, condition, valuation and marketability can matter.
              </p>

              <div className="mef-mortgage-cards-row">
                <div className="mef-mortgage-card">
                  <Building2 className="mef-mortgage-icon" />
                  <p className="mef-mortgage-card-text">
                    Working capital
                  </p>
                </div>

                <div className="mef-mortgage-card">
                  <TrendingUp className="mef-mortgage-icon" />
                  <p className="mef-mortgage-card-text">
                    Expansion
                  </p>
                </div>

                <div className="mef-mortgage-card">
                  <FileText className="mef-mortgage-icon" />
                  <p className="mef-mortgage-card-text">
                    Other eligible business purposes
                  </p>
                </div>
              </div>
            </div>

            <div className="mef-mortgage-right-wrap">
              <div className="mef-img-placeholder" style={{ borderColor: '#BBF7D0' }}>
                <ImageIcon className="mef-placeholder-icon" />
              </div>

              <div className="mef-mortgage-process-card">
                <div className="mef-vert-step">
                  <div className="mef-vert-icon-circle">
                    <Settings className="w-4 h-4" />
                  </div>
                  <span className="mef-vert-label">Existing<br />Machinery</span>
                </div>

                <span className="mef-vert-arrow">↓</span>

                <div className="mef-vert-step">
                  <div className="mef-vert-icon-circle">
                    <Scale className="w-4 h-4" />
                  </div>
                  <span className="mef-vert-label">Asset<br />Assessment</span>
                </div>

                <span className="mef-vert-arrow">↓</span>

                <div className="mef-vert-step">
                  <div className="mef-vert-icon-circle">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <span className="mef-vert-label">Finance<br />Possibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — WHAT LENDERS EVALUATE */}
      <section className="mef-section">
        <div className="mef-container">
          <div className="mef-header-row">
            <h2 className="mef-heading">What Lenders Evaluate</h2>
            <div className="mef-gold-line"></div>
          </div>

          <p className="mef-subtext">
            The lender assesses both the business and the equipment.
          </p>

          <div className="mef-eval-grid">
            <div className="mef-eval-cards-wrap">
              <div className="mef-eval-card">
                <div className="mef-eval-card-top">
                  <span className="mef-number-badge">01</span>
                  <TrendingUp className="mef-eval-icon" />
                </div>
                <p className="mef-eval-card-text">Business financial performance</p>
              </div>

              <div className="mef-eval-card">
                <div className="mef-eval-card-top">
                  <span className="mef-number-badge">02</span>
                  <Wallet className="mef-eval-icon" />
                </div>
                <p className="mef-eval-card-text">Cash flow and repayment ability</p>
              </div>

              <div className="mef-eval-card">
                <div className="mef-eval-card-top">
                  <span className="mef-number-badge">03</span>
                  <FileText className="mef-eval-icon" />
                </div>
                <p className="mef-eval-card-text">Machinery quotation/invoice</p>
              </div>

              <div className="mef-eval-card">
                <div className="mef-eval-card-top">
                  <span className="mef-number-badge">04</span>
                  <Building2 className="mef-eval-icon" />
                </div>
                <p className="mef-eval-card-text">Supplier and equipment details</p>
              </div>

              <div className="mef-eval-card">
                <div className="mef-eval-card-top">
                  <span className="mef-number-badge">05</span>
                  <Briefcase className="mef-eval-icon" />
                </div>
                <p className="mef-eval-card-text">Business vintage and industry</p>
              </div>

              <div className="mef-eval-card">
                <div className="mef-eval-card-top">
                  <span className="mef-number-badge">06</span>
                  <User className="mef-eval-icon" />
                </div>
                <p className="mef-eval-card-text">Credit profile</p>
              </div>

              <div className="mef-eval-card">
                <div className="mef-eval-card-top">
                  <span className="mef-number-badge">07</span>
                  <ShieldCheck className="mef-eval-icon" />
                </div>
                <p className="mef-eval-card-text">Margin/security requirements</p>
              </div>
            </div>

            <div className="mef-img-placeholder">
              <ImageIcon className="mef-placeholder-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION — DOCUMENTS */}
      <section className="mef-section">
        <div className="mef-container">
          <div className="mef-header-row">
            <h2 className="mef-heading">Documents</h2>
            <div className="mef-gold-line"></div>
          </div>

          <p className="mef-subtext">
            Common requirements may include:
          </p>

          <div className="mef-docs-grid">
            <div className="mef-img-placeholder">
              <ImageIcon className="mef-placeholder-icon" />
            </div>

            <div className="mef-docs-content">
              <ul className="mef-docs-list">
                <li className="mef-doc-card-item">
                  <CheckCircle2 className="mef-doc-check-icon" />
                  <span className="mef-doc-text">KYC and business documents</span>
                </li>
                <li className="mef-doc-card-item">
                  <CheckCircle2 className="mef-doc-check-icon" />
                  <span className="mef-doc-text">Bank statements</span>
                </li>
                <li className="mef-doc-card-item">
                  <CheckCircle2 className="mef-doc-check-icon" />
                  <span className="mef-doc-text">GST/ITR/financial statements where applicable</span>
                </li>
                <li className="mef-doc-card-item">
                  <CheckCircle2 className="mef-doc-check-icon" />
                  <span className="mef-doc-text">Machinery quotation or invoice</span>
                </li>
                <li className="mef-doc-card-item">
                  <CheckCircle2 className="mef-doc-check-icon" />
                  <span className="mef-doc-text">Project details where relevant</span>
                </li>
                <li className="mef-doc-card-item">
                  <CheckCircle2 className="mef-doc-check-icon" />
                  <span className="mef-doc-text">Existing loan details</span>
                </li>
                <li className="mef-doc-card-item">
                  <CheckCircle2 className="mef-doc-check-icon" />
                  <span className="mef-doc-text">Asset ownership/valuation documents for asset-backed cases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION — HOW BALAJI ASSOCIATES HELPS */}
      <section className="mef-section">
        <div className="mef-container">
          <div className="mef-header-row">
            <h2 className="mef-heading">How Balaji Associates Helps</h2>
            <div className="mef-gold-line"></div>
          </div>

          <div className="mef-helps-grid">
            <div className="mef-img-placeholder">
              <ImageIcon className="mef-placeholder-icon" />
            </div>

            <div className="mef-helps-content">
              <p className="mef-text-p">
                We help determine whether the requirement is better approached as machinery purchase finance, a business term loan, CGTMSE-related route or another facility, then assist with the application journey.
              </p>

              <div className="mef-process-flow-6">
                <div className="mef-flow-step">
                  <FileText className="mef-flow-icon" />
                  <span className="mef-flow-label">Understand the<br />business requirement</span>
                </div>

                <span className="mef-flow-arrow">→</span>

                <div className="mef-flow-step">
                  <Settings className="mef-flow-icon" />
                  <span className="mef-flow-label">Identify the<br />appropriate finance route</span>
                </div>

                <span className="mef-flow-arrow">→</span>

                <div className="mef-flow-step">
                  <FileText className="mef-flow-icon" />
                  <span className="mef-flow-label">Organise<br />documentation</span>
                </div>

                <span className="mef-flow-arrow">→</span>

                <div className="mef-flow-step">
                  <Landmark className="mef-flow-icon" />
                  <span className="mef-flow-label">Explore lender<br />options</span>
                </div>

                <span className="mef-flow-arrow">→</span>

                <div className="mef-flow-step">
                  <Users className="mef-flow-icon" />
                  <span className="mef-flow-label">Application<br />coordination</span>
                </div>

                <span className="mef-flow-arrow">→</span>

                <div className="mef-flow-step">
                  <div className="mef-flow-icon-circle-badge">
                    <CheckCircle2 className="w-4 h-4 text-slate-500" />
                  </div>
                  <span className="mef-flow-label">Lender<br />Decision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 & 10. FAQS & RELATED SERVICES */}
      <section className="mef-section">
        <div className="mef-container">
          <div className="mef-split-grid">
            {/* FAQ Column */}
            <div className="mef-faq-col">
              <div className="mef-header-row">
                <h2 className="mef-heading">Frequently Asked Questions</h2>
                <div className="mef-gold-line"></div>
              </div>

              <div className="mef-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="mef-faq-item" key={idx}>
                      <button
                        className="mef-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="mef-faq-question">{faq.question}</span>
                        <ChevronDown className={`mef-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="mef-faq-body">
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
            <div className="mef-related-col">
              <div className="mef-header-row">
                <h2 className="mef-heading">Related Services</h2>
                <div className="mef-gold-line"></div>
              </div>

              <div className="mef-related-cards">
                <Link to="/business-msme-loans/" className="mef-related-card">
                  <div className="mef-related-img-holder">
                    <ImageIcon className="mef-placeholder-icon" style={{ width: '22px', height: '22px' }} />
                  </div>
                  <div className="mef-related-footer">
                    <span className="mef-related-title">Business &amp; MSME Loans</span>
                    <span className="mef-related-arrow">→</span>
                  </div>
                </Link>

                <Link to="/working-capital-finance/" className="mef-related-card">
                  <div className="mef-related-img-holder">
                    <ImageIcon className="mef-placeholder-icon" style={{ width: '22px', height: '22px' }} />
                  </div>
                  <div className="mef-related-footer">
                    <span className="mef-related-title">Working Capital Finance</span>
                    <span className="mef-related-arrow">→</span>
                  </div>
                </Link>

                <Link to="/mortgage-loan-against-property/" className="mef-related-card">
                  <div className="mef-related-img-holder">
                    <ImageIcon className="mef-placeholder-icon" style={{ width: '22px', height: '22px' }} />
                  </div>
                  <div className="mef-related-footer">
                    <span className="mef-related-title">Mortgage &amp; LAP</span>
                    <span className="mef-related-arrow">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* 12. DISCLAIMER / INFORMATION BAR */}
          <div className="mef-disclaimer-strip">
            <div className="mef-disclaimer-icon-wrap">
              <ShieldCheck className="mef-disclaimer-icon" />
            </div>
            <p className="mef-disclaimer-text">
              Balaji Associates provides loan consultancy/application assistance. Loan approval, eligible amount, rate of interest, fees, tenure, security requirements and disbursement are subject to the respective Bank/NBFC's policies, documentation, credit assessment and applicable terms. Balaji Associates does not guarantee loan sanction.
            </p>
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CTA */}
      <section className="mef-bottom-cta-section">
        <div className="mef-container">
          <div className="mef-bottom-cta-card">
            <div className="mef-bottom-cta-content">
              <p className="mef-bottom-cta-text">
                Not sure which option fits your requirement? Speak with Balaji Associates before you apply. We can help you understand the next step, while the respective lender makes the final credit decision.
              </p>

              <div className="mef-bottom-cta-buttons">
                <Link to="/contact/" className="mef-btn-cta-gold">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="mef-btn-cta-outline">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="mef-bottom-cta-visual">
              <div className="mef-bottom-cta-img-placeholder">
                <ImageIcon className="mef-placeholder-icon" style={{ opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MachineryEquipmentFinance;
