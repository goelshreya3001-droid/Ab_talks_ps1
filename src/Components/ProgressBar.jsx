import React from 'react';

export function ProgressBar({ current, total, showLabel = true, className = '' }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs font-medium text-slate-600 mb-1.5">
          <span>{current} of {total} days complete</span>
          <span className="text-emerald-600 font-bold">{percentage}%</span>
        </div>
      )}
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-200/60">
        <div 
          className="bg-linear-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}