import React from 'react';
import { Target, Layers, Box, Zap, AlertCircle } from 'lucide-react';

export default function ObjectDetectionTraining() {
  const detections = [
    { label: 'Organic (Compost)', conf: 0.94, color: 'border-yellow-500 text-yellow-500' },
    { label: 'Plastic Bag', conf: 0.82, color: 'border-primary text-primary' },
    { label: 'Mixed Paper', conf: 0.76, color: 'border-blue-400 text-blue-400' }
  ];

  return (
    <div className="space-y-6">
      {/* YOLO Object Detection Simulation */}
      <div className="p-4 rounded-xl bg-black/40 border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-mono uppercase text-muted-foreground flex items-center gap-2">
            <Target className="w-3 h-3" /> YOLOv8 Multi-Object Detection
          </h4>
          <span className="text-[10px] font-mono text-primary bg-primary/20 px-2 py-0.5 rounded">RESEARCH MODE</span>
        </div>
        
        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-slate-900 group">
          {/* Mock Bounding Boxes */}
          <div className="absolute top-4 left-4 w-32 h-24 border-2 border-yellow-500 rounded bg-yellow-500/10 z-10">
            <span className="absolute -top-5 left-0 text-[8px] bg-yellow-500 text-black px-1 font-bold">ORGANIC 94%</span>
          </div>
          <div className="absolute bottom-8 right-12 w-24 h-20 border-2 border-primary rounded bg-primary/10 z-10">
            <span className="absolute -top-5 left-0 text-[8px] bg-primary text-black px-1 font-bold">PLASTIC 82%</span>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400" 
            alt="Mixed waste detection" 
            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" 
          />
        </div>
        
        <div className="mt-4 space-y-2">
          {detections.map((d, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono uppercase flex items-center gap-2">
                <Box className={`w-3 h-3 ${d.color.split(' ')[1]}`} /> {d.label}
              </span>
              <span className="text-[10px] font-bold font-mono">{Math.round(d.conf * 100)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Training Protocol Panel */}
      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-4">
        <h4 className="text-xs font-bold uppercase text-primary flex items-center gap-2">
           <Zap className="w-4 h-4" /> Academic Training Strategy
        </h4>
        
        <div className="space-y-3">
          <div>
            <p className="text-[10px] text-muted-foreground uppercase mb-1 font-bold">1. Data Augmentation Pipeline</p>
            <div className="grid grid-cols-2 gap-2 text-[9px] font-mono text-muted-foreground">
              <div className="bg-black/40 p-1.5 rounded border border-white/5">Rotation: 20°</div>
              <div className="bg-black/40 p-1.5 rounded border border-white/5">Zoom: 0.2x</div>
              <div className="bg-black/40 p-1.5 rounded border border-white/5">Flip: Horizontal</div>
              <div className="bg-black/40 p-1.5 rounded border border-white/5">Brightness: 0.7-1.3</div>
            </div>
          </div>

          <div>
            <p className="text-[10px] text-muted-foreground uppercase mb-1 font-bold">2. Transfer Learning (MobileNetV2)</p>
            <p className="text-[10px] leading-relaxed italic text-white/70">
              "Fine-tuning last 30 layers with base_model.trainable = True. Unfrozen for 25 epochs to capture high-level waste texture features."
            </p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 flex gap-3">
        <AlertCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
        <p className="text-[10px] text-orange-200/80 leading-snug">
          <strong>Research Insight:</strong> Single-label classification is insufficient for mixed waste. Object-level detection and majority-based logic is active for improved ecological accuracy.
        </p>
      </div>
    </div>
  );
}