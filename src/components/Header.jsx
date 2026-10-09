import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { loansDropdown, insuranceDropdown } from '../data/navigation';
import callIcon from '../assets/images/home/hero/call-icon.png';
import whatsappIcon from '../assets/images/home/hero/whatsapp-icon.png';

function Header() {
  const [loansOpen, setLoansOpen] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setLoansOpen(false);
    setInsuranceOpen(false);
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

        {/* Main Desktop & Mobile Navigation */}
        <nav className={`site-nav ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <ul className="site-nav-list">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>

            {/* Loans Dropdown */}
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => setLoansOpen(true)}
              onMouseLeave={() => setLoansOpen(false)}
            >
              <button 
                className="dropdown-toggle"
                onClick={() => setLoansOpen(!loansOpen)}
                aria-expanded={loansOpen}
              >
                Loans <ChevronDown className={`chevron-icon ${loansOpen ? 'rotate' : ''}`} />
              </button>
              <ul className={`dropdown-menu ${loansOpen ? 'show' : ''}`}>
                {loansDropdown.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Insurance Dropdown */}
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => setInsuranceOpen(true)}
              onMouseLeave={() => setInsuranceOpen(false)}
            >
              <button 
                className="dropdown-toggle"
                onClick={() => setInsuranceOpen(!insuranceOpen)}
                aria-expanded={insuranceOpen}
              >
                Insurance <ChevronDown className={`chevron-icon ${insuranceOpen ? 'rotate' : ''}`} />
              </button>
              <ul className={`dropdown-menu ${insuranceOpen ? 'show' : ''}`}>
                {insuranceDropdown.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink 
                to="/about/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/resources/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/faq/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Header Right Action Buttons */}
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
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
