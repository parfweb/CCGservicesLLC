import React from 'react';
import { Phone, MapPin, Clock, Shield, CheckCircle, Droplets, Tool, ArrowRight, Star } from 'lucide-react';

const PlumberDemo: React.FC = () => {
    return (
        <div className="bg-white text-slate-800 font-sans selection:bg-blue-200">

            {/* Top Bar - Trust Signals */}
            <div className="bg-slate-900 text-slate-300 py-2 px-4 text-sm hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-400" /> Licensed & Insured: #PLM-5592</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> 24/7 Emergency Service</span>
                    </div>
                    <div className="flex gap-4">
                        <span>Serving Greater Metro Area</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Droplets className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-slate-900">RapidFlow<span className="text-blue-600">Plumbing</span></span>
                        </div>

                        <div className="hidden md:flex gap-8 font-medium text-slate-600">
                            <a href="#" className="hover:text-blue-600">Services</a>
                            <a href="#" className="hover:text-blue-600">About</a>
                            <a href="#" className="hover:text-blue-600">Reviews</a>
                            <a href="#" className="hover:text-blue-600">Areas Served</a>
                        </div>

                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg animate-pulse">
                            <Phone className="w-5 h-5" />
                            (555) 392-0192
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-bold text-sm">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                Available for Emergency Dispatch
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                                Burst Pipe? <br />
                                <span className="text-blue-600">We're On The Way.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                Brooklyn's most trusted emergency plumbers. We arrive in 60 minutes or less, fully stocked and ready to fix it right the first time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1">
                                    Request Service Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                        ))}
                                    </div>
                                    <div className="text-sm">
                                        <div className="flex text-yellow-500">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                        </div>
                                        <span className="font-bold text-slate-900">450+ 5-Star Reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image / Form */}
                        <div className="relative">
                            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 relative z-20">
                                <h3 className="text-2xl font-bold mb-2">Get a Fast Quote</h3>
                                <p className="text-slate-500 mb-6">Tell us what's wrong, we'll give you a price.</p>
                                <div className="space-y-4">
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                                    <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none">
                                        <option>Select Issue...</option>
                                        <option>No Hot Water</option>
                                        <option>Clogged Drain</option>
                                        <option>Leaking Pipe</option>
                                        <option>Toilet Issue</option>
                                    </select>
                                    <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-black transition-colors">
                                        Get My Free Quote
                                    </button>
                                </div>
                            </div>
                            {/* Decorative elements behind form */}
                            <div className="absolute top-10 -right-10 w-full h-full bg-blue-600/10 rounded-3xl -z-10 transform rotate-6"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Plumbing Solutions</h2>
                        <p className="text-lg text-slate-600">From small drips to major overhauls, our licensed master plumbers handle it all.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Droplets, title: "Leak Detection", desc: "Advanced acoustic tech to find hidden leaks behind walls." },
                            { icon: Tool, title: "Drain Cleaning", desc: "Hydro-jetting service to clear stubborn clogs instantly." },
                            { icon: Shield, title: "Water Heaters", desc: "Repair and installation of tankless and standard units." }
                        ].map((service, i) => (
                            <div key={i} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-4">{service.desc}</p>
                                <span className="text-blue-600 font-bold text-sm flex items-center gap-1">Learn More <ArrowRight className="w-4 h-4" /></span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
                        <div className="text-2xl font-bold flex items-center gap-2"><span className="text-4xl">G</span> Google Reviews</div>
                        <div className="text-2xl font-bold flex items-center gap-2">HomeAdvisor</div>
                        <div className="text-2xl font-bold flex items-center gap-2">Angi</div>
                        <div className="text-2xl font-bold flex items-center gap-2">BBB</div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PlumberDemo;
