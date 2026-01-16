import React, { useState } from 'react';
import { Sparkles, Calendar, Check, Star, Shield, Home, Building2, UserCheck, ArrowRight, Phone, MapPin, Clock, CheckCircle2, Zap } from 'lucide-react';

const CleaningDemo: React.FC = () => {
    const [bedrooms, setBedrooms] = useState(2);
    const [bathrooms, setBathrooms] = useState(1);
    const [cleanType, setCleanType] = useState<'standard' | 'deep'>('standard');

    const basePrice = cleanType === 'standard' ? 89 : 149;
    const price = basePrice + (bedrooms - 1) * 35 + (bathrooms - 1) * 25;

    return (
        <div className="bg-white text-slate-800 font-sans selection:bg-emerald-100 relative">

            {/* Sticky Mobile Bar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-emerald-600 text-white p-4 flex items-center justify-between md:hidden shadow-2xl">
                <div>
                    <div className="font-bold text-sm uppercase tracking-wider">Need Cleaning?</div>
                    <div className="text-xs opacity-90">Get Instant Quote Online</div>
                </div>
                <a href="tel:+19177688896" className="bg-white text-emerald-600 px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 fill-current" /> Call Now
                </a>
            </div>

            {/* Top Bar - Trust Signals */}
            <div className="bg-emerald-600 text-white py-2 px-4 text-sm hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> 100% Satisfaction Guarantee</span>
                        <span className="flex items-center gap-2"><UserCheck className="w-4 h-4" /> Background Checked Staff</span>
                        <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Same-Day Booking Available</span>
                    </div>
                    <div className="font-bold flex items-center gap-4">
                        <span>✨ Get $20 Off Your First Clean! Code: FRESH20</span>
                        <span className="text-emerald-200">|</span>
                        <a href="tel:+19177688896" className="hover:text-emerald-200 transition-colors">(917) 768-8896</a>
                    </div>
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
                            <a href="#calculator" className="hover:text-emerald-600 transition-colors">Get Quote</a>
                            <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
                            <a href="#areas" className="hover:text-emerald-600 transition-colors">Service Areas</a>
                            <a href="#reviews" className="hover:text-emerald-600 transition-colors">Reviews</a>
                        </div>

                        <a href="tel:+19177688896" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-emerald-200 transition-all flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Book in 60 Seconds
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero & Calculator Section */}
            <section id="calculator" className="relative py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
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
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Check className="w-4 h-4" /></div>
                                    <span className="font-medium">Same-Day & Next-Day Availability</span>
                                </div>
                            </div>
                        </div>

                        {/* Instant Price Calculator Widget */}
                        <div className="relative">
                            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-20">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">Get Instant Quote</h3>
                                        <p className="text-slate-500 text-sm">No phone call required. Book in seconds.</p>
                                    </div>
                                    <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Clean Type Toggle */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Type of Clean</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                onClick={() => setCleanType('standard')}
                                                className={`py-3 rounded-lg font-bold border-2 transition-all ${cleanType === 'standard' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-100 hover:border-emerald-200 text-slate-600'}`}
                                            >
                                                Standard Clean
                                            </button>
                                            <button
                                                onClick={() => setCleanType('deep')}
                                                className={`py-3 rounded-lg font-bold border-2 transition-all ${cleanType === 'deep' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-100 hover:border-emerald-200 text-slate-600'}`}
                                            >
                                                Deep Clean
                                            </button>
                                        </div>
                                    </div>

                                    {/* Bedroom Selector */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">How many bedrooms?</label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map(num => (
                                                <button
                                                    key={num}
                                                    onClick={() => setBedrooms(num)}
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

                                    {/* Bathroom Selector */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">How many bathrooms?</label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4].map(num => (
                                                <button
                                                    key={num}
                                                    onClick={() => setBathrooms(num)}
                                                    className={`flex-1 py-3 rounded-lg font-bold border-2 transition-all ${bathrooms === num
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
                                            <div className="text-4xl font-extrabold text-slate-900">${price}<span className="text-lg text-slate-400 font-normal">.00</span></div>
                                        </div>
                                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all flex items-center gap-2">
                                            Book Now <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-center text-slate-400">🔒 Secure 256-bit SSL encrypted payment</p>
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
            <section id="services" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">What We Clean</h2>
                        <p className="text-slate-500 max-w-xl mx-auto">From quick refreshes to deep sanitization, we have a plan for every home and budget.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-[#F0FDF4] border border-emerald-100 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Residential Cleaning"
                                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                            />
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    <Home className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Residential Cleaning</h3>
                                <p className="text-slate-600 mb-4">Standard and deep cleaning for homes, apartments, and condos. Recurring discounts available.</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Kitchen & bathroom deep clean</li>
                                    <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Dusting, vacuuming, mopping</li>
                                    <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Bed making & organizing</li>
                                </ul>
                                <span className="font-bold text-emerald-700 flex items-center gap-2">View Checklist <ArrowRight className="w-4 h-4" /></span>
                            </div>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Office Cleaning"
                                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                            />
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    <Building2 className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Office Cleaning</h3>
                                <p className="text-slate-600 mb-4">Keep your workspace professional and sanitary. Nightly or weekly options tailored to your business.</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Desk & common area sanitization</li>
                                    <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Restroom deep cleaning</li>
                                    <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Trash removal & recycling</li>
                                </ul>
                                <span className="font-bold text-blue-700 flex items-center gap-2">Get Commercial Quote <ArrowRight className="w-4 h-4" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area Map */}
            <section id="areas" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">We Cover Your Neighborhood</h2>
                            <p className="text-slate-600 mb-8 text-lg">Fast response times because we're local. Check if we service your area:</p>

                            <div className="grid grid-cols-2 gap-4">
                                {['Brooklyn', 'Manhattan', 'Queens', 'Bronx', 'Staten Island', 'Long Island', 'Jersey City', 'Hoboken'].map(area => (
                                    <div key={area} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100">
                                        <MapPin className="w-5 h-5 text-emerald-600" />
                                        <span className="font-medium text-slate-700">{area}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <a href="tel:+19177688896" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-all">
                                    <Phone className="w-4 h-4" /> Check Availability: (917) 768-8896
                                </a>
                            </div>
                        </div>
                        <div className="bg-slate-200 rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Service Area Map"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section id="reviews" className="bg-emerald-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-current" />)}
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-bold italic mb-8 max-w-3xl mx-auto leading-relaxed">
                        "PureSpace is the only cleaning service I trust with my home. They're always on time, thorough, and my house smells amazing after every visit!"
                    </blockquote>
                    <cite className="font-bold text-emerald-200 not-italic uppercase tracking-widest text-sm">- Maria S., Brooklyn Heights</cite>

                    <div className="mt-12 flex justify-center gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-extrabold">500+</div>
                            <div className="text-emerald-200 text-sm uppercase tracking-wider">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-extrabold">4.9</div>
                            <div className="text-emerald-200 text-sm uppercase tracking-wider">Google Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-extrabold">5+</div>
                            <div className="text-emerald-200 text-sm uppercase tracking-wider">Years in Business</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CleaningDemo;
