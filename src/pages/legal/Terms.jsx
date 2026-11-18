import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Scale,
  ShieldAlert,
  Building2,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Clock,
  HelpCircle,
  ExternalLink,
  Ban,
  BookOpen
} from 'lucide-react';
import './LegalPages.css';

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'purpose-scope', title: '2. Purpose & Scope of Assistance' },
  { id: 'visitor-accuracy', title: '3. Accuracy of User Information' },
  { id: 'enquiry-contact', title: '4. Enquiry Submission & Consent' },
  { id: 'loan-terms', title: '5. Loan Eligibility & Lender Discretion' },
  { id: 'insurance-terms', title: '6. Insurance Terms & Insurer Authority' },
  { id: 'no-guarantee', title: '7. No Guarantee of Approvals or Outcomes' },
  { id: 'regulatory-status', title: '8. Independent Intermediary Status' },
  { id: 'third-party-services', title: '9. Third-Party Decisions & Services' },
  { id: 'intellectual-property', title: '10. Ownership & Permitted Use' },
  { id: 'prohibited-misuse', title: '11. Prohibited Misuse & Conduct' },
  { id: 'external-links', title: '12. External Third-Party Links' },
  { id: 'website-availability', title: '13. Availability & Maintenance' },
  { id: 'limitation-liability', title: '14. Limitation of Liability' },
  { id: 'changes-to-terms', title: '15. Modifications to Terms' },
  { id: 'governing-law', title: '16. Governing Law & Proposed Jurisdiction' },
  { id: 'contact-queries', title: '17. Contact & Inquiries' }
];

function Terms() {
  const [activeSection, setActiveSection] = useState('acceptance');

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
              <span className="legal-breadcrumb-current">Terms & Conditions</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="legal-hero">
        <div className="legal-hero-pattern" aria-hidden="true" />
        <div className="legal-hero-container">
          <div className="legal-badge">
            <Scale className="legal-badge-icon" />
            <span>Website Agreement & Terms</span>
          </div>
          <h1 className="legal-hero-title">Terms & Conditions</h1>
          <p className="legal-hero-subtitle">
            Please read these Terms & Conditions carefully before using the Balaji Associates website or submitting enquiries
            for loan and insurance facilitation services.
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
              <BookOpen className="legal-sidebar-icon" />
              <h2 className="legal-sidebar-title">Navigation</h2>
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
              <h4>Questions on Terms?</h4>
              <p>Our team is available to assist you with inquiries regarding our website usage policies.</p>
              <Link to="/contact/" className="legal-sidebar-help-link">
                Contact Office <ChevronRight size={14} />
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
                These Terms & Conditions define the rights, obligations, and limitations applicable to visitors of the
                Balaji Associates website. The website owner should periodically review these terms with qualified legal
                counsel to ensure ongoing harmony with statutory regulations, consumer protection jurisprudence, and RBI / IRDAI guidelines in India.
              </p>
            </div>

            {/* Section 1 */}
            <section id="acceptance" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">1</span>
                Acceptance of Terms
              </h2>
              <p className="legal-paragraph">
                These Terms & Conditions ("Terms") constitute a legally binding agreement between you ("User", "Visitor", or "You")
                and <strong>Balaji Associates</strong> ("we", "us", or "our"), governing your access to and use of our website,
                online contact forms, content, and related advisory assistance.
              </p>
              <p className="legal-paragraph">
                By browsing, accessing, or utilizing any portion of this website, or by submitting an enquiry through any of our
                online forms, you acknowledge that you have read, understood, and agreed to be bound by these Terms, as well as our
                accompanying <Link to="/privacy-policy/" style={{ color: '#0F6B4F', fontWeight: 600 }}>Privacy Policy</Link> and <Link to="/disclaimer/" style={{ color: '#0F6B4F', fontWeight: 600 }}>Disclaimer</Link>.
                If you do not agree to these Terms in their entirety, you must discontinue using this website immediately.
              </p>
            </section>

            {/* Section 2 */}
            <section id="purpose-scope" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">2</span>
                Purpose & Scope of Assistance
              </h2>
              <p className="legal-paragraph">
                Balaji Associates is an independent consultancy based in Madurai, Tamil Nadu, providing informational guidance,
                application documentation coordination, and channel assistance for prospective borrowers and insurance seekers across India.
              </p>
              <p className="legal-paragraph">
                The scope of assistance provided through this website includes:
              </p>
              <ul className="legal-list">
                <li>Providing informational overviews on loan products including Home Loans, Mortgage / Loan Against Property (LAP), Business & MSME Loans, Machinery Finance, Working Capital Facilities, Personal Loans, Car Loans, and Education / Agricultural Finance;</li>
                <li>Providing informational guidance on insurance categories including Health Insurance, Motor Insurance, SME & Commercial Insurance, Travel Insurance, and Home Insurance;</li>
                <li>Assisting prospective applicants in evaluating documentation checklists required by banks, NBFCs, or insurance underwriters;</li>
                <li>Facilitating the submission of customer applications to appropriate partner institutions with the applicant’s consent.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="visitor-accuracy" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">3</span>
                Accuracy of User Information
              </h2>
              <p className="legal-paragraph">
                When you submit information through our website forms or during subsequent communications with our advisors:
              </p>
              <ul className="legal-list">
                <li>You represent and warrant that all information you submit (including full name, phone number, residential or business city, financial estimates, and requirement descriptions) is truthful, current, and accurate;</li>
                <li>You agree not to impersonate any other individual or legal entity or provide contact details belonging to a third party without their explicit, verifiable authorization;</li>
                <li>You acknowledge that lending institutions and insurance underwriters rely strictly on verified documentation. Submitting false, distorted, or forged details can lead to immediate rejection of applications and may incur legal penalties under applicable Indian laws.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="enquiry-contact" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">4</span>
                Enquiry Submission & Consent to Contact
              </h2>
              <p className="legal-paragraph">
                Submitting an enquiry form on our website represents a voluntary commercial inquiry initiated by you.
              </p>
              <div className="legal-callout info">
                <div className="legal-callout-title">
                  <CheckCircle2 size={16} /> Authorization for Communication
                </div>
                <p className="legal-callout-p">
                  By checking the consent box and submitting your contact number, you expressly authorise Balaji Associates and its
                  authorised representatives to contact you via telephone call, SMS, WhatsApp message, or email to discuss your loan
                  or insurance inquiry. You agree that this communication does not violate the National Do Not Call (NDNC) registry
                  or Do Not Disturb (DND) regulations, as it is directly related to your requested consultation.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="loan-terms" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">5</span>
                Loan Eligibility & Lender Discretion
              </h2>
              <p className="legal-paragraph">
                All prospective loan applicants must take note of the following fundamental operational conditions:
              </p>
              <ul className="legal-list">
                <li><strong className="legal-list-strong">Sole Underwriting Discretion:</strong> All credit evaluations, financial checks, credit score assessments (such as CIBIL, Experian, or Equifax), income calculations, collateral valuations, and risk ratings are determined exclusively and solely by the relevant bank, Non-Banking Financial Company (NBFC), or Housing Finance Company (HFC).</li>
                <li><strong className="legal-list-strong">Commercial Terms:</strong> Sanctioned loan amounts, approved interest rates (whether floating or fixed), processing fees, administrative charges, repayment tenure, and EMI schedules are set entirely by the lending institution in accordance with its internal credit policy and RBI norms.</li>
                <li><strong className="legal-list-strong">No Binding Sanction from Balaji Associates:</strong> Balaji Associates does not issue loan sanction letters, does not disburse funds directly, and has no authority to bind any lender to a specific loan decision or interest rate.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="insurance-terms" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">6</span>
                Insurance Terms & Insurer Authority
              </h2>
              <p className="legal-paragraph">
                For all insurance categories discussed or referenced on our website:
              </p>
              <ul className="legal-list">
                <li><strong className="legal-list-strong">Governed by Policy Wordings:</strong> All insurance coverage, premiums, sum insured limits, pre-existing illness waiting periods, co-payment conditions, deductibles, sub-limits, and exclusions are determined strictly by the relevant insurance company registered with the Insurance Regulatory and Development Authority of India (IRDAI).</li>
                <li><strong className="legal-list-strong">Underwriting & Claims:</strong> Acceptance or rejection of insurance proposals, medical underwriting requirements, premium ratings, and claim settlement or repudiation decisions rest exclusively with the insurer.</li>
                <li><strong className="legal-list-strong">Primacy of Contract:</strong> The formal policy certificate, policy schedule, and official contract terms issued by the insurer supersede any general summary or verbal discussion provided during preliminary assistance.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="no-guarantee" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">7</span>
                No Guarantee of Approvals or Outcomes
              </h2>
              <div className="legal-callout warning">
                <div className="legal-callout-title">
                  <AlertTriangle size={16} /> Important Financial Advisory Disclaimer
                </div>
                <p className="legal-callout-p">
                  Balaji Associates <strong>does not guarantee</strong> loan sanction, loan disbursal, insurance policy issuance,
                  specific interest rates, processing timelines, or any particular financial outcome. Approval is contingent entirely
                  upon the applicant fulfilling the statutory, credit, legal, technical, and regulatory criteria established by the
                  underwriting lender or insurance company.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="regulatory-status" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">8</span>
                Independent Intermediary Status
              </h2>
              <p className="legal-paragraph">
                For complete regulatory transparency:
              </p>
              <ul className="legal-list">
                <li>Balaji Associates is an independent loan and insurance consultancy and channel facilitator operating from Madurai, Tamil Nadu;</li>
                <li>Balaji Associates is <strong>NOT</strong> a bank, an RBI-regulated Non-Banking Financial Company (NBFC), a primary lender, an insurance underwriter, or a government regulatory authority;</li>
                <li>We do not represent ourselves as holding any regulatory licence or certification beyond verified business registrations and channel partner arrangements active in the ordinary course of business.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="third-party-services" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">9</span>
                Third-Party Decisions & Services
              </h2>
              <p className="legal-paragraph">
                When you choose to apply for a financial or insurance product through our assistance, your contractual and legal
                relationship regarding that product is formed directly with the third-party bank, NBFC, or insurance company.
                Balaji Associates shall not be held liable for any dispute, rejection, underwriting decision, delay in processing,
                disbursement condition, policy cancellation, or claim denial made by such independent third-party institutions.
              </p>
            </section>

            {/* Section 10 */}
            <section id="intellectual-property" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">10</span>
                Ownership & Permitted Use
              </h2>
              <p className="legal-paragraph">
                All original content, graphics, layouts, UI components, text, FAQs, and design elements published on this website
                are the intellectual property of Balaji Associates or used under legitimate licence, protected by Indian and
                international copyright and trademark laws.
              </p>
              <p className="legal-paragraph">
                You are granted a limited, revocable, non-exclusive, non-transferable licence to access and view the website solely
                for your personal, non-commercial informational purposes. You agree not to copy, reproduce, modify, distribute,
                publish, frame, mirror, or reverse engineer any content from this website without our prior written consent.
              </p>
            </section>

            {/* Section 11 */}
            <section id="prohibited-misuse" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">11</span>
                Prohibited Misuse & Conduct
              </h2>
              <p className="legal-paragraph">
                When accessing our website or using our contact forms, you agree strictly not to:
              </p>
              <ul className="legal-list">
                <li>Submit false, fraudulent, defamatory, vulgar, or fictitious information or mobile numbers;</li>
                <li>Deploy automated scrapers, crawlers, data mining bots, or extraction scripts without express written permission;</li>
                <li>Attempt to breach or probe website security, bypass authentication, or disrupt server infrastructure;</li>
                <li>Transmit malicious software, trojans, viruses, worms, or payload scripts;</li>
                <li>Use our contact channels or telephone numbers for unsolicited commercial advertising or spam;</li>
                <li>Violate any applicable local, state, national, or international law or regulation in India.</li>
              </ul>
              <p className="legal-paragraph">
                Any violation of these conduct rules may result in immediate termination of access, deletion of submissions, and
                reporting to relevant cyber law enforcement authorities under the Information Technology Act, 2000.
              </p>
            </section>

            {/* Section 12 */}
            <section id="external-links" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">12</span>
                External Third-Party Links
              </h2>
              <p className="legal-paragraph">
                Our website may contain hyperlinks to external websites, including official lender portals, government circulars,
                regulatory bodies (such as RBI, IRDAI), or external reference platforms. These links are provided solely for convenience
                and informational reference. Balaji Associates does not endorse, verify, or guarantee the content, terms, security,
                or availability of external websites, and access to them is entirely at your own risk.
              </p>
            </section>

            {/* Section 13 */}
            <section id="website-availability" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">13</span>
                Availability & Maintenance
              </h2>
              <p className="legal-paragraph">
                We make reasonable commercial efforts to ensure that the website remains accessible and functional. However,
                the website is provided on an "as-is" and "as-available" basis. We do not warrant that website operation will be
                uninterrupted, error-free, timely, or completely free of technical glitches. We reserve the right to suspend or
                modify any page, feature, or service without prior notice for routine maintenance, security upgrades, or server changes.
              </p>
            </section>

            {/* Section 14 */}
            <section id="limitation-liability" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">14</span>
                Limitation of Liability
              </h2>
              <p className="legal-paragraph">
                To the maximum extent permitted by applicable Indian law:
              </p>
              <ul className="legal-list">
                <li>Balaji Associates, its partners, consultants, affiliates, and representatives shall not be liable for any indirect, incidental, special, punitive, exemplary, or consequential damages whatsoever;</li>
                <li>We shall not be liable for any loss of profits, loss of data, loss of business opportunity, financial delay, or commercial loss arising out of or in connection with your use of, or inability to use, this website or reliance on its content;</li>
                <li>We shall not be liable for any credit rejection, adverse interest rate determination, insurance policy repudiation, claim dispute, or operational failure attributed to third-party lenders or insurance companies.</li>
              </ul>
              <p className="legal-paragraph">
                Nothing in these Terms purports to exclude or restrict any non-waivable statutory rights or liabilities that cannot
                be excluded under applicable Indian consumer protection laws.
              </p>
            </section>

            {/* Section 15 */}
            <section id="changes-to-terms" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">15</span>
                Modifications to Terms
              </h2>
              <p className="legal-paragraph">
                Balaji Associates reserves the right to amend, revise, or update these Terms & Conditions at any time without prior
                individual notice. Changes become effective immediately upon posting to this website. The "Last Updated" date at the
                top of this page reflects the current version. Your continued use of the website following any revisions signifies
                your acceptance of the updated Terms.
              </p>
            </section>

            {/* Section 16 */}
            <section id="governing-law" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">16</span>
                Governing Law & Proposed Jurisdiction
              </h2>
              <p className="legal-paragraph">
                These Terms & Conditions, and any claim or dispute arising out of or related to your use of this website, shall
                be governed by, construed, and interpreted in accordance with the laws of the Republic of India.
              </p>
              <div className="legal-callout">
                <div className="legal-callout-title">
                  <Landmark size={16} /> Proposed Forum for Dispute Resolution
                </div>
                <p className="legal-callout-p">
                  Subject to applicable mandatory statutory consumer dispute forums provided by Indian law, the parties agree that
                  competent courts situated in <strong>Madurai, Tamil Nadu, India</strong> shall serve as the proposed forum having
                  territorial jurisdiction over any formal legal proceedings arising under these Terms.
                </p>
              </div>
            </section>

            {/* Section 17 */}
            <section id="contact-queries" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">17</span>
                Contact & Inquiries
              </h2>
              <p className="legal-paragraph">
                If you have questions, feedback, or require clarification regarding these Terms & Conditions, please reach out to us:
              </p>

              <div className="legal-contact-block">
                <h3 className="legal-contact-title">Balaji Associates</h3>
                <p className="legal-contact-desc">
                  Office of Loan & Insurance Assistance — Madurai, Tamil Nadu
                </p>

                <div className="legal-contact-grid">
                  <div className="legal-contact-item">
                    <MapPin className="legal-contact-item-icon" />
                    <div>
                      <div className="legal-contact-item-label">Office Address</div>
                      <div className="legal-contact-item-val">
                        Old No. 2, New No. 3, 2nd Floor,<br />
                        Kanthiakam Theppam Street,<br />
                        Opp. Amidhami Stores, Tamil Sangam Road,<br />
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
                      <div className="legal-contact-item-label">General Enquiries</div>
                      <div className="legal-contact-item-val">
                        Reach our team via our <Link to="/contact/">Online Contact Page</Link>.<br />
                        <span style={{ fontSize: '12px', color: '#CBD5E1' }}>
                          (Dedicated Legal Contact placeholder: <code>[legal@balajiassociates.com]</code> — to be designated by site owner)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="legal-contact-item">
                    <Clock className="legal-contact-item-icon" />
                    <div>
                      <div className="legal-contact-item-label">Business Hours</div>
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
                    WhatsApp Advisory
                  </a>
                </div>
              </div>

              {/* Quick Legal Navigation Links */}
              <div className="legal-nav-switcher">
                <span className="legal-nav-switcher-title">Related Legal Documents:</span>
                <div className="legal-nav-switcher-links">
                  <Link to="/privacy-policy/" className="legal-nav-switcher-link">Privacy Policy</Link>
                  <span className="legal-nav-switcher-link current">Terms & Conditions</span>
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

export default Terms;
