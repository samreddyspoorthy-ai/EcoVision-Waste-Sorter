import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line 
} from 'recharts';
import { Activity, TrendingUp, PieChart as PieChartIcon, Share2 } from 'lucide-react';

const mockData = [
  { name: 'Jan', waste: 400, recycled: 240 },
  { name: 'Feb', waste: 300, recycled: 139 },
  { name: 'Mar', waste: 200, recycled: 980 },
  { name: 'Apr', waste: 278, recycled: 390 },
  { name: 'May', waste: 189, recycled: 480 },
];

const categoryData = [
  { name: 'Plastic', value: 400, color: '#00ff80' },
  { name: 'Organic', value: 300, color: '#fbbf24' },
  { name: 'E-Waste', value: 200, color: '#60a5fa' },
  { name: 'Hazardous', value: 100, color: '#ef4444' },
];

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Waste Distribution */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/5">
          <h4 className="text-xs font-mono uppercase text-muted-foreground mb-4 flex items-center gap-2">
            <PieChartIcon className="w-3 h-3" /> Composition Analysis
          </h4>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #333', fontSize: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Growth Trend */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/5">
          <h4 className="text-xs font-mono uppercase text-muted-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-3 h-3" /> Monthly Recovery Trend
          </h4>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" fontSize={10} />
                <YAxis stroke="#666" fontSize={10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #333', fontSize: '10px' }}
                />
                <Line type="monotone" dataKey="recycled" stroke="#00ff80" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Circular Economy Simulation */}
      <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold flex items-center gap-2">
            <Share2 className="w-4 h-4 text-primary" /> Circular Economy Impact
          </h4>
          <span className="text-[10px] font-mono text-primary bg-primary/20 px-2 py-0.5 rounded">SIMULATION MODE</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground uppercase mb-1">CO₂ Offset</p>
            <p className="text-xl font-display font-bold text-primary">2.4 Tons</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground uppercase mb-1">Landfill Sav.</p>
            <p className="text-xl font-display font-bold text-secondary">82%</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground uppercase mb-1">Energy Rec.</p>
            <p className="text-xl font-display font-bold text-orange-400">14.2 MWh</p>
          </div>
        </div>
      </div>
    </div>
  );
}