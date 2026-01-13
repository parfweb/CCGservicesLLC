import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  return (
    <section id="pricing" className="py-24 bg-brand-gray/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Website Packages</h2>
          <p className="text-zinc-500 text-lg">Transparent pricing for professional web design.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Starter */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col hover:border-zinc-300 transition-all">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-black">Starter Website</h3>
              <p className="text-zinc-500 text-sm mt-2">Perfect for getting your business online quickly.</p>
            </div>
            <div className="mb-8">
               <div className="text-4xl font-bold text-brand-black">$500<span className="text-lg align-top text-zinc-400">+</span></div>
               <p className="text-xs text-zinc-400 mt-1">Base price, depends on complexity</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-500"/> Professional Design</li>
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-500"/> Mobile-Friendly</li>
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-500"/> Essential Pages</li>
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-500"/> Contact Form</li>
            </ul>
            <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="block text-center w-full py-3 border border-zinc-200 text-brand-black font-bold rounded-xl hover:bg-zinc-50 transition-colors"
            >
                Get Started
            </a>
          </div>

          {/* Growth - Highlighted */}
          <div className="bg-white p-8 rounded-3xl border-2 border-brand-black shadow-2xl relative flex flex-col transform md:-translate-y-6">
            <div className="absolute top-0 right-0 bg-brand-lime text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl border-b border-l border-brand-black">MOST POPULAR</div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-black">Growth Website</h3>
              <p className="text-zinc-500 text-sm mt-2">For businesses that want more leads and traffic.</p>
            </div>
             <div className="mb-8">
               <div className="text-4xl font-bold text-brand-black">$1,000<span className="text-lg align-top text-zinc-400">+</span></div>
               <p className="text-xs text-zinc-400 mt-1">Includes added features & pages</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-600"/> More Pages & Content</li>
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-600"/> Conversion Optimized</li>
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-600"/> Analytics Setup</li>
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-600"/> Speed Optimization</li>
            </ul>
            <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="block text-center w-full py-3 btn-primary font-bold rounded-xl shadow-md"
            >
                Get Started
            </a>
          </div>

          {/* Pro */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col hover:border-zinc-300 transition-all">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-black">Pro Website</h3>
              <p className="text-zinc-500 text-sm mt-2">For established businesses focused on domination.</p>
            </div>
             <div className="mb-8">
               <div className="text-4xl font-bold text-brand-black">$1,800<span className="text-lg align-top text-zinc-400">+</span></div>
               <p className="text-xs text-zinc-400 mt-1">Full-scale digital solution</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-500"/> Advanced SEO Setup</li>
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-500"/> Industry-Specific Structure</li>
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-500"/> Scalable Architecture</li>
              <li className="flex items-center gap-3 text-zinc-700"><Check className="w-5 h-5 text-green-500"/> Long-Term Growth Ready</li>
            </ul>
            <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="block text-center w-full py-3 border border-zinc-200 text-brand-black font-bold rounded-xl hover:bg-zinc-50 transition-colors"
            >
                Get Started
            </a>
          </div>

        </div>

        <p className="text-center text-zinc-400 mt-12 text-sm">Need a custom quote? <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-brand-black font-bold underline">Contact us</a>.</p>
      </div>
    </section>
  );
};

export default Pricing;