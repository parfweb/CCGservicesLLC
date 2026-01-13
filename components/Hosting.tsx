import React from 'react';
import { ShieldCheck, Server, RefreshCw, PenTool, BarChart, Rocket, Check, Plus } from 'lucide-react';

const Hosting: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Monthly Growth & Care Plans</h2>
          <p className="text-zinc-500 text-lg">Keep your website secure and growing with our ongoing support.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Website Care Plans */}
          <div>
            <h3 className="text-2xl font-bold text-brand-black mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-limeDark" /> Website Maintenance
            </h3>
            <div className="space-y-6">
              {/* Standard Care */}
              <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col hover:border-zinc-300 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h4 className="font-bold text-xl text-brand-black">Standard Care Plan</h4>
                        <p className="text-zinc-500 text-sm mt-1">Essential security and updates.</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-brand-black">$49<span className="text-sm font-normal text-zinc-400">/mo</span></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-green-500 shrink-0"/> Secure Hosting</div>
                    <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-green-500 shrink-0"/> Daily Backups</div>
                    <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-green-500 shrink-0"/> Plugin Updates</div>
                    <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-green-500 shrink-0"/> Uptime Monitoring</div>
                </div>
              </div>

              {/* Premium Care */}
              <div className="p-6 rounded-2xl border-2 border-brand-black bg-white shadow-lg flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-lime px-3 py-1 text-[10px] font-bold uppercase border-b border-l border-brand-black rounded-bl-lg">Recommended</div>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h4 className="font-bold text-xl text-brand-black">Premium Care Plan</h4>
                        <p className="text-zinc-500 text-sm mt-1">Top-tier support & edits.</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-brand-black">$99<span className="text-sm font-normal text-zinc-400">/mo</span></div>
                    </div>
                </div>
                
                <div className="mb-4 pb-4 border-b border-zinc-100">
                    <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 mb-2">
                        <Plus className="w-4 h-4 text-brand-limeDark"/> Everything in Standard, plus:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                         <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-green-500 shrink-0"/> Priority Support</div>
                         <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-green-500 shrink-0"/> Advanced Security</div>
                         <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-green-500 shrink-0"/> Content Edits</div>
                         <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-green-500 shrink-0"/> Monthly Report</div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Plans */}
          <div>
            <h3 className="text-2xl font-bold text-brand-black mb-6 flex items-center gap-3">
              <BarChart className="w-6 h-6 text-blue-500" /> SEO & Growth
            </h3>
            <div className="space-y-6">
              {/* Basic SEO */}
              <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col hover:border-zinc-300 transition-colors">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                        <h4 className="font-bold text-xl text-brand-black">Basic SEO Plan</h4>
                        <p className="text-zinc-500 text-sm mt-1">Steady local visibility.</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-brand-black">$299<span className="text-sm font-normal text-zinc-400">/mo</span></div>
                    </div>
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-blue-500 shrink-0"/> Local SEO Optimization</div>
                    <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-blue-500 shrink-0"/> Google Business Profile</div>
                    <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-blue-500 shrink-0"/> Performance Reports</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-zinc-100 text-xs text-zinc-600 italic">
                    <span className="font-bold text-blue-600 not-italic">Benefit: </span> Steady local visibility and consistent lead generation.
                </div>
              </div>

              {/* Advanced SEO */}
               <div className="p-6 rounded-2xl border border-blue-100 bg-blue-50/30 flex flex-col hover:border-blue-200 transition-colors">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                        <h4 className="font-bold text-brand-black text-xl">Advanced SEO Plan</h4>
                        <p className="text-zinc-500 text-sm mt-1">Dominate your local market.</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-brand-black">$599<span className="text-sm font-normal text-zinc-400">/mo</span></div>
                    </div>
                </div>

                <div className="mb-4 pb-4 border-b border-blue-100">
                    <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 mb-2">
                        <Plus className="w-4 h-4 text-blue-500"/> Everything in Basic, plus:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                         <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-blue-500 shrink-0"/> Backlink Building</div>
                         <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-blue-500 shrink-0"/> Content Creation</div>
                         <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-blue-500 shrink-0"/> Deep Analytics</div>
                         <div className="flex items-center gap-2 text-sm text-zinc-700"><Check className="w-4 h-4 text-blue-500 shrink-0"/> Competitor Analysis</div>
                    </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-100 text-xs text-zinc-600 italic">
                    <span className="font-bold text-blue-600 not-italic">Benefit: </span> Dominate your local market and significantly boost lead volume.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hosting;