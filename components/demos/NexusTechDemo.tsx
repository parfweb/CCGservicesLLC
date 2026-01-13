import React, { useState, useEffect } from 'react';
import { X, Activity, Server, Shield, Zap, Globe, Cpu, ChevronRight, Play, Terminal, Check, BarChart3, Database, Lock, Menu, ArrowRight, CheckCircle2, Github, Twitter, FileText } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const NexusTechDemo: React.FC<Props> = ({ onClose }) => {
  const [activeModal, setActiveModal] = useState<'login' | 'signup' | 'demo' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "> System initialized...",
    "> Connecting to global nodes...",
    "> Verifying encryption keys..."
  ]);
  const [simulatedLoad, setSimulatedLoad] = useState(42);

  // Auto-hide notification
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Simulate server load fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedLoad(prev => Math.min(98, Math.max(12, prev + (Math.random() * 10 - 5))));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulate terminal output
  useEffect(() => {
    const messages = [
      "> Node US-EAST-1 connected (12ms)",
      "> Node EU-WEST-2 connected (24ms)",
      "> Database shard rebalancing...",
      "> Traffic spike detected in AP-SOUTH",
      "> Auto-scaling triggered: +2 instances",
      "> Threat neutralized: IP 192.168.x.x",
      "> Optimization complete. Latency -15%",
      "> Backup snapshot created successfully"
    ];

    let i = 0;
    const interval = setInterval(() => {
      setTerminalLines(prev => {
        const newLines = [...prev, messages[i % messages.length]];
        if (newLines.length > 6) newLines.shift();
        return newLines;
      });
      i++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleLink = (e: React.MouseEvent<HTMLElement>, action: 'scroll' | 'modal' | 'toast', target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (action === 'scroll') {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action === 'modal') {
      setActiveModal(target as any);
    } else if (action === 'toast') {
      setNotification(target);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-y-auto animate-in slide-in-from-bottom duration-500 font-sans text-slate-200">

      {/* Demo Controls Overlay */}
      <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end gap-4">
        {notification && (
          <div className="bg-[#1e1e2e] border border-indigo-500/30 text-white px-6 py-3 rounded-lg shadow-2xl animate-in slide-in-from-right fade-in flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="font-medium text-sm">{notification}</span>
          </div>
        )}
        <div className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-white/20">
          <span className="text-sm font-medium border-r border-white/20 pr-4">ParfWeb Case Study</span>
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-white transition-colors"
          >
            Close Preview <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* --- NEXUS MOCKUP START --- */}
      <div className="bg-[#0B0C15] min-h-screen font-inter selection:bg-indigo-500/30 selection:text-indigo-200">

        {/* Navbar */}
        <nav className="fixed w-full z-50 bg-[#0B0C15]/80 backdrop-blur-lg border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={(e) => handleLink(e, 'scroll', 'nexus-hero')}>
              <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Nexus<span className="text-indigo-400">Cloud</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#features" onClick={(e) => handleLink(e, 'scroll', 'nexus-features')} className="hover:text-white transition-colors">Features</a>
              <a href="#integrations" onClick={(e) => handleLink(e, 'scroll', 'nexus-integrations')} className="hover:text-white transition-colors">Integrations</a>
              <a href="#pricing" onClick={(e) => handleLink(e, 'scroll', 'nexus-pricing')} className="hover:text-white transition-colors">Pricing</a>
              <a href="#" onClick={(e) => handleLink(e, 'toast', 'Opening documentation...')} className="hover:text-white transition-colors">Docs</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button onClick={(e) => handleLink(e, 'modal', 'login')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Log in</button>
              <button onClick={(e) => handleLink(e, 'modal', 'signup')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/25">Start Free Trial</button>
            </div>

            <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#13141f] border-b border-white/5 p-4 space-y-4 animate-in slide-in-from-top-2 absolute w-full left-0 top-20 shadow-2xl">
              <a href="#features" onClick={(e) => handleLink(e, 'scroll', 'nexus-features')} className="block text-slate-300 py-2 border-b border-white/5">Features</a>
              <a href="#integrations" onClick={(e) => handleLink(e, 'scroll', 'nexus-integrations')} className="block text-slate-300 py-2 border-b border-white/5">Integrations</a>
              <a href="#pricing" onClick={(e) => handleLink(e, 'scroll', 'nexus-pricing')} className="block text-slate-300 py-2 border-b border-white/5">Pricing</a>
              <a href="#" onClick={(e) => handleLink(e, 'toast', 'Opening documentation...')} className="block text-slate-300 py-2 border-b border-white/5">Docs</a>
              <div className="pt-2 flex flex-col gap-3">
                <button onClick={(e) => handleLink(e, 'modal', 'login')} className="w-full text-left py-2 text-slate-400">Log in</button>
                <button onClick={(e) => handleLink(e, 'modal', 'signup')} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold">Start Free Trial</button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="nexus-hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-bold mb-8 animate-in fade-in zoom-in duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              v2.0 is now live
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Monitor your stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">at the speed of light.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Full-stack observability for modern engineering teams. Track metrics, logs, and traces in one unified platform with zero-config auto-instrumentation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <button
                onClick={(e) => handleLink(e, 'modal', 'signup')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
              >
                Start Monitoring <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => handleLink(e, 'modal', 'demo')}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" /> Live Demo
              </button>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative max-w-5xl mx-auto bg-[#0F1019] rounded-xl border border-white/10 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
              {/* Mockup Header */}
              <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="ml-4 px-3 py-1 bg-black/40 rounded text-[10px] text-slate-500 font-mono w-64">
                  nexus-cloud://dashboard/main-cluster
                </div>
              </div>

              {/* Mockup Body */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Metric Card 1 */}
                <div className="bg-[#13141f] p-4 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase">Server Load</span>
                    <Activity className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-3xl font-mono font-bold text-white mb-2">{Math.round(simulatedLoad)}%</div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-500 h-full transition-all duration-300"
                      style={{ width: `${simulatedLoad}%` }}
                    ></div>
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className="bg-[#13141f] p-4 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase">Requests/Sec</span>
                    <Globe className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-mono font-bold text-white mb-2">{(simulatedLoad * 142).toLocaleString()}</div>
                  <div className="flex gap-1 items-end h-1.5">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="bg-cyan-500/50 w-full rounded-sm" style={{ height: `${Math.random() * 100}%` }}></div>
                    ))}
                  </div>
                </div>

                {/* Terminal Card */}
                <div className="bg-[#000] p-4 rounded-lg border border-white/10 font-mono text-xs overflow-hidden flex flex-col justify-end">
                  {terminalLines.map((line, idx) => (
                    <div key={idx} className={`${idx === terminalLines.length - 1 ? 'text-green-400' : 'text-slate-500'} truncate`}>{line}</div>
                  ))}
                  <div className="animate-pulse text-green-400 mt-1">_</div>
                </div>

                {/* Big Graph Placeholder */}
                <div className="md:col-span-3 bg-[#13141f] h-48 rounded-lg border border-white/5 p-4 relative overflow-hidden group cursor-crosshair">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-slate-300">Cluster Throughput (Global)</h4>
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                      <span className="text-xs text-slate-500">US-East</span>
                      <span className="w-2 h-2 rounded-full bg-cyan-500 ml-2"></span>
                      <span className="text-xs text-slate-500">EU-West</span>
                    </div>
                  </div>
                  {/* CSS Graph Animation */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end px-4 gap-1 opacity-50 group-hover:opacity-80 transition-opacity">
                    {[...Array(40)].map((_, i) => (
                      <div
                        key={i}
                        className="w-full bg-indigo-500/20 hover:bg-indigo-500/60 transition-colors rounded-t"
                        style={{
                          height: `${30 + Math.random() * 50}%`,
                          animation: `pulse ${1 + Math.random()}s infinite`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients/Trusted By */}
        <section className="py-10 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Trusted by engineering teams at</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Simple SVG logos placeholders */}
              <div className="text-xl font-bold text-white flex items-center gap-2 cursor-default hover:text-indigo-400 transition-colors"><Cpu className="w-6 h-6" /> ACME Corp</div>
              <div className="text-xl font-bold text-white flex items-center gap-2 cursor-default hover:text-cyan-400 transition-colors"><Database className="w-6 h-6" /> DataFlow</div>
              <div className="text-xl font-bold text-white flex items-center gap-2 cursor-default hover:text-purple-400 transition-colors"><Globe className="w-6 h-6" /> GlobalNet</div>
              <div className="text-xl font-bold text-white flex items-center gap-2 cursor-default hover:text-amber-400 transition-colors"><Zap className="w-6 h-6" /> TurboInc</div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="nexus-features" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Designed for scale.</h2>
              <p className="text-slate-400 text-lg max-w-2xl">
                Legacy tools weren't built for microservices. Nexus Cloud provides the granularity you need without the noise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 rounded-2xl bg-[#13141f] border border-white/5 hover:border-indigo-500/50 transition-all group cursor-pointer" onClick={() => setNotification("Feature: Intelligent Alerting")}>
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instant Alerts</h3>
                <p className="text-slate-400 leading-relaxed">
                  Reduce MTTR with intelligent alerting that understands your system's baseline and only wakes you up for real anomalies.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 rounded-2xl bg-[#13141f] border border-white/5 hover:border-indigo-500/50 transition-all group cursor-pointer" onClick={() => setNotification("Feature: Visual Dashboards")}>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Dashboards</h3>
                <p className="text-slate-400 leading-relaxed">
                  Build beautiful, drag-and-drop dashboards in seconds. Share views with stakeholders via public links.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 rounded-2xl bg-[#13141f] border border-white/5 hover:border-indigo-500/50 transition-all group cursor-pointer" onClick={() => setNotification("Feature: Enterprise Security")}>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-slate-400 leading-relaxed">
                  SOC2 Type II certified. End-to-end encryption for all data in transit and at rest. SSO included.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Snippet Section */}
        <section id="nexus-integrations" className="py-24 bg-[#0B0C15]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Drop-in Integration</h2>
              <p className="text-slate-400 text-lg mb-8">
                Install our lightweight agent in under 2 minutes. Supports all major cloud providers and container orchestration systems.
              </p>
              <ul className="space-y-4 mb-8">
                {['Kubernetes Native', 'AWS/GCP/Azure Support', 'Custom Metrics API', 'OpenTelemetry Compatible'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={(e) => handleLink(e, 'toast', 'Opening documentation...')}
                className="text-indigo-400 font-bold hover:text-indigo-300 flex items-center gap-2 group"
              >
                Read the documentation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-[#1e1e2e] rounded-xl shadow-2xl overflow-hidden border border-white/10 font-mono text-sm hover:border-white/20 transition-colors">
              <div className="bg-[#181825] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <span className="text-slate-500">install.sh</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
              </div>
              <div className="p-6 text-slate-300 space-y-2">
                <p><span className="text-purple-400">$</span> npm install @nexus-cloud/agent</p>
                <p className="opacity-50">... installing dependencies</p>
                <br />
                <p><span className="text-slate-500"># Initialize the agent</span></p>
                <p><span className="text-purple-400">import</span> {'{ Nexus }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@nexus-cloud/agent'</span>;</p>
                <p>Nexus.<span className="text-blue-400">init</span>({'{'}</p>
                <p className="pl-4">apiKey: <span className="text-green-400">'nx_live_...'</span>,</p>
                <p className="pl-4">environment: <span className="text-green-400">'production'</span></p>
                <p>{'});'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section id="nexus-pricing" className="py-24 bg-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start monitoring for free</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Get full access to all features for 14 days. No credit card required. Upgrading takes seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={(e) => handleLink(e, 'modal', 'signup')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold hover:bg-indigo-50 transition-colors shadow-xl"
              >
                Create Free Account
              </button>
              <button
                onClick={(e) => handleLink(e, 'scroll', 'nexus-hero')}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-700 text-white rounded-lg font-bold hover:bg-indigo-800 transition-colors border border-indigo-500"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0B0C15] border-t border-white/5 py-12 text-sm text-slate-500">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleLink(e, 'scroll', 'nexus-hero')}>
              <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-white">NexusCloud</span>
            </div>
            <div className="flex gap-8">
              <a href="#" onClick={(e) => handleLink(e, 'toast', 'Opening Privacy Policy...')} className="hover:text-white transition-colors">Privacy</a>
              <a href="#" onClick={(e) => handleLink(e, 'toast', 'Opening Terms of Service...')} className="hover:text-white transition-colors">Terms</a>
              <a href="#" onClick={(e) => handleLink(e, 'toast', 'Redirecting to Twitter...')} className="hover:text-white transition-colors flex items-center gap-1"><Twitter className="w-3 h-3" /> Twitter</a>
              <a href="#" onClick={(e) => handleLink(e, 'toast', 'Redirecting to GitHub...')} className="hover:text-white transition-colors flex items-center gap-1"><Github className="w-3 h-3" /> GitHub</a>
            </div>
            <div>
              © 2024 Nexus Cloud Inc.
            </div>
          </div>
        </footer>

        {/* MODALS */}
        {activeModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveModal(null)}></div>
            <div className="relative bg-[#13141f] rounded-2xl w-full max-w-md shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-200 p-8">
              <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-500 hover:text-white">
                <X className="w-5 h-5" />
              </button>

              {activeModal === 'login' && (
                <>
                  <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                  <p className="text-slate-400 mb-6">Enter your credentials to access the console.</p>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setNotification("Successfully logged in"); setActiveModal(null); }}>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                      <input type="email" autoFocus className="w-full bg-[#0B0C15] border border-white/10 rounded p-3 text-white focus:border-indigo-500 outline-none transition-colors" placeholder="user@company.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Password</label>
                      <input type="password" className="w-full bg-[#0B0C15] border border-white/10 rounded p-3 text-white focus:border-indigo-500 outline-none transition-colors" placeholder="••••••••" />
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded transition-colors">Log In</button>
                  </form>
                </>
              )}

              {activeModal === 'signup' && (
                <>
                  <h2 className="text-2xl font-bold text-white mb-2">Start your 14-day trial</h2>
                  <p className="text-slate-400 mb-6">No credit card required for trial.</p>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setNotification("Account created! Check email."); setActiveModal(null); }}>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Work Email</label>
                      <input type="email" autoFocus className="w-full bg-[#0B0C15] border border-white/10 rounded p-3 text-white focus:border-indigo-500 outline-none transition-colors" placeholder="user@company.com" />
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded transition-colors">Get Started</button>
                    <p className="text-xs text-center text-slate-500 mt-4">By signing up, you agree to our Terms of Service.</p>
                  </form>
                </>
              )}

              {activeModal === 'demo' && (
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-indigo-400 fill-current" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Interactive Demo Mode</h2>
                  <p className="text-slate-400 mb-6">
                    In a full production environment, this would launch a sandboxed version of the Nexus dashboard populated with sample data.
                  </p>
                  <button onClick={() => setActiveModal(null)} className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded transition-colors">Close</button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
      {/* --- NEXUS MOCKUP END --- */}

    </div>
  );
};

export default NexusTechDemo;