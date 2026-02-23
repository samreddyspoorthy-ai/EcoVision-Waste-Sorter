import React from "react";
import { Trophy, Star, Shield, Flame, Medal, Award } from "lucide-react";

export default function Gamification() {
  const stats = [
    { label: 'Eco-Score', value: '2,450', icon: <Star className="text-yellow-400" /> },
    { label: 'Rank', value: '#12', icon: <Trophy className="text-primary" /> },
  ];

  const badges = [
    { name: 'Eco Hero', icon: <Shield className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'Green Warrior', icon: <Flame className="w-6 h-6" />, color: 'text-orange-500' },
    { name: 'Sort Master', icon: <Medal className="w-6 h-6" />, color: 'text-primary' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {stats.map(s => (
          <div key={s.label} className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              {React.cloneElement(s.icon as React.ReactElement, { className: 'w-4 h-4 ' + (s.icon as React.ReactElement).props.className })}
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-mono">{s.label}</p>
              <p className="text-lg font-display font-bold">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-xs font-mono uppercase text-muted-foreground mb-3 tracking-widest flex items-center gap-2">
          <Award className="w-3 h-3" /> Earned Badges
        </h4>
        <div className="flex gap-4">
          {badges.map(b => (
            <div key={b.name} className="flex flex-col items-center gap-2 group cursor-help">
              <div className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/5 ${b.color}`}>
                {b.icon}
              </div>
              <span className="text-[9px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">{b.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/5">
        <p className="text-xs font-medium mb-1">Weekly Challenge</p>
        <p className="text-[11px] text-muted-foreground mb-3">Segregate 50 items correctly to unlock "Planet Protector" badge.</p>
        <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[75%] shadow-[0_0_8px_rgba(0,255,128,0.5)]"></div>
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[9px] font-mono text-muted-foreground">38/50 Items</span>
          <span className="text-[9px] font-mono text-primary">75%</span>
        </div>
      </div>
    </div>
  );
}