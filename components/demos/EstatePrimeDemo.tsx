import React, { useState, useEffect } from 'react';
import { X, Search, MapPin, BedDouble, Bath, Square, Heart, Video, Phone, Mail, ArrowRight, Menu, CheckCircle2, ChevronRight, PlayCircle, Star } from 'lucide-react';

interface Props {
  onClose: () => void;
}

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  tag?: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "The Obsidian Villa",
    price: "$12,500,000",
    location: "Beverly Hills, CA",
    beds: 6,
    baths: 7.5,
    sqft: "8,200",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600",
    tag: "Exclusive"
  },
  {
    id: 2,
    title: "Azure Coast Penthouse",
    price: "$8,950,000",
    location: "Miami Beach, FL",
    beds: 4,
    baths: 4,
    sqft: "4,500",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
    tag: "New Listing"
  },
  {
    id: 3,
    title: "Highland Estate",
    price: "$15,200,000",
    location: "Aspen, CO",
    beds: 8,
    baths: 9,
    sqft: "12,000",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 4,
    title: "Soho Loft Conversion",
    price: "$6,400,000",
    location: "New York, NY",
    beds: 3,
    baths: 2.5,
    sqft: "3,100",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 5,
    title: "Modernist Glass Home",
    price: "$9,750,000",
    location: "Malibu, CA",
    beds: 5,
    baths: 6,
    sqft: "6,000",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 6,
    title: "Historic French Manor",
    price: "$18,000,000",
    location: "Greenwich, CT",
    beds: 10,
    baths: 12,
    sqft: "15,000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600"
  }
];

const EstatePrimeDemo: React.FC<Props> = ({ onClose }) => {
  const [activeModal, setActiveModal] = useState<'details' | 'contact' | 'tour' | 'menu' | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      const modalElement = document.getElementById('estate-demo-container');
      if (modalElement && modalElement.scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    const container = document.getElementById('estate-demo-container');
    if (container) container.addEventListener('scroll', handleScroll);
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-hide notification
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleLink = (e: React.MouseEvent<HTMLElement>, action: 'scroll' | 'modal' | 'toast', target: string) => {
    e.preventDefault();
    if (action === 'scroll') {
      const element = document.getElementById(target);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'modal') {
       if (target === 'menu') setActiveModal('menu');
       else if (target === 'contact') setActiveModal('contact');
    } else if (action === 'toast') {
        setNotification(target);
    }
    if (target !== 'menu') setActiveModal(null); // Close menu on click
  };

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(prev => prev.filter(fid => fid !== id));
      setNotification("Removed from favorites");
    } else {
      setFavorites(prev => [...prev, id]);
      setNotification("Saved to favorites");
    }
  };

  const openProperty = (property: Property) => {
    setSelectedProperty(property);
    setActiveModal('details');
  };

  return (
    <div id="estate-demo-container" className="fixed inset-0 z-[100] bg-stone-50 overflow-y-auto animate-in slide-in-from-bottom duration-500 font-sans text-stone-800">
      
      {/* Demo Controls Overlay */}
      <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end gap-4">
        {notification && (
            <div className="bg-stone-900 text-white px-6 py-3 rounded-none shadow-xl animate-in slide-in-from-right fade-in flex items-center gap-3 border-l-4 border-amber-500">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span className="font-serif tracking-wide">{notification}</span>
            </div>
        )}
        <div className="bg-white/90 backdrop-blur-md text-stone-900 px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-stone-200">
          <span className="text-xs font-bold uppercase tracking-widest border-r border-stone-300 pr-4">ParfWeb Case Study</span>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 hover:text-stone-900 transition-colors"
          >
            Close Preview <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* --- ESTATE PRIME MOCKUP START --- */}
      <div className="min-h-screen font-sans selection:bg-amber-200 selection:text-stone-900">
        
        {/* Navbar */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-stone-900 shadow-md py-4' : 'bg-transparent text-white py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-12">
               <div className="text-2xl font-serif font-bold tracking-widest cursor-pointer" onClick={(e) => handleLink(e, 'scroll', 'hero')}>
                 ESTATE PRIME
               </div>
               <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
                 <a href="#featured" onClick={(e) => handleLink(e, 'scroll', 'featured')} className="hover:text-amber-500 transition-colors">Buy</a>
                 <a href="#" onClick={(e) => handleLink(e, 'toast', 'Rentals coming soon')} className="hover:text-amber-500 transition-colors">Rent</a>
                 <a href="#sell" onClick={(e) => handleLink(e, 'scroll', 'sell')} className="hover:text-amber-500 transition-colors">Sell</a>
                 <a href="#agents" onClick={(e) => handleLink(e, 'scroll', 'agents')} className="hover:text-amber-500 transition-colors">Agents</a>
               </div>
            </div>

            <div className="flex items-center gap-6">
              <button onClick={(e) => handleLink(e, 'toast', 'Search enabled')} className="hover:text-amber-500 transition-colors"><Search className="w-5 h-5" /></button>
              <button onClick={() => setActiveModal('contact')} className={`hidden md:block px-6 py-2 border ${isScrolled ? 'border-stone-900 hover:bg-stone-900 hover:text-white' : 'border-white hover:bg-white hover:text-stone-900'} transition-all text-xs font-bold uppercase tracking-widest`}>
                Concierge
              </button>
              <button className="md:hidden" onClick={() => setActiveModal('menu')}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {activeModal === 'menu' && (
          <div className="fixed inset-0 bg-stone-900 z-[60] flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-top duration-300">
             <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-white"><X className="w-8 h-8" /></button>
             <a href="#featured" onClick={(e) => handleLink(e, 'scroll', 'featured')} className="text-3xl font-serif text-white hover:text-amber-500">Buy</a>
             <a href="#" onClick={(e) => handleLink(e, 'toast', 'Rentals coming soon')} className="text-3xl font-serif text-white hover:text-amber-500">Rent</a>
             <a href="#sell" onClick={(e) => handleLink(e, 'scroll', 'sell')} className="text-3xl font-serif text-white hover:text-amber-500">Sell</a>
             <a href="#agents" onClick={(e) => handleLink(e, 'scroll', 'agents')} className="text-3xl font-serif text-white hover:text-amber-500">Agents</a>
             <button onClick={() => setActiveModal('contact')} className="px-8 py-3 bg-amber-500 text-stone-900 font-bold uppercase tracking-widest mt-8">Contact Concierge</button>
          </div>
        )}

        {/* Hero Section */}
        <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center">
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover" 
               alt="Luxury Villa" 
             />
             <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-20">
             <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
               Discover Your <br/><span className="italic text-amber-400">Sanctuary</span>
             </h1>
             <p className="text-lg md:text-xl font-light tracking-wide mb-12 opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
               Curated luxury properties in the world's most coveted locations.
             </p>

             {/* Search Box */}
             <div className="bg-white p-2 md:p-4 max-w-2xl mx-auto flex flex-col md:flex-row gap-2 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <div className="flex-1 flex items-center px-4 h-12 border-b md:border-b-0 md:border-r border-stone-100">
                   <MapPin className="w-5 h-5 text-stone-400 mr-3" />
                   <input 
                    type="text" 
                    placeholder="Location, Zip, or Address" 
                    className="w-full outline-none text-stone-800 placeholder:text-stone-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                   />
                </div>
                <button 
                  onClick={(e) => { e.preventDefault(); handleLink(e, 'scroll', 'featured'); }}
                  className="bg-stone-900 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors"
                >
                  Search
                </button>
             </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section id="featured" className="py-24 bg-stone-50">
           <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-end mb-12">
                 <div>
                    <h2 className="text-4xl font-serif text-stone-900 mb-3">Exclusive Collection</h2>
                    <p className="text-stone-500 font-light">Handpicked properties for the discerning buyer.</p>
                 </div>
                 <button className="hidden md:flex items-center gap-2 text-stone-900 font-bold uppercase tracking-widest text-xs hover:text-amber-600 transition-colors">
                    View All <ArrowRight className="w-4 h-4" />
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                 {properties.map((prop) => (
                    <div 
                      key={prop.id} 
                      className="group cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-300 ease-out"
                      onClick={() => openProperty(prop)}
                    >
                       <div className="relative aspect-[4/3] overflow-hidden">
                          <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <span className="bg-white/90 text-stone-900 px-6 py-3 uppercase tracking-widest text-xs font-bold backdrop-blur-sm">View Details</span>
                          </div>
                          <button 
                            onClick={(e) => toggleFavorite(e, prop.id)}
                            className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white transition-colors"
                          >
                            <Heart className={`w-5 h-5 ${favorites.includes(prop.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                          </button>
                          {prop.tag && (
                            <span className="absolute top-4 left-4 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                              {prop.tag}
                            </span>
                          )}
                       </div>
                       <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                             <h3 className="text-xl font-serif text-stone-900">{prop.title}</h3>
                             <span className="text-lg font-bold text-amber-600">{prop.price}</span>
                          </div>
                          <p className="text-stone-500 text-sm mb-6 flex items-center gap-1"><MapPin className="w-3 h-3"/> {prop.location}</p>
                          
                          <div className="flex items-center justify-between text-stone-400 text-sm border-t border-stone-100 pt-4">
                             <div className="flex items-center gap-2"><BedDouble className="w-4 h-4"/> {prop.beds} Beds</div>
                             <div className="flex items-center gap-2"><Bath className="w-4 h-4"/> {prop.baths} Baths</div>
                             <div className="flex items-center gap-2"><Square className="w-4 h-4"/> {prop.sqft} sqft</div>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
              
              <div className="mt-12 text-center md:hidden">
                 <button className="bg-white border border-stone-200 px-8 py-3 text-stone-900 font-bold uppercase tracking-widest text-xs hover:bg-stone-900 hover:text-white transition-colors">
                    Load More Properties
                 </button>
              </div>
           </div>
        </section>

        {/* Sell / Valuation Section */}
        <section id="sell" className="py-24 bg-stone-900 text-white relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                 <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Sell with Estate Prime</span>
                 <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Unlock the True Value <br/>of Your Property</h2>
                 <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                   Our global network of high-net-worth individuals and targeted marketing strategies ensures your property receives the attention it deserves.
                 </p>
                 <ul className="space-y-4 mb-10">
                    {['Professional Staging & Photography', 'Global Digital Marketing Campaigns', 'Private Showings for Qualified Buyers', 'Market Analysis & Valuation'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-300">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> {item}
                      </li>
                    ))}
                 </ul>
                 <button onClick={() => setActiveModal('contact')} className="bg-amber-500 text-stone-900 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                   Request Valuation
                 </button>
              </div>
              <div className="relative">
                 <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000" alt="Interior" className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl hidden md:block max-w-xs">
                    <p className="text-stone-900 font-serif text-xl italic">"Estate Prime sold our home in record time for 15% over asking."</p>
                    <p className="text-stone-500 text-xs mt-4 uppercase tracking-widest font-bold">- The Vanderbilt Family</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Agents / Trust */}
        <section id="agents" className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-serif text-stone-900 mb-16">Meet Our Top Agents</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { name: "Eleanor Rigby", role: "Senior Broker", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
                   { name: "James Sterling", role: "Luxury Estate Specialist", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
                   { name: "Sarah Connor", role: "International Sales", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
                 ].map((agent, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-2 border-stone-100 group-hover:border-amber-500 transition-colors">
                         <img src={agent.img} alt={agent.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-bold text-stone-900">{agent.name}</h3>
                      <p className="text-stone-500 text-sm uppercase tracking-widest mt-1 mb-4">{agent.role}</p>
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="p-2 bg-stone-100 rounded-full hover:bg-stone-900 hover:text-white transition-colors" onClick={() => handleLink({ preventDefault: () => {} } as any, 'toast', `Emailing ${agent.name}...`)}><Mail className="w-4 h-4"/></button>
                         <button className="p-2 bg-stone-100 rounded-full hover:bg-stone-900 hover:text-white transition-colors" onClick={() => handleLink({ preventDefault: () => {} } as any, 'toast', `Calling ${agent.name}...`)}><Phone className="w-4 h-4"/></button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
              <div className="col-span-1 md:col-span-1">
                 <div className="text-2xl font-serif font-bold text-white mb-6">ESTATE PRIME</div>
                 <p className="leading-relaxed mb-6">Redefining luxury real estate with an unwavering commitment to quality and service.</p>
                 <div className="flex gap-4">
                    <div className="w-8 h-8 bg-stone-900 flex items-center justify-center text-white hover:bg-amber-600 cursor-pointer transition-colors">IG</div>
                    <div className="w-8 h-8 bg-stone-900 flex items-center justify-center text-white hover:bg-amber-600 cursor-pointer transition-colors">FB</div>
                    <div className="w-8 h-8 bg-stone-900 flex items-center justify-center text-white hover:bg-amber-600 cursor-pointer transition-colors">LI</div>
                 </div>
              </div>
              
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6">Discover</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-amber-500 transition-colors">New Listings</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Open Houses</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Price Reductions</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Sold Properties</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Our Story</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Press & Media</a></li>
                  <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h4>
                <ul className="space-y-3">
                  <li>+1 (800) 555-0199</li>
                  <li>concierge@estateprime.demo</li>
                  <li>100 Luxury Lane, Suite 1<br/>Beverly Hills, CA 90210</li>
                </ul>
              </div>
           </div>
           <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-900 flex justify-between items-center text-xs text-stone-600 uppercase tracking-wider">
              <p>© 2024 Estate Prime Realty.</p>
              <div className="flex gap-6">
                 <a href="#" className="hover:text-white">Privacy</a>
                 <a href="#" className="hover:text-white">Terms</a>
              </div>
           </div>
        </footer>

        {/* --- MODALS --- */}
        
        {/* Contact Modal */}
        {activeModal === 'contact' && (
           <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
              <div className="relative bg-white w-full max-w-lg p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
                 <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-stone-400 hover:text-stone-900"><X className="w-6 h-6"/></button>
                 <h3 className="text-3xl font-serif text-stone-900 mb-2">Concierge Service</h3>
                 <p className="text-stone-500 mb-8">Tell us what you're looking for, and we'll curate a list of properties for you.</p>
                 <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setNotification("Request sent to Concierge"); setActiveModal(null); }}>
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Name</label>
                       <input type="text" className="w-full border-b border-stone-200 py-2 outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" autoFocus/>
                    </div>
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Email</label>
                       <input type="email" className="w-full border-b border-stone-200 py-2 outline-none focus:border-amber-500 transition-colors" placeholder="john@example.com"/>
                    </div>
                     <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Message</label>
                       <textarea className="w-full border-b border-stone-200 py-2 outline-none focus:border-amber-500 transition-colors resize-none" rows={3} placeholder="I'm interested in..." />
                    </div>
                    <button className="w-full bg-stone-900 text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors mt-4">Send Request</button>
                 </form>
              </div>
           </div>
        )}

        {/* Property Details Modal */}
        {activeModal === 'details' && selectedProperty && (
           <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8">
              <div className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
              <div className="relative bg-white w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row overflow-hidden">
                 <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur rounded-full text-stone-900 hover:bg-white"><X className="w-6 h-6"/></button>
                 
                 {/* Image Side */}
                 <div className="w-full md:w-3/5 h-[40vh] md:h-auto relative bg-stone-200">
                    <img src={selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-6 left-6 flex gap-4">
                       <button onClick={() => setActiveModal('tour')} className="flex items-center gap-2 bg-white/90 backdrop-blur text-stone-900 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-colors">
                          <Video className="w-4 h-4" /> Virtual Tour
                       </button>
                    </div>
                 </div>

                 {/* Details Side */}
                 <div className="w-full md:w-2/5 p-8 overflow-y-auto bg-white flex flex-col">
                    <div className="mb-auto">
                      <span className="text-amber-600 font-bold text-xl block mb-2">{selectedProperty.price}</span>
                      <h2 className="text-3xl font-serif text-stone-900 mb-2">{selectedProperty.title}</h2>
                      <p className="text-stone-500 flex items-center gap-2 mb-6"><MapPin className="w-4 h-4"/> {selectedProperty.location}</p>
                      
                      <div className="grid grid-cols-3 gap-4 border-y border-stone-100 py-6 mb-6">
                         <div className="text-center">
                            <span className="block font-bold text-stone-900 text-xl">{selectedProperty.beds}</span>
                            <span className="text-xs text-stone-400 uppercase tracking-widest">Beds</span>
                         </div>
                         <div className="text-center border-l border-stone-100">
                            <span className="block font-bold text-stone-900 text-xl">{selectedProperty.baths}</span>
                            <span className="text-xs text-stone-400 uppercase tracking-widest">Baths</span>
                         </div>
                         <div className="text-center border-l border-stone-100">
                            <span className="block font-bold text-stone-900 text-xl">{selectedProperty.sqft}</span>
                            <span className="text-xs text-stone-400 uppercase tracking-widest">Sqft</span>
                         </div>
                      </div>

                      <div className="space-y-4 mb-8">
                         <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs">Description</h4>
                         <p className="text-stone-600 text-sm leading-relaxed">
                            Experience the epitome of luxury living in this stunning residence. 
                            Featuring floor-to-ceiling windows, a state-of-the-art chef's kitchen, 
                            and expansive outdoor entertaining spaces with breathtaking views. 
                            Every detail has been meticulously curated for the most discerning buyer.
                         </p>
                      </div>
                    </div>

                    <div className="space-y-3 mt-4">
                       <button onClick={() => { setActiveModal('contact'); }} className="w-full bg-stone-900 text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors">
                          Schedule Private Viewing
                       </button>
                       <button onClick={() => { setActiveModal('contact'); }} className="w-full border border-stone-200 text-stone-900 py-4 font-bold uppercase tracking-widest text-xs hover:bg-stone-50 transition-colors">
                          Request Floor Plan
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        )}

        {/* Virtual Tour Mockup */}
        {activeModal === 'tour' && (
           <div className="fixed inset-0 z-[130] bg-black flex flex-col items-center justify-center animate-in fade-in duration-500">
               <button onClick={() => setActiveModal('details')} className="absolute top-6 right-6 text-white hover:text-amber-500 z-50 flex items-center gap-2">
                 <span className="text-xs uppercase font-bold tracking-widest">Exit Tour</span> <X className="w-6 h-6"/>
               </button>
               
               <div className="relative w-full h-full max-w-6xl max-h-[80vh] bg-stone-900 flex items-center justify-center overflow-hidden">
                   {/* Simulated 360 viewer */}
                   <img 
                      src={selectedProperty?.image} 
                      className="w-full h-full object-cover opacity-50 scale-110 blur-sm" 
                      alt="Background" 
                   />
                   <div className="absolute inset-0 flex items-center justify-center flex-col gap-6">
                      <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center animate-pulse">
                         <PlayCircle className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-white font-serif text-2xl">Loading Virtual Environment...</p>
                      <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                         <div className="h-full bg-amber-500 w-1/2 animate-[pulse_2s_infinite]"></div>
                      </div>
                      <p className="text-stone-400 text-xs uppercase tracking-widest">Matterport 3D Technology</p>
                   </div>
               </div>
           </div>
        )}

      </div>
      {/* --- ESTATE PRIME MOCKUP END --- */}

    </div>
  );
};

export default EstatePrimeDemo;