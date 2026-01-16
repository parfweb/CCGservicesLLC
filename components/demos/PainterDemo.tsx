import React, { useState } from 'react';
import { Paintbrush, Palette, Home, Building2, Phone, CheckCircle2, Clock, Star, ArrowRight, ShieldCheck, PaintBucket } from 'lucide-react';

const PainterDemo: React.FC = () => {
    const [projectType, setProjectType] = useState<'interior' | 'exterior'>('interior');

    return (
        <div className="bg-white text-slate-800 font-sans selection:bg-indigo-100 relative">

            {/* Sticky Mobile Quote Bar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-indigo-600 text-white p-4 flex items-center justify-between md:hidden shadow-2xl">
                <div>
                    <div className="font-bold text-sm uppercase tracking-wider">Need Painting?</div>
                    <div className="text-xs opacity-90">Get a Free Virtual Quote</div>
                </div>
                <a href="tel:+19177688896" className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 fill-current" /> Call Now
                </a>
            </div>

            {/* Top Bar - Trust */}
            <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs md:text-sm font-medium border-b border-slate-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-indigo-400" /> 5-Year Warranty on All Jobs</span>
                        <span className="flex items-center gap-2 hidden sm:flex"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Licensed & Insured</span>
                    </div>
                    <div className="hidden sm:block text-indigo-400 font-bold uppercase tracking-wider text-xs">Now Booking Exterior Season</div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg transform rotate-3">
                                <Paintbrush className="w-6 h-6" />
                            </div>
                            <div className="leading-tight">
                                <span className="block text-2xl font-black text-slate-900 tracking-tight">Pro<span className="text-indigo-600">Coat</span></span>
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Painting Services</span>
                            </div>
                        </div>

                        <div className="hidden lg:flex gap-10 font-bold text-sm uppercase tracking-wide text-slate-600">
                            <a href="#" className="hover:text-indigo-600 transition-colors">Residential</a>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Commercial</a>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Cabinet Refinishing</a>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Portfolio</a>
                        </div>

                        <a href="tel:+19177688896" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md font-bold shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-2">
                            <Palette className="w-4 h-4" /> Free Quote
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-indigo-600 shadow-sm border border-indigo-100">
                                <Star className="w-4 h-4 fill-current" />
                                5-Star Rated on Google
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
                                We Don't Just Paint. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">We Transform.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
                                Professional residential and commercial painting. Clean lines, zero mess, and a finish that lasts for years.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-indigo-600 text-white text-lg font-bold py-5 px-8 rounded-lg shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3">
                                    Get Fast Quote <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="bg-white border-2 border-slate-200 text-slate-700 text-lg font-bold py-5 px-8 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors flex items-center justify-center gap-3">
                                    View Portfolio
                                </button>
                            </div>

                            <div className="flex items-center gap-4 text-sm font-bold text-slate-500 pt-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <img
                                            key={i}
                                            src={`https://i.pravatar.cc/40?img=${i + 10}`}
                                            alt="Customer"
                                            className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <span>Trusted by 500+ homeowners</span>
                            </div>
                        </div>

                        {/* Interactive Paint Card */}
                        <div className="relative">
                            <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform rotate-1 transition-transform hover:rotate-0 duration-500">
                                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden relative">
                                    <img
                                        src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="Beautiful Painted Interior"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-indigo-600/90 text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Premium Finish</div>
                                </div>

                                {/* Swatches */}
                                <div className="p-6 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">Modern Living Room</h3>
                                        <p className="text-sm text-slate-500">Color: Hale Navy / Dove White</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-[#1e293b] border-2 border-slate-200 shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-[#f1f5f9] border-2 border-slate-200 shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-[#6366f1] border-2 border-slate-200 shadow-sm"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Visualizer Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100">
                                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                                    <PaintBucket className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Try Colors?</div>
                                    <div className="text-xs text-slate-500">Use our virtual visualizer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toggle Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">Our Services</h2>
                        <p className="text-slate-500 max-w-xl mx-auto">From quick touch-ups to full home transformations, we do it all with precision.</p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <div className="bg-slate-100 p-1 rounded-lg inline-flex">
                            <button
                                onClick={() => setProjectType('interior')}
                                className={`px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider transition-all ${projectType === 'interior' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                Interior
                            </button>
                            <button
                                onClick={() => setProjectType('exterior')}
                                className={`px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider transition-all ${projectType === 'exterior' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                Exterior
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(projectType === 'interior'
                            ? [
                                { icon: Home, title: "Full Interior Repaint", desc: "Walls, ceilings, and trim. We cover floors and furniture impeccably." },
                                { icon: PaintBucket, title: "Cabinet Refinishing", desc: "Factory-finish look for your kitchen cabinets at a fraction of the cost." },
                                { icon: Clock, title: "1-Day Painting", desc: "Need it done fast? Our large crews can paint a whole floor in one day." }
                            ]
                            : [
                                { icon: Building2, title: "Exterior Stucco & Siding", desc: "Premium weather-proof paints that resist fading and cracking." },
                                { icon: Home, title: "Deck & Fence Staining", desc: "Restore the natural beauty of your wood and protect it from rot." },
                                { icon: ShieldCheck, title: "Pressure Washing", desc: "Deep cleaning prep to ensure the paint bonds perfectly." }
                            ]
                        ).map((item, i) => (
                            <div key={i} className="p-8 border border-slate-100 rounded-xl hover:shadow-xl hover:border-indigo-100 transition-all group bg-white">
                                <item.icon className="w-10 h-10 text-slate-300 group-hover:text-indigo-600 mb-6 transition-colors" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-500 mb-6 leading-relaxed">{item.desc}</p>
                                <a href="#" className="text-indigo-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2">More Info <ArrowRight className="w-4 h-4" /></a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="bg-indigo-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-bold italic mb-8 max-w-3xl mx-auto leading-relaxed">
                        "ProCoat transformed our entire home in just 3 days. The crew was professional, clean, and the finish is absolutely flawless. Best painters we've ever hired!"
                    </blockquote>
                    <cite className="font-bold text-indigo-200 not-italic uppercase tracking-widest text-sm">- Jennifer M., Brooklyn</cite>
                </div>
            </section>

        </div>
    );
};

export default PainterDemo;
