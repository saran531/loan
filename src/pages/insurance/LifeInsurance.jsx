import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home as HomeIcon,
  Plus,
  Phone,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  UserRound,
  UsersRound,
  BriefcaseBusiness,
  Building2,
  Clock,
  Receipt,
  Sparkles,
  FileText,
  Wallet,
  ClipboardList,
  CheckCircle2,
  CarFront,
  Plane,
  House,
  HeartPulse,
  Coins,
  Scale,
  Umbrella,
  GraduationCap,
  CalendarDays,
  Award,
  Layers,
  FileCheck,
  AlertCircle
} from 'lucide-react';

// Life Insurance image assets
import lifeInsuranceHero from "../../assets/images/Insurance/Life_insurance/Golden Shield Family Protection.png";
import lifeInsuranceUnderstanding from "../../assets/images/Insurance/Life_insurance/Understanding Life Insurance Benefits.png";
import lifeInsuranceCTA from "../../assets/images/Insurance/Life_insurance/Secure Your Family’s Financial Future.png";

const faqList = [
  {
    question: 'What is life insurance?',
    answer: 'Life insurance is a legal contract between an individual (the policyholder) and an insurance company. In exchange for regular or single premium payments, the insurer provides a predetermined financial sum (death benefit) to designated beneficiaries in the event of the insured person\'s death during the policy term, subject to the policy terms and conditions.'
  },
  {
    question: 'Who should consider life insurance?',
    answer: 'Anyone who has financial dependants—such as a spouse, dependent children, aging parents, or business co-owners—should strongly consider life insurance. It is particularly vital for primary income earners, self-employed individuals, and borrowers with outstanding home loans, vehicle loans, or business liabilities.'
  },
  {
    question: 'What is term life insurance?',
    answer: 'Term life insurance is the purest and most straightforward form of life cover. It provides financial coverage for a specified period (such as 10, 20, 30, or 40 years). If the insured individual passes away during the policy term, the full sum assured is paid to the nominee. Because there is typically no savings or investment component attached to basic term plans, they offer the highest coverage amount at the most affordable premium rates.'
  },
  {
    question: 'How much life insurance cover do I need?',
    answer: 'As a broad financial rule of thumb, life insurance coverage should generally equal 10 to 15 times your annual gross income, plus the total value of any outstanding liabilities (such as mortgages, business debts, and personal loans), and an estimated provision for key future milestones like children\'s higher education and marriage. However, individual requirements vary depending on current savings, monthly expenses, and financial commitments.'
  },
  {
    question: 'Can self-employed people apply?',
    answer: 'Yes. Self-employed professionals, traders, merchants, and business owners can apply for life insurance. Insurers evaluate eligibility based on valid income documentation, such as Income Tax Returns (ITR), audited financial statements, GST returns, and bank statements.'
  },
  {
    question: 'Can I have more than one life insurance policy?',
    answer: 'Yes, an individual can hold multiple life insurance policies across different insurers (for example, combining a high-cover pure term plan with an endowment or retirement plan). However, every existing policy and active application must be truthfully disclosed in the proposal form, as insurers assess overall financial underwriting and Human Life Value (HLV) limits.'
  },
  {
    question: 'What documents may be required?',
    answer: 'Standard documentation typically includes: (1) Identity Proof (Aadhaar, Passport, PAN Card, or Voter ID), (2) Address Proof (Electricity bill, rental agreement, or Aadhaar), (3) Age Proof (Birth certificate, PAN, or Passport), (4) Income Proof (Recent salary slips and Form 16 for salaried individuals; ITR with computation of income for self-employed individuals), and (5) Recent passport-size photographs. Medical examination reports may also be required based on age and sum assured.'
  },
  {
    question: 'Are premiums and benefits the same for everyone?',
    answer: 'No. Life insurance premiums and terms are uniquely determined through underwriting based on factors such as entry age, gender, chosen policy term, sum assured, tobacco or alcohol consumption habits, current medical health, occupation risk profile, and family medical history.'
  },
  {
    question: 'What happens if an application is rejected?',
    answer: 'If an insurer declines an application, it is typically due to adverse medical underwriting findings, high occupational risk, or insufficient verifiable income proof. The insurer issues an underwriting communication stating the reason. In some cases, coverage may be approved with revised terms, a premium loading (higher premium), or specific exclusions.'
  },
  {
    question: 'How can I enquire about life insurance through Balaji Associates?',
    answer: 'You can submit an enquiry via our website Contact Page under the Insurance Enquiry Form, call our Madurai office directly at 0452-4290544, or message our team on WhatsApp at 98428 17644. Our consultants will discuss your family needs, help you compare plan structures, and assist you with transparent documentation.'
  }
];

function LifeInsurance() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="life-insurance-page">
      <style>{`
        /* Global Page Container & Shared Styles */
        .life-insurance-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: inherit;
        }

        .li-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .li-section {
          padding: 40px 0;
        }

        .li-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .li-heading {
          font-size: 26px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .li-gold-line {
          height: 3px;
          width: 44px;
          background-color: #ECA822;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .li-subtext {
          font-size: 14.5px;
          color: #64748B;
          margin-top: -10px;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .li-text-p {
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 16px;
        }

        /* 1. BREADCRUMB */
        .li-breadcrumb-wrap {
          background-color: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
          padding: 12px 0;
        }

        .li-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .li-breadcrumb-home-icon {
          width: 14px;
          height: 14px;
          color: #94A3B8;
        }

        .li-breadcrumb-link {
          color: #003B73;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s ease;
        }

        .li-breadcrumb-link:hover {
          color: #ECA822;
        }

        .li-breadcrumb-sep {
          color: #CBD5E1;
        }

        .li-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* 2. HERO SECTION */
        .li-hero-section {
          padding: 44px 0 32px 0;
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
        }

        .li-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        .li-hero-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .li-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #FEF3C7;
          border: 1px solid #FDE68A;
          color: #92400E;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 5px 12px;
          border-radius: 9999px;
          text-transform: uppercase;
        }

        .li-hero-dot-grid {
          display: grid;
          grid-template-columns: repeat(5, 5px);
          gap: 4px;
          opacity: 0.4;
        }

        .li-hero-dot {
          width: 5px;
          height: 5px;
          background-color: #CBD5E1;
          border-radius: 50%;
        }

        .li-hero-title {
          font-size: 38px;
          font-weight: 800;
          color: #0A1B3A;
          line-height: 1.2;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .li-hero-title span {
          color: #003B73;
        }

        .li-hero-tagline {
          font-size: 18px;
          font-weight: 600;
          color: #003B73;
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .li-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 26px;
        }

        .li-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #0A1B3A 0%, #003B73 100%);
          color: #FFFFFF;
          padding: 13px 24px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(10, 27, 58, 0.2);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .li-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(10, 27, 58, 0.28);
        }

        .li-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          color: #003B73;
          border: 1.5px solid #003B73;
          padding: 13px 22px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .li-btn-secondary:hover {
          background-color: #EFF6FF;
          color: #0A1B3A;
        }

        /* Hero Visual Container */
        .li-hero-visual-card {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.12);
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .li-hero-img {
          width: 100%;
          max-width: 100%;
          height: auto;
          aspect-ratio: 1774 / 887;
          object-fit: contain;
          display: block;
        }

        .li-hero-visual-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 30%, rgba(236, 168, 34, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 60%);
          pointer-events: none;
        }

        .li-hero-placeholder-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #F8FAFC;
          font-size: 11px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 8px;
          width: fit-content;
        }

        .li-hero-placeholder-center {
          text-align: center;
          margin: 30px 0;
          position: relative;
          z-index: 1;
        }

        .li-hero-shield-icon-wrap {
          width: 80px;
          height: 80px;
          margin: 0 auto 16px auto;
          background: rgba(236, 168, 34, 0.15);
          border: 2px solid #ECA822;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ECA822;
          box-shadow: 0 0 24px rgba(236, 168, 34, 0.25);
        }

        .li-hero-placeholder-title {
          color: #FFFFFF;
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

        .li-hero-placeholder-subtitle {
          color: #93C5FD;
          font-size: 13.5px;
          margin: 0;
          line-height: 1.5;
        }

        .li-hero-pills-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          position: relative;
          z-index: 1;
        }

        .li-hero-pill-stat {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 10px 12px;
          border-radius: 10px;
          text-align: center;
        }

        .li-hero-pill-stat-val {
          color: #ECA822;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .li-hero-pill-stat-lbl {
          color: #CBD5E1;
          font-size: 10.5px;
          font-weight: 500;
        }

        /* 2. SECTION — INTRODUCTION TO LIFE INSURANCE */
        .li-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
        }

        .li-intro-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 28px;
        }

        .li-intro-highlight-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 18px;
        }

        .li-intro-highlight-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #003B73;
          flex-shrink: 0;
        }

        /* Section 2 Visual */
        .li-family-protection-visual {
          width: 100%;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(10, 27, 58, 0.08);
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .li-family-protection-img {
          width: 100%;
          max-width: 100%;
          height: auto;
          aspect-ratio: 1672 / 941;
          object-fit: contain;
          display: block;
        }

        /* 3. SECTION — WHY CONSIDER LIFE INSURANCE (6 Benefit Cards) */
        .li-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .li-benefit-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          display: flex;
          flex-direction: column;
        }

        .li-benefit-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
          border-color: #CBD5E1;
        }

        .li-benefit-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: #EFF6FF;
          border: 1px solid #BFDBFE;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #003B73;
          margin-bottom: 16px;
        }

        .li-benefit-icon-badge.gold {
          background-color: #FEF3C7;
          border-color: #FDE68A;
          color: #D97706;
        }

        .li-benefit-title {
          font-size: 16.5px;
          font-weight: 700;
          color: #0A1B3A;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .li-benefit-desc {
          font-size: 13.8px;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        /* 4. SECTION — TYPES OF LIFE INSURANCE (7 Cards + Visual Placeholder) */
        .li-types-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }

        .li-type-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 22px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .li-type-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        }

        .li-type-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #003B73;
          background: #EFF6FF;
          padding: 3px 8px;
          border-radius: 6px;
          margin-bottom: 10px;
        }

        .li-type-title {
          font-size: 16px;
          font-weight: 700;
          color: #0A1B3A;
          margin-bottom: 8px;
        }

        .li-type-desc {
          font-size: 13.5px;
          color: #64748B;
          line-height: 1.6;
          margin: 0;
        }

        .li-types-image-placeholder {
          width: 100%;
          min-height: 160px;
          background: linear-gradient(135deg, #F8FAFC 0%, #EEF2F6 100%);
          border: 1.5px dashed #CBD5E1;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          margin-top: 14px;
        }

        /* 5. SECTION — WHO SHOULD CONSIDER LIFE INSURANCE (6 Categories) */
        .li-who-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .li-who-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color 0.15s ease;
        }

        .li-who-card:hover {
          border-color: #003B73;
        }

        .li-who-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0A1B3A;
          flex-shrink: 0;
        }

        .li-who-content h4 {
          font-size: 15px;
          font-weight: 700;
          color: #0A1B3A;
          margin: 0 0 6px 0;
        }

        .li-who-content p {
          font-size: 13px;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
        }

        /* 6. SECTION — HOW MUCH COVER IS NEEDED (Factors Evaluation Box) */
        .li-cover-factors-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
        }

        .li-factors-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .li-factor-item {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 16px;
          text-align: center;
        }

        .li-factor-icon-wrap {
          width: 36px;
          height: 36px;
          margin: 0 auto 10px auto;
          background: #EFF6FF;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #003B73;
        }

        .li-factor-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
          margin-bottom: 4px;
        }

        .li-factor-text {
          font-size: 12px;
          color: #64748B;
          line-height: 1.4;
          margin: 0;
        }

        /* 7. SECTION — HOW TO CHOOSE A SUITABLE POLICY */
        .li-checklist-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .li-check-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 16px;
        }

        .li-check-icon {
          width: 20px;
          height: 20px;
          color: #16A34A;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .li-check-title {
          font-size: 14.5px;
          font-weight: 700;
          color: #0A1B3A;
          margin-bottom: 4px;
        }

        .li-check-desc {
          font-size: 13px;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
        }

        /* 8. SECTION — OUR ASSISTANCE PROCESS (5 Step Timeline) */
        .li-process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .li-step-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 20px 16px;
          text-align: center;
          position: relative;
        }

        .li-step-number {
          width: 32px;
          height: 32px;
          margin: 0 auto 12px auto;
          background: linear-gradient(135deg, #0A1B3A 0%, #003B73 100%);
          color: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
        }

        .li-step-title {
          font-size: 14px;
          font-weight: 700;
          color: #0A1B3A;
          margin-bottom: 8px;
        }

        .li-step-desc {
          font-size: 12.5px;
          color: #64748B;
          line-height: 1.45;
          margin: 0;
        }

        /* 9. SECTION — FAQS & ACCORDION */
        .li-faq-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .li-faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          overflow: hidden;
          transition: border-color 0.15s ease;
        }

        .li-faq-item:hover {
          border-color: #CBD5E1;
        }

        .li-faq-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 14px;
        }

        .li-faq-question {
          font-size: 15px;
          font-weight: 600;
          color: #0A1B3A;
        }

        .li-faq-plus {
          width: 18px;
          height: 18px;
          color: #003B73;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .li-faq-plus.rotate {
          transform: rotate(45deg);
        }

        .li-faq-body {
          padding: 0 20px 18px 20px;
          font-size: 14px;
          line-height: 1.65;
          color: #475569;
          border-top: 1px solid #F1F5F9;
          padding-top: 14px;
        }

        /* Important Policy Note & Regulatory Strip */
        .li-note-strip {
          background-color: #FEF3C7;
          border: 1px solid #FDE68A;
          border-radius: 12px;
          padding: 20px 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-top: 24px;
        }

        .li-note-icon-wrap {
          width: 36px;
          height: 36px;
          background: #D97706;
          color: #FFFFFF;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .li-note-title {
          font-size: 15px;
          font-weight: 700;
          color: #92400E;
          margin: 0 0 4px 0;
        }

        .li-note-text {
          font-size: 13.5px;
          color: #78350F;
          line-height: 1.6;
          margin: 0;
        }

        /* Related Services Strip */
        .li-related-cards {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
        }

        .li-related-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 16px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }

        .li-related-card:hover {
          border-color: #003B73;
          transform: translateY(-2px);
        }

        .li-related-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .li-related-icon {
          width: 18px;
          height: 18px;
          color: #003B73;
          flex-shrink: 0;
        }

        .li-related-title {
          font-size: 13px;
          font-weight: 600;
          color: #0A1B3A;
        }

        .li-related-arrow {
          font-size: 14px;
          color: #94A3B8;
        }

        /* Disclaimer Strip */
        .li-disclaimer-strip {
          margin-top: 24px;
          padding: 16px 20px;
          background-color: #F8FAFC;
          border-radius: 10px;
          border: 1px solid #E2E8F0;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .li-disclaimer-text {
          font-size: 12px;
          color: #64748B;
          line-height: 1.55;
          margin: 0;
        }

        /* 10. SECTION — FINAL CTA */
        .li-bottom-cta-section {
          padding: 40px 0 60px 0;
        }

        .li-bottom-cta-card {
          background: linear-gradient(135deg, #0A1B3A 0%, #003B73 100%);
          border-radius: 20px;
          padding: 44px 40px;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 16px 36px rgba(10, 27, 58, 0.18);
        }

        .li-bottom-cta-title {
          color: #FFFFFF;
          font-size: 28px;
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 12px 0;
        }

        .li-bottom-cta-desc {
          color: #CBD5E1;
          font-size: 15px;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .li-bottom-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .li-btn-cta-gold {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #ECA822;
          color: #0A1B3A;
          padding: 13px 26px;
          border-radius: 10px;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(236, 168, 34, 0.3);
          transition: transform 0.15s ease, background-color 0.15s ease;
        }

        .li-btn-cta-gold:hover {
          background-color: #F59E0B;
          transform: translateY(-2px);
        }

        .li-btn-cta-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          color: #FFFFFF;
          padding: 13px 22px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 0.15s ease;
        }

        .li-btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* Final CTA Visual */
        .li-bottom-cta-visual {
          width: 100%;
          height: 100%;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .li-bottom-cta-img {
          width: 100%;
          height: 100%;
          max-height: 240px;
          object-fit: cover;
          border-radius: 14px;
          display: block;
        }

        /* RESPONSIVE MEDIA QUERIES */
        @media (max-width: 1024px) {
          .li-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .li-intro-grid {
            grid-template-columns: 1fr;
          }

          .li-benefits-grid,
          .li-types-grid,
          .li-who-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .li-factors-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .li-process-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .li-related-cards {
            grid-template-columns: repeat(3, 1fr);
          }

          .li-bottom-cta-card {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
        }

        @media (max-width: 768px) {
          .li-hero-title {
            font-size: 30px;
          }

          .li-benefits-grid,
          .li-types-grid,
          .li-who-grid,
          .li-checklist-grid {
            grid-template-columns: 1fr;
          }

          .li-factors-grid {
            grid-template-columns: 1fr;
          }

          .li-process-grid {
            grid-template-columns: 1fr;
          }

          .li-related-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .li-hero-actions,
          .li-bottom-cta-buttons {
            flex-direction: column;
          }

          .li-btn-primary,
          .li-btn-secondary,
          .li-btn-cta-gold,
          .li-btn-cta-outline {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .li-related-cards {
            grid-template-columns: 1fr;
          }

          .li-hero-pills-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="li-breadcrumb-wrap">
        <div className="li-container">
          <div className="li-breadcrumb">
            <HomeIcon className="li-breadcrumb-home-icon" />
            <Link to="/" className="li-breadcrumb-link">Home</Link>
            <span className="li-breadcrumb-sep">&gt;</span>
            <Link to="/insurance/" className="li-breadcrumb-link">Insurance</Link>
            <span className="li-breadcrumb-sep">&gt;</span>
            <span className="li-breadcrumb-current">Life Insurance</span>
          </div>
        </div>
      </div>

      {/* SECTION 1 – HERO SECTION */}
      <section className="li-section li-hero-section">
        <div className="li-container">
          <div className="li-hero-grid">
            <div className="li-hero-left">
              <div className="li-hero-top-row">
                <div className="li-hero-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>LIFE INSURANCE ASSISTANCE</span>
                </div>
                <div className="li-hero-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="li-hero-dot" />
                  ))}
                </div>
              </div>

              <h1 className="li-hero-title">
                Life Insurance<br />
                <span>Assistance in Madurai</span>
              </h1>

              <div className="li-hero-tagline">
                Protect What Matters Most. Secure Your Family's Financial Future.
              </div>

              <p className="li-text-p">
                Your family relies on you for security, daily sustenance, and long-term aspirations. A well-chosen life insurance policy acts as an indispensable financial umbrella, ensuring that your dependants are protected against financial hardship in the event of an untimely demise.
              </p>

              <p className="li-text-p">
                Balaji Associates assists individuals, self-employed professionals, and business owners across Madurai in understanding life insurance options, evaluating adequate sum assured levels, and navigating policy terms with total clarity and transparency.
              </p>

              <div className="li-hero-actions">
                <Link to="/contact/" className="li-btn-primary">
                  <span>Enquire About Life Insurance</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9626205844" className="li-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Contact Our Team (9626205844)</span>
                </a>
              </div>
            </div>

            <div className="li-hero-right">
              {/* LIFE INSURANCE HERO IMAGE */}
              <div className="li-hero-visual-card">
                <img
                  src={lifeInsuranceHero}
                  alt="Golden Shield Family Protection"
                  className="li-hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – INTRODUCTION TO LIFE INSURANCE */}
      <section className="li-section">
        <div className="li-container">
          <div className="li-header-row">
            <h2 className="li-heading">Understanding Life Insurance</h2>
            <div className="li-gold-line"></div>
          </div>
          <p className="li-subtext">
            A fundamental safety net designed to replace economic loss and preserve your family's standard of living.
          </p>

          <div className="li-intro-grid">
            <div className="li-intro-box">
              <div className="li-intro-highlight-row">
                <div className="li-intro-highlight-icon">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0A1B3A', margin: '0 0 6px 0' }}>
                    What Is a Life Insurance Policy?
                  </h3>
                  <p className="li-text-p" style={{ fontSize: '14px', margin: 0 }}>
                    Life insurance is a contract between you and a licensed insurer. In exchange for your premium contributions, the insurer provides guaranteed financial protection to your designated beneficiaries, payable upon the insured person's death during the active policy term, subject to the contract's terms and conditions.
                  </p>
                </div>
              </div>

              <div className="li-intro-highlight-row">
                <div className="li-intro-highlight-icon">
                  <UsersRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0A1B3A', margin: '0 0 6px 0' }}>
                    Why Financial Protection for Family Matters
                  </h3>
                  <p className="li-text-p" style={{ fontSize: '14px', margin: 0 }}>
                    In the unfortunate event of an untimely death, ongoing family living expenses, rent, children's school fees, and daily household obligations do not halt. Adequate life insurance replaces lost economic contribution so that your loved ones are never forced to compromise their lifestyle or deplete their long-term savings.
                  </p>
                </div>
              </div>

              <div className="li-intro-highlight-row" style={{ marginBottom: 0 }}>
                <div className="li-intro-highlight-icon">
                  <Receipt className="w-5 h-5" />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0A1B3A', margin: '0 0 6px 0' }}>
                    Matching Coverage to Real Financial Responsibilities
                  </h3>
                  <p className="li-text-p" style={{ fontSize: '14px', margin: 0 }}>
                    Selecting a life insurance policy is not merely choosing a nominal figure. An effective policy must account for outstanding home loans, personal liabilities, dependency horizons, and projected future milestones such as children's higher education.
                  </p>
                </div>
              </div>
            </div>

            {/* FAMILY PROTECTION IMAGE */}
            <div className="li-family-protection-visual">
              <img
                src={lifeInsuranceUnderstanding}
                alt="Understanding Life Insurance Benefits"
                className="li-family-protection-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – WHY CONSIDER LIFE INSURANCE? */}
      <section className="li-section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="li-container">
          <div className="li-header-row">
            <h2 className="li-heading">Why Consider Life Insurance?</h2>
            <div className="li-gold-line"></div>
          </div>
          <p className="li-subtext">
            Key financial benefits that make life insurance the cornerstone of every sound family financial plan.
          </p>

          <div className="li-benefits-grid">
            {/* Card 1 */}
            <div className="li-benefit-card">
              <div className="li-benefit-icon-badge gold">
                <UsersRound className="w-5 h-5" />
              </div>
              <h3 className="li-benefit-title">Financial Protection for Dependants</h3>
              <p className="li-benefit-desc">
                Provides a dependable financial safety net for your spouse, children, or aged parents so they can cover ongoing living costs without compromising their future.
              </p>
            </div>

            {/* Card 2 */}
            <div className="li-benefit-card">
              <div className="li-benefit-icon-badge">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="li-benefit-title">Shield Against Outstanding Liabilities</h3>
              <p className="li-benefit-desc">
                Ensures that debts such as home loans, personal loans, or business credit lines are not passed on to your grieving family, protecting family assets from liquidation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="li-benefit-card">
              <div className="li-benefit-icon-badge">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="li-benefit-title">Long-Term Family Financial Security</h3>
              <p className="li-benefit-desc">
                Guarantees capital continuity so that your household's financial roadmap—including home retention and daily lifestyle—remains stable through critical transition periods.
              </p>
            </div>

            {/* Card 4 */}
            <div className="li-benefit-card">
              <div className="li-benefit-icon-badge">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="li-benefit-title">Support for Life Milestones</h3>
              <p className="li-benefit-desc">
                Specific policy types enable targeted funding for children's higher education, marriage expenses, or family milestones, creating dedicated financial reserves.
              </p>
            </div>

            {/* Card 5 */}
            <div className="li-benefit-card">
              <div className="li-benefit-icon-badge">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="li-benefit-title">Policy Options Based on Individual Needs</h3>
              <p className="li-benefit-desc">
                From high-cover pure protection term plans to retirement and wealth accumulation structures, choose policy options aligned with your specific life stage.
              </p>
            </div>

            {/* Card 6 */}
            <div className="li-benefit-card">
              <div className="li-benefit-icon-badge gold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="li-benefit-title">Genuine Peace of Mind</h3>
              <p className="li-benefit-desc">
                Knowing that your loved ones have financial security in place brings confidence, enabling you to focus on career and business growth with freedom from uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – TYPES OF LIFE INSURANCE */}
      <section className="li-section">
        <div className="li-container">
          <div className="li-header-row">
            <h2 className="li-heading">Types of Life Insurance Policies</h2>
            <div className="li-gold-line"></div>
          </div>
          <p className="li-subtext">
            Carefully understand the major life insurance categories available in the Indian market to choose what suits your requirements.
          </p>

          <div className="li-types-grid">
            {/* Type 1: Term Life Insurance */}
            <div className="li-type-card">
              <span className="li-type-tag">Pure Protection</span>
              <h3 className="li-type-title">Term Life Insurance</h3>
              <p className="li-type-desc">
                Provides comprehensive life cover for a fixed duration at the most affordable premium rates. If the insured passes away during the term, the full sum assured is disbursed to beneficiaries. Ideal for high cover at low cost.
              </p>
            </div>

            {/* Type 2: Whole Life Insurance */}
            <div className="li-type-card">
              <span className="li-type-tag">Lifelong Cover</span>
              <h3 className="li-type-title">Whole Life Insurance</h3>
              <p className="li-type-desc">
                Extends life protection typically up to age 99 or 100. Combines death benefit protection with potential cash value accumulation or surrender benefits depending on insurer policy terms.
              </p>
            </div>

            {/* Type 3: Endowment Plans */}
            <div className="li-type-card">
              <span className="li-type-tag">Protection + Savings</span>
              <h3 className="li-type-title">Endowment Plans</h3>
              <p className="li-type-desc">
                Combines death benefit cover with disciplined savings. If the policyholder survives the policy term, a maturity benefit is paid; in case of demise during the term, the sum assured is paid to nominees.
              </p>
            </div>

            {/* Type 4: Money-Back Plans */}
            <div className="li-type-card">
              <span className="li-type-tag">Periodic Liquidity</span>
              <h3 className="li-type-title">Money-Back Plans</h3>
              <p className="li-type-desc">
                Offers periodic survival payouts during the policy term as a percentage of the sum assured, while maintaining full death benefit coverage throughout the tenure.
              </p>
            </div>

            {/* Type 5: Unit Linked Insurance Plans (ULIPs) */}
            <div className="li-type-card">
              <span className="li-type-tag">Market-Linked</span>
              <h3 className="li-type-title">Unit Linked Insurance Plans (ULIPs)</h3>
              <p className="li-type-desc">
                Integrates life cover with investment in debt, equity, or balanced funds. Investment returns are subject to prevailing market risks, and values fluctuate based on fund performance and applicable charges.
              </p>
            </div>

            {/* Type 6: Child Insurance Plans */}
            <div className="li-type-card">
              <span className="li-type-tag">Child Education</span>
              <h3 className="li-type-title">Child Insurance Plans</h3>
              <p className="li-type-desc">
                Structured to secure your child's education and future milestones. Many plans include a premium waiver benefit upon the parent's death, ensuring the fund continues growing until maturity.
              </p>
            </div>

            {/* Type 7: Retirement / Pension-Linked Plans */}
            <div className="li-type-card" style={{ gridColumn: 'span 3' }}>
              <span className="li-type-tag">Retirement Income</span>
              <h3 className="li-type-title">Retirement &amp; Pension-Linked Insurance Plans</h3>
              <p className="li-type-desc">
                Designed to accumulate retirement capital during working years and subsequently generate regular annuity/pension payouts during retirement, helping maintain financial independence without relying on others.
              </p>
            </div>
          </div>

          {/* LIFE INSURANCE TYPES IMAGE – ADD IMAGE LATER */}
          <div className="li-types-image-placeholder">
            <div style={{ maxWidth: '600px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#003B73', marginBottom: '6px', fontWeight: 600, fontSize: '13.5px' }}>
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Product Availability &amp; Regulatory Notice</span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                Availability, benefits, exclusions, riders, investment risks, and charges differ between insurance providers and specific product brochures. Balaji Associates provides comparative assistance to help you evaluate insurer offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHO SHOULD CONSIDER LIFE INSURANCE? */}
      <section className="li-section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="li-container">
          <div className="li-header-row">
            <h2 className="li-heading">Who Should Consider Life Insurance?</h2>
            <div className="li-gold-line"></div>
          </div>
          <p className="li-subtext">
            Life insurance requirements span diverse profiles, professions, and family obligations.
          </p>

          <div className="li-who-grid">
            <div className="li-who-card">
              <div className="li-who-icon-wrap">
                <BriefcaseBusiness className="w-5 h-5 text-blue-700" />
              </div>
              <div className="li-who-content">
                <h4>Salaried Professionals</h4>
                <p>Individuals with regular monthly commitments, rent, lifestyle obligations, and dependants who rely on their active income stream.</p>
              </div>
            </div>

            <div className="li-who-card">
              <div className="li-who-icon-wrap">
                <UserRound className="w-5 h-5 text-amber-600" />
              </div>
              <div className="li-who-content">
                <h4>Self-Employed Individuals</h4>
                <p>Practitioners, consultants, and freelancers whose families depend on their individual professional practice and personal billing.</p>
              </div>
            </div>

            <div className="li-who-card">
              <div className="li-who-icon-wrap">
                <Building2 className="w-5 h-5 text-indigo-700" />
              </div>
              <div className="li-who-content">
                <h4>Business Owners &amp; Entrepreneurs</h4>
                <p>Promoters with business credit exposures, working capital guarantees, or partnerships requiring financial continuity for their families.</p>
              </div>
            </div>

            <div className="li-who-card">
              <div className="li-who-icon-wrap">
                <UsersRound className="w-5 h-5 text-emerald-700" />
              </div>
              <div className="li-who-content">
                <h4>Parents &amp; Families with Dependants</h4>
                <p>Couples with young children, aging parents, or non-working family members who require uninterrupted financial backing.</p>
              </div>
            </div>

            <div className="li-who-card">
              <div className="li-who-icon-wrap">
                <Receipt className="w-5 h-5 text-rose-700" />
              </div>
              <div className="li-who-content">
                <h4>Borrowers with Active Loans</h4>
                <p>Individuals holding home loans, vehicle finance, or personal loans, ensuring liabilities do not burden family members.</p>
              </div>
            </div>

            <div className="li-who-card">
              <div className="li-who-icon-wrap">
                <Coins className="w-5 h-5 text-sky-700" />
              </div>
              <div className="li-who-content">
                <h4>Long-Term Financial Planners</h4>
                <p>Individuals planning generational wealth transfer, estate protection, and retirement security through disciplined structures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – HOW MUCH COVER MAY BE NEEDED? */}
      <section className="li-section">
        <div className="li-container">
          <div className="li-header-row">
            <h2 className="li-heading">How Much Life Insurance Cover May Be Needed?</h2>
            <div className="li-gold-line"></div>
          </div>
          <p className="li-subtext">
            Determining your optimal sum assured requires assessing multiple financial variables rather than relying on guesswork.
          </p>

          <div className="li-cover-factors-box">
            <p className="li-text-p" style={{ marginBottom: '10px' }}>
              Every household has unique financial dynamics. When calculating the right cover, financial planners assess the <strong>Human Life Value (HLV)</strong> and income replacement needs across several core dimensions:
            </p>

            <div className="li-factors-grid">
              <div className="li-factor-item">
                <div className="li-factor-icon-wrap">
                  <Wallet className="w-4 h-4" />
                </div>
                <div className="li-factor-title">Current Annual Income</div>
                <p className="li-factor-text">Number of active earning years remaining until intended retirement age.</p>
              </div>

              <div className="li-factor-item">
                <div className="li-factor-icon-wrap">
                  <Receipt className="w-4 h-4" />
                </div>
                <div className="li-factor-title">Family Living Expenses</div>
                <p className="li-factor-text">Monthly household expenditure factoring in future inflation rates.</p>
              </div>

              <div className="li-factor-item">
                <div className="li-factor-icon-wrap">
                  <House className="w-4 h-4" />
                </div>
                <div className="li-factor-title">Outstanding Loans</div>
                <p className="li-factor-text">Total mortgage, LAP, car, or business liabilities needing full clearance.</p>
              </div>

              <div className="li-factor-item">
                <div className="li-factor-icon-wrap">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="li-factor-title">Children's Education</div>
                <p className="li-factor-text">Projected future costs for higher education, coaching, and marriage.</p>
              </div>

              <div className="li-factor-item">
                <div className="li-factor-icon-wrap">
                  <UsersRound className="w-4 h-4" />
                </div>
                <div className="li-factor-title">Number of Dependants</div>
                <p className="li-factor-text">Ages of spouse, children, and parents and their individual support horizon.</p>
              </div>

              <div className="li-factor-item">
                <div className="li-factor-icon-wrap">
                  <Coins className="w-4 h-4" />
                </div>
                <div className="li-factor-title">Existing Investments</div>
                <p className="li-factor-text">Liquid mutual funds, fixed deposits, and provident funds already accumulated.</p>
              </div>

              <div className="li-factor-item">
                <div className="li-factor-icon-wrap">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="li-factor-title">Current Life Cover</div>
                <p className="li-factor-text">Group term insurance from employers and existing active policies.</p>
              </div>

              <div className="li-factor-item">
                <div className="li-factor-icon-wrap">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="li-factor-title">Emergency Reserves</div>
                <p className="li-factor-text">Contingency fund needed to handle immediate family transitional challenges.</p>
              </div>
            </div>

            <div style={{ marginTop: '20px', padding: '14px 18px', background: '#F8FAFC', borderRadius: '10px', borderLeft: '4px solid #ECA822' }}>
              <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.55 }}>
                <strong>Important Note:</strong> There is no single universal cover amount. Balaji Associates assists you in calculating your personalized coverage requirement objectively, without making unsupported guaranteed promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 – HOW TO CHOOSE A SUITABLE POLICY */}
      <section className="li-section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="li-container">
          <div className="li-header-row">
            <h2 className="li-heading">How to Choose a Suitable Policy</h2>
            <div className="li-gold-line"></div>
          </div>
          <p className="li-subtext">
            Essential criteria to review before committing to any life insurance contract.
          </p>

          <div className="li-checklist-grid">
            <div className="li-check-item">
              <CheckCircle2 className="li-check-icon" />
              <div>
                <div className="li-check-title">1. Adequate Coverage Amount</div>
                <p className="li-check-desc">Ensure the sum assured is sufficient to cover your family's future income needs and debt clearance rather than buying an arbitrary small cover.</p>
              </div>
            </div>

            <div className="li-check-item">
              <CheckCircle2 className="li-check-icon" />
              <div>
                <div className="li-check-title">2. Appropriate Policy Duration</div>
                <p className="li-check-desc">Choose a tenure that protects your dependants until your major financial liabilities are settled and children become financially independent.</p>
              </div>
            </div>

            <div className="li-check-item">
              <CheckCircle2 className="li-check-icon" />
              <div>
                <div className="li-check-title">3. Premium Affordability &amp; Consistency</div>
                <p className="li-check-desc">Ensure premium payments fit comfortably into your annual cash flows so the policy does not lapse due to non-payment.</p>
              </div>
            </div>

            <div className="li-check-item">
              <CheckCircle2 className="li-check-icon" />
              <div>
                <div className="li-check-title">4. Insurer Track Record &amp; Solvency</div>
                <p className="li-check-desc">Review the insurer's Claim Settlement Ratio (CSR), average settlement turnaround time, financial strength, and public disclosures.</p>
              </div>
            </div>

            <div className="li-check-item">
              <CheckCircle2 className="li-check-icon" />
              <div>
                <div className="li-check-title">5. Understand Exclusions &amp; Waiting Clauses</div>
                <p className="li-check-desc">Check standard policy exclusions (e.g., suicide clause within first 12 months) and any specific waiting periods under rider attachments.</p>
              </div>
            </div>

            <div className="li-check-item">
              <CheckCircle2 className="li-check-icon" />
              <div>
                <div className="li-check-title">6. Valuable Riders &amp; Add-ons</div>
                <p className="li-check-desc">Evaluate useful riders like Accidental Death Benefit, Critical Illness Cover, and Waiver of Premium for total and permanent disability.</p>
              </div>
            </div>

            <div className="li-check-item">
              <CheckCircle2 className="li-check-icon" />
              <div>
                <div className="li-check-title">7. Medical &amp; Underwriting Requirements</div>
                <p className="li-check-desc">Be prepared for medical tele-interviews or check-ups required by underwriters, and disclose all past health history transparently.</p>
              </div>
            </div>

            <div className="li-check-item">
              <CheckCircle2 className="li-check-icon" />
              <div>
                <div className="li-check-title">8. Review of Policy Wording &amp; Free-Look Period</div>
                <p className="li-check-desc">Carefully read the policy document upon receipt. Take advantage of the statutory 15 or 30-day free-look period if terms differ from what was discussed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – OUR ASSISTANCE PROCESS */}
      <section className="li-section">
        <div className="li-container">
          <div className="li-header-row">
            <h2 className="li-heading">Our Assistance Process</h2>
            <div className="li-gold-line"></div>
          </div>
          <p className="li-subtext">
            A step-by-step advisory approach designed to help you select, understand, and apply for life insurance.
          </p>

          <div className="li-process-grid">
            <div className="li-step-card">
              <div className="li-step-number">1</div>
              <div className="li-step-title">Understand Your Needs</div>
              <p className="li-step-desc">We discuss your family structure, financial liabilities, income stability, and dependency timeline.</p>
            </div>

            <div className="li-step-card">
              <div className="li-step-number">2</div>
              <div className="li-step-title">Explore Plan Options</div>
              <p className="li-step-desc">We introduce and compare plan types (term, endowment, child plans) across authorized insurers.</p>
            </div>

            <div className="li-step-card">
              <div className="li-step-number">3</div>
              <div className="li-step-title">Review Terms &amp; Costs</div>
              <p className="li-step-desc">Transparent walkthrough of sum assured, premium schedules, riders, waiting terms, and exclusions.</p>
            </div>

            <div className="li-step-card">
              <div className="li-step-number">4</div>
              <div className="li-step-title">Application Support</div>
              <p className="li-step-desc">Assistance in filling out the proposal form accurately, organizing KYC/income proofs, and coordinating medicals.</p>
            </div>

            <div className="li-step-card">
              <div className="li-step-number">5</div>
              <div className="li-step-title">Underwriting Follow-Up</div>
              <p className="li-step-desc">Tracking proposal progress with the insurer until policy issuance and delivering documentation to you.</p>
            </div>
          </div>

          <div style={{ marginTop: '22px', padding: '14px 18px', background: '#F1F5F9', borderRadius: '10px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldCheck className="w-5 h-5 text-blue-700 flex-shrink-0" />
            <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
              <strong>Notice:</strong> Balaji Associates operates as an advisory facilitator. Final underwriting, acceptance, policy issuance, premium determination, and claim decisions are made solely by the respective licensed insurance company.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9 – FREQUENTLY ASKED QUESTIONS */}
      <section className="li-section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="li-container">
          <div className="li-header-row">
            <h2 className="li-heading">Frequently Asked Questions</h2>
            <div className="li-gold-line"></div>
          </div>
          <p className="li-subtext">
            Clear answers to common questions about life insurance policies, eligibility, and documentation.
          </p>

          <div className="li-faq-grid">
            {faqList.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div className="li-faq-item" key={idx}>
                  <button
                    className="li-faq-header"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="li-faq-question">{faq.question}</span>
                    <Plus className={`li-faq-plus ${isOpen ? 'rotate' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="li-faq-body">
                          <p style={{ margin: 0 }}>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Important Policy Note & Regulatory Strip */}
          <div className="li-note-strip">
            <div className="li-note-icon-wrap">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="li-note-title">Important Policy Note</h4>
              <p className="li-note-text">
                Life insurance contracts are governed by the respective insurance company's approved terms, conditions, and policy wordings. Benefits, eligibility, medical requirements, underwriting loadings, and claims are subject to the insurer's formal verification. Always review the policy brochure and proposal document carefully prior to purchase.
              </p>
            </div>
          </div>

          {/* Regulatory Disclaimer */}
          <div className="li-disclaimer-strip">
            <ShieldCheck className="w-4 h-4 text-slate-500 flex-shrink-0" style={{ marginTop: '2px' }} />
            <p className="li-disclaimer-text">
              Insurance is the subject matter of solicitation. Balaji Associates provides facilitation and documentation support. Policy issuance and claim settlements are at the sole discretion of the respective insurer.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES SECTION */}
      <section className="li-section" style={{ paddingTop: '10px' }}>
        <div className="li-container">
          <div className="li-header-row" style={{ marginBottom: '16px' }}>
            <h2 className="li-heading">Related Services</h2>
            <div className="li-gold-line"></div>
          </div>

          <div className="li-related-cards">
            <Link to="/insurance/" className="li-related-card">
              <div className="li-related-left">
                <ShieldCheck className="li-related-icon" />
                <span className="li-related-title">Insurance Overview</span>
              </div>
              <span className="li-related-arrow">→</span>
            </Link>

            <Link to="/health-insurance-madurai/" className="li-related-card">
              <div className="li-related-left">
                <HeartPulse className="li-related-icon" />
                <span className="li-related-title">Health Insurance</span>
              </div>
              <span className="li-related-arrow">→</span>
            </Link>

            <Link to="/motor-insurance-madurai/" className="li-related-card">
              <div className="li-related-left">
                <CarFront className="li-related-icon" />
                <span className="li-related-title">Motor Insurance</span>
              </div>
              <span className="li-related-arrow">→</span>
            </Link>

            <Link to="/sme-business-insurance/" className="li-related-card">
              <div className="li-related-left">
                <Building2 className="li-related-icon" />
                <span className="li-related-title">SME &amp; Business</span>
              </div>
              <span className="li-related-arrow">→</span>
            </Link>

            <Link to="/travel-insurance-madurai/" className="li-related-card">
              <div className="li-related-left">
                <Plane className="li-related-icon" />
                <span className="li-related-title">Travel Insurance</span>
              </div>
              <span className="li-related-arrow">→</span>
            </Link>

            <Link to="/home-insurance-madurai/" className="li-related-card">
              <div className="li-related-left">
                <House className="li-related-icon" />
                <span className="li-related-title">Home Insurance</span>
              </div>
              <span className="li-related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 – FINAL CTA */}
      <section className="li-bottom-cta-section">
        <div className="li-container">
          <div className="li-bottom-cta-card">
            <div className="li-bottom-cta-content">
              <h3 className="li-bottom-cta-title">
                Secure Your Family's Financial Future
              </h3>
              <p className="li-bottom-cta-desc">
                Discuss your life insurance requirements with our experienced advisory team in Madurai. Get clear, transparent guidance on suitable policy options tailored to your family's needs and financial responsibilities.
              </p>

              <div className="li-bottom-cta-buttons">
                <Link to="/contact/" className="li-btn-cta-gold">
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9626205844" className="li-btn-cta-outline">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 9626205844</span>
                </a>
              </div>
            </div>

            {/* FINAL CTA IMAGE */}
            <div className="li-bottom-cta-visual">
              <img
                src={lifeInsuranceCTA}
                alt="Secure Your Family’s Financial Future"
                className="li-bottom-cta-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LifeInsurance;

