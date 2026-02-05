import React from 'react';
import { Calendar, MapPin, Music, Users, ArrowRight, Ticket } from 'lucide-react';

const EventsDemo: React.FC = () => {
    return (
        <div className="bg-slate-950 text-white font-sans selection:bg-purple-500">
            {/* Mobile Ticket Bar */}
            <div className="md:hidden fixed bottom-0 w-full bg-purple-600 p-4 flex justify-between items-center z-50">
                <div className="font-bold">Next Event: Neon Nights</div>
                <button className="bg-white text-purple-900 px-4 py-1.5 rounded-full font-bold text-sm">Buy Tix</button>
            </div>

            {/* Nav */}
            <nav className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-40 bg-slate-950/80">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="font-black text-2xl tracking-tighter italic">VIBE<span className="text-purple-500">VENUE</span></div>
                    <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">Calendar</a>
                        <a href="#" className="hover:text-white transition-colors">Private Hire</a>
                        <a href="#" className="hover:text-white transition-colors">Gallery</a>
                        <a href="#" className="hover:text-white transition-colors">FAQ</a>
                    </div>
                    <button className="bg-white text-slate-950 px-6 py-2 rounded-full font-bold hover:bg-purple-400 hover:text-white transition-colors flex items-center gap-2">
                        <Ticket className="w-4 h-4" /> Get Tickets
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <header className="relative py-24 px-6 overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[128px] opacity-20"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-block border border-purple-500/50 bg-purple-500/10 px-4 py-1 rounded-full text-purple-300 font-bold text-xs uppercase tracking-widest mb-6">
                        Live Music &bull; Private Events &bull; Art Space
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                        WHERE THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">CITY COMES ALIVE</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                        Brooklyn's premier event space. Corporate retreats, wedding receptions, and underground raves — all under one roof.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-purple-900/50">
                            See Upcoming Events
                        </button>
                        <button className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                            Book Private Event
                        </button>
                    </div>
                </div>
            </header>

            {/* Upcoming Events List */}
            <section className="py-20 max-w-5xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Calendar className="text-purple-500" /> Upcoming This Week
                </h2>
                <div className="space-y-4">
                    {[
                        { day: "THU", date: "24", title: "Indie Rock Night", time: "8:00 PM", price: "$15" },
                        { day: "FRI", date: "25", title: "Neon Rave: 90s Edition", time: "10:00 PM", price: "$25" },
                        { day: "SAT", date: "26", title: "Comedy Showcase", time: "7:00 PM", price: "$20" }
                    ].map((event, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 hover:border-purple-500 hover:bg-white/10 p-6 rounded-2xl flex items-center justify-between group transition-all cursor-pointer">
                            <div className="flex items-center gap-6">
                                <div className="text-center bg-white/5 p-3 rounded-xl min-w-[4rem]">
                                    <div className="text-xs font-bold text-slate-400">{event.day}</div>
                                    <div className="text-2xl font-black">{event.date}</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">{event.title}</h3>
                                    <div className="text-sm text-slate-400 flex items-center gap-2">
                                        <Music className="w-3 h-3" /> {event.time}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold mb-1">{event.price}</div>
                                <button className="text-xs font-bold uppercase tracking-wider text-purple-400 group-hover:text-white flex items-center gap-1 justify-end">
                                    Book <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EventsDemo;
