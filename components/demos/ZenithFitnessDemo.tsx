import React, { useState } from 'react';
import { Dumbbell, Calendar, Users, X, Play, ChevronRight, Check } from 'lucide-react';

const ZenithFitnessDemo: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] bg-black text-white overflow-y-auto animate-in slide-in-from-bottom duration-500 font-sans selection:bg-orange-500 selection:text-white">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Dumbbell className="w-8 h-8 text-orange-500 transform -rotate-45" />
                        <span className="text-2xl font-black tracking-tighter uppercase italic">Zenith<span className="text-orange-500">Fit</span></span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-widest text-sm text-zinc-400">
                        <a href="#" className="hover:text-white transition-colors">Classes</a>
                        <a href="#" className="hover:text-white transition-colors">Trainers</a>
                        <a href="#" className="hover:text-white transition-colors">Membership</a>
                    </div>

                    <div className="flex items-center gap-4">
                        {onClose && (
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-zinc-800 text-white rounded-none uppercase text-xs font-black tracking-widest hover:bg-zinc-700 transition-colors"
                            >
                                Exit Demo
                            </button>
                        )}
                        <button className="bg-orange-500 text-black px-6 py-2 font-black uppercase tracking-wider hover:bg-orange-400 transition-colors skew-x-[-12deg]">
                            <span className="skew-x-[12deg] inline-block">Join Now</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative h-screen flex items-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
                        alt="Gym"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.9] mb-8">
                        Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Your Legacy</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-xl mb-12">
                        State of the art equipment. World class trainers. The atmosphere you need to crush your goals. Open 24/7.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-white text-black px-8 py-4 font-black uppercase tracking-wider hover:bg-zinc-200 transition-colors skew-x-[-12deg]">
                            <span className="skew-x-[12deg] inline-block">Start Free Trial</span>
                        </button>
                        <button className="border-2 border-white/20 text-white px-8 py-4 font-black uppercase tracking-wider hover:bg-white/10 transition-colors skew-x-[-12deg]">
                            <span className="skew-x-[12deg] inline-block flex items-center gap-2">
                                <Play className="w-4 h-4 fill-current" /> Watch Video
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-black p-8 border hover:border-orange-500/50 transition-colors border-white/5 group">
                            <Dumbbell className="w-12 h-12 text-zinc-700 group-hover:text-orange-500 transition-colors mb-6" />
                            <h3 className="text-2xl font-black uppercase italic mb-4">Premium Gear</h3>
                            <p className="text-zinc-500 leading-relaxed">Top tier Hammer Strength & Eleiko equipment for serious lifters.</p>
                        </div>
                        <div className="bg-black p-8 border hover:border-orange-500/50 transition-colors border-white/5 group">
                            <Calendar className="w-12 h-12 text-zinc-700 group-hover:text-orange-500 transition-colors mb-6" />
                            <h3 className="text-2xl font-black uppercase italic mb-4">Group Classes</h3>
                            <p className="text-zinc-500 leading-relaxed">HIIT, Yoga, Boxing, and Crossfit classes running all day, every day.</p>
                        </div>
                        <div className="bg-black p-8 border hover:border-orange-500/50 transition-colors border-white/5 group">
                            <Users className="w-12 h-12 text-zinc-700 group-hover:text-orange-500 transition-colors mb-6" />
                            <h3 className="text-2xl font-black uppercase italic mb-4">Expert Trainers</h3>
                            <p className="text-zinc-500 leading-relaxed">Certified coaches dedicated to pushing you past your limits.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schedule Preview */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-900/10 blur-[100px]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Today's Schedule</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase italic mt-2">Don't Miss Out</h2>
                        </div>
                        <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors font-bold uppercase text-sm tracking-widest">
                            Full Schedule <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="space-y-4">
                        {[
                            { time: "06:00 AM", class: "Morning HIIT", trainer: "Sarah J.", spots: 3 },
                            { time: "07:30 AM", class: "Power Yoga", trainer: "Mike T.", spots: 8 },
                            { time: "09:00 AM", class: "CrossTraining", trainer: "Alex R.", spots: 0 },
                            { time: "05:00 PM", class: "Boxing 101", trainer: "David K.", spots: 5 }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-6 bg-zinc-900 border border-white/5 hover:border-orange-500/30 transition-all group">
                                <div className="flex items-center gap-8">
                                    <span className="font-mono text-orange-500 font-bold">{item.time}</span>
                                    <div>
                                        <h4 className="font-bold text-xl uppercase italic group-hover:text-orange-400 transition-colors">{item.class}</h4>
                                        <span className="text-sm text-zinc-500">with {item.trainer}</span>
                                    </div>
                                </div>
                                <div>
                                    {item.spots > 0 ? (
                                        <button className="px-6 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                            Book ({item.spots} left)
                                        </button>
                                    ) : (
                                        <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Full</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ZenithFitnessDemo;
