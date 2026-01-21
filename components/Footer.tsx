import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Clock, Shield, Award, Headphones, Facebook, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<'privacy' | 'terms' | null>(null);
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      // Hash navigation on home page or cross-page
      const targetId = href.replace('#', '');
      if (window.location.pathname === '/') {
        if (href === '#top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/${href}`); // simplified for this context, better to use HashLink
      }
    } else {
      // Page navigation
      navigate(href);
      window.scrollTo(0, 0);
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

  // ... (Trust Bar rendering same as before) ...

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

            {/* Company Info */}
            <div className="lg:col-span-2">
              <a href="#top" className="flex items-center gap-3 cursor-pointer mb-6" onClick={(e) => handleNavigation(e, '#top')}>
                <svg width="84" height="48" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <rect width="70" height="40" rx="12" fill="#D2F865" />
                  <path d="M22 14 A 8 8 0 1 0 22 26 M41 14 A 8 8 0 1 0 41 26 M60 14 A 8 8 0 1 0 60 26 M60 20 H55" stroke="#111111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-2xl font-bold text-white">CCG SiteSpark</span>
              </a>
              <p className="text-zinc-400 leading-relaxed mb-6 max-w-md">
                Professional web design and digital marketing for local service businesses. We help plumbers, electricians, salons, and small business owners get found online and grow their customer base.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/people/CCG-SiteSpark/61586624533775/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-black transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ccg-sitespark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-black transition-all duration-300"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Industries - NEW SEO COLUMN */}
            <div>
              <h4 className="font-bold text-white mb-6">Industries</h4>
              <ul className="space-y-3">
                <li><a href="/plumber-web-design" onClick={(e) => handleNavigation(e, '/plumber-web-design')} className="text-zinc-400 hover:text-white transition-colors">Plumbers</a></li>
                <li><a href="/electrician-web-design" onClick={(e) => handleNavigation(e, '/electrician-web-design')} className="text-zinc-400 hover:text-white transition-colors">Electricians</a></li>
                <li><a href="/hvac-web-design" onClick={(e) => handleNavigation(e, '/hvac-web-design')} className="text-zinc-400 hover:text-white transition-colors">HVAC</a></li>
                <li><a href="/landscaping-web-design" onClick={(e) => handleNavigation(e, '/landscaping-web-design')} className="text-zinc-400 hover:text-white transition-colors">Landscaping</a></li>
                <li><a href="/nail-salon-web-design" onClick={(e) => handleNavigation(e, '/nail-salon-web-design')} className="text-zinc-400 hover:text-white transition-colors">Nail Salons</a></li>
                <li><a href="/painter-web-design" onClick={(e) => handleNavigation(e, '/painter-web-design')} className="text-zinc-400 hover:text-white transition-colors">Painters</a></li>
                <li><a href="/cleaning-web-design" onClick={(e) => handleNavigation(e, '/cleaning-web-design')} className="text-zinc-400 hover:text-white transition-colors">Cleaning Services</a></li>
                <li><a href="/dental-web-design" onClick={(e) => handleNavigation(e, '/dental-web-design')} className="text-zinc-400 hover:text-white transition-colors">Dental & Medical</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#work" onClick={(e) => handleNavigation(e, '#work')} className="text-zinc-400 hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#pricing" onClick={(e) => handleNavigation(e, '#pricing')} className="text-zinc-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" onClick={(e) => handleNavigation(e, '#faq')} className="text-zinc-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" onClick={(e) => handleNavigation(e, '#contact')} className="text-zinc-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">(917) 768-8896</p>
                    <p className="text-zinc-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">hello@ccgsitespark.com</p>
                    <p className="text-zinc-500 text-sm">We reply within 24 hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">721 Avenue U</p>
                    <p className="text-zinc-500 text-sm">Brooklyn, NY 11223</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} CCG SiteSpark. All rights reserved.
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
                  <p>At CCG SiteSpark, we respect your privacy and are committed to protecting the personal information you share with us. This policy outlines how we collect, use, and safeguard your data.</p>
                  <h3 className="text-lg font-bold text-black mt-6">1. Information We Collect</h3>
                  <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or sign up for our services.</p>
                  <h3 className="text-lg font-bold text-black mt-6">2. How We Use Your Information</h3>
                  <p>We use your information to provide, operate, and maintain our website and services, process payments, and communicate with you.</p>
                  <h3 className="text-lg font-bold text-black mt-6">3. Data Security</h3>
                  <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access.</p>
                  <h3 className="text-lg font-bold text-black mt-6">4. Contact Us</h3>
                  <p>If you have questions about this policy, contact us at hello@ccgsitespark.com or call (917) 768-8896.</p>
                </div>
              </div>
            )}

            {modalOpen === 'terms' && (
              <div className="prose prose-zinc max-w-none">
                <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
                <p className="text-sm text-zinc-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                <div className="space-y-4 text-zinc-600">
                  <p>By accessing and using the CCG SiteSpark website and services, you agree to comply with and be bound by the following terms and conditions.</p>
                  <h3 className="text-lg font-bold text-black mt-6">1. Services Provided</h3>
                  <p>CCG SiteSpark provides digital services including Web Design, Website Hosting, Maintenance, and Search Engine Optimization for small businesses.</p>
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
