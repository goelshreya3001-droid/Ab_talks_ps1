import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Code2, User } from 'lucide-react';

export function Navbar({ student }) {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-sm group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 block leading-none">ABTalks</span>
            <span className="text-[10px] font-semibold text-emerald-600 tracking-wider uppercase">60-Day Challenge</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link 
            to="/" 
            className={`${location.pathname === '/' ? 'text-emerald-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Overview
          </Link>
          <Link 
            to="/dashboard" 
            className={`${location.pathname === '/dashboard' ? 'text-emerald-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/day/12" 
            className={`${location.pathname.startsWith('/day/') ? 'text-emerald-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Today's Mission
          </Link>
        </nav>

        {/* Right Student Info Pill */}
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/70 transition border border-slate-200">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold text-slate-800">{student.streak} Day Streak</span>
            <img 
              src={student.avatar} 
              alt={student.name} 
              className="w-5 h-5 rounded-full object-cover ml-0.5 border border-slate-300" 
            />
          </Link>
        </div>
      </div>
    </header>
  );
}