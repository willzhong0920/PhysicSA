export const ELEMENTS = ["n", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe"];

export const TOPICS = [
    { id: 'home', title: 'Start', icon: 'home' },
    { id: 'quantum', title: 'Quantum Rev', icon: 'zap' },
    { id: 'nuclear', title: 'Nuclear Pro', icon: 'shield' },
    { id: 'nuclide-map', title: 'Nuclide Map', icon: 'map' },
    { id: 'universe', title: 'Universe Arch', icon: 'layers' },
    { id: 'tools', title: 'Lab Tools', icon: 'calculator' },
];

export const CHECKLIST = [
    "Photoelectric Effect: Experimental Setup & Circuit",
    "Classical Wave Theory Failure (Threshold, Timing, KE)",
    "Einstein's Photon Theory ($E = hf$)",
    "Electronvolt (eV) Definition & $1.602 \\times 10^{-19}$ J Conversion",
    "Spectral Analysis: Emission vs Absorption Barcodes",
    "Wave-Particle Duality (Propagation vs Interaction)",
    "Evolution of Atomic Models (Thomson to Schrödinger)",
    "Rutherford's Gold Foil Conclusions (Nucleus Discovery)",
    "Bohr Radius & Quantized Energy Ladder Derivation",
    "Hydrogen Series (Lyman, Balmer, Paschen)",
    "Quantum Numbers & Pauli Exclusion Principle",
    "Force Interplay (Strong, EM, Weak, Gravity)",
    "Nuclide Chart Navigation & Zerfallspfade",
    "Radiation Characteristics ($\\alpha$, $\\beta^+$, $\\beta^-$, $\\gamma$)",
    "Lorentz Force & Right-Hand Rule (RHR)",
    "ALARA Principles & Units (Gray, Sievert)",
    "Radiocarbon Dating: Logic, Limits & Calibration",
    "Standard Model Hierarchy (Organs to Quarks)",
    "Fermions (Stuff) vs Bosons (Glue)",
    "Higgs Field & Annihilation ($E=mc^2$)"
];

export const HIERARCHY = [
    { name: "Biological", scale: "Macro", desc: "Organ systems, organs, and cells.", icon: "HeartPulse" },
    { name: "Chemical", scale: "Molecular", desc: "Organelles and molecules (DNA, $H_2O$).", icon: "Dna" },
    { name: "Atomic", scale: "Nano", desc: "Nucleus surrounded by electron cloud.", icon: "Atom" },
    { name: "Subatomic", scale: "Femto", desc: "Nucleus (p, n) and electrons.", icon: "Database" },
    { name: "Fundamental", scale: "Quantum", desc: "Elementary Quarks, Leptons, Bosons.", icon: "Target" }
];

export const ISOTOPES = [
    { name: "Carbon-14", type: "Beta-minus", use: "Radiocarbon Dating", half: "5,730y" },
    { name: "Uranium-238", type: "Alpha", use: "Geochronology", half: "4.47b y" },
    { name: "Cobalt-60", type: "Beta/Gamma", use: "Sterilization", half: "5.27y" },
    { name: "Potassium-40", type: "Beta/EC", use: "Geology", half: "1.25b y" }
];
