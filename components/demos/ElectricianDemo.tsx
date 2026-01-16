import React, { useState } from 'react';
import { Zap, Shield, CheckCircle2, Phone, ArrowRight, Home, Building2, Battery, AlertTriangle, Star, Check } from 'lucide-react';

const ElectricianDemo: React.FC = () => {
    const [serviceType, setServiceType] = useState<'residential' | 'commercial'>('residential');

    return (
        <div className="bg-neutral-900 text-white font-sans selection:bg-yellow-500 selection:text-black">

            {/* Sticky Mobile Emergency Bar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-red-600 text-white p-4 flex items-center justify-between md:hidden shadow-2xl">
                <div>
                    <div className="font-bold text-sm uppercase tracking-wider">Power Outage?</div>
                    <div className="text-xs opacity-90">24/7 Emergency Response</div>
                </div>
                <a href="tel:+19177688896" className="bg-white text-red-600 px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 fill-current" /> Call Now
                </a>
            </div>

            {/* Top Bar - Trust & Safety */}
            <div className="bg-yellow-500 text-black py-2 px-4 text-xs md:text-sm font-bold tracking-wide">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Master Electrician Lic #EL-99281</span>
                        <span className="flex items-center gap-2 hidden sm:flex"><CheckCircle2 className="w-4 h-4" /> Insured & Bonded</span>
                    </div>
                    <div className="uppercase tracking-widest hidden sm:block">Serving The Entire Metro Region</div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-neutral-900/90 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 border-2 border-yellow-500 rounded-lg flex items-center justify-center">
                                <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            </div>
                            <div>
                                <span className="block text-2xl font-black tracking-tight leading-none text-white">VOLT<span className="text-yellow-500">SAFE</span></span>
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Electricians</span>
                            </div>
                        </div>

                        <div className="hidden lg:flex gap-8 font-bold text-sm uppercase tracking-wider text-neutral-400">
                            <a href="#" className="hover:text-yellow-500 transition-colors">Emergency</a>
                            <a href="#" className="hover:text-yellow-500 transition-colors">Residential</a>
                            <a href="#" className="hover:text-yellow-500 transition-colors">Commercial</a>
                            <a href="#" className="hover:text-yellow-500 transition-colors">Generators</a>
                        </div>

                        <a href="tel:+19177688896" className="bg-white text-black px-6 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-yellow-500 transition-all flex items-center gap-2">
                            <Phone className="w-4 h-4" /> (917) 768-8896
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden border-b border-white/10">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 rounded-full text-yellow-500 font-bold uppercase text-xs tracking-widest mb-8">
                        <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                        Available 24/7 For Emergencies
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tight">
                        POWER DONE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">RIGHT.</span><br />
                        SAFETY DONE <span className="text-white">FIRST.</span>
                    </h1>

                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        Don't gamble with your home's safety. Get a licensed master electrician who solves the problem the first time. Upfront pricing, zero guesswork.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-yellow-500 text-black px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                            Scheule Service
                        </button>
                        <button className="border border-neutral-700 text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:border-yellow-500 hover:text-yellow-500 transition-colors">
                            View Our Work
                        </button>
                    </div>
                </div>
            </section>

            {/* Service Type Toggle / Segment */}
            <section className="py-24 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Toggle Controls */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-neutral-800 p-1 rounded-full inline-flex">
                            <button
                                onClick={() => setServiceType('residential')}
                                className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${serviceType === 'residential' ? 'bg-yellow-500 text-black shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                            >
                                Residential
                            </button>
                            <button
                                onClick={() => setServiceType('commercial')}
                                className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${serviceType === 'commercial' ? 'bg-yellow-500 text-black shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                            >
                                Commercial
                            </button>
                        </div>
                    </div>

                    {/* Content Display */}
                    <div className="grid md:grid-cols-2 gap-16 items-center animate-in fade-in slide-in-from-bottom-4 duration-500 key={serviceType}">
                        <div>
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-4">
                                {serviceType === 'residential' ? <Home className="w-10 h-10 text-yellow-500" /> : <Building2 className="w-10 h-10 text-yellow-500" />}
                                {serviceType === 'residential' ? 'Home Electrical Services' : 'Commercial & Industrial'}
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                {serviceType === 'residential'
                                    ? "Protect your family and your biggest investment. From panel upgrades to EV charger installations, we ensure your home's grid is safe and efficient."
                                    : "Minimize downtime and maximize efficiency. We handle complex 3-phase wiring, lighting retrofits, and code compliance for businesses."}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {(serviceType === 'residential'
                                    ? ['Main Panel Upgrades & Swaps', 'EV Charger Installation (Tesla Certified)', 'Recessed Lighting Design']
                                    : ['3-Phase Circuit Installation', 'LED Warehouse Retrofits', 'Data & Server Room Power']
                                ).map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-neutral-200 font-medium">
                                        <Check className="w-5 h-5 text-yellow-500" /> {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="text-yellow-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                See All {serviceType} Services <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 border-2 border-yellow-500/20 translate-x-4 translate-y-4 -z-10"></div>
                            {/* Placeholder for Panel Image */}
                            <div className="bg-neutral-800 aspect-square flex items-center justify-center p-8 text-center text-neutral-600 border border-neutral-700">
                                <div className="space-y-4">
                                    <Battery className="w-16 h-16 mx-auto opacity-20" />
                                    <p className="font-mono text-xs uppercase tracking-widest">
                                        {serviceType === 'residential' ? 'Image: Clean Panel Wiring' : 'Image: Industrial Conduit'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Check Promo - Lead Magnet */}
            <section className="py-20 bg-yellow-500 text-black">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-yellow-500 rounded-full mb-6">
                        <AlertTriangle className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Is Your Panel A Fire Hazard?</h2>
                    <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
                        Homes built before 1990 may have outdated breakers (Zinsco/FPE) that don't trip. Don't risk it.
                    </p>
                    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-bold mb-2">Get A Free Safety Inspection</h3>
                        <p className="text-sm text-neutral-500 mb-6">Included with any service call ($150 value)</p>
                        <form className="space-y-3">
                            <input type="text" placeholder="Your Address" className="w-full bg-neutral-100 border-none p-4 font-bold text-sm focus:ring-2 focus:ring-yellow-500 outline-none rounded-lg" />
                            <input type="tel" placeholder="Phone Number" className="w-full bg-neutral-100 border-none p-4 font-bold text-sm focus:ring-2 focus:ring-yellow-500 outline-none rounded-lg" />
                            <button className="w-full bg-black text-white p-4 font-bold uppercase tracking-widest text-sm hover:bg-neutral-800 transition-colors rounded-lg">
                                Claim Free Inspection
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Simple */}
            <footer className="bg-black py-12 text-neutral-500 text-center text-xs uppercase tracking-widest">
                <div className="flex justify-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                </div>
                <p>&copy; 2024 VoltSafe Electric. All Rights Reserved.</p>
            </footer>

        </div>
    );
};

export default ElectricianDemo;
