import React from 'react';
import { Check, X, Star, Users, Rocket, Crown, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
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
    <section id="pricing" className="py-24 bg-brand-gray/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Simple, Honest Pricing</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">No hidden fees. No surprises. You know exactly what you're paying for.</p>
        </div>

        {/* Quick comparison helper */}
        <div className="text-center mb-12 p-4 bg-white rounded-xl border border-zinc-200 inline-block mx-auto">
          <p className="text-sm text-zinc-600">
            <strong className="text-brand-black">Not sure which to pick?</strong> Most small businesses choose <span className="text-brand-limeDark font-bold">Growth</span> - it has everything you need to get customers calling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* Starter */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col hover:border-zinc-300 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-black">Starter</h3>
                <p className="text-xs text-zinc-400">Basic Online Presence</p>
              </div>
            </div>

            {/* Who is this for */}
            <div className="bg-zinc-50 rounded-xl p-3 mb-6">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">Best For:</p>
              <p className="text-sm text-zinc-700">New businesses that just need to be found online. "I need a website so people know I exist."</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-brand-black">$999</div>
              <p className="text-xs text-zinc-400 mt-1">One-time payment</p>
            </div>

            {/* What you get - specific */}
            <div className="mb-6">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-3">What You Get:</p>
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>3 pages</strong> (Home, About, Contact)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Professional, clean design</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Works on phones & tablets</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Contact form (emails you directly)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Ready in <strong>5-7 days</strong></span>
                </li>
              </ul>
            </div>

            {/* What's NOT included */}
            <div className="mb-6 pt-4 border-t border-zinc-100">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-zinc-400 text-xs">
                  <X className="w-3 h-3" /> No SEO optimization
                </li>
                <li className="flex items-center gap-2 text-zinc-400 text-xs">
                  <X className="w-3 h-3" /> No online booking
                </li>
              </ul>
            </div>

            <a href="https://buy.stripe.com/6oU6oB1cb9SofTrbhj18c00" className="w-full py-4 text-center rounded-xl font-bold bg-white text-brand-black border border-zinc-200 hover:border-brand-black transition-all flex items-center justify-center gap-2 group">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Growth - Highlighted */}
          <div className="bg-white p-8 rounded-3xl border-2 border-brand-black shadow-2xl relative flex flex-col transform md:-translate-y-6 overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-lime text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl border-b border-l border-brand-black">MOST POPULAR</div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-lime rounded-xl flex items-center justify-center text-black">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-black">Growth</h3>
                <p className="text-xs text-zinc-400">Get More Customers</p>
              </div>
            </div>

            {/* Who is this for */}
            <div className="bg-brand-lime/20 rounded-xl p-3 mb-6 border border-brand-lime/30">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">Best For:</p>
              <p className="text-sm text-zinc-700">Businesses that want the phone to ring. "I want customers to find me on Google and call me."</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-brand-black">$1,999</div>
              <p className="text-xs text-zinc-400 mt-1">One-time payment</p>
            </div>

            {/* What you get - specific */}
            <div className="mb-6">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-3">What You Get:</p>
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>5-7 pages</strong> (Home, Services, About, Contact, Gallery...)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>SEO setup</strong> so Google can find you</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Click-to-call buttons everywhere</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Google Analytics (see your visitors)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Fast loading speed</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Ready in <strong>10-14 days</strong></span>
                </li>
              </ul>
            </div>

            {/* Why choose this */}
            <div className="mb-6 pt-4 border-t border-zinc-100 bg-green-50 -mx-8 px-8 py-4 -mb-2">
              <p className="text-xs font-bold text-green-700">💡 Why customers love this:</p>
              <p className="text-xs text-green-600 mt-1">"I started getting calls from Google within 2 weeks!"</p>
            </div>

            <a href="https://buy.stripe.com/00w00d2gf2pW6iRdpr18c01" className="w-full py-4 text-center rounded-xl font-bold bg-brand-lime text-brand-black hover:bg-brand-limeDark transition-all shadow-lg hover:shadow-brand-lime/20 flex items-center justify-center gap-2 group">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Pro */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col hover:border-zinc-300 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-black">Pro</h3>
                <p className="text-xs text-zinc-400">Dominate Your Market</p>
              </div>
            </div>

            {/* Who is this for */}
            <div className="bg-zinc-50 rounded-xl p-3 mb-6">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">Best For:</p>
              <p className="text-sm text-zinc-700">Established businesses ready to crush competitors. "I want to be #1 in my area."</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-brand-black">$3,499</div>
              <p className="text-xs text-zinc-400 mt-1">One-time payment</p>
            </div>

            {/* What you get - specific */}
            <div className="mb-6">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-3">What You Get:</p>
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>10+ pages</strong> (full service breakdown)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Advanced SEO</strong> to rank on page 1</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Online booking or quote system</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Service area pages (local SEO)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Blog setup for content marketing</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Ready in <strong>2-3 weeks</strong></span>
                </li>
              </ul>
            </div>

            <a href="https://buy.stripe.com/3cI9AN2gf5C8bDb85718c02" className="w-full py-4 text-center rounded-xl font-bold bg-white text-brand-black border border-zinc-200 hover:border-brand-black transition-all flex items-center justify-center gap-2 group">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom helper text */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-6 border border-zinc-200 inline-block max-w-2xl">
            <p className="text-zinc-600 mb-2">
              <strong className="text-brand-black">Still not sure?</strong> Here's a simple rule:
            </p>
            <p className="text-sm text-zinc-500">
              <span className="font-bold">Starter</span> = Just need something online •
              <span className="font-bold"> Growth</span> = Want customers to find me •
              <span className="font-bold"> Pro</span> = Ready to dominate my market
            </p>
            <p className="mt-4 text-sm">
              <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-brand-black font-bold underline">Not sure? Let's talk - no pressure, free consultation.</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
