import React, { useState } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function AIChatbot() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am EcoGuide AI. How can I help you with waste disposal or recycling today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulated AI Response logic
    setTimeout(() => {
      let response = "I'm analyzing your request. For specific items like that, I recommend checking our recycling map or local municipal guidelines.";
      
      if (input.toLowerCase().includes('battery')) {
        response = "Batteries contain hazardous chemicals. Never put them in regular trash. Take them to a specialized e-waste collection point or an authorized retailer like Best Buy or specialized local kiosks.";
      } else if (input.toLowerCase().includes('thermocol')) {
        response = "Thermocol (expanded polystyrene) is technically recyclable but rarely accepted in curbside bins. It should be taken to specialized collection centers as it doesn't decompose for hundreds of years.";
      } else if (input.toLowerCase().includes('plastic')) {
        response = "Most rigid plastics (Type 1 & 2) are easily recyclable. Flexible plastics (bags/wraps) usually need to be taken to store drop-off locations.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[400px]">
      <div className="flex-grow overflow-y-auto space-y-4 mb-4 pr-2 scrollbar-thin">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
              m.role === 'user' 
                ? 'bg-primary text-black font-medium' 
                : 'bg-white/5 border border-white/10 text-foreground/90'
            }`}>
              <div className="flex items-center gap-2 mb-1 opacity-50">
                {m.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                <span className="font-mono uppercase text-[9px]">{m.role === 'user' ? 'Citizen' : 'Eco-Neural'}</span>
              </div>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      
      <div className="relative">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask EcoGuide AI..."
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-primary/50 transition-colors"
        />
        <button 
          onClick={handleSend}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[9px] text-muted-foreground font-mono">
        <Sparkles className="w-3 h-3 text-primary animate-pulse" />
        POWERED BY ECOVISION NEURAL ENGINE
      </div>
    </div>
  );
}