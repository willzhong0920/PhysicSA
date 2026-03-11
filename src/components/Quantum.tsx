export default function Quantum() {
  return (
    <div className="space-y-20 text-left tab-content">
      <header className="space-y-6">
        <div className="inline-block px-5 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-black uppercase tracking-widest">Guide 01</div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic">The Quantum Revolution</h1>
        <p className="text-2xl text-slate-500 font-light border-l-4 border-indigo-200 pl-6 italic">Comprehensive Guide to Photoelectric Effect, Atoms, and Duality.</p>
      </header>

      <section className="bg-white p-12 md:p-16 rounded-[3.5rem] border border-slate-200 shadow-sm space-y-12 text-left">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl">01</div>
          <h2 className="text-4xl font-black tracking-tight uppercase italic">The Crisis of Classical Physics</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-base text-slate-600 leading-relaxed">
          <div className="space-y-8">
            <h4 className="text-slate-900 font-bold uppercase text-sm tracking-widest underline decoration-2 decoration-indigo-200 underline-offset-4">Introduction</h4>
            <p className="text-lg">The transition to quantum physics was a profound strategic shift—a move from a continuous world to a discrete, probabilistic one. Classical mechanics failed at the atomic scale, specifically with the <strong>Photoelectric Effect</strong>.</p>
            <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white">
              <h5 className="text-blue-400 font-black text-xs uppercase mb-6 tracking-widest">The Three Observations</h5>
              <div className="space-y-6 text-sm">
                <p><strong>1. Schwellenfrequenz ({"$f_0$"}):</strong> Below {"$f_0$"}, zero emission occurs, regardless of intensity. Light energy is delivered in discrete packets ({"$hf$"}).</p>
                <p><strong>2. Instantaneous:</strong> Emission occurs in {"$< 10^{-9}$"} s. This is a one-to-one interaction; waves would require time.</p>
                <p><strong>3. KE vs Intensity:</strong> Higher intensity increases photon count, but only Frequency ({"$f$"}) increases speed.</p>
              </div>
            </div>
          </div>
          <div className="bg-indigo-600 p-12 rounded-[3.5rem] text-white shadow-xl flex flex-col justify-center space-y-10 text-center">
            <h3 className="text-3xl font-black uppercase tracking-tighter italic underline decoration-indigo-300 underline-offset-8">Einstein's Equation</h3>
            <div className="bg-indigo-950/40 p-10 rounded-3xl shadow-inner text-lg">
              {"$$hf = \\Phi + K_{max}$$"}
              <br />
              {"$$K_{max} = e \\cdot V_s$$"}
            </div>
            <div className="p-8 bg-white/10 border border-white/10 rounded-2xl text-sm leading-relaxed opacity-90">
              "Light quantization resolved the contradictions. Energy of an incoming photon ({"$hf$"}) is consumed by liberation tax (Work Function {"$\\Phi$"}) and Kinetic Energy."
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-12 md:p-16 rounded-[3.5rem] border border-slate-200 shadow-sm space-y-12 text-left">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl">02</div>
          <h2 className="text-4xl font-black tracking-tight uppercase italic">Wave-Particle Duality</h2>
        </div>
        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <p>Wave-particle duality states that light (and all matter) exhibits both wave-like and particle-like properties. These two natures are complementary: an experiment will reveal one or the other, but never both at the exact same time.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-4">When does light act like a WAVE?</h3>
              <p className="mb-4">Light behaves as a wave when it is traveling through space or interacting with objects similar in size to its wavelength.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Interference:</strong> When two light waves overlap to create bright and dark spots (Double Slit Experiment).</li>
                <li><strong>Diffraction:</strong> When light bends around corners or spreads out after passing through a tiny hole.</li>
                <li><strong>Refraction:</strong> When light changes speed and direction as it enters a new medium.</li>
              </ul>
            </div>
            
            <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
              <h3 className="text-2xl font-black text-indigo-900 mb-4">When does light act like a PARTICLE?</h3>
              <p className="mb-4">Light behaves as a particle (a photon) when it interacts with matter at the atomic level, such as hitting a metal surface or an atom.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>The Photoelectric Effect:</strong> Light hitting a metal surface and ejecting individual electrons instantly.</li>
                <li><strong>The Compton Effect:</strong> X-rays "bouncing" off electrons like billiard balls.</li>
                <li><strong>Line Spectra:</strong> Atoms absorbing or emitting light only at specific, "quantized" energy levels.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        <div className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-sm space-y-8 flex flex-col justify-center text-left">
          <h3 className="text-3xl font-black uppercase text-indigo-600">Technical Synthesis</h3>
          <p className="text-lg text-slate-500 italic border-l-4 border-slate-100 pl-6">The experimental tube acts as a parallel-plate capacitor with a uniform field ({"$E$"}).</p>
          <div className="space-y-6">
            <div className="flex justify-between items-center"><span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Field Strength</span> <span className="text-lg font-bold font-mono text-slate-800">{"$E = V/d$"}</span></div>
            <div className="flex justify-between items-center"><span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Work to Stop</span> <span className="text-lg font-bold font-mono text-slate-800">{"$W = e \\cdot V_s$"}</span></div>
            <div className="flex justify-between items-center border-t border-slate-100 pt-6"><span className="text-sm font-black uppercase text-indigo-600 tracking-widest">The Joule Bridge</span> <span className="text-sm font-bold font-mono">{"$1.602 \\times 10^{-19} \\text{ J}$"}</span></div>
          </div>
        </div>
        <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white flex flex-col justify-center space-y-12 shadow-2xl relative overflow-hidden">
          <h3 className="text-3xl font-black uppercase tracking-widest text-indigo-400 underline underline-offset-8 italic">Spectral Analysis</h3>
          <p className="text-sm opacity-80 leading-relaxed font-light">"Barcode of the elements." Setup involves a gas discharge tube and diffraction grating.</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center"><h6 className="font-black text-green-400 text-xs uppercase mb-3 tracking-widest">Emission</h6><p className="text-xs opacity-80">Bright lines: Electrons drop energy levels.</p></div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center"><h6 className="font-black text-red-400 text-xs uppercase mb-3 tracking-widest">Absorption</h6><p className="text-xs opacity-80">Dark lines: Cool gas steals photons.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-white p-14 rounded-[4.5rem] border border-slate-200 shadow-sm space-y-14 text-left">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl">03</div>
          <h2 className="text-4xl font-black tracking-tight uppercase italic">Atomic Architecture</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl"><h4 className="font-black text-indigo-600 text-xs uppercase mb-2">Thomson</h4><p className="text-sm opacity-80 italic font-medium">Plum Pudding: Electrons in uniform positive sphere.</p></div>
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl"><h4 className="font-black text-indigo-600 text-xs uppercase mb-2">Rutherford</h4><p className="text-sm opacity-80 italic font-medium">Gold Foil discovery: Dense positive nucleus; atom is mostly space.</p></div>
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl"><h4 className="font-black text-indigo-600 text-xs uppercase mb-2">Schrödinger</h4><p className="text-sm opacity-80 italic font-medium">Quantum Cloud: Wave probability orbitals ({"$\\psi$"}).</p></div>
          <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl"><h4 className="font-black text-blue-400 text-xs uppercase mb-2">Pauli Principle</h4><p className="text-sm italic opacity-80 font-light">No matching 4 quantum numbers ({"$n, l, m_l, m_s$"}).</p></div>
        </div>
        
        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
          <h3 className="text-2xl font-black mb-6">Quantum Numbers: The Electron's "Address"</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-200">
                <tr>
                  <th className="p-4 font-bold">Symbol</th>
                  <th className="p-4 font-bold">Name</th>
                  <th className="p-4 font-bold">What it defines</th>
                  <th className="p-4 font-bold">Allowed Values</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="p-4 font-mono">n</td><td className="p-4">Principal</td><td className="p-4">The energy level/size of the orbital.</td><td className="p-4">1, 2, 3, ...</td></tr>
                <tr><td className="p-4 font-mono">l</td><td className="p-4">Subsidiary (Angular)</td><td className="p-4">The shape of the orbital (s, p, d, f).</td><td className="p-4">0 to (n-1)</td></tr>
                <tr><td className="p-4 font-mono">m_l</td><td className="p-4">Magnetic</td><td className="p-4">The orientation of the orbital in space.</td><td className="p-4">-l to +l</td></tr>
                <tr><td className="p-4 font-mono">m_s</td><td className="p-4">Spin</td><td className="p-4">The direction of the electron's "spin."</td><td className="p-4">+1/2 or -1/2</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-indigo-600 p-12 rounded-[3.5rem] text-white shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
          <div className="space-y-10">
            <h3 className="text-3xl font-black italic">Bohr Radius & Condition</h3>
            <div className="space-y-6 text-base font-light leading-relaxed">
              <p>Bohr combined angular momentum quantization ({"$L = n \\hbar$"}) with force equilibrium:</p>
              <div className="p-10 bg-indigo-950/40 rounded-3xl border border-white/10 text-center font-mono text-lg">
                {"$$\\frac{mv^2}{r} = \\frac{k e^2}{r^2}$$"}
                <br />
                {"$$r_n = \\frac{n^2 h^2}{4\\pi^2 m k e^2} \\approx 0.529 \\text{ Å} \\cdot n^2$$"}
              </div>
            </div>
          </div>
          <div className="space-y-10 flex flex-col justify-center">
            <div className="bg-slate-950 p-12 rounded-[3.5rem] shadow-2xl text-center">
              <h5 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-6 italic">Bohr Energy Ladder</h5>
              <div className="math font-black text-4xl">{"$$E_n = -13.6 \\text{ eV} \\cdot \\frac{1}{n^2}$$"}</div>
              <div className="flex justify-around mt-10 text-xs font-black uppercase text-indigo-300 tracking-[0.2em]">
                <span>Lyman ({"$n=1$"})</span><span>Balmer ({"$n=2$"})</span><span>Paschen ({"$n=3$"})</span>
              </div>
            </div>
            <p className="text-sm text-center opacity-90 leading-relaxed font-light italic">Transitions drop to lower levels emitting photons: {"$n=3 \\rightarrow 2$"} emits exactly 1.89 eV (Red line).</p>
          </div>
        </div>
      </section>
    </div>
  );
}
