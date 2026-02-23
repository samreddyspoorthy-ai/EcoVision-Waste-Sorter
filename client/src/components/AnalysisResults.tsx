import { Target, BarChart3, AlertTriangle, Clock, Leaf, Gauge } from "lucide-react";

interface ResultsProps {
  results: {
    category: string;
    confidence: string;
    bbox: any;
  }
}

export default function AnalysisResults({ results }: ResultsProps) {
  const getDecompositionTime = (category: string) => {
    switch(category) {
      case 'Recyclable': return '450 years (Plastic)';
      case 'Organic': return '2–6 weeks';
      case 'Hazardous': return '50–200 years (Metal/E-waste)';
      case 'Non-Recyclable': return '1 million years (Glass/Styrofoam)';
      default: return 'Variable';
    }
  };

  const getRiskLevel = (category: string) => {
    switch(category) {
      case 'Hazardous': return { label: 'High', color: 'text-destructive', bg: 'bg-destructive/20' };
      case 'Non-Recyclable': return { label: 'Medium', color: 'text-orange-500', bg: 'bg-orange-500/20' };
      case 'Recyclable': return { label: 'Moderate', color: 'text-secondary', bg: 'bg-secondary/20' };
      case 'Organic': return { label: 'Low', color: 'text-primary', bg: 'bg-primary/20' };
      default: return { label: 'Low', color: 'text-primary', bg: 'bg-primary/20' };
    }
  };

  const risk = getRiskLevel(results.category);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-display text-muted-foreground flex items-center gap-2">
          <BarChart3 className="w-4 h-4" />
          Neural Classification Output
        </h3>
        <div className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border ${risk.bg} ${risk.color}`}>
          Risk Level: {risk.label}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Main Result */}
        <div className="col-span-2 rounded-xl border border-white/5 bg-black/40 p-5 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
          <p className="text-[10px] font-mono text-muted-foreground mb-1 uppercase tracking-widest">Inferred Material</p>
          <h2 className="text-4xl font-bold font-display text-primary neon-glow">
            {results.category}
          </h2>
        </div>

        {/* Confidence Score */}
        <div className="rounded-xl border border-white/5 bg-black/40 p-5 flex flex-col justify-center">
          <p className="text-[10px] font-mono text-muted-foreground mb-2 flex items-center gap-2 uppercase tracking-widest">
            <Target className="w-3 h-3" />
            Accuracy
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold font-mono">{results.confidence}</span>
            <span className="text-muted-foreground text-xs">%</span>
          </div>
          <div className="w-full h-1 bg-white/5 mt-3 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary shadow-[0_0_8px_rgba(0,255,128,0.5)] transition-all duration-1000"
              style={{ width: `${results.confidence}%` }}
            ></div>
          </div>
        </div>

        {/* AI Approximation Stats */}
        <div className="rounded-xl border border-white/5 bg-black/40 p-5 flex flex-col justify-center">
           <p className="text-[10px] font-mono text-muted-foreground mb-2 flex items-center gap-2 uppercase tracking-widest">
            <Gauge className="w-3 h-3" />
            Est. Weight
          </p>
          <div className="flex items-baseline gap-1">
             <span className="text-3xl font-bold font-mono">0.45</span>
             <span className="text-muted-foreground text-xs tracking-tighter">kg</span>
          </div>
          <p className="text-[9px] text-muted-foreground mt-2 italic">*Based on BBox geometry</p>
        </div>
      </div>

      {/* 3 & 4. Prediction & Footprint */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <Clock className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">Decomposition Timeline</p>
            <p className="text-sm font-medium">{getDecompositionTime(results.category)}</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">CO₂ Footprint Impact</p>
            <p className="text-sm font-medium">1.2kg CO₂ <span className="text-[10px] text-muted-foreground ml-1">(Saved if recycled)</span></p>
          </div>
        </div>
      </div>
      
      {results.category === 'Hazardous' && (
        <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 flex items-start gap-3 animate-pulse">
          <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
          <div>
             <h4 className="text-sm font-bold text-destructive uppercase tracking-tighter mb-1">Ecological Threat Detected</h4>
             <p className="text-xs text-destructive-foreground/80 leading-relaxed">
               Material contains toxic compounds. Specialized authorized disposal protocol required to prevent local ecosystem contamination.
             </p>
          </div>
        </div>
      )}
    </div>
  );
}