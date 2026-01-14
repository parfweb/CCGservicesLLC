import React from 'react';
import { Wrench, Zap, Scissors, Paintbrush, TreeDeciduous, Sparkles, Truck, Stethoscope, ArrowRight } from 'lucide-react';

const WhoWeServe: React.FC = () => {
    const industries = [
        {
            icon: <Wrench className="w-7 h-7" />,
            name: "Plumbers",
            desc: "Get found when pipes burst. 24/7 lead capture.",
            color: "bg-blue-500"
        },
        {
            icon: <Zap className="w-7 h-7" />,
            name: "Electricians",
            desc: "Show your licenses. Book service calls online.",
            color: "bg-yellow-500"
        },
        {
            icon: <Scissors className="w-7 h-7" />,
            name: "Nail Salons",
            desc: "Online booking, portfolio galleries, loyalty features.",
            color: "bg-pink-500"
        },
        {
            icon: <Paintbrush className="w-7 h-7" />,
            name: "Painters & Contractors",
            desc: "Before/after galleries that sell your work.",
            color: "bg-orange-500"
        },
        {
            icon: <TreeDeciduous className="w-7 h-7" />,
            name: "Landscaping",
            desc: "Seasonal services, project showcases, estimates.",
            color: "bg-green-600"
        },
        {
            icon: <Sparkles className="w-7 h-7" />,
            name: "Cleaning Services",
            desc: "Service areas, pricing tables, quick quotes.",
            color: "bg-purple-500"
        },
        {
            icon: <Truck className="w-7 h-7" />,
            name: "HVAC & Heating",
            desc: "Emergency contact features, maintenance plans.",
            color: "bg-red-500"
        },
        {
            icon: <Stethoscope className="w-7 h-7" />,
            name: "Dental & Medical",
            desc: "HIPAA-compliant forms, patient portals, booking.",
            color: "bg-teal-500"
        },
    ];

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
        <section className="py-16 md:py-20 bg-brand-gray/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                        Websites Built for Your Industry
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
                        We know your business. We build websites that speak to YOUR customers—not generic templates.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {industries.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-5 md:p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:border-brand-lime hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                        >
                            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-lg text-brand-black mb-1">{item.name}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm text-center">
                    <p className="text-lg text-zinc-600 mb-4">
                        <strong className="text-brand-black">Don't see your industry?</strong> We work with all types of local businesses.
                    </p>
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, '#contact')}
                        className="inline-flex items-center gap-2 text-brand-black font-bold hover:text-brand-limeDark transition-colors"
                    >
                        Tell us about your business <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default WhoWeServe;
