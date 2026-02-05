import React from 'react';
import { Utensils, Clock, MapPin, Phone, ChefHat, Star, ShoppingBag, ArrowRight } from 'lucide-react';

const RestaurantDemo: React.FC = () => {
    return (
        <div className="bg-stone-50 text-stone-900 font-serif">
            {/* Announcement Bar */}
            <div className="bg-orange-600 text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
                Order Online & Save 10% With Code: TASTY10
            </div>

            {/* Nav */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
                    <div className="flex flex-col items-center leading-none">
                        <span className="text-3xl font-black tracking-tighter uppercase">Rosticceria</span>
                        <span className="text-[10px] font-sans tracking-[0.3em] text-orange-600">EST. 1985</span>
                    </div>

                    <div className="hidden md:flex gap-12 font-sans text-sm font-bold uppercase tracking-widest text-stone-500">
                        <a href="#" className="hover:text-orange-600">Menu</a>
                        <a href="#" className="hover:text-orange-600">Reservations</a>
                        <a href="#" className="hover:text-orange-600">Catering</a>
                        <a href="#" className="hover:text-orange-600">Story</a>
                    </div>

                    <div className="flex gap-4">
                        <button className="hidden md:flex items-center gap-2 font-sans font-bold text-sm bg-stone-100 hover:bg-stone-200 px-6 py-3 rounded-full transition-colors">
                            <Clock className="w-4 h-4 text-orange-600" /> Book Table
                        </button>
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-sans font-bold text-sm shadow-xl shadow-orange-600/20 flex items-center gap-2 transition-transform hover:scale-105">
                            Order Now <ShoppingBag className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <header className="relative py-32 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 relative z-10">
                        <div className="inline-flex items-center gap-2 border-b-2 border-orange-600 pb-1 font-sans font-bold text-sm text-orange-600 uppercase tracking-widest">
                            <Star className="w-4 h-4 fill-current" /> Voted Best Italian 2024
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black leading-none text-stone-900">
                            Taste the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Tradition.</span>
                        </h1>
                        <p className="text-xl text-stone-600 font-sans max-w-lg leading-relaxed">
                            Authentic wood-fired classics made from generations-old family recipes. Sourced locally, served with love.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 font-sans pt-4">
                            <button className="bg-stone-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black transition-all">
                                View Full Menu
                            </button>
                            <button className="px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm text-stone-500 hover:text-orange-600 flex items-center gap-2 transition-colors">
                                Watch The Chef <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Floating Plate Mockup */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-orange-100 rounded-full blur-[100px] opacity-50 scale-75 animate-pulse"></div>
                        <div className="relative z-10 aspect-square rounded-full bg-stone-200 overflow-hidden shadow-2xl border-4 border-white rotate-12 hover:rotate-0 transition-all duration-700">
                            <img src="https://images.unsplash.com/photo-1574484284008-59d7aa986528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Pasta Dish" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating Price Tag */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl font-sans animate-bounce border border-stone-100">
                            <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Signature Dish</div>
                            <div className="text-2xl font-black text-stone-900">Truffle Pasta</div>
                            <div className="text-orange-600 font-bold">$24</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Quick Info Grid */}
            <div className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800 font-sans">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm">
                    <div className="flex flex-col items-center gap-2">
                        <Clock className="w-6 h-6 text-orange-600 mb-2" />
                        <span className="text-white font-bold uppercase tracking-widest">Open Daily</span>
                        <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 border-l border-r border-stone-800">
                        <MapPin className="w-6 h-6 text-orange-600 mb-2" />
                        <span className="text-white font-bold uppercase tracking-widest">Find Us</span>
                        <span>123 Culinary Lane, Downtown</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Phone className="w-6 h-6 text-orange-600 mb-2" />
                        <span className="text-white font-bold uppercase tracking-widest">Call Orders</span>
                        <span>(555) 987-6543</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDemo;
