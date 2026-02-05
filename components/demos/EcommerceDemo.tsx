import React from 'react';
import { ShoppingBag, Search, Star, Truck, ShieldCheck, Check, Zap, Volume2, Bluetooth, Battery, Mic, Heart, Share2 } from 'lucide-react';

const EcommerceDemo: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-violet-100">
            {/* Top Promo Bar */}
            <div className="bg-gradient-to-r from-[#232F3E] via-[#37475A] to-[#232F3E] text-white text-center py-3 text-xs font-bold tracking-wide flex justify-center items-center gap-3">
                <span className="text-[#00A8E1] font-black italic text-base">prime</span>
                <span className="opacity-90">Fast, FREE delivery on all Prime orders</span>
                <span className="bg-[#FF9900] text-black px-2 py-0.5 rounded text-[10px] font-black">DEAL</span>
            </div>

            {/* Nav */}
            <nav className="border-b border-slate-100 py-4 sticky top-0 bg-white/80 backdrop-blur-2xl z-50">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="text-2xl font-black tracking-tight flex items-center gap-3">
                        <div className="w-11 h-11 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-violet-500/40 transform -rotate-3">
                            <Volume2 className="w-6 h-6" />
                        </div>
                        <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">NOVA<span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">AUDIO</span></span>
                    </div>

                    <div className="hidden md:flex flex-1 max-w-lg mx-8 relative group">
                        <input type="text" placeholder="Search premium audio..." className="w-full bg-slate-100 border-2 border-transparent rounded-2xl px-6 py-3 text-sm font-medium focus:ring-0 focus:border-violet-400 focus:bg-white outline-none transition-all" />
                        <Search className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="hidden md:flex gap-6 text-sm font-bold text-slate-600">
                            <a href="#" className="hover:text-violet-600 transition-colors">Products</a>
                            <a href="#" className="hover:text-violet-600 transition-colors">Support</a>
                        </div>
                        <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                            <Heart className="w-5 h-5 text-slate-500" />
                        </button>
                        <div className="relative cursor-pointer group">
                            <div className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                                <ShoppingBag className="w-6 h-6 text-slate-700" />
                            </div>
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-violet-500 to-purple-600 text-white text-[10px] flex items-center justify-center rounded-full font-black shadow-lg">1</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Product Page */}
            <section className="py-12 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

                    {/* Product Visual */}
                    <div className="relative lg:sticky lg:top-24">
                        <div className="aspect-square bg-gradient-to-br from-slate-900 via-[#1a1625] to-violet-950 rounded-[2rem] flex items-center justify-center relative overflow-hidden shadow-2xl shadow-violet-900/30">
                            {/* Ambient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-transparent to-purple-500/10"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-violet-500/30 blur-3xl rounded-full"></div>

                            {/* Badges */}
                            <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                                <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg shadow-violet-500/30">🔥 New Release</span>
                                <span className="bg-white/10 backdrop-blur-xl text-white text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-1.5 border border-white/10">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> Top Rated 2024
                                </span>
                            </div>

                            {/* Share Button */}
                            <button className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all border border-white/10">
                                <Share2 className="w-4 h-4" />
                            </button>

                            {/* Product Image */}
                            <img
                                src="/headphones.png"
                                alt="NOVA Pro ANC Wireless Headphones"
                                className="w-full h-full object-contain p-6 relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Color Options */}
                        <div className="flex justify-center gap-4 mt-8">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 self-center">Colors:</span>
                            {[
                                { color: 'bg-gradient-to-br from-violet-500 to-purple-700', label: 'Cosmic Purple', active: true },
                                { color: 'bg-gradient-to-br from-slate-600 to-slate-900', label: 'Midnight Black', active: false },
                                { color: 'bg-gradient-to-br from-amber-100 to-amber-200', label: 'Pearl White', active: false },
                            ].map((opt, i) => (
                                <button key={i} title={opt.label} className={`w-9 h-9 rounded-full ${opt.color} ${opt.active ? 'ring-2 ring-offset-4 ring-violet-500 scale-110' : 'opacity-50 hover:opacity-80'} transition-all shadow-lg`}></button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col py-4">
                        <div className="mb-6">
                            <p className="text-violet-600 font-black text-xs uppercase tracking-[0.2em] mb-3">Premium Wireless Headphones</p>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[0.95] mb-4">
                                NOVA Pro<br />
                                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">ANC</span>
                            </h1>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <div className="flex text-[#FF9900]">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <span className="text-sm font-bold text-slate-600">4,891 Reviews</span>
                            <span className="text-xs bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-3 py-1 rounded-full font-black flex items-center gap-1 border border-orange-200">
                                <Star className="w-3 h-3 fill-current" /> Amazon's Choice
                            </span>
                        </div>

                        <div className="flex items-baseline gap-4 mb-8 p-6 bg-gradient-to-r from-slate-50 to-violet-50 rounded-2xl border border-slate-100">
                            <div className="text-5xl font-black text-slate-900">$299</div>
                            <div className="text-xl font-medium text-slate-400 line-through decoration-2">$349</div>
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-black shadow-lg shadow-green-500/30">Save $50</div>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                            Experience <strong className="text-slate-900">industry-leading Active Noise Cancellation</strong>. 40-hour battery life. Premium spatial audio that puts you inside the music. The NOVA Pro delivers <strong className="text-slate-900">studio-quality sound</strong> anywhere.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {[
                                { icon: Volume2, text: "Hi-Res Audio", sub: "96kHz/24-bit" },
                                { icon: Mic, text: "4-Mic ANC", sub: "Adaptive" },
                                { icon: Battery, text: "40h Battery", sub: "Quick Charge" },
                                { icon: Bluetooth, text: "Bluetooth 5.3", sub: "Multipoint" }
                            ].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center group-hover:from-violet-500 group-hover:to-purple-500 transition-colors">
                                        <feat.icon className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-black text-slate-800 block">{feat.text}</span>
                                        <span className="text-xs text-slate-400 font-medium">{feat.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <button className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-black hover:via-slate-900 hover:to-black text-white text-lg font-black py-5 rounded-2xl shadow-xl shadow-slate-900/20 transition-all flex justify-center items-center gap-3 group">
                                <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                Add to Cart — $299.00
                            </button>

                            {/* Buy with Prime Button */}
                            <button className="w-full bg-gradient-to-r from-[#00A8E1] via-[#00B5F0] to-[#00A8E1] hover:brightness-110 text-white py-5 rounded-2xl shadow-xl shadow-cyan-500/20 transition-all flex justify-center items-center gap-3 group">
                                <span className="font-bold text-lg">Buy with</span>
                                <span className="font-black italic text-2xl tracking-tight">prime</span>
                                <Check className="w-6 h-6 text-[#FF9900] group-hover:scale-110 transition-transform" />
                            </button>

                            <div className="flex items-center justify-center gap-6 text-sm text-slate-500 pt-4 font-medium">
                                <span className="flex items-center gap-2"><Truck className="w-5 h-5 text-violet-500" /> Free Delivery</span>
                                <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-violet-500" /> 2-Year Warranty</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EcommerceDemo;
