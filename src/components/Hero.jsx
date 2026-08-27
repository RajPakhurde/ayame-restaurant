import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <>
      {/* Navigation Header */}
      <motion.header 
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hero-header"
      >
        <div className="container header-container">
          <a href="#hero" className="header-logo">
            AYAME
          </a>
          <nav className="header-nav" aria-label="Main Navigation">
            <a href="#about" className="nav-link">About</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#reserve" className="nav-link">Reserve</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <a href="#reserve" className="header-cta">
            Book Now
          </a>
        </div>
      </motion.header>

      <section className="hero-section" id="hero">
        {/* Decorative large bleeding Iris background SVG */}
        <div className="hero-decorative-iris" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="var(--iris-dim)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50,90 C50,70 48,55 50,40" />
            <path d="M50,40 C45,30 40,25 40,15 C45,15 48,22 50,30 C52,22 55,15 60,15 C60,25 55,30 50,40 Z" />
            <path d="M50,40 C35,42 25,48 20,60 C25,62 35,55 45,45" />
            <path d="M50,40 C65,42 75,48 80,60 C75,62 65,55 55,45" />
            <path d="M45,35 C42,20 48,10 50,5 C52,10 58,20 55,35 Z" />
          </svg>
        </div>

      {/* Main Content Area */}
      <div className="container hero-container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <motion.p variants={itemVariants} className="hero-eyebrow">
            MODERN ASIAN LOUNGE &middot; CBD BELAPUR
          </motion.p>
          <motion.h1 variants={itemVariants} className="hero-headline">
            Designed for those who linger.
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-subhead">
            Sushi and small plates served with quiet precision, in a room built for slow evenings.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#reserve" className="btn btn-primary">
              Reserve a Table
            </a>
            <a href="#menu" className="btn btn-secondary">
              View Menu
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom overlay/indicator for layout spacing */}
      <div className="hero-bottom-fade"></div>
    </section>
  </>
  );
}
