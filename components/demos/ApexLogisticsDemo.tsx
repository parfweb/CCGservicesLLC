import React, { useState, useEffect } from 'react';
import { X, Search, Globe, Shield, Clock, MapPin, Anchor, Plane, ArrowRight, Menu, CheckCircle2, User, Lock, FileText, Leaf, ChevronRight, Briefcase } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const ApexLogisticsDemo: React.FC<Props> = ({ onClose }) => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState<'idle' | 'loading' | 'found'>('idle');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Auto-hide notification
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleLink = (e: React.MouseEvent<HTMLElement>, action: 'scroll' | 'modal' | 'toast', target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (action === 'scroll') {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action === 'modal') {
      setActiveModal(target);
    } else if (action === 'toast') {
      setNotification(target);
    }
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setTrackingResult('loading');
    setTimeout(() => {
      setTrackingResult('found');
    }, 1500);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveModal(null);
    setNotification("Successfully logged into Partner Portal");
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500 font-sans">

      {/* Demo Controls Overlay */}
      <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end gap-4">
        {notification && (
          <div className="bg-slate-900 text-white px-6 py-3 rounded-lg shadow-xl animate-in slide-in-from-right fade-in flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            {notification}
          </div>
        )}
        <div className="bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-white/10">
          <span className="text-sm font-medium border-r border-white/20 pr-4">CCG SiteSpark Case Study</span>
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-white transition-colors"
          >
            Close Preview <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* --- MERIDIAN MOCKUP START --- */}
      <div className="bg-white text-slate-900 min-h-screen font-inter selection:bg-amber-100 selection:text-amber-900">

        {/* Top Bar */}
        <div className="bg-slate-900 text-slate-400 py-2.5 px-6 text-[11px] font-medium tracking-wide border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex gap-6">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> System Status: Operational</span>
              <span className="hidden sm:inline">Global Operations: +1 (888) 234-5678</span>
            </div>
            <div className="flex gap-6">
              <a href="#" onClick={(e) => handleLink(e, 'modal', 'login')} className="hover:text-white transition-colors cursor-pointer">Partner Login</a>
              <a href="#" onClick={(e) => handleLink(e, 'modal', 'careers')} className="hover:text-white transition-colors cursor-pointer">Careers</a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-40 transition-all">
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={(e) => handleLink(e, 'scroll', 'hero')}>
              <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-lg group-hover:bg-amber-500 transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <div className="leading-tight">
                <h1 className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-amber-500 transition-colors">MERIDIAN</h1>
                <p className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Global Logistics</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10 font-bold text-sm text-slate-600">
              <a href="#services" onClick={(e) => handleLink(e, 'scroll', 'services')} className="hover:text-amber-600 transition-colors">Services</a>
              <a href="#network" onClick={(e) => handleLink(e, 'scroll', 'network')} className="hover:text-amber-600 transition-colors">Network</a>
              <a href="#technology" onClick={(e) => handleLink(e, 'scroll', 'technology')} className="hover:text-amber-600 transition-colors">Technology</a>
              <a href="#" onClick={(e) => handleLink(e, 'modal', 'about')} className="hover:text-amber-600 transition-colors">Company</a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={(e) => handleLink(e, 'scroll', 'contact')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl absolute w-full left-0 animate-in slide-in-from-top-2">
              <a href="#services" onClick={(e) => handleLink(e, 'scroll', 'services')} className="block font-bold text-slate-700 py-2 border-b border-slate-50">Services</a>
              <a href="#network" onClick={(e) => handleLink(e, 'scroll', 'network')} className="block font-bold text-slate-700 py-2 border-b border-slate-50">Network</a>
              <a href="#technology" onClick={(e) => handleLink(e, 'scroll', 'technology')} className="block font-bold text-slate-700 py-2 border-b border-slate-50">Technology</a>
              <a href="#" onClick={(e) => handleLink(e, 'modal', 'about')} className="block font-bold text-slate-700 py-2 border-b border-slate-50">Company</a>
              <div className="pt-2 flex flex-col gap-2">
                <button onClick={(e) => handleLink(e, 'modal', 'login')} className="w-full text-left py-2 text-slate-500 text-sm font-medium">Partner Login</button>
                <button onClick={(e) => handleLink(e, 'scroll', 'contact')} className="w-full bg-amber-500 text-white py-3 rounded-lg font-bold">Get a Quote</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative min-h-[700px] flex items-center bg-slate-900 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000"
              alt="Container Port at Night"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-amber-400 text-xs font-bold tracking-wider uppercase">Leader in Global Freight</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Precision in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-100">Every Shipment.</span>
              </h1>

              <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed">
                We deliver certainty in an uncertain world. Advanced logistics solutions tailored for the modern enterprise supply chain.
              </p>

              {/* Interactive Tracking Widget */}
              <div className="bg-white rounded-xl p-2 shadow-2xl max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 flex items-center px-4 h-14 bg-slate-50 rounded-lg border border-slate-200 focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 transition-all">
                    <Search className="w-5 h-5 text-slate-400 mr-3" />
                    <input
                      type="text"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      placeholder="Enter Tracking ID (e.g. MER-8821)"
                      className="w-full bg-transparent outline-none text-slate-900 font-semibold placeholder:text-slate-400"
                    />
                  </div>
                  <button type="submit" className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shrink-0">
                    Track Cargo <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Tracking Result Simulation */}
                {trackingResult !== 'idle' && (
                  <div className="mt-2 p-4 bg-slate-50 rounded-lg border border-slate-100">
                    {trackingResult === 'loading' ? (
                      <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                        <div className="w-4 h-4 border-2 border-slate-300 border-t-amber-500 rounded-full animate-spin"></div>
                        Locating shipment...
                      </div>
                    ) : (
                      <div className="animate-in fade-in zoom-in duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Status</div>
                            <div className="text-green-600 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> In Transit - On Time</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">ETA</div>
                            <div className="text-slate-900 font-bold">Oct 24, 14:00</div>
                          </div>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-amber-500 h-full w-[75%]"></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-2">
                          <span>Shanghai</span>
                          <span>Los Angeles</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-amber-500 text-slate-900 py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black">20+</div>
              <div className="text-sm font-bold leading-tight">Years of<br />Excellence</div>
            </div>
            <div className="w-px bg-slate-900/10 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black">150</div>
              <div className="text-sm font-bold leading-tight">Countries<br />Served</div>
            </div>
            <div className="w-px bg-slate-900/10 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black">99%</div>
              <div className="text-sm font-bold leading-tight">On-Time<br />Delivery</div>
            </div>
            <div className="w-px bg-slate-900/10 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black">24/7</div>
              <div className="text-sm font-bold leading-tight">Live<br />Support</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Logistics Solutions</h2>
              <p className="text-slate-600 text-lg">From complex supply chain management to simple freight forwarding, we handle it all with precision.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all group cursor-pointer" onClick={(e) => handleLink(e, 'modal', 'ocean')}>
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Anchor className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ocean Freight</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">Cost-effective FCL and LCL solutions for global trade. We connect major ports with reliable scheduling.</p>
                <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Details <ArrowRight className="w-4 h-4" /></span>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all group cursor-pointer" onClick={(e) => handleLink(e, 'modal', 'air')}>
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Plane className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Air Expedited</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">When time is critical, our air cargo network ensures your high-value goods arrive on schedule.</p>
                <span className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Details <ArrowRight className="w-4 h-4" /></span>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all group cursor-pointer" onClick={(e) => handleLink(e, 'modal', 'customs')}>
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Customs Brokerage</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">Navigate complex international regulations with ease. Our licensed brokers handle the paperwork.</p>
                <span className="text-emerald-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">View Details <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>
          </div>
        </section>

        {/* Network / Tech Section */}
        <section id="network" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 opacity-10 blur-[100px] rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4">Global Network</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Connecting Your Business to the World</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our strategic hubs in over 50 countries allow for seamless transit and warehousing. We combine local expertise with global infrastructure.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Strategic Hubs</h4>
                    <p className="text-slate-400 text-sm">Located near all major ports and airports for rapid transfer.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <Clock className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Real-Time Visibility</h4>
                    <p className="text-slate-400 text-sm">Track your inventory from factory floor to final destination.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="technology" className="relative scroll-mt-32">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                alt="Global Network Map"
                className="rounded-2xl shadow-2xl border border-slate-700"
              />

              {/* Floating Tech Card */}
              <div className="absolute -bottom-10 -left-10 bg-white text-slate-900 p-6 rounded-xl shadow-2xl max-w-xs border-l-4 border-amber-500 hidden md:block">
                <h4 className="font-bold text-lg mb-2">MeridianOSâ„¢</h4>
                <p className="text-slate-500 text-sm mb-4">Our proprietary cloud platform manages all your logistics data in one place.</p>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Live Sync Active
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Streamline Your Logistics?</h2>
            <p className="text-slate-600 text-lg mb-10">Get a competitive quote today and experience the Meridian difference.</p>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-left max-w-2xl mx-auto shadow-lg">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setNotification("Quote request sent!"); setTrackingId(""); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Origin</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none" placeholder="City or Port" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Destination</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none" placeholder="City or Port" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none" placeholder="you@company.com" />
                </div>
                <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-colors shadow-lg">Request Quote</button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="footer" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 text-sm">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 text-white mb-6">
                <Globe className="w-6 h-6" />
                <span className="font-black text-lg tracking-tight">MERIDIAN</span>
              </div>
              <p className="mb-6">Global logistics partner for the world's leading brands.</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => handleLink(e, 'modal', 'ocean')} className="hover:text-amber-500 transition-colors">Ocean Freight</a></li>
                <li><a href="#" onClick={(e) => handleLink(e, 'modal', 'air')} className="hover:text-amber-500 transition-colors">Air Freight</a></li>
                <li><a href="#" onClick={(e) => handleLink(e, 'modal', 'customs')} className="hover:text-amber-500 transition-colors">Customs Brokerage</a></li>
                <li><a href="#" onClick={(e) => handleLink(e, 'scroll', 'network')} className="hover:text-amber-500 transition-colors">Warehousing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => handleLink(e, 'modal', 'about')} className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" onClick={(e) => handleLink(e, 'modal', 'sustainability')} className="hover:text-amber-500 transition-colors">Sustainability</a></li>
                <li><a href="#" onClick={(e) => handleLink(e, 'modal', 'careers')} className="hover:text-amber-500 transition-colors">Careers</a></li>
                <li><a href="#" onClick={(e) => handleLink(e, 'modal', 'news')} className="hover:text-amber-500 transition-colors">Newsroom</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>1-800-MERIDIAN</li>
                <li>hello@meridian-global.demo</li>
                <li>1200 Logistics Blvd, Suite 100<br />Los Angeles, CA 90012</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p>Â© 2024 Meridian Global Logistics. Demo Project.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" onClick={(e) => handleLink(e, 'modal', 'privacy')} className="hover:text-white">Privacy</a>
              <a href="#" onClick={(e) => handleLink(e, 'modal', 'terms')} className="hover:text-white">Terms</a>
              <a href="#" onClick={(e) => handleLink(e, 'scroll', 'hero')} className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </footer>

        {/* --- MODALS --- */}
        {activeModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
            <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 capitalize flex items-center gap-2">
                  {activeModal === 'login' && <User className="w-5 h-5" />}
                  {activeModal === 'privacy' && <Lock className="w-5 h-5" />}
                  {activeModal === 'terms' && <FileText className="w-5 h-5" />}
                  {activeModal === 'about' && <Globe className="w-5 h-5" />}
                  {activeModal === 'sustainability' && <Leaf className="w-5 h-5" />}
                  {activeModal === 'careers' && <Briefcase className="w-5 h-5" />}
                  {activeModal.replace('-', ' ')}
                </h3>
                <button onClick={() => setActiveModal(null)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {/* Login Modal */}
                {activeModal === 'login' && (
                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <p className="text-slate-500 mb-4">Access the Meridian Partner Portal to manage shipments and view invoices.</p>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Partner ID / Email</label>
                      <input type="text" autoFocus className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Password</label>
                      <input type="password" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800">Sign In</button>
                  </form>
                )}

                {/* Careers Modal */}
                {activeModal === 'careers' && (
                  <div className="space-y-4">
                    <p className="text-slate-500 mb-4">Join our team of global logistics experts. We are currently hiring for the following roles:</p>
                    {[
                      { title: "Supply Chain Analyst", loc: "Los Angeles, CA" },
                      { title: "Freight Forwarder", loc: "Shanghai, CN" },
                      { title: "Customs Specialist", loc: "Rotterdam, NL" }
                    ].map((job, idx) => (
                      <div key={idx} className="p-4 border border-slate-100 rounded-lg hover:border-amber-200 transition-colors flex justify-between items-center group cursor-pointer">
                        <div>
                          <h4 className="font-bold text-slate-900">{job.title}</h4>
                          <p className="text-sm text-slate-500">{job.loc}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500" />
                      </div>
                    ))}
                    <button className="w-full mt-4 text-center text-amber-600 font-bold text-sm hover:underline">View all 12 open positions</button>
                  </div>
                )}

                {/* Service Details Modal */}
                {(activeModal === 'ocean' || activeModal === 'air' || activeModal === 'customs') && (
                  <div className="space-y-4">
                    <div className="w-full h-40 bg-slate-100 rounded-xl mb-4 overflow-hidden">
                      <img
                        src={
                          activeModal === 'ocean' ? "https://images.unsplash.com/photo-1494412651409-ae1e21b164a7?auto=format&fit=crop&q=80&w=800" :
                            activeModal === 'air' ? "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" :
                              "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
                        }
                        className="w-full h-full object-cover"
                        alt="Service"
                      />
                    </div>
                    <h4 className="font-bold text-lg">Premium {activeModal.charAt(0).toUpperCase() + activeModal.slice(1)} Services</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Meridian Global offers industry-leading solutions for {activeModal} logistics. Our dedicated team ensures compliance, speed, and visibility for every shipment.
                    </p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500" /> Real-time tracking</li>
                      <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500" /> Dedicated account manager</li>
                      <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 Support access</li>
                    </ul>
                    <button onClick={() => { setActiveModal(null); handleLink({ preventDefault: () => { } } as any, 'scroll', 'contact'); }} className="w-full bg-amber-500 text-white font-bold py-3 rounded-lg mt-6">Get Specific Quote</button>
                  </div>
                )}

                {/* Generic Info Modals */}
                {(activeModal === 'about' || activeModal === 'sustainability' || activeModal === 'news' || activeModal === 'privacy' || activeModal === 'terms') && (
                  <div className="prose prose-sm prose-slate">
                    <p>This is a demonstration of the <strong>Meridian Global</strong> website structure.</p>
                    <p>In a production environment, this page would contain detailed information regarding {activeModal}.</p>
                    <p>Meridian Global represents the pinnacle of logistics website designâ€”clean, authoritative, and conversion-focused.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
      {/* --- MERIDIAN MOCKUP END --- */}

    </div>
  );
};

export default ApexLogisticsDemo;
