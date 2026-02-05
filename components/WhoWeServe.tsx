import React from 'react';
import { Wrench, Zap, Scissors, Paintbrush, TreeDeciduous, Sparkles, Wind, Stethoscope, ArrowRight, CheckCircle2, Droplets, GraduationCap, Briefcase, Building2, PartyPopper, Target, Utensils, ShoppingBag } from 'lucide-react';

const WhoWeServe: React.FC = () => {
    const industries = [
        {
            icon: <Wrench className="w-7 h-7" />,
            name: "Plumbers",
            link: "/plumber-web-design",
            desc: "Stop losing emergency jobs to competitors who answer first.",
            benefits: [
                "24/7 lead capture when pipes burst",
                "Service area maps to dominate locally",
                "Emergency contact buttons"
            ],
            color: "bg-blue-500"
        },
        {
            icon: <Zap className="w-7 h-7" />,
            name: "Electricians",
            link: "/electrician-web-design",
            desc: "Customers want proof you're licensed and legit before calling.",
            benefits: [
                "Showcase licenses & certifications",
                "Book service calls online instantly",
                "Get found for 'electrician near me'"
            ],
            color: "bg-yellow-500"
        },
        {
            icon: <Sparkles className="w-7 h-7" />,
            name: "Nail Salons",
            link: "/nail-salon-web-design",
            desc: "Wasted hours answering the same booking questions all day?",
            benefits: [
                "Online booking saves 10+ hours/week",
                "Portfolio galleries attract clients",
                "Loyalty programs for repeat visits"
            ],
            color: "bg-pink-500"
        },
        {
            icon: <Paintbrush className="w-7 h-7" />,
            name: "Painters & Contractors",
            link: "/painter-web-design",
            desc: "Your work speaks for itself - if people can actually see it.",
            benefits: [
                "Before/after galleries that sell jobs",
                "Instant quote request forms",
                "Project portfolio showcase"
            ],
            color: "bg-orange-500"
        },
        {
            icon: <TreeDeciduous className="w-7 h-7" />,
            name: "Landscaping",
            link: "/landscaping-web-design",
            desc: "Seasonal work means you need leads all year round.",
            benefits: [
                "Seasonal service promotions",
                "Project photo galleries",
                "Online estimate requests"
            ],
            color: "bg-green-600"
        },
        {
            icon: <Droplets className="w-7 h-7" />,
            name: "Cleaning Services",
            link: "/cleaning-web-design",
            desc: "Customers need quick quotes, not phone tag.",
            benefits: [
                "Service area coverage maps",
                "Instant pricing calculators",
                "One-click quote requests"
            ],
            color: "bg-purple-500"
        },
        {
            icon: <Wind className="w-7 h-7" />,
            name: "HVAC & Heating",
            link: "/hvac-web-design",
            desc: "When the AC breaks, customers call whoever shows up first online.",
            benefits: [
                "Emergency contact features",
                "Maintenance plan sign-ups",
                "Service scheduling 24/7"
            ],
            color: "bg-red-500"
        },
        {
            icon: <Stethoscope className="w-7 h-7" />,
            name: "Medical Facilities",
            link: "/medical-web-design",
            desc: "Patients expect online booking and secure forms in 2026.",
            benefits: [
                "HIPAA-compliant patient forms",
                "Online appointment booking",
                "Insurance & payment info"
            ],
            color: "bg-teal-500"
        },
        {
            icon: <GraduationCap className="w-7 h-7" />,
            name: "Educational Institutions",
            link: "/education-web-design",
            desc: "Enrollment is a competition. Make your school the clear winner.",
            benefits: [
                "Student portal integration",
                "Course catalogs",
                "Virtual campus tours"
            ],
            color: "bg-indigo-500"
        },
        {
            icon: <Briefcase className="w-7 h-7" />,
            name: "Professional Services",
            link: "/professional-web-design",
            desc: "Trust is your currency. Look like the authority you are.",
            benefits: [
                "Team bios & expertise dashboard",
                "Client case studies",
                "Automated consultation booking"
            ],
            color: "bg-slate-600"
        },
        {
            icon: <Building2 className="w-7 h-7" />,
            name: "Hotels & Accommodations",
            link: "/hotel-web-design",
            desc: "Direct bookings mean 30% more profit than OTAs.",
            benefits: [
                "Commission-free booking engine",
                "Room & amenity galleries",
                "Local guide integration"
            ],
            color: "bg-rose-500"
        },
        {
            icon: <PartyPopper className="w-7 h-7" />,
            name: "Recreational & Event Spaces",
            link: "/events-web-design",
            desc: "Fill your calendar with sold-out events, not admin work.",
            benefits: [
                "Ticket sales & digital RSVP",
                "Interactive event calendar",
                "Venue rental inquiries"
            ],
            color: "bg-amber-500"
        },
        {
            icon: <Target className="w-7 h-7" />,
            name: "Coaching & Training",
            link: "/coaching-web-design",
            desc: "Sell your knowledge and expertise, not just your hours.",
            benefits: [
                "Member area login",
                "Course sales funnel",
                "Webinar registration"
            ],
            color: "bg-cyan-600"
        },
        {
            icon: <Utensils className="w-7 h-7" />,
            name: "Food & Beverages",
            link: "/restaurant-web-design",
            desc: "Hungry customers don't wait for PDF menus to load.",
            benefits: [
                "Mobile-friendly digital menu",
                "Table reservation system",
                "Online ordering integration"
            ],
            color: "bg-orange-600"
        },
        {
            icon: <ShoppingBag className="w-7 h-7" />,
            name: "Amazon & E-commerce",
            link: "/ecommerce-web-design",
            desc: "Boost trust and sales by offering 'Buy with Prime' on your custom brand site.",
            benefits: [
                "Buy with Prime integration",
                "Sync with Amazon FBA inventory",
                "Conversion-focused product pages"
            ],
            color: "bg-blue-600"
        }
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
                        We know your business. We build websites that speak to YOUR customers - not generic templates.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {industries.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            className="bg-white p-5 md:p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:border-brand-lime hover:-translate-y-1 transition-all duration-300 cursor-pointer group block"
                        >
                            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-lg text-brand-black mb-2">{item.name}</h3>
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
