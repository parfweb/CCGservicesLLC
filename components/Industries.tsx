import React from 'react';
import { Truck, Scissors, Stethoscope, Coffee, Hammer, ShoppingBag, CheckCircle, Shield, Smartphone, Headphones } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    { icon: <Truck className="w-6 h-6"/>, name: "Trucking & Logistics", desc: "Showcase your fleet, highlight services, and generate shipping quotes automatically." },
    { icon: <Scissors className="w-6 h-6"/>, name: "Hair Salons", desc: "Online booking, stylist portfolios, and appointment management that works 24/7." },
    { icon: <Stethoscope className="w-6 h-6"/>, name: "Dental Practices", desc: "Patient portals, online scheduling, and HIPAA-compliant forms." },
    { icon: <Coffee className="w-6 h-6"/>, name: "Coffee Shops", desc: "Menu displays, event calendars, and loyalty programs that drive repeat visits." },
    { icon: <Hammer className="w-6 h-6"/>, name: "Home Services", desc: "Plumbers, electricians, contractors—generate leads while you sleep." },
    { icon: <ShoppingBag className="w-6 h-6"/>, name: "Retail Stores", desc: "Beautiful product galleries, e-commerce, and inventory integration." },
  ];

  const benefits = [
    {
      title: "Home Services",
      items: ["24/7 lead capture forms", "Service area mapping", "Before/after project galleries", "Emergency contact features", "License & insurance display"]
    },
    {
      title: "Medical & Dental",
      items: ["HIPAA-compliant forms", "Online appointment booking", "Patient portals", "Insurance information pages", "Provider bios & credentials"]
    },
    {
      title: "Retail & E-Commerce",
      items: ["Product catalogs", "Secure payment processing", "Inventory management", "Customer reviews", "Shipping calculators"]
    },
    {
      title: "Restaurants & Cafes",
      items: ["Online ordering systems", "Interactive menus", "Table reservations", "Event calendars", "Loyalty programs"]
    },
    {
      title: "Professional Services",
      items: ["Client intake forms", "Consultation scheduling", "Case studies showcase", "Document downloads", "Team member profiles"]
    },
    {
      title: "Automotive & Repair",
      items: ["Service menus with pricing", "Online appointment booking", "Vehicle-specific tips", "Warranty information", "Review integration"]
    }
  ];

  return (
    <section className="py-24 bg-brand-gray/50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Industries We Serve */}
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-brand-black mb-4">We Build Websites For Every Type of Business</h2>
           <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
             We tailor every website to the specific needs, customers, and buying behavior of your industry.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {industries.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:border-brand-lime hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-black bg-brand-lime rounded-lg p-2">{item.icon}</span>
                <h3 className="font-bold text-lg text-brand-black">{item.name}</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* What You Get - Detailed Breakdown */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-xl">
           <div className="text-center mb-12">
             <div className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-zinc-500 text-xs font-bold uppercase tracking-wider mb-4">What You Get</div>
             <h2 className="text-3xl font-bold text-brand-black mb-4">Industry-Specific Benefits That Drive Results</h2>
             <p className="text-zinc-500 max-w-2xl mx-auto">We don't just build websites—we create customized solutions that solve real business problems in your industry.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {benefits.map((section, idx) => (
                 <div key={idx}>
                    <h4 className="font-bold text-lg text-brand-black border-b border-zinc-100 pb-2 mb-4">{section.title}</h4>
                    <ul className="space-y-3">
                       {section.items.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-sm text-zinc-600">
                             <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-lime shrink-0"></div>
                             {feature}
                          </li>
                       ))}
                    </ul>
                 </div>
              ))}
           </div>
        </div>

        {/* Guarantees */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8">
           <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white mb-4">
                 <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-black mb-1">100% Satisfaction</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-wide">We won't stop until you're thrilled</p>
           </div>
           <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white mb-4">
                 <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-black mb-1">Secure & Reliable</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-wide">SSL certified & daily backups</p>
           </div>
           <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white mb-4">
                 <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-black mb-1">Mobile Optimized</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-wide">Perfect on every device</p>
           </div>
           <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white mb-4">
                 <Headphones className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-black mb-1">24/7 Support</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-wide">We're here when you need us</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Industries;