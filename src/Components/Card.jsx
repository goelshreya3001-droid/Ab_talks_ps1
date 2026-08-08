import React from 'react';

export function Card({ children, className = '', highlight = false, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`
        bg-white rounded-2xl border transition-all duration-200 p-4 sm:p-5
        ${highlight 
          ? 'border-emerald-500 ring-2 ring-emerald-500/10 shadow-md shadow-emerald-500/5' 
          : 'border-slate-200/80 shadow-sm hover:border-slate-300'}
        ${onClick ? 'cursor-pointer hover:shadow-md active:scale-[0.99]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}