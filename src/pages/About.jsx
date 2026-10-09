import React from 'react';
import { Link } from 'react-router-dom';
import {
  House,
  ChevronRight,
  ArrowRight,
  Phone,
  Target,
  Compass,
  FileText,
  ShieldCheck,
  Users,
  MapPin,
  BriefcaseBusiness,
  UserRound,
  GraduationCap,
  Store,
  ShoppingBag,
  Factory,
  Building2,
  Lightbulb,
  Building,
  UsersRound,
  ChartNoAxesCombined,
  Image as ImageIcon
} from 'lucide-react';

const approachCards = [
  {
    number: '01',
    icon: Target,
    text: 'Understand the requirement before discussing a product.'
  },
  {
    number: '02',
    icon: Compass,
    text: 'Explain the broad process in plain language.'
  },
  {
    number: '03',
    icon: FileText,
    text: 'Help customers prepare relevant information and documents.'
  },
  {
    number: '04',
    icon: ShieldCheck,
    text: 'Avoid promises that belong to the lender or insurer.'
  },
  {
    number: '05',
    icon: Users,
    text: 'Encourage customers to understand important terms before committing.',
    boldHighlight: 'before committing.'
  },
  {
    number: '06',
    icon: MapPin,
    text: 'Provide a local point of contact from Madurai.'
  }
];

const whoWeAssistList = [
  { label: 'Salaried Employees', icon: BriefcaseBusiness },
  { label: 'Self-Employed Professionals', icon: UserRound },
  { label: 'Families', icon: Users },
  { label: 'Students', icon: GraduationCap },
  { label: 'Property Owners', icon: House },
  { label: 'Traders', icon: Store },
  { label: 'Retailers', icon: ShoppingBag },
  { label: 'Manufacturers', icon: Factory },
  { label: 'Service Businesses', icon: Building2 },
  { label: 'Entrepreneurs', icon: Lightbulb },
  { label: 'MSMEs', icon: Building },
  { label: 'Other Eligible Customers', icon: UsersRound }
];

function About() {
  return (
    <div className="about-page">
      <style>{`
        /* Global Page Container & Reset */
        .about-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.5;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Section Headings */
        .about-section {
          padding: 40px 0;
        }

        .about-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .about-heading {
          font-size: 30px;
          font-weight: 700;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .about-gold-line {
          width: 48px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .about-subtext {
          font-size: 14.5px;
          color: #64748B;
          line-height: 1.6;
          margin: -10px 0 24px 0;
          max-width: 950px;
        }

        /* Breadcrumb */
        .about-breadcrumb-bar {
          background-color: #FAFAFB;
          border-bottom: 1px solid #F1F5F9;
          padding: 12px 0;
        }

        .about-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .about-breadcrumb-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .about-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .about-breadcrumb-sep {
          width: 13px;
          height: 13px;
          color: #94A3B8;
        }

        .about-breadcrumb-current {
          color: #D97706;
          font-weight: 600;
        }

        /* HERO SECTION */
        .about-hero-section {
          padding: 36px 0 44px 0;
          position: relative;
        }

        .about-hero-grid {
          display: grid;
          grid-template-columns: 1.08fr 1.02fr;
          gap: 40px;
          align-items: center;
        }

        .about-hero-left {
          display: flex;
          flex-direction: column;
        }

        .about-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          background-color: #FEF9EE;
          border: 1px solid #FDE68A;
          color: #B45309;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 9999px;
          margin-bottom: 16px;
        }

        .about-badge-dot {
          width: 6px;
          height: 6px;
          background-color: #D97706;
          border-radius: 50%;
        }

        .about-hero-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 40px;
          line-height: 1.18;
          color: #0A1B3A;
          margin: 0 0 18px 0;
          letter-spacing: -0.4px;
        }

        .about-hero-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .about-hero-cta-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 10px;
        }

        .about-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          color: #0A1B3A;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.25);
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .about-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.35);
        }

        .about-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #FFFFFF;
          color: #0A1B3A;
          font-weight: 600;
          font-size: 14px;
          padding: 11px 22px;
          border-radius: 9999px;
          text-decoration: none;
          border: 1.5px solid #0A1B3A;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .about-btn-secondary:hover {
          background-color: #F8FAFC;
          transform: translateY(-1px);
        }

        /* HERO RIGHT VISUAL */
        .about-hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-hero-pattern-dots {
          position: absolute;
          width: 80px;
          height: 80px;
          background-image: radial-gradient(#F59E0B 1.5px, transparent 1.5px);
          background-size: 10px 10px;
          opacity: 0.45;
          z-index: 1;
        }

        .about-dots-top {
          top: -12px;
          left: 10px;
        }

        .about-dots-bottom {
          bottom: -14px;
          right: 30px;
        }

        .about-hero-img-container {
          position: relative;
          width: 100%;
          min-height: 380px;
          max-height: 420px;
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(145deg, #EFF6FF 0%, #F1F5F9 100%);
          border: 1px solid #E2E8F0;
          box-shadow: 0 12px 36px rgba(10, 27, 58, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .about-hero-img-placeholder {
          width: 100%;
          height: 100%;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
          background: linear-gradient(135deg, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.7) 100%);
        }

        .about-hero-img-caption {
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          margin-top: 10px;
          max-width: 280px;
        }

        .about-hero-img-subcaption {
          font-size: 11.5px;
          color: #94A3B8;
          margin-top: 4px;
          max-width: 260px;
        }

        /* Floating Info Cards */
        .about-float-card {
          position: absolute;
          z-index: 5;
          background-color: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 14px;
          padding: 10px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          box-shadow: 0 8px 24px rgba(10, 27, 58, 0.12);
          transition: transform 0.2s ease;
        }

        .about-float-card:hover {
          transform: translateY(-2px);
        }

        .about-float-card-icon {
          width: 22px;
          height: 22px;
          color: #0A1B3A;
        }

        .about-float-card-label {
          font-size: 11px;
          font-weight: 700;
          color: #0A1B3A;
          letter-spacing: 0.2px;
        }

        .about-float-home {
          top: 14px;
          left: 18px;
        }

        .about-float-business {
          top: 45%;
          left: -12px;
          transform: translateY(-50%);
        }

        .about-float-insurance {
          top: 16px;
          right: 20px;
        }

        .about-float-docs {
          bottom: 22px;
          right: 20px;
        }

        /* OUR APPROACH SECTION */
        .about-approach-grid {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          gap: 26px;
          align-items: stretch;
        }

        .about-approach-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .about-approach-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 20px 18px;
          box-shadow: 0 4px 14px rgba(10, 27, 58, 0.03);
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: all 0.2s ease;
        }

        .about-approach-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 8px 20px rgba(10, 27, 58, 0.06);
          transform: translateY(-2px);
        }

        .about-approach-top {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .about-number-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #EFF6FF;
          color: #1D4ED8;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-approach-icon {
          width: 22px;
          height: 22px;
          color: #0A1B3A;
        }

        .about-approach-text {
          font-size: 13.5px;
          line-height: 1.5;
          color: #334155;
          margin: 0;
        }

        .about-approach-img-container {
          background: linear-gradient(145deg, #F8FAFC 0%, #EFF6FF 100%);
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          box-shadow: 0 6px 20px rgba(10, 27, 58, 0.04);
          overflow: hidden;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
        }

        /* WHO WE ASSIST SECTION */
        .about-who-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
        }

        .about-who-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 20px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 12px;
          min-height: 110px;
          box-shadow: 0 2px 10px rgba(10, 27, 58, 0.02);
          transition: all 0.2s ease;
        }

        .about-who-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 6px 16px rgba(10, 27, 58, 0.06);
          transform: translateY(-2px);
        }

        .about-who-icon {
          width: 24px;
          height: 24px;
          color: #0A1B3A;
        }

        .about-who-label {
          font-size: 13px;
          font-weight: 600;
          color: #0A1B3A;
          line-height: 1.35;
        }

        /* OUR HEAD OFFICE SECTION */
        .about-office-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 24px;
          align-items: stretch;
        }

        .about-office-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 26px 28px;
          box-shadow: 0 4px 16px rgba(10, 27, 58, 0.03);
          display: grid;
          grid-template-columns: 1.1fr auto 1fr;
          gap: 24px;
          align-items: center;
        }

        .about-office-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .about-office-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .about-pin-icon-wrap {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #FEF3C7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-pin-icon {
          width: 18px;
          height: 18px;
          color: #D97706;
        }

        .about-office-name {
          font-size: 16px;
          font-weight: 700;
          color: #0A1B3A;
          margin: 0;
        }

        .about-office-address {
          font-size: 13.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }

        .about-office-divider {
          width: 1px;
          height: 80%;
          background-color: #E2E8F0;
        }

        .about-office-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .about-contact-icon-navy {
          width: 20px;
          height: 20px;
          color: #0A1B3A;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .about-contact-icon-green {
          width: 22px;
          height: 22px;
          color: #16A34A;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .about-contact-label {
          font-size: 12px;
          color: #64748B;
          margin-bottom: 2px;
        }

        .about-contact-value {
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
        }

        .about-landline-link {
          color: #1D4ED8;
        }

        .about-landline-link:hover {
          text-decoration: underline;
        }

        .about-whatsapp-link {
          color: #16A34A;
        }

        .about-whatsapp-link:hover {
          text-decoration: underline;
        }

        .about-city-img-container {
          position: relative;
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          box-shadow: 0 4px 16px rgba(10, 27, 58, 0.03);
          overflow: hidden;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .about-city-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(10, 27, 58, 0.08);
          z-index: 3;
        }

        .about-city-badge-pin {
          width: 18px;
          height: 18px;
          color: #D97706;
        }

        .about-city-badge-text {
          display: flex;
          flex-direction: column;
        }

        .about-city-name {
          font-size: 13px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.2;
        }

        .about-state-name {
          font-size: 11px;
          color: #64748B;
          line-height: 1.2;
        }

        /* TRUST & TRANSPARENCY SECTION */
        .about-trust-banner {
          background-color: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 16px;
          padding: 22px 28px;
          display: flex;
          align-items: center;
          gap: 22px;
          box-shadow: 0 2px 10px rgba(29, 78, 216, 0.04);
        }

        .about-trust-shield-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #0A1B3A;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-trust-shield-icon {
          width: 24px;
          height: 24px;
          color: #FFFFFF;
        }

        .about-trust-divider {
          width: 3.5px;
          height: 48px;
          background: linear-gradient(180deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .about-trust-content {
          flex: 1;
        }

        .about-trust-title {
          font-size: 17px;
          font-weight: 700;
          color: #0A1B3A;
          margin: 0 0 6px 0;
        }

        .about-trust-p {
          font-size: 13.5px;
          line-height: 1.6;
          color: #334155;
          margin: 0;
        }

        /* BOTTOM CTA BANNER */
        .about-bottom-cta-section {
          padding: 40px 0 50px 0;
        }

        .about-bottom-cta-card {
          background: linear-gradient(135deg, #071329 0%, #0A1B3A 55%, #0F2856 100%);
          border-radius: 20px;
          padding: 36px 40px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(10, 27, 58, 0.2);
          display: grid;
          grid-template-columns: 1.1fr 1.3fr 0.9fr;
          align-items: center;
          gap: 28px;
        }

        .about-bottom-cta-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .about-bottom-cta-heading {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 28px;
          line-height: 1.25;
          color: #FFFFFF;
          margin: 0;
        }

        .about-bottom-cta-curve {
          width: 140px;
          height: 4px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
        }

        .about-bottom-cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .about-bottom-cta-btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          color: #0A1B3A;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 24px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(217, 119, 6, 0.3);
          transition: all 0.2s ease;
          border: none;
          white-space: nowrap;
        }

        .about-bottom-cta-btn-gold:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.4);
        }

        .about-bottom-cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(255, 255, 255, 0.08);
          border: 1.5px solid rgba(255, 255, 255, 0.6);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 14px;
          padding: 12px 22px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .about-bottom-cta-btn-outline:hover {
          background-color: rgba(255, 255, 255, 0.15);
          border-color: #FFFFFF;
        }

        .about-bottom-cta-img-container {
          background: rgba(255, 255, 255, 0.06);
          border: 1px dashed rgba(255, 255, 255, 0.25);
          border-radius: 14px;
          min-height: 120px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 16px;
        }

        /* Generic Placeholder Styling */
        .about-placeholder-icon {
          width: 36px;
          height: 36px;
          color: #94A3B8;
        }

        .about-placeholder-label {
          font-size: 12px;
          font-weight: 600;
          color: #64748B;
          margin-top: 8px;
        }

        .about-placeholder-sublabel {
          font-size: 11px;
          color: #94A3B8;
          margin-top: 2px;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 1024px) {
          .about-hero-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .about-approach-grid {
            grid-template-columns: 1fr;
          }

          .about-who-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .about-office-grid {
            grid-template-columns: 1fr;
          }

          .about-bottom-cta-card {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 32px 24px;
          }

          .about-bottom-cta-left {
            align-items: center;
          }

          .about-bottom-cta-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 0 16px;
          }

          .about-breadcrumb {
            flex-wrap: wrap;
            row-gap: 4px;
          }

          .about-hero-title {
            font-size: 32px;
          }

          .about-approach-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-who-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .about-office-card {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .about-office-divider {
            width: 100%;
            height: 1px;
          }

          .about-trust-banner {
            flex-direction: column;
            text-align: center;
            gap: 14px;
          }

          .about-trust-divider {
            display: none;
          }

          .about-float-business {
            left: 10px;
          }
        }

        @media (max-width: 520px) {
          .about-section {
            padding: 32px 0;
          }

          .about-approach-cards-grid {
            grid-template-columns: 1fr;
          }

          .about-who-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-hero-cta-group {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
            gap: 10px;
          }

          .about-btn-primary,
          .about-btn-secondary {
            justify-content: center;
            width: 100%;
            text-align: center;
          }

          .about-bottom-cta-buttons {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .about-bottom-cta-btn-gold,
          .about-bottom-cta-btn-outline {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .about-hero-title {
            font-size: 24px;
            line-height: 1.25;
          }

          .about-heading {
            font-size: 22px;
          }

          .about-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 18px;
          }

          .about-hero-img-container {
            min-height: 260px;
            max-height: none;
          }

          .about-float-card {
            padding: 6px 10px;
            font-size: 10px;
          }

          .about-float-home {
            top: 10px;
            left: 10px;
          }

          .about-float-business {
            top: 50%;
            left: 10px;
          }

          .about-float-insurance {
            top: 10px;
            right: 10px;
          }

          .about-float-docs {
            bottom: 10px;
            right: 10px;
          }

          .about-office-card {
            padding: 20px 16px;
          }

          .about-bottom-cta-card {
            padding: 24px 16px;
          }
        }

        @media (max-width: 380px) {
          .about-who-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="about-breadcrumb-bar">
        <div className="about-container">
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="about-breadcrumb-link">
              <House className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="about-breadcrumb-sep" />
            <span className="about-breadcrumb-current">About</span>
          </nav>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-container">
          <div className="about-hero-grid">
            {/* Left Column: Copy & Actions */}
            <div className="about-hero-left">
              <div className="about-hero-badge">
                <span className="about-badge-dot"></span>
                ABOUT BALAJI ASSOCIATES
              </div>

              <h1 className="about-hero-title">
                Financial Guidance Built Around Real Requirements
              </h1>

              <p className="about-hero-p">
                Balaji Associates is a Madurai-based financial-services assistance business helping customers navigate loan and insurance requirements with greater clarity. We support loan enquiries across Banks and NBFCs and insurance enquiries across Health, Motor, SME, Travel and Home protection categories, subject to the client's verified intermediary status and the products available through authorised insurers.
              </p>

              <p className="about-hero-p">
                Our work begins with a simple question: what are you actually trying to solve? A family buying a home needs a different financial route from a manufacturer purchasing machinery. A business managing cash flow may need OD or Cash Credit rather than a conventional term loan. In the same way, choosing insurance should begin with the risk that needs protection—not only the premium.
              </p>

              <div className="about-hero-cta-group">
                <Link to="/contact/" className="about-btn-primary">
                  <span>Tell Us What You Need</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a href="tel:9842817644" className="about-btn-secondary">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual with 4 Floating Cards */}
            <div className="about-hero-right">
              <div className="about-hero-pattern-dots about-dots-top" aria-hidden="true"></div>
              <div className="about-hero-pattern-dots about-dots-bottom" aria-hidden="true"></div>

              {/* Floating Card 1: Home */}
              <div className="about-float-card about-float-home">
                <House className="about-float-card-icon" />
                <span className="about-float-card-label">Home</span>
              </div>

              {/* Floating Card 2: Business */}
              <div className="about-float-card about-float-business">
                <ChartNoAxesCombined className="about-float-card-icon" />
                <span className="about-float-card-label">Business</span>
              </div>

              {/* Floating Card 3: Insurance */}
              <div className="about-float-card about-float-insurance">
                <ShieldCheck className="about-float-card-icon" />
                <span className="about-float-card-label">Insurance</span>
              </div>

              {/* Floating Card 4: Documents */}
              <div className="about-float-card about-float-docs">
                <FileText className="about-float-card-icon" />
                <span className="about-float-card-label">Documents</span>
              </div>

              {/* Dedicated Hero Image Placeholder */}
              <div className="about-hero-img-container">
                <div className="about-hero-img-placeholder">
                  <ImageIcon className="about-placeholder-icon" style={{ opacity: 0.5 }} />
                  <span className="about-hero-img-caption">
                    Financial Adviser Consultation
                  </span>
                  <span className="about-hero-img-subcaption">
                    Office setting with Madurai temple tower window backdrop
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH SECTION */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-header-row">
            <h2 className="about-heading">Our Approach</h2>
            <div className="about-gold-line"></div>
          </div>

          <div className="about-approach-grid">
            {/* Left 6 Numbered Cards (3x2 Grid) */}
            <div className="about-approach-cards-grid">
              {approachCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div key={card.number} className="about-approach-card">
                    <div className="about-approach-top">
                      <div className="about-number-badge">{card.number}</div>
                      <IconComponent className="about-approach-icon" />
                    </div>
                    <p className="about-approach-text">
                      {card.boldHighlight ? (
                        <>
                          Encourage customers to understand important terms{' '}
                          <strong>{card.boldHighlight}</strong>
                        </>
                      ) : (
                        card.text
                      )}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Approach Image Placeholder */}
            <div className="about-approach-img-container">
              <ImageIcon className="about-placeholder-icon" style={{ opacity: 0.5 }} />
              <span className="about-placeholder-label">Home Model &amp; Financial Paperwork</span>
              <span className="about-placeholder-sublabel">Adviser Consultation Setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE ASSIST SECTION */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-header-row">
            <h2 className="about-heading">Who We Assist</h2>
            <div className="about-gold-line"></div>
          </div>

          <p className="about-subtext">
            Our enquiries can include salaried employees, self-employed professionals, families, students, property owners, traders, retailers, manufacturers, service businesses, entrepreneurs, MSMEs and other eligible customers.
          </p>

          <div className="about-who-grid">
            {whoWeAssistList.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.label} className="about-who-card">
                  <IconComponent className="about-who-icon" />
                  <span className="about-who-label">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR HEAD OFFICE SECTION */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-header-row">
            <h2 className="about-heading">Our Head Office</h2>
            <div className="about-gold-line"></div>
          </div>

          <div className="about-office-grid">
            {/* Left Column: Office Information Card */}
            <div className="about-office-card">
              {/* Address Details */}
              <div className="about-office-left">
                <div className="about-office-title-row">
                  <div className="about-pin-icon-wrap">
                    <MapPin className="about-pin-icon" />
                  </div>
                  <h3 className="about-office-name">Balaji Associates</h3>
                </div>
                <p className="about-office-address">
                  Old No. 2, New No. 3, 2nd Floor,<br />
                  Kaathukandhan Thoppu Street,<br />
                  Opp. Amidhini Stores,<br />
                  Tamil Sangam Road,<br />
                  Madurai - 625001, Tamil Nadu.
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="about-office-divider"></div>

              {/* Contact Details */}
              <div className="about-office-right">
                <div className="about-contact-row">
                  <Phone className="about-contact-icon-navy" />
                  <div>
                    <div className="about-contact-label">Landline:</div>
                    <a href="tel:04524292644" className="about-contact-value about-landline-link">
                      0452-4292644
                    </a>
                  </div>
                </div>

                <div className="about-contact-row">
                  <svg
                    className="about-contact-icon-green"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <div>
                    <div className="about-contact-label">Mobile / WhatsApp:</div>
                    <a
                      href="https://wa.me/919842817644"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-contact-value about-whatsapp-link"
                    >
                      98428 17644
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Madurai Location Image Placeholder */}
            <div className="about-city-img-container">
              <div className="about-city-badge">
                <MapPin className="about-city-badge-pin" />
                <div className="about-city-badge-text">
                  <span className="about-city-name">Madurai</span>
                  <span className="about-state-name">Tamil Nadu</span>
                </div>
              </div>
              <ImageIcon className="about-placeholder-icon" style={{ opacity: 0.5 }} />
              <span className="about-placeholder-label">Madurai Temple Towers &amp; Cityscape</span>
              <span className="about-placeholder-sublabel">Warm sunset lighting with Tamil Nadu map illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST & TRANSPARENCY SECTION */}
      <section className="about-section" style={{ paddingTop: '10px' }}>
        <div className="about-container">
          <div className="about-trust-banner">
            <div className="about-trust-shield-circle">
              <ShieldCheck className="about-trust-shield-icon" />
            </div>

            <div className="about-trust-divider"></div>

            <div className="about-trust-content">
              <h3 className="about-trust-title">Trust &amp; Transparency</h3>
              <p className="about-trust-p">
                The website should clearly identify the actual lender or insurer when product-specific information is presented. Balaji Associates should not be described as the lender or insurer unless that is legally accurate. Final loan decisions are made by Banks/NBFCs; insurance underwriting, issuance, coverage and claims are governed by the insurer and policy wording.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="about-bottom-cta-section">
        <div className="about-container">
          <div className="about-bottom-cta-card">
            {/* Left: Heading and Gold Line */}
            <div className="about-bottom-cta-left">
              <h3 className="about-bottom-cta-heading">
                Your Financial Need.<br />
                The Right Guidance.
              </h3>
              <div className="about-bottom-cta-curve"></div>
            </div>

            {/* Center: Action Buttons */}
            <div className="about-bottom-cta-buttons">
              <Link to="/contact/" className="about-bottom-cta-btn-gold">
                <span>Tell Us What You Need</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a href="tel:9842817644" className="about-bottom-cta-btn-outline">
                <Phone className="w-4 h-4" />
                <span>Call / WhatsApp 98428 17644</span>
              </a>
            </div>

            {/* Right: Dedicated Property & Shield Image Placeholder */}
            <div className="about-bottom-cta-img-container">
              <ImageIcon className="about-placeholder-icon" style={{ opacity: 0.5, color: '#FFFFFF' }} />
              <span className="about-placeholder-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Property &amp; Vehicle Protection
              </span>
              <span className="about-placeholder-sublabel" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Gold Shield Emblem
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
