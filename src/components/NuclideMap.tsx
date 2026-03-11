import { MoveDownLeft, MoveUpLeft, MoveDownRight } from 'lucide-react';
import { ELEMENTS } from '../constants';

interface NuclideMapProps {
  selectedNuclide: { z: number; n: number };
  setSelectedNuclide: (nuclide: { z: number; n: number }) => void;
}

export default function NuclideMap({ selectedNuclide, setSelectedNuclide }: NuclideMapProps) {
  const { z, n } = selectedNuclide;
  const sym = ELEMENTS[z] || "??";
  const alphaT = { z: z - 2, n: n - 2 };
  const betaMT = { z: z + 1, n: n - 1 };
  const betaPT = { z: z - 1, n: n + 1 };

  const renderGrid = () => {
    const rows = [];
    for (let rz = 12; rz >= 0; rz--) {
      const cols = [];
      for (let rn = 0; rn <= 16; rn++) {
        const isSel = z === rz && n === rn;
        const isA = alphaT.z === rz && alphaT.n === rn && rz >= 0;
        const isBM = rz === z + 1 && rn === n - 1;
        const isBP = rz === z - 1 && rn === n + 1 && rz >= 0;
        
        let status = 'empty';
        if (rz > 0 && rn >= rz - 1 && rn <= rz + 4) status = 'unstable';
        if ((rz === rn && rz <= 10) || (rz === 6 && rn === 6) || (rz === 8 && rn === 8)) status = 'stable';
        
        let cellClass = "w-10 h-10 rounded-lg flex items-center justify-center text-[10px] font-black nuclide-cell relative ";
        if (status === 'empty') cellClass += "bg-slate-100 opacity-20";
        else if (status === 'stable') cellClass += "bg-slate-900 text-white cursor-pointer";
        else cellClass += "bg-blue-100 text-blue-600 border border-blue-200 cursor-pointer";
        
        if (isSel) cellClass = "w-10 h-10 rounded-lg bg-emerald-500 text-white scale-110 z-10 shadow-lg ring-4 ring-emerald-100 flex items-center justify-center text-[10px] font-black relative";

        cols.push(
          <div key={`${rz}-${rn}`} onClick={() => status !== 'empty' && setSelectedNuclide({ z: rz, n: rn })} className={cellClass}>
            {status !== 'empty' ? ELEMENTS[rz] : ''}
            {isA && <div className="absolute inset-0 ring-2 ring-yellow-400 rounded-lg animate-pulse"></div>}
            {isBM && <div className="absolute inset-0 ring-2 ring-blue-500 rounded-lg animate-pulse"></div>}
            {isBP && <div className="absolute inset-0 ring-2 ring-red-400 rounded-lg animate-pulse"></div>}
          </div>
        );
      }
      rows.push(<div key={rz} className="flex gap-1.5">{cols}</div>);
    }
    return rows;
  };

  return (
    <div className="animate-in slide-in-from-bottom duration-500 space-y-16 tab-content text-left">
      <header className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter underline underline-offset-8 decoration-emerald-500 italic">Nuclide Navigator</h1>
        <p className="text-lg text-slate-500 font-light border-l-4 border-emerald-500 pl-6 italic">Trace coordinate vector shifts of nuclear transformations across the Segrè chart.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 bg-white p-10 rounded-[3.5rem] border border-slate-200 shadow-xl overflow-x-auto">
          <div className="min-w-[700px] space-y-1.5 text-left">
            {renderGrid()}
            <div className="pt-8 flex gap-8 items-center text-xs font-black uppercase text-slate-400 tracking-widest italic">
              <div className="flex items-center gap-3"><div className="w-3 h-3 bg-slate-900 rounded"></div> Stable</div>
              <div className="flex items-center gap-3"><div className="w-3 h-3 bg-blue-100 border border-blue-200 rounded"></div> Unstable</div>
              <div className="flex items-center gap-3"><div className="w-3 h-3 bg-emerald-500 rounded"></div> Selection</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-950 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden text-center">
            <h4 className="text-xs uppercase font-black text-blue-400 mb-8 tracking-widest opacity-60">Selection State</h4>
            <div className="text-9xl font-black mb-6 tracking-tighter">{sym}<span className="text-4xl text-blue-500">-{z + n}</span></div>
            <div className="grid grid-cols-2 gap-6 mt-10 font-black uppercase text-xs">
              <div className="bg-white/5 p-6 rounded-3xl"><p className="opacity-40 mb-2 tracking-tighter uppercase">Protons (Z)</p><p className="text-3xl">{z}</p></div>
              <div className="bg-white/5 p-6 rounded-3xl"><p className="opacity-40 mb-2 tracking-tighter uppercase">Neutrons (N)</p><p className="text-3xl">{n}</p></div>
            </div>
          </div>
          <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-sm space-y-6 flex flex-col justify-center text-left">
            <h4 className="text-sm uppercase font-black text-slate-400 tracking-widest border-b pb-4 italic">Vector Forecast</h4>
            <div className="p-6 bg-yellow-50 rounded-3xl border border-yellow-100 flex justify-between items-center">
              <div className="flex items-center gap-4 font-bold"><MoveDownLeft className="w-6 h-6 text-yellow-600" /><span className="text-xs uppercase text-yellow-700 font-black">Alpha</span></div>
              <span className="text-sm font-black uppercase tracking-widest">{alphaT.z >= 0 ? `${ELEMENTS[alphaT.z]}-${alphaT.z + alphaT.n}` : 'N/A'}</span>
            </div>
            <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex justify-between items-center">
              <div className="flex items-center gap-4 font-bold"><MoveUpLeft className="w-6 h-6 text-blue-600" /><span className="text-xs font-black text-blue-700 uppercase">Beta-Minus</span></div>
              <span className="text-sm font-black uppercase tracking-widest">{ELEMENTS[betaMT.z] ? `${ELEMENTS[betaMT.z]}-${betaMT.z + betaMT.n}` : 'N/A'}</span>
            </div>
            <div className="p-6 bg-red-50 rounded-3xl border border-red-100 flex justify-between items-center">
              <div className="flex items-center gap-4 font-bold"><MoveDownRight className="w-6 h-6 text-red-600" /><span className="text-xs font-black text-red-700 uppercase">Beta-Plus</span></div>
              <span className="text-sm font-black uppercase tracking-widest">{betaPT.z >= 0 ? `${ELEMENTS[betaPT.z]}-${betaPT.z + betaPT.n}` : 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
