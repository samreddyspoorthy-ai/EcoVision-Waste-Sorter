import React from 'react';
import { Trash, Zap, History, Truck, MapPin } from 'lucide-react';

export default function SmartBinSimulation() {
  const bins = [
    { id: 'BIN-01', type: 'Plastic', level: 82, status: 'Full soon', color: 'text-primary' },
    { id: 'BIN-02', type: 'Organic', level: 45, status: 'Stable', color: 'text-yellow-400' },
    { id: 'BIN-03', type: 'Hazardous', level: 12, status: 'Healthy', color: 'text-destructive' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {bins.map(bin => (
          <div key={bin.id} className="p-4 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${bin.color}`}>
                   <Trash className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-mono">{bin.id}</h4>
                  <p className="text-[10px] text-muted-foreground uppercase">{bin.type} Collection</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-mono font-bold">{bin.level}%</p>
                <p className={`text-[9px] uppercase font-bold ${bin.level > 80 ? 'text-destructive animate-pulse' : 'text-muted-foreground'}`}>
                  {bin.status}
                </p>
              </div>
            </div>
            
            {/* Fill Level Indicator */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative z-10">
              <div 
                className={`h-full transition-all duration-1000 ${bin.color.replace('text-', 'bg-')}`} 
                style={{ width: `${bin.level}%` }}
              ></div>
            </div>

            {/* AI Prediction Tag */}
            <div className="mt-3 flex items-center gap-2 text-[9px] text-primary/60 font-mono italic">
              <Zap className="w-3 h-3" /> AI Pickup Prediction: {bin.level > 80 ? 'IMMEDIATE' : '14 hours'}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-secondary/20 bg-secondary/5">
        <div className="flex items-center gap-2 mb-3">
           <Truck className="w-4 h-4 text-secondary" />
           <h4 className="text-xs font-bold uppercase text-secondary tracking-tight">Optimal Collection Route</h4>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <MapPin className="w-3 h-3" /> Start: HQ → BIN-01 → BIN-02 → Recovery Hub
        </div>
      </div>
    </div>
  );
}