import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Industries from './components/Industries';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Hosting from './components/Hosting';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-brand-black overflow-x-hidden selection:bg-brand-lime selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Pricing />
        <Process />
        <Industries />
        <Hosting />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;