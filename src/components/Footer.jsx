import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="container footer-container">
        {/* Monogram Iris Watermark */}
        <div className="footer-watermark" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="var(--iris-dim)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50,90 C50,70 48,55 50,40" />
            <path d="M50,40 C45,30 40,25 40,15 C45,15 48,22 50,30 C52,22 55,15 60,15 C60,25 55,30 50,40 Z" />
            <path d="M50,40 C35,42 25,48 20,60 C25,62 35,55 45,45" />
            <path d="M50,40 C65,42 75,48 80,60 C75,62 65,55 55,45" />
            <path d="M45,35 C42,20 48,10 50,5 C52,10 58,20 55,35 Z" />
          </svg>
        </div>

        {/* Brand / Logo */}
        <div className="footer-brand">
          <a href="#hero" className="footer-logo-link">AYAME</a>
          <p className="footer-brand-tagline">Modern Asian Artistry</p>
        </div>

        {/* Social Link */}
        <div className="footer-social">
          <a 
            href="https://www.instagram.com/ayamenavimumbai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-instagram-link"
          >
            @ayamenavimumbai
          </a>
        </div>

        {/* Footer Navigation */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          <a href="#about" className="footer-nav-link">About</a>
          <a href="#menu" className="footer-nav-link">Menu</a>
          <a href="#gallery" className="footer-nav-link">Gallery</a>
          <a href="#reserve" className="footer-nav-link">Reserve</a>
        </nav>

        <div className="footer-divider"></div>

        {/* Credit Line */}
        <div className="footer-bottom">
          <p className="footer-credit">
            Concept design &amp; build &mdash; portfolio project, not affiliated with Ayame.
          </p>
        </div>
      </div>
    </footer>
  );
}
