import React from 'react';
import callIcon from '../assets/images/home/hero/call-icon.png';
import whatsappIcon from '../assets/images/home/hero/whatsapp-icon.png';

function FloatingContact() {
  return (
    <div className="floating-contact-group" aria-label="Quick contact buttons">
      <a
        href="https://wa.me/919842817644"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Chat with Balaji Associates on WhatsApp"
        title="Chat on WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="floating-btn-img" />
      </a>
      <a
        href="tel:9842817644"
        className="floating-btn floating-phone"
        aria-label="Call Balaji Associates"
        title="Call 98428 17644"
      >
        <img src={callIcon} alt="Call" className="floating-btn-img" />
      </a>
    </div>
  );
}

export default FloatingContact;
