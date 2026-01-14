import React from 'react';
import { Phone, ArrowRight, TrendingUp, Users, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-brand-gray/30 to-brand-lime/10">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Multi-layered Grid Pattern - More Prominent */}
        <div className="absolute inset-0">
          {/* Primary grid - larger squares */}
          <div className="absolute inset-0 bg-grid-pattern bg-[length:80px_80px] opacity-[0.15]"></div>
          {/* Secondary grid - medium squares with offset */}
          <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.25] translate-x-[25px] translate-y-[25px]"></div>
          {/* Accent grid - smaller squares, more visible */}
          <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-[0.12]"></div>
        </div>

        {/* Gradient Orbs - Blend with grid */}
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-brand-lime/10 rounded-full blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-0 right-[10%] w-[600px] h-[600px] bg-brand-lime/15 rounded-full blur-[140px] animate-float-medium"></div>
        <div className="absolute top-[40%] left-[45%] w-[400px] h-[400px] bg-white/40 rounded-full blur-[100px]"></div>

        {/* Animated Grid Lines - Accent lines that subtly pulse */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-lime to-transparent animate-pulse"></div>
          <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400 to-transparent"></div>
          <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-lime/50 to-transparent animate-pulse"></div>
          <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-400 to-transparent"></div>
          <div className="absolute left-[60%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-lime/40 to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="max-w-xl relative z-20">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-zinc-200 shadow-lg mb-6">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">M</div>
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">J</div>
                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">L</div>
              </div>
              <span className="text-sm font-semibold text-zinc-700">Trusted by Local Businesses</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black mb-6 leading-[1.15]">
              Get More Customers <br className="hidden sm:block" />
              <span className="relative inline-block">
                Calling Your Business
                <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-lime -z-10 opacity-80"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Websites that actually bring in jobs. <strong>For plumbers, electricians, nail salons, and local service pros.</strong> No tech jargon. No surprises. Just more calls.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-8 py-4 btn-primary rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Get Your Free Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+15551234567"
                className="px-6 py-4 bg-white/90 backdrop-blur-sm border-2 border-zinc-200 text-zinc-700 rounded-xl font-bold text-base hover:bg-white hover:border-zinc-300 transition-all flex items-center justify-center gap-2 shadow-md"
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

          {/* Right Content - Integrated Image with Floating Cards */}
          <div className="relative lg:pl-8 h-[400px] lg:h-[550px]">

            {/* Hero Image - Integrated into background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/hero-image.jpg"
                alt="Modern web design and development"
                className="w-full max-w-[500px] h-auto opacity-90 mix-blend-multiply"
              />
            </div>

            {/* Floating Stat Cards - Overlay on image */}
            <div className="relative h-full hidden lg:block">

              {/* Card 1: Top Left - Overlaps text area */}
              <div className="absolute top-8 -left-24 bg-white/95 backdrop-blur-md rounded-2xl py-4 px-5 shadow-xl border border-zinc-100 animate-float-slow z-30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-lime/30 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-brand-limeDark" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-0.5">
                      <h4 className="font-bold text-brand-black text-sm">More Leads</h4>
                      <span className="text-xs text-zinc-400">Real-time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zinc-500">Calls & Forms</span>
                      <span className="text-sm font-bold px-2 py-0.5 bg-brand-lime rounded text-black">+15%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Top Right - Over image */}
              <div className="absolute top-4 right-8 bg-white/95 backdrop-blur-md rounded-2xl py-3 px-4 shadow-xl border border-zinc-100 animate-float-medium z-30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 mb-0.5">Traffic</div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-brand-black">+24%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Bottom Center - Bridges sections */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-2xl py-4 px-5 shadow-xl border border-zinc-100 animate-float-fast z-30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black text-sm mb-0.5">Happy Clients</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-zinc-500">4.9/5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile - Simple Image Display */}
            <div className="lg:hidden flex items-center justify-center h-full">
              <img
                src="/hero-image.jpg"
                alt="Modern web design and development"
                className="w-full max-w-[400px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
