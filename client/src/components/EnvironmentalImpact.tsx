import { Cloud, Droplets, Wind, ThermometerSun } from "lucide-react";

export default function EnvironmentalImpact() {
  // Mock data for environmental impact
  return (
    <div>
      <h3 className="text-lg font-display mb-4 text-muted-foreground flex items-center gap-2">
        <Cloud className="w-4 h-4" />
        Local Environmental Telemetry
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <ThermometerSun className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-mono uppercase tracking-wider">Air Temp</span>
          </div>
          <p className="text-2xl font-mono">24.5°C</p>
        </div>
        
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Droplets className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-wider">Humidity</span>
          </div>
          <p className="text-2xl font-mono">68%</p>
        </div>
        
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Wind className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-mono uppercase tracking-wider">AQI</span>
          </div>
          <div className="flex items-baseline gap-2">
             <p className="text-2xl font-mono">42</p>
             <span className="text-xs text-primary bg-primary/20 px-1.5 rounded font-bold">GOOD</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex flex-col justify-between">
          <p className="text-xs text-primary font-mono mb-2">System Impact</p>
          <p className="text-sm">
            <strong className="text-xl font-display neon-glow">+12kg</strong><br/>
            <span className="text-muted-foreground text-xs">Waste diverted today</span>
          </p>
        </div>
      </div>
    </div>
  );
}