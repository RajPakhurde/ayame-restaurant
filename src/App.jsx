import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Gallery from './components/Gallery';
import InfoBar from './components/InfoBar';
import ReserveForm from './components/ReserveForm';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum load duration of 2.8s for the chef preparation steps animation to cycle fully
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>
      
      <main>
        {/* Hero Landing */}
        <Hero />
        
        {/* Brand Concept & Ambience */}
        <About />
        
        {/* Signature Highlights Grid */}
        <MenuHighlights />
        
        {/* Lounge Gallery Grid */}
        <Gallery />
        
        {/* Quick Contact & Details strip */}
        <InfoBar />
        
        {/* Reservation Form & Map */}
        <ReserveForm />
        
        {/* Footer info & Credits */}
        <Footer />
      </main>
    </>
  );
}

export default App;
