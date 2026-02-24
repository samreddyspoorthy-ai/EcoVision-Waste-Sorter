import React from 'react';
import { Battery, Smartphone, Cable, ShieldAlert, CheckCircle2, Factory } from 'lucide-react';

export default function EWasteModule() {
  const specializedRecyclers = [
    { name: "Attero Recycling", loc: "National", cert: "R2v3 Certified" },
    { name: "E-Parisaraa", loc: "Bangalore", cert: "ISO 14001" },
    { name: "Cerebra Integrated", loc: "Chennai", cert: "Pollution Board Auth" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: <Battery className="text-orange-400" />, label: 'Batteries' },
          { icon: <Smartphone className="text-blue-400" />, label: 'Devices' },
          { icon: <Cable className="text-primary" />, label: 'Chargers' }
        ].map((item, i) => (
          <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 text-center group hover:border-primary/50 transition-all">
            <div className="p-2 rounded-lg bg-black/40 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-tighter">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
        <div className="flex items-center gap-2 mb-2">
          <ShieldAlert className="w-4 h-4 text-destructive" />
          <h4 className="text-xs font-bold uppercase text-destructive tracking-tight">E-Waste Hazard Protocol</h4>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Lead, Mercury, and Cadmium in electronics pose high neurotoxic risks. Never dismantle batteries or screens manually.
        </p>
      </div>

      <div>
        <h4 className="text-xs font-mono uppercase text-muted-foreground mb-3 flex items-center gap-2">
          <Factory className="w-3 h-3" /> Certified E-Waste Recyclers
        </h4>
        <div className="space-y-2">
          {specializedRecyclers.map((r, i) => (
            <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/5 hover:border-primary/20 transition-all">
              <div>
                <p className="text-xs font-bold">{r.name}</p>
                <p className="text-[9px] text-muted-foreground font-mono">{r.loc}</p>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                <span className="text-[9px] font-bold text-primary uppercase">{r.cert}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}