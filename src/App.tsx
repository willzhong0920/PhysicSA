/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Atom, Beaker } from 'lucide-react';
import { TOPICS } from './constants';
import Home from './components/Home';
import Quantum from './components/Quantum';
import Nuclear from './components/Nuclear';
import NuclideMap from './components/NuclideMap';
import Universe from './components/Universe';
import Tools from './components/Tools';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [decay, setDecay] = useState({ sample: 100, halfLife: 5730, elapsed: 0 });
  const [selectedNuclide, setSelectedNuclide] = useState({ z: 6, n: 8 });

  useEffect(() => {
    if ((window as any).MathJax && (window as any).MathJax.typesetPromise) {
      (window as any).MathJax.typesetPromise().catch((err: any) => console.error(err));
    }
  }, [activeTab, decay, selectedNuclide]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home switchTab={setActiveTab} />;
      case 'quantum': return <Quantum />;
      case 'nuclear': return <Nuclear />;
      case 'nuclide-map': return <NuclideMap selectedNuclide={selectedNuclide} setSelectedNuclide={setSelectedNuclide} />;
      case 'universe': return <Universe />;
      case 'tools': return <Tools decay={decay} setDecay={setDecay} />;
      default: return <Home switchTab={setActiveTab} />;
    }
  };

  return (
    <>
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 h-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { setActiveTab('home'); window.scrollTo(0, 0); }}>
            <div className="bg-indigo-600 p-2 rounded-xl text-white group-hover:rotate-12 transition-transform">
              <Atom className="w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase">Physics<span className="text-blue-600">Portal</span></span>
          </div>
          <div className="flex gap-2 md:gap-4 overflow-x-auto no-scrollbar py-2">
            {TOPICS.map(t => (
              <button
                key={t.id}
                onClick={() => { setActiveTab(t.id); window.scrollTo(0, 0); }}
                className={`text-xs md:text-sm font-black transition-all px-4 py-2.5 rounded-xl whitespace-nowrap uppercase tracking-widest ${
                  activeTab === t.id
                    ? 'bg-indigo-600 text-white shadow-lg -translate-y-0.5'
                    : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12 text-left">
        {renderContent()}
      </main>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 glass-panel px-8 py-4 rounded-full border border-slate-200 shadow-xl flex items-center gap-8 text-slate-600">
        <div className="flex items-center gap-3 text-xs font-black uppercase text-slate-400">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div> System v17.1 Online
        </div>
        <div className="h-5 w-px bg-slate-200"></div>
        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
          <Beaker className="w-4 h-4" /> Final Master Compendium
        </div>
      </div>
    </>
  );
}
