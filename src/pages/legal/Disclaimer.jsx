import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  Info,
  ShieldAlert,
  FileCheck2,
  FileSpreadsheet,
  Coins,
  Scale,
  Building,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Clock,
  BookOpen,
  HelpCircle,
  ExternalLink,
  ShieldX
} from 'lucide-react';
import './LegalPages.css';

const sections = [
  { id: 'informational-purpose', title: '1. General Informational Purpose' },
  { id: 'no-loan-guarantee', title: '2. No Guarantee of Loan Approval or Disbursal' },
  { id: 'lender-discretion', title: '3. Final Loan Decisions by Lenders' },
  { id: 'no-insurance-guarantee', title: '4. No Guarantee of Insurance Issuance or Claims' },
  { id: 'insurer-policy-terms', title: '5. Primacy of Insurer Policy Wording' },
  { id: 'indicative-rates', title: '6. Indicative Rates, Fees & Terms' },
  { id: 'no-guaranteed-returns', title: '7. No Guaranteed Savings or Outcomes' },
  { id: 'official-documents', title: '8. Not a Substitute for Official Contracts & KFS' },
  { id: 'independent-verification', title: '9. Independent Verification Essential' },
  { id: 'no-professional-advice', title: '10. No Personalised Tax, Legal or Investment Advice' },
  { id: 'third-party-trademarks', title: '11. Third-Party Logos, Trademarks & Links' },
  { id: 'accuracy-limits', title: '12. Accuracy & Content Availability Limits' },
  { id: 'contact-clarifications', title: '13. Inquiries & Contact Details' }
];

function Disclaimer() {
  const [activeSection, setActiveSection] = useState('informational-purpose');

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
              <span className="legal-breadcrumb-current">Disclaimer</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="legal-hero">
        <div className="legal-hero-pattern" aria-hidden="true" />
        <div className="legal-hero-container">
          <div className="legal-badge">
            <ShieldAlert className="legal-badge-icon" />
            <span>Financial & Advisory Disclaimer</span>
          </div>
          <h1 className="legal-hero-title">Website Disclaimer</h1>
          <p className="legal-hero-subtitle">
            Important legal clarifications regarding website information, loan sanction limits, insurance underwriting terms,
            and independent third-party lender and insurer authorities.
          </p>
          <div className="legal-meta-bar">
            <span className="legal-meta-item">
              <Clock className="legal-meta-icon" />
              <span>Last Updated: October 2024</span>
            </span>
            <span className="legal-meta-dot">•</span>
            <span className="legal-meta-item">
              <MapPin className="legal-meta-icon" />
              <span>Balaji Associates — Madurai, Tamil Nadu</span>
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
              <h2 className="legal-sidebar-title">Disclaimers</h2>
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
              <h4>Need Verification?</h4>
              <p>For product-specific guidance or lender documentation, speak directly with our consultation team.</p>
              <Link to="/contact/" className="legal-sidebar-help-link">
                Contact Us <ChevronRight size={14} />
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
                This Disclaimer sets forth important factual boundaries regarding the advisory and channel assistance scope of
                Balaji Associates. The website owner should periodically review this disclaimer with qualified legal counsel to ensure
                ongoing adherence to the regulatory circulars and consumer advisory mandates issued by the Reserve Bank of India (RBI)
                and the Insurance Regulatory and Development Authority of India (IRDAI).
              </p>
            </div>

            {/* Section 1 */}
            <section id="informational-purpose" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">1</span>
                General Informational Purpose
              </h2>
              <p className="legal-paragraph">
                The content, calculators, guides, interest rate tables, documentation checklists, and service summaries published on
                this website are provided by <strong>Balaji Associates</strong> solely for general informational and educational guidance.
              </p>
              <p className="legal-paragraph">
                Nothing on this website constitutes a formal offer of credit, a binding loan sanction letter, an insurance contract,
                an underwriting guarantee, or a certified legal or financial opinion. Content is intended solely to help visitors
                understand broad product categories and assist them in preparing preliminary documentation.
              </p>
            </section>

            {/* Section 2 */}
            <section id="no-loan-guarantee" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">2</span>
                No Guarantee of Loan Approval or Disbursal
              </h2>
              <div className="legal-callout warning">
                <div className="legal-callout-title">
                  <ShieldX size={16} /> Absolute Clarification: No Sanction Guarantees
                </div>
                <p className="legal-callout-p">
                  Balaji Associates <strong>does not guarantee</strong> that any loan application submitted by a prospective borrower
                  will be approved, sanctioned, or disbursed. We do not guarantee specific sanction amounts, interest rate percentages,
                  or expedited disbursement timelines.
                </p>
              </div>
              <p className="legal-paragraph">
                Loan approval is governed strictly by the independent credit assessment criteria, financial evaluations, risk
                policies, and underwriting parameters of the relevant lending bank, Housing Finance Company (HFC), or Non-Banking
                Financial Company (NBFC).
              </p>
            </section>

            {/* Section 3 */}
            <section id="lender-discretion" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">3</span>
                Final Loan Decisions by Lenders
              </h2>
              <p className="legal-paragraph">
                Balaji Associates is an independent loan consultancy and channel partner. We are <strong>not</strong> a bank, NBFC,
                or primary lending institution. All credit decisions—including:
              </p>
              <ul className="legal-list">
                <li>Whether to approve or reject a loan application;</li>
                <li>The final loan quantum sanctioned;</li>
                <li>The applicable floating or fixed interest rate, benchmark spread, and reset frequency;</li>
                <li>Processing fees, administrative charges, inspection fees, and stamp duty levies;</li>
                <li>Loan repayment tenure, EMI schedule, and amortization conditions; and</li>
                <li>Collateral valuation, legal search requirements, and title clearance criteria;</li>
              </ul>
              <p className="legal-paragraph">
                are made solely, exclusively, and independently by the relevant lending bank or financial institution. Balaji Associates
                holds no authority to influence, override, or alter a lender's independent underwriting decision.
              </p>
            </section>

            {/* Section 4 */}
            <section id="no-insurance-guarantee" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">4</span>
                No Guarantee of Insurance Issuance or Claims
              </h2>
              <p className="legal-paragraph">
                For all insurance categories presented on this website (including Health Insurance, Motor Insurance, SME & Commercial
                Insurance, Travel Insurance, and Home Insurance):
              </p>
              <ul className="legal-list">
                <li><strong className="legal-list-strong">No Issuance Guarantee:</strong> Submission of an insurance inquiry or application does not guarantee policy acceptance or coverage commencement;</li>
                <li><strong className="legal-list-strong">No Claim Settlement Authority:</strong> Balaji Associates does not assess, adjust, settle, or guarantee the approval of any insurance claim. All claim determinations (cashless approvals, reimbursements, partial deductions, or repudiations) are made exclusively by the concerned insurer or Third-Party Administrator (TPA) in accordance with the formal policy contract;</li>
                <li><strong className="legal-list-strong">No Premium Freezing:</strong> Premium amounts discussed during preliminary conversations are estimates and remain subject to final underwriting, vehicle inspection, or medical evaluation by the insurer.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="insurer-policy-terms" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">5</span>
                Primacy of Insurer Policy Wording
              </h2>
              <p className="legal-paragraph">
                Insurance is a legal contract governed by the principle of utmost good faith (<em>uberrima fides</em>) and the
                specific clauses of the official policy schedule, policy wordings, endorsements, and prospectus issued by the
                respective IRDAI-registered insurance company.
              </p>
              <div className="legal-callout info">
                <div className="legal-callout-title">
                  <FileCheck2 size={16} /> Reading Policy Exclusions & Waiting Periods
                </div>
                <p className="legal-callout-p">
                  Website summaries of insurance products are illustrative and cannot capture every sub-limit, co-payment clause,
                  waiting period, or excluded condition. In the event of any contradiction or ambiguity between website content
                  and the official policy document issued by the insurer, the official insurer policy document shall prevail in all respects.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="indicative-rates" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">6</span>
                Indicative Rates, Fees & Terms
              </h2>
              <p className="legal-paragraph">
                Interest rates, processing fee percentages, loan-to-value (LTV) ratios, tenures, and insurance premium indicators
                displayed across this website or communicated by representatives are indicative, based on prevailing industry norms
                at the time of publication, and subject to change without prior notice.
              </p>
              <p className="legal-paragraph">
                Lenders and insurers frequently adjust their rates and underwriting rules based on Reserve Bank of India repo rate revisions,
                market liquidity, internal credit risk matrices, individual applicant CIBIL scores, property risk assessments, and
                actuarial tables.
              </p>
            </section>

            {/* Section 7 */}
            <section id="no-guaranteed-returns" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">7</span>
                No Guaranteed Savings or Outcomes
              </h2>
              <p className="legal-paragraph">
                Balaji Associates does not promise or warrant guaranteed financial savings, guaranteed loan balance transfer interest
                reductions, or guaranteed claim recoveries. Every financial transaction is distinct and depends on market factors,
                existing loan agreements, prepayment penalties, transfer processing charges, and individual creditworthiness.
              </p>
            </section>

            {/* Section 8 */}
            <section id="official-documents" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">8</span>
                Not a Substitute for Official Contracts & KFS
              </h2>
              <p className="legal-paragraph">
                The guidance provided through this website is strictly supplementary and does not replace the necessity of carefully
                reading official documentation. Before executing any credit or insurance commitment, visitors and applicants must:
              </p>
              <ul className="legal-list">
                <li>Review the official <strong>Key Fact Statement (KFS)</strong> provided by the lender, which specifies the Annual Percentage Rate (APR), complete fee schedule, and total cost of credit;</li>
                <li>Carefully inspect the official Sanction Letter, Loan Agreement, Hypothecation Deed, and terms of mortgage;</li>
                <li>Examine the Insurance Policy Wordings, Customer Information Sheet (CIS), waiting period schedules, and list of non-payable items.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="independent-verification" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">9</span>
                Independent Verification Essential
              </h2>
              <p className="legal-paragraph">
                Visitors are strongly advised and encouraged to independently verify all figures, terms, covenants, and conditions
                directly with the relevant lending bank, NBFC, or insurance company before executing any document, taking disbursement,
                or remitting premium payments.
              </p>
            </section>

            {/* Section 10 */}
            <section id="no-professional-advice" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">10</span>
                No Personalised Tax, Legal or Investment Advice
              </h2>
              <p className="legal-paragraph">
                Balaji Associates provides loan and insurance documentation assistance. We are not chartered accountants, tax consultants,
                legal advocates, or registered investment advisors (SEBI RIA).
              </p>
              <p className="legal-paragraph">
                References to potential tax benefits (such as deductions under Section 80C, 24(b), or 80D of the Income Tax Act, 1961)
                are general in nature and subject to amendments by the Government of India. You should consult a qualified Chartered
                Accountant, tax consultant, or legal counsel for professional advice tailored to your financial circumstances.
              </p>
            </section>

            {/* Section 11 */}
            <section id="third-party-trademarks" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">11</span>
                Third-Party Logos, Trademarks & Links
              </h2>
              <p className="legal-paragraph">
                All third-party brand names, institutional logos, product marks, and trademarks (including those of commercial banks,
                NBFCs, and insurance corporations) that appear on this website belong to their respective owners. Their display
                is for informational identification purposes only and does not imply exclusive affiliation, official endorsement,
                or sponsorship unless verified by active channel agreements.
              </p>
            </section>

            {/* Section 12 */}
            <section id="accuracy-limits" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">12</span>
                Accuracy & Content Availability Limits
              </h2>
              <p className="legal-paragraph">
                While Balaji Associates makes reasonable efforts to keep the information on this website accurate, current, and
                reliable, errors, typographical slips, or outdated details may occasionally occur. We provide the website and its
                contents on an "as-is" and "as-available" basis without any express or implied warranty of completeness, accuracy,
                merchantability, or fitness for a particular purpose.
              </p>
              <p className="legal-paragraph">
                To the fullest extent permitted by Indian law, Balaji Associates disclaims any liability for losses or damages
                arising directly or indirectly from actions taken in reliance upon the contents of this website.
              </p>
            </section>

            {/* Section 13 */}
            <section id="contact-clarifications" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-number">13</span>
                Inquiries & Contact Details
              </h2>
              <p className="legal-paragraph">
                If you have questions, require clarification, or would like to discuss our loan or insurance assistance services
                directly with our advisory team, please reach out:
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
                      <div className="legal-contact-item-label">Consultation Office</div>
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
                      <div className="legal-contact-item-label">Direct Lines</div>
                      <div className="legal-contact-item-val">
                        Landline: <a href="tel:04524290544">0452-4290544</a><br />
                        Mobile / WhatsApp: <a href="https://wa.me/919842817644" target="_blank" rel="noopener noreferrer">98428 17644</a>
                      </div>
                    </div>
                  </div>

                  <div className="legal-contact-item">
                    <Mail className="legal-contact-item-icon" />
                    <div>
                      <div className="legal-contact-item-label">Direct Enquiries</div>
                      <div className="legal-contact-item-val">
                        Submit your query via our <Link to="/contact/">Online Contact Form</Link>.<br />
                        <span style={{ fontSize: '12px', color: '#CBD5E1' }}>
                          (General Legal & Feedback placeholder: <code>[contact@balajiassociates.com]</code> — to be designated by site owner)
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
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>

              {/* Quick Legal Navigation Links */}
              <div className="legal-nav-switcher">
                <span className="legal-nav-switcher-title">Related Legal Documents:</span>
                <div className="legal-nav-switcher-links">
                  <Link to="/privacy-policy/" className="legal-nav-switcher-link">Privacy Policy</Link>
                  <Link to="/terms/" className="legal-nav-switcher-link">Terms & Conditions</Link>
                  <span className="legal-nav-switcher-link current">Disclaimer</span>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}

export default Disclaimer;
