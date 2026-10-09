import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items.length) {
    return null;
  }

  return (
    <div className="faq-accordion-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`faq-accordion-item ${isOpen ? 'active' : ''}`} key={index}>
            <button
              className="faq-accordion-header"
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
            >
              <span className="faq-accordion-question">{item.question}</span>
              <ChevronDown className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="faq-accordion-body-wrapper"
                >
                  <div className="faq-accordion-body">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
