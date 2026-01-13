import React, { useState } from 'react';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<'privacy' | 'terms' | null>(null);

  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    
    // Handle logo click (scroll to top)
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const openModal = (e: React.MouseEvent, type: 'privacy' | 'terms') => {
    e.preventDefault();
    setModalOpen(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <footer className="bg-zinc-50 border-t border-zinc-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="#top" className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleScroll(e, '#top')}>
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <rect width="40" height="40" rx="12" fill="#111111"/>
                <rect x="12" y="11" width="5" height="18" rx="2.5" fill="#D2F865"/>
                <path d="M21 11H23C26.3137 11 29 14.5817 29 17V17C29 20.3137 26.3137 23 23 23H21" stroke="#D2F865" strokeWidth="5" strokeLinecap="round"/>
              </svg>
              <span className="text-xl font-bold text-brand-black">ParfWeb Solutions</span>
            </a>
            <p className="text-zinc-500 text-sm md:border-l md:border-zinc-300 md:pl-4">© {new Date().getFullYear()} ParfWeb Solutions. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-zinc-600 font-medium">
            <a href="#" onClick={(e) => openModal(e, 'privacy')} className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => openModal(e, 'terms')} className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modals - Keep existing code */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <button onClick={closeModal} className="absolute top-4 right-4 p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors">
              <X className="w-5 h-5" />
            </button>
            
            {modalOpen === 'privacy' && (
              <div className="prose prose-zinc max-w-none">
                <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                <p className="text-sm text-zinc-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                <div className="space-y-4 text-zinc-600">
                  <p>At ParfWeb Solutions, we respect your privacy and are committed to protecting the personal information you share with us. This policy outlines how we collect, use, and safeguard your data.</p>
                  <h3 className="text-lg font-bold text-black mt-6">1. Information We Collect</h3>
                  <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or sign up for our services (Starter, Growth, Pro websites, or recurring plans).</p>
                  <h3 className="text-lg font-bold text-black mt-6">2. How We Use Your Information</h3>
                  <p>We use your information to provide, operate, and maintain our website and services, process payments, and communicate with you regarding updates.</p>
                  <h3 className="text-lg font-bold text-black mt-6">3. Data Security</h3>
                  <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access.</p>
                </div>
              </div>
            )}
            
            {modalOpen === 'terms' && (
               <div className="prose prose-zinc max-w-none">
                <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
                <p className="text-sm text-zinc-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                <div className="space-y-4 text-zinc-600">
                  <p>By accessing and using the ParfWeb Solutions website and services, you agree to comply with and be bound by the following terms and conditions.</p>
                  <h3 className="text-lg font-bold text-black mt-6">1. Services Provided</h3>
                  <p>ParfWeb Solutions provides digital services including Web Design, Maintenance, and SEO.</p>
                  <h3 className="text-lg font-bold text-black mt-6">2. Payments & Billing</h3>
                  <p>A deposit is required to commence work. Recurring services are billed in advance.</p>
                  <h3 className="text-lg font-bold text-black mt-6">3. Intellectual Property</h3>
                  <p>Upon full payment, you own the rights to the final website design and custom content created for you.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;