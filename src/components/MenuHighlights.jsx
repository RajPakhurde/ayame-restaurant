import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menuItems';
import MenuCard from './MenuCard';
import './MenuHighlights.css';

export default function MenuHighlights() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="menu-highlights-section" id="menu">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="menu-header"
        >
          <p className="menu-eyebrow">Signature Dishes</p>
          <h2 className="menu-headline">Menu Highlights</h2>
          <p className="menu-subhead">
            A curation of modern Asian artistry designed for slow appreciation.
          </p>
        </motion.div>

        {/* Grid of Menu Items */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="menu-grid"
        >
          {menuItems.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <MenuCard 
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* See Full Menu CTA */}
        <div className="menu-cta-container">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="btn-full-menu"
          >
            See Full Menu
          </button>
        </div>
      </div>

      {/* Lightbox Modal for Menu Pages */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="menu-modal-overlay" 
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="menu-modal-content" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="menu-modal-close" 
                aria-label="Close menu" 
                onClick={() => setIsMenuOpen(false)}
              >
                &times;
              </button>
              <div className="menu-modal-images-container">
                <img 
                  src="/assets/menu/menu1.webp" 
                  alt="Ayame Menu Page 1 - Soup, Dim Sum, Small Eats" 
                  className="menu-modal-image" 
                />
                <img 
                  src="/assets/menu/menu2.webp" 
                  alt="Ayame Menu Page 2 - Sushi, Mains, Desserts, Cocktails" 
                  className="menu-modal-image" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
