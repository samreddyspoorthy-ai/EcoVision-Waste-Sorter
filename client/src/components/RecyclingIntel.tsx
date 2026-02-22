import { Lightbulb, Info, Trash2, ShieldAlert, Recycle, Sprout } from "lucide-react";

interface IntelProps {
  state: 'idle' | 'analyzing' | 'complete';
  results: any;
}

export default function RecyclingIntel({ state, results }: IntelProps) {
  if (state === 'idle' || state === 'analyzing') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50 p-8 text-center">
        <Lightbulb className={`w-12 h-12 mb-4 ${state === 'analyzing' ? 'animate-pulse text-secondary' : ''}`} />
        <p className="font-mono text-sm">Awaiting visual input for ecological assessment...</p>
      </div>
    );
  }

  const getIntel = (category: string) => {
    switch (category) {
      case 'Recyclable':
        return {
          icon: <Recycle className="w-6 h-6 text-primary" />,
          action: "Clean and sort before recycling.",
          steps: [
            "Rinse out any food residue.",
            "Remove non-recyclable caps or lids.",
            "Place in designated blue bin."
          ],
          impact: "Saves raw materials and reduces manufacturing energy by up to 90%."
        };
      case 'Organic':
        return {
          icon: <Sprout className="w-6 h-6 text-yellow-400" />,
          action: "Compost or use green bin.",
          steps: [
            "Remove any plastic stickers or tags.",
            "Place in compost bin or municipal green waste.",
            "Do not mix with regular trash."
          ],
          impact: "Reduces methane emissions from landfills and creates nutrient-rich soil."
        };
      case 'Hazardous':
        return {
          icon: <ShieldAlert className="w-6 h-6 text-destructive" />,
          action: "Requires specialized disposal facility.",
          steps: [
            "Do NOT place in regular trash or recycling.",
            "Store in a safe, leak-proof container.",
            "Take to local hazardous waste drop-off center."
          ],
          impact: "Prevents toxic chemicals from leaching into groundwater and soil."
        };
      case 'Non-Recyclable':
      default:
        return {
          icon: <Trash2 className="w-6 h-6 text-orange-500" />,
          action: "Dispose of in regular waste bin.",
          steps: [
            "Ensure item is not oversized or hazardous.",
            "Place securely in black/grey trash bin.",
            "Consider reusable alternatives for the future."
          ],
          impact: "Contributes to landfill volume. Reducing consumption is recommended."
        };
    }
  };

  const intel = getIntel(results.category);

  return (
    <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
          {intel.icon}
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-1">Recommended Action</h4>
          <p className="text-muted-foreground text-sm">{intel.action}</p>
        </div>
      </div>

      <div>
        <h4 className="font-mono text-sm uppercase text-muted-foreground mb-3 tracking-wider flex items-center gap-2">
           <Info className="w-4 h-4" /> Action Steps
        </h4>
        <ul className="space-y-3">
          {intel.steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm">
              <span className="font-mono text-secondary mt-0.5 opacity-70">0{idx + 1}</span>
              <span className="text-foreground/90">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 border-t border-white/5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Ecological Impact:</strong> {intel.impact}
        </p>
      </div>
    </div>
  );
}