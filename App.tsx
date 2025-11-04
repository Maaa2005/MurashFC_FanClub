import React from 'react';
import HeroSection from './components/HeroSection';
import PrologueSection from './components/PrologueSection';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#1A1A1A] text-white min-h-screen">
      <main>
        <HeroSection />
        <PrologueSection />
        <BenefitsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;