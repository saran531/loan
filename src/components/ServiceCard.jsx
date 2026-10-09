import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, image, link, badge }) {
  return (
    <motion.div 
      className="service-card"
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div className="service-card-header">
        {Icon && (
          <div className="service-card-icon-wrap">
            <Icon className="service-card-icon" />
          </div>
        )}
        <h3 className="service-card-title">{title}</h3>
      </div>
      <p className="service-card-desc">{description}</p>
      <div className="service-card-img-wrap">
        {image ? (
          <img src={image} alt={title} className="service-card-img" loading="lazy" />
        ) : (
          <div className="service-card-img-placeholder" />
        )}
        {badge && <span className="service-card-badge">{badge}</span>}
      </div>
      <Link to={link} className="service-card-link">
        <span>Explore</span>
        <ArrowRight className="w-4 h-4 link-arrow" />
      </Link>
    </motion.div>
  );
}

export default ServiceCard;
