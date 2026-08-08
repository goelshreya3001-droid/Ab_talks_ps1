import React from 'react';
import { CheckSquare, Square } from 'lucide-react';

export function Checklist({ items, onToggle }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onToggle(item.id)}
          className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
            item.completed 
              ? 'bg-emerald-50/40 border-emerald-200/70 text-slate-700 line-through' 
              : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
          }`}
        >
          <div className="mt-0.5 text-emerald-600 shrink-0">
            {item.completed ? (
              <CheckSquare className="w-4 h-4 fill-emerald-600 text-white" />
            ) : (
              <Square className="w-4 h-4 text-slate-400" />
            )}
          </div>
          <span className="text-xs sm:text-sm font-medium leading-snug">{item.text}</span>
        </div>
      ))}
    </div>
  );
}