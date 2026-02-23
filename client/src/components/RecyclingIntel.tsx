import { Lightbulb, Info, Trash2, ShieldAlert, Recycle, Sprout, Factory, Microscope, Flame, Building, MapPin, Heart, AlertCircle, RefreshCcw } from "lucide-react";

interface IntelProps {
  state: 'idle' | 'analyzing' | 'complete';
  results: any;
}

export default function RecyclingIntel({ state, results }: IntelProps) {
  if (state === 'idle' || state === 'analyzing') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50 p-8 text-center">
        <Lightbulb className={`w-12 h-12 mb-4 ${state === 'analyzing' ? 'animate-pulse text-secondary' : ''}`} />
        <p className="font-mono text-sm tracking-tight">Awaiting visual stream for deep neural assessment...</p>
      </div>
    );
  }

  const getIntel = (category: string) => {
    switch (category) {
      case 'Recyclable':
        return {
          icon: <Recycle className="w-6 h-6 text-primary" />,
          utilization: "Plastic → High-grade pellets, synthetic fibers, road construction aggregates.",
          method: "Mechanical & Chemical Recycling",
          ngos: ["Waste Warriors", "Saahas", "Hasiru Dala"],
          gov: "Smart City Material Recovery Facility (MRF)",
          impact: "Reduces virgin plastic production by 70%; generates local green-collar jobs.",
          tips: ["Rinse thoroughly", "Crush to save space", "Keep dry"]
        };
      case 'Organic':
        return {
          icon: <Sprout className="w-6 h-6 text-yellow-400" />,
          utilization: "Food Waste → Nutrient-rich compost, Biogas for clean energy.",
          method: "Aerobic Composting / Anaerobic Digestion",
          ngos: ["Daily Dump", "Soil Vasu", "Green Foundation"],
          gov: "Municipal Decentralized Composting Units",
          impact: "Prevents methane leaching in landfills; restores urban soil health.",
          tips: ["No plastic liners", "Drain liquids", "Remove stickers"]
        };
      case 'Hazardous':
        return {
          icon: <ShieldAlert className="w-6 h-6 text-destructive" />,
          utilization: "E-Waste → Rare earth metal recovery (Gold, Cobalt, Lithium).",
          method: "Authorized Specialized Extraction",
          ngos: ["E-Parisaraa", "Attero", "Cerebra"],
          gov: "State Pollution Control Board (SPCB) Collection Centers",
          impact: "Prevents heavy metal neurotoxins from entering groundwater systems.",
          tips: ["Seal in bags", "Don't break screens", "Keep away from heat"]
        };
      case 'Non-Recyclable':
      default:
        return {
          icon: <Trash2 className="w-6 h-6 text-orange-500" />,
          utilization: "Residual Waste → Refuse Derived Fuel (RDF) for cement kilns.",
          method: "Controlled Incineration / Waste-to-Energy",
          ngos: ["SWMRT", "Clean Up Foundation"],
          gov: "Waste-to-Energy Thermal Plants",
          impact: "Reduces landfill footprint by 90% through volume reduction.",
          tips: ["Wrap sharp objects", "Tie bags tightly", "Check for hazardous mix"]
        };
    }
  };

  const intel = getIntel(results.category);

  return (
    <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 duration-500">
      {/* 2. Waste Utilization Intelligence */}
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
          <h4 className="font-display font-semibold text-sm flex items-center gap-2 mb-2 text-primary">
            <Factory className="w-4 h-4" /> Waste Usage Insights
          </h4>
          <p className="text-sm text-foreground/90 leading-relaxed">{intel.utilization}</p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/10">
          <h4 className="font-display font-semibold text-sm flex items-center gap-2 mb-2 text-secondary">
            <Microscope className="w-4 h-4" /> Recommended Process
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded font-mono uppercase tracking-tighter">
              {intel.method}
            </span>
          </div>
        </div>
      </div>

      {/* 3. NGO & Government Integration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest flex items-center gap-1">
             <MapPin className="w-3 h-3" /> NGO Mapping
          </h4>
          <div className="flex flex-wrap gap-1">
            {intel.ngos.map(ngo => (
              <span key={ngo} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-foreground/80">
                {ngo}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest flex items-center gap-1">
             <Building className="w-3 h-3" /> Gov. Initiative
          </h4>
          <p className="text-[11px] text-foreground/70">{intel.gov}</p>
        </div>
      </div>

      {/* 4. Social Impact & Awareness */}
      <div className="pt-4 border-t border-white/5">
        <div className="flex items-start gap-3 mb-4">
          <Heart className="w-5 h-5 text-pink-500 shrink-0" />
          <div>
            <h4 className="text-xs font-bold uppercase tracking-tight text-pink-500/80">Community Impact</h4>
            <p className="text-xs text-muted-foreground mt-1">{intel.impact}</p>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-black/40 border border-white/5">
          <h4 className="text-xs font-mono uppercase text-muted-foreground mb-2 flex items-center gap-2">
            <AlertCircle className="w-3 h-3 text-yellow-500" /> Disposal Do's & Don'ts
          </h4>
          <ul className="space-y-1.5">
            {intel.tips.map((tip, i) => (
              <li key={i} className="text-[11px] flex items-center gap-2 text-foreground/80">
                <div className="w-1 h-1 rounded-full bg-primary" /> {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Circular Economy Footnote */}
      <div className="flex items-center gap-2 text-[10px] text-primary/60 font-mono">
        <RefreshCcw className="w-3 h-3 animate-spin-slow" />
        CIRCULAR ECONOMY PROTOCOL ACTIVE: WASTE AS RAW MATERIAL
      </div>
    </div>
  );
}