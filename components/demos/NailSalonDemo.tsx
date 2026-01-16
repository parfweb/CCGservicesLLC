import React from 'react';
import { Calendar, Instagram, Clock, MapPin, Star, Heart, Camera, ArrowRight, Scissors, Phone } from 'lucide-react';

const NailSalonDemo: React.FC = () => {
    return (
        <div className="bg-[#FDF8F7] text-zinc-800 font-sans selection:bg-pink-200">

            {/* Sticky Mobile Bar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t border-pink-100 p-4 flex items-center justify-between md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                <div>
                    <div className="font-serif font-bold text-zinc-900 text-sm">Need a Mani?</div>
                    <div className="text-xs text-zinc-500">Slots filling fast today</div>
                </div>
                <div className="flex gap-3">
                    <a href="tel:+19177688896" className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors">
                        <Phone className="w-4 h-4" />
                    </a>
                    <button className="bg-pink-400 text-white px-6 py-2 rounded-full font-bold text-xs tracking-widest shadow-lg shadow-pink-200">
                        BOOK
                    </button>
                </div>
            </div>

            {/* Top Bar - Subtle & Classy */}
            <div className="bg-[#FAEBEB] text-zinc-600 py-3 px-4 text-xs tracking-wider text-center uppercase">
                <span className="font-medium">✨ Grand Opening Special: 20% Off New Client Manicures ✨</span>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#F5E6E6]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-serif text-zinc-800 tracking-widest">LUMIÈRE</span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Nail & Spa</span>
                        </div>

                        <div className="hidden md:flex gap-10 font-medium text-zinc-500 text-sm tracking-wide items-center">
                            <a href="#" className="hover:text-pink-500 transition-colors">SERVICES</a>
                            <a href="#" className="hover:text-pink-500 transition-colors">LOOKBOOK</a>
                            <a href="#" className="hover:text-pink-500 transition-colors">ABOUT</a>
                            <a href="tel:+19177688896" className="text-zinc-400 hover:text-zinc-900 transition-colors font-serif italic">(917) 768-8896</a>
                        </div>

                        <button className="bg-zinc-900 text-white px-8 py-3 rounded-none font-medium text-sm tracking-widest hover:bg-pink-400 hover:border-pink-400 transition-all">
                            BOOK NOW
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 border border-zinc-200 rounded-full text-xs uppercase tracking-widest text-zinc-500 mb-6 bg-white">
                        Premium Nail Care
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8 leading-tight">
                        Elevate Your <br />
                        <span className="text-pink-400 italic">Everyday Style</span>
                    </h1>
                    <p className="text-lg text-zinc-500 mb-10 max-w-lg mx-auto font-light leading-relaxed">
                        Experience the perfect blend of artistry and relaxation.
                        Non-toxic polishes, precise filing, and a sanctuary for your hands.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-pink-400 text-white px-10 py-4 text-sm tracking-widest hover:bg-pink-500 transition-all shadow-xl shadow-pink-200">
                            VIEW SERVICES
                        </button>
                        <button className="bg-white border border-zinc-200 text-zinc-800 px-10 py-4 text-sm tracking-widest hover:bg-zinc-50 transition-all">
                            OUR GALLERY
                        </button>
                    </div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 -z-10"></div>
            </section>

            {/* Features / Pain Points Solved */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="p-8">
                            <div className="w-16 h-16 bg-[#FDF8F7] rounded-full flex items-center justify-center mx-auto mb-6 text-pink-400">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Easy Online Booking</h3>
                            <p className="text-zinc-500 font-light text-sm">No phone tag. View our calendar and book your slot in seconds, 24/7.</p>
                        </div>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-[#FDF8F7] rounded-full flex items-center justify-center mx-auto mb-6 text-pink-400">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Non-Toxic Products</h3>
                            <p className="text-zinc-500 font-light text-sm">We use 7-free options to keep your natural nails healthy and strong.</p>
                        </div>
                        <div className="p-8">
                            <div className="w-16 h-16 bg-[#FDF8F7] rounded-full flex items-center justify-center mx-auto mb-6 text-pink-400">
                                <Star className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Loyalty Rewards</h3>
                            <p className="text-zinc-500 font-light text-sm">Earn points with every visit. Your 10th manicure is on us.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Gallery Placeholder */}
            <section className="py-24 bg-[#FDF8F7]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-serif text-3xl mb-2">Follow Our Artistry</h2>
                            <p className="text-zinc-500 text-sm">Join 5k+ followers @LumiereNails</p>
                        </div>
                        <a href="#" className="flex items-center gap-2 text-sm font-bold text-pink-400 hover:text-pink-500">
                            <Instagram className="w-4 h-4" /> VIEW INSTAGRAM
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-zinc-200 rounded-xl overflow-hidden group relative">
                                <img
                                    src={[
                                        "https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=400",
                                        "https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=400",
                                        "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=400",
                                        "https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg?auto=compress&cs=tinysrgb&w=400"
                                    ][i - 1]}
                                    alt="Nail Art Portfolio"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <Heart className="text-white transform scale-50 group-hover:scale-100 transition-all duration-300 w-8 h-8 fill-current" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default NailSalonDemo;
