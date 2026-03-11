import React from 'react';
import { Share2, HeartPulse, Dna, Atom, Database, Target } from 'lucide-react';
import { HIERARCHY } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-8 h-8" />,
  Dna: <Dna className="w-8 h-8" />,
  Atom: <Atom className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Target: <Target className="w-8 h-8" />
};

export default function Universe() {
  return (
    <div className="space-y-20 text-left animate-in fade-in duration-500 tab-content">
      <header className="space-y-6 text-left">
        <div className="inline-block px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-black uppercase tracking-widest">Guide 03</div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic">Standard Model</h1>
        <p className="text-2xl text-slate-500 font-light border-l-4 border-blue-300 pl-6 italic">Architecture of the Universe and the Dimensional Hierarchy of Matter.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {HIERARCHY.map((h, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-200 text-center hover:bg-slate-950 hover:text-white transition-all shadow-sm group">
            <div className="text-blue-600 group-hover:text-blue-400 flex justify-center mb-6">
              {iconMap[h.icon]}
            </div>
            <h5 className="font-black text-sm uppercase tracking-widest mb-2 italic">{h.name}</h5>
            <p className="text-[10px] opacity-60 font-bold uppercase mb-4 tracking-widest">{h.scale}</p>
            <p className="text-xs opacity-80 leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 text-left">
        <div className="bg-slate-900 p-14 rounded-[4.5rem] text-white flex flex-col justify-center space-y-14 shadow-2xl relative overflow-hidden">
          <Share2 className="absolute -bottom-4 -right-4 text-white/5 w-72 h-72" />
          <h3 className="text-4xl font-black uppercase tracking-tight text-blue-400 underline decoration-blue-500 decoration-4 underline-offset-8 italic">Matter Bricks & Glue</h3>
          <div className="grid grid-cols-1 gap-8 relative z-10">
            <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-colors">
              <h6 className="font-black text-blue-300 text-sm uppercase mb-4 tracking-widest italic">Fermions (Builders)</h6>
              <p className="text-sm opacity-80 leading-relaxed font-light italic text-left text-blue-100">Quarks & Leptons. They obey the Pauli Exclusion Principle, giving matter its volume and preventing stars from collapsing.</p>
            </div>
            <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-colors">
              <h6 className="font-black text-indigo-300 text-sm uppercase mb-4 tracking-widest italic">Bosons (Messengers)</h6>
              <p className="text-sm opacity-80 leading-relaxed font-light italic text-left text-indigo-100">Force carriers (Photon, Gluon, W, Z). Particles "throw and catch" bosons (Ice Skater Analogy) to mediate forces.</p>
            </div>
          </div>
          <div className="bg-red-900/20 p-10 border border-red-900/40 rounded-[2.5rem] relative z-10 space-y-4">
            <h6 className="font-black text-red-400 text-sm uppercase tracking-widest flex items-center gap-3 italic underline underline-offset-4">Gravity Problem</h6>
            <p className="text-xs opacity-80 leading-relaxed">Gravity is {"$10^{36}$"} times weaker than EM on subatomic scales. Mathematically incompatible with the Model.</p>
          </div>
        </div>
        <div className="bg-white p-14 rounded-[4.5rem] border border-slate-200 shadow-sm space-y-14 flex flex-col justify-center text-left">
          <h3 className="text-4xl font-black uppercase tracking-tighter italic">Quark Accounting</h3>
          <div className="space-y-8">
            <div className="flex justify-between items-center p-12 bg-blue-50 border border-blue-100 rounded-[3.5rem] group hover:scale-[1.02] transition-transform">
              <div className="text-sm font-black text-blue-900 uppercase tracking-widest">Proton (uud)</div>
              <div className="math font-black text-2xl">{"$+\\frac{2}{3} + \\frac{2}{3} - \\frac{1}{3} = +1e$"}</div>
            </div>
            <div className="flex justify-between items-center p-12 bg-slate-50 border border-slate-100 rounded-[3.5rem] group hover:scale-[1.02] transition-transform">
              <div className="text-sm font-black text-slate-700 uppercase tracking-widest text-left">Neutron (udd)</div>
              <div className="math font-black text-2xl">{"$+\\frac{2}{3} - \\frac{1}{3} - \\frac{1}{3} = 0e$"}</div>
            </div>
          </div>
          <div className="p-12 bg-indigo-950 rounded-[4rem] text-white shadow-xl relative overflow-hidden text-left">
            <h6 className="font-black text-indigo-400 text-sm uppercase mb-4 tracking-widest underline decoration-indigo-400 decoration-4 underline-offset-4 italic">Flavor Transformations</h6>
            <p className="text-sm opacity-90 leading-relaxed italic text-left">Only the <strong>Weak force</strong> can change quark flavor. In {"$\\beta^-$"} decay, a <strong>Down quark</strong> swaps into an <strong>Up quark</strong> via {"$W^-$"} boson exchange.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
