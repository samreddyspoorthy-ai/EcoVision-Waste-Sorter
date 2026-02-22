import { Building2, Scale, Recycle, History } from "lucide-react";

export default function StakeholderMetrics() {
  const partners = [
    { name: "EcoCycle Municipal", type: "Government", weight: "1,240kg", status: "Processing" },
    { name: "GreenEarth NGO", type: "NGO", weight: "850kg", status: "Distributed" },
    { name: "Urban Waste Corp", type: "Municipal", weight: "2,100kg", status: "Sorted" }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h3 className="text-lg font-display mb-4 text-muted-foreground flex items-center gap-2">
        <Building2 className="w-4 h-4" />
        Stakeholder Distribution
      </h3>
      
      <div className="space-y-3">
        {partners.map((partner, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between group hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <Building2 className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium">{partner.name}</p>
                <p className="text-[10px] font-mono text-muted-foreground uppercase">{partner.type}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-primary justify-end">
                <Scale className="w-3 h-3" />
                <span className="text-sm font-mono font-bold">{partner.weight}</span>
              </div>
              <p className="text-[10px] text-muted-foreground italic">{partner.status}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
          <div className="flex items-center gap-2 text-primary mb-1">
            <Recycle className="w-3 h-3" />
            <span className="text-[10px] font-mono uppercase">Recycled</span>
          </div>
          <p className="text-lg font-display font-bold">84%</p>
        </div>
        <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/10">
          <div className="flex items-center gap-2 text-secondary mb-1">
            <History className="w-3 h-3" />
            <span className="text-[10px] font-mono uppercase">Reused</span>
          </div>
          <p className="text-lg font-display font-bold">12%</p>
        </div>
      </div>
    </div>
  );
}