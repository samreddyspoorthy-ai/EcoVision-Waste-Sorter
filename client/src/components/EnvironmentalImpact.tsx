import { useEffect, useState } from "react";
import { Cloud, Droplets, Wind, ThermometerSun, Zap, AlertTriangle } from "lucide-react";

export default function EnvironmentalImpact() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=12.9716&longitude=77.5946&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&timezone=auto")
      .then(res => res.json())
      .then(data => {
        setWeather(data.current);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h3 className="text-lg font-display mb-4 text-muted-foreground flex items-center gap-2">
        <Cloud className="w-4 h-4" />
        Real-time Eco-Telemetry
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 group hover:border-orange-400/30 transition-colors">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <ThermometerSun className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-mono uppercase tracking-wider">Air Temp</span>
          </div>
          <p className="text-2xl font-mono">{loading ? "--.-" : weather?.temperature_2m}°C</p>
        </div>
        
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 group hover:border-blue-400/30 transition-colors">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Droplets className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono uppercase tracking-wider">AQI Index</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-mono">42</p>
            <span className="text-[10px] text-primary bg-primary/20 px-1.5 rounded font-bold">HEALTHY</span>
          </div>
        </div>
        
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 group hover:border-teal-400/30 transition-colors">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Wind className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-mono uppercase tracking-wider">Wind</span>
          </div>
          <p className="text-2xl font-mono">{loading ? "--" : weather?.wind_speed_10m} <span className="text-xs text-muted-foreground">km/h</span></p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex flex-col justify-between group hover:border-primary/50 transition-all">
          <p className="text-xs text-primary font-mono mb-2 flex items-center gap-1">
             <Zap className="w-3 h-3" /> System Impact
          </p>
          <p className="text-sm">
            <strong className="text-xl font-display neon-glow">+12kg</strong><br/>
            <span className="text-muted-foreground text-[10px] uppercase">Carbon Offset Today</span>
          </p>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 space-y-3">
        <h4 className="text-[10px] font-mono uppercase text-orange-400 flex items-center gap-2">
           <AlertTriangle className="w-3 h-3" /> Weather-Waste Interaction Model
        </h4>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded bg-black/40 border border-white/5">
            <p className="text-white/80">Rain Impact</p>
            <p className="text-muted-foreground mt-0.5">Plastic clogging drains risk: HIGH</p>
          </div>
          <div className="p-2 rounded bg-black/40 border border-white/5">
            <p className="text-white/80">Heat Impact</p>
            <p className="text-muted-foreground mt-0.5">Methane release risk: MODERATE</p>
          </div>
        </div>
      </div>
    </div>
  );
}