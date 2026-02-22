import { Target, BarChart3, AlertTriangle, Info } from "lucide-react";

interface ResultsProps {
  results: {
    category: string;
    confidence: string;
    bbox: any;
  }
}

export default function AnalysisResults({ results }: ResultsProps) {
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Recyclable': return 'text-primary';
      case 'Organic': return 'text-yellow-400';
      case 'Hazardous': return 'text-destructive';
      case 'Non-Recyclable': return 'text-orange-500';
      default: return 'text-secondary';
    }
  };

  const getCategoryBg = (category: string) => {
    switch(category) {
      case 'Recyclable': return 'bg-primary/10 border-primary/30';
      case 'Organic': return 'bg-yellow-400/10 border-yellow-400/30';
      case 'Hazardous': return 'bg-destructive/10 border-destructive/30';
      case 'Non-Recyclable': return 'bg-orange-500/10 border-orange-500/30';
      default: return 'bg-secondary/10 border-secondary/30';
    }
  };

  return (
    <div>
      <h3 className="text-lg font-display mb-4 text-muted-foreground flex items-center gap-2">
        <BarChart3 className="w-4 h-4" />
        Classification Matrix
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Result */}
        <div className={`col-span-2 rounded-xl border p-4 flex flex-col justify-center ${getCategoryBg(results.category)}`}>
          <p className="text-sm font-mono text-muted-foreground mb-1 uppercase tracking-wider">Identified Material</p>
          <div className="flex items-end gap-4">
            <h2 className={`text-4xl font-bold font-display ${getCategoryColor(results.category)} neon-glow`}>
              {results.category}
            </h2>
          </div>
        </div>

        {/* Confidence Score */}
        <div className="rounded-xl border border-white/10 bg-black/40 p-4 flex flex-col justify-center">
          <p className="text-sm font-mono text-muted-foreground mb-2 flex items-center gap-2">
            <Target className="w-4 h-4" />
            Confidence
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold font-mono">{results.confidence}</span>
            <span className="text-muted-foreground">%</span>
          </div>
          <div className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${getCategoryBg(results.category).split(' ')[0].replace('/10', '')}`}
              style={{ width: `${results.confidence}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {results.category === 'Hazardous' && (
        <div className="mt-4 p-3 rounded-lg bg-destructive/20 border border-destructive/50 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
          <p className="text-sm text-destructive-foreground">
            Warning: Material classified as hazardous. Special handling required to prevent environmental contamination.
          </p>
        </div>
      )}
    </div>
  );
}