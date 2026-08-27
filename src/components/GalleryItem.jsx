import React from 'react';
import './GalleryItem.css';

export default function GalleryItem({ src, alt, caption }) {
  return (
    <div className="gallery-item">
      <img 
        src={src} 
        alt={alt} 
        className="gallery-image" 
        loading="lazy" 
      />
      <div className="gallery-item-overlay">
        <span className="gallery-caption">{caption}</span>
      </div>
    </div>
  );
}
