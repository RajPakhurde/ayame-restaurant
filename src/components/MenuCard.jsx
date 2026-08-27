import React from 'react';
import './MenuCard.css';

export default function MenuCard({ name, description, price, image }) {
  const isSignature = name.includes('Signature') || name.includes('Miso Black Cod');

  return (
    <article className="menu-card">
      <div className="menu-card-image-wrapper">
        <img 
          src={image} 
          alt={name} 
          className="menu-card-image" 
          loading="lazy" 
        />
        <div className="menu-card-image-overlay"></div>
        {isSignature && <span className="menu-card-badge">Signature</span>}
      </div>
      <div className="menu-card-content">
        <div className="menu-card-header">
          <h3 className="menu-card-title">{name}</h3>
          <span className="menu-card-price">{price}</span>
        </div>
        <p className="menu-card-description">{description}</p>
      </div>
    </article>
  );
}
