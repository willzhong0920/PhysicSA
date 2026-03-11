import { Zap, Map as MapIcon } from 'lucide-react';
import { CHECKLIST } from '../constants';

interface HomeProps {
  switchTab: (tab: string) => void;
}

export default function Home({ switchTab }: HomeProps) {
  return (
    <div className="space-y-16 tab-content">
      <header className="py-32 bg-slate-950 rounded-[3.5rem] text-white shadow-2xl text-center px-6 relative overflow-hidden border-b-[12px] border-indigo-600">
        <div className="absolute inset-0 opacity-10 pointer-events-none text-[24rem] font-black select-none">$\hbar$</div>
        <div className="relative z-10 space-y-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none italic">Physics Suite</h1>
          <p className="text-indigo-200 max-w-3xl mx-auto text-xl md:text-2xl font-light">Complete Master Compendium for Test 2. Zero information loss.</p>
          <div className="flex justify-center gap-6 pt-4">
            <button onClick={() => switchTab('quantum')} className="bg-indigo-600 px-10 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition-all shadow-xl">Start Guide 01</button>
            <button onClick={() => switchTab('nuclear')} className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition-all shadow-xl">Start Guide 02</button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        <div className="bg-white p-12 rounded-[3rem] border border-slate-200 shadow-sm">
          <h3 className="text-3xl font-black mb-8 flex items-center gap-3 tracking-tighter italic underline decoration-indigo-200 decoration-4 underline-offset-8">Exam Checklist</h3>
          <div className="grid grid-cols-1 gap-2 text-sm font-bold text-slate-600">
            {CHECKLIST.map((c, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-4">
                <span className="text-indigo-500 font-black text-base">{(i + 1).toString().padStart(2, '0')}</span> {c}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-indigo-900 p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <Zap className="absolute -bottom-4 -right-4 text-white/10 w-56 h-56" />
            <h4 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">Strategic Guide</h4>
            <p className="text-base opacity-80 leading-relaxed font-light italic">"Modern physics responds to the failure of classical continuity. We now map the discrete boundaries of existence."</p>
            <div className="mt-10 grid grid-cols-2 gap-6 text-center relative z-10">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-[10px] font-black uppercase text-indigo-400 mb-2 tracking-widest">Scaling</p>
                <p className="text-sm font-bold">{"$1 \\text{ eV} = 1.602 \\times 10^{-19} \\text{ J}$"}</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-[10px] font-black uppercase text-indigo-400 mb-2 tracking-widest">Origin</p>
                <p className="text-sm font-bold">Higgs Field</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 flex items-center justify-between group cursor-pointer hover:shadow-lg transition-all" onClick={() => switchTab('nuclide-map')}>
            <div>
              <h5 className="font-black text-slate-800 uppercase text-sm tracking-widest italic">Interaktive Nuclide Lab</h5>
              <p className="text-xs text-slate-400 font-medium tracking-tight mt-1">Trace spontaneous decay paths across the chart.</p>
            </div>
            <div className="bg-emerald-600 text-white p-5 rounded-2xl group-hover:bg-emerald-500 transition-colors">
              <MapIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
