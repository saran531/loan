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
  ShieldPlus,
  CarFront,
  Bike,
  Car,
  BadgeIndianRupee,
  BadgeCheck,
  FileText,
  Puzzle,
  TrendingDown,
  LifeBuoy,
  Ban,
  ClipboardList,
  RefreshCw,
  Umbrella,
  HeartPulse,
  Building2,
  Plane,
  House,
  Sparkles,
  Users,
  Image as ImageIcon
} from 'lucide-react';

const faqList = [
  {
    question: 'Is third-party motor insurance enough?',
    answer: 'Third-party insurance fulfills the mandatory legal requirement by covering bodily injury, death, and property damage to third parties. However, it does not cover accidental damages, theft, or fire damage to your own vehicle. For complete protection of your own vehicle, an own-damage or comprehensive policy with suitable add-ons is recommended.'
  },
  {
    question: 'What is IDV?',
    answer: 'Insured Declared Value (IDV) is the maximum sum insured fixed by the insurer for the vehicle, representing its current market value after applying standard depreciation based on vehicle age. It is the maximum claim payout in case of total loss or theft.'
  },
  {
    question: 'What is No Claim Bonus?',
    answer: 'No Claim Bonus (NCB) is a reward given by insurers as a discount on the own-damage premium for not making any claims during the policy year. NCB can accumulate up to 50% across consecutive claim-free years and can be transferred to a new vehicle.'
  },
  {
    question: 'Can a lapsed motor policy be renewed?',
    answer: 'Yes, a lapsed policy can be renewed. However, if the policy has lapsed beyond 90 days, any accumulated No Claim Bonus (NCB) may be forfeited, and a physical or self-inspection of the vehicle may be required by the insurer before issuing comprehensive cover.'
  }
];

function MotorInsurance() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="motor-insurance-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .motor-insurance-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .mi-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .mi-section {
          padding: 40px 0;
        }

        .mi-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .mi-heading {
          font-size: 28px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .mi-gold-line {
          width: 50px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .mi-subtext {
          font-size: 14px;
          color: #64748B;
          margin: -10px 0 22px 0;
        }

        .mi-text-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .mi-img-placeholder {
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

        .mi-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #CBD5E1;
        }

        .mi-placeholder-label {
          font-size: 11.5px;
          font-weight: 600;
          color: #94A3B8;
          margin-top: 8px;
          letter-spacing: 0.3px;
        }

        /* 1. BREADCRUMB */
        .mi-breadcrumb-wrap {
          padding: 16px 0 6px;
          background-color: #FFFFFF;
        }

        .mi-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .mi-breadcrumb-home-icon {
          width: 15px;
          height: 15px;
          color: #D97706;
        }

        .mi-breadcrumb-link {
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .mi-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .mi-breadcrumb-sep {
          color: #94A3B8;
          font-size: 12px;
        }

        .mi-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 2. HERO SECTION */
        .mi-hero-section {
          padding: 24px 0 44px;
          background: linear-gradient(180deg, rgba(240, 249, 255, 0.5) 0%, rgba(255, 255, 255, 1) 100%);
        }

        .mi-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }

        .mi-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .mi-hero-badge {
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

        .mi-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 4px);
          gap: 6px;
          opacity: 0.7;
        }

        .mi-hero-dot {
          width: 4px;
          height: 4px;
          background-color: #FBBF24;
          border-radius: 50%;
        }

        .mi-hero-title {
          font-size: 40px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .mi-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .mi-btn-primary {
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

        .mi-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
        }

        .mi-hero-visual-card {
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

        .mi-floating-stack {
          position: absolute;
          top: 24px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 2;
        }

        .mi-floating-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
        }

        .mi-floating-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
        }

        .mi-floating-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          white-space: nowrap;
        }

        /* 3. SECTION — THIRD-PARTY VS BROADER COVER */
        .mi-vs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 20px;
        }

        .mi-vs-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 24px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 16px;
          align-items: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
        }

        .mi-vs-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .mi-vs-icon-badge {
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

        .mi-vs-title {
          font-size: 17px;
          font-weight: 800;
          color: #0A1B3A;
          margin: 0;
        }

        .mi-vs-desc {
          font-size: 12.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }

        .mi-vs-img-box {
          height: 130px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .mi-vs-notice-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 10px;
          padding: 12px 18px;
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          color: #1E40AF;
        }

        /* 4. SECTION — WHAT TO REVIEW */
        .mi-review-10-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .mi-review-card {
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

        .mi-review-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .mi-review-icon-wrap {
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

        .mi-review-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0;
        }

        /* 5. MOTOR INSURANCE VISUAL COMPARISON SECTION */
        .mi-vis-banner {
          position: relative;
          background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%);
          border: 1.5px solid #E2E8F0;
          border-radius: 24px;
          padding: 40px 32px;
          min-height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-top: 36px;
        }

        .mi-vis-left-text {
          position: absolute;
          left: 40px;
          top: 50%;
          transform: translateY(-50%);
          max-width: 260px;
        }

        .mi-vis-heading {
          font-size: 26px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.25;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .mi-vis-center-illustration {
          width: 380px;
          height: 220px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
          position: relative;
          z-index: 1;
        }

        .mi-pill-tag {
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 50px;
          padding: 5px 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: 0.3px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
          position: absolute;
          z-index: 2;
          white-space: nowrap;
        }

        .mi-pill-tag svg {
          width: 13px;
          height: 13px;
          color: #059669;
        }

        /* Positions around the center visual in banner */
        .mi-p-top-1 { top: 20px; left: 38%; }
        .mi-p-top-2 { top: 20px; left: 50%; }
        .mi-p-top-3 { top: 20px; left: 62%; }
        .mi-p-right-1 { top: 28%; right: 18%; }
        .mi-p-right-2 { top: 44%; right: 16%; }
        .mi-p-right-3 { top: 60%; right: 18%; }
        .mi-p-right-4 { top: 76%; right: 22%; }
        .mi-p-bottom-1 { bottom: 18px; left: 60%; }
        .mi-p-bottom-2 { bottom: 18px; left: 44%; }
        .mi-p-left-1 { top: 64%; left: 30%; }
        .mi-p-left-2 { top: 48%; left: 28%; }
        .mi-p-left-3 { top: 32%; left: 30%; }

        /* 6. RENEWAL SECTION */
        .mi-renewal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: center;
        }

        .mi-renewal-card {
          background: #F0FDF4;
          border: 1.5px solid #BBF7D0;
          border-radius: 20px;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mi-renewal-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #DCFCE7;
          color: #15803D;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mi-renewal-title {
          font-size: 26px;
          font-weight: 800;
          color: #0A1B3A;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .mi-renewal-desc {
          font-size: 14px;
          line-height: 1.65;
          color: #334155;
          margin: 0;
        }

        /* 7. HOW BALAJI ASSOCIATES HELPS */
        .mi-helps-card {
          display: grid;
          grid-template-columns: 0.8fr 1.4fr 0.8fr;
          gap: 24px;
          align-items: center;
        }

        /* 8. FAQS & KEY AREAS TO UNDERSTAND */
        .mi-split-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 36px;
          align-items: flex-start;
        }

        .mi-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mi-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .mi-faq-item:hover {
          border-color: #CBD5E1;
        }

        .mi-faq-header {
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

        .mi-faq-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mi-faq-chevron {
          width: 14px;
          height: 14px;
          color: #0A1B3A;
          transition: transform 0.2s;
        }

        .mi-faq-question {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .mi-faq-plus {
          width: 16px;
          height: 16px;
          color: #003B73;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .mi-faq-plus.rotate {
          transform: rotate(45deg);
        }

        .mi-faq-body {
          padding: 0 18px 14px 42px;
          font-size: 12.5px;
          line-height: 1.6;
          color: #475569;
        }

        /* Key Areas Visual Beside FAQ */
        .mi-key-areas-box {
          position: relative;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 20px;
          padding: 24px;
          min-height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .mi-key-areas-inner-img {
          width: 220px;
          height: 150px;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        /* Key areas floating tags around inner image */
        .mi-k-tag-1 { top: 16px; left: 34%; }
        .mi-k-tag-2 { top: 16px; left: 56%; }
        .mi-k-tag-3 { top: 16px; right: 12%; }
        .mi-k-tag-4 { top: 32%; right: 6%; }
        .mi-k-tag-5 { top: 50%; right: 8%; }
        .mi-k-tag-6 { top: 68%; right: 6%; }
        .mi-k-tag-7 { bottom: 18px; right: 18%; }
        .mi-k-tag-8 { bottom: 18px; left: 50%; }
        .mi-k-tag-9 { bottom: 18px; left: 24%; }
        .mi-k-tag-10 { top: 68%; left: 8%; }
        .mi-k-tag-11 { top: 50%; left: 6%; }
        .mi-k-tag-12 { top: 32%; left: 8%; }

        /* 9. IMPORTANT POLICY NOTE */
        .mi-policy-note-banner {
          background: linear-gradient(135deg, #0A1B3A 0%, #002D62 100%);
          border-radius: 20px;
          padding: 28px 36px;
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 10px;
          box-shadow: 0 12px 28px rgba(10, 27, 58, 0.2);
        }

        .mi-policy-note-img-holder {
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

        .mi-policy-note-content {
          flex: 1;
        }

        .mi-policy-note-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .mi-policy-note-heading {
          font-size: 18px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .mi-policy-note-text {
          font-size: 13px;
          line-height: 1.6;
          color: #E2E8F0;
          margin: 0;
        }

        /* 10. RELATED SERVICES */
        .mi-related-cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .mi-related-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .mi-related-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
        }

        .mi-related-img-holder {
          width: 100%;
          height: 85px;
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mi-related-footer {
          padding: 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
        }

        .mi-related-left {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .mi-related-icon {
          width: 16px;
          height: 16px;
          color: #003B73;
        }

        .mi-related-title {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .mi-related-arrow {
          font-size: 12px;
          color: #1D4ED8;
          font-weight: bold;
        }

        /* 11. BOTTOM CTA BANNER */
        .mi-bottom-cta-section {
          padding: 24px 0 16px;
        }

        .mi-bottom-cta-card {
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

        .mi-bottom-cta-title {
          font-size: 20px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 18px 0;
          line-height: 1.35;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .mi-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .mi-bottom-cta-img-placeholder {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          min-height: 170px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* 12. DISCLAIMER / INFORMATION BAR */
        .mi-disclaimer-strip {
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 16px 0 28px 0;
        }

        .mi-disclaimer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mi-disclaimer-icon {
          width: 18px;
          height: 18px;
          color: #1E40AF;
        }

        .mi-disclaimer-text {
          font-size: 12.5px;
          font-weight: 500;
          color: #1E3A8A;
          line-height: 1.55;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .mi-hero-grid,
          .mi-vs-grid,
          .mi-renewal-grid,
          .mi-helps-card,
          .mi-split-grid,
          .mi-bottom-cta-card {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .mi-review-10-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .mi-related-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .mi-vis-left-text {
            position: static;
            transform: none;
            margin-bottom: 24px;
            text-align: center;
            max-width: 100%;
          }

          .mi-vis-banner {
            flex-direction: column;
            padding: 24px 16px;
          }

          .mi-pill-tag {
            position: static;
            margin: 4px;
          }

          .mi-hero-title {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .mi-vs-card {
            grid-template-columns: 1fr;
          }

          .mi-review-10-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .mi-helps-card {
            grid-template-columns: 1fr;
          }

          .mi-policy-note-banner {
            flex-direction: column;
            text-align: center;
          }

          .mi-related-cards {
            grid-template-columns: 1fr;
          }

          .mi-bottom-cta-card {
            padding: 26px 20px;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="mi-breadcrumb-wrap">
        <div className="mi-container">
          <div className="mi-breadcrumb">
            <HomeIcon className="mi-breadcrumb-home-icon" />
            <Link to="/" className="mi-breadcrumb-link">Home</Link>
            <span className="mi-breadcrumb-sep">&gt;</span>
            <Link to="/insurance/" className="mi-breadcrumb-link">Insurance</Link>
            <span className="mi-breadcrumb-sep">&gt;</span>
            <span className="mi-breadcrumb-current">Motor Insurance</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="mi-section mi-hero-section">
        <div className="mi-container">
          <div className="mi-hero-grid">
            <div className="mi-hero-left">
              <div className="mi-hero-top-row">
                <div className="mi-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Motor Insurance</span>
                </div>
                <div className="mi-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="mi-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="mi-hero-title">
                Motor Insurance<br />
                Assistance in Madurai
              </h1>

              <p className="mi-text-p">
                Vehicle insurance is not only a renewal reminder. The type of cover, insured value, add-ons, exclusions and claim conditions can make a meaningful difference after an accident, theft or other insured event.
              </p>

              <p className="mi-text-p">
                Balaji Associates assists customers with motor-insurance enquiries for eligible vehicles, subject to insurer products and the client's verified insurance authorisation.
              </p>

              <div className="mi-hero-actions">
                <a href="tel:9842817644" className="mi-btn-primary">
                  <Phone className="w-4 h-4" />
                  <span>Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mi-hero-right">
              <div className="mi-hero-visual-card">
                <ImageIcon className="mi-placeholder-icon" />
                <span className="mi-placeholder-label">Car, Two-Wheeler &amp; Madurai Temple</span>

                {/* 4 Floating Cards */}
                <div className="mi-floating-stack">
                  <div className="mi-floating-card">
                    <CarFront className="mi-floating-icon" />
                    <span className="mi-floating-label">Car Insurance</span>
                  </div>

                  <div className="mi-floating-card">
                    <Bike className="mi-floating-icon" />
                    <span className="mi-floating-label">Two-Wheeler Insurance</span>
                  </div>

                  <div className="mi-floating-card">
                    <Car className="mi-floating-icon" />
                    <span className="mi-floating-label">Vehicle Insurance</span>
                  </div>

                  <div className="mi-floating-card">
                    <ShieldCheck className="mi-floating-icon" />
                    <span className="mi-floating-label">Motor Insurance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION — THIRD-PARTY VS BROADER COVER */}
      <section className="mi-section">
        <div className="mi-container">
          <div className="mi-header-row">
            <h2 className="mi-heading">Third-Party vs Broader Cover</h2>
            <div className="mi-gold-line"></div>
          </div>

          <p className="mi-text-p" style={{ marginBottom: '22px' }}>
            Third-party liability insurance addresses statutory third-party liability requirements. Own-damage or comprehensive structures can provide broader protection for the insured vehicle according to the policy. Customers should understand exactly what each option includes.
          </p>

          <div className="mi-vs-grid">
            {/* Card 1 — Third-Party */}
            <div className="mi-vs-card">
              <div>
                <div className="mi-vs-header">
                  <div className="mi-vs-icon-badge">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="mi-vs-title">Third-Party</h3>
                </div>
                <p className="mi-vs-desc">
                  Third-party liability insurance addresses statutory third-party liability requirements.
                </p>
              </div>

              <div className="mi-vs-img-box">
                <ImageIcon className="mi-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="mi-placeholder-label">Third-Party Cover</span>
              </div>
            </div>

            {/* Card 2 — Own-Damage / Comprehensive */}
            <div className="mi-vs-card">
              <div>
                <div className="mi-vs-header">
                  <div className="mi-vs-icon-badge">
                    <ShieldPlus className="w-5 h-5" />
                  </div>
                  <h3 className="mi-vs-title">Own-Damage / Comprehensive</h3>
                </div>
                <p className="mi-vs-desc">
                  Own-damage or comprehensive structures can provide broader protection for the insured vehicle according to the policy.
                </p>
              </div>

              <div className="mi-vs-img-box">
                <ImageIcon className="mi-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="mi-placeholder-label">Comprehensive Cover</span>
              </div>
            </div>
          </div>

          <div className="mi-vs-notice-strip">
            Customers should understand exactly what each option includes.
          </div>
        </div>
      </section>

      {/* 4. SECTION — WHAT TO REVIEW */}
      <section className="mi-section">
        <div className="mi-container">
          <div className="mi-header-row">
            <h2 className="mi-heading">What to Review</h2>
            <div className="mi-gold-line"></div>
          </div>
          <p className="mi-subtext">
            Do not choose only by premium.
          </p>

          {/* 10 Feature Cards */}
          <div className="mi-review-10-grid">
            <div className="mi-review-card">
              <div className="mi-review-icon-wrap">
                <BadgeIndianRupee className="w-4 h-4" />
              </div>
              <p className="mi-review-label">Insured Declared Value (IDV) or applicable insured value</p>
            </div>

            <div className="mi-review-card">
              <div className="mi-review-icon-wrap">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="mi-review-label">Third-party and own-damage scope</p>
            </div>

            <div className="mi-review-card">
              <div className="mi-review-icon-wrap">
                <FileText className="w-4 h-4" />
              </div>
              <p className="mi-review-label">Deductibles</p>
            </div>

            <div className="mi-review-card">
              <div className="mi-review-icon-wrap">
                <BadgeCheck className="w-4 h-4" />
              </div>
              <p className="mi-review-label">No Claim Bonus rules</p>
            </div>

            <div className="mi-review-card">
              <div className="mi-review-icon-wrap">
                <Puzzle className="w-4 h-4" />
              </div>
              <p className="mi-review-label">Add-ons where available and relevant</p>
            </div>

            <div className="mi-review-card">
              <div className="mi-review-icon-wrap">
                <TrendingDown className="w-4 h-4" />
              </div>
              <p className="mi-review-label">Depreciation-related terms</p>
            </div>

            <div className="mi-review-card">
              <div className="mi-review-icon-wrap">
                <LifeBuoy className="w-4 h-4" />
              </div>
              <p className="mi-review-label">Roadside assistance if offered</p>
            </div>

            <div className="mi-review-card">
              <div className="mi-review-icon-wrap">
                <Ban className="w-4 h-4" />
              </div>
              <p className="mi-review-label">Exclusions</p>
            </div>

            <div className="mi-review-card">
              <div className="mi-review-icon-wrap">
                <ClipboardList className="w-4 h-4" />
              </div>
              <p className="mi-review-label">Claim-intimation process</p>
            </div>

            <div className="mi-review-card">
              <div className="mi-review-icon-wrap">
                <CarFront className="w-4 h-4" />
              </div>
              <p className="mi-review-label">Garage/cashless arrangements according to the insurer</p>
            </div>
          </div>

          {/* 5. MOTOR INSURANCE VISUAL COMPARISON SECTION */}
          <div className="mi-vis-banner">
            <div className="mi-vis-left-text">
              <h3 className="mi-vis-heading">
                Do not choose<br />only by premium.
              </h3>
            </div>

            <div className="mi-vis-center-illustration">
              <CarFront className="w-12 h-12 text-slate-400 mb-2" />
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <span className="mi-placeholder-label" style={{ marginTop: '4px' }}>Motor Insurance Shield</span>
            </div>

            {/* Surrounding Floating Pills */}
            <div className="mi-pill-tag mi-p-top-1">
              <CarFront />
              <span>VEHICLE</span>
            </div>

            <div className="mi-pill-tag mi-p-top-2">
              <BadgeIndianRupee />
              <span>IDV</span>
            </div>

            <div className="mi-pill-tag mi-p-top-3">
              <ShieldCheck />
              <span>THIRD-PARTY</span>
            </div>

            <div className="mi-pill-tag mi-p-right-1">
              <ShieldPlus />
              <span>OWN-DAMAGE</span>
            </div>

            <div className="mi-pill-tag mi-p-right-2">
              <FileText />
              <span>DEDUCTIBLES</span>
            </div>

            <div className="mi-pill-tag mi-p-right-3">
              <BadgeCheck />
              <span>NO CLAIM BONUS</span>
            </div>

            <div className="mi-pill-tag mi-p-right-4">
              <Puzzle />
              <span>ADD-ONS</span>
            </div>

            <div className="mi-pill-tag mi-p-bottom-1">
              <TrendingDown />
              <span>DEPRECIATION</span>
            </div>

            <div className="mi-pill-tag mi-p-bottom-2">
              <LifeBuoy />
              <span>ROADSIDE ASSISTANCE</span>
            </div>

            <div className="mi-pill-tag mi-p-left-1">
              <Ban />
              <span>EXCLUSIONS</span>
            </div>

            <div className="mi-pill-tag mi-p-left-2">
              <ClipboardList />
              <span>CLAIM-INTIMATION</span>
            </div>

            <div className="mi-pill-tag mi-p-left-3">
              <CarFront />
              <span>GARAGE / CASHLESS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION — RENEWAL */}
      <section className="mi-section">
        <div className="mi-container">
          <div className="mi-renewal-grid">
            <div className="mi-img-placeholder" style={{ minHeight: '220px' }}>
              <ImageIcon className="mi-placeholder-icon" />
              <span className="mi-placeholder-label">Reviewing Renewal on Laptop</span>
            </div>

            <div className="mi-renewal-card">
              <div className="mi-renewal-icon-circle">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="mi-renewal-title">Renewal</h3>
              <p className="mi-renewal-desc">
                Renew before expiry where possible and check the previous policy, details, NCB eligibility, vehicle information and add-ons carefully. Incorrect information can affect policy servicing or claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION — HOW BALAJI ASSOCIATES HELPS */}
      <section className="mi-section">
        <div className="mi-container">
          <div className="mi-helps-card">
            <div className="mi-img-placeholder" style={{ minHeight: '160px' }}>
              <ImageIcon className="mi-placeholder-icon" />
              <span className="mi-placeholder-label">Consultation Graphic</span>
            </div>

            <div>
              <div className="mi-header-row" style={{ marginBottom: '12px' }}>
                <h2 className="mi-heading" style={{ fontSize: '24px' }}>How Balaji Associates Helps</h2>
                <div className="mi-gold-line"></div>
              </div>
              <p className="mi-text-p" style={{ fontSize: '14px', lineHeight: 1.65, margin: 0 }}>
                We help customers understand the cover being discussed and the information needed for a proposal/renewal. Premium and coverage must be confirmed from the insurer's approved quotation/policy documents.
              </p>
            </div>

            <div className="mi-img-placeholder" style={{ minHeight: '160px' }}>
              <ImageIcon className="mi-placeholder-icon" />
              <span className="mi-placeholder-label">Adviser &amp; Vehicle Discussion</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION — FAQS & KEY AREAS TO UNDERSTAND */}
      <section className="mi-section">
        <div className="mi-container">
          <div className="mi-split-grid">
            {/* Left: Frequently Asked Questions */}
            <div>
              <div className="mi-header-row">
                <h2 className="mi-heading">Frequently Asked Questions</h2>
                <div className="mi-gold-line"></div>
              </div>

              <div className="mi-faq-list">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className="mi-faq-item" key={idx}>
                      <button
                        className="mi-faq-header"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <div className="mi-faq-header-left">
                          <ChevronRight
                            className="mi-faq-chevron"
                            style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}
                          />
                          <span className="mi-faq-question">{faq.question}</span>
                        </div>
                        <Plus className={`mi-faq-plus ${isOpen ? 'rotate' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="mi-faq-body">
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

            {/* Right: Key Areas to Understand */}
            <div>
              <div className="mi-header-row">
                <h2 className="mi-heading">Key Areas to Understand</h2>
                <div className="mi-gold-line"></div>
              </div>

              <div className="mi-key-areas-box">
                <div className="mi-key-areas-inner-img">
                  <CarFront className="w-10 h-10 text-slate-400 mb-1" />
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  <span className="mi-placeholder-label">Vehicle &amp; Policy</span>
                </div>

                {/* Floating Tags Around Inner Image */}
                <div className="mi-pill-tag mi-k-tag-1">
                  <CarFront />
                  <span>VEHICLE</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-2">
                  <BadgeIndianRupee />
                  <span>IDV</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-3">
                  <ShieldCheck />
                  <span>THIRD-PARTY</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-4">
                  <ShieldPlus />
                  <span>OWN-DAMAGE</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-5">
                  <FileText />
                  <span>DEDUCTIBLES</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-6">
                  <BadgeCheck />
                  <span>NO CLAIM BONUS</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-7">
                  <Puzzle />
                  <span>ADD-ONS</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-8">
                  <TrendingDown />
                  <span>DEPRECIATION</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-9">
                  <LifeBuoy />
                  <span>ROADSIDE ASSISTANCE</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-10">
                  <Ban />
                  <span>EXCLUSIONS</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-11">
                  <ClipboardList />
                  <span>CLAIM-INTIMATION</span>
                </div>
                <div className="mi-pill-tag mi-k-tag-12">
                  <CarFront />
                  <span>GARAGE / CASHLESS</span>
                </div>
              </div>
            </div>
          </div>

          {/* 9. IMPORTANT POLICY NOTE */}
          <div className="mi-policy-note-banner">
            <div className="mi-policy-note-img-holder">
              <FileText className="w-8 h-8 text-amber-400" />
            </div>

            <div className="mi-policy-note-content">
              <div className="mi-policy-note-title-row">
                <h4 className="mi-policy-note-heading">Important Policy Note</h4>
                <div className="mi-gold-line" style={{ width: '32px', height: '2.5px' }}></div>
              </div>
              <p className="mi-policy-note-text">
                The final policy benefits, premium, eligibility, exclusions, waiting periods, deductibles, add-ons, underwriting and claim conditions are determined by the insurer and policy wording. Product-specific claims on the website must match approved insurer material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SECTION — RELATED SERVICES */}
      <section className="mi-section" style={{ paddingTop: '10px' }}>
        <div className="mi-container">
          <div className="mi-header-row" style={{ marginBottom: '16px' }}>
            <h2 className="mi-heading">Related Services</h2>
            <div className="mi-gold-line"></div>
          </div>

          <div className="mi-related-cards">
            <Link to="/insurance/" className="mi-related-card">
              <div className="mi-related-img-holder">
                <Umbrella className="w-7 h-7 text-blue-800" />
              </div>
              <div className="mi-related-footer">
                <div className="mi-related-left">
                  <Umbrella className="mi-related-icon" />
                  <span className="mi-related-title">Insurance Services</span>
                </div>
                <span className="mi-related-arrow">→</span>
              </div>
            </Link>

            <Link to="/health-insurance-madurai/" className="mi-related-card">
              <div className="mi-related-img-holder">
                <HeartPulse className="w-7 h-7 text-rose-600" />
              </div>
              <div className="mi-related-footer">
                <div className="mi-related-left">
                  <HeartPulse className="mi-related-icon" />
                  <span className="mi-related-title">Health Insurance</span>
                </div>
                <span className="mi-related-arrow">→</span>
              </div>
            </Link>

            <Link to="/sme-business-insurance/" className="mi-related-card">
              <div className="mi-related-img-holder">
                <Building2 className="w-7 h-7 text-amber-600" />
              </div>
              <div className="mi-related-footer">
                <div className="mi-related-left">
                  <Building2 className="mi-related-icon" />
                  <span className="mi-related-title">SME &amp; Business Insurance</span>
                </div>
                <span className="mi-related-arrow">→</span>
              </div>
            </Link>

            <Link to="/travel-insurance-madurai/" className="mi-related-card">
              <div className="mi-related-img-holder">
                <Plane className="w-7 h-7 text-sky-600" />
              </div>
              <div className="mi-related-footer">
                <div className="mi-related-left">
                  <Plane className="mi-related-icon" />
                  <span className="mi-related-title">Travel Insurance</span>
                </div>
                <span className="mi-related-arrow">→</span>
              </div>
            </Link>

            <Link to="/home-insurance-madurai/" className="mi-related-card">
              <div className="mi-related-img-holder">
                <House className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="mi-related-footer">
                <div className="mi-related-left">
                  <House className="mi-related-icon" />
                  <span className="mi-related-title">Home Insurance</span>
                </div>
                <span className="mi-related-arrow">→</span>
              </div>
            </Link>
          </div>

          {/* 12. DISCLAIMER / INFORMATION BAR */}
          <div className="mi-disclaimer-strip">
            <div className="mi-disclaimer-icon-wrap">
              <ShieldCheck className="mi-disclaimer-icon" />
            </div>
            <p className="mi-disclaimer-text">
              Insurance is the subject matter of solicitation. Coverage, premium, underwriting, exclusions, waiting periods, deductibles, add-ons and claims are governed by the respective insurer and policy wording. Read the policy document carefully. Balaji Associates' exact intermediary/agent licence details and insurer relationships must be verified and displayed as required before publication.
            </p>
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CTA */}
      <section className="mi-bottom-cta-section">
        <div className="mi-container">
          <div className="mi-bottom-cta-card">
            <div className="mi-bottom-cta-content">
              <h3 className="mi-bottom-cta-title">
                Discuss Your Insurance Requirement | Call / WhatsApp 98428 17644
              </h3>

              <div className="mi-bottom-cta-buttons">
                <a href="tel:9842817644" className="mi-btn-primary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mi-bottom-cta-visual">
              <div className="mi-bottom-cta-img-placeholder">
                <ImageIcon className="mi-placeholder-icon" style={{ opacity: 0.35 }} />
                <span className="mi-placeholder-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Car, Bike &amp; Madurai Temple</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MotorInsurance;
