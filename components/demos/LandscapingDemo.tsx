import React from 'react';
import { Shovel, Trees, Scissors, Sun, Phone, CheckCircle2, Calendar, MapPin, ArrowRight, Star, Flower2 } from 'lucide-react';

const LandscapingDemo: React.FC = () => {
    return (
        <div className="bg-white text-stone-800 font-sans selection:bg-green-200 relative">

            {/* Sticky Mobile Quote Bar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-green-700 text-white p-4 flex items-center justify-between md:hidden shadow-2xl">
                <div>
                    <div className="font-bold text-sm uppercase tracking-wider">Need a Mowing?</div>
                    <div className="text-xs opacity-90">Get a Free Estimate</div>
                </div>
                <a href="tel:+19177688896" className="bg-white text-green-700 px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 fill-current" /> Call Now
                </a>
            </div>

            {/* Top Bar */}
            <div className="bg-stone-900 text-stone-300 py-2 px-4 text-xs md:text-sm font-medium border-b border-stone-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-green-500" /> Serving Greater Metro Area</span>
                        <span className="flex items-center gap-2 hidden sm:flex"><CheckCircle2 className="w-4 h-4 text-green-500" /> Fully Insured & Licensed</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm transition-all">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-700 rounded-tl-2xl rounded-br-2xl flex items-center justify-center text-white shadow-lg">
                                <Trees className="w-6 h-6" />
                            </div>
                            <div className="leading-tight">
                                <span className="block text-2xl font-serif font-black text-stone-900 tracking-tight">Green<span className="text-green-700">Genius</span></span>
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Landscaping</span>
                            </div>
                        </div>

                        <div className="hidden lg:flex gap-10 font-bold text-sm uppercase tracking-wide text-stone-600">
                            <a href="#" className="hover:text-green-700 transition-colors">Maintenance</a>
                            <a href="#" className="hover:text-green-700 transition-colors">Design</a>
                            <a href="#" className="hover:text-green-700 transition-colors">Hardscaping</a>
                            <a href="#" className="hover:text-green-700 transition-colors">Projects</a>
                        </div>

                        <a href="tel:+19177688896" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-green-700/30 transition-all flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Free Estimate
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-stone-50">
                {/* Organic Pattern */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-green-100/40 rounded-l-[10rem] transform translate-x-20"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-green-700 shadow-sm border border-green-100">
                                <Flower2 className="w-4 h-4" />
                                Now Booking Spring Cleanups
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-serif text-stone-900 leading-[1.1]">
                                Your Dream Yard, <br />
                                <span className="text-green-700">Minus The Work.</span>
                            </h1>

                            <p className="text-xl text-stone-600 leading-relaxed max-w-lg font-light">
                                From weekly mowing to complete backyard transformations. We are the highest-rated landscaping crew in the county.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-stone-900 text-white text-lg font-bold py-5 px-8 rounded-xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3">
                                    Get Pricing
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="bg-white border-2 border-stone-200 text-stone-700 text-lg font-bold py-5 px-8 rounded-xl hover:border-green-700 hover:text-green-700 transition-colors flex items-center justify-center gap-3">
                                    View Gallery
                                </button>
                            </div>
                        </div>

                        {/* Image Grid Mockup */}
                        <div className="relative grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="aspect-[4/5] bg-stone-200 rounded-2xl overflow-hidden shadow-lg relative group">
                                    <img src="https://images.unsplash.com/photo-1558293842-c0fd3db8415e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Lawn" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Maintenance</div>
                                </div>
                                <div className="aspect-square bg-stone-200 rounded-2xl overflow-hidden shadow-lg relative group">
                                    <img src="https://images.unsplash.com/photo-1628135804797-27bde2639d6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Walkway" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-square bg-stone-200 rounded-2xl overflow-hidden shadow-lg relative group">
                                    <img src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Patio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="aspect-[4/5] bg-stone-200 rounded-2xl overflow-hidden shadow-lg relative group">
                                    <img src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Garden" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Design</div>
                                </div>
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full border-2 border-green-700 flex flex-col items-center justify-center text-center">
                                    <span className="text-xl font-bold text-green-700 leading-none">15+</span>
                                    <span className="text-[9px] uppercase font-bold text-stone-500">Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Cards */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-4xl font-serif text-stone-900">Our Services</h2>
                        <a href="#" className="font-bold text-green-700 hover:text-green-800 border-b border-green-700 pb-1">View Full Service Menu</a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-stone-50 rounded-2xl hover:bg-green-50 transition-colors group cursor-pointer">
                            <Scissors className="w-10 h-10 text-stone-400 group-hover:text-green-700 mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3 font-serif">Weekly Maintenance</h3>
                            <p className="text-stone-500 mb-6">Mowing, edging, and blowing. We show up on the same day every week, rain or shine.</p>
                            <span className="text-xs font-bold uppercase tracking-wider text-green-700">From $45/week</span>
                        </div>
                        <div className="p-8 bg-stone-50 rounded-2xl hover:bg-green-50 transition-colors group cursor-pointer">
                            <Trees className="w-10 h-10 text-stone-400 group-hover:text-green-700 mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3 font-serif">Design & Build</h3>
                            <p className="text-stone-500 mb-6">Patios, walkways, and retaining walls. Increase your property value with hardscaping.</p>
                            <span className="text-xs font-bold uppercase tracking-wider text-green-700">Free 3D Design</span>
                        </div>
                        <div className="p-8 bg-stone-50 rounded-2xl hover:bg-green-50 transition-colors group cursor-pointer">
                            <Sun className="w-10 h-10 text-stone-400 group-hover:text-green-700 mb-6 transition-colors" />
                            <h3 className="text-xl font-bold mb-3 font-serif">Seasonal Cleanups</h3>
                            <p className="text-stone-500 mb-6">Spring mulch and fall leaf removal. Get your yard ready for the changing seasons.</p>
                            <span className="text-xs font-bold uppercase tracking-wider text-green-700">Book Early & Save</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Strip */}
            <section className="bg-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-serif italic mb-8 max-w-3xl mx-auto leading-relaxed">
                        "GreenGenius transformed our backyard. The crew was professional, fast, and left everything spotless. Highly recommended!"
                    </blockquote>
                    <cite className="font-bold text-green-200 not-italic uppercase tracking-widest text-sm">- Sarah Jenkins, Westbury</cite>
                </div>
            </section>

        </div>
    );
};

export default LandscapingDemo;
