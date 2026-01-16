import React from 'react';
import { Thermometer, Wind, Snowflake, Flame, Phone, CheckCircle2, Calendar, Wrench, Shield, ArrowRight, Star } from 'lucide-react';

const HVACDemo: React.FC = () => {
    return (
        <div className="bg-white text-slate-800 font-sans selection:bg-cyan-200 relative">

            {/* Sticky Mobile Emergency Bar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-red-600 text-white p-4 flex items-center justify-between md:hidden shadow-2xl">
                <div>
                    <div className="font-bold text-sm uppercase tracking-wider">AC Broken?</div>
                    <div className="text-xs opacity-90">24/7 Emergency Dispatch</div>
                </div>
                <a href="tel:+19177688896" className="bg-white text-red-600 px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 fill-current" /> Call Now
                </a>
            </div>

            {/* Top Bar - Trust */}
            <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs md:text-sm font-medium border-b border-slate-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-cyan-400" /> Carrier & Trane Authorized Dealer</span>
                        <span className="flex items-center gap-2 hidden sm:flex"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Licensed HVAC-R #9921</span>
                    </div>
                    <div className="text-cyan-400 font-bold hidden sm:block">❄️ $69 Pre-Season AC Tune-Up Special</div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl text-white shadow-lg">
                                <Snowflake className="w-5 h-5 absolute top-2 left-2 opacity-80" />
                                <Flame className="w-5 h-5 absolute bottom-2 right-2 text-orange-300 opacity-80" />
                            </div>
                            <div className="leading-tight">
                                <span className="block text-2xl font-black text-slate-900 tracking-tight">AIR<span className="text-cyan-600">PRO</span></span>
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Heating & Cooling</span>
                            </div>
                        </div>

                        <div className="hidden lg:flex gap-10 font-bold text-sm uppercase tracking-wide text-slate-600">
                            <a href="#" className="hover:text-cyan-600 transition-colors">AC Repair</a>
                            <a href="#" className="hover:text-cyan-600 transition-colors">Furnace</a>
                            <a href="#" className="hover:text-cyan-600 transition-colors">Maintenance</a>
                            <a href="#" className="hover:text-cyan-600 transition-colors">Financing</a>
                        </div>

                        <a href="tel:+19177688896" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-cyan-600/20 transition-all flex items-center gap-2">
                            <Phone className="w-4 h-4 fill-current" /> (917) 768-8896
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Split Tone */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-cyan-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-100/30 skew-x-12 transform origin-top translate-x-32"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider border border-red-100">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                                High Volume Call Times - Priority Dispatch Active
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                                Too Hot? <span className="text-orange-500">Too Cold?</span><br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Just Right.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
                                We restore comfort to your home same-day. No overtime fees for nights for club members. 10-year warranty on new installs.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg font-bold py-5 px-8 rounded-xl shadow-xl shadow-cyan-600/20 flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                                    Book Repair Now
                                </button>
                                <button className="flex-1 bg-white border-2 border-slate-200 text-slate-700 text-lg font-bold py-5 px-8 rounded-xl hover:border-cyan-600 hover:text-cyan-600 transition-colors flex items-center justify-center gap-3">
                                    Get Equipment Quote
                                </button>
                            </div>

                            <div className="pt-4 flex items-center gap-2 text-sm font-medium text-slate-500">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <span>4.9/5 Rating on Google (1,200+ Reviews)</span>
                            </div>
                        </div>

                        {/* Interactive Thermostat Mockup */}
                        <div className="relative flex justify-center">
                            <div className="relative w-80 h-80 bg-white rounded-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-[12px] border-slate-100 flex items-center justify-center group overflow-hidden">
                                {/* Screen */}
                                <div className="w-64 h-64 bg-slate-900 rounded-full flex flex-col items-center justify-center text-white relative z-10">
                                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">Current Temp</div>
                                    <div className="text-8xl font-thin tracking-tighter">72°</div>
                                    <div className="text-cyan-400 font-medium flex items-center gap-2 mt-2"><Snowflake className="w-4 h-4" /> Cooling To 68°</div>
                                </div>

                                {/* Arc Decoration */}
                                <div className="absolute w-full h-full rounded-full border-[6px] border-cyan-500 border-t-transparent border-r-transparent transform -rotate-45 opacity-50"></div>
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce duration-[3000ms]">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">System Healthy</div>
                                        <div className="text-xs text-slate-500">Last Tune-Up: Yesterday</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specials / Services */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Snowflake,
                                title: "AC Repair & Install",
                                desc: "Is your unit making noise or blowing warm air? We fix all brands.",
                                color: "text-cyan-600",
                                bg: "bg-cyan-50"
                            },
                            {
                                icon: Flame,
                                title: "Furnace & Heating",
                                desc: "Efficient heating solutions to keep you cozy during winter storms.",
                                color: "text-orange-500",
                                bg: "bg-orange-50"
                            },
                            {
                                icon: Wind,
                                title: "Air Quality",
                                desc: "Duct cleaning and specialized filters to remove allergens and dust.",
                                color: "text-purple-600",
                                bg: "bg-purple-50"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-300">
                                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{item.desc}</p>
                                <a href="#" className="flex items-center gap-2 font-bold text-slate-900 hover:text-cyan-600 transition-colors">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maintenance Promo */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
                        <div className="flex-1">
                            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">Limited Time Offer</div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6">Pre-Season AC Tune-Up</h2>
                            <p className="text-xl text-cyan-100 mb-8 max-w-lg">
                                Avoid a breakdown in the middle of summer. Get your 21-point inspection, coil cleaning, and safety check today.
                            </p>
                            <div className="flex items-end gap-2 mb-8">
                                <span className="text-6xl font-black">$69</span>
                                <span className="text-xl text-cyan-200 line-through mb-2">$149</span>
                            </div>
                            <button className="bg-white text-cyan-900 px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-cyan-50 transition-colors shadow-lg">
                                Claim Offer
                            </button>
                        </div>
                        <div className="w-full md:w-1/3 bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                            <h4 className="font-bold text-lg mb-6 border-b border-white/20 pb-4">What's Included:</h4>
                            <ul className="space-y-4">
                                {['Refrigerant Level Check', 'Condenser Coil Clean', 'Thermostat Calibration', 'Electrical Safety Check'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-300" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HVACDemo;
