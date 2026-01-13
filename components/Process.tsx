import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Simple Process. Amazing Results.</h2>
          <p className="text-zinc-500 text-lg">We make getting a new website easy. Here's how we'll work together.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-0.5 bg-zinc-100 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 bg-white pt-4">
            <div className="w-20 h-20 bg-brand-lime border-4 border-white shadow-lg rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">1</div>
            <div className="text-center">
               <h3 className="text-xl font-bold text-brand-black mb-3">Free Consultation</h3>
               <p className="text-zinc-500 leading-relaxed px-4 mb-4">We'll discuss your business goals, target customers, and what you want your website to achieve. No pressure, just honest advice.</p>
               <ul className="text-xs font-bold uppercase tracking-wide text-zinc-400 space-y-1">
                 <li>30-minute call</li>
                 <li>Custom proposal</li>
                 <li>Upfront pricing</li>
               </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 bg-white pt-4">
            <div className="w-20 h-20 bg-white border-4 border-zinc-100 shadow-lg rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto text-zinc-400">2</div>
            <div className="text-center">
               <h3 className="text-xl font-bold text-brand-black mb-3">Design & Development</h3>
               <p className="text-zinc-500 leading-relaxed px-4 mb-4">Our team builds your custom website. You'll see progress updates along the way and can request revisions until you're thrilled.</p>
               <ul className="text-xs font-bold uppercase tracking-wide text-zinc-400 space-y-1">
                 <li>Custom design</li>
                 <li>Mobile responsive</li>
                 <li>Revisions included</li>
               </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 bg-white pt-4">
            <div className="w-20 h-20 bg-brand-black border-4 border-white shadow-lg rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto text-white">3</div>
            <div className="text-center">
               <h3 className="text-xl font-bold text-brand-black mb-3">Launch & Grow</h3>
               <p className="text-zinc-500 leading-relaxed px-4 mb-4">We launch your site and help you get found online. Plus, we're here whenever you need updates or support.</p>
               <ul className="text-xs font-bold uppercase tracking-wide text-zinc-400 space-y-1">
                 <li>Go live!</li>
                 <li>SEO optimized</li>
                 <li>Ongoing support</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;