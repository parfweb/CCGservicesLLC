import React, { useState, useEffect } from 'react';
import { X, Menu, ArrowRight, HardHat, Ruler, Hammer, Building2, ChevronRight, CheckCircle2, Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Play, Download } from 'lucide-react';

interface Props {
   onClose: () => void;
}

interface Project {
   id: number;
   title: string;
   category: string;
   location: string;
   description: string;
   image: string;
   stats: { label: string; value: string }[];
}

const projects: Project[] = [
   {
      id: 1,
      title: "Summit Office Park",
      category: "Commercial",
      location: "Naperville, IL",
      description: "A modern three-building office complex featuring sustainable design, collaborative workspaces, and underground parking for local businesses.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
      stats: [
         { label: "Size", value: "85k sqft" },
         { label: "Duration", value: "14 Mos" },
         { label: "Value", value: "$18M" }
      ]
   },
   {
      id: 2,
      title: "Heritage High School",
      category: "Education",
      location: "Round Rock, TX",
      description: "Expansion of the athletic wing and new science laboratories, completed while school was in session with zero safety incidents.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1600",
      stats: [
         { label: "New Space", value: "25k sqft" },
         { label: "Concrete", value: "2.5k yds" },
         { label: "Value", value: "$12.5M" }
      ]
   },
   {
      id: 3,
      title: "Innovation Hub",
      category: "Education",
      location: "Boston, MA",
      description: "State-of-the-art research facility for the University of Technology, including clean rooms, lecture halls, and collaborative workspaces.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
      stats: [
         { label: "Size", value: "120k sqft" },
         { label: "Labs", value: "15" },
         { label: "Value", value: "$62M" }
      ]
   },
   {
      id: 4,
      title: "Westside General Hospital",
      category: "Healthcare",
      location: "Seattle, WA",
      description: "Seismic retrofitting and expansion of the emergency wing, ensuring uninterrupted hospital operations during construction.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
      stats: [
         { label: "Beds", value: "200" },
         { label: "Safety", value: "100%" },
         { label: "Value", value: "$95M" }
      ]
   }
];

const ConstructOneDemo: React.FC<Props> = ({ onClose }) => {
   const [activeModal, setActiveModal] = useState<'menu' | 'project' | 'contact' | 'video' | null>(null);
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
   const [notification, setNotification] = useState<string | null>(null);
   const [isScrolled, setIsScrolled] = useState(false);

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
         const container = document.getElementById('construct-demo-container');
         if (container && container.scrollTop > 50) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      const container = document.getElementById('construct-demo-container');
      if (container) container.addEventListener('scroll', handleScroll);
      return () => {
         if (container) container.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const handleLink = (e: React.MouseEvent<any>, action: 'scroll' | 'modal' | 'toast', target: string) => {
      e.preventDefault();
      if (action === 'scroll') {
         const element = document.getElementById(target);
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveModal(null);
         }
      } else if (action === 'modal') {
         if (target === 'contact') setActiveModal('contact');
      } else if (action === 'toast') {
         setNotification(target);
      }
   };

   const openProject = (project: Project) => {
      setSelectedProject(project);
      setActiveModal('project');
   };

   return (
      <div id="construct-demo-container" className="fixed inset-0 z-[100] bg-zinc-50 overflow-y-auto animate-in slide-in-from-bottom duration-500 font-sans text-zinc-900 selection:bg-orange-500 selection:text-white">

         {/* Demo Controls Overlay */}
         <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end gap-4">
            {notification && (
               <div className="bg-zinc-900 text-white px-6 py-4 shadow-2xl animate-in slide-in-from-right fade-in flex items-center gap-3 border-l-4 border-orange-500">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="font-bold tracking-wide">{notification}</span>
               </div>
            )}
            <div className="bg-white/90 backdrop-blur-md text-zinc-900 px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-zinc-200">
               <span className="text-xs font-bold uppercase tracking-widest border-r border-zinc-300 pr-4 text-zinc-500">CCG SiteSpark Case Study</span>
               <button
                  onClick={onClose}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600 hover:text-zinc-900 transition-colors"
               >
                  Close Preview <X className="w-4 h-4" />
               </button>
            </div>
         </div>

         {/* --- CONSTRUCT ONE MOCKUP START --- */}
         <div className="min-h-screen font-sans">

            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900 text-white shadow-lg py-4' : 'bg-transparent text-white py-8'}`}>
               <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
                  <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => handleLink(e, 'scroll', 'hero')}>
                     <div className="w-10 h-10 bg-orange-500 flex items-center justify-center font-black text-white rounded-sm">C1</div>
                     <div>
                        <h1 className="text-xl font-bold tracking-tighter leading-none">CONSTRUCT<span className="text-orange-500">ONE</span></h1>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">Industrial Group</p>
                     </div>
                  </div>

                  <div className="hidden lg:flex items-center gap-10 font-bold text-sm uppercase tracking-wider">
                     <a href="#about" onClick={(e) => handleLink(e, 'scroll', 'about')} className="hover:text-orange-500 transition-colors">About</a>
                     <a href="#projects" onClick={(e) => handleLink(e, 'scroll', 'projects')} className="hover:text-orange-500 transition-colors">Projects</a>
                     <a href="#services" onClick={(e) => handleLink(e, 'scroll', 'services')} className="hover:text-orange-500 transition-colors">Services</a>
                     <a href="#safety" onClick={(e) => handleLink(e, 'scroll', 'safety')} className="hover:text-orange-500 transition-colors">Safety</a>
                  </div>

                  <div className="flex items-center gap-6">
                     <a href="tel:+18005550199" className="hidden md:flex items-center gap-2 text-sm font-bold hover:text-orange-500 transition-colors">
                        <Phone className="w-4 h-4 text-orange-500" /> 1-800-555-0199
                     </a>
                     <button
                        onClick={(e) => handleLink(e, 'modal', 'contact')}
                        className="bg-orange-500 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-zinc-900 transition-colors rounded-sm"
                     >
                        Request Bid
                     </button>
                     <button className="lg:hidden" onClick={() => setActiveModal('menu')}>
                        <Menu className="w-8 h-8" />
                     </button>
                  </div>
               </div>
            </nav>

            {/* Mobile Menu */}
            {activeModal === 'menu' && (
               <div className="fixed inset-0 bg-zinc-900 z-[60] flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-right duration-300">
                  <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-white"><X className="w-8 h-8" /></button>
                  <a href="#about" onClick={(e) => handleLink(e, 'scroll', 'about')} className="text-3xl font-bold text-white hover:text-orange-500 uppercase tracking-wider">About</a>
                  <a href="#projects" onClick={(e) => handleLink(e, 'scroll', 'projects')} className="text-3xl font-bold text-white hover:text-orange-500 uppercase tracking-wider">Projects</a>
                  <a href="#services" onClick={(e) => handleLink(e, 'scroll', 'services')} className="text-3xl font-bold text-white hover:text-orange-500 uppercase tracking-wider">Services</a>
                  <a href="#safety" onClick={(e) => handleLink(e, 'scroll', 'safety')} className="text-3xl font-bold text-white hover:text-orange-500 uppercase tracking-wider">Safety</a>
                  <button onClick={() => setActiveModal('contact')} className="bg-orange-500 text-white px-8 py-4 font-bold uppercase tracking-widest mt-8">Request Bid</button>
               </div>
            )}

            {/* Hero Section */}
            <section id="hero" className="relative h-screen min-h-[700px] flex items-center bg-zinc-900">
               {/* Background Video/Image Mockup */}
               <div className="absolute inset-0 z-0">
                  <img
                     src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
                     className="w-full h-full object-cover opacity-40 grayscale"
                     alt="Construction Site"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-transparent"></div>
               </div>

               <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full pt-20">
                  <div className="max-w-3xl">
                     <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 font-bold uppercase tracking-widest text-xs mb-8 rounded-sm">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span> Now Hiring Skilled Trades
                     </div>
                     <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tight">
                        BUILDING <br />
                        TOMORROW'S <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">INFRASTRUCTURE</span>
                     </h1>
                     <p className="text-xl text-zinc-400 max-w-2xl mb-12 font-medium leading-relaxed border-l-4 border-orange-500 pl-6">
                        A premier general contractor delivering complex projects with precision, safety, and unwavering integrity since 1998.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={(e) => handleLink(e, 'scroll', 'projects')} className="bg-orange-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-zinc-900 transition-colors rounded-sm flex items-center justify-center gap-2 group">
                           View Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button onClick={() => setActiveModal('video')} className="border border-zinc-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors rounded-sm flex items-center justify-center gap-2">
                           <Play className="w-4 h-4 fill-current" /> Watch Showreel
                        </button>
                     </div>
                  </div>
               </div>

               {/* Stats Strip */}
               <div className="absolute bottom-0 w-full bg-orange-600 text-white py-8 border-t border-orange-500">
                  <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                     <div className="border-l border-white/20 pl-6">
                        <div className="text-4xl font-black mb-1">25+</div>
                        <div className="text-xs uppercase font-bold tracking-widest opacity-80">Years Experience</div>
                     </div>
                     <div className="border-l border-white/20 pl-6">
                        <div className="text-4xl font-black mb-1">$1B+</div>
                        <div className="text-xs uppercase font-bold tracking-widest opacity-80">Project Volume</div>
                     </div>
                     <div className="border-l border-white/20 pl-6">
                        <div className="text-4xl font-black mb-1">0</div>
                        <div className="text-xs uppercase font-bold tracking-widest opacity-80">Lost Time Injuries</div>
                     </div>
                     <div className="border-l border-white/20 pl-6">
                        <div className="text-4xl font-black mb-1">500+</div>
                        <div className="text-xs uppercase font-bold tracking-widest opacity-80">Dedicated Staff</div>
                     </div>
                  </div>
               </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-white">
               <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                     <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">About Construct One</h4>
                     <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-8 leading-tight">WE BUILD MORE THAN STRUCTURES. <br />WE BUILD <span className="text-zinc-400">TRUST.</span></h2>
                     <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
                        Construct One provides comprehensive construction management, design-build, and general contracting services to a broad range of commercial and industrial clients.
                     </p>
                     <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                        Our success is built on a foundation of shared values: quality service and relationships, mutual trust and integrity. We approach every project with a cooperative mindset, working with clients, architects, and subcontractors toward one common goal: successful project delivery.
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="flex items-start gap-4">
                           <div className="bg-zinc-100 p-3 rounded-sm"><HardHat className="w-6 h-6 text-orange-500" /></div>
                           <div>
                              <h5 className="font-bold text-zinc-900 uppercase">Safety First</h5>
                              <p className="text-sm text-zinc-500 mt-1">Uncompromising commitment to the health and safety of our people.</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="bg-zinc-100 p-3 rounded-sm"><Ruler className="w-6 h-6 text-orange-500" /></div>
                           <div>
                              <h5 className="font-bold text-zinc-900 uppercase">Precision</h5>
                              <p className="text-sm text-zinc-500 mt-1">Exacting standards in every detail, from foundation to finish.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="relative">
                     <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 z-0"></div>
                     <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-zinc-200 z-0"></div>
                     <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" className="relative z-10 w-full h-auto shadow-xl" alt="Architects meeting" />
                  </div>
               </div>
            </section>

            {/* Projects Portfolio */}
            <section id="projects" className="py-24 bg-zinc-100">
               <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                  <div className="flex justify-between items-end mb-16">
                     <div>
                        <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Portfolio</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-zinc-900">FEATURED PROJECTS</h2>
                     </div>
                     <div className="hidden md:flex gap-2">
                        <button className="w-12 h-12 border border-zinc-300 flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all"><ChevronRight className="w-5 h-5 rotate-180" /></button>
                        <button className="w-12 h-12 border border-zinc-300 flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all"><ChevronRight className="w-5 h-5" /></button>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {projects.map((project) => (
                        <div key={project.id} className="group bg-white cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300" onClick={() => openProject(project)}>
                           <div className="relative aspect-[16/9] overflow-hidden">
                              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                              <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="bg-orange-500 text-white px-6 py-3 font-bold uppercase tracking-widest text-sm rounded-sm">View Case Study</span>
                                 </div>
                              </div>
                              <div className="absolute top-4 right-4 bg-zinc-900 text-white px-4 py-2 font-bold uppercase text-xs tracking-wider">
                                 {project.category}
                              </div>
                           </div>
                           <div className="p-8">
                              <div className="flex justify-between items-start mb-4">
                                 <div>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-1 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                                    <p className="text-zinc-500 text-sm flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</p>
                                 </div>
                                 <ArrowRight className="w-6 h-6 text-zinc-300 group-hover:text-orange-500 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                              </div>
                              <p className="text-zinc-600 line-clamp-2 mb-6">{project.description}</p>
                              <div className="flex gap-4 border-t border-zinc-100 pt-6">
                                 {project.stats.map((stat, i) => (
                                    <div key={i} className="flex-1">
                                       <div className="text-sm font-bold text-zinc-900">{stat.value}</div>
                                       <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">{stat.label}</div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-12 text-center">
                     <button onClick={(e) => handleLink(e, 'toast', 'Loading full project archive...')} className="bg-zinc-900 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors rounded-sm">
                        View All Projects
                     </button>
                  </div>
               </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
               {/* Texture overlay */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

               <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                  <div className="text-center max-w-3xl mx-auto mb-20">
                     <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h4>
                     <h2 className="text-4xl md:text-5xl font-black mb-6">COMPREHENSIVE <br />CONSTRUCTION SERVICES</h2>
                     <p className="text-zinc-400 text-lg">We bring expertise to every phase of the construction process, from initial concept to final closeout.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors group">
                        <Hammer className="w-12 h-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-4">General Contracting</h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                           Traditional bid-build delivery method where we provide competitive pricing and manage the entire construction phase with our trusted network of subcontractors.
                        </p>
                        <a href="#" onClick={(e) => handleLink(e, 'toast', 'Opening GC Service details...')} className="text-orange-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4" /></a>
                     </div>

                     <div className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors group">
                        <Building2 className="w-12 h-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-4">Design-Build</h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                           A streamlined approach where we manage both design and construction, providing a single point of contact to accelerate schedule and control costs.
                        </p>
                        <a href="#" onClick={(e) => handleLink(e, 'toast', 'Opening Design-Build details...')} className="text-orange-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4" /></a>
                     </div>

                     <div className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors group">
                        <Ruler className="w-12 h-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-4">Construction Management</h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                           We act as an extension of the owner's staff, overseeing the entire project lifecycle to ensure your interests are protected at every turn.
                        </p>
                        <a href="#" onClick={(e) => handleLink(e, 'toast', 'Opening CM details...')} className="text-orange-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4" /></a>
                     </div>
                  </div>
               </div>
            </section>

            {/* Safety & Culture */}
            <section id="safety" className="py-24 bg-orange-600 text-white">
               <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                     <img src="https://images.unsplash.com/photo-1535191030420-ff28d220193e?auto=format&fit=crop&q=80&w=800" className="w-full h-auto shadow-2xl border-4 border-white/20" alt="Safety Manager" />
                  </div>
                  <div>
                     <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="w-8 h-8 text-zinc-900" />
                        <span className="font-bold uppercase tracking-widest text-zinc-900">Safety Culture</span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">ZERO ACCIDENTS. <br />NO EXCEPTIONS.</h2>
                     <p className="text-white/90 text-lg mb-8 leading-relaxed">
                        At Construct One, safety isn't just a policyâ€”it's a core value. We believe that every accident is preventable, and we are committed to sending every worker home safely to their families at the end of each day.
                     </p>
                     <ul className="space-y-4 mb-10">
                        {['Daily Safety Briefings', 'Ongoing OSHA Training', 'Subcontractor Safety Prequalification', 'Site-Specific Safety Plans'].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 font-bold">
                              <div className="w-2 h-2 bg-zinc-900 rounded-full"></div> {item}
                           </li>
                        ))}
                     </ul>
                     <button onClick={(e) => handleLink(e, 'toast', 'Downloading Safety Manual...')} className="bg-zinc-900 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-zinc-900 transition-colors rounded-sm flex items-center gap-3">
                        <Download className="w-4 h-4" /> Download Safety Manual
                     </button>
                  </div>
               </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-zinc-100">
               <div className="max-w-5xl mx-auto px-6 text-center">
                  <h2 className="text-4xl font-black text-zinc-900 mb-6">READY TO START YOUR PROJECT?</h2>
                  <p className="text-zinc-600 text-xl mb-10 max-w-2xl mx-auto">
                     Partner with a construction team that delivers on time, on budget, and beyond expectations.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <button onClick={() => setActiveModal('contact')} className="bg-orange-500 text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-zinc-900 transition-colors shadow-lg shadow-orange-500/30">
                        Request a Proposal
                     </button>
                     <button onClick={(e) => handleLink(e, 'toast', 'Calling Headquarters...')} className="bg-white text-zinc-900 border border-zinc-300 px-10 py-5 font-bold uppercase tracking-widest text-sm hover:border-zinc-900 transition-colors">
                        Contact Headquarters
                     </button>
                  </div>
               </div>
            </section>

            {/* Footer */}
            <footer className="bg-zinc-950 text-zinc-500 pt-20 pb-10 text-sm">
               <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                  <div className="col-span-1 md:col-span-1">
                     <div className="flex items-center gap-2 mb-6 text-white">
                        <div className="w-8 h-8 bg-orange-500 flex items-center justify-center font-black text-zinc-900 rounded-sm">C1</div>
                        <span className="text-xl font-bold tracking-tighter">CONSTRUCT<span className="text-orange-500">ONE</span></span>
                     </div>
                     <p className="mb-6 leading-relaxed">
                        Building the future with integrity and excellence. Licensed, bonded, and insured in 48 states.
                     </p>
                     <div className="flex gap-4">
                        <div className="p-2 bg-zinc-900 rounded hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"><Linkedin className="w-5 h-5" /></div>
                        <div className="p-2 bg-zinc-900 rounded hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"><Instagram className="w-5 h-5" /></div>
                        <div className="p-2 bg-zinc-900 rounded hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"><Facebook className="w-5 h-5" /></div>
                     </div>
                  </div>

                  <div>
                     <h4 className="text-white font-bold uppercase tracking-widest mb-6">Markets</h4>
                     <ul className="space-y-3">
                        <li><a href="#" onClick={(e) => handleLink(e, 'scroll', 'projects')} className="hover:text-orange-500 transition-colors">Commercial</a></li>
                        <li><a href="#" onClick={(e) => handleLink(e, 'scroll', 'projects')} className="hover:text-orange-500 transition-colors">Healthcare</a></li>
                        <li><a href="#" onClick={(e) => handleLink(e, 'scroll', 'projects')} className="hover:text-orange-500 transition-colors">Education</a></li>
                        <li><a href="#" onClick={(e) => handleLink(e, 'scroll', 'projects')} className="hover:text-orange-500 transition-colors">Industrial</a></li>
                        <li><a href="#" onClick={(e) => handleLink(e, 'scroll', 'projects')} className="hover:text-orange-500 transition-colors">Infrastructure</a></li>
                     </ul>
                  </div>

                  <div>
                     <h4 className="text-white font-bold uppercase tracking-widest mb-6">Company</h4>
                     <ul className="space-y-3">
                        <li><a href="#" onClick={(e) => handleLink(e, 'scroll', 'about')} className="hover:text-orange-500 transition-colors">Leadership</a></li>
                        <li><a href="#" onClick={(e) => handleLink(e, 'scroll', 'safety')} className="hover:text-orange-500 transition-colors">Safety</a></li>
                        <li><a href="#" onClick={(e) => handleLink(e, 'toast', 'Careers page opening...')} className="hover:text-orange-500 transition-colors flex items-center gap-2">Careers <span className="text-[9px] bg-orange-500 text-white px-1 rounded">HIRING</span></a></li>
                        <li><a href="#" onClick={(e) => handleLink(e, 'toast', 'Newsroom opening...')} className="hover:text-orange-500 transition-colors">Newsroom</a></li>
                     </ul>
                  </div>

                  <div>
                     <h4 className="text-white font-bold uppercase tracking-widest mb-6">Headquarters</h4>
                     <p className="mb-2 text-white">100 Industrial Parkway</p>
                     <p className="mb-6">Chicago, IL 60601</p>
                     <p className="flex items-center gap-2 mb-2"><Phone className="w-4 h-4 text-orange-500" /> (312) 555-0199</p>
                     <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-500" /> info@constructone.demo</p>
                  </div>
               </div>

               <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-wider">
                  <p>Â© 2024 Construct One Inc. All Rights Reserved.</p>
                  <div className="flex gap-8 mt-4 md:mt-0">
                     <a href="#" onClick={(e) => handleLink(e, 'toast', 'Privacy Policy')} className="hover:text-white">Privacy Policy</a>
                     <a href="#" onClick={(e) => handleLink(e, 'toast', 'Terms of Use')} className="hover:text-white">Terms of Use</a>
                     <a href="#" onClick={(e) => handleLink(e, 'toast', 'Sitemap')} className="hover:text-white">Sitemap</a>
                  </div>
               </div>
            </footer>

            {/* --- MODALS --- */}

            {/* Contact/Bid Modal */}
            {activeModal === 'contact' && (
               <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
                  <div className="relative bg-white w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in duration-300 rounded-sm overflow-hidden">
                     <div className="bg-orange-500 p-6 flex justify-between items-center">
                        <h3 className="text-xl font-black text-white uppercase tracking-wider">Request a Proposal</h3>
                        <button onClick={() => setActiveModal(null)}><X className="w-6 h-6 text-white hover:text-zinc-900" /></button>
                     </div>
                     <div className="p-8 md:p-12">
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setNotification("Bid Request Submitted Successfully"); setActiveModal(null); }}>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">First Name</label>
                                 <input type="text" required className="w-full bg-zinc-50 border border-zinc-300 p-3 outline-none focus:border-orange-500 focus:bg-white transition-colors" />
                              </div>
                              <div>
                                 <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Last Name</label>
                                 <input type="text" required className="w-full bg-zinc-50 border border-zinc-300 p-3 outline-none focus:border-orange-500 focus:bg-white transition-colors" />
                              </div>
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Company / Organization</label>
                              <input type="text" required className="w-full bg-zinc-50 border border-zinc-300 p-3 outline-none focus:border-orange-500 focus:bg-white transition-colors" />
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Project Type</label>
                                 <select className="w-full bg-zinc-50 border border-zinc-300 p-3 outline-none focus:border-orange-500 focus:bg-white transition-colors">
                                    <option>Commercial</option>
                                    <option>Industrial</option>
                                    <option>Healthcare</option>
                                    <option>Education</option>
                                    <option>Other</option>
                                 </select>
                              </div>
                              <div>
                                 <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Estimated Budget</label>
                                 <select className="w-full bg-zinc-50 border border-zinc-300 p-3 outline-none focus:border-orange-500 focus:bg-white transition-colors">
                                    <option>$1M - $5M</option>
                                    <option>$5M - $20M</option>
                                    <option>$20M - $50M</option>
                                    <option>$50M+</option>
                                 </select>
                              </div>
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Project Details</label>
                              <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-300 p-3 outline-none focus:border-orange-500 focus:bg-white transition-colors"></textarea>
                           </div>
                           <button type="submit" className="w-full bg-zinc-900 text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors">
                              Submit Request
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            )}

            {/* Project Details Modal */}
            {activeModal === 'project' && selectedProject && (
               <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
                  <div className="relative bg-white w-full max-w-5xl h-[85vh] shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row overflow-hidden rounded-sm">
                     <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full text-zinc-900 hover:text-orange-500 shadow-lg"><X className="w-6 h-6" /></button>

                     <div className="w-full md:w-3/5 h-[40vh] md:h-auto relative">
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                     </div>

                     <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto bg-zinc-50">
                        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold uppercase text-[10px] tracking-widest rounded-sm mb-4">
                           {selectedProject.category}
                        </div>
                        <h2 className="text-3xl font-black text-zinc-900 mb-2">{selectedProject.title}</h2>
                        <p className="text-zinc-500 font-medium flex items-center gap-2 mb-8"><MapPin className="w-4 h-4" /> {selectedProject.location}</p>

                        <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400 mb-3">Project Overview</h4>
                        <p className="text-zinc-600 leading-relaxed mb-8">
                           {selectedProject.description}
                        </p>

                        <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400 mb-3">Key Statistics</h4>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                           {selectedProject.stats.map((stat, i) => (
                              <div key={i} className="bg-white p-4 border border-zinc-200">
                                 <div className="text-xl font-bold text-zinc-900">{stat.value}</div>
                                 <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">{stat.label}</div>
                              </div>
                           ))}
                        </div>

                        <button className="w-full border-2 border-zinc-900 text-zinc-900 py-4 font-bold uppercase tracking-widest text-xs hover:bg-zinc-900 hover:text-white transition-colors">
                           Download Case Study
                        </button>
                     </div>
                  </div>
               </div>
            )}

            {/* Video Modal Placeholder */}
            {activeModal === 'video' && (
               <div className="fixed inset-0 z-[120] bg-black flex items-center justify-center p-4">
                  <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-white hover:text-orange-500"><X className="w-8 h-8" /></button>
                  <div className="w-full max-w-5xl aspect-video bg-zinc-900 flex items-center justify-center relative group cursor-pointer">
                     <img src="https://images.unsplash.com/photo-1590059390237-f8d970f545a9?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                     <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-white fill-current ml-1" />
                     </div>
                     <p className="absolute bottom-8 text-white font-bold uppercase tracking-widest text-sm">Playing: Corporate Showreel 2024</p>
                  </div>
               </div>
            )}

         </div>
         {/* --- CONSTRUCT ONE MOCKUP END --- */}

      </div>
   );
};

export default ConstructOneDemo;
