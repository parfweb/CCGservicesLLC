import React from 'react';
import { Search, MapPin, Star, Wifi, Coffee, Utensils, Calendar, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

const HotelDemo: React.FC = () => {
    return (
        <div className="bg-white text-slate-800 font-sans selection:bg-rose-200">
            {/* Nav */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-black/20 backdrop-blur-sm text-white border-b border-white/10 hover:bg-black/80">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="text-2xl font-serif tracking-widest uppercase">Luxe<span className="font-thin">Stay</span></div>
                    <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-rose-400 transition-colors">Suites</a>
                        <a href="#" className="hover:text-rose-400 transition-colors">Dining</a>
                        <a href="#" className="hover:text-rose-400 transition-colors">Experiences</a>
                        <a href="#" className="hover:text-rose-400 transition-colors">Offers</a>
                    </div>
                    <div className="flex gap-4">
                        <button className="hidden md:block text-sm font-bold uppercase tracking-widest hover:text-rose-400">Login</button>
                        <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-none font-bold text-xs uppercase tracking-widest transition-colors">
                            Book Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <div className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-transparent to-black/30"></div>

                <div className="relative z-20 max-w-4xl px-6 space-y-6 animate-fade-in-up">
                    <div className="text-rose-400 font-bold tracking-[0.3em] text-sm uppercase">The Art of Relaxation</div>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                        Escape to <br /> Paradise.
                    </h1>
                    <p className="text-lg md:text-xl font-light text-slate-200 max-w-xl mx-auto">
                        Experience world-class luxury in the heart of the city. Direct bookings save 15% guaranteed.
                    </p>
                </div>

                {/* Booking Bar */}
                <div className="absolute bottom-0 w-full z-30 transform translate-y-1/2 px-6">
                    <div className="max-w-5xl mx-auto bg-white text-slate-900 p-2 md:p-6 shadow-2xl rounded-xl md:rounded-full grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div className="px-6 border-b md:border-b-0 md:border-r border-slate-100 py-2">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Check In</label>
                            <div className="font-bold flex items-center gap-2"><Calendar className="w-4 h-4 text-rose-500" /> Oct 24</div>
                        </div>
                        <div className="px-6 border-b md:border-b-0 md:border-r border-slate-100 py-2">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Check Out</label>
                            <div className="font-bold flex items-center gap-2"><Calendar className="w-4 h-4 text-rose-500" /> Oct 28</div>
                        </div>
                        <div className="px-6 border-b md:border-b-0 border-slate-100 py-2">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Guests</label>
                            <div className="font-bold">2 Adults, 1 Room</div>
                        </div>
                        <button className="bg-slate-900 hover:bg-black text-white h-full rounded-lg md:rounded-r-full font-bold uppercase tracking-widest text-sm py-4 md:py-0 transition-colors">
                            Check Availability
                        </button>
                    </div>
                </div>
            </div>

            {/* Features */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif mb-4">Unmatched Amenities</h2>
                    <div className="w-16 h-1 bg-rose-500 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4">
                        <Wifi className="w-10 h-10 mx-auto text-rose-500" />
                        <h3 className="font-bold text-lg uppercase tracking-wide">High-Speed Wi-Fi</h3>
                        <p className="text-slate-500 text-sm">Stay connected with fiber-optic internet in every room and common area.</p>
                    </div>
                    <div className="space-y-4">
                        <Utensils className="w-10 h-10 mx-auto text-rose-500" />
                        <h3 className="font-bold text-lg uppercase tracking-wide">Gourmet Dining</h3>
                        <p className="text-slate-500 text-sm">Three Michelin-starred chefs preparing exquisite local cuisine.</p>
                    </div>
                    <div className="space-y-4">
                        <Coffee className="w-10 h-10 mx-auto text-rose-500" />
                        <h3 className="font-bold text-lg uppercase tracking-wide">24/7 Concierge</h3>
                        <p className="text-slate-500 text-sm">Whatever you need, whenever you need it. Just ask.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HotelDemo;
