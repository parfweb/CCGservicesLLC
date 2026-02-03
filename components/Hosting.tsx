import React from 'react';
import { Server, Wrench, TrendingUp, Check, X, HelpCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const Hosting: React.FC = () => {
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Monthly Website Care</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Your website needs a home and ongoing care. Pick the level of support you need.</p>
        </div>

        {/* Simple Explanation */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex items-start gap-4 max-w-3xl mx-auto">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-800 text-sm">
              <strong>Why monthly?</strong> Your website lives on a server that costs money. It needs security updates and backups.
              Think of it like <strong>rent + insurance</strong> for your website.
            </p>
          </div>
        </div>

        {/* Three Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Tier 1: Basic Hosting */}
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-600">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-brand-black">Essentials</h3>
                <p className="text-xs text-zinc-400">Keep It Online</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-3xl font-bold text-brand-black">$49<span className="text-sm font-normal text-zinc-400">/mo</span></div>
            </div>

            <p className="text-xs text-zinc-500 mb-4 pb-4 border-b border-zinc-100">
              <strong>Best for:</strong> "I just need my website to stay online. I'll contact you if I need changes."
            </p>

            <ul className="space-y-2 mb-6 flex-1 text-sm">
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Fast, secure hosting</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Daily backups</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Security monitoring</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>SSL certificate (https)</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-400">
                <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Content edits (pay per request)</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-400">
                <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>SEO work</span>
              </li>
            </ul>

            <a href="https://buy.stripe.com/cNi00d1cb6Gc7mV5WZ18c03" className="w-full py-3 text-center rounded-lg font-bold bg-white border border-zinc-200 text-brand-black hover:border-brand-lime hover:bg-brand-lime/5 transition-all flex items-center justify-center gap-2 group">
              Choose Essentials <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Tier 2: Care */}
          <div className="bg-white p-6 rounded-2xl border-2 border-brand-black shadow-lg flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-lime px-3 py-1 text-[10px] font-bold uppercase border-b border-l border-brand-black rounded-bl-lg">Most Popular</div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-brand-lime rounded-lg flex items-center justify-center text-black">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-brand-black">Care</h3>
                <p className="text-xs text-zinc-400">We Handle Everything</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-3xl font-bold text-brand-black">$99<span className="text-sm font-normal text-zinc-400">/mo</span></div>
            </div>

            <p className="text-xs text-zinc-500 mb-4 pb-4 border-b border-zinc-100">
              <strong>Best for:</strong> "I don't want to think about my website. Just keep it running and update things when I ask."
            </p>

            <ul className="space-y-2 mb-6 flex-1 text-sm">
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Everything in Essentials</strong></span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Unlimited small edits (text, photos)</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Priority support (same day response)</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Monthly Traffic Summary</strong> (See results)</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Monthly performance check</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-400">
                <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Blog posts</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-400">
                <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Active SEO work</span>
              </li>
            </ul>

            <a href="https://buy.stripe.com/6oUbIV5sr4y4gXvbhj18c04" className="w-full py-3 text-center rounded-lg font-bold bg-brand-lime text-brand-black hover:bg-brand-limeDark transition-all shadow-lg hover:shadow-brand-lime/20 flex items-center justify-center gap-2 group">
              Choose Care Plan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Tier 3: Growth */}
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase text-blue-700 rounded-bl-lg">Best Value</div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-brand-black">Growth</h3>
                <p className="text-xs text-zinc-400">Your Marketing Partner</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-3xl font-bold text-brand-black">$249<span className="text-sm font-normal text-zinc-400">/mo</span></div>
            </div>

            <p className="text-xs text-zinc-500 mb-4 pb-4 border-b border-zinc-100">
              <strong>Best for:</strong> "I want a dedicated partner to handle my marketing, reputation, and rankings so I can focus on my business."
            </p>

            <ul className="space-y-2 mb-6 flex-1 text-sm">
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Everything in Care</strong></span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Reputation Management</strong> (Reviews)</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>2 blog posts</strong> + Social Media Snippets</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Monthly "Map Pack" Optimization</strong></span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Google ranking optimization</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Advanced ROI & Competitor Report</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-700">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Backlink monitoring</span>
              </li>
            </ul>

            <a href="https://buy.stripe.com/3cI5kx7Az0hOcHf0CF18c05" className="w-full py-3 text-center rounded-lg font-bold bg-brand-black text-white hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group">
              Choose Growth <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Need more? */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10 text-center">
          <p className="text-blue-800 font-bold mb-2">Need more blog posts or aggressive SEO?</p>
          <p className="text-blue-700 text-sm mb-4">
            We offer custom plans starting at <strong>$399/mo</strong> with 4+ blog posts, backlink building, and dedicated SEO strategy.
          </p>
          <a href="https://buy.stripe.com/9B65kx9IHd4AePnbhj18c06" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group">
            Get Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* FAQ */}
        <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200">
          <div className="flex items-center gap-3 mb-5">
            <HelpCircle className="w-5 h-5 text-zinc-500" />
            <h3 className="font-bold text-brand-black">Common Questions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-bold text-zinc-800 mb-1">"Why do I need monthly hosting?"</p>
              <p className="text-zinc-600">Your website needs a "home" on the internet (a server). It also needs security updates and backups. We handle all of this so you don't have to worry about technical stuff.</p>
            </div>
            <div>
              <p className="font-bold text-zinc-800 mb-1">"Can I host it myself?"</p>
              <p className="text-zinc-600">Yes! We can hand over the website files to you. But most clients prefer we handle it - it saves headaches and ensures your site stays secure.</p>
            </div>
            <div>
              <p className="font-bold text-zinc-800 mb-1">"What counts as a 'small edit'?"</p>
              <p className="text-zinc-600">Text changes, swapping photos, updating hours/prices. Basically anything quick - not full page redesigns.</p>
            </div>
            <div>
              <p className="font-bold text-zinc-800 mb-1">"Any long-term contracts?"</p>
              <p className="text-zinc-600">Nope. Pay month-to-month. Cancel anytime with 30 days notice. No pressure.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hosting;