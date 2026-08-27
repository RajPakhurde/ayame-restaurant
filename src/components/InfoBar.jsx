import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, ShieldAlert } from 'lucide-react';
import './InfoBar.css';

export default function InfoBar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="info-bar-section">
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="info-bar-grid"
        >
          {/* Hours Info */}
          <motion.div variants={itemVariants} className="info-item">
            <Clock className="info-icon" size={20} aria-hidden="true" />
            <div className="info-text">
              <span className="info-label">Hours</span>
              <span className="info-value">12 PM &ndash; 1:30 AM Daily</span>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div variants={itemVariants} className="info-item">
            <MapPin className="info-icon" size={20} aria-hidden="true" />
            <div className="info-text">
              <span className="info-label">Location</span>
              <span className="info-value">CBD Belapur, Sector 15</span>
            </div>
          </motion.div>

          {/* Phone Info */}
          <motion.div variants={itemVariants} className="info-item">
            <Phone className="info-icon" size={20} aria-hidden="true" />
            <div className="info-text">
              <span className="info-label">Reservations</span>
              <a href="tel:+919967933447" className="info-value info-link">
                +91 99679 33447
              </a>
            </div>
          </motion.div>

          {/* Cover Charge Info */}
          <motion.div variants={itemVariants} className="info-item">
            <ShieldAlert className="info-icon info-icon-alert" size={20} aria-hidden="true" />
            <div className="info-text">
              <span className="info-label">Notice</span>
              <span className="info-value">Cover charges applicable</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
