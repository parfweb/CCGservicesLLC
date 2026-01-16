import React from 'react';
import { Phone, MapPin, Clock, Shield, Droplets, Wrench, ArrowRight, Star, CheckCircle2, ChevronRight, Menu } from 'lucide-react';

const PlumberDemo: React.FC = () => {
    return (
        <div className="bg-white text-slate-800 font-sans selection:bg-blue-200 relative">

            {/* Sticky Mobile Emergency Bar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-red-600 text-white p-4 flex items-center justify-between md:hidden shadow-2xl">
                <div>
                    <div className="font-bold text-sm uppercase tracking-wider">Emergency?</div>
                    <div className="text-xs opacity-90">We arrive in 60 mins</div>
                </div>
                <a href="tel:+19177688896" className="bg-white text-red-600 px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 fill-current" /> Call Now
                </a>
            </div>

            {/* Top Bar - Trust Signals */}
            <div className="bg-slate-900 text-slate-300 py-3 px-4 text-sm hidden md:block border-b border-slate-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Shield className="w-4 h-4 text-blue-400" /> Licensed & Insured: #PLM-5592</span>
                        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Clock className="w-4 h-4 text-blue-400" /> 24/7 Emergency Service</span>
                        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Star className="w-4 h-4 text-blue-400" /> 4.9/5 Rating (500+ Reviews)</span>
                    </div>
                    <div className="flex gap-6 font-medium">
                        <a href="#" className="hover:text-white transition-colors">Careers</a>
                        <a href="#" className="hover:text-white transition-colors">Pay Bill</a>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
                                <Droplets className="w-7 h-7 text-white" />
                            </div>
                            <div className="leading-tight">
                                <span className="block text-2xl font-black text-slate-900 tracking-tight">RAPID<span className="text-blue-600">FLOW</span></span>
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Plumbing & Heating</span>
                            </div>
                        </div>

                        <div className="hidden lg:flex gap-10 font-bold text-sm uppercase tracking-wide text-slate-600">
                            <a href="#" className="hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">Services</a>
                            <a href="#" className="hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">About</a>
                            <a href="#" className="hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">Reviews</a>
                            <a href="#" className="hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">Areas Served</a>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:block text-right">
                                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">24/7 Dispatch</span>
                                <span className="block text-xl font-black text-slate-900 tracking-tight">(917) 768-8896</span>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 hidden md:block">
                                Book Now
                            </button>
                            <button className="lg:hidden p-2 text-slate-600">
                                <Menu className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                {/* Abstract Pattern Background */}
                <div className="absolute inset-0 opacity-30">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#E2E8F0" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider border border-red-100 shadow-sm">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                                Technicians Available Now
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                                Plumbing Disaster? <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Fixed Today.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
                                We're Brooklyn's highest-rated emergency plumbers. No overtime charges. Upfront pricing. 100% satisfaction guaranteed.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-5 px-8 rounded-xl shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 group">
                                    <Phone className="w-5 h-5 fill-current" />
                                    Emergency Service
                                    <ChevronRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-xl border border-slate-100 shadow-lg shadow-slate-200/50">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden`}>
                                                <img src={`https://randomuser.me/api/portraits/men/${i * 10 + 20}.jpg`} alt="Reviewer" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm">
                                        <div className="flex text-yellow-400 gap-0.5 mb-1">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                        </div>
                                        <p className="font-bold text-slate-900 leading-none">500+ Happy Neighbors</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 flex gap-6 text-sm font-bold text-slate-500 uppercase tracking-wide">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Upfront Pricing</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Licensed Pros</div>
                            </div>
                        </div>

                        {/* Hero Form - Glassmorph */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10 scale-105 blur-xl"></div>
                            <div className="bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/50 relative z-20">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">Get a Fast Quote on Estimates</h3>
                                    <p className="text-slate-500">Fill this out. We'll call you in 5 minutes.</p>
                                </div>
                                <div className="space-y-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="First Name" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium" />
                                        <input type="text" placeholder="Last Name" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium" />
                                    </div>
                                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium" />
                                    <select className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none font-medium text-slate-600">
                                        <option>What's the problem?</option>
                                        <option>No Hot Water</option>
                                        <option>Clogged Drain</option>
                                        <option>Leaking Pipe</option>
                                        <option>Toilet Issue</option>
                                    </select>
                                    <button className="w-full bg-slate-900 hover:bg-black text-white text-lg font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]">
                                        See Pricing
                                    </button>
                                    <p className="text-center text-xs text-slate-400 font-medium">Your info is strictlgy confidential.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid with Cards */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">We Handle Every Plumbing Nightmare Imaginable.</h2>
                        </div>
                        <a href="#" className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all flex items-center gap-2">View All Services <ArrowRight className="w-4 h-4" /></a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Droplets, title: "Leak Detection", desc: "Using advanced acoustic technology, we find leaks behind walls without tearing your house apart." },
                            { icon: Wrench, title: "Drain Cleaning", desc: "Hydro-jetting technology to blast away years of grease and buildup immediately." },
                            { icon: Shield, title: "Water Heaters", desc: "Installation & repair of tankless and standard units. Don't take cold showers." }
                        ].map((service, i) => (
                            <div key={i} className="group p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-3">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{service.desc}</p>
                                <span className="text-slate-900 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4" /></span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local SEO / Trust Section */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 opacity-10 skew-x-12"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black">Why Neighbors Trust Us</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Upfront, Flat-Rate Pricing", desc: "No hourly billing surprises. You know the exact price before we start." },
                                    { title: "Licensed & Background Checked", desc: "Our technicians are drug-tested and background checked for your safety." },
                                    { title: "Respect For Your Home", desc: "We wear shoe covers and use drop cloths. We leave your home cleaner than we found it." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold border border-blue-600/30">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-slate-400 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
                            {/* Mock Map */}
                            <div className="w-full h-64 bg-slate-700 rounded-xl mb-6 flex items-center justify-center text-slate-500 font-bold uppercase tracking-widest relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/1050px-Google_Maps_Logo_2020.svg.png')] bg-cover bg-center grayscale"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-xl flex items-center gap-2">
                                        <MapPin className="w-4 h-4" /> Service Area Map
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm font-medium text-slate-400">
                                <span>Serving: Brooklyn, Queens, Manhattan</span>
                                <span className="text-green-400 flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Area Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PlumberDemo;
