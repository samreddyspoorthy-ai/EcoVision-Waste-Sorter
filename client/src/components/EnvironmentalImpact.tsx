import { useEffect, useState } from "react";
import { Cloud, Droplets, Wind, ThermometerSun, Zap, AlertTriangle } from "lucide-react";

export default function EnvironmentalImpact() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real-time weather from Open-Meteo
    // Using Bangalore coordinates as default
    fetch("https://api.open-meteo.com/v1/forecast?latitude=12.9716&longitude=77.5946&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&timezone=auto")
      .then(res => res.json())
      .then(data => {
        setWeather(data.current);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getWasteClimateInsight = (temp: number) => {
    if (temp > 30) return "High heat accelerates organic decomposition, increasing odor and methane emissions. Immediate segregation required.";
    return "Stable conditions for waste transport and processing. Air quality remains priority for incinerator operations.";
  };

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
            <span className="text-xs font-mono uppercase tracking-wider">Humidity</span>
          </div>
          <p className="text-2xl font-mono">{loading ? "--" : weather?.relative_humidity_2m}%</p>
        </div>
        
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 group hover:border-teal-400/30 transition-colors">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Wind className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-mono uppercase tracking-wider">Wind</span>
          </div>
          <p className="text-2xl font-mono">{loading ? "--" : weather?.wind_speed_10m} <span className="text-xs text-muted-foreground">km/h</span></p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex flex-col justify-between">
          <p className="text-xs text-primary font-mono mb-2 flex items-center gap-1">
             <Zap className="w-3 h-3" /> System Impact
          </p>
          <p className="text-sm">
            <strong className="text-xl font-display neon-glow">+12kg</strong><br/>
            <span className="text-muted-foreground text-[10px] uppercase">Carbon Offset Today</span>
          </p>
        </div>
      </div>

      {!loading && (
        <div className="mt-4 p-3 rounded-lg bg-secondary/10 border border-secondary/30 flex items-start gap-3 animate-in fade-in duration-1000">
          <AlertTriangle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
          <p className="text-[11px] text-secondary-foreground leading-tight italic">
            {getWasteClimateInsight(weather?.temperature_2m)}
          </p>
        </div>
      )}
    </div>
  );
}