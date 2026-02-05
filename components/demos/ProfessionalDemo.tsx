import React from 'react';
import { Briefcase, ChevronDown, ArrowRight, BarChart3, Globe, ShieldCheck } from 'lucide-react';

const ProfessionalDemo: React.FC = () => {
    return (
        <div className="bg-slate-50 text-slate-900 font-sans antialiased">
            {/* Nav */}
            <nav className="bg-white border-b border-slate-200 py-5">
                <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <span className="font-bold text-xl tracking-wide">STRATTON <span className="text-slate-400 font-light">CONSULTING</span></span>
                    </div>
                    <div className="hidden lg:flex gap-10 text-sm font-medium text-slate-500">
                        <a href="#" className="hover:text-slate-900">Expertise</a>
                        <a href="#" className="hover:text-slate-900">Case Studies</a>
                        <a href="#" className="hover:text-slate-900">Team</a>
                        <a href="#" className="hover:text-slate-900">Insights</a>
                    </div>
                    <button className="border border-slate-900 text-slate-900 px-6 py-2 rounded-lg font-bold text-sm hover:bg-slate-900 hover:text-white transition-all">
                        Schedule Consultation
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="max-w-3xl">
                        <div className="text-sm font-bold text-blue-600 mb-6 uppercase tracking-widest">Global Strategic Partners</div>
                        <h1 className="text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
                            Expertise that drives <br />
                            <span className="text-slate-400">measurable growth.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl">
                            We help industry leaders navigate complexity and build resilient, future-ready organizations.
                        </p>
                        <div className="flex gap-6">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                                View Our Work <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-slate-50 rounded-xl border border-slate-100">
                            <BarChart3 className="w-10 h-10 text-slate-900 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Financial Advisory</h3>
                            <p className="text-slate-500">Capital allocation strategies for high-growth firms.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-xl border border-slate-100">
                            <Globe className="w-10 h-10 text-slate-900 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Global Expansion</h3>
                            <p className="text-slate-500">Market entry frameworks for emerging economies.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-xl border border-slate-100">
                            <ShieldCheck className="w-10 h-10 text-slate-900 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Risk Management</h3>
                            <p className="text-slate-500">Protecting assets in volatile markets.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-slate-900 py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-8 flex justify-between items-center opacity-40 grayscale">
                    <span className="text-2xl font-black text-white">FORBES</span>
                    <span className="text-2xl font-black text-white">BLOOMBERG</span>
                    <span className="text-2xl font-black text-white">TECHCRUNCH</span>
                    <span className="text-2xl font-black text-white">WIRED</span>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalDemo;
