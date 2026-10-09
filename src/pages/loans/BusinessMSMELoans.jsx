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
  Package,
  Briefcase,
  Factory,
  Users,
  Calendar,
  Landmark,
  User,
  CreditCard,
  Target,
  CheckCircle2,
  CheckSquare,
  MessageSquare,
  Settings,
  Sparkles,
  Wrench,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'Can a new business get a business loan?',
    answer: 'Most commercial lenders look for at least 2 to 3 years of business vintage and operational track record. However, newer enterprises with strong promoter profiles, viable project plans, or eligible government/CGTMSE credit guarantee schemes may be considered on a case-by-case basis.'
  },
  {
    question: 'Is collateral always required?',
    answer: 'Not always. Unsecured business loans and certain CGTMSE-backed credit facilities do not mandate physical immovable collateral, subject to borrower eligibility, cash flow adequacy, and lender underwriting criteria.'
  },
  {
    question: 'Does CGTMSE give a loan directly?',
    answer: 'No. CGTMSE is not a lending agency. It is a credit guarantee trust set up by the Government of India and SIDBI that provides collateral guarantees to eligible loans sanctioned by registered Banks and NBFCs.'
  },
  {
    question: 'Does CGTMSE mean guaranteed approval?',
    answer: 'No. Loan sanction remains entirely at the sole discretion of the lending institution. The lender evaluates the applicant\'s viability, business potential, and repayment capability before applying for CGTMSE guarantee coverage.'
  }
];

function BusinessMSMELoans() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="business-msme-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .business-msme-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .bms-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .bms-section {
          padding: 42px 0;
        }

        .bms-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .bms-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
        }

        .bms-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .bms-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .bms-img-placeholder {
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

        .bms-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        /* 2. BREADCRUMB */
        .bms-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .bms-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .bms-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .bms-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .bms-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .bms-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .bms-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 3. HERO SECTION */
        .bms-hero-section {
          padding: 24px 0 46px;
        }

        .bms-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 44px;
          align-items: center;
        }

        .bms-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .bms-hero-badge {
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

        .bms-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .bms-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .bms-hero-title {
          font-size: 38px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .bms-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .bms-btn-primary {
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

        .bms-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .bms-btn-secondary {
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

        .bms-btn-secondary:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        .bms-hero-visual-card {
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

        .bms-floating-card {
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

        .bms-floating-card-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .bms-floating-card-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        .bms-float-1 {
          top: 24px;
          left: 36px;
        }

        .bms-float-2 {
          bottom: 28px;
          left: 36px;
        }

        .bms-float-3 {
          top: 36px;
          right: 36px;
        }

        .bms-float-4 {
          bottom: 32px;
          right: 36px;
        }

        /* 4. BUSINESS LOAN SECTION */
        .bms-biz-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .bms-cards-2x2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 22px;
        }

        .bms-info-card {
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

        .bms-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .bms-info-card-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .bms-number-badge {
          background-color: #FEF3C7;
          color: #D97706;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
        }

        .bms-info-card-icon {
          width: 20px;
          height: 20px;
          color: #D97706;
        }

        .bms-info-card-text {
          font-size: 12.5px;
          font-weight: 600;
          color: #0A1B3A;
          line-height: 1.45;
          margin: 0;
        }

        /* 5. MSME FINANCE SECTION (Mint Tint Background) */
        .bms-msme-section {
          background-color: #F2FBF7;
          border-top: 1px solid #DCFCE7;
          border-bottom: 1px solid #DCFCE7;
        }

        .bms-msme-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        .bms-msme-cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 22px;
        }

        .bms-msme-card {
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

        .bms-msme-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.08);
        }

        .bms-msme-icon {
          width: 24px;
          height: 24px;
          color: #059669;
        }

        .bms-msme-card-text {
          font-size: 12.5px;
          font-weight: 600;
          color: #064E3B;
          line-height: 1.4;
          margin: 0;
        }

        /* 6. CGTMSE-RELATED FINANCE SECTION (Dark Navy Card) */
        .bms-cgtmse-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 20px;
          padding: 36px 40px;
          color: #FFFFFF;
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
        }

        .bms-cgtmse-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .bms-cgtmse-heading {
          font-size: 26px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
        }

        .bms-cgtmse-badge {
          background: #F59E0B;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .bms-cgtmse-desc {
          font-size: 13.5px;
          color: #CBD5E1;
          line-height: 1.65;
          margin-bottom: 22px;
        }

        .bms-cgtmse-flow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 16px 14px;
          margin-bottom: 20px;
        }

        .bms-cgtmse-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          flex: 1;
        }

        .bms-cgtmse-icon {
          width: 22px;
          height: 22px;
          color: #60A5FA;
        }

        .bms-cgtmse-icon-circle-green {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
        }

        .bms-cgtmse-step-label {
          font-size: 10.5px;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.25;
        }

        .bms-cgtmse-arrow {
          color: #F59E0B;
          font-size: 18px;
          font-weight: bold;
          flex-shrink: 0;
          padding: 0 4px;
        }

        .bms-cgtmse-bullets {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .bms-cgtmse-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          color: #E2E8F0;
          line-height: 1.45;
        }

        .bms-cgtmse-check-icon {
          width: 15px;
          height: 15px;
          color: #F59E0B;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* 7. MATCH THE FINANCE TO THE PURPOSE */
        .bms-purpose-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .bms-purpose-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .bms-purpose-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }

        .bms-purpose-img-holder {
          width: 100%;
          height: 160px;
          background-color: #F1F5F9;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bms-purpose-card-footer {
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .bms-purpose-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .bms-purpose-arrow-btn {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #ECA822;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
        }

        /* 8. TWO-COLUMN: WHAT LENDERS EVALUATE & DOCUMENTS */
        .bms-two-col-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 36px;
          align-items: start;
        }

        .bms-subtext {
          font-size: 13.5px;
          color: #475569;
          line-height: 1.6;
          margin: -10px 0 20px 0;
        }

        .bms-evaluate-cards-wrap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .bms-eval-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .bms-eval-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .bms-eval-icon {
          width: 20px;
          height: 20px;
          color: #003B73;
        }

        .bms-eval-card-text {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.3;
          margin: 0;
        }

        .bms-docs-inner-grid {
          display: grid;
          grid-template-columns: 1fr 0.75fr;
          gap: 16px;
          align-items: stretch;
        }

        .bms-docs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bms-doc-bullet {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #334155;
          line-height: 1.35;
        }

        .bms-doc-check-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .bms-docs-img-holder {
          background-color: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          min-height: 200px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* 9. HOW BALAJI ASSOCIATES HELPS */
        .bms-helps-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .bms-process-flow-6 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 22px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 16px 12px;
        }

        .bms-flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          flex: 1;
        }

        .bms-flow-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .bms-flow-label {
          font-size: 10.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.25;
        }

        .bms-flow-arrow {
          color: #ECA822;
          font-size: 18px;
          font-weight: bold;
          flex-shrink: 0;
          padding: 0 2px;
        }

        /* 10 & 11. FAQS & RELATED SERVICES */
        .bms-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        .bms-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .bms-faq-header {
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

        .bms-faq-question {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .bms-faq-chevron {
          width: 18px;
          height: 18px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .bms-faq-chevron.rotate {
          transform: rotate(180deg);
        }

        .bms-faq-body {
          padding: 0 18px 14px;
          font-size: 13px;
          line-height: 1.6;
          color: #475569;
        }

        .bms-related-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .bms-related-card {
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

        .bms-related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
        }

        .bms-related-card-top {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .bms-related-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .bms-related-title {
          font-size: 13px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
        }

        .bms-related-arrow {
          font-size: 15px;
          font-weight: bold;
          color: #003B73;
          margin-top: 10px;
        }

        /* 12. BOTTOM CTA */
        .bms-bottom-cta-section {
          padding: 32px 0 20px;
        }

        .bms-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 20px;
          padding: 36px 44px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
        }

        .bms-bottom-cta-text {
          font-size: 16px;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .bms-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .bms-btn-cta-gold {
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

        .bms-btn-cta-gold:hover {
          transform: translateY(-2px);
        }

        .bms-btn-cta-outline {
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

        .bms-btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .bms-bottom-cta-img-placeholder {
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
        .bms-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 16px 0 40px;
        }

        .bms-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bms-disclaimer-icon {
          width: 18px;
          height: 18px;
          color: #1E40AF;
        }

        .bms-disclaimer-text {
          font-size: 13px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.5;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .bms-hero-grid,
          .bms-biz-grid,
          .bms-msme-grid,
          .bms-cgtmse-card,
          .bms-purpose-cards,
          .bms-two-col-grid,
          .bms-helps-grid,
          .bms-split-grid,
          .bms-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .bms-hero-visual-card {
            min-height: 300px;
          }

          .bms-hero-title {
            font-size: 32px;
          }

          .bms-evaluate-cards-wrap {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .bms-cards-2x2,
          .bms-msme-cards-row,
          .bms-related-cards {
            grid-template-columns: 1fr;
          }

          .bms-docs-inner-grid {
            grid-template-columns: 1fr;
          }

          .bms-cgtmse-flow,
          .bms-process-flow-6 {
            flex-direction: column;
            gap: 14px;
          }

          .bms-cgtmse-arrow,
          .bms-flow-arrow {
            transform: rotate(90deg);
          }

          .bms-bottom-cta-card {
            padding: 28px 20px;
          }
        }
      `}</style>

      {/* 2. BREADCRUMB */}
      <div className="bms-breadcrumb-wrap">
        <div className="bms-container">
          <div className="bms-breadcrumb">
            <HomeIcon className="bms-breadcrumb-home-icon" />
            <Link to="/" className="bms-breadcrumb-link">Home</Link>
            <span className="bms-breadcrumb-sep">&gt;</span>
            <Link to="/home-property-loans/" className="bms-breadcrumb-link">Loans</Link>
            <span className="bms-breadcrumb-sep">&gt;</span>
            <span className="bms-breadcrumb-current">Business &amp; MSME Loans</span>
          </div>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="bms-section bms-hero-section">
        <div className="bms-container">
          <div className="bms-hero-grid">
            <div className="bms-hero-left">
              <div className="bms-hero-top-row">
                <div className="bms-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>BUSINESS &amp; MSME LOANS</span>
                </div>
                <div className="bms-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="bms-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="bms-hero-title">
                Business &amp; MSME Loan<br />
                Assistance in Madurai
              </h1>

              <p className="bms-text-p">
                Business finance should match the reason the money is needed. A long-term expansion project, machinery purchase and day-to-day working-capital gap are different requirements and may be better served by different facilities.
              </p>

              <p className="bms-text-p">
                Balaji Associates assists eligible traders, professionals, manufacturers, service businesses, entrepreneurs and MSMEs in exploring business-finance options through Banks and NBFCs.
              </p>

              <div className="bms-hero-actions">
                <Link to="/contact/" className="bms-btn-primary">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="bms-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="bms-hero-right">
              <div className="bms-hero-visual-card">
                <ImageIcon className="bms-placeholder-icon" />

                <div className="bms-floating-card bms-float-1">
                  <TrendingUp className="bms-floating-card-icon" />
                  <span className="bms-floating-card-label">Business Finance</span>
                </div>

                <div className="bms-floating-card bms-float-2">
                  <Building2 className="bms-floating-card-icon" />
                  <span className="bms-floating-card-label">MSME</span>
                </div>

                <div className="bms-floating-card bms-float-3">
                  <FileText className="bms-floating-card-icon" />
                  <span className="bms-floating-card-label">Document Review</span>
                </div>

                <div className="bms-floating-card bms-float-4">
                  <Landmark className="bms-floating-card-icon" />
                  <span className="bms-floating-card-label">Bank / NBFC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION — BUSINESS LOAN */}
      <section className="bms-section">
        <div className="bms-container">
          <div className="bms-header-row">
            <h2 className="bms-heading">Business Loan</h2>
            <div className="bms-gold-line"></div>
          </div>

          <div className="bms-biz-grid">
            <div className="bms-img-placeholder">
              <ImageIcon className="bms-placeholder-icon" />
            </div>

            <div className="bms-biz-content">
              <p className="bms-text-p">
                Business loans may support eligible expansion, renovation, inventory, projects or other business requirements. Depending on the product and borrower, facilities may be secured or unsecured.
              </p>

              <div className="bms-cards-2x2">
                <div className="bms-info-card">
                  <div className="bms-info-card-top">
                    <span className="bms-number-badge">01</span>
                    <TrendingUp className="bms-info-card-icon" />
                  </div>
                  <p className="bms-info-card-text">
                    Expansion or new capacity
                  </p>
                </div>

                <div className="bms-info-card">
                  <div className="bms-info-card-top">
                    <span className="bms-number-badge">02</span>
                    <Package className="bms-info-card-icon" />
                  </div>
                  <p className="bms-info-card-text">
                    Inventory and operational needs
                  </p>
                </div>

                <div className="bms-info-card">
                  <div className="bms-info-card-top">
                    <span className="bms-number-badge">03</span>
                    <FileText className="bms-info-card-icon" />
                  </div>
                  <p className="bms-info-card-text">
                    Eligible project or renovation requirements
                  </p>
                </div>

                <div className="bms-info-card">
                  <div className="bms-info-card-top">
                    <span className="bms-number-badge">04</span>
                    <Briefcase className="bms-info-card-icon" />
                  </div>
                  <p className="bms-info-card-text">
                    Other permitted business purposes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION — MSME FINANCE (Mint Tint Background) */}
      <section className="bms-section bms-msme-section">
        <div className="bms-container">
          <div className="bms-header-row">
            <h2 className="bms-heading">MSME Finance</h2>
            <div className="bms-gold-line"></div>
          </div>

          <div className="bms-msme-grid">
            <div className="bms-msme-content">
              <p className="bms-text-p">
                MSMEs may need term finance, machinery finance, working capital, OD/CC or property-backed funding. The best starting point is to identify the use of funds and the repayment source.
              </p>

              <div className="bms-msme-cards-row">
                <div className="bms-msme-card">
                  <Building2 className="bms-msme-icon" />
                  <p className="bms-msme-card-text">
                    Micro and small enterprises
                  </p>
                </div>

                <div className="bms-msme-card">
                  <Factory className="bms-msme-icon" />
                  <p className="bms-msme-card-text">
                    Manufacturers, traders and service businesses
                  </p>
                </div>

                <div className="bms-msme-card">
                  <Users className="bms-msme-icon" />
                  <p className="bms-msme-card-text">
                    Eligible proprietorships, firms and companies
                  </p>
                </div>
              </div>
            </div>

            <div className="bms-img-placeholder" style={{ borderColor: '#BBF7D0' }}>
              <ImageIcon className="bms-placeholder-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — CGTMSE-RELATED FINANCE (Dark Navy Card) */}
      <section className="bms-section">
        <div className="bms-container">
          <div className="bms-cgtmse-card">
            <div className="bms-img-placeholder" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }}>
              <ImageIcon className="bms-placeholder-icon" style={{ opacity: 0.3 }} />
            </div>

            <div className="bms-cgtmse-content">
              <div className="bms-cgtmse-top-row">
                <div className="bms-header-row" style={{ margin: 0 }}>
                  <h2 className="bms-cgtmse-heading">CGTMSE-Related Finance</h2>
                  <div className="bms-gold-line"></div>
                </div>
                <span className="bms-cgtmse-badge">Scheme / lender conditions apply</span>
              </div>

              <p className="bms-cgtmse-desc">
                CGTMSE is a credit-guarantee framework supporting eligible credit extended by registered Member Lending Institutions to qualifying Micro and Small Enterprises. CGTMSE does not directly sanction loans to business owners. The lending institution appraises the proposal and, where eligible, seeks guarantee coverage under the applicable scheme.
              </p>

              <div className="bms-cgtmse-flow">
                <div className="bms-cgtmse-step">
                  <FileText className="bms-cgtmse-icon" />
                  <span className="bms-cgtmse-step-label">Business<br />Requirement</span>
                </div>

                <span className="bms-cgtmse-arrow">→</span>

                <div className="bms-cgtmse-step">
                  <Landmark className="bms-cgtmse-icon" />
                  <span className="bms-cgtmse-step-label">Lending<br />Institution<br />Appraisal</span>
                </div>

                <span className="bms-cgtmse-arrow">→</span>

                <div className="bms-cgtmse-step">
                  <FileText className="bms-cgtmse-icon" />
                  <span className="bms-cgtmse-step-label">Eligible<br />Credit</span>
                </div>

                <span className="bms-cgtmse-arrow">→</span>

                <div className="bms-cgtmse-step">
                  <div className="bms-cgtmse-icon-circle-green">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="bms-cgtmse-step-label">Guarantee<br />Coverage<br />where applicable</span>
                </div>
              </div>

              <div className="bms-cgtmse-bullets">
                <div className="bms-cgtmse-bullet-item">
                  <CheckCircle2 className="bms-cgtmse-check-icon" />
                  <span>Term-loan or working-capital routes may be relevant depending on scheme/lender rules</span>
                </div>
                <div className="bms-cgtmse-bullet-item">
                  <CheckCircle2 className="bms-cgtmse-check-icon" />
                  <span>Eligibility and guarantee coverage must be confirmed by the participating lender</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION — MATCH THE FINANCE TO THE PURPOSE */}
      <section className="bms-section">
        <div className="bms-container">
          <div className="bms-header-row">
            <h2 className="bms-heading">Match the finance to the purpose</h2>
            <div className="bms-gold-line"></div>
          </div>

          <div className="bms-purpose-cards">
            <div className="bms-purpose-card">
              <div className="bms-purpose-img-holder">
                <ImageIcon className="bms-placeholder-icon" />
              </div>
              <div className="bms-purpose-card-footer">
                <span className="bms-purpose-title">Expansion / New Capacity</span>
                <div className="bms-purpose-arrow-btn">→</div>
              </div>
            </div>

            <div className="bms-purpose-card">
              <div className="bms-purpose-img-holder">
                <ImageIcon className="bms-placeholder-icon" />
              </div>
              <div className="bms-purpose-card-footer">
                <span className="bms-purpose-title">Machinery Purchase</span>
                <div className="bms-purpose-arrow-btn">→</div>
              </div>
            </div>

            <div className="bms-purpose-card">
              <div className="bms-purpose-img-holder">
                <ImageIcon className="bms-placeholder-icon" />
              </div>
              <div className="bms-purpose-card-footer">
                <span className="bms-purpose-title">Working Capital</span>
                <div className="bms-purpose-arrow-btn">→</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TWO-COLUMN: WHAT LENDERS EVALUATE & DOCUMENTS */}
      <section className="bms-section">
        <div className="bms-container">
          <div className="bms-two-col-grid">
            {/* Left: What Lenders Evaluate */}
            <div className="bms-eval-col">
              <div className="bms-header-row">
                <h2 className="bms-heading">What Lenders Evaluate</h2>
                <div className="bms-gold-line"></div>
              </div>

              <p className="bms-subtext">
                Business lending is driven by the ability of the enterprise to service debt and the lender's assessment of risk.
              </p>

              <div className="bms-evaluate-cards-wrap">
                <div className="bms-eval-card">
                  <span className="bms-number-badge">01</span>
                  <Calendar className="bms-eval-icon" />
                  <p className="bms-eval-card-text">Business vintage and stability</p>
                </div>

                <div className="bms-eval-card">
                  <span className="bms-number-badge">02</span>
                  <TrendingUp className="bms-eval-icon" />
                  <p className="bms-eval-card-text">Turnover, profitability and cash flow</p>
                </div>

                <div className="bms-eval-card">
                  <span className="bms-number-badge">03</span>
                  <Landmark className="bms-eval-icon" />
                  <p className="bms-eval-card-text">Banking conduct</p>
                </div>

                <div className="bms-eval-card">
                  <span className="bms-number-badge">04</span>
                  <FileText className="bms-eval-icon" />
                  <p className="bms-eval-card-text">GST/ITR/financial statements where applicable</p>
                </div>

                <div className="bms-eval-card">
                  <span className="bms-number-badge">05</span>
                  <User className="bms-eval-icon" />
                  <p className="bms-eval-card-text">Promoter and credit profile</p>
                </div>

                <div className="bms-eval-card">
                  <span className="bms-number-badge">06</span>
                  <CreditCard className="bms-eval-icon" />
                  <p className="bms-eval-card-text">Existing debt</p>
                </div>

                <div className="bms-eval-card">
                  <span className="bms-number-badge">07</span>
                  <Target className="bms-eval-icon" />
                  <p className="bms-eval-card-text">Purpose of finance</p>
                </div>

                <div className="bms-eval-card">
                  <span className="bms-number-badge">08</span>
                  <ShieldCheck className="bms-eval-icon" />
                  <p className="bms-eval-card-text">Security where applicable</p>
                </div>
              </div>
            </div>

            {/* Right: Documents */}
            <div className="bms-docs-col">
              <div className="bms-header-row">
                <h2 className="bms-heading">Documents</h2>
                <div className="bms-gold-line"></div>
              </div>

              <p className="bms-subtext">
                The final checklist comes from the lender.
              </p>

              <div className="bms-docs-inner-grid">
                <ul className="bms-docs-list">
                  <li className="bms-doc-bullet">
                    <CheckCircle2 className="bms-doc-check-icon" />
                    <span>KYC and PAN</span>
                  </li>
                  <li className="bms-doc-bullet">
                    <CheckCircle2 className="bms-doc-check-icon" />
                    <span>Business registration/constitution records</span>
                  </li>
                  <li className="bms-doc-bullet">
                    <CheckCircle2 className="bms-doc-check-icon" />
                    <span>Bank statements</span>
                  </li>
                  <li className="bms-doc-bullet">
                    <CheckCircle2 className="bms-doc-check-icon" />
                    <span>GST returns where applicable</span>
                  </li>
                  <li className="bms-doc-bullet">
                    <CheckCircle2 className="bms-doc-check-icon" />
                    <span>ITR and financial statements</span>
                  </li>
                  <li className="bms-doc-bullet">
                    <CheckCircle2 className="bms-doc-check-icon" />
                    <span>Existing loan details</span>
                  </li>
                  <li className="bms-doc-bullet">
                    <CheckCircle2 className="bms-doc-check-icon" />
                    <span>Project/quotation/property documents where relevant</span>
                  </li>
                </ul>

                <div className="bms-docs-img-holder">
                  <ImageIcon className="bms-placeholder-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION — HOW BALAJI ASSOCIATES HELPS */}
      <section className="bms-section">
        <div className="bms-container">
          <div className="bms-header-row">
            <h2 className="bms-heading">How Balaji Associates Helps</h2>
            <div className="bms-gold-line"></div>
          </div>

          <div className="bms-helps-grid">
            <div className="bms-img-placeholder">
              <ImageIcon className="bms-placeholder-icon" />
            </div>

            <div className="bms-helps-content">
              <p className="bms-text-p">
                We help the business owner distinguish between a business term loan, machinery finance, OD/CC, property-backed finance and eligible CGTMSE-related routes, then assist with documentation and application coordination.
              </p>

              <div className="bms-process-flow-6">
                <div className="bms-flow-step">
                  <MessageSquare className="bms-flow-icon" />
                  <span className="bms-flow-label">Understand the<br />business requirement</span>
                </div>

                <span className="bms-flow-arrow">→</span>

                <div className="bms-flow-step">
                  <Settings className="bms-flow-icon" />
                  <span className="bms-flow-label">Identify the<br />appropriate finance route</span>
                </div>

                <span className="bms-flow-arrow">→</span>

                <div className="bms-flow-step">
                  <FileText className="bms-flow-icon" />
                  <span className="bms-flow-label">Organise<br />documentation</span>
                </div>

                <span className="bms-flow-arrow">→</span>

                <div className="bms-flow-step">
                  <Landmark className="bms-flow-icon" />
                  <span className="bms-flow-label">Explore lender<br />options</span>
                </div>

                <span className="bms-flow-arrow">→</span>

                <div className="bms-flow-step">
                  <Users className="bms-flow-icon" />
                  <span className="bms-flow-label">Application<br />coordination</span>
                </div>

                <span className="bms-flow-arrow">→</span>

                <div className="bms-flow-step">
                  <FileText className="bms-flow-icon" />
                  <span className="bms-flow-label">Lender<br />Decision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 & 11. FAQS & RELATED SERVICES */}
      <section className="bms-section">
        <div className="bms-container">
          <div className="bms-split-grid">
            {/* FAQ Column */}
            <div className="bms-faq-col">
              <div className="bms-header-row">
                <h2 className="bms-heading">Frequently Asked Questions</h2>
                <div className="bms-gold-line"></div>
              </div>

              <div className="bms-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="bms-faq-item" key={idx}>
                      <button
                        className="bms-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="bms-faq-question">{faq.question}</span>
                        <ChevronDown className={`bms-faq-chevron ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="bms-faq-body">
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
            <div className="bms-related-col">
              <div className="bms-header-row">
                <h2 className="bms-heading">Related Services</h2>
                <div className="bms-gold-line"></div>
              </div>

              <div className="bms-related-cards">
                <Link to="/machinery-equipment-finance/" className="bms-related-card">
                  <div className="bms-related-card-top">
                    <Wrench className="bms-related-icon" />
                    <span className="bms-related-title">Machinery &amp; Equipment Finance</span>
                  </div>
                  <span className="bms-related-arrow">→</span>
                </Link>

                <Link to="/working-capital-finance/" className="bms-related-card">
                  <div className="bms-related-card-top">
                    <TrendingUp className="bms-related-icon" />
                    <span className="bms-related-title">Working Capital Finance</span>
                  </div>
                  <span className="bms-related-arrow">→</span>
                </Link>

                <Link to="/mortgage-loan-against-property/" className="bms-related-card">
                  <div className="bms-related-card-top">
                    <HomeIcon className="bms-related-icon" />
                    <span className="bms-related-title">Mortgage &amp; LAP</span>
                  </div>
                  <span className="bms-related-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 13. DISCLAIMER / INFORMATION BAR */}
          <div className="bms-disclaimer-strip">
            <div className="bms-disclaimer-icon-wrap">
              <ShieldCheck className="bms-disclaimer-icon" />
            </div>
            <p className="bms-disclaimer-text">
              Final loan approval, sanctioned amount, rate, tenure, fees and disbursement are subject to the respective Bank/NBFC's policies, documentation, credit assessment and applicable terms.
            </p>
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CTA */}
      <section className="bms-bottom-cta-section">
        <div className="bms-container">
          <div className="bms-bottom-cta-card">
            <div className="bms-bottom-cta-content">
              <p className="bms-bottom-cta-text">
                Not sure which option fits your requirement? Speak with Balaji Associates before you apply. We can help you understand the next step, while the respective lender makes the final credit decision.
              </p>

              <div className="bms-bottom-cta-buttons">
                <Link to="/contact/" className="bms-btn-cta-gold">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="bms-btn-cta-outline">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="bms-bottom-cta-visual">
              <div className="bms-bottom-cta-img-placeholder">
                <ImageIcon className="bms-placeholder-icon" style={{ opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusinessMSMELoans;
