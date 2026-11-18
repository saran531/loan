import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Server,
  Eye,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Clock,
  Database,
  Share2,
  CheckCircle2,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import './LegalPages.css';

const sections = [
  { id: 'introduction', title: '1. Introduction & Purpose' },
  { id: 'information-collected', title: '2. Information We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Information' },
  { id: 'enquiry-processing', title: '4. Processing & Customer Contact' },
  { id: 'information-sharing', title: '5. Sharing with Lenders & Insurers' },
  { id: 'service-providers', title: '6. Operational Service Providers' },
  { id: 'data-retention', title: '7. Data Retention & Deletion' },
  { id: 'data-security', title: '8. Security Practices & Limitations' },
  { id: 'cookies-tracking', title: '9. Cookies & Tracking Technologies' },
  { id: 'user-rights', title: '10. Your Rights & Access Requests' },
  { id: 'third-party-links', title: '11. Third-Party Websites & Links' },
  { id: 'children-privacy', title: '12. Children’s Privacy' },
  { id: 'policy-updates', title: '13. Updates to this Policy' },
  { id: 'contact-us', title: '14. Contact Information & Privacy Requests' }
];

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="legal-page-wrapper">
      {/* Breadcrumbs Navigation */}
      <nav className="legal-breadcrumbs-bar" aria-label="Breadcrumb">
        <div className="legal-breadcrumbs-container">
          <ol className="legal-breadcrumbs-list">
            <li className="legal-breadcrumb-item">
              <Link to="/" className="legal-breadcrumb-link">
                Home
              </Link>
            </li>
            <li className="legal-breadcrumb-item">
              <span className="legal-breadcrumb-separator">/</span>
              <span className="legal-breadcrumb-current">Privacy Policy</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="legal-hero">
        <div className="legal-hero-pattern" aria-hidden="true" />
        <div className="legal-hero-container">
          <div className="legal-badge">
            <ShieldCheck className="legal-badge-icon" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-hero-subtitle">
            This Privacy Policy explains how Balaji Associates collects, uses, handles, and safeguards your personal
            information when you visit our website or submit enquiries for loan and insurance assistance in India.
          </p>
          <div className="legal-meta-bar">
            <span className="legal-meta-item">
              <Clock className="legal-meta-icon" />
              <span>Last Updated: October 2024</span>
            </span>
            <span className="legal-meta-dot">•</span>
            <span className="legal-meta-item">
              <MapPin className="legal-meta-icon" />
              <span>Jurisdiction: Madurai, Tamil Nadu, India</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="legal-main-section">
        <div className="legal-content-grid">
          {/* Table of Contents Sidebar */}
          <aside className="legal-sidebar" aria-label="Table of Contents">
            <div className="legal-sidebar-header">
              <FileText className="legal-sidebar-icon" />
              <h2 className="legal-sidebar-title">Contents</h2>
            </div>
            <nav>
              <ul className="legal-toc-list">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`legal-toc-link ${activeSection === section.id ? 'active' : ''}`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="legal-sidebar-help">
              <h4>Need Clarification?</h4>
              <p>For questions regarding how your data is handled, feel free to contact our office.</p>
              <Link to="/contact/" className="legal-sidebar-help-link">
                Contact Page <ChevronRight size={14} />
              </Link>
            </div>
          </aside>

          {/* Legal Article Card */}
          <article className="legal-content-card">
            {/* Owner Review Advisory Notice */}
            <div className="legal-advisory-box">
              <div className="legal-advisory-header">
                <AlertTriangle className="legal-advisory-icon" />
                <span>Notice for Visitors and Website Owner</span>
              </div>
              <p>
                This Privacy Policy reflects the online informational and enquiry assistance operations of Balaji Associates.
                The website owner should periodically review this policy against evolving operational workflows, regulatory
                circulars, and applicable Indian data protection laws (including the Digital Personal Data Protection Act, 2023)
                with qualified legal counsel.
              </p>
            </div>

            {/* Section 1 */}
            <section id="introduction" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">1</span>
                Introduction & Purpose
              </h2>
              <p className="legal-paragraph">
                Welcome to <strong>Balaji Associates</strong> ("we", "our", "us"). We operate as an independent loan and
                insurance assistance consultancy located in Madurai, Tamil Nadu, India. We are dedicated to respecting and
                safeguarding the privacy of prospective clients, customers, and visitors who access our website.
              </p>
              <p className="legal-paragraph">
                The purpose of this Privacy Policy is to inform you in a transparent manner regarding:
              </p>
              <ul className="legal-list">
                <li>What personal and financial enquiry details we collect through our online forms and communications;</li>
                <li>How we process, store, and utilize that information to provide tailored guidance;</li>
                <li>The circumstances under which your details may be shared with lending institutions or insurance underwriters;</li>
                <li>The technical and administrative safeguards implemented to protect your personal data; and</li>
                <li>Your rights regarding your data under applicable Indian information technology and data protection regulations.</li>
              </ul>
              <p className="legal-paragraph">
                By accessing this website, submitting an enquiry form, or interacting with our representatives, you acknowledge
                that you have read, understood, and consented to the practices described in this Privacy Policy.
              </p>
            </section>

            {/* Section 2 */}
            <section id="information-collected" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">2</span>
                Information We Collect
              </h2>
              <p className="legal-paragraph">
                We only collect personal information that is reasonably necessary to respond to your requests, understand your
                financial or insurance objectives, and assist you with preliminary documentation and channel liaison.
              </p>

              <h3 className="legal-subsection-title">A. Information You Voluntarily Provide Through Website Forms</h3>
              <p className="legal-paragraph">
                When you fill out a Loan Enquiry Form, an Insurance Enquiry Form, or a General Contact Form on our website,
                we collect the following categories of data:
              </p>
              <ul className="legal-list">
                <li><strong className="legal-list-strong">Identity & Contact Details:</strong> Full Name, 10-digit Mobile Number, City / Location of residence or business in India.</li>
                <li><strong className="legal-list-strong">Loan Enquiry Details:</strong> Selected loan product category (such as Home Loan, Mortgage / LAP, Business & MSME Loan, Machinery & Equipment Finance, Working Capital, Personal & Car Loan, or Education & Agri Finance), estimated loan amount required, employment classification (Salaried, Self-Employed Business, Self-Employed Professional), and preferred callback time.</li>
                <li><strong className="legal-list-strong">Insurance Enquiry Details:</strong> Selected insurance product category (such as Health Insurance, Motor Insurance, SME & Business Insurance, Travel Insurance, or Home Insurance), specific vehicle or asset category where applicable, and preferred callback time.</li>
                <li><strong className="legal-list-strong">Enquiry Messages & Notes:</strong> Any specific notes, queries, or circumstances you choose to submit in the text message field.</li>
                <li><strong className="legal-list-strong">Consent Confirmation:</strong> Explicit affirmative consent checkbox indicating that you have agreed to be contacted regarding your enquiry.</li>
              </ul>

              <h3 className="legal-subsection-title">B. Information Automatically Collected by Server Infrastructure</h3>
              <p className="legal-paragraph">
                When you browse our website, our hosting infrastructure may automatically log basic, non-personally identifiable
                technical information, including:
              </p>
              <ul className="legal-list">
                <li>Internet Protocol (IP) address used to connect your computer or mobile device;</li>
                <li>Browser type and version, language settings, and operating system;</li>
                <li>Uniform Resource Locators (URLs) visited, date and time stamps of requests, and referral source.</li>
              </ul>

              <div className="legal-callout warning">
                <div className="legal-callout-title">
                  <Lock size={16} /> Important Note on Sensitive Payment Data
                </div>
                <p className="legal-callout-p">
                  Balaji Associates <strong>does not</strong> collect, request, or store bank account passwords, UPI PINs,
                  net banking credentials, debit/credit card CVVs, or biometric data through our website forms. Please do not
                  share such sensitive passwords with anyone claiming to represent us.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="how-we-use" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">3</span>
                How We Use Your Information
              </h2>
              <p className="legal-paragraph">
                We use the personal and enquiry information collected through the website strictly for legitimate business
                purposes related to loan and insurance assistance, including:
              </p>
              <ul className="legal-list">
                <li><strong className="legal-list-strong">Requirement Assessment:</strong> Reviewing your profile, requested funding amount, or insurance coverage needs to evaluate preliminary eligibility criteria;</li>
                <li><strong className="legal-list-strong">Direct Communication:</strong> Contacting you via phone calls, SMS, WhatsApp messages, or email to discuss product options, clarify requirements, and provide documentation guidance;</li>
                <li><strong className="legal-list-strong">Application Facilitation:</strong> Assisting you in preparing documentation required by banks, NBFCs, or insurance companies, subject to your express instruction and consent;</li>
                <li><strong className="legal-list-strong">Customer Service:</strong> Addressing questions, feedback, or follow-ups regarding ongoing consultations or general queries;</li>
                <li><strong className="legal-list-strong">Operational Integrity:</strong> Preventing fraudulent submissions, securing our systems, and maintaining audit logs for compliance with applicable Indian laws.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="enquiry-processing" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">4</span>
                Processing & Customer Contact
              </h2>
              <p className="legal-paragraph">
                When you submit an enquiry through our website forms, the submission is transmitted securely to our administrative
                team. A representative from Balaji Associates may reach out to you using the contact details you provided.
              </p>
              <div className="legal-callout info">
                <div className="legal-callout-title">
                  <UserCheck size={16} /> Voluntary Consent & DND / NDNC Registry
                </div>
                <p className="legal-callout-p">
                  By submitting your mobile number and clicking "Submit Enquiry" with the consent box checked, you explicitly
                  authorise Balaji Associates and its authorised team members to contact you regarding your enquiry via voice call,
                  SMS, or WhatsApp, notwithstanding your registration status on the National Do Not Call (NDNC) registry or Do Not Disturb (DND) list.
                  This communication is strictly limited to servicing your requested loan or insurance consultation.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="information-sharing" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">5</span>
                Sharing with Lenders & Insurers
              </h2>
              <p className="legal-paragraph">
                Balaji Associates is an independent consultancy and facilitator. To help you secure loan sanctions or insurance
                policies, we may share relevant enquiry details with third parties strictly under the following controlled parameters:
              </p>
              <ul className="legal-list">
                <li>
                  <strong className="legal-list-strong">Scheduled Commercial Banks, NBFCs & Housing Finance Companies:</strong> If you proceed with a loan application through our assistance, your KYC documents, income records, and application details are submitted directly to the relevant lending institution for underwriting, credit assessment, and sanction decisions.
                </li>
                <li>
                  <strong className="legal-list-strong">Insurance Companies & Corporate Agents:</strong> For insurance enquiries, your relevant details are shared with IRDAI-registered insurance providers or their authorized general insurance distributors to generate quotes, execute proposals, or issue policies.
                </li>
                <li>
                  <strong className="legal-list-strong">User Authorization:</strong> We do not forward your formal application files to financial institutions without your explicit authorization, knowledge, and agreement.
                </li>
                <li>
                  <strong className="legal-list-strong">Legal Mandates & Authorities:</strong> We may disclose information if required to do so by applicable Indian law, court order, governmental directive, or regulatory authority (such as the Reserve Bank of India or IRDAI).
                </li>
              </ul>
              <div className="legal-callout">
                <div className="legal-callout-title">
                  <CheckCircle2 size={16} /> We Do Not Sell Your Data
                </div>
                <p className="legal-callout-p">
                  Balaji Associates <strong>does not</strong> sell, rent, lease, or trade personal data or customer phone numbers
                  to third-party telemarketers, data brokers, or unrelated commercial advertisers.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="service-providers" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">6</span>
                Operational Service Providers
              </h2>
              <p className="legal-paragraph">
                To maintain our website, deliver enquiries reliably, and safeguard system security, we partner with reputable
                technical infrastructure providers:
              </p>
              <ul className="legal-list">
                <li><strong className="legal-list-strong">Hosting & Cloud Infrastructure:</strong> Our frontend and backend services are hosted on secured cloud infrastructure (such as Vercel and associated cloud server environments) that maintain industry-grade physical and network security.</li>
                <li><strong className="legal-list-strong">Email Delivery:</strong> Form submissions generate transactional notifications delivered via standard SMTP email services (such as Google Workspace / Gmail SMTP) using encrypted transport.</li>
                <li><strong className="legal-list-strong">IT Support:</strong> Authorized technical administrators who operate under strict non-disclosure obligations and access controls.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="data-retention" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">7</span>
                Data Retention & Deletion
              </h2>
              <p className="legal-paragraph">
                We retain personal and enquiry data only for as long as is necessary to fulfill the purposes for which it was
                collected, including:
              </p>
              <ul className="legal-list">
                <li>Assisting you throughout the active lifecycle of your loan enquiry or insurance proposal;</li>
                <li>Maintaining reasonable administrative records for future customer service or dispute resolution; and</li>
                <li>Complying with statutory accounting, tax, or legal retention obligations under applicable Indian law.</li>
              </ul>
              <p className="legal-paragraph">
                When data is no longer required for legitimate business or regulatory purposes, we take reasonable steps to securely
                delete, overwrite, or anonymize it. If you wish to request the deletion of your enquiry details, please contact us
                using the instructions outlined in Section 10 and Section 14.
              </p>
            </section>

            {/* Section 8 */}
            <section id="data-security" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">8</span>
                Security Practices & Limitations
              </h2>
              <p className="legal-paragraph">
                In compliance with reasonable security practices under the Information Technology Act, 2000 and the Information
                Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011,
                we implement technical and organizational measures to safeguard your information:
              </p>
              <ul className="legal-list">
                <li>Data transmission between your web browser and our website is protected using Hypertext Transfer Protocol Secure (HTTPS) and SSL/TLS encryption;</li>
                <li>Access to enquiry submissions is restricted to designated personnel who require the information to perform customer assistance duties;</li>
                <li>Server environments and hosting endpoints are monitored for anomalies and unauthorized access attempts.</li>
              </ul>
              <div className="legal-callout warning">
                <div className="legal-callout-title">
                  <AlertTriangle size={16} /> Inherent Limitations of the Internet
                </div>
                <p className="legal-callout-p">
                  While we undertake reasonable and appropriate security measures, no method of transmission over the Internet
                  or method of electronic data storage is completely infallible. We cannot guarantee 100% absolute security against
                  all potential cyber vulnerabilities, interception, or unauthorized access beyond our reasonable control.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="cookies-tracking" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">9</span>
                Cookies & Tracking Technologies
              </h2>
              <p className="legal-paragraph">
                Cookies are small text files placed on your device to ensure website functionality and improve your browsing experience.
              </p>
              <h3 className="legal-subsection-title">A. Verified Website Technologies</h3>
              <p className="legal-paragraph">
                Our website utilizes standard, essential technical cookies and browser local storage strictly required to maintain
                page navigation, preserve active session context, and record basic form states.
              </p>
              <h3 className="legal-subsection-title">B. Conditional Explanation of Analytics & Third-Party Tools</h3>
              <p className="legal-paragraph">
                As of the current implementation, this website does not employ intrusive third-party behavioural ad-tracking networks
                or cross-site advertising pixels. Where general web analytics or performance monitoring tools are activated in the future,
                they are utilized in aggregate, anonymized formats to understand general traffic volume, bounce rates, and popular
                loan/insurance queries without linking browsing behaviour to your identifiable personal identity.
              </p>
              <p className="legal-paragraph">
                You can manage or disable cookies at any time through your individual browser settings. Please note that disabling
                essential functional cookies may affect the proper loading or performance of certain website components.
              </p>
            </section>

            {/* Section 10 */}
            <section id="user-rights" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">10</span>
                Your Rights & Access Requests
              </h2>
              <p className="legal-paragraph">
                In accordance with applicable Indian laws, including principles articulated under the Digital Personal Data
                Protection Act, 2023 (DPDPA), visitors have specific rights regarding their personal data:
              </p>
              <ul className="legal-list">
                <li><strong className="legal-list-strong">Right of Access & Confirmation:</strong> You may request a summary of the personal details you submitted to us through our website.</li>
                <li><strong className="legal-list-strong">Right to Correction & Updating:</strong> If any personal details you provided (such as your phone number or city) are inaccurate or out of date, you may request correction.</li>
                <li><strong className="legal-list-strong">Right to Withdraw Consent:</strong> You may withdraw your consent for prospective contact or promotional follow-ups at any time by contacting our office.</li>
                <li><strong className="legal-list-strong">Right to Erasure / Deletion:</strong> You may request deletion of your enquiry data, provided that retention is not mandated by statutory laws, ongoing lender verifications, or dispute defence requirements.</li>
              </ul>
              <p className="legal-paragraph">
                To exercise any of these rights, please reach out to us using the contact details provided in Section 14. We will
                respond to verified requests within a reasonable timeframe.
              </p>
            </section>

            {/* Section 11 */}
            <section id="third-party-links" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">11</span>
                Third-Party Websites & Links
              </h2>
              <p className="legal-paragraph">
                Our website may include hyperlinks to external websites, including financial institutions, banking portals,
                insurance regulatory resources, or social media platforms. These external sites operate under their own independent
                privacy policies and practices. Balaji Associates does not endorse, control, or assume responsibility for the privacy
                standards, content, or data collection mechanisms of external third-party websites. We encourage you to review the
                privacy terms of any third-party website you choose to visit.
              </p>
            </section>

            {/* Section 12 */}
            <section id="children-privacy" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">12</span>
                Children’s Privacy
              </h2>
              <p className="legal-paragraph">
                Our loan and insurance assistance services are directed exclusively at individuals who are at least 18 years of age
                and legally competent to enter into binding financial contracts under the Indian Contract Act, 1872. We do not
                knowingly collect, solicit, or maintain personal information from minors. If you believe that a minor has submitted
                personal details through our website forms without parental or guardian consent, please notify us immediately so
                we can delete such information from our records.
              </p>
            </section>

            {/* Section 13 */}
            <section id="policy-updates" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">13</span>
                Updates to this Policy
              </h2>
              <p className="legal-paragraph">
                We reserve the right to amend, update, or modify this Privacy Policy at our discretion to reflect changes in our
                operational procedures, website features, or Indian legal requirements. When changes are made, the revised policy
                will be posted on this page with an updated "Last Updated" date at the top. We encourage visitors to review this
                page periodically to stay informed about how we protect your personal information.
              </p>
            </section>

            {/* Section 14 */}
            <section id="contact-us" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">14</span>
                Contact Information & Privacy Requests
              </h2>
              <p className="legal-paragraph">
                If you have questions, feedback, or concerns regarding this Privacy Policy, or if you wish to submit an access,
                correction, or deletion request, please reach out to our office through any of the following channels:
              </p>

              <div className="legal-contact-block">
                <h3 className="legal-contact-title">Balaji Associates</h3>
                <p className="legal-contact-desc">
                  Loan & Insurance Assistance Consultancy — Madurai, Tamil Nadu
                </p>

                <div className="legal-contact-grid">
                  <div className="legal-contact-item">
                    <MapPin className="legal-contact-item-icon" />
                    <div>
                      <div className="legal-contact-item-label">Office Address</div>
                      <div className="legal-contact-item-val">
                        Old No. 2, New No. 3, 2nd Floor,<br />
                        Kanthiakam Theppam Street,<br />
                        Opp. Amizhthini Stores, Tamil Sangam Road,<br />
                        Madurai - 625001, Tamil Nadu, India.
                      </div>
                    </div>
                  </div>

                  <div className="legal-contact-item">
                    <Phone className="legal-contact-item-icon" />
                    <div>
                      <div className="legal-contact-item-label">Phone & WhatsApp</div>
                      <div className="legal-contact-item-val">
                        Landline: <a href="tel:04524290544">0452-4290544</a><br />
                        Mobile / WhatsApp: <a href="https://wa.me/919842817644" target="_blank" rel="noopener noreferrer">98428 17644</a>
                      </div>
                    </div>
                  </div>

                  <div className="legal-contact-item">
                    <Mail className="legal-contact-item-icon" />
                    <div>
                      <div className="legal-contact-item-label">Online Contact</div>
                      <div className="legal-contact-item-val">
                        Submit a query via our <Link to="/contact/">Online Contact Form</Link>.<br />
                        <span style={{ fontSize: '12px', color: '#CBD5E1' }}>
                          (Official Privacy Email placeholder: <code>[privacy@balajiassociates.com]</code> — to be designated by site owner)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="legal-contact-item">
                    <Clock className="legal-contact-item-icon" />
                    <div>
                      <div className="legal-contact-item-label">Working Hours</div>
                      <div className="legal-contact-item-val">
                        Monday – Saturday: 9:30 AM – 6:30 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>

                <div className="legal-contact-actions">
                  <Link to="/contact/" className="legal-contact-btn">
                    Visit Contact Page <ChevronRight size={15} />
                  </Link>
                  <a href="https://wa.me/919842817644" target="_blank" rel="noopener noreferrer" className="legal-contact-btn secondary">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Quick Legal Navigation Links */}
              <div className="legal-nav-switcher">
                <span className="legal-nav-switcher-title">Related Legal Documents:</span>
                <div className="legal-nav-switcher-links">
                  <span className="legal-nav-switcher-link current">Privacy Policy</span>
                  <Link to="/terms/" className="legal-nav-switcher-link">Terms & Conditions</Link>
                  <Link to="/disclaimer/" className="legal-nav-switcher-link">Disclaimer</Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
