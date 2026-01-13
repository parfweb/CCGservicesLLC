import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Our packages start at $500 for a Starter website. The Growth package ($1,000+) includes more pages and conversion features, while our Pro package ($1,800+) is a full-scale digital solution. The final price depends on your specific needs and complexity."
    },
    {
      q: "What is the difference between the Care Plans?",
      a: "The Standard Care Plan ($49/mo) covers the essentials: secure hosting, daily backups, and software updates. The Premium Care Plan ($99/mo) includes everything in Standard plus priority support, advanced security monitoring, and time for content updates (like changing text or images)."
    },
    {
      q: "What is the difference between the Basic and Advanced SEO Plans?",
      a: "The Basic SEO Plan ($299/mo) is designed for steady local visibility, including Google Business Profile setup and local optimization. The Advanced SEO Plan ($599/mo) builds on this with backlink building, regular content creation, and deep analytics to help you dominate your local market and drive significantly more leads."
    },
    {
      q: "How long does it take to build a website?",
      a: `Most standard brochure websites are completed in 7–10 business days.

Larger websites, e-commerce stores, or custom features typically take 2–4 weeks, depending on complexity and client feedback.

We use modern tools and an optimized workflow to deliver high-quality websites faster - without sacrificing performance, design, or SEO.`
    },
    {
      q: "Do I need to provide content and images?",
      a: "It's helpful if you have them, but we offer Content Marketing services if you need help writing professional text. We also have access to high-quality stock photography."
    },
    {
      q: "Will my website work on mobile phones?",
      a: "Yes. All our websites are designed 'mobile-first' to ensure they look perfect on smartphones, tablets, and desktops."
    },
    {
      q: "Can you manage my social media and ads?",
      a: "Yes! We offer Social Media Management to keep your profiles active and engaging. We also provide PPC & Ad Management for Google, Facebook, and LinkedIn to drive immediate traffic to your site."
    },
    {
      q: "What if I need changes after the website is launched?",
      a: "If you're on our Premium Care Plan, minor content updates are included. Otherwise, we can handle updates at our hourly rate, or train you to make simple edits yourself."
    },
    {
      q: "Do you offer refunds?",
      a: "We aim for 100% satisfaction. If you cancel before the design phase is complete, we offer a partial refund. Once development begins, labor costs are non-refundable, but we work with you until you are happy with the result."
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