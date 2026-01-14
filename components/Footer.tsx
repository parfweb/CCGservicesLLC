import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Clock, Shield, Award, Headphones } from 'lucide-react';

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<'privacy' | 'terms' | null>(null);

  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
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
      {/* Trust Bar */}
      <section className="bg-white border-t border-zinc-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-lime/20 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-brand-black" />
              </div>
              <h4 className="font-bold text-brand-black text-sm">Secure & Reliable</h4>
              <p className="text-xs text-zinc-500">SSL Certified</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-lime/20 flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-brand-black" />
              </div>
              <h4 className="font-bold text-brand-black text-sm">Quality Guaranteed</h4>
              <p className="text-xs text-zinc-500">100% Satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-lime/20 flex items-center justify-center mb-3">
                <Headphones className="w-6 h-6 text-brand-black" />
              </div>
              <h4 className="font-bold text-brand-black text-sm">Real Support</h4>
              <p className="text-xs text-zinc-500">Humans, Not Bots</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-lime/20 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-brand-black" />
              </div>
              <h4 className="font-bold text-brand-black text-sm">Fast Delivery</h4>
              <p className="text-xs text-zinc-500">7-Day Turnaround</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-brand-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Company Info */}
            <div className="lg:col-span-2">
              <a href="#top" className="flex items-center gap-3 cursor-pointer mb-6" onClick={(e) => handleScroll(e, '#top')}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <rect width="40" height="40" rx="12" fill="#D2F865" />
                  <rect x="12" y="11" width="5" height="18" rx="2.5" fill="#111111" />
                  <path d="M21 11H23C26.3137 11 29 14.5817 29 17V17C29 20.3137 26.3137 23 23 23H21" stroke="#111111" strokeWidth="5" strokeLinecap="round" />
                </svg>
                <span className="text-2xl font-bold text-white">ParfWeb Solutions</span>
              </a>
              <p className="text-zinc-400 leading-relaxed mb-6 max-w-md">
                Professional web design and digital marketing for local service businesses. We help plumbers, electricians, salons, and small business owners get found online and grow their customer base.
              </p>
              <div className="flex gap-4">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#work" onClick={(e) => handleScroll(e, '#work')} className="text-zinc-400 hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#pricing" onClick={(e) => handleScroll(e, '#pricing')} className="text-zinc-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="text-zinc-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-zinc-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">(555) 123-4567</p>
                    <p className="text-zinc-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">hello@parfweb.com</p>
                    <p className="text-zinc-500 text-sm">We reply within 24 hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Serving All 50 States</p>
                    <p className="text-zinc-500 text-sm">Remote-first agency</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} ParfWeb Solutions LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" onClick={(e) => openModal(e, 'privacy')} className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" onClick={(e) => openModal(e, 'terms')} className="text-zinc-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
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
                  <p>At ParfWeb Solutions LLC, we respect your privacy and are committed to protecting the personal information you share with us. This policy outlines how we collect, use, and safeguard your data.</p>
                  <h3 className="text-lg font-bold text-black mt-6">1. Information We Collect</h3>
                  <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or sign up for our services.</p>
                  <h3 className="text-lg font-bold text-black mt-6">2. How We Use Your Information</h3>
                  <p>We use your information to provide, operate, and maintain our website and services, process payments, and communicate with you.</p>
                  <h3 className="text-lg font-bold text-black mt-6">3. Data Security</h3>
                  <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access.</p>
                  <h3 className="text-lg font-bold text-black mt-6">4. Contact Us</h3>
                  <p>If you have questions about this policy, contact us at hello@parfweb.com or call (555) 123-4567.</p>
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
                  <p>ParfWeb Solutions LLC provides digital services including Web Design, Website Hosting, Maintenance, and Search Engine Optimization for small businesses.</p>
                  <h3 className="text-lg font-bold text-black mt-6">2. Payments & Billing</h3>
                  <p>A 50% deposit is required to commence work on new website projects. Recurring services (hosting, maintenance) are billed monthly in advance.</p>
                  <h3 className="text-lg font-bold text-black mt-6">3. Intellectual Property</h3>
                  <p>Upon full payment, you own the rights to the final website design and custom content created specifically for your project.</p>
                  <h3 className="text-lg font-bold text-black mt-6">4. Satisfaction Guarantee</h3>
                  <p>We work with you until you are 100% satisfied with your website. Revisions are included during the design phase.</p>
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
