import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, Heart, ArrowRight, Star, X } from 'lucide-react';

const NovaBoutiqueDemo: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500 font-sans">
            {/* Announcement Bar */}
            <div className="bg-neutral-900 text-white text-center py-2 text-xs uppercase tracking-widest font-medium">
                Free Shipping on Orders Over $150
            </div>

            {/* Navigation */}
            <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="p-2 -ml-2 hover:bg-neutral-100 rounded-full transition-colors">
                            <Menu className="w-6 h-6 text-neutral-900" />
                        </button>
                        <Search className="w-5 h-5 text-neutral-900 hidden md:block cursor-pointer" />
                    </div>

                    <div className="text-2xl font-serif font-bold text-neutral-900 tracking-tight">NOVA.</div>

                    <div className="flex items-center gap-4">
                        {onClose && (
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-xs font-bold uppercase tracking-widest hover:text-red-500 transition-colors"
                            >
                                Close
                            </button>
                        )}
                        <div className="relative cursor-pointer">
                            <ShoppingBag className="w-5 h-5 text-neutral-900" />
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-neutral-900 text-white text-[10px] flex items-center justify-center rounded-full">2</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative h-[80vh] bg-[#F3F0EB]">
                <div className="absolute inset-0 grid grid-cols-2">
                    <div className="relative hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
                            alt="Fashion Model"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
                            alt="Fashion Model 2"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-sm p-12 max-w-lg w-full text-center pointer-events-auto shadow-2xl">
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 mb-4">Summer Collection 2026</h2>
                        <h1 className="text-5xl md:text-6xl font-serif font-medium text-neutral-900 mb-6 italic">Effortless<br />Elegance</h1>
                        <p className="text-neutral-600 mb-8 leading-relaxed">Discover the new season essentials. Curated fabrics, timeless cuts, and sustainable aesthetics.</p>
                        <button className="bg-neutral-900 text-white px-8 py-4 w-full uppercase tracking-widest text-xs font-bold hover:bg-neutral-800 transition-colors">
                            Shop The Edit
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif text-neutral-900 mb-4">Shop by Category</h2>
                        <div className="w-12 h-1 bg-neutral-900 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Dresses', 'Outerwear', 'Accessories', 'Shoes'].map((cat, idx) => (
                            <div key={idx} className="group relative h-[400px] overflow-hidden cursor-pointer">
                                <img
                                    src={`https://images.unsplash.com/photo-${idx === 0 ? '1595777457583-95e059d581b8' : idx === 1 ? '1591047139829-d91aecb6caea' : idx === 2 ? '1515934751635-c81c6bc9a2d8' : '1543163521-fbf158a22351'}?auto=format&fit=crop&q=80`}
                                    alt={cat}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                                <div className="absolute bottom-8 left-0 w-full text-center">
                                    <span className="text-white text-lg font-serif italic border-b border-white pb-1">{cat}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-2xl font-serif text-neutral-900">New Arrivals</h2>
                        <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">View All <ArrowRight className="w-4 h-4" /></a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { name: "The Silk Slip Dress", price: "$240", img: "1572804013309-59a88b7e92f1" },
                            { name: "Linen Wide Leg Pant", price: "$180", img: "1594633312681-425c7b97ccd1" },
                            { name: "Oversized Wool Blazer", price: "$295", img: "1559563458-527698bf527e" },
                            { name: "Ribbed Knit Top", price: "$85", img: "1434389677669-e08b4cac3105" }
                        ].map((item, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] mb-4 bg-white overflow-hidden">
                                    <img
                                        src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&q=80`}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                    <button className="absolute bottom-4 left-4 right-4 py-3 bg-white text-neutral-900 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                        Add to Cart
                                    </button>
                                </div>
                                <h3 className="text-lg font-serif text-neutral-900 mb-1">{item.name}</h3>
                                <p className="text-neutral-500 text-sm">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NovaBoutiqueDemo;
