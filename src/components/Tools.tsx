import { Calculator } from 'lucide-react';
import { ISOTOPES } from '../constants';

interface ToolsProps {
  decay: { sample: number; halfLife: number; elapsed: number };
  setDecay: (decay: { sample: number; halfLife: number; elapsed: number }) => void;
}

export default function Tools({ decay, setDecay }: ToolsProps) {
  const rem = (decay.sample * Math.pow(0.5, decay.elapsed / decay.halfLife)).toFixed(2);
  const lives = (decay.elapsed / decay.halfLife).toFixed(2);

  const updateDecay = (key: string, val: string) => {
    setDecay({ ...decay, [key]: parseFloat(val) || 0 });
  };

  const renderF = (l: string, f: string, u: string) => {
    return (
      <div className="flex items-center justify-between p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
        <span className="font-semibold text-slate-300 text-xs uppercase tracking-widest italic font-bold">{l}</span>
        <div className="flex items-center gap-6">
          <div className="math text-blue-400 font-black text-sm">${f}$</div>
          <span className="text-[10px] text-slate-500 font-bold uppercase w-16 text-right">{u}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-in slide-in-from-bottom duration-500 space-y-16 text-left tab-content">
      <div className="bg-white p-14 md:p-20 rounded-[4.5rem] border border-slate-200 shadow-2xl">
        <h2 className="text-5xl font-black mb-16 flex items-center gap-6 tracking-tighter underline underline-offset-[12px] decoration-orange-500 decoration-8 uppercase italic"><Calculator className="text-orange-600 w-12 h-12" /> Physics Lab</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12 text-left">
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-inner">
              <label className="text-xs font-black uppercase text-slate-400 mb-8 block tracking-[0.3em] italic">Starting Mass ($N_0$)</label>
              <input type="number" onChange={(e) => updateDecay('sample', e.target.value)} value={decay.sample} className="bg-transparent text-6xl font-black w-full outline-none text-slate-900" />
            </div>
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-inner">
              <label className="text-xs font-black uppercase text-slate-400 mb-8 block tracking-[0.3em] italic">{"Half-Life ($T_{1/2}$) Years"}</label>
              <input type="number" onChange={(e) => updateDecay('halfLife', e.target.value)} value={decay.halfLife} className="bg-transparent text-5xl font-black w-full outline-none text-slate-900" />
            </div>
            <div className="px-4 text-left">
              <input type="range" min="0" max={decay.halfLife * 6} step={decay.halfLife / 100} onChange={(e) => updateDecay('elapsed', e.target.value)} value={decay.elapsed} className="w-full h-5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-orange-600" />
              <div className="flex justify-between mt-8 text-xs font-black text-slate-400 uppercase tracking-widest"><span className="text-orange-600 font-black italic">{Math.floor(decay.elapsed).toLocaleString()} Yrs Elapsed</span><span>Max. 6 Half-Lives</span></div>
            </div>
          </div>
          <div className="bg-slate-950 p-14 rounded-[4.5rem] text-white flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent pointer-events-none"></div>
            <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40 mb-10 italic">Current Quantity ($N$)</p>
            <div className="text-[10rem] leading-none font-black tracking-tighter text-orange-500 drop-shadow-2xl">{rem}g</div>
            <div className="mt-16 bg-white/10 px-10 py-4 rounded-3xl border border-white/10 font-mono text-base tracking-widest uppercase italic">
              <span className="font-bold uppercase tracking-widest">{"n = " + lives + " \\text{ Half-Lives}"}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24 text-left">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col text-left">
            <div className="bg-indigo-600 p-6 text-white text-xs font-black tracking-[0.3em] uppercase text-center italic">Standard Reference</div>
            <div className="p-8 space-y-1 overflow-y-auto max-h-[400px]">
              {renderF('Einstein Hypothesis', 'hf = \\Phi + K_{max}', 'eV')}
              {renderF('Stopping Potential', 'K_{max} = e \\cdot V_s', 'Volts')}
              {renderF('Bohr Energy Ladder', 'E_n = -13.6 \\, \\text{eV} \\cdot \\frac{1}{n^2}', 'eV')}
              {renderF('Decay Law', 'N(t) = N_0 \\cdot e^{-\\lambda t}', 'Count')}
              {renderF('Einstein Mass link', 'E = mc^2', 'Joules')}
              {renderF('Field Strength', 'E = V/d', 'V/m')}
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm flex flex-col justify-center text-left">
            <div className="bg-slate-900 p-6 text-white text-xs font-black tracking-[0.3em] uppercase text-center italic">Isotope Encyclopedia</div>
            <div className="p-10 space-y-6">
              {ISOTOPES.map((iso, idx) => (
                <div key={idx} className="flex justify-between p-5 bg-slate-50 rounded-2xl">
                  <div><span className="text-xs font-black uppercase text-slate-800 tracking-widest italic font-bold">{iso.name}</span><p className="text-[10px] opacity-60 font-bold uppercase tracking-tighter mt-1">{iso.use}</p></div>
                  <span className="text-sm font-mono font-bold text-indigo-600 self-center tracking-widest">{iso.half}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
