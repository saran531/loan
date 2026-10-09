import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { loansDropdown, insuranceDropdown } from '../data/navigation';
import callIcon from '../assets/images/home/hero/call-icon.png';
import whatsappIcon from '../assets/images/home/hero/whatsapp-icon.png';

function Header() {
  const [loansOpen, setLoansOpen] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Normalize path by removing trailing slash for consistent route matching (except root '/')
  const normalize = (path) => {
    if (!path) return '';
    const trimmed = path.trim();
    return trimmed.length > 1 && trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed;
  };

  const currentNormalized = normalize(location.pathname);

  // Exact route match helper
  const isPathActive = (targetPath) => {
    return normalize(targetPath) === currentNormalized;
  };

  // Determine if any Loan child page is currently active
  const isLoansActive = loansDropdown.some((item) => normalize(item.path) === currentNormalized);

  // Determine if any Insurance child page is currently active
  const isInsuranceActive = insuranceDropdown.some((item) => normalize(item.path) === currentNormalized);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setLoansOpen(false);
    setInsuranceOpen(false);
  };

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleMouseEnter = (setter) => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      setter(true);
    }
  };

  const handleMouseLeave = (setter) => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      setter(false);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo & Tagline */}
        <Link to="/" className="header-brand" onClick={closeMobileMenu}>
          <div className="brand-logo-mark">
            <span className="logo-b">B</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Balaji Associates</span>
            <span className="brand-tagline">Your Financial Need. The Right Guidance.</span>
          </div>
        </Link>

        {/* Backdrop for mobile drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-nav-backdrop"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}

        {/* Main Desktop & Mobile Navigation */}
        <nav
          className={`site-nav ${mobileMenuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="site-nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isPathActive('/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            {/* Loans Dropdown */}
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter(setLoansOpen)}
              onMouseLeave={() => handleMouseLeave(setLoansOpen)}
            >
              <button 
                type="button"
                className={`dropdown-toggle ${isLoansActive ? 'active' : ''}`}
                onClick={() => setLoansOpen(!loansOpen)}
                aria-expanded={loansOpen}
              >
                <span>Loans</span>
                <ChevronDown className={`chevron-icon ${loansOpen ? 'rotate' : ''}`} />
              </button>
              <ul className={`dropdown-menu ${loansOpen ? 'show' : ''}`}>
                {loansDropdown.map((item, index) => {
                  const isItemActive = normalize(item.path) === currentNormalized;
                  return (
                    <li key={index} className="dropdown-menu-item">
                      <Link 
                        to={item.path} 
                        onClick={closeMobileMenu} 
                        className={`dropdown-sublink ${isItemActive ? 'active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            {/* Insurance Dropdown */}
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter(setInsuranceOpen)}
              onMouseLeave={() => handleMouseLeave(setInsuranceOpen)}
            >
              <button 
                type="button"
                className={`dropdown-toggle ${isInsuranceActive ? 'active' : ''}`}
                onClick={() => setInsuranceOpen(!insuranceOpen)}
                aria-expanded={insuranceOpen}
              >
                <span>Insurance</span>
                <ChevronDown className={`chevron-icon ${insuranceOpen ? 'rotate' : ''}`} />
              </button>
              <ul className={`dropdown-menu ${insuranceOpen ? 'show' : ''}`}>
                {insuranceDropdown.map((item, index) => {
                  const isItemActive = normalize(item.path) === currentNormalized;
                  return (
                    <li key={index} className="dropdown-menu-item">
                      <Link 
                        to={item.path} 
                        onClick={closeMobileMenu} 
                        className={`dropdown-sublink ${isItemActive ? 'active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li className="nav-item">
              <Link 
                to="/about/" 
                className={`nav-link ${isPathActive('/about/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/resources/" 
                className={`nav-link ${isPathActive('/resources/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/faq/" 
                className={`nav-link ${isPathActive('/faq/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact/" 
                className={`nav-link ${isPathActive('/contact/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Quick Contact CTAs inside Mobile Menu Drawer */}
          <div className="mobile-nav-cta-group">
            <a href="tel:9842817644" className="mobile-drawer-call-btn" onClick={closeMobileMenu}>
              <Phone className="w-4 h-4" />
              <span>Call: 98428 17644</span>
            </a>
            <a 
              href="https://wa.me/919842817644" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-drawer-whatsapp-btn"
              onClick={closeMobileMenu}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: 98428 17644</span>
            </a>
          </div>
        </nav>


        {/* Header Right Action Buttons (Desktop Bar & Mobile Toggle) */}
        <div className="header-actions">
          <a href="tel:9842817644" className="btn-header-call">
            <img src={callIcon} alt="" className="btn-header-icon" />
            <span>Call</span>
          </a>
          <a 
            href="https://wa.me/919842817644" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-header-whatsapp"
          >
            <img src={whatsappIcon} alt="" className="btn-header-icon" />
            <span>WhatsApp</span>
          </a>
          
          {/* Mobile menu toggle button */}
          <button 
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

