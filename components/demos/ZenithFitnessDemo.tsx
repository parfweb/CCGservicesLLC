import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Clock, MapPin, ChevronRight, Activity, Flame, Trophy, Play, CheckCircle2, Dumbbell, Zap, Instagram, Facebook, Youtube, Menu, ArrowRight, BarChart, LogOut } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const ZenithFitnessDemo: React.FC<Props> = ({ onClose }) => {
  const [activeModal, setActiveModal] = useState<'login' | 'signup' | 'booking' | 'portal' | 'menu' | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('schedule'); // For portal

  // Mock Data
  const schedule = [
    { id: 1, time: "06:00 AM", class: "HIIT Inferno", trainer: "Alex S.", spots: 4, duration: "45m", intensity: "High" },
    { id: 2, time: "07:30 AM", class: "Power Yoga", trainer: "Sarah J.", spots: 12, duration: "60m", intensity: "Med" },
    { id: 3, time: "09:00 AM", class: "Cycle & Crush", trainer: "Mike T.", spots: 0, duration: "45m", intensity: "High" },
    { id: 4, time: "05:30 PM", class: "Box & Bell", trainer: "Jessica R.", spots: 8, duration: "60m", intensity: "High" },
    { id: 5, time: "07:00 PM", class: "Recovery Flow", trainer: "Sarah J.", spots: 15, duration: "45m", intensity: "Low" },
  ];

  // Auto-hide notification
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('zenith-demo-container');
      if (container && container.scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    const container = document.getElementById('zenith-demo-container');
    if (container) container.addEventListener('scroll', handleScroll);
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLink = (e: React.MouseEvent<HTMLElement>, action: 'scroll' | 'modal' | 'toast' | 'portal', target: string) => {
    e.preventDefault();
    if (action === 'scroll') {
      const element = document.getElementById(target);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'modal') {
       setActiveModal(target as any);
    } else if (action === 'portal') {
       setActiveModal('portal');
       setNotification("Welcome back, Member.");
    } else if (action === 'toast') {
        setNotification(target);
    }
    if (target !== 'menu') {
        // If it was the menu opening, keep it open, otherwise close overlays if needed
    }
  };

  const handleBook = (classItem: any) => {
      if (classItem.spots === 0) {
          setNotification("Class is full! Added to waitlist.");
          return;
      }
      setSelectedClass(classItem);
      setActiveModal('booking');
  };

  const confirmBooking = () => {
      setActiveModal(null);
      setNotification(`Booked ${selectedClass.class} successfully!`);
      setSelectedClass(null);
  };

  return (
    <div id="zenith-demo-container" className="fixed inset-0 z-[100] bg-zinc-950 overflow-y-auto animate-in slide-in-from-bottom duration-500 font-sans text-white selection:bg-cyan-500 selection:text-black">
      
      {/* Demo Controls Overlay */}
      <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end gap-4">
        {notification && (
            <div className="bg-cyan-500 text-black font-bold px-6 py-3 shadow-[0_0_20px_rgba(34,211,238,0.4)] animate-in slide-in-from-right fade-in flex items-center gap-3 clip-path-slant">
                <CheckCircle2 className="w-5 h-5" />
                <span className="uppercase tracking-wide text-xs">{notification}</span>
            </div>
        )}
        <div className="bg-zinc-900/90 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-zinc-800">
          <span className="text-xs font-bold uppercase tracking-widest border-r border-zinc-700 pr-4 text-zinc-500">ParfWeb Case Study</span>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-white transition-colors"
          >
            Close Preview <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* --- ZENITH X MOCKUP START --- */}
      <div className="min-h-screen font-sans">
        
        {/* Navbar */}
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleLink(e, 'scroll', 'hero')}>
               <div className="w-10 h-10 bg-cyan-500 skew-x-[-10deg] flex items-center justify-center">
                  <span className="font-black text-black skew-x-[10deg] text-xl">Z</span>
               </div>
               <span className="text-2xl font-black italic tracking-tighter text-white">ZENITH<span className="text-cyan-500">X</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
              <a href="#classes" onClick={(e) => handleLink(e, 'scroll', 'classes')} className="hover:text-cyan-400 transition-colors">Classes</a>
              <a href="#trainers" onClick={(e) => handleLink(e, 'scroll', 'trainers')} className="hover:text-cyan-400 transition-colors">Trainers</a>
              <a href="#membership" onClick={(e) => handleLink(e, 'scroll', 'membership')} className="hover:text-cyan-400 transition-colors">Membership</a>
            </div>

            <div className="flex items-center gap-6">
              <button onClick={(e) => handleLink(e, 'portal', 'portal')} className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">
                <User className="w-4 h-4" /> Member Login
              </button>
              <button onClick={(e) => handleLink(e, 'scroll', 'membership')} className="bg-white text-black hover:bg-cyan-400 hover:text-black px-6 py-2.5 font-black uppercase tracking-widest text-xs skew-x-[-10deg] transition-all">
                <span className="skew-x-[10deg] inline-block">Join Now</span>
              </button>
              <button className="md:hidden text-white" onClick={() => setActiveModal('menu')}>
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {activeModal === 'menu' && (
          <div className="fixed inset-0 bg-zinc-950 z-[60] flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-top duration-300">
             <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-white"><X className="w-8 h-8" /></button>
             <a href="#classes" onClick={(e) => { setActiveModal(null); handleLink(e, 'scroll', 'classes'); }} className="text-4xl font-black italic text-white hover:text-cyan-500">CLASSES</a>
             <a href="#trainers" onClick={(e) => { setActiveModal(null); handleLink(e, 'scroll', 'trainers'); }} className="text-4xl font-black italic text-white hover:text-cyan-500">TRAINERS</a>
             <a href="#membership" onClick={(e) => { setActiveModal(null); handleLink(e, 'scroll', 'membership'); }} className="text-4xl font-black italic text-white hover:text-cyan-500">JOIN</a>
             <button onClick={(e) => { setActiveModal(null); handleLink(e, 'portal', 'portal'); }} className="text-xl font-bold uppercase text-zinc-500 hover:text-white mt-8">Member Portal</button>
          </div>
        )}

        {/* Hero Section */}
        <section id="hero" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover opacity-60" 
               alt="Gym Interior" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
             <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 mb-8 skew-x-[-10deg]">
                  <span className="w-2 h-2 bg-cyan-500 skew-x-[10deg] animate-pulse"></span>
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest skew-x-[10deg]">New Facility Open</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black italic text-white leading-[0.9] mb-8 tracking-tighter">
                  DEFY<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">YOUR LIMITS</span>
                </h1>
                
                <p className="text-xl text-zinc-300 max-w-lg mb-12 font-medium">
                  The most advanced training facility in the city. High-tech equipment, elite coaching, and a community driven by performance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                   <button 
                     onClick={(e) => handleLink(e, 'scroll', 'membership')}
                     className="bg-cyan-500 text-black px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors skew-x-[-10deg] group"
                   >
                     <span className="skew-x-[10deg] inline-flex items-center gap-2">Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/></span>
                   </button>
                   <button 
                     onClick={(e) => handleLink(e, 'scroll', 'classes')}
                     className="border border-zinc-700 bg-black/50 backdrop-blur text-white px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors skew-x-[-10deg]"
                   >
                     <span className="skew-x-[10deg]">View Schedule</span>
                   </button>
                </div>
             </div>
          </div>

          {/* Stat ticker at bottom */}
          <div className="absolute bottom-0 w-full border-t border-zinc-800 bg-zinc-950/80 backdrop-blur py-6">
             <div className="max-w-7xl mx-auto px-6 flex justify-between md:justify-start gap-12 text-zinc-500 overflow-x-auto no-scrollbar">
                <div className="flex flex-col">
                   <span className="text-2xl font-black text-white italic">24/7</span>
                   <span className="text-[10px] uppercase font-bold tracking-widest">Access</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-2xl font-black text-white italic">50+</span>
                   <span className="text-[10px] uppercase font-bold tracking-widest">Classes/Week</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-2xl font-black text-white italic">Elite</span>
                   <span className="text-[10px] uppercase font-bold tracking-widest">Trainers</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-2xl font-black text-white italic">Sauna</span>
                   <span className="text-[10px] uppercase font-bold tracking-widest">& Recovery</span>
                </div>
             </div>
          </div>
        </section>

        {/* Classes Schedule */}
        <section id="classes" className="py-24 bg-zinc-950 relative">
           <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                 <div>
                    <h2 className="text-4xl md:text-6xl font-black italic text-white mb-4">DAILY <span className="text-zinc-800 text-stroke-1 text-stroke-white">GRIND</span></h2>
                    <p className="text-zinc-400 max-w-md">Book your spot. First come, first served. Our classes are designed to push you to your absolute max.</p>
                 </div>
                 <div className="flex gap-2">
                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
                       <button key={day} className={`w-12 h-14 skew-x-[-10deg] flex items-center justify-center font-bold text-xs ${i === 0 ? 'bg-cyan-500 text-black' : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'}`}>
                          <span className="skew-x-[10deg]">{day}</span>
                       </button>
                    ))}
                 </div>
              </div>

              <div className="grid gap-4">
                 {schedule.map((item) => (
                    <div key={item.id} className="group relative bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 p-6 flex flex-col md:flex-row items-center justify-between transition-all hover:bg-zinc-800/50">
                       <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
                          <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800 group-hover:border-cyan-500 transition-colors">
                             {item.intensity === 'High' ? <Flame className="w-6 h-6 text-orange-500" /> : <Activity className="w-6 h-6 text-cyan-500" />}
                          </div>
                          <div>
                             <div className="flex items-center gap-3 mb-1">
                                <h3 className="text-xl font-black text-white italic">{item.class}</h3>
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">{item.duration}</span>
                             </div>
                             <p className="text-zinc-500 text-sm flex items-center gap-2"><User className="w-3 h-3"/> {item.trainer}</p>
                          </div>
                       </div>
                       
                       <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                          <div className="text-right hidden md:block">
                             <div className="text-2xl font-bold text-white font-mono">{item.time}</div>
                             <div className={`text-xs font-bold uppercase ${item.spots < 5 ? 'text-red-500' : 'text-green-500'}`}>
                                {item.spots === 0 ? 'Waitlist Only' : `${item.spots} spots left`}
                             </div>
                          </div>
                          <button 
                             onClick={() => handleBook(item)}
                             className={`px-8 py-4 font-black uppercase text-sm skew-x-[-10deg] transition-all ${item.spots === 0 ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-white text-black hover:bg-cyan-500'}`}
                          >
                             <span className="skew-x-[10deg]">{item.spots === 0 ? 'Join Waitlist' : 'Book Class'}</span>
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Trainers Section */}
        <section id="trainers" className="py-24 bg-zinc-900 border-y border-zinc-800">
           <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-black italic text-white mb-16 text-center">ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">COACHING</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { name: "Alex Sterling", spec: "Strength & Conditioning", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600" },
                   { name: "Jessica Rivers", spec: "Boxing & HIIT", img: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&q=80&w=600" },
                   { name: "Marcus Thorne", spec: "Functional Movement", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600" }
                 ].map((trainer, i) => (
                    <div key={i} className="group relative overflow-hidden h-[500px] border border-zinc-800 bg-zinc-950">
                       <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                       <div className="absolute bottom-0 left-0 p-8 w-full">
                          <h3 className="text-3xl font-black text-white italic mb-1">{trainer.name}</h3>
                          <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6">{trainer.spec}</p>
                          <button 
                             onClick={(e) => handleLink(e, 'toast', `Booking session with ${trainer.name}`)}
                             className="w-full py-4 border border-white/20 hover:bg-cyan-500 hover:border-cyan-500 hover:text-black text-white font-bold uppercase tracking-widest text-xs transition-colors"
                          >
                             Book Session
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Membership */}
        <section id="membership" className="py-24 bg-zinc-950 relative overflow-hidden">
           {/* Abstract bg */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[100px]"></div>

           <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <h2 className="text-4xl md:text-6xl font-black italic text-white mb-6">CHOOSE YOUR <span className="text-zinc-800 text-stroke-1 text-stroke-white">PATH</span></h2>
              <p className="text-zinc-400 mb-16 text-lg">No contracts. Cancel anytime. 100% committed to your results.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                 {/* Tier 1 */}
                 <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col hover:border-zinc-700 transition-colors">
                    <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Essential</h3>
                    <div className="text-4xl font-black text-white mb-6">$49<span className="text-lg font-medium text-zinc-500">/mo</span></div>
                    <ul className="space-y-4 text-left text-zinc-400 text-sm mb-8 flex-1">
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-600"/> Gym Access (Off-Peak)</li>
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-600"/> Locker Room Access</li>
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-zinc-600"/> 1 Guest Pass/mo</li>
                    </ul>
                    <button className="w-full py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors" onClick={() => handleLink({ preventDefault: () => {} } as any, 'toast', 'Selected Essential Plan')}>Select Plan</button>
                 </div>

                 {/* Tier 2 */}
                 <div className="bg-zinc-900 border border-cyan-500 p-8 flex flex-col transform md:-translate-y-4 relative shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                    <div className="absolute top-0 inset-x-0 h-1 bg-cyan-500"></div>
                    <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-cyan-500 text-black px-2 py-1">Best Value</div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Performance</h3>
                    <div className="text-4xl font-black text-white mb-6">$89<span className="text-lg font-medium text-zinc-500">/mo</span></div>
                    <ul className="space-y-4 text-left text-zinc-300 text-sm mb-8 flex-1">
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500"/> 24/7 Gym Access</li>
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500"/> Unlimited Classes</li>
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500"/> Sauna & Recovery Zone</li>
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-500"/> App Access + Tracking</li>
                    </ul>
                    <button className="w-full py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors" onClick={() => handleLink({ preventDefault: () => {} } as any, 'toast', 'Selected Performance Plan')}>Select Plan</button>
                 </div>

                 {/* Tier 3 */}
                 <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col hover:border-zinc-700 transition-colors">
                    <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">Elite</h3>
                    <div className="text-4xl font-black text-white mb-6">$149<span className="text-lg font-medium text-zinc-500">/mo</span></div>
                    <ul className="space-y-4 text-left text-zinc-400 text-sm mb-8 flex-1">
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white"/> All Performance Perks</li>
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white"/> 2 PT Sessions/mo</li>
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white"/> Nutrition Planning</li>
                       <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white"/> Priority Booking</li>
                    </ul>
                    <button className="w-full py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors" onClick={() => handleLink({ preventDefault: () => {} } as any, 'toast', 'Selected Elite Plan')}>Select Plan</button>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-zinc-500 py-16 border-t border-zinc-900 text-sm">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-1">
                 <div className="flex items-center gap-2 text-white mb-6">
                    <div className="w-8 h-8 bg-zinc-800 skew-x-[-10deg] flex items-center justify-center"><span className="skew-x-[10deg] font-black">Z</span></div>
                    <span className="font-black italic text-xl">ZENITH<span className="text-cyan-600">X</span></span>
                 </div>
                 <p className="mb-6">Redefining human performance through technology, community, and grit.</p>
                 <div className="flex gap-4">
                    <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors"/>
                    <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors"/>
                    <Youtube className="w-5 h-5 hover:text-white cursor-pointer transition-colors"/>
                 </div>
              </div>
              
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6">Location</h4>
                <p className="mb-2">100 Iron Street</p>
                <p className="mb-2">Metro City, ST 99201</p>
                <p className="text-cyan-500 mt-4 cursor-pointer hover:underline">Get Directions</p>
              </div>

              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6">Hours</h4>
                <p className="flex justify-between max-w-[150px] mb-2"><span>Mon-Fri</span> <span className="text-white">24 Hours</span></p>
                <p className="flex justify-between max-w-[150px] mb-2"><span>Sat-Sun</span> <span className="text-white">6am - 10pm</span></p>
              </div>

              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h4>
                <p className="mb-2">hello@zenithx.demo</p>
                <p className="mb-2">+1 (555) 999-8888</p>
              </div>
           </div>
        </footer>

        {/* --- MODALS --- */}
        
        {/* Booking Modal */}
        {activeModal === 'booking' && selectedClass && (
           <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
              <div className="relative bg-zinc-900 w-full max-w-md border border-zinc-800 animate-in fade-in zoom-in duration-300">
                 <div className="bg-zinc-950 p-6 border-b border-zinc-800 flex justify-between items-center">
                    <h3 className="text-xl font-black italic text-white">CONFIRM BOOKING</h3>
                    <button onClick={() => setActiveModal(null)}><X className="w-5 h-5 text-zinc-500 hover:text-white"/></button>
                 </div>
                 <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-16 h-16 bg-zinc-800 rounded flex items-center justify-center text-cyan-500">
                          <Activity className="w-8 h-8" />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold text-white">{selectedClass.class}</h4>
                          <p className="text-zinc-500 text-sm">{selectedClass.time} • {selectedClass.trainer}</p>
                       </div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                       <div className="flex justify-between text-sm text-zinc-400 border-b border-zinc-800 pb-2">
                          <span>Duration</span>
                          <span className="text-white">{selectedClass.duration}</span>
                       </div>
                       <div className="flex justify-between text-sm text-zinc-400 border-b border-zinc-800 pb-2">
                          <span>Intensity</span>
                          <span className="text-orange-500">{selectedClass.intensity}</span>
                       </div>
                       <div className="flex justify-between text-sm text-zinc-400 pb-2">
                          <span>Spots Remaining</span>
                          <span className="text-white">{selectedClass.spots}</span>
                       </div>
                    </div>

                    <button onClick={confirmBooking} className="w-full bg-cyan-500 hover:bg-white text-black font-black uppercase tracking-widest py-4 transition-colors">
                       Confirm Reservation
                    </button>
                 </div>
              </div>
           </div>
        )}

        {/* Member Portal Modal (The "App") */}
        {activeModal === 'portal' && (
           <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8">
              <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setActiveModal(null)}></div>
              <div className="relative bg-zinc-900 w-full max-w-6xl h-full md:h-[85vh] border border-zinc-800 shadow-2xl animate-in fade-in zoom-in duration-300 flex overflow-hidden">
                 
                 {/* Sidebar */}
                 <div className="w-20 md:w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col flex-shrink-0">
                    <div className="p-6 flex items-center gap-3 border-b border-zinc-900 h-20">
                       <div className="w-8 h-8 bg-cyan-500 flex items-center justify-center font-black text-black">Z</div>
                       <span className="font-bold italic text-white hidden md:block">PORTAL</span>
                    </div>
                    <nav className="flex-1 p-4 space-y-2">
                       <button onClick={() => setActiveTab('schedule')} className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded transition-colors ${activeTab === 'schedule' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}>
                          <Calendar className="w-5 h-5" /> <span className="hidden md:block">Schedule</span>
                       </button>
                       <button onClick={() => setActiveTab('stats')} className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded transition-colors ${activeTab === 'stats' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}>
                          <BarChart className="w-5 h-5" /> <span className="hidden md:block">Stats</span>
                       </button>
                       <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded transition-colors ${activeTab === 'profile' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}>
                          <User className="w-5 h-5" /> <span className="hidden md:block">Profile</span>
                       </button>
                    </nav>
                    <div className="p-4 border-t border-zinc-900">
                       <button onClick={() => setActiveModal(null)} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wider text-red-500 hover:bg-zinc-900 rounded">
                          <LogOut className="w-5 h-5" /> <span className="hidden md:block">Log Out</span>
                       </button>
                    </div>
                 </div>

                 {/* Main Content */}
                 <div className="flex-1 overflow-y-auto bg-zinc-900 relative">
                     <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 text-white z-50">
                        <X className="w-5 h-5" />
                     </button>
                     
                     <div className="p-8 md:p-12">
                        <div className="flex justify-between items-center mb-10">
                           <div>
                              <h2 className="text-3xl font-black italic text-white">WELCOME BACK, ALEX</h2>
                              <p className="text-zinc-500">You're on a 3-day streak! 🔥</p>
                           </div>
                           <div className="hidden md:block w-12 h-12 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
                              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" alt="User" />
                           </div>
                        </div>

                        {activeTab === 'schedule' && (
                           <>
                              {/* Next Class Card */}
                              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white mb-10 relative overflow-hidden">
                                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                                 <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                       <div>
                                          <div className="text-xs font-bold uppercase tracking-widest bg-black/20 inline-block px-3 py-1 rounded mb-3">Up Next</div>
                                          <h3 className="text-4xl font-black italic">HIIT INFERNO</h3>
                                          <p className="text-cyan-100 mt-1">Today, 06:00 PM • with Alex S.</p>
                                       </div>
                                       <div className="text-center bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                          <div className="text-3xl font-bold">45</div>
                                          <div className="text-[10px] uppercase font-bold">Mins</div>
                                       </div>
                                    </div>
                                    <button className="bg-white text-blue-900 px-6 py-3 font-bold uppercase text-xs rounded hover:bg-blue-50 transition-colors">Check In</button>
                                 </div>
                              </div>

                              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Upcoming Classes</h3>
                              <div className="space-y-4">
                                 {[1,2,3].map((_, i) => (
                                    <div key={i} className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl flex items-center justify-between hover:border-zinc-700 transition-colors">
                                       <div className="flex items-center gap-6">
                                          <div className="text-center w-12">
                                             <div className="text-sm font-bold text-zinc-500 uppercase">Tomorrow</div>
                                             <div className="text-xl font-bold text-white">0{i+7}:00</div>
                                          </div>
                                          <div className="w-px h-10 bg-zinc-800"></div>
                                          <div>
                                             <h4 className="font-bold text-white text-lg">{i % 2 === 0 ? 'Power Lift' : 'Cycle & Crush'}</h4>
                                             <p className="text-zinc-500 text-sm">Studio {i+1} • {i % 2 === 0 ? 'Mike T.' : 'Sarah J.'}</p>
                                          </div>
                                       </div>
                                       <button className="text-zinc-500 hover:text-red-500 text-sm font-bold transition-colors">Cancel</button>
                                    </div>
                                 ))}
                              </div>
                           </>
                        )}

                        {activeTab === 'stats' && (
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl">
                                 <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Weekly Activity</h4>
                                 <div className="flex items-end justify-between h-40 gap-2">
                                    {[40, 65, 30, 80, 50, 90, 45].map((h, i) => (
                                       <div key={i} className="w-full bg-zinc-800 rounded-t hover:bg-cyan-500 transition-colors relative group">
                                          <div className="absolute bottom-0 w-full bg-cyan-500/20" style={{ height: `${h}%` }}></div>
                                          <div className="absolute bottom-0 w-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all" style={{ height: `${h}%` }}></div>
                                       </div>
                                    ))}
                                 </div>
                                 <div className="flex justify-between text-xs text-zinc-600 font-bold uppercase mt-4">
                                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                 </div>
                              </div>
                              <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl">
                                 <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Metrics</h4>
                                 <div className="space-y-6">
                                    <div>
                                       <div className="flex justify-between mb-2 text-sm">
                                          <span className="text-zinc-400">Calories Burned (This Week)</span>
                                          <span className="text-white font-bold">2,450</span>
                                       </div>
                                       <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                          <div className="bg-orange-500 h-full w-[70%]"></div>
                                       </div>
                                    </div>
                                    <div>
                                       <div className="flex justify-between mb-2 text-sm">
                                          <span className="text-zinc-400">Class Attendance Goal</span>
                                          <span className="text-white font-bold">4/5</span>
                                       </div>
                                       <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                          <div className="bg-green-500 h-full w-[80%]"></div>
                                       </div>
                                    </div>
                                    <div className="flex gap-4 pt-4">
                                       <div className="flex-1 bg-zinc-900 rounded p-3 text-center border border-zinc-800">
                                          <div className="text-2xl font-black text-white">12</div>
                                          <div className="text-[10px] text-zinc-500 uppercase">Workouts</div>
                                       </div>
                                       <div className="flex-1 bg-zinc-900 rounded p-3 text-center border border-zinc-800">
                                          <div className="text-2xl font-black text-white">4.5</div>
                                          <div className="text-[10px] text-zinc-500 uppercase">Hrs</div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )}
                        
                        {activeTab === 'profile' && (
                           <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl text-center">
                              <User className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                              <h3 className="text-xl font-bold text-white">Profile Settings</h3>
                              <p className="text-zinc-500 mb-8">Manage your account details and membership.</p>
                              <div className="max-w-md mx-auto space-y-4">
                                 <input type="text" value="Alex Smith" className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded text-white" readOnly />
                                 <input type="email" value="alex.smith@example.com" className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded text-white" readOnly />
                                 <button className="w-full bg-zinc-800 text-white py-3 font-bold uppercase text-xs hover:bg-zinc-700 transition-colors">Reset Password</button>
                                 <button className="w-full border border-red-900 text-red-500 py-3 font-bold uppercase text-xs hover:bg-red-900/20 transition-colors">Cancel Membership</button>
                              </div>
                           </div>
                        )}

                     </div>
                 </div>
              </div>
           </div>
        )}

      </div>
      {/* --- ZENITH X MOCKUP END --- */}

    </div>
  );
};

export default ZenithFitnessDemo;