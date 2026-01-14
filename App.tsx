import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeServe from './components/WhoWeServe';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Hosting from './components/Hosting';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MobileCallBar from './components/MobileCallBar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-brand-black overflow-x-hidden selection:bg-brand-lime selection:text-black pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <WhoWeServe />
        <Work />
        <Pricing />
        <Hosting />
        <Testimonials />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default App;