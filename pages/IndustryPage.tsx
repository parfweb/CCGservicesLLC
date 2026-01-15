import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, ArrowRight, Star } from 'lucide-react';
import CTA from '../components/CTA';
import ConstructOneDemo from '../components/demos/ConstructOneDemo';

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
        metaDesc: "Stop losing emergency jobs to competitors. We build sites with 24/7 lead capture and service area maps.",
        heroHeadline: "Stop Losing Emergency Jobs To Competitors Who Answer First.",
        heroSubheadline: "When pipes burst, customers call the first number they see. We build sites that capture those calls instantly.",
        painPoints: [
            "Missed emergency calls?",
            "Losing jobs to 'big box' competitors?",
            "Customers can't find your service area?",
            "Wasting time explaining services over the phone?"
        ],
        benefits: [
            "24/7 lead capture when pipes burst",
            "Service area maps to dominate locally",
            "Emergency contact buttons",
            "Mobile-first design for urgent calls"
        ],
        demoComponent: <ConstructOneDemo />
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
        demoComponent: <ConstructOneDemo />
    },
    'nail-salon': {
        title: "Nail Salon Web Design",
        metaTitle: "Web Design for Nail Salons | Online Booking & Portfolios",
        metaDesc: "Stop wasting hours on the phone. Get an online booking system and a stunning portfolio gallery for your salon.",
        heroHeadline: "Wasted Hours Answering The Same Booking Questions All Day?",
        heroSubheadline: "Automate your appointments and let your Instagram-worthy work sell itself with a stunning gallery.",
        painPoints: [
            "Phone ringing while you're working?",
            "No-shows costing you money?",
            "Clients asking for prices constantly?",
            "Hard to fill calendar gaps?"
        ],
        benefits: [
            "Online booking saves 10+ hours/week",
            "Portfolio galleries attract clients",
            "Loyalty programs for repeat visits",
            "Instagram feed integration"
        ],
        demoComponent: <CTA />
    },
    painter: {
        title: "Painter & Contractor Web Design",
        metaTitle: "Web Design for Painters | Before & After Galleries",
        metaDesc: "Your work speaks for itself. Show it off with high-resolution before/after galleries and instant quote forms.",
        heroHeadline: "Your Work Speaks For Itself - If People Can Actually See It.",
        heroSubheadline: "Homeowners buy with their eyes. We build galleries that turn 'maybe' into 'when can you start?'",
        painPoints: [
            "Hard to visualize your quality?",
            "Relying only on yard signs?",
            "Chasing leads for quotes?",
            "Seasonal slow-downs?"
        ],
        benefits: [
            "Before/after galleries that sell jobs",
            "Instant quote request forms",
            "Project portfolio showcase",
            "Service area SEO domination"
        ],
        demoComponent: <ConstructOneDemo />
    },
    landscaping: {
        title: "Landscaping Web Design",
        metaTitle: "Web Design for Landscapers | Get Leads All Year Round",
        metaDesc: "Seasonal work needs year-round leads. We build sites that sell spring cleanups, summer mowing, and fall design.",
        heroHeadline: "Seasonal Work Means You Need Leads All Year Round.",
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
        demoComponent: <ConstructOneDemo />
    },
    cleaning: {
        title: "Cleaning Service Web Design",
        metaTitle: "Web Design for Cleaning Companies | Instant Quotes",
        metaDesc: "Customers need quick quotes, not phone tag. Get a site with instant pricing calculators and coverage maps.",
        heroHeadline: "Customers Need Quick Quotes, Not Phone Tag.",
        heroSubheadline: "The cleaning company that gives a price first, wins. We build instant quote tools into your site.",
        painPoints: [
            "Endless 'how much' phone calls?",
            "Scheduling nightmares?",
            "Trust issues with new clients?",
            "Staffing for unknown volume?"
        ],
        benefits: [
            "Service area coverage maps",
            "Instant pricing calculators",
            "One-click quote requests",
            "Trust badges & team photos"
        ],
        demoComponent: <CTA />
    },
    hvac: {
        title: "HVAC Web Design",
        metaTitle: "Web Design for HVAC | 24/7 Emergency Service Sites",
        metaDesc: "When the AC breaks, speed wins. We build fast-loading sites with emergency contact priority for HVAC pros.",
        heroHeadline: "When The AC Breaks, Customers Call Whoever Shows Up First Online.",
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
        demoComponent: <ConstructOneDemo />
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
                            {/* Dynamic Image or Abstract rep */}
                            <div className="relative hidden lg:block">
                                <div className="absolute inset-0 bg-brand-lime/20 blur-3xl rounded-full transform rotate-12"></div>
                                <div className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                                    <div className="space-y-4">
                                        {data.painPoints.map((point, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-zinc-950 rounded-lg border border-zinc-800/50">
                                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                                                    X
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
                                <div key={index} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-brand-lime/20 rounded-xl flex items-center justify-center text-brand-black mb-4">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-brand-black">{benefit}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Demo Preview */}
                <section className="py-24 bg-zinc-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-brand-black">Live Example</h2>
                            <p className="text-zinc-600">See what your new website could look like.</p>
                        </div>
                        {/* We wrap the demo in a container that handles the 'preview' look if needed, 
                    but these demos are full screen sections usually. We might need to adjust them to fit in a page flow 
                    or just render them as is. ConstructOneDemo is a full section. */}
                        <div className="rounded-3xl overflow-hidden border-4 border-zinc-200 shadow-2xl">
                            {data.demoComponent}
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
        </>
    );
};

export default IndustryPage;
