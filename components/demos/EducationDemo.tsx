import React from 'react';
import { BookOpen, GraduationCap, Users, Menu, ArrowRight, Play, Calendar } from 'lucide-react';

const EducationDemo: React.FC = () => {
    return (
        <div className="bg-white text-slate-800 font-serif relative">
            {/* Top Bar */}
            <div className="bg-indigo-900 text-indigo-100 py-2 px-6 text-xs font-medium flex justify-between items-center">
                <div className="flex gap-4">
                    <span>Admissions: (555) 123-4567</span>
                    <span>Alumni</span>
                    <span>Parents</span>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white">Portal Login</a>
                    <a href="#" className="hover:text-white">Apply Now</a>
                </div>
            </div>

            {/* Nav */}
            <nav className="border-b border-slate-200 py-4">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-900 text-white flex items-center justify-center rounded-lg">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <span className="text-2xl font-bold text-slate-900 tracking-tight">Prestigious<span className="text-indigo-900 font-light">Academy</span></span>
                    </div>
                    <div className="hidden lg:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
                        <a href="#" className="hover:text-indigo-900">Academics</a>
                        <a href="#" className="hover:text-indigo-900">Admissions</a>
                        <a href="#" className="hover:text-indigo-900">Campus Life</a>
                        <a href="#" className="hover:text-indigo-900">Athletics</a>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all">
                        Inquire
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight font-serif">
                            Future Leaders <br />
                            <span className="text-indigo-800 italic">Start Here.</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-md font-sans leading-relaxed">
                            Discover a curriculum designed to challenge, inspire, and prepare students for a rapidly changing world.
                        </p>
                        <div className="flex gap-4 pt-4 font-sans">
                            <button className="bg-indigo-900 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 shadow-xl shadow-indigo-900/20">
                                Apply for Fall 2026
                            </button>
                            <button className="bg-white border-2 border-indigo-100 hover:border-indigo-600 text-slate-900 px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all group">
                                <Play className="w-4 h-4 fill-indigo-600 text-indigo-600 group-hover:scale-110 transition-transform" /> Virtual Tour
                            </button>
                        </div>
                    </div>

                    {/* Stat Cards */}
                    <div className="relative font-sans">
                        <div className="absolute -inset-4 bg-indigo-100 rounded-3xl rotate-2"></div>
                        <div className="relative bg-white p-8 rounded-2xl shadow-xl grid grid-cols-2 gap-8 text-center">
                            <div className="p-4 border-r border-b border-slate-100">
                                <div className="text-4xl font-bold text-indigo-600 mb-1">12:1</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Student Ratio</div>
                            </div>
                            <div className="p-4 border-b border-slate-100">
                                <div className="text-4xl font-bold text-indigo-600 mb-1">98%</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Grad Rate</div>
                            </div>
                            <div className="p-4 border-r border-slate-100">
                                <div className="text-4xl font-bold text-indigo-600 mb-1">45+</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Programs</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold text-indigo-600 mb-1">#1</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">In Region</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EducationDemo;
