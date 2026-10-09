import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  House,
  ChevronRight,
  ArrowRight,
  Phone,
  Search,
  Coins,
  ShieldCheck,
  FileText,
  MapPin,
  ArrowLeftRight,
  Map,
  ClipboardList,
  SquarePen,
  RefreshCw,
  Settings,
  LockKeyhole,
  CreditCard,
  ClipboardCheck,
  GraduationCap,
  Heart,
  Clock,
  Users,
  CarFront,
  BriefcaseBusiness,
  Plane,
  Luggage,
  HeartPulse,
  Building2,
  CircleHelp,
  FolderKanban,
  ChartNoAxesCombined,
  Image as ImageIcon
} from 'lucide-react';

const loanArticles = [
  {
    id: 'loan-1',
    title: 'Home Loan Eligibility in Madurai: What Lenders Commonly Check',
    icon: House,
    badgeColor: '#16A34A',
    placeholder: 'Home / Residential Property'
  },
  {
    id: 'loan-2',
    title: 'Documents Required for a Home Loan in Tamil Nadu',
    icon: FileText,
    badgeColor: '#D97706',
    placeholder: 'Documents & Financial Paperwork'
  },
  {
    id: 'loan-3',
    title: 'Home Loan vs Loan Against Property',
    icon: ArrowLeftRight,
    badgeColor: '#16A34A',
    placeholder: 'Residential Property'
  },
  {
    id: 'loan-4',
    title: 'Land Purchase Loan vs Land + Construction Loan',
    icon: Map,
    badgeColor: '#16A34A',
    placeholder: 'Land / Residential Plot'
  },
  {
    id: 'loan-5',
    title: 'Mortgage Loan Documents: A Practical Checklist',
    icon: ClipboardList,
    badgeColor: '#16A34A',
    placeholder: 'Property Documents & House Model'
  },
  {
    id: 'loan-6',
    title: 'Business Loan vs OD vs Cash Credit',
    icon: SquarePen,
    badgeColor: '#0284C7',
    placeholder: 'Business Financial Consultation'
  },
  {
    id: 'loan-7',
    title: 'Working Capital Finance for MSMEs Explained',
    icon: RefreshCw,
    badgeColor: '#16A34A',
    placeholder: 'Working Capital Documents'
  },
  {
    id: 'loan-8',
    title: 'OD Takeover: What to Compare Before Switching',
    icon: ArrowLeftRight,
    badgeColor: '#0284C7',
    placeholder: 'Financial Documents & Review'
  },
  {
    id: 'loan-9',
    title: 'Machinery Finance for MSMEs: What Lenders Evaluate',
    icon: Settings,
    badgeColor: '#16A34A',
    placeholder: 'Industrial Machinery & Equipment'
  },
  {
    id: 'loan-10',
    title: 'CGTMSE Explained: What Business Owners Should Know',
    icon: ShieldCheck,
    badgeColor: '#16A34A',
    placeholder: 'Business Finance & Savings'
  },
  {
    id: 'loan-11',
    title: 'Secured vs Unsecured Business Finance',
    icon: LockKeyhole,
    badgeColor: '#16A34A',
    placeholder: 'Business Financial Documents'
  },
  {
    id: 'loan-12',
    title: 'How Existing EMIs Affect Loan Eligibility',
    icon: CreditCard,
    badgeColor: '#16A34A',
    placeholder: 'Calculator & Financial Paperwork'
  },
  {
    id: 'loan-13',
    title: 'Questions to Ask Before Accepting a Loan Offer',
    icon: ClipboardCheck,
    badgeColor: '#16A34A',
    placeholder: 'Person Reviewing Documents'
  },
  {
    id: 'loan-14',
    title: 'Education Loan Documents for Study in India and Abroad',
    icon: GraduationCap,
    badgeColor: '#0284C7',
    placeholder: 'Graduation Cap & Documents'
  }
];

const insuranceArticles = [
  {
    id: 'ins-1',
    title: 'How to Compare Health Insurance Beyond the Premium',
    icon: Heart,
    badgeColor: '#16A34A',
    placeholder: 'Insurance Paperwork'
  },
  {
    id: 'ins-2',
    title: 'Health Insurance Waiting Periods Explained',
    icon: Clock,
    badgeColor: '#16A34A',
    placeholder: 'Family Discussing Health Insurance'
  },
  {
    id: 'ins-3',
    title: 'Family Floater vs Individual Health Insurance: Questions to Consider',
    icon: Users,
    badgeColor: '#16A34A',
    placeholder: 'Family Consultation'
  },
  {
    id: 'ins-4',
    title: 'Third-Party vs Comprehensive Motor Insurance',
    icon: CarFront,
    badgeColor: '#16A34A',
    placeholder: 'Motor Vehicle'
  },
  {
    id: 'ins-5',
    title: 'What Is IDV in Motor Insurance?',
    icon: ShieldCheck,
    badgeColor: '#0284C7',
    placeholder: 'Insurance Policy & Document'
  },
  {
    id: 'ins-6',
    title: 'Motor Insurance Renewal Checklist',
    icon: RefreshCw,
    badgeColor: '#0284C7',
    placeholder: 'Car & Renewal Paperwork'
  },
  {
    id: 'ins-7',
    title: 'Business Insurance Checklist for Small Businesses',
    icon: BriefcaseBusiness,
    badgeColor: '#0284C7',
    placeholder: 'Business Consultation'
  },
  {
    id: 'ins-8',
    title: 'What Risks Should an SME Discuss Before Buying Insurance?',
    icon: ShieldCheck,
    badgeColor: '#16A34A',
    placeholder: 'Industrial SME Consultation'
  },
  {
    id: 'ins-9',
    title: 'Travel Insurance Checklist Before an International Trip',
    icon: Plane,
    badgeColor: '#0284C7',
    placeholder: 'Passport & Aircraft'
  },
  {
    id: 'ins-10',
    title: 'Does Travel Insurance Cover Flight Delay or Baggage Loss?',
    icon: Luggage,
    badgeColor: '#0284C7',
    placeholder: 'Airport Luggage'
  },
  {
    id: 'ins-11',
    title: 'Home Insurance: Structure vs Contents Cover',
    icon: House,
    badgeColor: '#16A34A',
    placeholder: 'Residential House'
  }
];

const loanCategoriesPromo = [
  { label: 'HOME', icon: House, color: '#D97706' },
  { label: 'PROPERTY', icon: Building2, color: '#0284C7' },
  { label: 'BUSINESS', icon: BriefcaseBusiness, color: '#16A34A' },
  { label: 'WORKING CAPITAL', icon: Coins, color: '#D97706' },
  { label: 'MACHINERY', icon: Settings, color: '#D97706' },
  { label: 'EDUCATION', icon: GraduationCap, color: '#0284C7' }
];

const insuranceCategoriesPromo = [
  { label: 'HEALTH', icon: HeartPulse, color: '#DC2626' },
  { label: 'MOTOR', icon: CarFront, color: '#16A34A' },
  { label: 'BUSINESS / SME', icon: BriefcaseBusiness, color: '#D97706' },
  { label: 'TRAVEL', icon: Plane, color: '#0284C7' },
  { label: 'HOME', icon: House, color: '#16A34A' }
];

const relatedLoanServices = [
  { label: 'Home & Property Loans', icon: House, path: '/home-property-loans/' },
  { label: 'Mortgage & Loan Against Property', icon: Building2, path: '/mortgage-loan-against-property/' },
  { label: 'Business & MSME Loans', icon: BriefcaseBusiness, path: '/business-msme-loans/' },
  { label: 'Machinery & Equipment Finance', icon: Settings, path: '/machinery-equipment-finance/' },
  { label: 'Working Capital Finance', icon: ChartNoAxesCombined, path: '/working-capital-finance/' },
  { label: 'Personal & Car Loans', icon: CarFront, path: '/personal-car-loans/' },
  { label: 'Education & Agri Finance', icon: GraduationCap, path: '/education-agri-finance/' }
];

const relatedInsuranceServices = [
  { label: 'Insurance Services', icon: FileText, path: '/insurance/' },
  { label: 'Health Insurance', icon: HeartPulse, path: '/health-insurance-madurai/' },
  { label: 'Motor Insurance', icon: CarFront, path: '/motor-insurance-madurai/' },
  { label: 'SME & Business Insurance', icon: BriefcaseBusiness, path: '/sme-business-insurance/' },
  { label: 'Travel Insurance', icon: Plane, path: '/travel-insurance-madurai/' },
  { label: 'Home Insurance', icon: House, path: '/home-insurance-madurai/' }
];

function Resources() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLoanArticles = useMemo(() => {
    if (activeFilter === 'Insurance') return [];
    if (!searchQuery.trim()) return loanArticles;
    return loanArticles.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeFilter, searchQuery]);

  const filteredInsuranceArticles = useMemo(() => {
    if (activeFilter === 'Loan') return [];
    if (!searchQuery.trim()) return insuranceArticles;
    return insuranceArticles.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeFilter, searchQuery]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="resources-page">
      <style>{`
        /* Global Page & Typography */
        .resources-page {
          background-color: #FFFFFF;
          color: #334155;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.5;
        }

        .resources-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Section Headings */
        .resources-section {
          padding: 36px 0;
        }

        .resources-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .resources-heading {
          font-size: 28px;
          font-weight: 700;
          color: #0A1B3A;
          letter-spacing: -0.2px;
          margin: 0;
          font-family: 'DM Serif Display', Georgia, serif;
        }

        .resources-gold-line {
          width: 48px;
          height: 3.5px;
          background: linear-gradient(90deg, #ECA822 0%, #D97706 100%);
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* Breadcrumb */
        .resources-breadcrumb-bar {
          background-color: #FFFFFF;
          border-bottom: 1px solid #F1F5F9;
          padding: 10px 0;
        }

        .resources-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748B;
        }

        .resources-breadcrumb-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
        }

        .resources-breadcrumb-link:hover {
          color: #0A1B3A;
        }

        .resources-breadcrumb-sep {
          width: 13px;
          height: 13px;
          color: #94A3B8;
        }

        .resources-breadcrumb-current {
          color: #0A1B3A;
          font-weight: 600;
        }

        /* HERO SECTION */
        .resources-hero-section {
          background: linear-gradient(135deg, #071329 0%, #0A1B3A 55%, #0F2856 100%);
          padding: 44px 0 52px 0;
          position: relative;
          overflow: hidden;
        }

        .resources-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 40px;
          align-items: center;
        }

        .resources-hero-left {
          display: flex;
          flex-direction: column;
        }

        .resources-hero-badge {
          color: #F59E0B;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .resources-hero-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 40px;
          line-height: 1.16;
          color: #FFFFFF;
          margin: 0 0 18px 0;
          letter-spacing: -0.4px;
        }

        .resources-hero-p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #CBD5E1;
          margin: 0;
          max-width: 580px;
        }

        /* Hero Right Visual with Floating Cards */
        .resources-hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .resources-hero-img-box {
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

        .resources-hero-float-card {
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

        .resources-hero-float-card:hover {
          transform: translateY(-2px);
        }

        .resources-hero-float-search {
          top: 14px;
          right: 20px;
          background-color: #FFFFFF;
          border-radius: 9999px;
          padding: 7px 16px;
          color: #64748B;
          font-weight: 500;
        }

        .resources-hero-float-loan {
          top: 60px;
          right: 20px;
        }

        .resources-hero-float-insurance {
          top: 106px;
          right: 20px;
        }

        .resources-hero-float-resources {
          top: 152px;
          right: 20px;
        }

        .resources-hero-float-madurai {
          bottom: 24px;
          right: 20px;
        }

        /* CATEGORY NAVIGATION & SEARCH BAR */
        .resources-controls-bar {
          background-color: #FFFFFF;
          padding: 20px 0 10px 0;
        }

        .resources-controls-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .resources-category-cards-group {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .resources-cat-card-loan {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: #0A1B3A;
          color: #FFFFFF;
          border-radius: 12px;
          padding: 10px 18px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid #0A1B3A;
          transition: all 0.2s ease;
          min-width: 170px;
        }

        .resources-cat-card-loan:hover {
          background: #10264E;
          transform: translateY(-1px);
        }

        .resources-cat-card-ins {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: #FFFFFF;
          color: #0A1B3A;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 10px 18px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(10, 27, 58, 0.03);
          transition: all 0.2s ease;
          min-width: 180px;
        }

        .resources-cat-card-ins:hover {
          border-color: #CBD5E1;
          background-color: #F8FAFC;
          transform: translateY(-1px);
        }

        .resources-cat-inner-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .resources-arrow-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .resources-search-filter-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .resources-search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 8px 14px;
          min-width: 260px;
          transition: border-color 0.2s;
        }

        .resources-search-box:focus-within {
          border-color: #0A1B3A;
        }

        .resources-search-input {
          border: none;
          outline: none;
          font-size: 13.5px;
          color: #1E293B;
          width: 100%;
          background: transparent;
        }

        .resources-filter-pills {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .resources-filter-pill {
          padding: 7px 16px;
          border-radius: 9999px;
          font-size: 12.5px;
          font-weight: 600;
          border: 1px solid #E2E8F0;
          background-color: #FFFFFF;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .resources-filter-pill.active {
          background-color: #0A1B3A;
          color: #FFFFFF;
          border-color: #0A1B3A;
        }

        .resources-filter-pill:hover:not(.active) {
          background-color: #F8FAFC;
          border-color: #CBD5E1;
        }

        /* TOPIC SECTIONS & PROMO PANELS */
        .resources-content-layout {
          display: grid;
          grid-template-columns: 1fr 200px;
          gap: 20px;
          align-items: stretch;
        }

        .resources-cards-5col {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .resources-cards-4col {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        /* Article Card */
        .resources-article-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(10, 27, 58, 0.03);
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
          position: relative;
        }

        .resources-article-card:hover {
          transform: translateY(-2px);
          border-color: #CBD5E1;
          box-shadow: 0 6px 18px rgba(10, 27, 58, 0.08);
        }

        .resources-card-img-placeholder {
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
          height: 110px;
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .resources-card-icon-badge {
          position: absolute;
          bottom: -14px;
          left: 12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .resources-card-body {
          padding: 20px 12px 14px 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }

        .resources-card-title {
          font-size: 12.5px;
          font-weight: 700;
          color: #0A1B3A;
          line-height: 1.35;
          margin: 0 0 10px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .resources-card-arrow-row {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .resources-card-arrow {
          width: 14px;
          height: 14px;
          color: #0284C7;
          transition: transform 0.2s;
        }

        .resources-article-card:hover .resources-card-arrow {
          transform: translateX(2px);
        }

        /* Tall Promo Panels (Right side) */
        .resources-promo-panel {
          background: linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%);
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(10, 27, 58, 0.03);
        }

        .resources-promo-badge {
          background-color: #0A1B3A;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          padding: 6px 14px;
          border-radius: 9999px;
          text-align: center;
          margin-bottom: 16px;
          box-shadow: 0 2px 8px rgba(10, 27, 58, 0.2);
        }

        .resources-promo-categories {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          margin-top: auto;
          z-index: 2;
        }

        .resources-promo-cat-pill {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 7px 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 2px 6px rgba(10, 27, 58, 0.04);
          font-size: 10.5px;
          font-weight: 700;
          color: #0A1B3A;
          letter-spacing: 0.2px;
        }

        /* RESOURCE PROCESS BANNER */
        .resources-process-banner {
          background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%);
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 4px 16px rgba(10, 27, 58, 0.03);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 24px;
          margin: 16px 0;
        }

        .resources-process-img-left,
        .resources-process-img-right {
          background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%);
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 12px;
        }

        .resources-process-icons-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .resources-process-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(10, 27, 58, 0.1);
        }

        .resources-process-circle-navy {
          background-color: #0A1B3A;
          color: #FFFFFF;
        }

        .resources-process-circle-green {
          background-color: #16A34A;
          color: #FFFFFF;
        }

        .resources-process-arrow {
          width: 18px;
          height: 18px;
          color: #0284C7;
        }

        /* RELATED SERVICE PAGES */
        .resources-related-grid-loans {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
          margin-bottom: 12px;
        }

        .resources-related-grid-insurance {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
        }

        .resources-service-card {
          background-color: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          gap: 8px;
          box-shadow: 0 2px 6px rgba(10, 27, 58, 0.02);
          transition: all 0.2s ease;
        }

        .resources-service-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 4px 12px rgba(10, 27, 58, 0.06);
          transform: translateY(-1px);
        }

        .resources-service-card-left {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .resources-service-card-icon {
          width: 16px;
          height: 16px;
          color: #0A1B3A;
          flex-shrink: 0;
        }

        .resources-service-card-title {
          font-size: 11.5px;
          font-weight: 600;
          color: #0A1B3A;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .resources-service-card-arrow {
          width: 12px;
          height: 12px;
          color: #0284C7;
          flex-shrink: 0;
        }

        /* BOTTOM CTA BANNER */
        .resources-bottom-cta-section {
          padding: 30px 0 20px 0;
        }

        .resources-bottom-cta-card {
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

        .resources-bottom-cta-phone-icon {
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

        .resources-bottom-cta-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .resources-bottom-cta-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 22px;
          line-height: 1.3;
          color: #FFFFFF;
          margin: 0;
        }

        .resources-bottom-cta-phone-link {
          color: #FFFFFF;
          text-decoration: none;
        }

        .resources-bottom-cta-phone-link:hover {
          text-decoration: underline;
        }

        .resources-bottom-cta-arrow-btn {
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

        .resources-bottom-cta-arrow-btn:hover {
          transform: scale(1.05);
        }

        .resources-bottom-cta-img-placeholder {
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

        /* DISCLAIMER STRIPS */
        .resources-disclaimers-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 10px 0 36px 0;
        }

        .resources-disclaimer-card {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .resources-disclaimer-shield {
          width: 22px;
          height: 22px;
          color: #0A1B3A;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .resources-disclaimer-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .resources-disclaimer-heading {
          font-size: 13.5px;
          font-weight: 700;
          color: #0A1B3A;
          margin: 0;
        }

        .resources-disclaimer-text {
          font-size: 11.5px;
          line-height: 1.55;
          color: #64748B;
          margin: 0;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1180px) {
          .resources-cards-5col {
            grid-template-columns: repeat(4, 1fr);
          }
          .resources-related-grid-loans {
            grid-template-columns: repeat(4, 1fr);
          }
          .resources-related-grid-insurance {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .resources-hero-grid {
            grid-template-columns: 1fr;
          }
          .resources-content-layout {
            grid-template-columns: 1fr;
          }
          .resources-promo-panel {
            flex-direction: row;
            justify-content: space-between;
            min-height: auto;
          }
          .resources-promo-categories {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .resources-cards-5col,
          .resources-cards-4col {
            grid-template-columns: repeat(3, 1fr);
          }
          .resources-bottom-cta-card {
            grid-template-columns: auto 1fr auto;
          }
          .resources-bottom-cta-img-placeholder {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .resources-container {
            padding: 0 16px;
          }

          .resources-breadcrumb {
            flex-wrap: wrap;
            row-gap: 4px;
          }

          .resources-cards-5col,
          .resources-cards-4col {
            grid-template-columns: repeat(2, 1fr);
          }
          .resources-related-grid-loans,
          .resources-related-grid-insurance {
            grid-template-columns: repeat(2, 1fr);
          }
          .resources-process-banner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .resources-process-icons-row {
            justify-content: center;
          }
          .resources-disclaimers-row {
            grid-template-columns: 1fr;
          }
          .resources-controls-flex {
            flex-direction: column;
            align-items: stretch;
          }
          .resources-category-cards-group {
            flex-direction: column;
            width: 100%;
          }
          .resources-cat-card-loan,
          .resources-cat-card-ins {
            width: 100%;
          }
          .resources-search-filter-group {
            flex-direction: column;
            width: 100%;
          }
          .resources-search-box {
            width: 100%;
          }
          .resources-filter-pills {
            width: 100%;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 8px;
          }
          .resources-hero-title {
            font-size: 32px;
          }
          .resources-bottom-cta-card {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 16px;
          }
          .resources-bottom-cta-phone-icon,
          .resources-bottom-cta-arrow-btn {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .resources-section {
            padding: 32px 0;
          }

          .resources-hero-title {
            font-size: 24px;
            line-height: 1.25;
          }

          .resources-hero-img-box {
            min-height: 250px;
            padding: 16px;
          }

          .resources-hero-float-card {
            padding: 6px 10px;
            font-size: 10px;
          }

          .resources-hero-float-search {
            top: 10px;
            right: 10px;
          }

          .resources-hero-float-docs {
            bottom: 10px;
            left: 10px;
          }

          .resources-hero-float-tag {
            top: 50%;
            right: 10px;
          }

          .resources-cards-5col,
          .resources-cards-4col {
            grid-template-columns: 1fr;
          }

          .resources-related-grid-loans,
          .resources-related-grid-insurance {
            grid-template-columns: 1fr;
          }

          .resources-bottom-cta-card {
            padding: 24px 16px;
          }
        }
      `}</style>

      {/* 1. BREADCRUMB */}
      <div className="resources-breadcrumb-bar">
        <div className="resources-container">
          <nav className="resources-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="resources-breadcrumb-link">
              <House className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="resources-breadcrumb-sep" />
            <span className="resources-breadcrumb-current">Resources</span>
          </nav>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="resources-hero-section">
        <div className="resources-container">
          <div className="resources-hero-grid">
            {/* Left Column */}
            <div className="resources-hero-left">
              <div className="resources-hero-badge">
                <span>&rsaquo;</span> RESOURCES / GUIDES
              </div>

              <h1 className="resources-hero-title">
                Practical Loan &amp; Insurance Guides
              </h1>

              <p className="resources-hero-p">
                The Resources section should become the traffic engine behind the service pages. Articles must answer real questions in plain language, link to the relevant service page and be reviewed when rules or products change. Avoid publishing generic AI-written articles simply to hit a word count.
              </p>
            </div>

            {/* Right Column: Hero Visual with 5 Floating Cards */}
            <div className="resources-hero-right">
              {/* Floating Card 1: Search resources */}
              <div className="resources-hero-float-card resources-hero-float-search">
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span>Search resources</span>
              </div>

              {/* Floating Card 2: Loan Guides */}
              <div className="resources-hero-float-card resources-hero-float-loan">
                <Coins className="w-4 h-4 text-amber-500" />
                <span>Loan Guides</span>
              </div>

              {/* Floating Card 3: Insurance Guides */}
              <div className="resources-hero-float-card resources-hero-float-insurance">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Insurance Guides</span>
              </div>

              {/* Floating Card 4: Resources */}
              <div className="resources-hero-float-card resources-hero-float-resources">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Resources</span>
              </div>

              {/* Floating Card 5: Madurai */}
              <div className="resources-hero-float-card resources-hero-float-madurai">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Madurai</span>
              </div>

              {/* Dedicated Hero Image Placeholder */}
              <div className="resources-hero-img-box">
                <ImageIcon className="w-10 h-10 text-slate-400 mb-2 opacity-50" />
                <span className="text-white text-xs font-semibold">
                  Professional Financial Consultation
                </span>
                <span className="text-slate-300 text-[11px] mt-1">
                  Reviewing laptop with Madurai temple backdrop
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY NAVIGATION & SEARCH */}
      <section className="resources-controls-bar">
        <div className="resources-container">
          <div className="resources-controls-flex">
            {/* Left: Category Navigation Cards */}
            <div className="resources-category-cards-group">
              <button
                type="button"
                className="resources-cat-card-loan"
                onClick={() => {
                  setActiveFilter('Loan');
                  scrollToSection('priority-loan-topics');
                }}
              >
                <div className="resources-cat-inner-left">
                  <Coins className="w-4 h-4 text-amber-400" />
                  <span>Loan Guides</span>
                </div>
                <div className="resources-arrow-circle bg-amber-500 text-slate-900">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>

              <button
                type="button"
                className="resources-cat-card-ins"
                onClick={() => {
                  setActiveFilter('Insurance');
                  scrollToSection('priority-insurance-topics');
                }}
              >
                <div className="resources-cat-inner-left">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Insurance Guides</span>
                </div>
                <div className="resources-arrow-circle bg-emerald-600 text-white">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            </div>

            {/* Right: Search Input & Filter Pills */}
            <div className="resources-search-filter-group">
              <div className="resources-search-box">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search resources"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="resources-search-input"
                />
              </div>

              <div className="resources-filter-pills">
                <button
                  type="button"
                  className={`resources-filter-pill ${activeFilter === 'All' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('All')}
                >
                  All
                </button>
                <button
                  type="button"
                  className={`resources-filter-pill ${activeFilter === 'Loan' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('Loan')}
                >
                  Loan
                </button>
                <button
                  type="button"
                  className={`resources-filter-pill ${activeFilter === 'Insurance' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('Insurance')}
                >
                  Insurance
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRIORITY LOAN TOPICS */}
      {filteredLoanArticles.length > 0 && (
        <section className="resources-section" id="priority-loan-topics">
          <div className="resources-container">
            <div className="resources-header-row">
              <h2 className="resources-heading">Priority Loan Topics</h2>
              <div className="resources-gold-line"></div>
            </div>

            <div className="resources-content-layout">
              {/* Left: Loan Articles Grid (5 columns on desktop) */}
              <div className="resources-cards-5col">
                {filteredLoanArticles.map((article) => {
                  const IconComp = article.icon;
                  return (
                    <div key={article.id} className="resources-article-card">
                      {/* Top Image Placeholder */}
                      <div className="resources-card-img-placeholder">
                        <ImageIcon className="w-6 h-6 text-slate-400 opacity-40 mb-1" />
                        <span className="text-[10px] text-slate-400 text-center px-1 font-medium">
                          {article.placeholder}
                        </span>
                        {/* Overlapping Icon Badge */}
                        <div className="resources-card-icon-badge">
                          <IconComp className="w-4 h-4 text-slate-800" />
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="resources-card-body">
                        <h3 className="resources-card-title">{article.title}</h3>
                        <div className="resources-card-arrow-row">
                          <ArrowRight className="resources-card-arrow" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right: Tall Loan Guides Promotional Image Panel */}
              <div className="resources-promo-panel">
                <div className="resources-promo-badge">LOAN GUIDES</div>

                <div className="flex flex-col items-center justify-center my-auto py-4 text-center">
                  <ImageIcon className="w-8 h-8 text-slate-400 opacity-40 mb-2" />
                  <span className="text-[11px] text-slate-500 font-semibold px-2">
                    Property &amp; Madurai Temple
                  </span>
                  <span className="text-[9.5px] text-slate-400 mt-1">
                    Financial Protection
                  </span>
                </div>

                <div className="resources-promo-categories">
                  {loanCategoriesPromo.map((cat) => {
                    const CatIcon = cat.icon;
                    return (
                      <div key={cat.label} className="resources-promo-cat-pill">
                        <CatIcon className="w-3.5 h-3.5" style={{ color: cat.color }} />
                        <span>{cat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. PRIORITY INSURANCE TOPICS */}
      {filteredInsuranceArticles.length > 0 && (
        <section className="resources-section" id="priority-insurance-topics">
          <div className="resources-container">
            <div className="resources-header-row">
              <h2 className="resources-heading">Priority Insurance Topics</h2>
              <div className="resources-gold-line"></div>
            </div>

            <div className="resources-content-layout">
              {/* Left: Insurance Articles Grid (4 columns on desktop) */}
              <div className="resources-cards-4col">
                {filteredInsuranceArticles.map((article) => {
                  const IconComp = article.icon;
                  return (
                    <div key={article.id} className="resources-article-card">
                      {/* Top Image Placeholder */}
                      <div className="resources-card-img-placeholder">
                        <ImageIcon className="w-6 h-6 text-slate-400 opacity-40 mb-1" />
                        <span className="text-[10px] text-slate-400 text-center px-1 font-medium">
                          {article.placeholder}
                        </span>
                        {/* Overlapping Icon Badge */}
                        <div className="resources-card-icon-badge">
                          <IconComp className="w-4 h-4 text-slate-800" />
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="resources-card-body">
                        <h3 className="resources-card-title">{article.title}</h3>
                        <div className="resources-card-arrow-row">
                          <ArrowRight className="resources-card-arrow" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right: Tall Insurance Guides Promotional Image Panel */}
              <div className="resources-promo-panel">
                <div className="resources-promo-badge">INSURANCE GUIDES</div>

                <div className="flex flex-col items-center justify-center my-auto py-4 text-center">
                  <ImageIcon className="w-8 h-8 text-slate-400 opacity-40 mb-2" />
                  <span className="text-[11px] text-slate-500 font-semibold px-2">
                    Insurance Protection
                  </span>
                  <span className="text-[9.5px] text-slate-400 mt-1">
                    Shield &amp; Temple Backdrop
                  </span>
                </div>

                <div className="resources-promo-categories">
                  {insuranceCategoriesPromo.map((cat) => {
                    const CatIcon = cat.icon;
                    return (
                      <div key={cat.label} className="resources-promo-cat-pill">
                        <CatIcon className="w-3.5 h-3.5" style={{ color: cat.color }} />
                        <span>{cat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. RESOURCE PROCESS BANNER */}
      <section className="resources-container">
        <div className="resources-process-banner">
          {/* Left Photograph Placeholder */}
          <div className="resources-process-img-left">
            <ImageIcon className="w-6 h-6 text-slate-400 opacity-50 mb-1" />
            <span className="text-[11px] text-slate-600 font-semibold">
              Desk &amp; Financial Paperwork
            </span>
          </div>

          {/* Central Connecting Icons */}
          <div className="resources-process-icons-row">
            <div className="resources-process-circle resources-process-circle-navy">
              <CircleHelp className="w-5 h-5 text-white" />
            </div>

            <ArrowRight className="resources-process-arrow" />

            <div className="resources-process-circle resources-process-circle-green">
              <FileText className="w-5 h-5 text-white" />
            </div>

            <ArrowRight className="resources-process-arrow" />

            <div className="resources-process-circle resources-process-circle-green">
              <FolderKanban className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Right Photograph Placeholder */}
          <div className="resources-process-img-right">
            <ImageIcon className="w-6 h-6 text-slate-400 opacity-50 mb-1" />
            <span className="text-[11px] text-slate-600 font-semibold">
              Professional on Laptop
            </span>
            <span className="text-[9.5px] text-slate-400">Madurai backdrop</span>
          </div>
        </div>
      </section>

      {/* 7. RELATED SERVICE PAGES */}
      <section className="resources-section">
        <div className="resources-container">
          <div className="resources-header-row">
            <h2 className="resources-heading">Related Service Pages</h2>
            <div className="resources-gold-line"></div>
          </div>

          {/* Row 1: Loan Service Cards (7 cards) */}
          <div className="resources-related-grid-loans">
            {relatedLoanServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Link key={service.label} to={service.path} className="resources-service-card">
                  <div className="resources-service-card-left">
                    <ServiceIcon className="resources-service-card-icon" />
                    <span className="resources-service-card-title">{service.label}</span>
                  </div>
                  <ArrowRight className="resources-service-card-arrow" />
                </Link>
              );
            })}
          </div>

          {/* Row 2: Insurance Service Cards (6 cards) */}
          <div className="resources-related-grid-insurance">
            {relatedInsuranceServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Link key={service.label} to={service.path} className="resources-service-card">
                  <div className="resources-service-card-left">
                    <ServiceIcon className="resources-service-card-icon" />
                    <span className="resources-service-card-title">{service.label}</span>
                  </div>
                  <ArrowRight className="resources-service-card-arrow" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="resources-bottom-cta-section">
        <div className="resources-container">
          <div className="resources-bottom-cta-card">
            {/* Circular Gold Phone Icon */}
            <div className="resources-bottom-cta-phone-icon">
              <Phone className="w-6 h-6" />
            </div>

            {/* Title & Phone/WhatsApp Details */}
            <div className="resources-bottom-cta-text-wrap">
              <h3 className="resources-bottom-cta-title">
                Discuss Your Requirement |{' '}
                <a href="tel:9842817644" className="resources-bottom-cta-phone-link">
                  Call / WhatsApp 98428 17644
                </a>
              </h3>
            </div>

            {/* Gold Circular Arrow Button */}
            <a
              href="tel:9842817644"
              className="resources-bottom-cta-arrow-btn"
              aria-label="Call or WhatsApp"
            >
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Right-Side Photo Placeholder */}
            <div className="resources-bottom-cta-img-placeholder">
              <ImageIcon className="w-6 h-6 text-white opacity-40 mb-1" />
              <span className="text-[10px] text-white/70 font-semibold">
                Financial Consultation
              </span>
              <span className="text-[9px] text-white/40">Madurai Temple Backdrop</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOAN AND INSURANCE DISCLAIMER STRIPS */}
      <section className="resources-container">
        <div className="resources-disclaimers-row">
          {/* Loan Disclaimer */}
          <div className="resources-disclaimer-card">
            <ShieldCheck className="resources-disclaimer-shield" />
            <div className="resources-disclaimer-content">
              <h4 className="resources-disclaimer-heading">Loan Disclaimer</h4>
              <p className="resources-disclaimer-text">
                Balaji Associates provides loan consultancy/application assistance. Loan approval, eligible amount, rate of interest, tenure, security requirements and disbursement are subject to the respective Bank/NBFC's policies, documentation, credit assessment and applicable terms.
              </p>
            </div>
          </div>

          {/* Insurance Disclaimer */}
          <div className="resources-disclaimer-card">
            <ShieldCheck className="resources-disclaimer-shield" />
            <div className="resources-disclaimer-content">
              <h4 className="resources-disclaimer-heading">Insurance Disclaimer</h4>
              <p className="resources-disclaimer-text">
                Insurance is the subject matter of solicitation. Balaji Associates' exact insurance intermediary/agent status, licence/registration number and authorised insurer relationships must be displayed as legally required. Coverage, premium, underwriting, exclusions, waiting periods, deductibles, add-ons and claims are governed by the respective insurer and policy wording. Read the policy document carefully before publication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
