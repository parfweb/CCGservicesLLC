import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Our website packages are: Starter ($500) for a basic 3-page site, Growth ($1,000) for a full business website with SEO, and Pro ($1,800) for established businesses wanting to dominate their market. Most small businesses pick Growth."
    },
    {
      q: "What are the monthly costs after my website is built?",
      a: `Every website needs hosting (a home on the internet). Our plans are:

• Essentials ($49/mo) - Hosting, backups, security. Your site stays online and safe.
• Care ($99/mo) - Same as above + we make small edits for you (text, photos, prices).
• Growth ($249/mo) - Same as above + 2 blog posts per month + SEO work to get you found on Google.

You can also host it yourself if you prefer — we'll hand over the files.`
    },
    {
      q: "How long does it take to build a website?",
      a: `It depends on the package:

• Starter: 5-7 days
• Growth: 10-14 days  
• Pro: 2-3 weeks

We work fast without cutting corners on quality.`
    },
    {
      q: "Do I need to provide content and images?",
      a: "It helps if you have them, but don't worry if you don't. We can write professional text for you and use high-quality stock photos. Just tell us about your business and we'll handle the rest."
    },
    {
      q: "Will my website work on mobile phones?",
      a: "Yes! All our websites are designed 'mobile-first' — meaning they look perfect on phones, tablets, and computers. Over 60% of your customers are on mobile, so this is non-negotiable for us."
    },
    {
      q: "Can you manage my social media and ads?",
      a: "Yes! We offer Social Media Management to keep your profiles active and engaging. We also run Google Ads, Facebook Ads, and LinkedIn campaigns to drive immediate traffic to your site. Ask us for a custom quote."
    },
    {
      q: "What if I need changes after the website is launched?",
      a: "If you're on the Care plan ($99/mo) or higher, unlimited small edits are included — just email us. On the Essentials plan, we charge a small fee per request. We encourage the Care plan so you never have to worry about hourly bills."
    },
    {
      q: "Do I own my website?",
      a: "Yes, 100%. Once you pay for the website, it's yours. If you ever want to leave, we'll hand over all the files, no questions asked."
    },
    {
      q: "What if I'm not happy with the design?",
      a: "We include revision rounds in every package. We'll work with you until you love it. In the rare case we can't agree, we offer a partial refund for work not yet completed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-500 text-lg">Everything you need to know about working with us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`border border-zinc-200 rounded-2xl transition-all duration-300 ${openIndex === idx ? 'bg-zinc-50 border-zinc-300 shadow-sm' : 'bg-white hover:border-zinc-300'}`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
              >
                <span className={`text-lg font-bold ${openIndex === idx ? 'text-brand-black' : 'text-zinc-800'}`}>{item.q}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-zinc-500 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0 ml-4" />
                )}
              </button>

              <div
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-zinc-600 leading-relaxed pr-4 whitespace-pre-line">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;