import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Layers, 
  ShieldCheck, 
  MessageSquare, 
  Compass, 
  Home as HomeIcon, 
  Building2, 
  Briefcase, 
  Wrench, 
  TrendingUp, 
  Car, 
  GraduationCap, 
  Heart, 
  Plane, 
  ArrowRight, 
  Phone, 
  CheckCircle,
  MessageCircle
} from 'lucide-react';

import ServiceCard from '../components/ServiceCard';
import FAQAccordion from '../components/FAQAccordion';

// Hero image asset (complete combined visual)
import heroRightSide from '../assets/images/home/hero/Hero-section-rightside.png';

// Benefit icon assets
import iconMaduraiBased from '../assets/images/home/hero/icon-madurai-based.png';
import iconMultipleLoan from '../assets/images/home/hero/icon-multiple-loan.png';
import iconInsuranceAssistance from '../assets/images/home/hero/icon-insurance-assistance.png';
import iconRequirementFirst from '../assets/images/home/hero/icon-requirement-first.png';
import iconClearProcess from '../assets/images/home/hero/icon-clear-process.png';

// Call icon
import callIcon from '../assets/images/home/hero/call-icon.png';

// Loan solutions image assets
import loanHomeProperty from '../assets/images/home/loan-solutions/loan-home-property.png';
import loanMortgageProperty from '../assets/images/home/loan-solutions/ican-mortgage-property.png';
import loanBusinessMsme from '../assets/images/home/loan-solutions/loan-business-msme.png';
import loanMachinery from '../assets/images/home/loan-solutions/ican-machinery.png';
import loanWorkingCapital from '../assets/images/home/loan-solutions/loan-working-capital.png';
import loanPersonalCar from '../assets/images/home/loan-solutions/loan-personal-car.png';
import loanEducationAgri from '../assets/images/home/loan-solutions/loan-education-agri.png';

// Insurance solutions image assets
import insHealthInsurance from '../assets/images/home/insurance-solutions/loan-health-insurance.png';
import insMotorInsurance from '../assets/images/home/insurance-solutions/ins-motor-insurance.png';
import insSmeBusiness from '../assets/images/home/insurance-solutions/ins-sme-business.png';
import insTravelInsurance from '../assets/images/home/insurance-solutions/ins-travel-insurance.png';
import insHomeInsurance from '../assets/images/home/insurance-solutions/ins-home-insurance.png';

// Section image assets
import balajiAssociatesMadurai from '../assets/images/home/madurai/Balaji-Associates-Madurai.png';
import maduraiFirst from '../assets/images/home/madurai/Madurai-first.png';
import faqIllustration from '../assets/images/home/faq/faq-illustration.png';
import footerCarHouse from '../assets/images/home/cta/footer-car-house.png';


// FAQ items
const homepageFaqs = [
  {
    question: 'What services does Balaji Associates provide?',
    answer: 'Balaji Associates helps customers explore loan options through Banks and NBFCs across Home & Property, Mortgage/LAP, Business & MSME, Machinery, Working Capital, Personal & Car, Education & Agri loans, as well as Insurance assistance across Health, Motor, SME, Travel, and Home insurance.'
  },
  {
    question: 'Does Balaji Associates sanction loans?',
    answer: 'No. Balaji Associates acts as a financial assistance consultant. The Bank or NBFC independently evaluates each application and decides sanction, terms, interest rates, and disbursement.'
  },
  {
    question: 'Is Balaji Associates an insurance company?',
    answer: 'No. Balaji Associates provides insurance assistance to help you understand options. Insurance coverage and claims remain subject to the insurer\'s policy terms, underwriting rules, and assessment.'
  },
  {
    question: 'Can you guarantee loan approval or an insurance claim?',
    answer: 'No guarantee of approval or claim settlement can be provided. Sanction and claim decisions are strictly at the sole discretion of the respective banks, financial institutions, and insurance companies.'
  },
  {
    question: 'Where is Balaji Associates located?',
    answer: 'Balaji Associates is headquartered in Madurai at Old No. 2, New No. 3, 2nd Floor, Kanthiakam Theppam Street, Opp. Amidhami Stores, Tamil Sangam Road, Madurai - 625001, Tamil Nadu.'
  }
];

function Home() {
  // Motion animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  return (
    <div className="home-page">
      {/* 2. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
          >
            {/* Madurai Location Indicator */}
            <div className="hero-location-badge">
              <MapPin className="badge-icon" />
              <span>Madurai-Based Financial Assistance</span>
            </div>

            {/* Main H1 */}
            <h1 className="hero-title">
              Loan & Insurance Assistance in Madurai for Individuals, Families & Businesses
            </h1>

            {/* Supporting Paragraphs */}
            <div className="hero-description">
              <p>
                Financial decisions are easier when you understand the options before you commit. A homebuyer, a business owner looking for working capital and a family choosing health insurance may all be looking for financial protection or support - but the right solution, documents and questions are very different.
              </p>
              <p>
                Balaji Associates is based in Madurai and helps customers explore loan options through Banks and NBFCs, along with insurance assistance across Health, Motor, SME, Travel and Home Insurance. Our role is to understand the requirement, explain the route clearly and help customers move forward with better information and preparation.
              </p>
              <p>
                We work with enquiries from salaried employees, self-employed professionals, property owners, traders, manufacturers, entrepreneurs, MSMEs, students and families. The focus is not to push one product; it is to understand what you are trying to achieve and help you identify the next practical step.
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="hero-actions">
              <Link to="/contact/" className="btn-hero-primary">
                <span>Tell Us What You Need</span>
                <ArrowRight className="btn-arrow" />
              </Link>
              <a href="tel:9842817644" className="btn-hero-secondary">
                <img src={callIcon} alt="" className="btn-hero-call-icon" />
                <span>Call / WhatsApp 98428 17644</span>
              </a>
            </div>
          </motion.div>

          {/* Hero Visual Composition */}
          <motion.div 
            className="hero-visual-composition"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={heroRightSide} 
              alt="Balaji Associates Madurai Loan and Insurance Assistance" 
              className="hero-right-side-img" 
            />
          </motion.div>
        </div>
      </section>

      {/* 3. KEY BENEFITS / TRUST STRIP */}
      <section className="benefits-strip-section">
        <div className="container">
          <motion.div 
            className="benefits-strip-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="benefit-item" variants={fadeInVariant}>
              <div className="benefit-icon-wrap">
                <img src={iconMaduraiBased} alt="" className="benefit-img-icon" />
              </div>
              <span className="benefit-text">Madurai-Based Assistance</span>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInVariant}>
              <div className="benefit-icon-wrap">
                <img src={iconMultipleLoan} alt="" className="benefit-img-icon" />
              </div>
              <span className="benefit-text">Multiple Loan Categories</span>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInVariant}>
              <div className="benefit-icon-wrap">
                <img src={iconInsuranceAssistance} alt="" className="benefit-img-icon" />
              </div>
              <span className="benefit-text">Insurance Assistance</span>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInVariant}>
              <div className="benefit-icon-wrap">
                <img src={iconRequirementFirst} alt="" className="benefit-img-icon" />
              </div>
              <span className="benefit-text">Requirement-First Conversation</span>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInVariant}>
              <div className="benefit-icon-wrap">
                <img src={iconClearProcess} alt="" className="benefit-img-icon" />
              </div>
              <span className="benefit-text">Clear Process Guidance</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. LOAN SOLUTIONS */}
      <section className="loan-solutions-section">
        <div className="container">
          <div className="section-header-row">
            <div className="section-title-wrap">
              <h2 className="section-title">Loan Solutions</h2>
              <div className="gold-accent-line"></div>
            </div>
            <Link to="/home-property-loans/" className="section-header-link">
              <span>Explore All Loan Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <motion.div 
            className="loan-cards-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <ServiceCard
              icon={HomeIcon}
              title="Home & Property Loans"
              description="Housing Finance and eligible land purchase + construction requirements."
              image={loanHomeProperty}
              link="/home-property-loans/"
            />
            <ServiceCard
              icon={Building2}
              title="Mortgage & Loan Against Property"
              description="Property-backed finance including eligible residential, land and commercial property mortgage requirements."
              image={loanMortgageProperty}
              link="/mortgage-loan-against-property/"
            />
            <ServiceCard
              icon={Briefcase}
              title="Business & MSME Loans"
              description="Finance for eligible business expansion, operational needs, projects and MSME requirements, including CGTMSE-related routes where applicable."
              image={loanBusinessMsme}
              link="/business-msme-loans/"
            />
            <ServiceCard
              icon={Wrench}
              title="Machinery & Equipment Finance"
              description="Finance assistance for eligible machinery purchase, equipment upgrades and asset-backed business requirements."
              image={loanMachinery}
              link="/machinery-equipment-finance/"
            />
            <ServiceCard
              icon={TrendingUp}
              title="Working Capital Finance"
              description="OD, CC takeover and Cash Credit/CC assistance for eligible business cash-flow needs."
              image={loanWorkingCapital}
              link="/working-capital-finance/"
            />
            <ServiceCard
              icon={Car}
              title="Personal & Car Loans"
              description="Personal finance and vehicle finance assistance for eligible applicants."
              image={loanPersonalCar}
              link="/personal-car-loans/"
            />
            <ServiceCard
              icon={GraduationCap}
              title="Education & Agri Finance"
              description="Education-loan assistance plus eligible agricultural overdraft/Finance enquiries."
              image={loanEducationAgri}
              link="/education-agri-finance/"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. INSURANCE SOLUTIONS */}
      <section className="insurance-solutions-section">
        <div className="container">
          <div className="section-header-row">
            <div className="section-title-wrap">
              <h2 className="section-title">Insurance Solutions</h2>
              <div className="gold-accent-line"></div>
            </div>
            <Link to="/insurance/" className="section-header-link">
              <span>Explore All Insurance Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <motion.div 
            className="insurance-cards-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <ServiceCard
              icon={Heart}
              title="Health Insurance"
              description="Housing individual and family health-insurance options based on age, family needs, medical history and policy terms."
              image={insHealthInsurance}
              link="/health-insurance-madurai/"
            />
            <ServiceCard
              icon={Car}
              title="Motor Insurance"
              description="Assistance for eligible car, two-wheeler and other motor-insurance requirements, subject to insurer products."
              image={insMotorInsurance}
              link="/motor-insurance-madurai/"
            />
            <ServiceCard
              icon={ShieldCheck}
              title="SME & Business Insurance"
              description="Help businesses understand relevant protection for property, assets, liability and other insurable risks based on their operations."
              image={insSmeBusiness}
              link="/sme-business-insurance/"
            />
            <ServiceCard
              icon={Plane}
              title="Travel Insurance"
              description="Explore domestic or international travel protection for eligible medical and trip-related risks according to the policy."
              image={insTravelInsurance}
              link="/travel-insurance-madurai/"
            />
            <ServiceCard
              icon={HomeIcon}
              title="Home Insurance"
              description="Protection options for eligible home structure and/or contents against covered risks, subject to policy wording."
              image={insHomeInsurance}
              link="/home-insurance-madurai/"
            />
          </motion.div>
        </div>
      </section>

      {/* 6. WHY BALAJI ASSOCIATES? */}
      <section className="why-balaji-section">
        <div className="container">
          <div className="section-title-wrap mb-8">
            <h2 className="section-title">Why Balaji Associates?</h2>
            <div className="gold-accent-line"></div>
          </div>

          <div className="why-balaji-grid">
            {/* Left Column: Image */}
            <motion.div 
              className="why-balaji-image-wrap"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={balajiAssociatesMadurai} 
                alt="Why Balaji Associates" 
                className="why-balaji-img" 
              />
            </motion.div>

            {/* Right Column: Text Content & Checklist */}
            <motion.div 
              className="why-balaji-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="why-balaji-paragraph">
                Customers often know the outcome they want, but not the product they need. Someone may say "I need a business loan" when the actual requirement is short-term working capital. A property owner may ask for a mortgage without knowing what documents a lender will review. A family may ask for the cheapest health insurance when the more important questions are coverage, exclusions, waiting periods and suitability.
              </p>

              <ul className="why-balaji-checklist">
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Madurai-based assistance with a clear local point of contact.</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Multiple loan categories for personal, property and business requirements.</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Insurance assistance across five major protection categories.</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Requirement-first conversation rather than a one-product approach.</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Guidance on commonly required documents and application/proposal information.</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Clear distinction between Balaji Associates' assistance role and the final lender/insurer decision.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7 & 8. HOW LOAN & INSURANCE ASSISTANCE WORKS */}
      <section className="process-assistance-section">
        <div className="container">
          <div className="process-cards-grid">
            {/* 7. How Loan Assistance Works */}
            <motion.div 
              className="process-card process-card-loan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="process-header">
                <div className="process-badge-bar orange-bar"></div>
                <h3 className="process-title">How Loan Assistance Works</h3>
              </div>

              <div className="process-steps-row">
                {/* Step 1 */}
                <div className="process-step">
                  <div className="step-number-circle blue-circle">1</div>
                  <h4 className="step-title">Share Your Requirement</h4>
                  <p className="step-desc">
                    Tell us the purpose, approximate amount and your salaried/self-employed/business profile.
                  </p>
                </div>
                <div className="step-arrow">→</div>

                {/* Step 2 */}
                <div className="process-step">
                  <div className="step-number-circle blue-circle">2</div>
                  <h4 className="step-title">Understand the Profile</h4>
                  <p className="step-desc">
                    Relevant income, business, property, existing obligation and document information is discussed.
                  </p>
                </div>
                <div className="step-arrow">→</div>

                {/* Step 3 */}
                <div className="process-step">
                  <div className="step-number-circle blue-circle">3</div>
                  <h4 className="step-title">Explore Possible Routes</h4>
                  <p className="step-desc">
                    Potential Bank/NBFC financing routes are considered based on the requirement.
                  </p>
                </div>
                <div className="step-arrow">→</div>

                {/* Step 4 */}
                <div className="process-step">
                  <div className="step-number-circle blue-circle">4</div>
                  <h4 className="step-title">Prepare the Application</h4>
                  <p className="step-desc">
                    We help you understand the commonly required documentation and application process.
                  </p>
                </div>
                <div className="step-arrow">→</div>

                {/* Step 5 */}
                <div className="process-step">
                  <div className="step-number-circle blue-circle">5</div>
                  <h4 className="step-title">Lender Decision</h4>
                  <p className="step-desc">
                    The Bank/NBFC independently evaluates the application and decides sanction, terms and disbursement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 8. How Insurance Assistance Works */}
            <motion.div 
              className="process-card process-card-insurance"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="process-header">
                <div className="process-badge-bar green-bar"></div>
                <h3 className="process-title">How Insurance Assistance Works</h3>
              </div>

              <div className="process-steps-row">
                {/* Step 1 */}
                <div className="process-step">
                  <div className="step-number-circle green-circle">1</div>
                  <h4 className="step-title">Identify the Risk</h4>
                  <p className="step-desc">
                    Health, vehicle, business, travel or home protection needs are discussed.
                  </p>
                </div>
                <div className="step-arrow">→</div>

                {/* Step 2 */}
                <div className="process-step">
                  <div className="step-number-circle green-circle">2</div>
                  <h4 className="step-title">Understand Coverage Priorities</h4>
                  <p className="step-desc">
                    We look at what needs protection and what question should be answered before choosing a policy.
                  </p>
                </div>
                <div className="step-arrow">→</div>

                {/* Step 3 */}
                <div className="process-step">
                  <div className="step-number-circle green-circle">3</div>
                  <h4 className="step-title">Review Available Options</h4>
                  <p className="step-desc">
                    Policy features must be understood together with exclusions, waiting periods, deductibles, limits and insurer terms.
                  </p>
                </div>
                <div className="step-arrow">→</div>

                {/* Step 4 */}
                <div className="process-step">
                  <div className="step-number-circle green-circle">4</div>
                  <h4 className="step-title">Proposal & Disclosure</h4>
                  <p className="step-desc">
                    Accurate disclosure of material information is essential. The insurer assesses the proposal according to underwriting rules.
                  </p>
                </div>
                <div className="step-arrow">→</div>

                {/* Step 5 */}
                <div className="process-step">
                  <div className="step-number-circle green-circle">5</div>
                  <h4 className="step-title">Policy Issuance / Service</h4>
                  <p className="step-desc">
                    Coverage begins only according to the insurer policy terms and issuance conditions. Claims remain subject to policy wording and insurer assessment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. MADURAI FIRST. TAMIL NADU NEXT. */}
      <section className="madurai-banner-section">
        <div className="container">
          <motion.div 
            className="madurai-banner-card"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="madurai-banner-left">
              <img 
                src={maduraiFirst} 
                alt="Madurai First. Tamil Nadu Next." 
                className="madurai-banner-img" 
              />
            </div>

            <div className="madurai-banner-content">
              <div className="madurai-banner-header">
                <div className="location-pin-badge">
                  <MapPin className="w-5 h-5 text-amber-500 fill-amber-100" />
                </div>
                <h2 className="madurai-banner-title">Madurai First. Tamil Nadu Next.</h2>
              </div>
              <p className="madurai-banner-desc">
                Balaji Associates' head office is in Madurai. The website should establish strong relevance for Madurai searches first and then expand through useful content and genuine service coverage across Tamil Nadu. We should never create fake branches or copy-and-paste city pages.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. HOMEPAGE FAQs */}
      <section className="homepage-faqs-section">
        <div className="container">
          <div className="section-title-wrap mb-8">
            <h2 className="section-title">Homepage FAQs</h2>
          </div>

          <div className="faqs-grid">
            <motion.div 
              className="faqs-visual-wrap"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={faqIllustration} 
                alt="Frequently Asked Questions" 
                className="faq-bubbles-img" 
              />
            </motion.div>

            <motion.div 
              className="faqs-accordion-wrap"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FAQAccordion items={homepageFaqs} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="final-cta-section">
        <div className="container">
          <motion.div 
            className="final-cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="final-cta-content">
              <h2 className="final-cta-title">
                Your Financial Need.<br />
                The Right Guidance.
              </h2>
              <div className="final-cta-buttons">
                <Link to="/contact/" className="btn-cta-gold">
                  <span>Tell Us What You Need</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9842817644" className="btn-cta-outline">
                  <img src={callIcon} alt="" className="btn-cta-call-icon" />
                  <span>Call / WhatsApp 98428 17644</span>
                </a>
              </div>
            </div>

            <div className="final-cta-visual">
              <img 
                src={footerCarHouse} 
                alt="Your Financial Need. The Right Guidance." 
                className="cta-img" 
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
