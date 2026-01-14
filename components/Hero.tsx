import React from 'react';
import { Phone, ArrowRight, Smartphone, Search, Clock, ArrowUpRight, Database } from 'lucide-react';

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
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-gray/60 to-white">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.4] pointer-events-none [mask-image:linear-gradient(to_bottom,white_30%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm mb-6">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">M</div>
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">J</div>
                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">L</div>
              </div>
              <span className="text-sm font-semibold text-zinc-700">Trusted by Local Businesses</span>
            </div>

            {/* Heading - Direct & Clear */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black mb-6 leading-[1.15]">
              Get More Customers <br className="hidden sm:block" />
              <span className="relative inline-block">
                Calling Your Business
                <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-lime -z-10 opacity-80"></span>
              </span>
            </h1>

            {/* Subtitle - Plain English */}
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Websites that actually bring in jobs. <strong>For plumbers, electricians, nail salons, and local service pros.</strong> No tech jargon. No surprises. Just more calls.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-8 py-4 btn-primary rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg"
              >
                Get Your Free Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+15551234567"
                className="px-6 py-4 bg-white border-2 border-zinc-200 text-zinc-700 rounded-xl font-bold text-base hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-brand-limeDark" />
                (555) 123-4567
              </a>
            </div>

            {/* Quick Trust Points */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                No contracts
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Website in 7 days
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Starting at $500
              </span>
            </div>
          </div>

          {/* Right Content - Mobile: Feature Card | Desktop: Floating Cards */}
          <div className="relative lg:pl-8">

            {/* Mobile Only: Feature Card */}
            <div className="lg:hidden bg-white rounded-3xl p-6 border border-zinc-200 shadow-xl">
              <div className="mb-5">
                <h3 className="font-bold text-xl text-brand-black mb-2">What You Get</h3>
                <p className="text-sm text-zinc-500">Every website includes:</p>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-brand-lime flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black text-sm">Mobile-Friendly Design</h4>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-brand-lime flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black text-sm">Google-Ready SEO</h4>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-brand-lime flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black text-sm">Fast 7-Day Turnaround</h4>
                  </div>
                </div>
              </div>

              {/* Quick Testimonial */}
              <div className="bg-zinc-900 text-white rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                    MJ
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed mb-1">
                      "My phone started ringing the first week."
                    </p>
                    <p className="text-xs text-zinc-400 font-medium">
                      Mike J. — Plumber, Texas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Only: Floating Animated Cards - Matching Original Design */}
            <div className="hidden lg:block relative h-[420px]">

              {/* Card 1: Local Visibility - Top Right */}
              <div className="absolute top-0 right-0 bg-white rounded-2xl py-4 px-5 shadow-lg border border-zinc-100 animate-float-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-lime/30 flex items-center justify-center shrink-0">
                    <Database className="w-6 h-6 text-brand-limeDark" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-0.5">
                      <h4 className="font-bold text-brand-black">Local Visibility</h4>
                      <span className="text-xs text-zinc-400">Monthly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-500">Google Search Traffic</span>
                      <span className="text-sm font-bold text-green-600">+24%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: New Customer Leads - Middle Left */}
              <div className="absolute top-[140px] left-0 bg-white rounded-2xl py-4 px-5 shadow-lg border border-zinc-100 animate-float-medium">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-lime/30 flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-6 h-6 text-brand-limeDark" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-0.5">
                      <h4 className="font-bold text-brand-black">New Customer Leads</h4>
                      <span className="text-xs text-zinc-400">Real-time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-500">Calls & Form Requests</span>
                      <span className="text-sm font-bold px-2 py-0.5 bg-brand-lime rounded text-black">+15.4%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Mobile Friendly - Bottom Right */}
              <div className="absolute bottom-[40px] right-8 bg-white rounded-2xl py-4 px-5 shadow-lg border border-zinc-100 animate-float-fast">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-0.5">
                      <h4 className="font-bold text-brand-black">Mobile Friendly</h4>
                      <span className="text-xs text-zinc-400">Google Test</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-500">Performance Score</span>
                      <span className="text-sm font-bold px-2 py-0.5 bg-zinc-900 rounded text-white">100/100</span>
                    </div>
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