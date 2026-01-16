import React, { useState } from 'react';
import { Search, Home, MapPin, DollarSign, ArrowRight, Star, Heart, Menu, X, Bed, Bath, Square } from 'lucide-react';

const EstatePrimeDemo: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500 font-sans">
            {/* Search Bar / Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                            <Home className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight">Estate Prime</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <a href="#" className="hover:text-indigo-600">Buy</a>
                        <a href="#" className="hover:text-indigo-600">Rent</a>
                        <a href="#" className="hover:text-indigo-600">Sell</a>
                        <a href="#" className="hover:text-indigo-600">Agents</a>
                    </div>

                    <div className="flex items-center gap-4">
                        {onClose && (
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors"
                            >
                                Close Demo
                            </button>
                        )}
                        <button className="md:hidden p-2 text-slate-600">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative h-[600px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1600596542815-27b88e542d25?auto=format&fit=crop&q=80"
                        alt="Luxury Home"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-4xl px-6">
                    <h1 className="text-4xl md:text-6xl font-black text-white text-center mb-8 drop-shadow-lg">
                        Find Your <span className="text-indigo-400">Dream Home</span> Today.
                    </h1>

                    <div className="bg-white p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="City, Neighborhood, or ZIP"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-900"
                            />
                        </div>
                        <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors">
                            <Search className="w-5 h-5" /> Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Listings */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Listings</h2>
                            <p className="text-slate-500">Curated properties just for you.</p>
                        </div>
                        <a href="#" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            View All <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={`https://images.unsplash.com/photo-${item === 1 ? '1600585154340-be6161a56a0c' : item === 2 ? '1600047509807-c25798cd3ec3' : '1600607687999-1ce475375551'}?auto=format&fit=crop&q=80`}
                                        alt="House"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full text-slate-400 hover:text-red-500 transition-colors">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <div className="absolute bottom-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-lg text-xs font-bold">
                                        For Sale
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-slate-900 line-clamp-1">Luxury Villa {item}</h3>
                                        <span className="text-indigo-600 font-bold text-lg">$1,2{item}0,000</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-6 flex items-center gap-1">
                                        <MapPin className="w-4 h-4" /> 123 Beverly Hills, CA 90210
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-slate-600 text-sm">
                                        <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> 4 Beds</span>
                                        <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> 3 Baths</span>
                                        <span className="flex items-center gap-1"><Square className="w-4 h-4" /> 2,400 sqft</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div>
                        <div className="text-4xl font-black text-indigo-400 mb-2">15k+</div>
                        <div className="text-slate-400 font-medium">Properties Sold</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-indigo-400 mb-2">98%</div>
                        <div className="text-slate-400 font-medium">Customer Satisfaction</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-indigo-400 mb-2">24h</div>
                        <div className="text-slate-400 font-medium">Average Response</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-indigo-400 mb-2">$2B+</div>
                        <div className="text-slate-400 font-medium">Total Volume</div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to find your dream home?</h2>
                    <p className="text-xl text-slate-500 mb-8">Join thousands of happy homeowners who found their perfect match with Estate Prime.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">Start Searching</button>
                        <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors">Contact Agent</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EstatePrimeDemo;
