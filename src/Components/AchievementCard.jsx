import React from 'react';

export function AchievementCard({ achievement }) {
  return (
    <div className={`p-3 rounded-xl border flex items-center gap-3 transition-all ${
      achievement.unlocked 
        ? 'bg-emerald-50/40 border-emerald-200/80 text-slate-900' 
        : 'bg-slate-50 border-slate-200 opacity-60'
    }`}>
      <div className="text-2xl p-2 rounded-lg bg-white shadow-xs border border-slate-100 shrink-0">
        {achievement.icon}
      </div>
      <div>
        <h4 className="text-xs font-bold text-slate-900">{achievement.title}</h4>
        <p className="text-[11px] text-slate-500 mt-0.5">{achievement.desc}</p>
      </div>
    </div>
  );
}