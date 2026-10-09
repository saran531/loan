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
  Sparkles,
  Car,
  Wallet,
  Users,
  Receipt,
  Calendar,
  ClipboardList,
  HelpCircle,
  ShieldAlert,
  MessageSquare,
  GraduationCap,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'Does a high CIBIL score guarantee a personal loan?',
    answer: 'No. While a credit score of 750+ improves approval chances, lenders independently evaluate income sufficiency, debt-to-income ratio, employer profile, employment stability, and existing loan repayment track record.'
  },
  {
    question: 'Can self-employed applicants apply?',
    answer: 'Yes. Self-employed individuals, professionals, and business owners can apply by submitting proof of business continuation, past 2 years\' Income Tax Returns (ITR) with computation of income, and recent 6 to 12 months\' bank statements.'
  },
  {
    question: 'How much down payment is needed for a car loan?',
    answer: 'Lenders typically finance between 80% to 90% of the on-road or ex-showroom price for eligible applicants, requiring a 10% to 20% margin/down payment. Exact margins depend on applicant profile and lender vehicle-finance policy.'
  },
  {
    question: 'Do you handle used-car loans?',
    answer: 'Used-car loan assistance depends on current partner Bank and NBFC availability, vehicle age, valuation, and seller documentation. We help explore whether active pre-owned vehicle programs are suitable for your requirement.'
  }
];

function PersonalCarLoans() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="personal-car-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .personal-car-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .pcl-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .pcl-section {
          padding: 42px 0;
        }

        .pcl-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .pcl-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
        }

        .pcl-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .pcl-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .pcl-img-placeholder {
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

        .pcl-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        /* 2. BREADCRUMB */
        .pcl-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .pcl-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .pcl-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .pcl-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .pcl-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .pcl-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .pcl-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 3. HERO SECTION */
        .pcl-hero-section {
          padding: 24px 0 46px;
        }

        .pcl-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 44px;
          align-items: center;
        }

        .pcl-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .pcl-hero-badge {
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

        .pcl-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .pcl-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .pcl-hero-title {
          font-size: 38px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .pcl-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .pcl-btn-primary {
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

        .pcl-btn-primary:hover {
          background: #002D62;
          transform: translateY(-2px);
        }

        .pcl-btn-secondary {
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

        .pcl-btn-secondary:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
        }

        .pcl-hero-visual-card {
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

        .pcl-floating-card {
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

        .pcl-floating-card-icon {
          width: 22px;
          height: 22px;
          color: #003B73;
        }

        .pcl-floating-card-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        .pcl-float-1 {
          top: 24px;
          left: 36px;
        }

        .pcl-float-2 {
          bottom: 28px;
          left: 36px;
        }

        .pcl-float-3 {
          top: 36px;
          right: 36px;
        }

        .pcl-float-4 {
          bottom: 32px;
          right: 36px;
        }

        /* 4. SECTION — PERSONAL LOAN */
        .pcl-personal-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .pcl-cards-2-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 22px;
        }

        .pcl-info-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pcl-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
        }

        .pcl-info-card-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #ECFDF5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pcl-info-card-icon {
          width: 20px;
          height: 20px;
          color: #059669;
        }

        .pcl-info-card-text {
          font-size: 12.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 5. SECTION — CAR / VEHICLE FINANCE */
        .pcl-car-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        /* 6. SECTION — CHOOSE THE CONVERSATION */
        .pcl-conversation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 10px;
        }

        .pcl-convo-card {
          border-radius: 16px;
          padding: 24px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 20px;
          align-items: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }

        .pcl-convo-card.blue-card {
          background-color: #F0F7FF;
          border: 1px solid #BFDBFE;
        }

        .pcl-convo-card.green-card {
          background-color: #F0FDF4;
          border: 1px solid #BBF7D0;
        }

        .pcl-convo-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .pcl-convo-icon {
          width: 24px;
          height: 24px;
        }

        .pcl-convo-icon.blue {
          color: #1D4ED8;
        }

        .pcl-convo-icon.green {
          color: #059669;
        }

        .pcl-convo-title {
          font-size: 16px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: 0.3px;
        }

        .pcl-convo-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pcl-convo-bullet-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .pcl-convo-check-circle {
          width: 15px;
          height: 15px;
          color: #D97706;
          flex-shrink: 0;
        }

        .pcl-convo-img-holder {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          height: 150px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* 7. SECTION — WHAT LENDERS EVALUATE (Dark Navy) */
        .pcl-eval-dark-section {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          color: #FFFFFF;
          border-radius: 20px;
          padding: 36px 40px;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
        }

        .pcl-subtext-white {
          font-size: 13.5px;
          color: #CBD5E1;
          margin: -10px 0 20px 0;
        }

        .pcl-eval-cards-wrap {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .pcl-eval-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 16px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pcl-eval-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }

        .pcl-eval-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #FFFBEB;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D97706;
        }

        .pcl-eval-card-text {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 8. SECTION — DOCUMENTS */
        .pcl-docs-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }

        .pcl-docs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pcl-doc-card-item {
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

        .pcl-doc-card-item:hover {
          border-color: #CBD5E1;
        }

        .pcl-doc-check-icon {
          width: 18px;
          height: 18px;
          color: #059669;
          flex-shrink: 0;
        }

        .pcl-doc-text {
          font-size: 13px;
          font-weight: 600;
          color: #0A1B3A;
        }

        /* 9. SECTION — HOW BALAJI ASSOCIATES HELPS */
        .pcl-helps-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          align-items: center;
        }

        .pcl-process-flow-3 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 22px;
          gap: 12px;
        }

        .pcl-process-card {
          flex: 1;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .pcl-process-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pcl-process-badge {
          background-color: #FEF3C7;
          color: #D97706;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
        }

        .pcl-process-icon {
          width: 20px;
          height: 20px;
          color: #003B73;
        }

        .pcl-process-text {
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        .pcl-process-arrow {
          color: #ECA822;
          font-size: 18px;
          font-weight: bold;
          flex-shrink: 0;
        }

        /* 10 & 11. FAQS & RELATED SERVICES */
        .pcl-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        .pcl-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .pcl-faq-header {
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

        .pcl-faq-question {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .pcl-faq-plus-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .pcl-faq-plus-icon.rotate {
          transform: rotate(45deg);
        }

        .pcl-faq-body {
          padding: 0 18px 14px;
          font-size: 13px;
          line-height: 1.6;
          color: #475569;
        }

        .pcl-related-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .pcl-related-card {
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

        .pcl-related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .pcl-related-img-holder {
          width: 100%;
          height: 80px;
          background-color: #F1F5F9;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pcl-related-footer {
          padding: 12px 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pcl-related-title {
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.3;
        }

        .pcl-related-arrow {
          font-size: 14px;
          font-weight: bold;
          color: #003B73;
        }

        /* 12. BOTTOM CTA */
        .pcl-bottom-cta-section {
          padding: 32px 0 20px;
        }

        .pcl-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 20px;
          padding: 36px 44px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.25);
        }

        .pcl-bottom-cta-text {
          font-size: 16px;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .pcl-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .pcl-btn-cta-gold {
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

        .pcl-btn-cta-gold:hover {
          transform: translateY(-2px);
        }

        .pcl-btn-cta-outline {
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

        .pcl-btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .pcl-bottom-cta-img-placeholder {
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
        .pcl-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 16px 0 40px;
        }

        .pcl-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pcl-disclaimer-icon {
          width: 18px;
          height: 18px;
          color: #1E40AF;
        }

        .pcl-disclaimer-text {
          font-size: 13px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.5;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .pcl-hero-grid,
          .pcl-personal-grid,
          .pcl-car-grid,
          .pcl-conversation-grid,
          .pcl-docs-grid,
          .pcl-helps-grid,
          .pcl-split-grid,
          .pcl-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .pcl-hero-visual-card {
            min-height: 300px;
          }

          .pcl-hero-title {
            font-size: 32px;
          }

          .pcl-eval-cards-wrap {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .pcl-container {
            padding: 0 16px;
          }

          .pcl-breadcrumb {
            flex-wrap: wrap;
            row-gap: 4px;
          }

          .pcl-cards-2-row,
          .pcl-related-cards {
            grid-template-columns: 1fr;
          }

          .pcl-convo-card {
            grid-template-columns: 1fr;
          }

          .pcl-eval-cards-wrap {
            grid-template-columns: 1fr;
          }

          .pcl-process-flow-3 {
            flex-direction: column;
            gap: 14px;
          }

          .pcl-process-arrow {
            transform: rotate(90deg);
          }

          .pcl-bottom-cta-card {
            padding: 28px 20px;
          }

          .pcl-disclaimer-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .pcl-section {
            padding: 32px 0;
          }

          .pcl-hero-title {
            font-size: 24px;
            line-height: 1.25;
          }

          .pcl-hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .pcl-btn-primary,
          .pcl-btn-secondary {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .pcl-heading {
            font-size: 22px;
          }

          .pcl-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 18px;
          }

          .pcl-hero-visual-card {
            min-height: 260px;
          }

          .pcl-floating-card {
            padding: 8px 10px;
            font-size: 10px;
          }

          .pcl-float-1 {
            top: 14px;
            left: 14px;
          }

          .pcl-float-2 {
            top: 50%;
            left: 14px;
          }

          .pcl-float-3 {
            bottom: 14px;
            right: 14px;
          }

          .pcl-bottom-cta-card {
            padding: 24px 16px;
          }

          .pcl-bottom-cta-buttons {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .pcl-btn-cta-gold,
          .pcl-btn-cta-outline {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .pcl-faq-header {
            padding: 12px 14px;
          }

          .pcl-faq-question {
            font-size: 13px;
          }
        }
      `}</style>

      {/* 2. BREADCRUMB */}
      <div className="pcl-breadcrumb-wrap">
        <div className="pcl-container">
          <div className="pcl-breadcrumb">
            <HomeIcon className="pcl-breadcrumb-home-icon" />
            <Link to="/" className="pcl-breadcrumb-link">Home</Link>
            <span className="pcl-breadcrumb-sep">&gt;</span>
            <Link to="/home-property-loans/" className="pcl-breadcrumb-link">Loans</Link>
            <span className="pcl-breadcrumb-sep">&gt;</span>
            <span className="pcl-breadcrumb-current">Personal &amp; Car Loans</span>
          </div>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="pcl-section pcl-hero-section">
        <div className="pcl-container">
          <div className="pcl-hero-grid">
            <div className="pcl-hero-left">
              <div className="pcl-hero-top-row">
                <div className="pcl-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>PERSONAL &amp; CAR LOANS</span>
                </div>
                <div className="pcl-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="pcl-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="pcl-hero-title">
                Personal &amp; Car Loan<br />
                Assistance in Madurai
              </h1>

              <p className="pcl-text-p">
                Personal and vehicle finance are common retail borrowing needs, but affordability matters as much as eligibility. The right loan should fit comfortably alongside rent, household costs, existing EMIs and savings goals.
              </p>

              <p className="pcl-text-p">
                Balaji Associates assists eligible salaried and self-employed applicants with personal-loan and car-finance enquiries.
              </p>

              <div className="pcl-hero-actions">
                <Link to="/contact/" className="pcl-btn-primary">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="pcl-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="pcl-hero-right">
              <div className="pcl-hero-visual-card">
                <ImageIcon className="pcl-placeholder-icon" />

                <div className="pcl-floating-card pcl-float-1">
                  <User className="pcl-floating-card-icon" />
                  <span className="pcl-floating-card-label">Personal Loan</span>
                </div>

                <div className="pcl-floating-card pcl-float-2">
                  <Car className="pcl-floating-card-icon" />
                  <span className="pcl-floating-card-label">Car Finance</span>
                </div>

                <div className="pcl-floating-card pcl-float-3">
                  <Users className="pcl-floating-card-icon" />
                  <span className="pcl-floating-card-label">Eligible Applicants</span>
                </div>

                <div className="pcl-floating-card pcl-float-4">
                  <Landmark className="pcl-floating-card-icon" />
                  <span className="pcl-floating-card-label">Bank / NBFC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION — PERSONAL LOAN */}
      <section className="pcl-section">
        <div className="pcl-container">
          <div className="pcl-header-row">
            <h2 className="pcl-heading">Personal Loan</h2>
            <div className="pcl-gold-line"></div>
          </div>

          <div className="pcl-personal-grid">
            <div className="pcl-img-placeholder">
              <ImageIcon className="pcl-placeholder-icon" />
            </div>

            <div className="pcl-personal-content">
              <p className="pcl-text-p">
                Personal loans are generally unsecured, so lenders pay close attention to income, employment/business stability, existing obligations and credit history.
              </p>

              <div className="pcl-cards-2-row">
                <div className="pcl-info-card">
                  <div className="pcl-info-card-icon-wrap">
                    <TrendingUp className="pcl-info-card-icon" />
                  </div>
                  <p className="pcl-info-card-text">
                    Eligible personal financial requirements
                  </p>
                </div>

                <div className="pcl-info-card">
                  <div className="pcl-info-card-icon-wrap">
                    <FileText className="pcl-info-card-icon" />
                  </div>
                  <p className="pcl-info-card-text">
                    Other lender-permitted purposes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION — CAR / VEHICLE FINANCE */}
      <section className="pcl-section">
        <div className="pcl-container">
          <div className="pcl-header-row">
            <h2 className="pcl-heading">Car / Vehicle Finance</h2>
            <div className="pcl-gold-line"></div>
          </div>

          <div className="pcl-car-grid">
            <div className="pcl-car-content">
              <p className="pcl-text-p">
                Vehicle finance eligibility can depend on the applicant, vehicle value, down payment, income and credit profile. Used-car or commercial-vehicle finance should be advertised only if Balaji Associates confirms those products are handled.
              </p>

              <div className="pcl-cards-2-row">
                <div className="pcl-info-card">
                  <div className="pcl-info-card-icon-wrap">
                    <Car className="pcl-info-card-icon" />
                  </div>
                  <p className="pcl-info-card-text">
                    Eligible new-car purchase
                  </p>
                </div>

                <div className="pcl-info-card">
                  <div className="pcl-info-card-icon-wrap">
                    <ShieldCheck className="pcl-info-card-icon" />
                  </div>
                  <p className="pcl-info-card-text">
                    Other verified vehicle-finance products
                  </p>
                </div>
              </div>
            </div>

            <div className="pcl-img-placeholder">
              <ImageIcon className="pcl-placeholder-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — CHOOSE THE CONVERSATION BASED ON THE REQUIREMENT */}
      <section className="pcl-section">
        <div className="pcl-container">
          <div className="pcl-header-row">
            <h2 className="pcl-heading">Choose the Conversation Based on the Requirement</h2>
            <div className="pcl-gold-line"></div>
          </div>

          <div className="pcl-conversation-grid">
            {/* Left Card: Personal Loan */}
            <div className="pcl-convo-card blue-card">
              <div className="pcl-convo-content">
                <div className="pcl-convo-header">
                  <ClipboardList className="pcl-convo-icon blue" />
                  <h3 className="pcl-convo-title">PERSONAL LOAN</h3>
                </div>

                <ul className="pcl-convo-bullets">
                  <li className="pcl-convo-bullet-item">
                    <CheckCircle2 className="pcl-convo-check-circle" />
                    <span>Generally unsecured</span>
                  </li>
                  <li className="pcl-convo-bullet-item">
                    <CheckCircle2 className="pcl-convo-check-circle" />
                    <span>Income</span>
                  </li>
                  <li className="pcl-convo-bullet-item">
                    <CheckCircle2 className="pcl-convo-check-circle" />
                    <span>Employment/business stability</span>
                  </li>
                  <li className="pcl-convo-bullet-item">
                    <CheckCircle2 className="pcl-convo-check-circle" />
                    <span>Existing obligations</span>
                  </li>
                  <li className="pcl-convo-bullet-item">
                    <CheckCircle2 className="pcl-convo-check-circle" />
                    <span>Credit history</span>
                  </li>
                </ul>
              </div>

              <div className="pcl-convo-img-holder">
                <ImageIcon className="pcl-placeholder-icon" style={{ opacity: 0.35 }} />
              </div>
            </div>

            {/* Right Card: Car / Vehicle Finance */}
            <div className="pcl-convo-card green-card">
              <div className="pcl-convo-content">
                <div className="pcl-convo-header">
                  <Car className="pcl-convo-icon green" />
                  <h3 className="pcl-convo-title">CAR / VEHICLE FINANCE</h3>
                </div>

                <ul className="pcl-convo-bullets">
                  <li className="pcl-convo-bullet-item">
                    <CheckCircle2 className="pcl-convo-check-circle" />
                    <span>Applicant profile</span>
                  </li>
                  <li className="pcl-convo-bullet-item">
                    <CheckCircle2 className="pcl-convo-check-circle" />
                    <span>Vehicle value</span>
                  </li>
                  <li className="pcl-convo-bullet-item">
                    <CheckCircle2 className="pcl-convo-check-circle" />
                    <span>Down payment</span>
                  </li>
                  <li className="pcl-convo-bullet-item">
                    <CheckCircle2 className="pcl-convo-check-circle" />
                    <span>Income</span>
                  </li>
                  <li className="pcl-convo-bullet-item">
                    <CheckCircle2 className="pcl-convo-check-circle" />
                    <span>Credit profile</span>
                  </li>
                </ul>
              </div>

              <div className="pcl-convo-img-holder">
                <ImageIcon className="pcl-placeholder-icon" style={{ opacity: 0.35 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION — WHAT LENDERS EVALUATE (Dark Navy) */}
      <section className="pcl-section">
        <div className="pcl-container">
          <div className="pcl-eval-dark-section">
            <div className="pcl-header-row" style={{ marginBottom: '14px' }}>
              <h2 className="pcl-heading" style={{ color: '#FFFFFF' }}>What Lenders Evaluate</h2>
              <div className="pcl-gold-line"></div>
            </div>

            <p className="pcl-subtext-white">
              Retail credit assessment commonly includes:
            </p>

            <div className="pcl-eval-cards-wrap">
              <div className="pcl-eval-card">
                <div className="pcl-eval-icon-circle">
                  <Wallet className="w-5 h-5" />
                </div>
                <p className="pcl-eval-card-text">Monthly income</p>
              </div>

              <div className="pcl-eval-card">
                <div className="pcl-eval-icon-circle">
                  <Briefcase className="w-5 h-5" />
                </div>
                <p className="pcl-eval-card-text">Employment/<br />business stability</p>
              </div>

              <div className="pcl-eval-card">
                <div className="pcl-eval-icon-circle">
                  <FileText className="w-5 h-5" />
                </div>
                <p className="pcl-eval-card-text">Credit history</p>
              </div>

              <div className="pcl-eval-card">
                <div className="pcl-eval-icon-circle">
                  <Receipt className="w-5 h-5" />
                </div>
                <p className="pcl-eval-card-text">Existing EMIs</p>
              </div>

              <div className="pcl-eval-card">
                <div className="pcl-eval-icon-circle">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="pcl-eval-card-text">Age and repayment tenure</p>
              </div>

              <div className="pcl-eval-card">
                <div className="pcl-eval-icon-circle">
                  <Car className="w-5 h-5" />
                </div>
                <p className="pcl-eval-card-text">Vehicle price/down payment for car loans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION — DOCUMENTS */}
      <section className="pcl-section">
        <div className="pcl-container">
          <div className="pcl-header-row">
            <h2 className="pcl-heading">Documents</h2>
            <div className="pcl-gold-line"></div>
          </div>

          <p className="pcl-text-p" style={{ marginBottom: '16px', fontWeight: 600 }}>
            Commonly requested documents may include KYC, PAN, income proof, bank statements and vehicle quotation for car finance. The lender provides the final checklist.
          </p>

          <div className="pcl-docs-grid">
            <div className="pcl-img-placeholder">
              <ImageIcon className="pcl-placeholder-icon" />
            </div>

            <div className="pcl-docs-content">
              <ul className="pcl-docs-list">
                <li className="pcl-doc-card-item">
                  <CheckCircle2 className="pcl-doc-check-icon" />
                  <span className="pcl-doc-text">KYC and business documents</span>
                </li>
                <li className="pcl-doc-card-item">
                  <CheckCircle2 className="pcl-doc-check-icon" />
                  <span className="pcl-doc-text">Bank statements</span>
                </li>
                <li className="pcl-doc-card-item">
                  <CheckCircle2 className="pcl-doc-check-icon" />
                  <span className="pcl-doc-text">GST/ITR/financial statements where applicable</span>
                </li>
                <li className="pcl-doc-card-item">
                  <CheckCircle2 className="pcl-doc-check-icon" />
                  <span className="pcl-doc-text">Machinery quotation or invoice</span>
                </li>
                <li className="pcl-doc-card-item">
                  <CheckCircle2 className="pcl-doc-check-icon" />
                  <span className="pcl-doc-text">Project details where relevant</span>
                </li>
                <li className="pcl-doc-card-item">
                  <CheckCircle2 className="pcl-doc-check-icon" />
                  <span className="pcl-doc-text">Existing loan details</span>
                </li>
                <li className="pcl-doc-card-item">
                  <CheckCircle2 className="pcl-doc-check-icon" />
                  <span className="pcl-doc-text">Asset ownership/valuation documents for asset-backed cases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION — HOW BALAJI ASSOCIATES HELPS */}
      <section className="pcl-section">
        <div className="pcl-container">
          <div className="pcl-header-row">
            <h2 className="pcl-heading">How Balaji Associates Helps</h2>
            <div className="pcl-gold-line"></div>
          </div>

          <p className="pcl-text-p" style={{ marginBottom: '16px' }}>
            We help customers understand the broad eligibility route and prepare the application. We do not promise instant approval, a fixed rate or a specific sanctioned amount.
          </p>

          <div className="pcl-helps-grid">
            <div className="pcl-img-placeholder">
              <ImageIcon className="pcl-placeholder-icon" />
            </div>

            <div className="pcl-helps-content">
              <div className="pcl-process-flow-3">
                <div className="pcl-process-card">
                  <div className="pcl-process-top">
                    <span className="pcl-process-badge">01</span>
                    <HelpCircle className="pcl-process-icon" />
                  </div>
                  <p className="pcl-process-text">Understand the broad eligibility route</p>
                </div>

                <span className="pcl-process-arrow">→</span>

                <div className="pcl-process-card">
                  <div className="pcl-process-top">
                    <span className="pcl-process-badge">02</span>
                    <FileText className="pcl-process-icon" />
                  </div>
                  <p className="pcl-process-text">Prepare the application</p>
                </div>

                <span className="pcl-process-arrow">→</span>

                <div className="pcl-process-card">
                  <div className="pcl-process-top">
                    <span className="pcl-process-badge">03</span>
                    <ShieldAlert className="pcl-process-icon" />
                  </div>
                  <p className="pcl-process-text">No promise of instant approval, a fixed rate or a specific sanctioned amount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 & 11. FAQS & RELATED SERVICES */}
      <section className="pcl-section">
        <div className="pcl-container">
          <div className="pcl-split-grid">
            {/* FAQ Column */}
            <div className="pcl-faq-col">
              <div className="pcl-header-row">
                <h2 className="pcl-heading">Frequently Asked Questions</h2>
                <div className="pcl-gold-line"></div>
              </div>

              <div className="pcl-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="pcl-faq-item" key={idx}>
                      <button
                        className="pcl-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span className="pcl-faq-question">{faq.question}</span>
                        <Plus className={`pcl-faq-plus-icon ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="pcl-faq-body">
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
            <div className="pcl-related-col">
              <div className="pcl-header-row">
                <h2 className="pcl-heading">Related Services</h2>
                <div className="pcl-gold-line"></div>
              </div>

              <div className="pcl-related-cards">
                <Link to="/home-property-loans/" className="pcl-related-card">
                  <div className="pcl-related-img-holder">
                    <ImageIcon className="pcl-placeholder-icon" style={{ width: '22px', height: '22px' }} />
                  </div>
                  <div className="pcl-related-footer">
                    <span className="pcl-related-title">Home &amp; Property Loans</span>
                    <span className="pcl-related-arrow">→</span>
                  </div>
                </Link>

                <Link to="/education-agri-finance/" className="pcl-related-card">
                  <div className="pcl-related-img-holder">
                    <ImageIcon className="pcl-placeholder-icon" style={{ width: '22px', height: '22px' }} />
                  </div>
                  <div className="pcl-related-footer">
                    <span className="pcl-related-title">Education &amp; Agri Finance</span>
                    <span className="pcl-related-arrow">→</span>
                  </div>
                </Link>

                <Link to="/contact/" className="pcl-related-card">
                  <div className="pcl-related-img-holder" style={{ background: '#EFF6FF' }}>
                    <MessageSquare className="w-6 h-6 text-blue-900" />
                  </div>
                  <div className="pcl-related-footer">
                    <span className="pcl-related-title">Contact</span>
                    <span className="pcl-related-arrow">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* 13. DISCLAIMER / INFORMATION BAR */}
          <div className="pcl-disclaimer-strip">
            <div className="pcl-disclaimer-icon-wrap">
              <ShieldCheck className="pcl-disclaimer-icon" />
            </div>
            <p className="pcl-disclaimer-text">
              Balaji Associates provides loan consultancy/application assistance. Loan approval, eligible amount, rate of interest, fees, tenure, security requirements and disbursement are subject to the respective Bank/NBFC's policies, documentation, credit assessment and applicable terms. Balaji Associates does not guarantee loan sanction.
            </p>
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CTA */}
      <section className="pcl-bottom-cta-section">
        <div className="pcl-container">
          <div className="pcl-bottom-cta-card">
            <div className="pcl-bottom-cta-content">
              <p className="pcl-bottom-cta-text">
                Not sure which option fits your requirement? Speak with Balaji Associates before you apply. We can help you understand the next step, while the respective lender makes the final credit decision.
              </p>

              <div className="pcl-bottom-cta-buttons">
                <Link to="/contact/" className="pcl-btn-cta-gold">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="pcl-btn-cta-outline">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="pcl-bottom-cta-visual">
              <div className="pcl-bottom-cta-img-placeholder">
                <ImageIcon className="pcl-placeholder-icon" style={{ opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PersonalCarLoans;
