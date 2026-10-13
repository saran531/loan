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

// Resources Page Image Assets - Main / Banners
import heroImg from '../assets/images/Resources/Resources_right_side.png';
import loanGuidesImg from '../assets/images/Resources/Loan_Guides.png';
import insuranceGuidesImg from '../assets/images/Resources/Insurance_Guides.png';
import processBannerImg from '../assets/images/Resources/Documents.png';
import requirementCtaImg from '../assets/images/Resources/Requirement.png';

// Priority Loan Topics Images
import loanImg1 from '../assets/images/Resources/file_00000000ea1c82119a8bae0ca0989bf6.png'; // Home Loan Eligibility
import loanImg2 from '../assets/images/Resources/file_00000000d3788207b6587d4ea3685806.png'; // Documents Required for a Home Loan
import loanImg3 from '../assets/images/Resources/file_000000009df082118c288270777599fd.png'; // Home Loan vs LAP
import loanImg4 from '../assets/images/Resources/file_00000000b9248211980122d6624a218a.png'; // Land Purchase Loan vs Land + Construction
import loanImg5 from '../assets/images/Resources/file_00000000891c8230b37572b11336f59c.png'; // Mortgage Loan Documents Checklist
import loanImg6 from '../assets/images/Resources/file_00000000c72481f9810e497b093ae8f7.png'; // Business Loan vs OD vs CC
import loanImg7 from '../assets/images/Resources/file_000000007d9c821187413c4daf490008.png'; // Working Capital Finance for MSMEs
import loanImg8 from '../assets/images/Resources/file_0000000074c48246b90c382be0bfd861.png'; // OD Takeover
import loanImg9 from '../assets/images/Resources/file_0000000002e48211a2895b535fd6d392.png'; // Machinery Finance
import loanImg10 from '../assets/images/Resources/file_000000006c9481f5bcca99895faff5b5.png'; // CGTMSE Explained
import loanImg11 from '../assets/images/Resources/file_00000000f7488211a1a8ca98b2be3898.png'; // Secured vs Unsecured Business Finance
import loanImg12 from '../assets/images/Resources/file_00000000e47881f49c13c70d9ec3cd95.png'; // How Existing EMIs Affect Loan Eligibility
import loanImg13 from '../assets/images/Resources/file_00000000fe448210928de645416db917.png'; // Questions to Ask Before Accepting
import loanImg14 from '../assets/images/Resources/file_000000008a9081f4926e536a404fab30.png'; // Education Loan Documents

// Priority Insurance Topics Images
import insImg1 from '../assets/images/Resources/file_00000000ee1c8207ac14332b1a1a2ae6.png'; // How to Compare Health Insurance
import insImg2 from '../assets/images/Resources/file_0000000091288208a0305f6386c570a0.png'; // Health Insurance Waiting Periods
import insImg3 from '../assets/images/Resources/file_00000000b4d48211815ba929fcd5fc49.png'; // Family Floater vs Individual Health
import insImg4 from '../assets/images/Resources/file_00000000a7b48208b922cf131ba97cd0.png'; // Third-Party vs Comprehensive Motor
import insImg5 from '../assets/images/Resources/file_000000002ba88208aadb5248c3fafb7f.png'; // What Is IDV in Motor Insurance
import insImg6 from '../assets/images/Resources/file_00000000cacc821194423fd8cc0ce64b.png'; // Motor Insurance Renewal Checklist
import insImg7 from '../assets/images/Resources/file_00000000338882088926ffaf5a54b0e6.png'; // Business Insurance Checklist
import insImg8 from '../assets/images/Resources/file_000000000cd88211b02e15ab644689f0.png'; // What Risks Should an SME Discuss
import insImg9 from '../assets/images/Resources/Travel Insurance Passport and Airplane.png'; // Travel Insurance Checklist
import insImg10 from '../assets/images/Resources/Blue and Black Luggage at Airport.png'; // Flight Delay or Baggage Loss
import insImg11 from '../assets/images/Resources/Twilight Luxury Villa Entrance.png'; // Home Insurance Structure vs Contents

const loanArticles = [
  {
    id: 'loan-1',
    title: 'Home Loan Eligibility in Madurai: What Lenders Commonly Check',
    icon: House,
    badgeColor: '#16A34A',
    placeholder: 'Home / Residential Property',
    image: loanImg1
  },
  {
    id: 'loan-2',
    title: 'Documents Required for a Home Loan in Tamil Nadu',
    icon: FileText,
    badgeColor: '#D97706',
    placeholder: 'Documents & Financial Paperwork',
    image: loanImg2
  },
  {
    id: 'loan-3',
    title: 'Home Loan vs Loan Against Property',
    icon: ArrowLeftRight,
    badgeColor: '#16A34A',
    placeholder: 'Residential Property',
    image: loanImg3
  },
  {
    id: 'loan-4',
    title: 'Land Purchase Loan vs Land + Construction Loan',
    icon: Map,
    badgeColor: '#16A34A',
    placeholder: 'Land / Residential Plot',
    image: loanImg4
  },
  {
    id: 'loan-5',
    title: 'Mortgage Loan Documents: A Practical Checklist',
    icon: ClipboardList,
    badgeColor: '#16A34A',
    placeholder: 'Property Documents & House Model',
    image: loanImg5
  },
  {
    id: 'loan-6',
    title: 'Business Loan vs OD vs Cash Credit',
    icon: SquarePen,
    badgeColor: '#0284C7',
    placeholder: 'Business Financial Consultation',
    image: loanImg6
  },
  {
    id: 'loan-7',
    title: 'Working Capital Finance for MSMEs Explained',
    icon: RefreshCw,
    badgeColor: '#16A34A',
    placeholder: 'Working Capital Documents',
    image: loanImg7
  },
  {
    id: 'loan-8',
    title: 'OD Takeover: What to Compare Before Switching',
    icon: ArrowLeftRight,
    badgeColor: '#0284C7',
    placeholder: 'Financial Documents & Review',
    image: loanImg8
  },
  {
    id: 'loan-9',
    title: 'Machinery Finance for MSMEs: What Lenders Evaluate',
    icon: Settings,
    badgeColor: '#16A34A',
    placeholder: 'Industrial Machinery & Equipment',
    image: loanImg9
  },
  {
    id: 'loan-10',
    title: 'CGTMSE Explained: What Business Owners Should Know',
    icon: ShieldCheck,
    badgeColor: '#16A34A',
    placeholder: 'Business Finance & Savings',
    image: loanImg10
  },
  {
    id: 'loan-11',
    title: 'Secured vs Unsecured Business Finance',
    icon: LockKeyhole,
    badgeColor: '#16A34A',
    placeholder: 'Business Financial Documents',
    image: loanImg11
  },
  {
    id: 'loan-12',
    title: 'How Existing EMIs Affect Loan Eligibility',
    icon: CreditCard,
    badgeColor: '#16A34A',
    placeholder: 'Calculator & Financial Paperwork',
    image: loanImg12
  },
  {
    id: 'loan-13',
    title: 'Questions to Ask Before Accepting a Loan Offer',
    icon: ClipboardCheck,
    badgeColor: '#16A34A',
    placeholder: 'Person Reviewing Documents',
    image: loanImg13
  },
  {
    id: 'loan-14',
    title: 'Education Loan Documents for Study in India and Abroad',
    icon: GraduationCap,
    badgeColor: '#0284C7',
    placeholder: 'Graduation Cap & Documents',
    image: loanImg14
  }
];

const insuranceArticles = [
  {
    id: 'ins-1',
    title: 'How to Compare Health Insurance Beyond the Premium',
    icon: Heart,
    badgeColor: '#16A34A',
    placeholder: 'Insurance Paperwork',
    image: insImg1
  },
  {
    id: 'ins-2',
    title: 'Health Insurance Waiting Periods Explained',
    icon: Clock,
    badgeColor: '#16A34A',
    placeholder: 'Family Discussing Health Insurance',
    image: insImg2
  },
  {
    id: 'ins-3',
    title: 'Family Floater vs Individual Health Insurance: Questions to Consider',
    icon: Users,
    badgeColor: '#16A34A',
    placeholder: 'Family Consultation',
    image: insImg3
  },
  {
    id: 'ins-4',
    title: 'Third-Party vs Comprehensive Motor Insurance',
    icon: CarFront,
    badgeColor: '#16A34A',
    placeholder: 'Motor Vehicle',
    image: insImg4
  },
  {
    id: 'ins-5',
    title: 'What Is IDV in Motor Insurance?',
    icon: ShieldCheck,
    badgeColor: '#0284C7',
    placeholder: 'Insurance Policy & Document',
    image: insImg5
  },
  {
    id: 'ins-6',
    title: 'Motor Insurance Renewal Checklist',
    icon: RefreshCw,
    badgeColor: '#0284C7',
    placeholder: 'Car & Renewal Paperwork',
    image: insImg6
  },
  {
    id: 'ins-7',
    title: 'Business Insurance Checklist for Small Businesses',
    icon: BriefcaseBusiness,
    badgeColor: '#0284C7',
    placeholder: 'Business Consultation',
    image: insImg7
  },
  {
    id: 'ins-8',
    title: 'What Risks Should an SME Discuss Before Buying Insurance?',
    icon: ShieldCheck,
    badgeColor: '#16A34A',
    placeholder: 'Industrial SME Consultation',
    image: insImg8
  },
  {
    id: 'ins-9',
    title: 'Travel Insurance Checklist Before an International Trip',
    icon: Plane,
    badgeColor: '#0284C7',
    placeholder: 'Passport & Aircraft',
    image: insImg9
  },
  {
    id: 'ins-10',
    title: 'Does Travel Insurance Cover Flight Delay or Baggage Loss?',
    icon: Luggage,
    badgeColor: '#0284C7',
    placeholder: 'Airport Luggage',
    image: insImg10
  },
  {
    id: 'ins-11',
    title: 'Home Insurance: Structure vs Contents Cover',
    icon: House,
    badgeColor: '#16A34A',
    placeholder: 'Residential House',
    image: insImg11
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

        /* Hero Right Visual */
        .resources-hero-right {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .resources-hero-img-box {
          position: relative;
          width: 100%;
          max-width: 580px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.12);
          line-height: 0;
        }

        .resources-hero-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: cover;
          display: block;
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
          gap: 20px;
          align-items: stretch;
        }

        .resources-content-layout-loan {
          grid-template-columns: 1fr 290px;
        }

        .resources-content-layout-insurance {
          grid-template-columns: 1fr 320px;
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

        .resources-card-img-box {
          height: 110px;
          width: 100%;
          position: relative;
          background: #F1F5F9;
          overflow: visible;
        }

        .resources-card-img {
          width: 100%;
          height: 110px;
          object-fit: cover;
          display: block;
          border-top-left-radius: 11px;
          border-top-right-radius: 11px;
        }

        .resources-card-icon-badge {
          position: absolute;
          bottom: -14px;
          left: 12px;
          width: 30px;
          height: 30px;
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
          padding: 22px 12px 14px 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }

        .resources-card-title {
          font-size: 12px;
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
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(10, 27, 58, 0.05);
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          height: 100%;
          box-sizing: border-box;
          padding: 0;
        }

        .resources-promo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          border-radius: 13px;
        }

        /* RESOURCE PROCESS BANNER */
        .resources-process-banner {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(10, 27, 58, 0.04);
          margin: 18px 0 24px 0;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          line-height: 0;
        }

        .resources-process-banner-img {
          width: 100%;
          height: auto;
          max-height: 190px;
          object-fit: cover;
          object-position: center;
          display: block;
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
          padding: 16px 20px 16px 32px;
          display: grid;
          grid-template-columns: auto 1fr auto minmax(280px, 490px);
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
          min-width: 0;
        }

        .resources-bottom-cta-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 21px;
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

        .resources-bottom-cta-img-box {
          height: 88px;
          width: 100%;
          max-width: 490px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
        }

        .resources-bottom-cta-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          border-radius: 12px;
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
          .resources-content-layout-loan {
            grid-template-columns: 1fr 270px;
          }
          .resources-content-layout-insurance {
            grid-template-columns: 1fr 290px;
          }
          .resources-bottom-cta-card {
            grid-template-columns: auto 1fr auto minmax(240px, 380px);
            padding: 16px 20px 16px 24px;
            gap: 16px;
          }
          .resources-bottom-cta-img-box {
            max-width: 380px;
            height: 70px;
          }
          .resources-bottom-cta-title {
            font-size: 19px;
          }
        }

        @media (max-width: 1024px) {
          .resources-hero-grid {
            grid-template-columns: 1fr;
          }
          .resources-content-layout,
          .resources-content-layout-loan,
          .resources-content-layout-insurance {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .resources-promo-panel {
            display: flex;
            max-width: 340px;
            width: 100%;
            margin: 0 auto;
            min-height: auto;
          }
          .resources-promo-img {
            max-height: 540px;
            object-fit: contain;
          }
          .resources-cards-5col,
          .resources-cards-4col {
            grid-template-columns: repeat(3, 1fr);
          }
          .resources-bottom-cta-card {
            grid-template-columns: auto 1fr auto;
            padding: 20px 24px;
            gap: 16px;
          }
          .resources-bottom-cta-img-box {
            grid-column: 1 / -1;
            max-width: 100%;
            height: auto;
            max-height: 90px;
            margin: 8px auto 0 auto;
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
            padding: 24px 16px;
          }
          .resources-bottom-cta-phone-icon,
          .resources-bottom-cta-arrow-btn {
            margin: 0 auto;
          }
          .resources-bottom-cta-img-box {
            max-width: 100%;
            height: auto;
            max-height: 80px;
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

          .resources-cards-5col,
          .resources-cards-4col {
            grid-template-columns: 1fr;
          }

          .resources-related-grid-loans,
          .resources-related-grid-insurance {
            grid-template-columns: 1fr;
          }

          .resources-bottom-cta-card {
            padding: 20px 14px;
          }

          .resources-bottom-cta-title {
            font-size: 18px;
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

            {/* Right Column: Hero Visual */}
            <div className="resources-hero-right">
              <div className="resources-hero-img-box">
                <img
                  src={heroImg}
                  alt="Practical Loan & Insurance Guides - Balaji Associates"
                  className="resources-hero-img"
                />
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

            <div className="resources-content-layout resources-content-layout-loan">
              {/* Left: Loan Articles Grid (5 columns on desktop) */}
              <div className="resources-cards-5col">
                {filteredLoanArticles.map((article) => {
                  const IconComp = article.icon;
                  return (
                    <div key={article.id} className="resources-article-card">
                      {/* Top Card Image */}
                      <div className="resources-card-img-box">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="resources-card-img"
                          loading="lazy"
                        />
                        {/* Overlapping Icon Badge */}
                        <div className="resources-card-icon-badge">
                          <IconComp className="w-4 h-4 text-emerald-600" />
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
                <img
                  src={loanGuidesImg}
                  alt="Balaji Associates Loan Guides"
                  className="resources-promo-img"
                />
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

            <div className="resources-content-layout resources-content-layout-insurance">
              {/* Left: Insurance Articles Grid (4 columns on desktop) */}
              <div className="resources-cards-4col">
                {filteredInsuranceArticles.map((article) => {
                  const IconComp = article.icon;
                  return (
                    <div key={article.id} className="resources-article-card">
                      {/* Top Card Image */}
                      <div className="resources-card-img-box">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="resources-card-img"
                          loading="lazy"
                        />
                        {/* Overlapping Icon Badge */}
                        <div className="resources-card-icon-badge">
                          <IconComp className="w-4 h-4 text-emerald-600" />
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
                <img
                  src={insuranceGuidesImg}
                  alt="Balaji Associates Insurance Guides"
                  className="resources-promo-img"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. RESOURCE PROCESS BANNER */}
      <section className="resources-container">
        <div className="resources-process-banner">
          <img
            src={processBannerImg}
            alt="Balaji Associates Consultation and Documentation Process"
            className="resources-process-banner-img"
          />
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

            {/* Right-Side Photo */}
            <div className="resources-bottom-cta-img-box">
              <img
                src={requirementCtaImg}
                alt="Discuss Your Requirement with Balaji Associates"
                className="resources-bottom-cta-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOAN AND INSURANCE DISCLAIMER STRIPS */}
      <section className="resources-container">
        <div className="resources-disclaimers-row">
          {/* Loan Disclaimer */}
          <div className="resources-disclaimer-card">
            <ShieldCheck className="resources-disclaimer-shield text-sky-600" />
            <div className="resources-disclaimer-content">
              <h4 className="resources-disclaimer-heading">Loan Disclaimer</h4>
              <p className="resources-disclaimer-text">
                Balaji Associates provides loan consultancy/application assistance. Loan approval, eligible amount, rate of interest, tenure, security requirements and disbursement are subject to the respective Bank/NBFC's policies, documentation, credit assessment and applicable terms.
              </p>
            </div>
          </div>

          {/* Insurance Disclaimer */}
          <div className="resources-disclaimer-card">
            <ShieldCheck className="resources-disclaimer-shield text-slate-800" />
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
