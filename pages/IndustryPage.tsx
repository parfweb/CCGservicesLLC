import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, ArrowRight, Star } from 'lucide-react';
import CTA from '../components/CTA';
import ConstructOneDemo from '../components/demos/ConstructOneDemo';
import PlumberDemo from '../components/demos/PlumberDemo';
import NailSalonDemo from '../components/demos/NailSalonDemo';
import CleaningDemo from '../components/demos/CleaningDemo';
import ElectricianDemo from '../components/demos/ElectricianDemo';
import HVACDemo from '../components/demos/HVACDemo';
import LandscapingDemo from '../components/demos/LandscapingDemo';
import PainterDemo from '../components/demos/PainterDemo';

interface IndustryData {
    title: string;
    metaTitle: string;
    metaDesc: string;
    heroHeadline: string;
    heroSubheadline: string;
    painPoints: string[];
    benefits: string[];
    demoComponent: React.ReactNode;
}

const INDUSTRIES: Record<string, IndustryData> = {
    plumber: {
        title: "Plumber Web Design",
        metaTitle: "Web Design for Plumbers | Get More Emergency Calls",
        metaDesc: "Stop losing emergency jobs to competitors. We build sites with 24/7 lead capture and service area maps. Call (917) 768-8896.",
        heroHeadline: "Web Design for Plumbers: Stop Losing Emergency Jobs To Competitors.",
        heroSubheadline: "When pipes burst, customers call the first number they see. We build websites optimized for speed and 24/7 lead capture.",
        painPoints: [
            "Missed emergency calls?",
            "Losing jobs to 'big box' competitors?",
            "Customers can't find your service area?",
            "Wasting time quoting cheap jobs?"
        ],
        benefits: [
            "24/7 lead capture when pipes burst",
            "Service area maps to dominate locally",
            "Emergency contact buttons",
            "Mobile-first design for urgent calls"
        ],
        demoComponent: <PlumberDemo />
    },
    electrician: {
        title: "Electrician Web Design",
        metaTitle: "Web Design for Electricians | Showcase Your Licenses",
        metaDesc: "Customers want proof you're legit. Showcase your licenses, certifications, and project portfolio with a professional site.",
        heroHeadline: "Customers Want Proof You're Licensed and Legit Before Calling.",
        heroSubheadline: "Don't lose high-ticket rewires because your website looks risky. Build trust before they even dial.",
        painPoints: [
            "Homeowners worried about safety?",
            "Hard to show commercial capabilities?",
            "Losing bids to unlicensed handymen?",
            "No place to show license numbers?"
        ],
        benefits: [
            "Showcase licenses & certifications",
            "Book service calls online instantly",
            "Get found for 'electrician near me'",
            "Commercial & Residential separation"
        ],
        demoComponent: <ElectricianDemo />
    },
    'nail-salon': {
        title: "Nail Salon Web Design",
        metaTitle: "Nail Salon Web Design | Online Booking & Stunning Galleries | CCG SiteSpark",
        metaDesc: "Get more bookings on autopilot. We build beautiful nail salon websites with online scheduling, portfolio galleries, and loyalty rewards. Call (917) 768-8896.",
        heroHeadline: "Your Nail Art Deserves a Website As Beautiful As Your Work.",
        heroSubheadline: "Stop losing clients to salons with better websites. Get online booking, Instagram-worthy galleries, and a site that fills your chair every hour.",
        painPoints: [
            "Phone ringing off the hook?",
            "No-shows eating into profits?",
            "Clients can't see your prices online?",
            "Empty slots killing your revenue?"
        ],
        benefits: [
            "24/7 online booking (save 10+ hrs/week)",
            "Portfolio galleries that wow clients",
            "Automated appointment reminders",
            "Loyalty & referral programs built-in"
        ],
        demoComponent: <NailSalonDemo />
    },
    painter: {
        title: "Painter Web Design",
        metaTitle: "Painter Web Design | Before & After Galleries That Sell | CCG SiteSpark",
        metaDesc: "Your work speaks for itself—show it off! We build stunning painter websites with before/after galleries, instant quotes, and 5-star reviews. Call (917) 768-8896.",
        heroHeadline: "Your Best Work Deserves More Than a Yard Sign.",
        heroSubheadline: "Homeowners buy with their eyes. We build websites with jaw-dropping galleries that turn 'maybe' into 'when can you start?'",
        painPoints: [
            "Losing jobs to cheaper competitors?",
            "Customers can't see your quality online?",
            "Spending hours chasing quotes?",
            "Winter slow-downs killing cash flow?"
        ],
        benefits: [
            "Before/after galleries that close deals",
            "Instant quote forms (24/7 leads)",
            "Color visualizer tool for clients",
            "Reviews & testimonials showcase"
        ],
        demoComponent: <PainterDemo />
    },
    landscaping: {
        title: "Landscaping Web Design",
        metaTitle: "Web Design for Landscapers | Get Leads All Year Round",
        metaDesc: "Seasonal work needs year-round leads. We build sites that sell spring cleanups, summer mowing, and fall design.",
        heroHeadline: "Web Design for Landscapers: Get Leads Even In The Off-Season.",
        heroSubheadline: "From spring cleanups to hardscaping projects, keep your crew busy in every season.",
        painPoints: [
            "Dead winters killing cashflow?",
            "Route density too low?",
            "Bidding wars on cheap lawns?",
            "Customers forgot to re-book?"
        ],
        benefits: [
            "Seasonal service promotions",
            "Project photo galleries",
            "Online estimate requests",
            "Recurring maintenance sign-ups"
        ],
        demoComponent: <LandscapingDemo />
    },
    cleaning: {
        title: "Cleaning Service Web Design",
        metaTitle: "Cleaning Service Web Design | Instant Quotes & Online Booking | CCG SiteSpark",
        metaDesc: "Stop playing phone tag! We build cleaning websites with instant pricing calculators, online booking, and service area maps. Get more clients on autopilot. Call (917) 768-8896.",
        heroHeadline: "Stop Playing Phone Tag. Start Getting Instant Bookings.",
        heroSubheadline: "The cleaning company that gives a price first, wins. We build instant quote calculators that turn website visitors into paying clients while you clean.",
        painPoints: [
            "Drowning in 'how much?' calls?",
            "No-shows wasting your day?",
            "Competitors booking faster online?",
            "Can't scale because of scheduling chaos?"
        ],
        benefits: [
            "Instant pricing calculators (24/7)",
            "Online booking & payment",
            "Service area coverage maps",
            "Automated reminders & reviews"
        ],
        demoComponent: <CleaningDemo />
    },
    hvac: {
        title: "HVAC Web Design",
        metaTitle: "Web Design for HVAC | 24/7 Emergency Service Sites",
        metaDesc: "When the AC breaks, speed wins. We build fast-loading sites with emergency contact priority for HVAC pros.",
        heroHeadline: "Web Design for HVAC: Be The First Call When The AC Breaks.",
        heroSubheadline: "Your website needs to be the digital equivalent of a frantic 911 call. Fast, clear, and ready to dispatch.",
        painPoints: [
            "Losing installs to big brands?",
            "Slow season slump?",
            "Customers waiting too long to call?",
            "Low maintenance contract volume?"
        ],
        benefits: [
            "Emergency contact features",
            "Maintenance plan sign-ups",
            "Service scheduling 24/7",
            "Seasonal tune-up promotions"
        ],
        demoComponent: <HVACDemo />
    },
    dental: {
        title: "Dental & Medical Web Design",
        metaTitle: "Web Design for Dentists | HIPAA Compliant Forms",
        metaDesc: "Patients expect online booking and secure forms in 2026. Upgrade your practice with a modern, compliant website.",
        heroHeadline: "Patients Expect Online Booking And Secure Forms In 2026.",
        heroSubheadline: "Don't let a fax-machine era website scare away modern patients who live on their phones.",
        painPoints: [
            "Front desk overwhelmed?",
            "New patients finding you hard to book?",
            "Outdated forms printed on paper?",
            "Website looks like 1999?"
        ],
        benefits: [
            "HIPAA-compliant patient forms",
            "Online appointment booking",
            "Insurance & payment info display",
            "Patient education portal"
        ],
        demoComponent: <CTA />
    }
};

interface Props {
    industry: string;
}

const IndustryPage: React.FC<Props> = ({ industry }) => {
    const data = INDUSTRIES[industry];

    if (!data) return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
                <p className="text-zinc-400">Sorry, we haven't built a page for this industry yet.</p>
                <a href="/" className="mt-8 inline-block text-brand-lime hover:underline">Return Home</a>
            </div>
        </div>
    );

    return (
        <>
            <Helmet>
                <title>{data.metaTitle} | CCG SiteSpark</title>
                <meta name="description" content={data.metaDesc} />
                <link rel="canonical" href={`https://ccgsitespark.com/${industry}-web-design`} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://ccgsitespark.com/${industry}-web-design`} />
                <meta property="og:title" content={data.metaTitle} />
                <meta property="og:description" content={data.metaDesc} />
                <meta property="og:image" content="https://ccgsitespark.com/hero-image.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://ccgsitespark.com/${industry}-web-design`} />
                <meta property="twitter:title" content={data.metaTitle} />
                <meta property="twitter:description" content={data.metaDesc} />
                <meta property="twitter:image" content="https://ccgsitespark.com/hero-image.jpg" />
            </Helmet>

            <main className="bg-[#FAFAFA]">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-brand-black text-white overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime opacity-10 blur-[100px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded-full text-brand-lime text-xs font-bold mb-6 border border-zinc-700">
                                    <Star className="w-3 h-3 fill-current" />
                                    Specialized for {data.title}
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    {data.heroHeadline}
                                </h1>
                                <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-xl">
                                    {data.heroSubheadline}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="#contact" className="px-8 py-4 bg-brand-lime text-brand-black rounded-xl font-bold text-lg hover:bg-brand-limeDark transition-all flex items-center justify-center gap-2">
                                        Get a Free Quote <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <a href="tel:+19177688896" className="px-8 py-4 bg-zinc-800 text-white rounded-xl font-bold text-lg hover:bg-zinc-700 transition-all flex items-center justify-center gap-2">
                                        <Phone className="w-5 h-5" /> (917) 768-8896
                                    </a>
                                </div>
                            </div>
                            {/* Pain Points / Abstract Panel */}
                            <div className="relative hidden lg:block">
                                <div className="absolute inset-0 bg-brand-lime/20 blur-3xl rounded-full transform rotate-12"></div>
                                <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                                    <h3 className="text-xl font-bold mb-6 text-white border-b border-zinc-800 pb-4">Common Problems We Fix</h3>
                                    <div className="space-y-4">
                                        {data.painPoints.map((point, index) => (
                                            <div key={index} className="flex items-center gap-4 p-4 bg-zinc-950/50 rounded-xl border border-zinc-800 group hover:border-red-500/30 transition-colors">
                                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all">
                                                    <span className="font-bold text-lg">X</span>
                                                </div>
                                                <span className="text-zinc-300 font-medium">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold mb-4 text-brand-black">Why {data.title} Matters</h2>
                            <p className="text-zinc-600">Your website is your 24/7 salesperson. Make sure it's doing its job.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {data.benefits.map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-brand-lime/20 rounded-xl flex items-center justify-center text-brand-black mb-4">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-brand-black">{benefit}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Demo Preview - The "Meat" of the page */}
                <section className="py-24 bg-zinc-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-lime/20 text-brand-limeDark font-bold text-sm mb-4">Live Design Preview</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-black">See What Your Site Could Look Like</h2>
                            <p className="text-zinc-600 max-w-2xl mx-auto">This is a live, interactive demo. We customize colors, logos, and content to match your brand perfectly.</p>
                        </div>

                        <div className="rounded-3xl overflow-hidden border-[8px] border-zinc-800 shadow-2xl bg-white transform hover:scale-[1.01] transition-transform duration-500">
                            {/* Browser Bar Simulation */}
                            <div className="bg-zinc-800 px-6 py-3 flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex-1 bg-zinc-700/50 rounded-lg h-6 mx-4"></div>
                            </div>
                            <div className="max-h-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300">
                                {data.demoComponent}
                            </div>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
        </>
    );
};

export default IndustryPage;
