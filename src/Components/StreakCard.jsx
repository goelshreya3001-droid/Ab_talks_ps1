import React from 'react';
import { Flame, Clock, AlertTriangle, RefreshCw } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

export function StreakCard({ student, onResume }) {
  const isAtRisk = !student.missedYesterday;

  if (student.missedYesterday) {
    return (
      <Card className="bg-linear-to-r from-amber-50 to-orange-50/50 border-amber-200/80">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Streak Paused</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base mt-0.5">Your streak paused, and that's completely okay.</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              You missed yesterday. Remember: <strong>Consistency over perfection</strong>. Your 60-day portfolio journey is right here waiting for you.
            </p>
            <div className="mt-3">
              <Button size="sm" variant="danger" icon={RefreshCw} onClick={onResume}>
                Resume Challenge
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-900 text-white border-slate-800 overflow-hidden relative">
      <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex flex-col items-center justify-center text-amber-400 shrink-0">
            <Flame className="w-6 h-6 fill-amber-400 text-amber-400" />
            <span className="text-xs font-black -mt-1">{student.streak}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">Active Streak</span>
              <span className="inline-flex items-center gap-1 text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full font-medium border border-red-500/30 animate-pulse">
                <AlertTriangle className="w-3 h-3" /> Streak at risk
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-white mt-0.5">Day {student.streak} Streak</h2>
            <p className="text-xs text-slate-300 mt-0.5">One more build today keeps your momentum alive!</p>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          Complete before 11:59 PM
        </span>
        <span className="font-mono font-medium text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
          {student.deadlineCountdown} left
        </span>
      </div>
    </Card>
  );
}