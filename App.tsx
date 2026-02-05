import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileCallBar from './components/MobileCallBar';
import Home from './pages/Home';
import IndustryPage from './pages/IndustryPage';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-brand-black overflow-x-hidden selection:bg-brand-lime selection:text-black pb-16 md:pb-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plumber-web-design" element={<IndustryPage industry="plumber" />} />
        <Route path="/electrician-web-design" element={<IndustryPage industry="electrician" />} />
        <Route path="/nail-salon-web-design" element={<IndustryPage industry="nail-salon" />} />
        <Route path="/painter-web-design" element={<IndustryPage industry="painter" />} />
        <Route path="/landscaping-web-design" element={<IndustryPage industry="landscaping" />} />
        <Route path="/cleaning-web-design" element={<IndustryPage industry="cleaning" />} />
        <Route path="/hvac-web-design" element={<IndustryPage industry="hvac" />} />
        <Route path="/dental-web-design" element={<IndustryPage industry="dental" />} />
        <Route path="/medical-web-design" element={<IndustryPage industry="medical" />} />
        <Route path="/education-web-design" element={<IndustryPage industry="education" />} />
        <Route path="/restaurant-web-design" element={<IndustryPage industry="restaurant" />} />
        <Route path="/professional-web-design" element={<IndustryPage industry="professional" />} />
        <Route path="/hotel-web-design" element={<IndustryPage industry="hotel" />} />
        <Route path="/events-web-design" element={<IndustryPage industry="events" />} />
        <Route path="/coaching-web-design" element={<IndustryPage industry="coaching" />} />
        <Route path="/ecommerce-web-design" element={<IndustryPage industry="ecommerce" />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default App;