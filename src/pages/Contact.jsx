import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  House,
  ChevronRight,
  ArrowRight,
  Phone,
  MessageCircle,
  Landmark,
  ShieldCheck,
  ClipboardList,
  MapPin,
  ContactRound,
  MessageSquareMore,
  UsersRound,
  FileText,
  LockKeyhole,
  Image as ImageIcon
} from 'lucide-react';

function Contact() {
  // Loan Form State
  const [loanFormData, setLoanFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    loanType: '',
    approxAmount: '',
    employmentType: '',
    message: '',
    callbackTime: '',
    consent: false
  });
  const [loanSubmitted, setLoanSubmitted] = useState(false);

  // Insurance Form State
  const [insuranceFormData, setInsuranceFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    insuranceType: '',
    policyCategory: '',
    message: '',
    callbackTime: '',
    consent: false
  });
  const [insuranceSubmitted, setInsuranceSubmitted] = useState(false);

  const handleLoanChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoanFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleInsuranceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInsuranceFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoanSubmit = (e) => {
    e.preventDefault();
    if (!loanFormData.name || !loanFormData.mobile || !loanFormData.city || !loanFormData.loanType || !loanFormData.consent) {
      alert('Please fill all required fields and check the consent box.');
      return;
    }
    setLoanSubmitted(true);
  };

  const handleInsuranceSubmit = (e) => {
    e.preventDefault();
    if (!insuranceFormData.name || !insuranceFormData.mobile || !insuranceFormData.city || !insuranceFormData.consent) {
      alert('Please fill all required fields and check the consent box.');
      return;
    }
    setInsuranceSubmitted(true);
  };

  const scrollToForm = (formId) => {
    const el = document.getElementById(formId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="contact-page">
      <style>{`
        /* Global Page & Container */
        .contact-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.5;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Breadcrumb */
        .contact-breadcrumb-bar {
          background-color: #FFFFFF;
          border-bottom: 1px solid #F1F5F9;
          padding: 10px 0;
        }

        .contact-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .contact-breadcrumb-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .contact-breadcrumb-sep {
          width: 13px;
          height: 13px;
          color: #94A3B8;
        }

        .contact-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* HERO SECTION */
        .contact-hero-section {
          background: linear-gradient(135deg, #071329 0%, #0A1B3A 55%, #0F2856 100%);
          padding: 40px 0 46px 0;
          position: relative;
          overflow: hidden;
        }

        .contact-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 36px;
          align-items: center;
        }

        .contact-hero-left {
          display: flex;
          flex-direction: column;
        }

        .contact-hero-badge {
          color: #F59E0B;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.9px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .contact-hero-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 40px;
          line-height: 1.16;
          color: #FFFFFF;
          margin: 0 0 16px 0;
          letter-spacing: -0.4px;
        }

        .contact-hero-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #CBD5E1;
          margin: 0;
          max-width: 580px;
        }

        /* Hero Right Visual with Floating Cards */
        .contact-hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-hero-img-box {
          position: relative;
          width: 100%;
          min-height: 320px;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
        }

        .contact-hero-float-card {
          position: absolute;
          z-index: 5;
          background-color: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 12px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
          white-space: nowrap;
          font-size: 12px;
          font-weight: 700;
          color: #0A1B3A;
          transition: transform 0.2s ease;
        }

        .contact-hero-float-card:hover {
          transform: translateY(-2px);
        }

        .contact-float-loan {
          top: 18px;
          right: 20px;
        }

        .contact-float-insurance {
          top: 72px;
          right: 20px;
        }

        .contact-float-enquiry {
          top: 126px;
          right: 20px;
        }

        .contact-float-madurai {
          bottom: 24px;
          right: 20px;
        }

        /* TOP CONTACT CARDS */
        .contact-top-cards-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 24px;
        }

        .contact-top-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 14px rgba(10, 27, 58, 0.03);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .contact-top-card:hover {
          border-color: #CBD5E1;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(10, 27, 58, 0.06);
        }

        .contact-top-card-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-circle-icon-gold {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          color: #0A1B3A;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-circle-icon-green {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #16A34A;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-top-card-info {
          display: flex;
          flex-direction: column;
        }

        .contact-top-card-label {
          font-size: 12px;
          color: #64748B;
          font-weight: 500;
        }

        .contact-top-card-number {
          font-size: 20px;
          font-weight: 800;
          color: #0A1B3A;
          letter-spacing: -0.2px;
        }

        .contact-circle-arrow-navy {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #0A1B3A;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-circle-arrow-green {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #16A34A;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ENQUIRY TYPE SELECTORS */
        .contact-selectors-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 18px;
        }

        .contact-selector-btn-loan {
          background-color: #0A1B3A;
          color: #FFFFFF;
          border: 1px solid #0A1B3A;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(10, 27, 58, 0.15);
        }

        .contact-selector-btn-insurance {
          background-color: #F8FAFC;
          color: #0A1B3A;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .contact-selector-btn-insurance:hover {
          background-color: #F1F5F9;
          border-color: #CBD5E1;
        }

        /* MAIN TWO-COLUMN FORMS */
        .contact-forms-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 24px;
          align-items: start;
        }

        .contact-form-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 4px 18px rgba(10, 27, 58, 0.04);
          display: flex;
          flex-direction: column;
        }

        .contact-form-header-img {
          width: 100%;
          height: 110px;
          border-radius: 12px;
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 18px;
          padding: 12px;
        }

        .contact-form-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .contact-form-heading {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 24px;
          font-weight: 700;
          color: #0A1B3A;
          margin: 0;
        }

        .contact-gold-line {
          width: 44px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* FORM ELEMENTS */
        .contact-form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .contact-form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
        }

        .contact-label {
          font-size: 12.5px;
          font-weight: 600;
          color: #1E293B;
        }

        .contact-required-star {
          color: #DC2626;
          margin-left: 2px;
        }

        .contact-input,
        .contact-select,
        .contact-textarea {
          width: 100%;
          background-color: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 8px;
          padding: 9px 12px;
          font-size: 13px;
          color: #0A1B3A;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #94A3B8;
        }

        .contact-input:focus,
        .contact-select:focus,
        .contact-textarea:focus {
          border-color: #0A1B3A;
          box-shadow: 0 0 0 2px rgba(10, 27, 58, 0.08);
        }

        .contact-textarea {
          resize: vertical;
          min-height: 80px;
        }

        .contact-checkbox-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin: 6px 0 18px 0;
        }

        .contact-checkbox {
          width: 16px;
          height: 16px;
          margin-top: 2px;
          accent-color: #0A1B3A;
          cursor: pointer;
        }

        .contact-checkbox-label {
          font-size: 12px;
          color: #475569;
          line-height: 1.4;
          cursor: pointer;
        }

        /* Submit Buttons */
        .contact-btn-submit-loan {
          width: 100%;
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.3);
          transition: all 0.2s ease;
        }

        .contact-btn-submit-loan:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.4);
        }

        .contact-btn-submit-insurance {
          width: 100%;
          background-color: #16A34A;
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(22, 163, 74, 0.3);
          transition: all 0.2s ease;
        }

        .contact-btn-submit-insurance:hover {
          background-color: #15803D;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(22, 163, 74, 0.4);
        }

        .contact-success-msg {
          padding: 12px 16px;
          background-color: #F0FDF4;
          border: 1px solid #BBF7D0;
          color: #166534;
          border-radius: 8px;
          font-size: 13px;
          margin-bottom: 14px;
          text-align: center;
          font-weight: 600;
        }

        /* 11. ENQUIRY PROCESS SECTION */
        .contact-process-section {
          background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%);
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px 30px;
          margin: 32px 0 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .contact-process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }

        .contact-process-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 14px rgba(10, 27, 58, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0A1B3A;
        }

        .contact-process-label {
          font-size: 13px;
          font-weight: 700;
          color: #0A1B3A;
        }

        .contact-process-arrow {
          width: 20px;
          height: 20px;
          color: #0284C7;
        }

        /* 12. PRIVACY NOTICE CARD */
        .contact-privacy-card {
          background-color: #FEF9EE;
          border: 1px solid #FDE68A;
          border-radius: 14px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }

        .contact-privacy-shield-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: #FEF3C7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-privacy-icon {
          width: 22px;
          height: 22px;
          color: #D97706;
        }

        .contact-privacy-divider {
          width: 2px;
          height: 38px;
          background-color: #F59E0B;
          border-radius: 1px;
          flex-shrink: 0;
        }

        .contact-privacy-text {
          font-size: 13px;
          line-height: 1.55;
          color: #0A1B3A;
          margin: 0;
          font-weight: 500;
        }

        /* 13. OFFICE & LOCATION SECTION (4 COLUMNS) */
        .contact-office-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr 1fr 1.25fr;
          gap: 18px;
          margin-bottom: 30px;
          align-items: stretch;
        }

        .contact-office-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 4px 14px rgba(10, 27, 58, 0.03);
          display: flex;
          flex-direction: column;
        }

        .contact-office-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .contact-office-pin-wrap {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #FEF3C7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-office-label {
          font-size: 12px;
          color: #64748B;
          font-weight: 600;
        }

        .contact-office-name {
          font-size: 15px;
          font-weight: 800;
          color: #0A1B3A;
          margin: 0 0 6px 0;
        }

        .contact-office-address {
          font-size: 12.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }

        /* Column 2: Contact Details */
        .contact-phone-details-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 4px 14px rgba(10, 27, 58, 0.03);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 18px;
        }

        .contact-phone-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-phone-circle-green {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #16A34A;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-phone-label {
          font-size: 11px;
          color: #64748B;
          margin-bottom: 2px;
        }

        .contact-phone-link {
          font-size: 14.5px;
          font-weight: 800;
          color: #0A1B3A;
          text-decoration: none;
        }

        .contact-phone-link:hover {
          color: #1D4ED8;
          text-decoration: underline;
        }

        /* Column 3: Office Image Placeholder */
        .contact-office-img-box {
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 14px;
        }

        /* Column 4: Map Image Placeholder */
        .contact-map-img-box {
          position: relative;
          background: linear-gradient(135deg, #EFF6FF 0%, #E2E8F0 100%);
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 14px;
        }

        .contact-map-overlay-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(10, 27, 58, 0.08);
          z-index: 2;
        }

        .contact-map-pin {
          width: 14px;
          height: 14px;
          color: #DC2626;
        }

        .contact-map-pin-title {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
        }

        /* 14. BOTTOM CTA BANNER */
        .contact-bottom-cta-section {
          padding: 10px 0 24px 0;
        }

        .contact-bottom-cta-card {
          background: linear-gradient(135deg, #071329 0%, #0A1B3A 55%, #0F2856 100%);
          border-radius: 18px;
          padding: 24px 32px;
          display: grid;
          grid-template-columns: auto 1fr auto 240px;
          align-items: center;
          gap: 24px;
          box-shadow: 0 16px 40px rgba(10, 27, 58, 0.2);
          position: relative;
          overflow: hidden;
        }

        .contact-bottom-cta-phone-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0A1B3A;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.4);
          flex-shrink: 0;
        }

        .contact-bottom-cta-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .contact-bottom-cta-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 22px;
          line-height: 1.3;
          color: #FFFFFF;
          margin: 0;
        }

        .contact-bottom-cta-phone-link {
          color: #FFFFFF;
          text-decoration: none;
        }

        .contact-bottom-cta-phone-link:hover {
          text-decoration: underline;
        }

        .contact-bottom-cta-arrow-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0A1B3A;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.3);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .contact-bottom-cta-arrow-btn:hover {
          transform: scale(1.05);
        }

        .contact-bottom-cta-img-box {
          background: rgba(255, 255, 255, 0.08);
          border: 1px dashed rgba(255, 255, 255, 0.25);
          border-radius: 12px;
          height: 90px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 8px;
        }

        /* 15. LOAN & INSURANCE DISCLAIMERS */
        .contact-disclaimers-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 10px 0 36px 0;
        }

        .contact-disclaimer-card {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .contact-disclaimer-shield {
          width: 22px;
          height: 22px;
          color: #0A1B3A;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-disclaimer-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-disclaimer-heading {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
          margin: 0;
        }

        .contact-disclaimer-text {
          font-size: 11.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .contact-hero-grid {
            grid-template-columns: 1fr;
          }
          .contact-office-grid {
            grid-template-columns: 1fr 1fr;
          }
          .contact-bottom-cta-card {
            grid-template-columns: auto 1fr auto;
          }
          .contact-bottom-cta-img-box {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .contact-top-cards-row {
            grid-template-columns: 1fr;
          }
          .contact-selectors-row {
            grid-template-columns: 1fr;
          }
          .contact-forms-grid {
            grid-template-columns: 1fr;
          }
          .contact-process-section {
            flex-direction: column;
            gap: 18px;
          }
          .contact-process-arrow {
            transform: rotate(90deg);
          }
          .contact-office-grid {
            grid-template-columns: 1fr;
          }
          .contact-disclaimers-row {
            grid-template-columns: 1fr;
          }
          .contact-hero-title {
            font-size: 32px;
          }
          .contact-bottom-cta-card {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 16px;
          }
          .contact-bottom-cta-phone-icon,
          .contact-bottom-cta-arrow-btn {
            margin: 0 auto;
          }
        }

        @media (max-width: 520px) {
          .contact-form-row-2col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="contact-breadcrumb-bar">
        <div className="contact-container">
          <nav className="contact-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="contact-breadcrumb-link">
              <House className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="contact-breadcrumb-sep" />
            <span className="contact-breadcrumb-current">Contact</span>
          </nav>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="contact-hero-section">
        <div className="contact-container">
          <div className="contact-hero-grid">
            {/* Left Column */}
            <div className="contact-hero-left">
              <div className="contact-hero-badge">
                <span>&rsaquo;</span> CONTACT / ENQUIRY
              </div>

              <h1 className="contact-hero-title">
                Tell Us What You Need Help With
              </h1>

              <p className="contact-hero-p">
                Whether you are planning a home purchase, need business finance, want to explore a mortgage, are arranging working capital or need help understanding an insurance requirement, start with a simple conversation.
              </p>
            </div>

            {/* Right Column: Hero Visual with 4 Floating Cards */}
            <div className="contact-hero-right">
              {/* Floating Card 1: Loan Enquiry */}
              <div className="contact-hero-float-card contact-float-loan">
                <Landmark className="w-4 h-4 text-sky-700" />
                <span>Loan Enquiry</span>
              </div>

              {/* Floating Card 2: Insurance Enquiry */}
              <div className="contact-hero-float-card contact-float-insurance">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Insurance Enquiry</span>
              </div>

              {/* Floating Card 3: Your Enquiry */}
              <div className="contact-hero-float-card contact-float-enquiry">
                <ClipboardList className="w-4 h-4 text-amber-500" />
                <span>Your Enquiry</span>
              </div>

              {/* Floating Card 4: Madurai */}
              <div className="contact-hero-float-card contact-float-madurai">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Madurai</span>
              </div>

              {/* Dedicated Hero Image Placeholder */}
              <div className="contact-hero-img-box">
                <ImageIcon className="w-10 h-10 text-slate-400 mb-2 opacity-50" />
                <span className="text-white text-xs font-semibold">
                  Financial Consultation Discussion
                </span>
                <span className="text-slate-300 text-[11px] mt-1">
                  Professional consultant &amp; family with Madurai temple backdrop
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT INFORMATION CARDS */}
      <section className="contact-container">
        <div className="contact-top-cards-row">
          {/* Card 1 — Call */}
          <a href="tel:04524292644" className="contact-top-card">
            <div className="contact-top-card-left">
              <div className="contact-circle-icon-gold">
                <Phone className="w-5 h-5 text-slate-900" />
              </div>
              <div className="contact-top-card-info">
                <span className="contact-top-card-label">Call</span>
                <span className="contact-top-card-number">0452-4292644</span>
              </div>
            </div>
            <div className="contact-circle-arrow-navy">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Card 2 — Mobile / WhatsApp */}
          <a
            href="https://wa.me/919842817644"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-top-card"
          >
            <div className="contact-top-card-left">
              <div className="contact-circle-icon-green">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="contact-top-card-info">
                <span className="contact-top-card-label">Mobile / WhatsApp</span>
                <span className="contact-top-card-number">98428 17644</span>
              </div>
            </div>
            <div className="contact-circle-arrow-green">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </div>
      </section>

      {/* 4. ENQUIRY TYPE SELECTOR */}
      <section className="contact-container">
        <div className="contact-selectors-row">
          <button
            type="button"
            className="contact-selector-btn-loan"
            onClick={() => scrollToForm('loan-enquiry-form')}
          >
            <Landmark className="w-5 h-5 text-amber-400" />
            <span>Loan Enquiry</span>
          </button>

          <button
            type="button"
            className="contact-selector-btn-insurance"
            onClick={() => scrollToForm('insurance-enquiry-form')}
          >
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Insurance Enquiry</span>
          </button>
        </div>
      </section>

      {/* 5. MAIN ENQUIRY FORMS — TWO-COLUMN LAYOUT */}
      <section className="contact-container">
        <div className="contact-forms-grid">
          {/* LEFT FORM: LOAN ENQUIRY FORM */}
          <div className="contact-form-card" id="loan-enquiry-form">
            {/* Header Image Placeholder */}
            <div className="contact-form-header-img">
              <ImageIcon className="w-7 h-7 text-slate-400 opacity-40 mb-1" />
              <span className="text-xs text-slate-600 font-semibold">
                Residential Houses &amp; Property Documents
              </span>
              <span className="text-[10px] text-slate-400">Loan Consultation Visual</span>
            </div>

            <div className="contact-form-title-row">
              <h2 className="contact-form-heading">Loan Enquiry Form</h2>
              <div className="contact-gold-line"></div>
            </div>

            {loanSubmitted ? (
              <div className="contact-success-msg">
                Thank you! Your loan enquiry has been submitted. We will contact you shortly.
              </div>
            ) : null}

            <form onSubmit={handleLoanSubmit}>
              {/* Row 1 — Two columns */}
              <div className="contact-form-row-2col">
                <div className="contact-form-group" style={{ marginBottom: 0 }}>
                  <label className="contact-label">
                    Name <span className="contact-required-star">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    value={loanFormData.name}
                    onChange={handleLoanChange}
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-group" style={{ marginBottom: 0 }}>
                  <label className="contact-label">
                    Mobile Number <span className="contact-required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Your mobile number"
                    required
                    value={loanFormData.mobile}
                    onChange={handleLoanChange}
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Row 2 — Two columns */}
              <div className="contact-form-row-2col">
                <div className="contact-form-group" style={{ marginBottom: 0 }}>
                  <label className="contact-label">
                    City <span className="contact-required-star">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Your city"
                    required
                    value={loanFormData.city}
                    onChange={handleLoanChange}
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-group" style={{ marginBottom: 0 }}>
                  <label className="contact-label">
                    Loan Type <span className="contact-required-star">*</span>
                  </label>
                  <select
                    name="loanType"
                    required
                    value={loanFormData.loanType}
                    onChange={handleLoanChange}
                    className="contact-select"
                  >
                    <option value="">Select loan type</option>
                    <option value="Home & Property Loans">Home &amp; Property Loans</option>
                    <option value="Mortgage / LAP">Mortgage / LAP</option>
                    <option value="Business & MSME Loans">Business &amp; MSME Loans</option>
                    <option value="Machinery & Equipment Finance">Machinery &amp; Equipment Finance</option>
                    <option value="Working Capital Finance">Working Capital Finance</option>
                    <option value="Personal & Car Loans">Personal &amp; Car Loans</option>
                    <option value="Education & Agri Finance">Education &amp; Agri Finance</option>
                  </select>
                </div>
              </div>

              {/* Row 3 — Two columns */}
              <div className="contact-form-row-2col">
                <div className="contact-form-group" style={{ marginBottom: 0 }}>
                  <label className="contact-label">Approximate Amount</label>
                  <input
                    type="text"
                    name="approxAmount"
                    placeholder="Approximate amount"
                    value={loanFormData.approxAmount}
                    onChange={handleLoanChange}
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-group" style={{ marginBottom: 0 }}>
                  <label className="contact-label">Salaried / Self-Employed / Business / Other</label>
                  <select
                    name="employmentType"
                    value={loanFormData.employmentType}
                    onChange={handleLoanChange}
                    className="contact-select"
                  >
                    <option value="">Select option</option>
                    <option value="Salaried">Salaried</option>
                    <option value="Self-Employed">Self-Employed</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 4 — Full width */}
              <div className="contact-form-group">
                <label className="contact-label">Short Message</label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={loanFormData.message}
                  onChange={handleLoanChange}
                  className="contact-textarea"
                />
              </div>

              {/* Row 5 — Full width */}
              <div className="contact-form-group">
                <label className="contact-label">Preferred Callback Time</label>
                <select
                  name="callbackTime"
                  value={loanFormData.callbackTime}
                  onChange={handleLoanChange}
                  className="contact-select"
                >
                  <option value="">Select time</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  <option value="Any time">Any time</option>
                </select>
              </div>

              {/* Row 6 — Checkbox */}
              <div className="contact-checkbox-row">
                <input
                  type="checkbox"
                  id="loanConsent"
                  name="consent"
                  required
                  checked={loanFormData.consent}
                  onChange={handleLoanChange}
                  className="contact-checkbox"
                />
                <label htmlFor="loanConsent" className="contact-checkbox-label">
                  Consent to be contacted <span className="contact-required-star">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="contact-btn-submit-loan">
                <span>Submit Loan Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* RIGHT FORM: INSURANCE ENQUIRY FORM */}
          <div className="contact-form-card" id="insurance-enquiry-form">
            {/* Header Image Placeholder */}
            <div className="contact-form-header-img">
              <ImageIcon className="w-7 h-7 text-slate-400 opacity-40 mb-1" />
              <span className="text-xs text-slate-600 font-semibold">
                Family Protection &amp; Policy Paperwork
              </span>
              <span className="text-[10px] text-slate-400">Insurance Consultation Visual</span>
            </div>

            <div className="contact-form-title-row">
              <h2 className="contact-form-heading">Insurance Enquiry Form</h2>
              <div className="contact-gold-line"></div>
            </div>

            {insuranceSubmitted ? (
              <div className="contact-success-msg">
                Thank you! Your insurance enquiry has been submitted. We will contact you shortly.
              </div>
            ) : null}

            <form onSubmit={handleInsuranceSubmit}>
              {/* Row 1 — Two columns */}
              <div className="contact-form-row-2col">
                <div className="contact-form-group" style={{ marginBottom: 0 }}>
                  <label className="contact-label">
                    Name <span className="contact-required-star">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    value={insuranceFormData.name}
                    onChange={handleInsuranceChange}
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-group" style={{ marginBottom: 0 }}>
                  <label className="contact-label">
                    Mobile Number <span className="contact-required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Your mobile number"
                    required
                    value={insuranceFormData.mobile}
                    onChange={handleInsuranceChange}
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Row 2 — Two columns */}
              <div className="contact-form-row-2col">
                <div className="contact-form-group" style={{ marginBottom: 0 }}>
                  <label className="contact-label">
                    City <span className="contact-required-star">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Your city"
                    required
                    value={insuranceFormData.city}
                    onChange={handleInsuranceChange}
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-group" style={{ marginBottom: 0 }}>
                  <label className="contact-label">
                    Insurance Type: Health / Motor / SME / Travel / Home
                  </label>
                  <select
                    name="insuranceType"
                    value={insuranceFormData.insuranceType}
                    onChange={handleInsuranceChange}
                    className="contact-select"
                  >
                    <option value="">Select insurance type</option>
                    <option value="Health Insurance">Health Insurance</option>
                    <option value="Motor Insurance">Motor Insurance</option>
                    <option value="SME & Business Insurance">SME &amp; Business Insurance</option>
                    <option value="Travel Insurance">Travel Insurance</option>
                    <option value="Home Insurance">Home Insurance</option>
                  </select>
                </div>
              </div>

              {/* Row 3 — Full width */}
              <div className="contact-form-group">
                <label className="contact-label">New Policy / Renewal / General Enquiry</label>
                <select
                  name="policyCategory"
                  value={insuranceFormData.policyCategory}
                  onChange={handleInsuranceChange}
                  className="contact-select"
                >
                  <option value="">Select option</option>
                  <option value="New Policy">New Policy</option>
                  <option value="Renewal">Renewal</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              {/* Row 4 — Full width */}
              <div className="contact-form-group">
                <label className="contact-label">Short Message</label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={insuranceFormData.message}
                  onChange={handleInsuranceChange}
                  className="contact-textarea"
                />
              </div>

              {/* Row 5 — Full width */}
              <div className="contact-form-group">
                <label className="contact-label">Preferred Callback Time</label>
                <select
                  name="callbackTime"
                  value={insuranceFormData.callbackTime}
                  onChange={handleInsuranceChange}
                  className="contact-select"
                >
                  <option value="">Select time</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  <option value="Any time">Any time</option>
                </select>
              </div>

              {/* Row 6 — Checkbox */}
              <div className="contact-checkbox-row">
                <input
                  type="checkbox"
                  id="insuranceConsent"
                  name="consent"
                  required
                  checked={insuranceFormData.consent}
                  onChange={handleInsuranceChange}
                  className="contact-checkbox"
                />
                <label htmlFor="insuranceConsent" className="contact-checkbox-label">
                  Consent to be contacted <span className="contact-required-star">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="contact-btn-submit-insurance">
                <span>Submit Insurance Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. ENQUIRY PROCESS SECTION */}
      <section className="contact-container">
        <div className="contact-process-section">
          {/* Step 1 */}
          <div className="contact-process-step">
            <div className="contact-process-circle">
              <ContactRound className="w-6 h-6" />
            </div>
            <span className="contact-process-label">Your Requirement</span>
          </div>

          <ArrowRight className="contact-process-arrow" />

          {/* Step 2 */}
          <div className="contact-process-step">
            <div className="contact-process-circle">
              <MessageSquareMore className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="contact-process-label">Enquiry</span>
          </div>

          <ArrowRight className="contact-process-arrow" />

          {/* Step 3 */}
          <div className="contact-process-step">
            <div className="contact-process-circle">
              <UsersRound className="w-6 h-6 text-sky-700" />
            </div>
            <span className="contact-process-label">Discussion</span>
          </div>

          <ArrowRight className="contact-process-arrow" />

          {/* Step 4 */}
          <div className="contact-process-step">
            <div className="contact-process-circle">
              <FileText className="w-6 h-6 text-indigo-700" />
            </div>
            <span className="contact-process-label">Next Step</span>
          </div>
        </div>
      </section>

      {/* 7. PRIVACY NOTICE CARD */}
      <section className="contact-container">
        <div className="contact-privacy-card">
          <div className="contact-privacy-shield-wrap">
            <LockKeyhole className="contact-privacy-icon" />
          </div>

          <div className="contact-privacy-divider"></div>

          <p className="contact-privacy-text">
            Do not collect Aadhaar numbers, PAN numbers, OTPs, bank account numbers, passwords, full medical records or sensitive financial documents through the basic public lead form.
          </p>
        </div>
      </section>

      {/* 8. OFFICE CONTACT AND LOCATION SECTION */}
      <section className="contact-container">
        <div className="contact-office-grid">
          {/* Column 1 — Office details */}
          <div className="contact-office-card">
            <div className="contact-office-title-row">
              <div className="contact-office-pin-wrap">
                <MapPin className="w-4 h-4 text-amber-600" />
              </div>
              <span className="contact-office-label">Office *</span>
            </div>
            <h3 className="contact-office-name">Balaji Associates</h3>
            <p className="contact-office-address">
              Old No. 2, New No. 3, 2nd Floor,<br />
              Kaathukondan Thoppu Street,<br />
              Opp. Amidhini Stores,<br />
              Tamil Sangam Road,<br />
              Madurai - 625001, Tamil Nadu.
            </p>
          </div>

          {/* Column 2 — Contact details */}
          <div className="contact-phone-details-card">
            <div className="contact-phone-row">
              <div className="contact-phone-circle-green">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="contact-phone-label">Landline:</div>
                <a href="tel:04524292644" className="contact-phone-link">
                  0452-4292644
                </a>
              </div>
            </div>

            <div className="contact-phone-row">
              <div className="contact-phone-circle-green">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="contact-phone-label">Mobile / WhatsApp:</div>
                <a
                  href="https://wa.me/919842817644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-phone-link"
                >
                  98428 17644
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 — Office image placeholder */}
          <div className="contact-office-img-box">
            <ImageIcon className="w-7 h-7 text-slate-400 opacity-40 mb-1" />
            <span className="text-xs text-slate-600 font-semibold">
              Balaji Associates Office
            </span>
            <span className="text-[10px] text-slate-400">Building &amp; Signage</span>
          </div>

          {/* Column 4 — Map image placeholder */}
          <div className="contact-map-img-box">
            <div className="contact-map-overlay-badge">
              <MapPin className="contact-map-pin" />
              <span className="contact-map-pin-title">Balaji Associates Madurai</span>
            </div>
            <ImageIcon className="w-7 h-7 text-slate-400 opacity-40 mb-1" />
            <span className="text-xs text-slate-600 font-semibold">
              Madurai Map &amp; Location
            </span>
            <span className="text-[10px] text-slate-400">Temple City Street View</span>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BANNER */}
      <section className="contact-bottom-cta-section">
        <div className="contact-container">
          <div className="contact-bottom-cta-card">
            {/* Circular Gold Phone Icon */}
            <div className="contact-bottom-cta-phone-icon">
              <Phone className="w-6 h-6" />
            </div>

            {/* Title & Phone Link */}
            <div className="contact-bottom-cta-text-wrap">
              <h3 className="contact-bottom-cta-title">
                Discuss Your Requirement |{' '}
                <a href="tel:9842817644" className="contact-bottom-cta-phone-link">
                  Call / WhatsApp 98428 17644
                </a>
              </h3>
            </div>

            {/* Circular Arrow Button */}
            <a
              href="tel:9842817644"
              className="contact-bottom-cta-arrow-btn"
              aria-label="Call or WhatsApp"
            >
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Right-Side Photo Placeholder */}
            <div className="contact-bottom-cta-img-box">
              <ImageIcon className="w-6 h-6 text-white opacity-40 mb-1" />
              <span className="text-[10px] text-white/70 font-semibold">
                Financial Consultation
              </span>
              <span className="text-[9px] text-white/40">Madurai Temple Backdrop</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LOAN AND INSURANCE DISCLAIMERS */}
      <section className="contact-container">
        <div className="contact-disclaimers-row">
          {/* Left: Loan Disclaimer */}
          <div className="contact-disclaimer-card">
            <ShieldCheck className="contact-disclaimer-shield" />
            <div className="contact-disclaimer-content">
              <h4 className="contact-disclaimer-heading">Loan Disclaimer</h4>
              <p className="contact-disclaimer-text">
                Balaji Associates provides loan consultancy/application assistance. Loan approval, eligible amount, rate of interest, fees, tenure, security requirements and disbursement are subject to the respective Bank/NBFC's policies, documentation, credit assessment and applicable terms. Balaji Associates does not guarantee loan sanction.
              </p>
            </div>
          </div>

          {/* Right: Insurance Disclaimer */}
          <div className="contact-disclaimer-card">
            <ShieldCheck className="contact-disclaimer-shield" />
            <div className="contact-disclaimer-content">
              <h4 className="contact-disclaimer-heading">Insurance Disclaimer</h4>
              <p className="contact-disclaimer-text">
                Insurance is the subject matter of solicitation. Balaji Associates' exact insurance intermediary/agent status, licence/registration number and authorised insurer relationships must be displayed as legally required. Coverage, premium, underwriting, exclusions, waiting periods, deductibles, add-ons and claims are governed by the respective insurer and policy wording. Read the policy document carefully before purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
