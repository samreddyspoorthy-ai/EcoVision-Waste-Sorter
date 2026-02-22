import { useState } from "react";
import CameraView from "@/components/CameraView";
import AnalysisResults from "@/components/AnalysisResults";
import RecyclingIntel from "@/components/RecyclingIntel";
import EnvironmentalImpact from "@/components/EnvironmentalImpact";
import { Leaf, Cpu, Activity, Zap } from "lucide-react";

export default function Dashboard() {
  const [analysisState, setAnalysisState] = useState<'idle' | 'analyzing' | 'complete'>('idle');
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = (imageSrc: string) => {
    setAnalysisState('analyzing');
    // Simulate AI analysis delay
    setTimeout(() => {
      // Mock results
      const mockCategories = ['Recyclable', 'Non-Recyclable', 'Organic', 'Hazardous'];
      const category = mockCategories[Math.floor(Math.random() * mockCategories.length)];
      setResults({
        category,
        confidence: (Math.random() * 20 + 80).toFixed(1), // 80-99.9%
        bbox: { x: 20, y: 30, w: 60, h: 50 },
        imageSrc
      });
      setAnalysisState('complete');
    }, 2000);
  };

  const handleReset = () => {
    setAnalysisState('idle');
    setResults(null);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-background text-foreground overflow-x-hidden">
      <header className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center neon-border">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-glow">
              EcoVision AI Nexus
            </h1>
            <p className="text-sm text-muted-foreground font-mono">v2.4.0 // Neural Engine Active</p>
          </div>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm">
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            <span className="font-mono">System: Online</span>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Camera & Analysis */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <section className="glass-panel rounded-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-display flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-secondary" />
                  Visual Input Stream
                </h2>
                {analysisState === 'analyzing' && (
                  <span className="text-xs font-mono text-primary animate-pulse border border-primary/30 px-2 py-1 rounded">PROCESSING...</span>
                )}
              </div>
              <CameraView onAnalyze={handleAnalyze} isAnalyzing={analysisState === 'analyzing'} results={results} onReset={handleReset} />
            </div>
          </section>

          {analysisState === 'complete' && results && (
            <section className="glass-panel rounded-2xl p-6 animate-in slide-in-from-bottom-4 duration-500 fade-in">
              <AnalysisResults results={results} />
            </section>
          )}
        </div>

        {/* Right Column: Intelligence & Environment */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <section className="glass-panel rounded-2xl p-6 h-full flex flex-col">
            <h2 className="text-xl font-display flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-primary" />
              Recycling Intelligence
            </h2>
            <div className="flex-grow">
               <RecyclingIntel results={results} state={analysisState} />
            </div>
          </section>
          
          <section className="glass-panel rounded-2xl p-6">
             <EnvironmentalImpact />
          </section>
        </div>
      </main>
    </div>
  );
}