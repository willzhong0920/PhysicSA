export default function Nuclear() {
  return (
    <div className="space-y-20 text-left tab-content">
      <header className="space-y-6">
        <div className="inline-block px-5 py-2 bg-red-100 text-red-600 rounded-full text-sm font-black uppercase tracking-widest">Guide 02</div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic underline decoration-red-600 decoration-8 underline-offset-8">Nuclear Masterclass</h1>
      </header>

      <section className="bg-white p-12 md:p-16 rounded-[3.5rem] border border-slate-200 shadow-sm space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
          <div className="space-y-10">
            <h2 className="text-4xl font-black uppercase flex items-center gap-4">01. Stability Reasoning</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-red-500 pl-6">"Balance between short-range Strong Attraction and infinite-range Coulomb Repulsion."</p>
            <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-xl space-y-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl"><h6 className="font-bold text-xs text-red-400 uppercase mb-2 tracking-widest">Strong Force</h6><p className="text-sm opacity-80 leading-tight">Short range attraction</p></div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl"><h6 className="font-bold text-xs text-red-400 uppercase mb-2 tracking-widest">Coulomb Force</h6><p className="text-sm opacity-80 leading-tight">Infinite proton repulsion</p></div>
              </div>
              <div className="p-8 bg-red-600 rounded-2xl text-center">
                <h5 className="text-sm font-black uppercase mb-2 tracking-widest italic">The Neutron Buffer</h5>
                <p className="text-sm opacity-95 leading-relaxed italic font-bold">Larger nuclei require a surplus of neutrons ({"$N > Z$"}) to stay stable.</p>
              </div>
            </div>
          </div>
          <div className="space-y-8 flex flex-col justify-center">
            <div className="bg-slate-50 p-12 border border-slate-100 rounded-[3rem] space-y-6">
              <h4 className="font-black text-slate-900 text-lg uppercase underline decoration-2 underline-offset-8 mb-8 italic tracking-widest">Professional Terms</h4>
              <div className="grid grid-cols-2 gap-6 text-sm font-bold text-slate-500">
                <div className="space-y-2"><p className="text-slate-900 uppercase text-xs">Nuclide</p><p className="text-xs font-medium leading-relaxed opacity-80 italic">Distinct species defined by Z and A.</p></div>
                <div className="space-y-2"><p className="text-slate-900 uppercase text-xs">Isotope</p><p className="text-xs font-medium leading-relaxed opacity-80 italic">Identical Z, different neutron count.</p></div>
                <div className="space-y-2"><p className="text-slate-900 uppercase text-xs">Parent/Daughter</p><p className="text-xs font-medium leading-relaxed opacity-80 italic">The decay starting point and product.</p></div>
                <div className="space-y-2"><p className="text-slate-900 uppercase text-xs">Mass Defect</p><p className="text-xs font-medium leading-relaxed opacity-80 italic">Released energy: {"$E = \\Delta m c^2$"}.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 p-14 rounded-[4.5rem] text-white shadow-2xl space-y-14">
        <h2 className="text-5xl font-black text-center uppercase tracking-widest text-indigo-500 italic">Ionizing Properties</h2>
        <div className="overflow-x-auto rounded-3xl border border-white/5">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-xs font-black uppercase tracking-[0.2em] text-slate-500 border-b border-white/10">
              <tr><th className="p-8">Type</th><th className="p-8">Nature</th><th className="p-8">Charge</th><th className="p-8">Mass</th><th className="p-8">Shielding</th><th className="p-8">Ionization</th></tr>
            </thead>
            <tbody className="text-base font-medium divide-y divide-white/5 opacity-90 italic">
              <tr><td className="p-8 text-yellow-400 font-black italic">Alpha ({"$\\alpha$"})</td><td className="p-8">Helium Nucleus</td><td className="p-8">+2e</td><td className="p-8">4 u</td><td className="p-8">Paper</td><td className="p-8 font-bold text-red-500 uppercase">Very High</td></tr>
              <tr><td className="p-8 text-blue-400 font-black italic">Beta-minus ({"$\\beta^-$"})</td><td className="p-8">Fast Electron</td><td className="p-8">-1e</td><td className="p-8">{"$\\approx 0$"}</td><td className="p-8">Aluminum</td><td className="p-8">Medium</td></tr>
              <tr><td className="p-8 text-red-400 font-black italic">Beta-plus ({"$\\beta^+$"})</td><td className="p-8">Fast Positron</td><td className="p-8">+1e</td><td className="p-8">{"$\\approx 0$"}</td><td className="p-8">Aluminum</td><td className="p-8">Medium</td></tr>
              <tr><td className="p-8 text-indigo-400 font-black italic">Gamma ({"$\\gamma$"})</td><td className="p-8">Energy Photon</td><td className="p-8">0</td><td className="p-8">0</td><td className="p-8">Lead/Concrete</td><td className="p-8 font-bold text-blue-500 uppercase">Low</td></tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
          <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] relative overflow-hidden">
            <h3 className="text-3xl font-black mb-8 uppercase tracking-widest text-indigo-400 italic">Lorentz ID (RHR)</h3>
            <p className="text-sm font-light opacity-80 leading-relaxed mb-10 text-left">Determine radiation type by its deflection in magnetic fields ({"$B$"}). Thumb: Velocity ({"$v$"}); Fingers: Field ({"$B$"}); Palm: Force ({"$F$"}) on (+) charge.</p>
            <div className="grid grid-cols-3 gap-4 text-xs font-black uppercase text-center text-slate-400">
              <div className="p-4 bg-red-500/10 rounded-xl">Alpha: Curve (+)</div>
              <div className="p-4 bg-indigo-500/10 rounded-xl">Beta-: Curve (-)</div>
              <div className="p-4 bg-white/10 rounded-xl">Gamma: Straight</div>
            </div>
          </div>
          <div className="bg-red-600 p-14 rounded-[4rem] space-y-12 shadow-2xl">
            <h3 className="text-3xl font-black uppercase tracking-tighter italic">Health & Safety</h3>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-6 bg-white/10 rounded-3xl"><p className="text-[10px] font-black opacity-80 mb-2 tracking-widest uppercase">Physical Dose</p><p className="text-3xl font-black">GRAY (Gy)</p></div>
              <div className="p-6 bg-white/10 rounded-3xl"><p className="text-[10px] font-black opacity-80 mb-2 tracking-widest uppercase">Biological Risk</p><p className="text-3xl font-black">SIEVERT (Sv)</p></div>
            </div>
            <div className="p-8 bg-red-950/40 rounded-3xl italic text-sm text-center leading-relaxed">
              "ALARA: As Low As Reasonably Achievable. Protect via Time, Distance, and Shielding. Internal Alpha is extreme threat; external Gamma is penetrative threat."
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-14 md:p-20 rounded-[4.5rem] border border-slate-200 shadow-sm space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 text-center">
            <h3 className="text-5xl font-black uppercase tracking-tighter italic text-red-600">Zerfallskinetik</h3>
            <div className="p-12 bg-slate-900 rounded-[3.5rem] text-white space-y-12 shadow-inner text-xl">
              {"$$N(t) = N_0 \\cdot e^{-\\lambda t}$$"}
              <br />
              {"$$T_{1/2} = \\frac{\\ln(2)}{\\lambda} \\approx \\frac{0.693}{\\lambda}$$"}
              <br />
              {"$$A = \\lambda \\cdot N \\quad (\\text{Activity, Bq})$$"}
            </div>
          </div>
          <div className="space-y-12 text-left">
            <div className="bg-indigo-600 p-14 rounded-[4.5rem] text-white shadow-xl space-y-10 relative overflow-hidden">
              <h4 className="text-3xl font-black italic uppercase underline decoration-2 underline-offset-8">Radiometric dating</h4>
              <div className="space-y-6 font-bold text-indigo-100">
                <div className="flex gap-6 border-b border-white/10 pb-6"><span className="text-xs uppercase opacity-60 shrink-0 tracking-widest">C-14 limit</span><p className="text-base">Effective only up to ~60,000 years for organic matter. Clock starts at death.</p></div>
                <div className="flex gap-6 border-b border-white/10 pb-6"><span className="text-xs uppercase opacity-60 shrink-0 tracking-widest">Deep Time</span><p className="text-base">Employ K-Ar ({"$1.25$"}b y) or U-Pb ({"$4.5$"}b y) for millions of years.</p></div>
                <div className="flex gap-6"><span className="text-xs uppercase opacity-60 shrink-0 tracking-widest">Correction</span><p className="text-base">Must adjust for atmospheric flux variations over time.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
