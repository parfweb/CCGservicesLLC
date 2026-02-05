import React from 'react';
import { Phone, Calendar, Heart, Shield, Clock, ArrowRight, User, Stethoscope, Search, Menu, Star, CheckCircle2, MapPin } from 'lucide-react';

const MedicalDemo: React.FC = () => {
    return (
        <div className="bg-white text-slate-800 font-sans relative">

            {/* Sticky Mobile Bar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-teal-600 text-white p-4 flex items-center justify-between md:hidden shadow-2xl">
                <div>
                    <div className="font-bold text-sm uppercase tracking-wider">Need an Appointment?</div>
                    <div className="text-xs opacity-90">Same-day slots available</div>
                </div>
                <a href="#" className="bg-white text-teal-700 px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4 fill-current" /> Book Now
                </a>
            </div>

            {/* Top Bar */}
            <div className="bg-teal-900 text-teal-50 py-2 px-4 text-xs font-medium hidden md:block border-b border-teal-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 opacity-70" /> Mon-Fri: 8am - 6pm</span>
                        <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 opacity-70" /> 123 Health Ave, Brooklyn, NY</span>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Patient Portal</a>
                        <a href="#" className="hover:text-white transition-colors">New Patient Forms</a>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-3">
                            <div className="bg-teal-50 p-2 rounded-lg">
                                <Stethoscope className="w-6 h-6 text-teal-600" />
                            </div>
                            <span className="text-xl font-bold text-slate-900 tracking-tight">Metro<span className="text-teal-600">Health</span></span>
                        </div>
                        <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-600">
                            <a href="#" className="hover:text-teal-600">Doctors</a>
                            <a href="#" className="hover:text-teal-600">Services</a>
                            <a href="#" className="hover:text-teal-600">Insurance</a>
                            <a href="#" className="hover:text-teal-600">Locations</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="hidden md:flex items-center gap-2 text-teal-600 font-bold text-sm px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors">
                                <User className="w-4 h-4" /> Patient Login
                            </button>
                            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-teal-600/20 transition-all">
                                Book Online
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-teal-50/50 to-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                <CheckCircle2 className="w-3 h-3" /> Accepting New Patients
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                                Healthcare That Puts <br />
                                <span className="text-teal-600">You First.</span>
                            </h1>
                            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                                Experience compassionate care with state-of-the-art technology. Book your appointment online in less than 2 minutes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button className="bg-teal-600 hover:bg-teal-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-xl shadow-teal-600/20 flex items-center justify-center gap-2">
                                    Find a Doctor <Search className="w-5 h-5" />
                                </button>
                                <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-lg font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2">
                                    Our Services
                                </button>
                            </div>
                            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-slate-500">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                                            <img src={`https://randomuser.me/api/portraits/women/${i * 10 + 40}.jpg`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div>Trusted by 10,000+ Families</div>
                            </div>
                        </div>

                        {/* Appointment Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative">
                            <div className="absolute top-0 right-0 p-4">
                                <Shield className="w-6 h-6 text-teal-200" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Request Appointment</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Reason for Visit</label>
                                    <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                                        <option>General Checkup</option>
                                        <option>Dental Cleaning</option>
                                        <option>Urgent Care</option>
                                        <option>Specialist Referral</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Date</label>
                                        <input type="date" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Time</label>
                                        <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                                            <option>Morning</option>
                                            <option>Afternoon</option>
                                            <option>Evening</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-lg mt-2 transition-transform active:scale-95">
                                    Confirm Request
                                </button>
                                <p className="text-center text-xs text-slate-400 mt-2">HIPAA Secure Connection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MedicalDemo;
