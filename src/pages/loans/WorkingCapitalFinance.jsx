import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home as HomeIcon,
  ChevronRight,
  ChevronDown,
  Plus,
  Phone,
  ArrowRight,
  ShieldCheck,
  FileText,
  Building2,
  TrendingUp,
  Briefcase,
  Landmark,
  User,
  CreditCard,
  CheckCircle2,
  Settings,
  Sparkles,
  Wrench,
  Truck,
  Package,
  Activity,
  RefreshCw,
  Database,
  Coins,
  Store,
  Wallet,
  FileCheck,
  MessageSquare,
  FileSpreadsheet,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'What is the difference between OD and a term loan?',
    answer: 'A term loan provides a lump-sum amount repaid in fixed monthly EMIs over a predetermined tenure. An Overdraft (OD) is a revolving credit facility where you withdraw as needed up to a sanctioned limit and pay interest only on the actual amount utilized and number of days borrowed.'
  },
  {
    question: 'What is OD takeover?',
    answer: 'An OD takeover occurs when an existing overdraft facility with one bank or NBFC is paid off and transferred to a new lender, typically to access improved credit limits, lower interest rates, reduced collateral requirements, or more favorable banking terms.'
  },
  {
    question: 'How is Cash Credit different from OD?',
    answer: 'While both are revolving credit limits, Cash Credit (CC) is strictly linked to working capital and hypothecated against current assets (stock and book debts) with drawing power assessed periodically. Overdraft (OD) can be secured against property, fixed deposits, or provided as an unsecured facility based on financial turnover.'
  },
  {
    question: 'Can a new business get OD/CC?',
    answer: 'Generally, lenders prefer enterprises with at least 1 to 2 years of audited financials, banking history, and predictable operational cash flows. However, newer enterprises with strong tangible collateral, high-net-worth guarantors, or specific CGTMSE scheme backing may be evaluated by select lenders.'
  }
];

function WorkingCapitalFinance() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="working-capital-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .working-capital-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .wcf-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .wcf-section {
          padding: 42px 0;
        }

        .wcf-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .wcf-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
        }

        .wcf-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .wcf-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .wcf-img-placeholder {
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

        .wcf-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        /* 2. BREADCRUMB */
        .wcf-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .wcf-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .wcf-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .wcf-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .wcf-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .wcf-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .wcf-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 3. HERO SECTION */
        .wcf-hero-section {
          padding: 24px 0 46px;
        }

        .wcf-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 44px;
          align-items: center;
        }

        .wcf-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .wcf-hero-badge {
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

        .wcf-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .wcf-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .wcf-hero-title {
          font-size: 38px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .wcf-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .wcf-btn-primary {
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

        .wcf-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .wcf-btn-secondary {
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

        .wcf-btn-secondary:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        .wcf-hero-visual-card {
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

        .wcf-floating-card {
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

        .wcf-floating-card-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .wcf-floating-card-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        .wcf-float-1 {
          top: 24px;
          left: 36px;
        }

        .wcf-float-2 {
          bottom: 28px;
          left: 36px;
        }

        .wcf-float-3 {
          top: 36px;
          right: 36px;
        }

        .wcf-float-4 {
          bottom: 32px;
          right: 36px;
        }

        /* 4. SECTION — OVERDRAFT (OD) */
        .wcf-od-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .wcf-cards-4-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 22px;
        }

        .wcf-info-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .wcf-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .wcf-info-card-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #ECFDF5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .wcf-info-card-icon {
          width: 20px;
          height: 20px;
          color: #059669;
        }

        .wcf-info-card-text {
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 5. SECTION — OD TAKEOVER (Mint Background) */
        .wcf-takeover-section {
          background-color: #F2FBF7;
          border-top: 1px solid #DCFCE7;
          border-bottom: 1px solid #DCFCE7;
        }

        .wcf-takeover-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        .wcf-takeover-cards-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 22px;
        }

        .wcf-takeover-card {
          background: #FFFFFF;
          border: 1px solid #BBF7D0;
          border-radius: 12px;
          padding: 16px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .wcf-takeover-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.08);
        }

        .wcf-takeover-icon {
          width: 24px;
          height: 24px;
          color: #059669;
          flex-shrink: 0;
        }

        .wcf-takeover-card-text {
          font-size: 12.5px;
          font-weight: 600;
          color: #064E3B;
          line-height: 1.4;
          margin: 0;
        }

        .wcf-takeover-flow-card {
          background: #FFFFFF;
          border: 1px solid #BBF7D0;
          border-radius: 16px;
          padding: 24px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }

        .wcf-flow-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
        }

        .wcf-flow-node-icon {
          width: 24px;
          height: 24px;
          color: #059669;
        }

        .wcf-flow-node-label {
          font-size: 11px;
          font-weight: 700;
          color: #064E3B;
          white-space: nowrap;
        }

        .wcf-flow-arrow-orange {
          color: #ECA822;
          font-size: 18px;
          font-weight: bold;
        }

        /* 6. SECTION — CASH CREDIT (CC) */
        .wcf-cc-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .wcf-cards-3-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        /* 7. SECTION — BUSINESS CASH FLOW CYCLE */
        .wcf-cycle-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 28px 20px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .wcf-cycle-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          flex: 1;
        }

        .wcf-cycle-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .wcf-circle-blue {
          background: #EFF6FF;
          color: #1D4ED8;
        }

        .wcf-circle-green {
          background: #ECFDF5;
          color: #059669;
        }

        .wcf-circle-amber {
          background: #FFFBEB;
          color: #D97706;
        }

        .wcf-cycle-step-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.25;
        }

        .wcf-cycle-arrow {
          font-size: 20px;
          font-weight: bold;
          flex-shrink: 0;
          padding: 0 2px;
        }

        .wcf-cycle-arrow.blue {
          color: #2563EB;
        }

        .wcf-cycle-arrow.gold {
          color: #ECA822;
        }

        /* 8. SECTION — WHAT LENDERS EVALUATE (Dark Navy) */
        .wcf-eval-dark-section {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          color: #FFFFFF;
          border-radius: 20px;
          padding: 36px 40px;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
        }

        .wcf-eval-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 32px;
          align-items: stretch;
        }

        .wcf-subtext-white {
          font-size: 13.5px;
          color: #CBD5E1;
          margin: -10px 0 20px 0;
        }

        .wcf-eval-cards-wrap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .wcf-eval-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 14px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .wcf-eval-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }

        .wcf-number-badge {
          background-color: #FEF3C7;
          color: #D97706;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
        }

        .wcf-eval-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
        }

        .wcf-eval-card-text {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.3;
          margin: 0;
        }

        /* 9. SECTION — DOCUMENTS & HOW BALAJI ASSOCIATES HELPS */
        .wcf-docs-helps-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: start;
        }

        .wcf-docs-inner-grid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 20px;
          align-items: stretch;
        }

        .wcf-docs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .wcf-doc-bullet {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: #334155;
          line-height: 1.35;
        }

        .wcf-doc-check-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .wcf-process-flow-4 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 22px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 16px 12px;
        }

        .wcf-flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          flex: 1;
        }

        .wcf-flow-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .wcf-flow-label {
          font-size: 10.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.25;
        }

        .wcf-flow-arrow {
          color: #ECA822;
          font-size: 18px;
          font-weight: bold;
          flex-shrink: 0;
          padding: 0 2px;
        }

        /* 10 & 11. FAQS & RELATED SERVICES */
        .wcf-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        .wcf-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .wcf-faq-header {
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

        .wcf-faq-question {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .wcf-faq-plus-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .wcf-faq-plus-icon.rotate {
          transform: rotate(45deg);
        }

        .wcf-faq-body {
          padding: 0 18px 14px;
          font-size: 13px;
          line-height: 1.6;
          color: #475569;
        }

        .wcf-related-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .wcf-related-card {
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

        .wcf-related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .wcf-related-img-holder {
          width: 100%;
          height: 80px;
          background-color: #F1F5F9;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wcf-related-footer {
          padding: 12px 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .wcf-related-title {
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.3;
        }

        .wcf-related-arrow {
          font-size: 14px;
          font-weight: bold;
          color: #003B73;
        }

        /* 12. BOTTOM CTA */
        .wcf-bottom-cta-section {
          padding: 32px 0 20px;
        }

        .wcf-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 20px;
          padding: 36px 44px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
        }

        .wcf-bottom-cta-text {
          font-size: 16px;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .wcf-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .wcf-btn-cta-gold {
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

        .wcf-btn-cta-gold:hover {
          transform: translateY(-2px);
        }

        .wcf-btn-cta-outline {
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

        .wcf-btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .wcf-bottom-cta-img-placeholder {
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

        /* 13. DISCLAIMER / INFORMATION BAR */
        .wcf-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 16px 0 40px;
        }

        .wcf-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .wcf-disclaimer-icon {
          width: 18px;
          height: 18px;
          color: #1E40AF;
        }

        .wcf-disclaimer-text {
          font-size: 13px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.5;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .wcf-hero-grid,
          .wcf-od-grid,
          .wcf-takeover-grid,
          .wcf-cc-grid,
          .wcf-eval-grid,
          .wcf-docs-helps-grid,
          .wcf-split-grid,
          .wcf-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .wcf-hero-visual-card {
            min-height: 300px;
          }

          .wcf-hero-title {
            font-size: 32px;
          }

          .wcf-eval-cards-wrap {
            grid-template-columns: repeat(2, 1fr);
          }

          .wcf-cycle-card {
            flex-wrap: wrap;
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .wcf-cards-4-row,
          .wcf-takeover-cards-row,
          .wcf-cards-3-row,
          .wcf-related-cards {
            grid-template-columns: 1fr;
          }

          .wcf-docs-inner-grid {
            grid-template-columns: 1fr;
          }

          .wcf-process-flow-4,
          .wcf-takeover-flow-card {
            flex-direction: column;
            gap: 14px;
          }

          .wcf-flow-arrow,
          .wcf-flow-arrow-orange {
            transform: rotate(90deg);
          }

          .wcf-bottom-cta-card {
            padding: 28px 20px;
          }
        }
      `}</style>

      {/* 2. BREADCRUMB */}
      <div className="wcf-breadcrumb-wrap">
        <div className="wcf-container">
          <div className="wcf-breadcrumb">
            <HomeIcon className="wcf-breadcrumb-home-icon" />
            <Link to="/" className="wcf-breadcrumb-link">Home</Link>
            <span className="wcf-breadcrumb-sep">&gt;</span>
            <Link to="/home-property-loans/" className="wcf-breadcrumb-link">Loan Services</Link>
            <span className="wcf-breadcrumb-sep">&gt;</span>
            <span className="wcf-breadcrumb-current">Working Capital Finance</span>
          </div>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="wcf-section wcf-hero-section">
        <div className="wcf-container">
          <div className="wcf-hero-grid">
            <div className="wcf-hero-left">
              <div className="wcf-hero-top-row">
                <div className="wcf-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>WORKING CAPITAL FINANCE</span>
                </div>
                <div className="wcf-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="wcf-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="wcf-hero-title">
                OD, OD Takeover &amp;<br />
                Cash Credit Assistance<br />
                in Madurai
              </h1>

              <p className="wcf-text-p">
                A profitable business can still face cash-flow pressure when supplier payments are due before customer collections arrive. Working-capital finance is designed around this operating cycle rather than a one-time asset purchase.
              </p>

              <p className="wcf-text-p">
                Balaji Associates assists eligible businesses in exploring Overdraft (OD), OD takeover and Cash Credit (CC) facilities through Banks and NBFCs.
              </p>

              <div className="wcf-hero-actions">
                <Link to="/contact/" className="wcf-btn-primary">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="wcf-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="wcf-hero-right">
              <div className="wcf-hero-visual-card">
                <ImageIcon className="wcf-placeholder-icon" />

                <div className="wcf-floating-card wcf-float-1">
                  <Database className="wcf-floating-card-icon" />
                  <span className="wcf-floating-card-label">Overdraft (OD)</span>
                </div>

                <div className="wcf-floating-card wcf-float-2">
                  <CreditCard className="wcf-floating-card-icon" />
                  <span className="wcf-floating-card-label">Cash Credit (CC)</span>
                </div>

                <div className="wcf-floating-card wcf-float-3">
                  <RefreshCw className="wcf-floating-card-icon" />
                  <span className="wcf-floating-card-label">OD Takeover</span>
                </div>

                <div className="wcf-floating-card wcf-float-4">
                  <TrendingUp className="wcf-floating-card-icon" />
                  <span className="wcf-floating-card-label">Working Capital</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION — OVERDRAFT (OD) */}
      <section className="wcf-section">
        <div className="wcf-container">
          <div className="wcf-header-row">
            <h2 className="wcf-heading">Overdraft (OD)</h2>
            <div className="wcf-gold-line"></div>
          </div>

          <div className="wcf-od-grid">
            <div className="wcf-img-placeholder">
              <ImageIcon className="wcf-placeholder-icon" />
            </div>

            <div className="wcf-od-content">
              <p className="wcf-text-p">
                An OD facility can provide flexible access to funds within a sanctioned limit, subject to lender terms. It can be useful where business cash needs rise and fall through the month.
              </p>

              <div className="wcf-cards-4-row">
                <div className="wcf-info-card">
                  <div className="wcf-info-card-icon-wrap">
                    <Truck className="wcf-info-card-icon" />
                  </div>
                  <p className="wcf-info-card-text">Supplier payments</p>
                </div>

                <div className="wcf-info-card">
                  <div className="wcf-info-card-icon-wrap">
                    <Package className="wcf-info-card-icon" />
                  </div>
                  <p className="wcf-info-card-text">Inventory</p>
                </div>

                <div className="wcf-info-card">
                  <div className="wcf-info-card-icon-wrap">
                    <Activity className="wcf-info-card-icon" />
                  </div>
                  <p className="wcf-info-card-text">Short-term operating needs</p>
                </div>

                <div className="wcf-info-card">
                  <div className="wcf-info-card-icon-wrap">
                    <RefreshCw className="wcf-info-card-icon" />
                  </div>
                  <p className="wcf-info-card-text">Seasonal cash-flow gaps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION — OD TAKEOVER (Mint Background) */}
      <section className="wcf-section wcf-takeover-section">
        <div className="wcf-container">
          <div className="wcf-header-row">
            <h2 className="wcf-heading">OD Takeover</h2>
            <div className="wcf-gold-line"></div>
          </div>

          <div className="wcf-takeover-grid">
            <div className="wcf-takeover-content">
              <p className="wcf-text-p">
                Businesses with an existing OD may explore a takeover by another lender. A takeover should be evaluated on the complete terms, security, charges, service and suitability—not only a headline interest rate.
              </p>

              <div className="wcf-takeover-cards-row">
                <div className="wcf-takeover-card">
                  <Building2 className="wcf-takeover-icon" />
                  <p className="wcf-takeover-card-text">
                    Existing sanction and account conduct are usually reviewed
                  </p>
                </div>

                <div className="wcf-takeover-card">
                  <CheckCircle2 className="wcf-takeover-icon" />
                  <p className="wcf-takeover-card-text">
                    The new lender independently reassesses eligibility
                  </p>
                </div>
              </div>
            </div>

            <div className="wcf-takeover-flow-card">
              <div className="wcf-flow-node">
                <Landmark className="wcf-flow-node-icon" />
                <span className="wcf-flow-node-label">Existing OD</span>
              </div>

              <span className="wcf-flow-arrow-orange">→</span>

              <div className="wcf-flow-node">
                <FileText className="wcf-flow-node-icon" />
                <span className="wcf-flow-node-label">Review</span>
              </div>

              <span className="wcf-flow-arrow-orange">→</span>

              <div className="wcf-flow-node">
                <Building2 className="wcf-flow-node-icon" />
                <span className="wcf-flow-node-label">New Lender</span>
              </div>

              <span className="wcf-flow-arrow-orange">→</span>

              <div className="wcf-flow-node">
                <FileCheck className="wcf-flow-node-icon" />
                <span className="wcf-flow-node-label">Fresh<br />Assessment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — CASH CREDIT (CC) */}
      <section className="wcf-section">
        <div className="wcf-container">
          <div className="wcf-header-row">
            <h2 className="wcf-heading">Cash Credit (CC)</h2>
            <div className="wcf-gold-line"></div>
          </div>

          <div className="wcf-cc-grid">
            <div className="wcf-img-placeholder">
              <ImageIcon className="wcf-placeholder-icon" />
            </div>

            <div className="wcf-cc-content">
              <p className="wcf-text-p">
                Cash Credit is commonly used for working-capital needs linked to stock, receivables and the operated cycle. The lender may calculate drawing power and require periodic financial/stock information.
              </p>

              <div className="wcf-cards-3-row">
                <div className="wcf-info-card">
                  <div className="wcf-info-card-icon-wrap">
                    <Package className="wcf-info-card-icon" />
                  </div>
                  <p className="wcf-info-card-text">Inventory and raw materials</p>
                </div>

                <div className="wcf-info-card">
                  <div className="wcf-info-card-icon-wrap">
                    <RefreshCw className="wcf-info-card-icon" />
                  </div>
                  <p className="wcf-info-card-text">Receivables cycle</p>
                </div>

                <div className="wcf-info-card">
                  <div className="wcf-info-card-icon-wrap">
                    <Coins className="wcf-info-card-icon" />
                  </div>
                  <p className="wcf-info-card-text">Day-to-day business funding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION — BUSINESS CASH FLOW CYCLE */}
      <section className="wcf-section">
        <div className="wcf-container">
          <div className="wcf-header-row">
            <h2 className="wcf-heading">Business Cash Flow Cycle</h2>
            <div className="wcf-gold-line"></div>
          </div>

          <div className="wcf-cycle-card">
            <div className="wcf-cycle-step">
              <div className="wcf-cycle-icon-circle wcf-circle-blue">
                <Truck className="w-5 h-5" />
              </div>
              <span className="wcf-cycle-step-label">Supplier<br />Payments</span>
            </div>

            <span className="wcf-cycle-arrow blue">→</span>

            <div className="wcf-cycle-step">
              <div className="wcf-cycle-icon-circle wcf-circle-green">
                <Package className="w-5 h-5" />
              </div>
              <span className="wcf-cycle-step-label">Inventory</span>
            </div>

            <span className="wcf-cycle-arrow gold">→</span>

            <div className="wcf-cycle-step">
              <div className="wcf-cycle-icon-circle wcf-circle-amber">
                <Settings className="w-5 h-5" />
              </div>
              <span className="wcf-cycle-step-label">Business<br />Operations</span>
            </div>

            <span className="wcf-cycle-arrow blue">→</span>

            <div className="wcf-cycle-step">
              <div className="wcf-cycle-icon-circle wcf-circle-blue">
                <Store className="w-5 h-5" />
              </div>
              <span className="wcf-cycle-step-label">Sales</span>
            </div>

            <span className="wcf-cycle-arrow gold">→</span>

            <div className="wcf-cycle-step">
              <div className="wcf-cycle-icon-circle wcf-circle-green">
                <FileText className="w-5 h-5" />
              </div>
              <span className="wcf-cycle-step-label">Receivables</span>
            </div>

            <span className="wcf-cycle-arrow blue">→</span>

            <div className="wcf-cycle-step" style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-14px', color: '#D97706', fontSize: '13px', fontWeight: 'bold' }}>↓</span>
              <div className="wcf-cycle-icon-circle wcf-circle-amber">
                <Coins className="w-5 h-5" />
              </div>
              <span className="wcf-cycle-step-label">Cash Flow</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION — WHAT LENDERS EVALUATE (Dark Navy) */}
      <section className="wcf-section">
        <div className="wcf-container">
          <div className="wcf-eval-dark-section">
            <div className="wcf-header-row" style={{ marginBottom: '14px' }}>
              <h2 className="wcf-heading" style={{ color: '#FFFFFF' }}>What Lenders Evaluate</h2>
              <div className="wcf-gold-line"></div>
            </div>

            <p className="wcf-subtext-white">
              Working-capital assessment is business-data heavy.
            </p>

            <div className="wcf-eval-grid">
              <div className="wcf-eval-cards-wrap">
                <div className="wcf-eval-card">
                  <span className="wcf-number-badge">01</span>
                  <TrendingUp className="wcf-eval-icon" />
                  <p className="wcf-eval-card-text">Turnover and cash flow</p>
                </div>

                <div className="wcf-eval-card">
                  <span className="wcf-number-badge">02</span>
                  <Landmark className="wcf-eval-icon" />
                  <p className="wcf-eval-card-text">Banking conduct</p>
                </div>

                <div className="wcf-eval-card">
                  <span className="wcf-number-badge">03</span>
                  <FileText className="wcf-eval-icon" />
                  <p className="wcf-eval-card-text">Financial statements</p>
                </div>

                <div className="wcf-eval-card">
                  <span className="wcf-number-badge">04</span>
                  <FileSpreadsheet className="wcf-eval-icon" />
                  <p className="wcf-eval-card-text">GST records where applicable</p>
                </div>

                <div className="wcf-eval-card">
                  <span className="wcf-number-badge">05</span>
                  <Package className="wcf-eval-icon" />
                  <p className="wcf-eval-card-text">Stock/receivables</p>
                </div>

                <div className="wcf-eval-card">
                  <span className="wcf-number-badge">06</span>
                  <CreditCard className="wcf-eval-icon" />
                  <p className="wcf-eval-card-text">Existing OD/CC conduct</p>
                </div>

                <div className="wcf-eval-card">
                  <span className="wcf-number-badge">07</span>
                  <User className="wcf-eval-icon" />
                  <p className="wcf-eval-card-text">Credit profile</p>
                </div>

                <div className="wcf-eval-card">
                  <span className="wcf-number-badge">07</span>
                  <ShieldCheck className="wcf-eval-icon" />
                  <p className="wcf-eval-card-text">Security where required</p>
                </div>
              </div>

              <div className="wcf-img-placeholder" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }}>
                <ImageIcon className="wcf-placeholder-icon" style={{ opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION — DOCUMENTS & HOW BALAJI ASSOCIATES HELPS */}
      <section className="wcf-section">
        <div className="wcf-container">
          <div className="wcf-docs-helps-grid">
            {/* Left: Documents */}
            <div className="wcf-docs-col">
              <div className="wcf-header-row">
                <h2 className="wcf-heading">Documents</h2>
                <div className="wcf-gold-line"></div>
              </div>

              <p className="wcf-text-p" style={{ marginBottom: '14px', fontWeight: 600 }}>
                Common requirements may include:
              </p>

              <div className="wcf-docs-inner-grid">
                <div className="wcf-img-placeholder" style={{ minHeight: '180px' }}>
                  <ImageIcon className="wcf-placeholder-icon" />
                </div>

                <ul className="wcf-docs-list">
                  <li className="wcf-doc-bullet">
                    <CheckCircle2 className="wcf-doc-check-icon" />
                    <span>KYC and business documents</span>
                  </li>
                  <li className="wcf-doc-bullet">
                    <CheckCircle2 className="wcf-doc-check-icon" />
                    <span>Bank statements</span>
                  </li>
                  <li className="wcf-doc-bullet">
                    <CheckCircle2 className="wcf-doc-check-icon" />
                    <span>GST/ITR/financial statements where applicable</span>
                  </li>
                  <li className="wcf-doc-bullet">
                    <CheckCircle2 className="wcf-doc-check-icon" />
                    <span>Machinery quotation or invoice</span>
                  </li>
                  <li className="wcf-doc-bullet">
                    <CheckCircle2 className="wcf-doc-check-icon" />
                    <span>Project details where relevant</span>
                  </li>
                  <li className="wcf-doc-bullet">
                    <CheckCircle2 className="wcf-doc-check-icon" />
                    <span>Existing loan details</span>
                  </li>
                  <li className="wcf-doc-bullet">
                    <CheckCircle2 className="wcf-doc-check-icon" />
                    <span>Asset ownership/valuation documents for asset-backed cases</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: How Balaji Associates Helps */}
            <div className="wcf-helps-col">
              <div className="wcf-header-row">
                <h2 className="wcf-heading">How Balaji Associates Helps</h2>
                <div className="wcf-gold-line"></div>
              </div>

              <p className="wcf-text-p">
                We help determine whether the requirement is better approached as machinery purchase finance, a business term loan, CGTMSE-related route or another facility, then assist with the application journey.
              </p>

              <div className="wcf-process-flow-4">
                <div className="wcf-flow-step">
                  <FileText className="wcf-flow-icon" />
                  <span className="wcf-flow-label">Understand<br />Business<br />Requirement</span>
                </div>

                <span className="wcf-flow-arrow">→</span>

                <div className="wcf-flow-step">
                  <MessageSquare className="wcf-flow-icon" />
                  <span className="wcf-flow-label">Identify OD / CC /<br />Term Loan<br />Discussion</span>
                </div>

                <span className="wcf-flow-arrow">→</span>

                <div className="wcf-flow-step">
                  <FileText className="wcf-flow-icon" />
                  <span className="wcf-flow-label">Organise<br />Financial<br />Information</span>
                </div>

                <span className="wcf-flow-arrow">→</span>

                <div className="wcf-flow-step">
                  <Landmark className="wcf-flow-icon" />
                  <span className="wcf-flow-label">Explore<br />Lender<br />Options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 & 11. FAQS & RELATED SERVICES */}
      <section className="wcf-section">
        <div className="wcf-container">
          <div className="wcf-split-grid">
            {/* FAQ Column */}
            <div className="wcf-faq-col">
              <div className="wcf-header-row">
                <h2 className="wcf-heading">Frequently Asked Questions</h2>
                <div className="wcf-gold-line"></div>
              </div>

              <div className="wcf-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="wcf-faq-item" key={idx}>
                      <button
                        className="wcf-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="wcf-faq-question">{faq.question}</span>
                        <Plus className={`wcf-faq-plus-icon ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="wcf-faq-body">
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
            <div className="wcf-related-col">
              <div className="wcf-header-row">
                <h2 className="wcf-heading">Related Services</h2>
                <div className="wcf-gold-line"></div>
              </div>

              <div className="wcf-related-cards">
                <Link to="/business-msme-loans/" className="wcf-related-card">
                  <div className="wcf-related-img-holder">
                    <ImageIcon className="wcf-placeholder-icon" style={{ width: '22px', height: '22px' }} />
                  </div>
                  <div className="wcf-related-footer">
                    <span className="wcf-related-title">Business &amp; MSME Loans</span>
                    <span className="wcf-related-arrow">→</span>
                  </div>
                </Link>

                <Link to="/machinery-equipment-finance/" className="wcf-related-card">
                  <div className="wcf-related-img-holder">
                    <ImageIcon className="wcf-placeholder-icon" style={{ width: '22px', height: '22px' }} />
                  </div>
                  <div className="wcf-related-footer">
                    <span className="wcf-related-title">Machinery Finance</span>
                    <span className="wcf-related-arrow">→</span>
                  </div>
                </Link>

                <Link to="/mortgage-loan-against-property/" className="wcf-related-card">
                  <div className="wcf-related-img-holder">
                    <ImageIcon className="wcf-placeholder-icon" style={{ width: '22px', height: '22px' }} />
                  </div>
                  <div className="wcf-related-footer">
                    <span className="wcf-related-title">Mortgage &amp; LAP</span>
                    <span className="wcf-related-arrow">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* 14. DISCLAIMER / INFORMATION BAR */}
          <div className="wcf-disclaimer-strip">
            <div className="wcf-disclaimer-icon-wrap">
              <ShieldCheck className="wcf-disclaimer-icon" />
            </div>
            <p className="wcf-disclaimer-text">
              Balaji Associates provides loan consultancy/application assistance. Loan approval, eligible amount, rate of interest, fees, tenure, security requirements and disbursement are subject to the respective Bank/NBFC's policies, documentation, credit assessment and applicable terms. Balaji Associates does not guarantee loan sanction.
            </p>
          </div>
        </div>
      </section>

      {/* 13. BOTTOM CTA */}
      <section className="wcf-bottom-cta-section">
        <div className="wcf-container">
          <div className="wcf-bottom-cta-card">
            <div className="wcf-bottom-cta-content">
              <p className="wcf-bottom-cta-text">
                Not sure which option fits your requirement? Speak with Balaji Associates before you apply. We can help you understand the next step, while the respective lender makes the final credit decision.
              </p>

              <div className="wcf-bottom-cta-buttons">
                <Link to="/contact/" className="wcf-btn-cta-gold">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="wcf-btn-cta-outline">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="wcf-bottom-cta-visual">
              <div className="wcf-bottom-cta-img-placeholder">
                <ImageIcon className="wcf-placeholder-icon" style={{ opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkingCapitalFinance;
