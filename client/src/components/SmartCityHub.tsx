import { MapPin, Navigation, Calendar, PhoneCall, AlertCircle } from "lucide-react";

export default function SmartCityHub() {
  const tasks = [
    { label: 'Schedule Pickup', icon: <Calendar className="w-4 h-4" /> },
    { label: 'Report Dumping', icon: <AlertCircle className="w-4 h-4" /> },
    { label: 'Call Municipal', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="h-32 rounded-xl bg-muted/20 border border-white/5 relative overflow-hidden group">
        {/* Simulated Map View */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
             <div className="w-4 h-4 bg-primary rounded-full animate-ping opacity-50"></div>
             <div className="w-3 h-3 bg-primary rounded-full absolute top-0.5 left-0.5 border border-black"></div>
             <MapPin className="w-8 h-8 text-primary absolute -top-8 -left-2.5 drop-shadow-[0_0_8px_rgba(0,255,128,0.5)]" />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
          <span className="text-[9px] font-mono text-white/50 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 uppercase tracking-tighter">Nearby Recovery Center: 1.2km</span>
          <button className="p-1.5 rounded-lg bg-primary text-black hover:bg-primary/80 transition-colors shadow-lg">
            <Navigation className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {tasks.map(t => (
          <button key={t.label} className="w-full flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all text-left group">
            <div className="flex items-center gap-3">
              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                {t.icon}
              </div>
              <span className="text-sm font-medium">{t.label}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary"></div>
          </button>
        ))}
      </div>

      <div className="p-3 rounded-xl border border-secondary/20 bg-secondary/5">
        <div className="flex items-center gap-2 mb-2">
           <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
           <p className="text-[10px] font-mono uppercase text-secondary tracking-widest font-bold">Smart City Bulletin</p>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed italic">
          "Swachh Bharat Mission: Bangalore ranks #4 in nationwide cleanliness. Join the mission by using the EcoVision dashboard for all disposal reporting."
        </p>
      </div>
    </div>
  );
}