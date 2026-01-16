import React from 'react';
import { Wrench, Zap, Paintbrush, Sparkles, Wind, Droplets, CheckCircle2, Stethoscope, ShoppingBag, Hammer, Shield, Smartphone, Headphones, CheckCircle } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Wrench className="w-6 h-6" />,
      name: "Plumbers",
      link: "/plumber-web-design",
      desc: "Stop losing emergency jobs to competitors who answer first.",
      benefits: [
        "24/7 lead capture when pipes burst",
        "Service area maps to dominate locally",
        "Emergency contact buttons"
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: "Electricians",
      link: "/electrician-web-design",
      desc: "Customers want proof you're licensed and legit before calling.",
      benefits: [
        "Showcase licenses & certifications",
        "Book service calls online instantly",
        "Get found for 'electrician near me'"
      ]
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: "Nail Salons",
      link: "/nail-salon-web-design",
      desc: "Wasted hours answering the same booking questions all day?",
      benefits: [
        "Online booking saves 10+ hours/week",
        "Portfolio galleries attract clients",
        "Loyalty programs for repeat visits"
      ]
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      name: "Painters & Contractors",
      link: "/painter-web-design",
      desc: "Your work speaks for itself - if people can actually see it.",
      benefits: [
        "Before/after galleries that sell jobs",
        "Instant quote request forms",
        "Project portfolio showcase"
      ]
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      name: "Landscaping",
      link: "/landscaping-web-design",
      desc: "Seasonal work means you need leads all year round.",
      benefits: [
        "Seasonal service promotions",
        "Project photo galleries",
        "Online estimate requests"
      ]
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      name: "Cleaning Services",
      link: "/cleaning-web-design",
      desc: "Customers need quick quotes, not phone tag.",
      benefits: [
        "Service area coverage maps",
        "Instant pricing calculators",
        "One-click quote requests"
      ]
    },
    {
      icon: <Wind className="w-6 h-6" />,
      name: "HVAC & Heating",
      link: "/hvac-web-design",
      desc: "When the AC breaks, customers call whoever shows up first online.",
      benefits: [
        "Emergency contact features",
        "Maintenance plan sign-ups",
        "Service scheduling 24/7"
      ]
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      name: "Dental & Medical",
      link: "/dental-web-design",
      desc: "Patients expect online booking and secure forms in 2026.",
      benefits: [
        "HIPAA-compliant patient forms",
        "Online appointment booking",
        "Insurance & payment info"
      ]
    }
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
          <h2 className="text-3xl font-bold text-brand-black mb-4">Websites Built for Your Industry</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            We know your business. We build websites that speak to YOUR customers - not generic templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {industries.map((item, idx) => (
            <a key={idx} href={item.link} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:border-brand-lime hover:shadow-md transition-all cursor-pointer block">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-black bg-brand-lime rounded-lg p-2 flex-shrink-0">{item.icon}</span>
                <h3 className="font-bold text-base text-brand-black">{item.name}</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">{item.desc}</p>

              {/* Benefits for each industry */}
              <div className="space-y-2 pt-3 border-t border-zinc-100">
                {item.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* What You Get - Detailed Breakdown */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-zinc-500 text-xs font-bold uppercase tracking-wider mb-4">What You Get</div>
            <h2 className="text-3xl font-bold text-brand-black mb-4">Industry-Specific Features That Drive Results</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">We don't just build websites - we create customized solutions that solve real business problems in your industry.</p>
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