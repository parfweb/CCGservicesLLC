import React, { useState } from 'react';
import { Stethoscope, Calendar, Shield, Clock, Star, Phone, CheckCircle2, ArrowRight, CreditCard, FileText, Users, Heart, Smile, MapPin } from 'lucide-react';

const DentalDemo: React.FC = () => {
    const [selectedService, setSelectedService] = useState<string>('cleaning');

    return (
        <div className="bg-white text-slate-800 font-sans selection:bg-cyan-100 relative">

            {/* Sticky Mobile Bar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-cyan-600 text-white p-4 flex items-center justify-between md:hidden shadow-2xl">
                <div>
                    <div className="font-bold text-sm uppercase tracking-wider">Need an Appointment?</div>
                    <div className="text-xs opacity-90">Book Online 24/7</div>
                </div>
                <a href="tel:+19177688896" className="bg-white text-cyan-600 px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 fill-current" /> Call Now
                </a>
            </div>

            {/* Top Bar - Trust Signals */}
            <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs md:text-sm font-medium">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-cyan-400" /> HIPAA Compliant</span>
                        <span className="flex items-center gap-2 hidden sm:flex"><Clock className="w-4 h-4 text-cyan-400" /> Same-Day Appointments</span>
                        <span className="flex items-center gap-2 hidden md:flex"><CreditCard className="w-4 h-4 text-cyan-400" /> Insurance Accepted</span>
                    </div>
                    <a href="tel:+19177688896" className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors">(917) 768-8896</a>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <Smile className="w-6 h-6" />
                            </div>
                            <div className="leading-tight">
                                <span className="block text-2xl font-bold text-slate-900 tracking-tight">Bright<span className="text-cyan-600">Smile</span></span>
                                <span className="block text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">Family Dentistry</span>
                            </div>
                        </div>

                        <div className="hidden lg:flex gap-8 font-medium text-slate-600">
                            <a href="#services" className="hover:text-cyan-600 transition-colors">Services</a>
                            <a href="#booking" className="hover:text-cyan-600 transition-colors">Book Online</a>
                            <a href="#insurance" className="hover:text-cyan-600 transition-colors">Insurance</a>
                            <a href="#about" className="hover:text-cyan-600 transition-colors">About Us</a>
                        </div>

                        <a href="#booking" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-cyan-200 transition-all flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Book Appointment
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-100/30 rounded-l-[5rem] transform translate-x-20 hidden lg:block"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full font-bold text-sm text-cyan-700 shadow-sm border border-cyan-100">
                                <Star className="w-4 h-4 fill-current text-yellow-500" />
                                Voted Best Dentist 3 Years Running
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                                Your Smile Deserves <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Modern Care.</span>
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                Skip the phone tag. Book online in seconds, fill out forms from home, and walk into a spa-like experience.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#booking" className="bg-cyan-600 text-white text-lg font-bold py-5 px-8 rounded-xl shadow-xl hover:bg-cyan-700 transition-all flex items-center justify-center gap-3">
                                    Book Online Now <ArrowRight className="w-5 h-5" />
                                </a>
                                <a href="tel:+19177688896" className="bg-white border-2 border-slate-200 text-slate-700 text-lg font-bold py-5 px-8 rounded-xl hover:border-cyan-600 hover:text-cyan-600 transition-colors flex items-center justify-center gap-3">
                                    <Phone className="w-5 h-5" /> (917) 768-8896
                                </a>
                            </div>

                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <img
                                            key={i}
                                            src={`https://i.pravatar.cc/40?img=${i + 20}`}
                                            alt="Patient"
                                            className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <span className="text-slate-500 font-medium">500+ Happy Patients</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image Card */}
                        <div className="relative">
                            <div className="bg-white p-3 rounded-3xl shadow-2xl">
                                <img
                                    src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Modern Dental Office"
                                    className="w-full aspect-[4/3] object-cover rounded-2xl"
                                />
                            </div>

                            {/* Floating HIPAA Badge */}
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">HIPAA Compliant</div>
                                    <div className="text-xs text-slate-500">Secure Patient Forms</div>
                                </div>
                            </div>

                            {/* Floating Online Booking Badge */}
                            <div className="absolute -top-4 -right-4 bg-cyan-600 text-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                                <Calendar className="w-6 h-6" />
                                <div>
                                    <div className="font-bold text-sm">Book Online</div>
                                    <div className="text-xs text-cyan-100">24/7 Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Online Booking Section */}
            <section id="booking" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Book Your Appointment Online</h2>
                        <p className="text-slate-500 max-w-xl mx-auto">No phone calls needed. Select your service and pick a time that works for you.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Service Selection */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg text-slate-900 mb-4">1. Select Your Service</h3>
                            {[
                                { id: 'cleaning', name: 'Cleaning & Exam', time: '45 min', price: '$99' },
                                { id: 'whitening', name: 'Teeth Whitening', time: '60 min', price: '$299' },
                                { id: 'filling', name: 'Cavity Filling', time: '30 min', price: '$150+' },
                                { id: 'emergency', name: 'Emergency Visit', time: 'ASAP', price: 'Varies' },
                            ].map(service => (
                                <button
                                    key={service.id}
                                    onClick={() => setSelectedService(service.id)}
                                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex justify-between items-center ${selectedService === service.id
                                            ? 'border-cyan-500 bg-cyan-50'
                                            : 'border-slate-100 hover:border-cyan-200'
                                        }`}
                                >
                                    <div>
                                        <div className="font-bold text-slate-900">{service.name}</div>
                                        <div className="text-sm text-slate-500">{service.time}</div>
                                    </div>
                                    <div className="text-cyan-600 font-bold">{service.price}</div>
                                </button>
                            ))}
                        </div>

                        {/* Booking Form Preview */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-lg text-slate-900 mb-6">2. Pick Your Time</h3>

                            <div className="grid grid-cols-3 gap-2 mb-6">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                                    <button key={day} className={`p-3 rounded-lg text-sm font-bold transition-all ${i === 1 ? 'bg-cyan-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-cyan-300'}`}>
                                        {day}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-2 mb-8">
                                {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time, i) => (
                                    <button key={time} className={`p-3 rounded-lg text-sm font-medium transition-all ${i === 2 ? 'bg-cyan-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-cyan-300'}`}>
                                        {time}
                                    </button>
                                ))}
                            </div>

                            <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                                <Calendar className="w-5 h-5" /> Confirm Appointment
                            </button>
                            <p className="text-xs text-center text-slate-400 mt-4">🔒 Secure HIPAA-compliant booking</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Services</h2>
                        <p className="text-slate-500 max-w-xl mx-auto">Comprehensive dental care for the whole family.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Smile, title: 'General Dentistry', desc: 'Cleanings, exams, and preventive care' },
                            { icon: Heart, title: 'Cosmetic', desc: 'Whitening, veneers, and smile makeovers' },
                            { icon: Stethoscope, title: 'Restorative', desc: 'Fillings, crowns, and implants' },
                            { icon: Users, title: 'Family Care', desc: 'Pediatric to senior dental services' },
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-500 text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insurance Section */}
            <section id="insurance" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Insurance & Payment Made Easy</h2>
                            <p className="text-slate-600 mb-8 text-lg">We accept most major insurance plans and offer flexible payment options.</p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    <span className="font-medium text-slate-700">Most PPO & HMO Plans Accepted</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    <span className="font-medium text-slate-700">Interest-Free Payment Plans</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    <span className="font-medium text-slate-700">Transparent Pricing, No Surprises</span>
                                </div>
                            </div>

                            <a href="tel:+19177688896" className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-cyan-700 transition-all">
                                <Phone className="w-4 h-4" /> Verify Your Insurance: (917) 768-8896
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl text-white">
                            <FileText className="w-12 h-12 mb-6 opacity-80" />
                            <h3 className="text-2xl font-bold mb-4">Fill Out Forms Online</h3>
                            <p className="text-cyan-100 mb-6">Skip the clipboard. Complete your patient forms securely from home before your visit.</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> HIPAA-compliant & encrypted</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Takes only 5 minutes</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Saves time at check-in</li>
                            </ul>
                            <button className="bg-white text-cyan-600 px-6 py-3 rounded-full font-bold hover:bg-cyan-50 transition-all">
                                Start Patient Forms
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="bg-cyan-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-current" />)}
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-bold italic mb-8 max-w-3xl mx-auto leading-relaxed">
                        "Best dental experience I've ever had! Booking online was so easy, the staff was amazing, and my teeth have never looked better!"
                    </blockquote>
                    <cite className="font-bold text-cyan-200 not-italic uppercase tracking-widest text-sm">- Rachel T., Park Slope</cite>
                </div>
            </section>

        </div>
    );
};

export default DentalDemo;
