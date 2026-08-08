import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Flame, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-8 max-w-97.5 mx-auto flex flex-col justify-between">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 font-extrabold text-lg text-emerald-400">
          <Code2 className="w-6 h-6" /> ABTalks
        </div>
        <Link to="/dashboard" className="text-xs bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-slate-300">
          Sign In
        </Link>
      </header>

      {/* Hero Content */}
      <main className="space-y-5">
        <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-medium">
          <Flame className="w-3.5 h-3.5" /> 60-Day Coding Challenge
        </div>

        <h1 className="text-3xl font-black tracking-tight leading-tight">
          Build code daily.<br />Get noticed by top recruiters.
        </h1>

        <p className="text-slate-400 text-xs leading-relaxed">
          Pick a track, commit code to GitHub daily, post your proof on LinkedIn, and build an unbroken streak that proves your consistency.
        </p>

        {/* Feature Highlights */}
        <div className="space-y-2.5 pt-2">
          {[
            'Daily real-world coding missions',
            'GitHub & LinkedIn proof verification',
            'Get discovered by hiring partners'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4 space-y-3">
          <Link 
            to="/dashboard" 
            className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            Start Challenge Now <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-[11px] text-center text-slate-500">
            Free for all college students in India.
          </p>
        </div>
      </main>

      {/* Social Trust */}
      <footer className="pt-6 text-center border-t border-slate-800 mt-6">
        <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Trusted by 10,000+ students across India
        </p>
      </footer>
    </div>
  );
}