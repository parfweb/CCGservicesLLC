import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Mike J.",
            business: "Plumbing Business",
            location: "Texas",
            avatar: "MJ",
            avatarBg: "bg-blue-600",
            quote: "I was skeptical at first – I've been burned by web guys before. But these folks delivered exactly what they promised. My phone rings every day now.",
            rating: 5
        },
        {
            name: "Lisa C.",
            business: "Nail Salon Owner",
            location: "California",
            avatar: "LC",
            avatarBg: "bg-pink-500",
            quote: "My clients love the online booking! I used to spend hours answering calls. Now they book themselves. The website looks beautiful.",
            rating: 5
        },
        {
            name: "Robert M.",
            business: "Electrician",
            location: "Arizona",
            avatar: "RM",
            avatarBg: "bg-orange-500",
            quote: "Best investment I made for my business. Within a month, I was getting leads from people searching online. Worth every penny.",
            rating: 5
        }
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <section className="py-16 md:py-24 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-lime opacity-5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-lime opacity-5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm font-semibold text-brand-lime mb-4">
                        <Star className="w-4 h-4 fill-brand-lime text-brand-lime" />
                        What Our Clients Say
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Business Owners Like You
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Real feedback from real people who trusted us with their business.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-lime/30 transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-white/90 leading-relaxed mb-6 text-[15px]">
                                "{item.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className={`w-11 h-11 rounded-full ${item.avatarBg} flex items-center justify-center text-white font-bold text-sm`}>
                                    {item.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{item.name}</div>
                                    <div className="text-sm text-zinc-400">{item.business} • {item.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-zinc-400 mb-4">Ready to get your phone ringing?</p>
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, '#contact')}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-lime text-black rounded-xl font-bold hover:bg-brand-limeDark transition-colors"
                    >
                        Get Your Free Quote <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
