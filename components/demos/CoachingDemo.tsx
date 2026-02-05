import React from 'react';
import { PlayCircle, Award, Users, ArrowRight, Lock, CheckCircle } from 'lucide-react';

const CoachingDemo: React.FC = () => {
    return (
        <div className="bg-white text-slate-800 font-sans">
            {/* Nav */}
            <nav className="border-b border-slate-100 py-4">
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <div className="font-bold text-xl tracking-tight">Focus<span className="text-blue-600">Academy</span></div>
                    <div className="flex gap-4 items-center">
                        <button className="text-slate-500 hover:text-slate-900 font-medium text-sm">Login</button>
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">
                            Join Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <div className="py-20 text-center px-6 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
                    <Award className="w-4 h-4" /> #1 Voted Productivity Course 2024
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
                    Master Your Workflow. <br />
                    <span className="text-blue-600">Double Your Output.</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Stop drowning in todo lists. Join 10,000+ professionals using the FocusFlow method to reclaim 20 hours a week.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/30 transition-transform hover:scale-105">
                        Get Instant Access - $97
                    </button>
                    <button className="px-8 py-4 rounded-xl font-bold text-slate-600 hover:text-slate-900 flex items-center justify-center gap-2">
                        <PlayCircle className="w-5 h-5" /> Watch Free Training
                    </button>
                </div>
                <div className="flex justify-center items-center gap-8 opacity-60 grayscale">
                    <span className="font-bold text-xl">Google</span>
                    <span className="font-bold text-xl">Spotify</span>
                    <span className="font-bold text-xl">Slack</span>
                </div>
            </div>

            {/* Course Content Preview aka "The Value" */}
            <div className="bg-slate-50 py-20 border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">What's Inside The Academy?</h2>
                        <div className="space-y-4">
                            {[
                                "50+ Video Lessons (4k Quality)",
                                "Notion & Trello Templates",
                                "Weekly Group Coaching Calls",
                                "Private Community Access"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="font-bold text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Video Player Placeholder */}
                    <div className="bg-slate-900 rounded-2xl shadow-2xl aspect-video relative flex items-center justify-center group cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover opacity-50 bg-center"></div>
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                            <PlayCircle className="w-10 h-10 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoachingDemo;
