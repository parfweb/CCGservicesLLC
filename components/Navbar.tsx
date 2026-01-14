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
      const headerOffset = 85; // Height of navbar + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#top" className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={(e) => handleScroll(e, '#top')}>
            {/* Modern Abstract Geometric Logo */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <rect width="40" height="40" rx="12" fill="#111111" />
              {/* Abstract P: Vertical Pillar + Detached Bow */}
              <rect x="12" y="11" width="5" height="18" rx="2.5" fill="#D2F865" />
              <path d="M21 11H23C26.3137 11 29 13.6863 29 17V17C29 20.3137 26.3137 23 23 23H21" stroke="#D2F865" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-black">
              ParfWeb Solutions
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-black transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-limeDark" />
              (555) 123-4567
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="btn-primary px-6 py-3 rounded-lg text-sm font-semibold shadow-lg shadow-black/5"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-black p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 absolute w-full left-0 top-20 shadow-xl">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block text-lg font-medium text-zinc-600 hover:text-black"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="block w-full text-center btn-primary px-5 py-4 rounded-lg text-base font-semibold mt-4"
            >
              Get a Free Website Review
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;