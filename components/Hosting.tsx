import React from 'react';
import { ShieldCheck, TrendingUp, Check, HelpCircle, AlertTriangle } from 'lucide-react';

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
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">After Your Website is Built</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Your website needs a home and someone to take care of it. Here's what that means in plain English.</p>
        </div>

        {/* Simple Explanation */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-bold text-amber-800 mb-1">Why do I need to pay monthly?</p>
            <p className="text-amber-700 text-sm">
              Your website lives on a computer (server) that costs money to run. It also needs security updates, backups, and someone to fix things if they break.
              <strong> Think of it like rent + insurance for your website.</strong>
            </p>
          </div>
        </div>

        {/* Two Simple Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Hosting Only */}
          <div className="bg-white p-8 rounded-3xl border-2 border-zinc-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-black">Keep It Running</h3>
                <p className="text-xs text-zinc-400">Hosting & Maintenance</p>
              </div>
            </div>

            {/* Who needs this */}
            <div className="bg-zinc-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-zinc-700">
                <strong>Every website needs this.</strong> It's like paying rent — without it, your website goes offline.
              </p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-brand-black">$49<span className="text-lg font-normal text-zinc-400">/month</span></div>
            </div>

            {/* What's included - plain language */}
            <div className="mb-6">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-3">What This Pays For:</p>
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Website stays online</strong> — fast, secure hosting</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Daily backups</strong> — if something breaks, we restore it</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Security updates</strong> — protection from hackers</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>We fix problems</strong> — something breaks? We handle it</span>
                </li>
              </ul>
            </div>

            {/* Simple bottom line */}
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm text-green-800">
                ✓ <strong>Bottom line:</strong> Your website works, stays safe, and doesn't disappear.
              </p>
            </div>
          </div>

          {/* Hosting + Growth */}
          <div className="bg-white p-8 rounded-3xl border-2 border-brand-black shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-lime px-4 py-1.5 text-xs font-bold uppercase border-b border-l border-brand-black rounded-bl-xl">Most Choose This</div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-brand-lime rounded-xl flex items-center justify-center text-black">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-black">Keep It Growing</h3>
                <p className="text-xs text-zinc-400">Hosting + Get More Customers</p>
              </div>
            </div>

            {/* Who needs this */}
            <div className="bg-brand-lime/20 rounded-xl p-4 mb-6 border border-brand-lime/30">
              <p className="text-sm text-zinc-700">
                <strong>For businesses that want more calls.</strong> We actively work to get you found on Google.
              </p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-brand-black">$149<span className="text-lg font-normal text-zinc-400">/month</span></div>
            </div>

            {/* What's included - plain language */}
            <div className="mb-6">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-3">Everything in "Keep It Running" Plus:</p>
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Google optimization</strong> — we improve your rankings</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Content updates</strong> — need text or photos changed? Done.</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Monthly report</strong> — see how many people visit your site</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-700 text-sm">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Priority support</strong> — we respond within hours, not days</span>
                </li>
              </ul>
            </div>

            {/* Simple bottom line */}
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm text-green-800">
                ✓ <strong>Bottom line:</strong> Website works + we actively help you get more customers.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ / Common Questions */}
        <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-zinc-500" />
            <h3 className="text-lg font-bold text-brand-black">Common Questions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-zinc-800 mb-1">"Do I have to pay this?"</p>
              <p className="text-sm text-zinc-600">Yes, if you want your website to stay online. It's like phone service — no payment, no service.</p>
            </div>
            <div>
              <p className="font-bold text-zinc-800 mb-1">"What if I stop paying?"</p>
              <p className="text-sm text-zinc-600">Your website goes offline. But we'll always warn you first and help you transfer if needed.</p>
            </div>
            <div>
              <p className="font-bold text-zinc-800 mb-1">"Can I switch plans later?"</p>
              <p className="text-sm text-zinc-600">Yes! Start with $49 and upgrade anytime. We'll even give you credit for what you've paid.</p>
            </div>
            <div>
              <p className="font-bold text-zinc-800 mb-1">"Is there a contract?"</p>
              <p className="text-sm text-zinc-600">No long contracts. Pay monthly. Cancel anytime with 30 days notice.</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-200 text-center">
            <p className="text-zinc-500 text-sm">Still confused? <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-brand-black font-bold underline">Let's talk — we'll explain everything.</a></p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hosting;