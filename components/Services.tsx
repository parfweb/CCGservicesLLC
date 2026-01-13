import React from 'react';
import { Palette, MousePointerClick, Search, ShieldCheck, PenTool, Share2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Website Design",
      description: "We create easy-to-navigate, professional websites tailored to your business needs.",
      features: ["Brand-focused design", "Mobile friendly", "Fast loading"]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO & Local Search",
      description: "We help your business get found on Google, driving more local leads to your phone.",
      features: ["Google Business Profile", "Local keyword ranking", "Search visibility"]
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Website Maintenance",
      description: "We handle technical updates and security, so you can focus on running your business.",
      features: ["Daily backups", "Security updates", "Content edits"]
    },
    {
      icon: <MousePointerClick className="w-6 h-6" />,
      title: "PPC & Ad Management",
      description: "We manage targeted ad campaigns on Google, Facebook, and LinkedIn to bring you customers instantly.",
      features: ["Google Ads", "Social Media Ads", "ROI Tracking"]
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Content Marketing",
      description: "We write monthly blog posts and industry articles that drive traffic and keep customers engaged.",
      features: ["Monthly blog posts", "Industry articles", "Traffic growth"]
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Media Management",
      description: "We manage your social strategy and content to build trust and keep your audience interested.",
      features: ["Strategy & Content", "Engagement", "Brand Awareness"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-6">Everything Your Business Needs To Succeed Online</h2>
          <p className="text-zinc-500 text-lg">We don't just build websites—we create powerful digital assets that attract customers and drive revenue.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-gray/30 p-8 rounded-2xl border border-zinc-100 hover:border-brand-lime/50 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-black shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">{service.title}</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed text-sm min-h-[60px]">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wide">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-lime"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;