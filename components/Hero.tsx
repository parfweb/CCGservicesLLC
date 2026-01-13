import React from 'react';
import { ArrowUpRight, Server, Database } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-gray/30">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.6] pointer-events-none [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-limeDark"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-600 tracking-wide">SEO, Web Design & Lead Generation</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-black mb-8 leading-[1.1]">
              Digital Solutions for <br/>
              <span className="relative inline-block z-10">
                Growing Businesses
                <span className="absolute bottom-3 left-0 w-full h-4 bg-brand-lime -z-10 opacity-70"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-lg text-lg text-zinc-500 mb-10 leading-relaxed">
              We build professional, high-converting websites for American small businesses. From truck companies to dental practices - we help you grow your customer base online.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="w-full sm:w-auto px-8 py-4 btn-primary rounded-full font-semibold text-base flex items-center justify-center gap-2"
              >
                Get a Free Website Review
              </a>
              <a
                href="#work"
                onClick={(e) => handleScroll(e, '#work')}
                className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-600 rounded-full font-semibold text-base hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Right Content - Floating Widgets (Decorative/Tech feel) */}
          <div className="relative h-[450px] lg:h-[500px] w-full block perspective-[1000px] mt-8 lg:mt-0">
             
             {/* Card 1: Local Visibility */}
             <div className="absolute top-[0%] left-1/2 -translate-x-1/2 lg:left-auto lg:right-[10%] lg:translate-x-0 lg:top-[10%] w-[280px] sm:w-[320px] z-10">
                <div className="animate-float-slow w-full p-5 bg-white rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                      <Server className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-sm text-zinc-900 truncate">Local Visibility</h4>
                        <span className="text-[10px] text-zinc-400">Monthly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-zinc-500 truncate">Google Search Traffic</div>
                        <span className="px-1.5 py-0.5 rounded bg-zinc-100 text-[10px] font-medium text-zinc-600">+24%</span>
                      </div>
                    </div>
                </div>
             </div>

             {/* Card 2: New Customer Leads */}
             <div className="absolute top-[33%] left-1/2 -translate-x-1/2 lg:left-auto lg:right-[20%] lg:translate-x-0 lg:top-[35%] w-[300px] sm:w-[340px] z-20">
                <div className="animate-float-medium w-full p-5 bg-white rounded-2xl shadow-2xl shadow-brand-lime/10 border border-zinc-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-sm text-zinc-900 truncate">New Customer Leads</h4>
                        <span className="text-[10px] text-zinc-400">Real-time</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-zinc-500 truncate">Calls & Form Requests</div>
                        <span className="px-2 py-0.5 rounded-full bg-brand-lime text-[10px] font-bold text-black">+15.4%</span>
                      </div>
                    </div>
                </div>
             </div>

             {/* Card 3: Mobile Friendly */}
             <div className="absolute top-[66%] left-1/2 -translate-x-1/2 lg:left-auto lg:right-[15%] lg:translate-x-0 lg:top-[60%] w-[280px] sm:w-[320px] z-10">
                <div className="animate-float-fast w-full p-5 bg-white rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-sm text-zinc-900 truncate">Mobile Friendly</h4>
                        <span className="text-[10px] text-zinc-400">Google Test</span>
                      </div>
                       <div className="flex items-center justify-between">
                        <div className="text-xs text-zinc-500 truncate">Performance Score</div>
                        <span className="px-1.5 py-0.5 rounded bg-black text-[10px] font-medium text-white">100/100</span>
                      </div>
                    </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;