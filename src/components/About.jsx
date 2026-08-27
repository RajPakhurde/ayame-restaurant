import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="about-grid"
        >
          {/* Text Content Column */}
          <div className="about-content">
            <p className="about-eyebrow">The Ambience</p>
            <h2 className="about-headline">
              A space built for slow evenings.
            </h2>
            <p className="about-description">
              Ayame is a modern Asian lounge built for slow evenings — sushi and small plates served with quiet precision, in a room designed to be noticed. Come for a date, a celebration, or just to sit a while longer than planned.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">CBD Belapur, Navi Mumbai</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience</span>
                <span className="detail-value">Sushi Bar &amp; Artful Cocktails</span>
              </div>
            </div>
          </div>

          {/* Visual Content Column */}
          <div className="about-image-wrapper">
            <img 
              src="/assets/about-ambience.jpg" 
              alt="Ayame elegant interior design showing modern lounge seating with warm lights" 
              className="about-image" 
            />
            <div className="about-image-border"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
