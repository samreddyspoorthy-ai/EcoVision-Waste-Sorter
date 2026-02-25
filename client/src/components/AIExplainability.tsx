import React from 'react';
import { CheckCircle2, AlertCircle, Info, Layers, BarChart } from 'lucide-react';

export default function AIExplainability() {
  const modelSpecs = [
    { name: 'MobileNetV2', acc: '89.2%', lat: '45ms', status: 'Active' },
    { name: 'EfficientNet-B0', acc: '92.5%', lat: '120ms', status: 'Available' },
    { name: 'ResNet-50', acc: '94.1%', lat: '210ms', status: 'Available' }
  ];

  return (
    <div className="space-y-6">
      {/* Grad-CAM Simulation */}
      <div className="p-4 rounded-xl bg-black/40 border border-white/5">
        <h4 className="text-xs font-mono uppercase text-muted-foreground mb-4 flex items-center gap-2">
          <Layers className="w-3 h-3" /> Grad-CAM Heatmap Visualization
        </h4>
        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-yellow-500/40 to-red-500/60 mix-blend-overlay"></div>
          <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-primary/30 m-8 rounded-full animate-pulse">
            <span className="text-[10px] font-mono text-primary bg-black/60 px-2 py-1 rounded">Feature Extraction Zone</span>
          </div>
          <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400" alt="Waste heatmap" className="w-full h-full object-cover opacity-50" />
        </div>
        <p className="mt-3 text-[10px] text-muted-foreground leading-relaxed italic">
          *Heatmap indicates high pixel activation in the "handle" and "transparency" regions, leading to a 94.2% Plastic Bottle classification.
        </p>
      </div>

      {/* Model Comparison */}
      <div className="space-y-3">
        <h4 className="text-xs font-mono uppercase text-muted-foreground flex items-center gap-2">
          <BarChart className="w-3 h-3" /> Model Benchmarking
        </h4>
        {modelSpecs.map((m, i) => (
          <div key={i} className={`p-3 rounded-lg border flex items-center justify-between ${m.status === 'Active' ? 'bg-primary/5 border-primary/20' : 'bg-black/40 border-white/5'}`}>
            <div>
              <p className="text-xs font-bold">{m.name}</p>
              <p className="text-[9px] text-muted-foreground font-mono">Latency: {m.lat}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-mono font-bold text-primary">{m.acc}</p>
              <span className={`text-[8px] uppercase px-1.5 py-0.5 rounded ${m.status === 'Active' ? 'bg-primary text-black' : 'bg-white/10 text-muted-foreground'}`}>
                {m.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Accuracy Stabilization Advisory */}
      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Info className="w-4 h-4 text-blue-400" />
          <h4 className="text-xs font-bold uppercase text-blue-400">Inference Stabilization</h4>
        </div>
        <ul className="space-y-1.5 text-[10px] text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
            Class Mapping: [0:Glass, 1:Metal, 2:Plastic, 3:Organic]
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
            Deterministic Preprocessing: Resize(224) + Normalize(1/255)
          </li>
        </ul>
      </div>
    </div>
  );
}