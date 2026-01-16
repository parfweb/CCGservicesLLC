import React, { useState } from 'react';
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

const CTA: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to URL-encoded string for Netlify
    const data = new URLSearchParams();
    for (const pair of formData) {
      data.append(pair[0], pair[1] as string);
    }
    // Add a custom subject for the email notification
    const name = formData.get('name') as string || 'Someone';
    data.append('subject', `New Lead: ${name} from CCG SiteSpark`);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert("Submission failed. Please try again."));
  };

  return (
    <section id="contact" className="py-24 bg-brand-black text-white relative overflow-hidden scroll-mt-28">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime opacity-5 blur-[100px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded-full text-brand-lime text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's Build Something <span className="text-brand-lime">Amazing</span> Together
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Ready to get started? Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-brand-lime shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                  <p className="text-zinc-400">(917) 768-8896</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-brand-lime shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                  <p className="text-zinc-400">hello@ccgsitespark.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-brand-lime shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                  <p className="text-zinc-400">Serving all 50 states</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-brand-lime shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Hours</h4>
                  <p className="text-zinc-400">Mon-Fri: 9am - 6pm EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 text-brand-black shadow-2xl">
              {submitted ? (
                <div className="h-[600px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                  <CheckCircle className="w-24 h-24 text-green-500 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
                  <p className="text-zinc-500 text-lg max-w-md mx-auto">Thank you for contacting us. One of our strategists will be in touch with you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-10 btn-primary px-8 py-3 rounded-xl font-bold"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-zinc-800">Your Name *</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all placeholder:text-zinc-400" placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="business" className="text-sm font-bold text-zinc-800">Business Name *</label>
                      <input type="text" id="business" name="business" required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all placeholder:text-zinc-400" placeholder="Your Company LLC" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-zinc-800">Email Address *</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all placeholder:text-zinc-400" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-zinc-800">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all placeholder:text-zinc-400" placeholder="(917) 768-8896" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-bold text-zinc-800">What service do you need?</label>
                      <div className="relative">
                        <select id="service" name="service" defaultValue="" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all appearance-none text-zinc-600">
                          <option value="" disabled>Select a service...</option>
                          <option value="full-package">Full Package (Website + SEO)</option>
                          <option value="web-design">Website Design & Build</option>
                          <option value="redesign">Website Redesign</option>
                          <option value="seo">SEO & Lead Generation</option>
                          <option value="maintenance">Maintenance & Hosting</option>
                          <option value="consultation">I'm not sure / Free Consultation</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="industry" className="text-sm font-bold text-zinc-800">What's your industry?</label>
                      <div className="relative">
                        <select id="industry" name="industry" defaultValue="" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all appearance-none text-zinc-600">
                          <option value="" disabled>Select your industry...</option>
                          <option value="construction">Construction / Trades</option>
                          <option value="healthcare">Healthcare / Medical</option>
                          <option value="professional">Professional Services</option>
                          <option value="retail">Retail / E-commerce</option>
                          <option value="logistics">Transportation / Logistics</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-bold text-zinc-800">What's your budget?</label>
                    <div className="relative">
                      <select id="budget" name="budget" defaultValue="" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all appearance-none text-zinc-600">
                        <option value="" disabled>Select budget range...</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-2.5k">$1,000 - $2,500</option>
                        <option value="2.5k-5k">$2,500 - $5,000</option>
                        <option value="5k-plus">$5,000+</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-zinc-800">Tell us about your project</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all placeholder:text-zinc-400" placeholder="Describe your business and what you need..."></textarea>
                  </div>

                  <button type="submit" className="w-full btn-primary py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-zinc-800 shadow-lg shadow-black/10">
                    Send Request <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-center text-zinc-400 mt-4">We respect your privacy. No spam, ever.</p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;