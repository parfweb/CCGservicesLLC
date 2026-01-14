import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Our Work', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Handle logo click (scroll to top)
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100; // Updated for taller navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300 border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#top" className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={(e) => handleScroll(e, '#top')}>
            {/* Modern Abstract Geometric Logo - Bigger */}
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <rect width="40" height="40" rx="12" fill="#111111" />
              {/* Abstract P: Vertical Pillar + Detached Bow */}
              <rect x="12" y="11" width="5" height="18" rx="2.5" fill="#D2F865" />
              <path d="M21 11H23C26.3137 11 29 13.6863 29 17V17C29 20.3137 26.3137 23 23 23H21" stroke="#D2F865" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <span className="text-2xl font-bold tracking-tight text-brand-black">
              ParfWeb Solutions
            </span>
          </a>

          {/* Desktop Menu - Bigger Text */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-base font-semibold text-zinc-600 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons - Bigger & More Prominent */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-base font-bold text-zinc-700 hover:text-black transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-brand-lime/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-brand-limeDark" />
              </div>
              (555) 123-4567
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="btn-primary px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-black/10 hover:shadow-xl transition-all"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-black p-2 hover:bg-zinc-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-200 absolute w-full left-0 top-24 shadow-2xl">
          <div className="px-6 py-8 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block text-xl font-semibold text-zinc-700 hover:text-black"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-200">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-lg font-bold text-zinc-700 mb-4"
              >
                <Phone className="w-5 h-5 text-brand-limeDark" />
                (555) 123-4567
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="block w-full text-center btn-primary px-6 py-4 rounded-xl text-lg font-bold"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;