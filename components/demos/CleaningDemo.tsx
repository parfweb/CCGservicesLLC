import React, { useState } from 'react';
import { Sparkles, Calendar, Check, Star, Shield, Home, Building2, UserCheck, ArrowRight } from 'lucide-react';

const CleaningDemo: React.FC = () => {
    const [bedrooms, setBedrooms] = useState(2);
    const [price, setPrice] = useState(129);

    const updatePrice = (beds: number) => {
        setBedrooms(beds);
        setPrice(89 + (beds - 1) * 40);
    };

    return (
        <div className="bg-white text-slate-800 font-sans selection:bg-emerald-100">

            {/* Top Bar - Trust Signals */}
            <div className="bg-emerald-600 text-white py-2 px-4 text-sm hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> 100% Satisfaction Guarantee</span>
                        <span className="flex items-center gap-2"><UserCheck className="w-4 h-4" /> Background Checked Staff</span>
                    </div>
                    <div className="font-bold">✨ Get $20 Off Your First Clean! Code: FRESH20</div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-2">
                            <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold text-slate-900 tracking-tight">Pure<span className="text-emerald-600">Space</span></span>
                        </div>

                        <div className="hidden md:flex gap-8 font-medium text-slate-600">
                            <a href="#" className="hover:text-emerald-600">Residential</a>
                            <a href="#" className="hover:text-emerald-600">Commercial</a>
                            <a href="#" className="hover:text-emerald-600">Checklist</a>
                            <a href="#" className="hover:text-emerald-600">Reviews</a>
                        </div>

                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-emerald-200 transition-all">
                            Book in 60 Seconds
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero & Calculator Section */}
            <section className="relative py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white border border-emerald-100 px-4 py-1.5 rounded-full font-bold text-sm text-emerald-700 shadow-sm">
                                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                                Voted #1 Cleaning Service in Metro Area
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                                Come Home to a <br />
                                <span className="text-emerald-600">Sparkling Clean</span> House.
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                Life is busy. Let us handle the mess. Our vetted pros make your home shine so you can relax.
                            </p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Check className="w-4 h-4" /></div>
                                    <span className="font-medium">Supplies & Equipment Included</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Check className="w-4 h-4" /></div>
                                    <span className="font-medium">Bonded & Insured for Safety</span>
                                </div>
                            </div>
                        </div>

                        {/* Instant Price Calculator Widget */}
                        <div className="relative">
                            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-20">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">Get Instant Quote</h3>
                                        <p className="text-slate-500 text-sm">No phone call required.</p>
                                    </div>
                                    <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Bedroom Selector */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">How many bedrooms?</label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4].map(num => (
                                                <button
                                                    key={num}
                                                    onClick={() => updatePrice(num)}
                                                    className={`flex-1 py-3 rounded-lg font-bold border-2 transition-all ${bedrooms === num
                                                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                                                        : 'border-slate-100 hover:border-emerald-200 text-slate-600'
                                                        }`}
                                                >
                                                    {num}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Estimated Price Display */}
                                    <div className="bg-slate-50 p-6 rounded-xl flex justify-between items-center border border-slate-100">
                                        <div>
                                            <p className="text-slate-500 text-sm font-medium">Estimated Total</p>
                                            <div className="text-3xl font-extrabold text-slate-900">${price}<span className="text-lg text-slate-400 font-normal">.00</span></div>
                                        </div>
                                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all flex items-center gap-2">
                                            Book Now <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-center text-slate-400">Secure 256-bit SSL encrypted payment</p>
                                </div>
                            </div>
                            {/* Decoration */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full blur-3xl opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-[#F0FDF4] border border-emerald-100 hover:shadow-lg transition-all cursor-pointer group">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <Home className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Residential Cleaning</h3>
                            <p className="text-slate-600 mb-4">Standard and deep cleaning for homes, apartments, and condos. Recurring discounts available.</p>
                            <span className="font-bold text-emerald-700 flex items-center gap-2">View Checklist <ArrowRight className="w-4 h-4" /></span>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:shadow-lg transition-all cursor-pointer group">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <Building2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Office Cleaning</h3>
                            <p className="text-slate-600 mb-4">Keep your workspace professional and sanitary. Nightly or weekly options tailored to your business.</p>
                            <span className="font-bold text-blue-700 flex items-center gap-2">Get Commercial Quote <ArrowRight className="w-4 h-4" /></span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CleaningDemo;
