import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Gallery from './components/Gallery';
import InfoBar from './components/InfoBar';
import ReserveForm from './components/ReserveForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
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
