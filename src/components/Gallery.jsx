import React from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/galleryImages';
import GalleryItem from './GalleryItem';
import './Gallery.css';

export default function Gallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="gallery-header"
        >
          <p className="gallery-eyebrow">The Vibe</p>
          <h2 className="gallery-headline">Designed to be noticed.</h2>
          <p className="gallery-subhead">
            Step inside a sanctuary of modern artistry, designed for those who linger.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="gallery-grid"
        >
          {galleryImages.map((image, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GalleryItem 
                src={image.src}
                alt={image.alt}
                caption={image.caption}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
