
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsSection from './components/ClientsSection';
import Features from './components/Features';
import PixelgradeSection from './components/PixelgradeSection';
import StatsSection from './components/StatsSection';
import HowToDesignSection from './components/HowToDesignSection';
import Testimonial from './components/Testimonial';
import CommunityUpdates from './components/CommunityUpdates';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage'; // Import the new component
// Removed './App.css' import as it's likely not needed with Tailwind
// import './App.css';

function App() {
  return ( 
    <div className="App font-inter"> {/* Added font-inter globally */}
      <Navbar />
      <main>
        <Hero />
        <ClientsSection />
        <Features />
        <PixelgradeSection />
        <StatsSection />
        <HowToDesignSection />
        <Testimonial />
        <CommunityUpdates />
        <CTASection />
      </main>
      <ProductPage /> {/* Add the ProductPage component */}
      <Footer />
    </div>
  );
}

export default App;
