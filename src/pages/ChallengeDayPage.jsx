import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Clock, Code, Flame, CheckCircle2, 
  Sparkles, ExternalLink, HelpCircle 
} from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Checklist } from '../components/Checklist';
import { ProofCard } from '../components/ProofCard';
import { ResourceCard } from '../components/ResourceCard';

export function ChallengeDayPage({ task, student, onUpdateProof, onToggleRequirement }) {
  const navigate = useNavigate();

  const isGithubSubmitted = student.githubConnected;
  const isLinkedinSubmitted = student.linkedinConnected;
  const isFullyComplete = isGithubSubmitted && isLinkedinSubmitted;

  return (
    <div className="min-h-screen pb-28 md:pb-16 bg-slate-50">
      {/* Top Challenge Navigation Header */}
      <div className="bg-white border-b border-slate-200/80 px-4 py-3 sticky top-14 md:top-16 z-30">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-500">
              DAY {task.day} OF 60
            </span>
            <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all"
                style={{ width: `${(task.day / 60) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-6 space-y-6">
        {/* Completion Celebration Overlay Banner */}
        {isFullyComplete && (
          <Card className="bg-linear-to-r from-emerald-600 to-teal-600 text-white border-none shadow-lg">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <Badge variant="emerald" className="bg-white/20 text-white border-none mb-1">
                  ✓ DAY {task.day} COMPLETE
                </Badge>
                <h2 className="text-lg font-bold">Another build added to your portfolio!</h2>
                <p className="text-xs text-emerald-100 mt-0.5">
                  🔥 {student.streak} day streak maintained. Day 13 unlocks tomorrow at midnight.
                </p>
                <div className="mt-3">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    onClick={() => navigate('/dashboard')}
                  >
                    View Updated Dashboard →
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Task Hero */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="emerald">{task.category}</Badge>
            <Badge variant="default">{task.difficulty}</Badge>
            <span className="text-xs text-slate-500 flex items-center gap-1 ml-auto">
              <Clock className="w-3.5 h-3.5" />
              Est. {task.estimatedTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {task.title.toUpperCase()}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {task.description}
          </p>
        </div>

        {/* Today's Specific Goal */}
        <Card className="bg-emerald-50/40 border-emerald-200/80">
          <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            Today's Primary Goal
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-800">
            "{task.goal}"
          </p>
        </Card>

        {/* What You'll Build (API Endpoints Code Preview) */}
        <div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            What You'll Build
          </h3>
          <Card className="p-0 overflow-hidden border-slate-200">
            <div className="bg-slate-900 px-4 py-2 text-xs font-mono text-slate-400 flex items-center justify-between border-b border-slate-800">
              <span>REST API Endpoints Specification</span>
              <span>FastAPI / JSON</span>
            </div>
            <div className="divide-y divide-slate-100 font-mono text-xs">
              {task.endpoints.map((ep, i) => (
                <div key={i} className="p-3 flex items-center justify-between gap-2 hover:bg-slate-50">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                      ep.method === 'GET' ? 'bg-sky-100 text-sky-700' :
                      ep.method === 'POST' ? 'bg-emerald-100 text-emerald-700' :
                      ep.method === 'PUT' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {ep.method}
                    </span>
                    <span className="font-semibold text-slate-800 truncate">{ep.path}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-sans truncate shrink-0">{ep.desc}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Requirements Checklist */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Step-by-Step Requirements
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              {task.requirements.filter(r => r.completed).length} of {task.requirements.length} done
            </span>
          </div>
          <Checklist items={task.requirements} onToggle={onToggleRequirement} />
        </div>

        {/* Helpful Resources */}
        <div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Recommended Reference Docs
          </h3>
          <div className="space-y-2">
            {task.resources.map((r, i) => (
              <ResourceCard key={i} resource={r} />
            ))}
          </div>
        </div>

        {/* Submit Proof Section */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900">
              Submit Daily Proof of Work
            </h3>
            <span className="text-xs text-slate-500">Required to unlock Day 13</span>
          </div>

          <div className="space-y-3">
            <ProofCard
              type="github"
              submitted={isGithubSubmitted}
              urlValue={isGithubSubmitted ? "https://github.com/shreya/fastapi-task-api" : ""}
              placeholder="https://github.com/username/repository"
              onVerify={(url) => onUpdateProof('github', true)}
            />

            <ProofCard
              type="linkedin"
              submitted={isLinkedinSubmitted}
              urlValue={isLinkedinSubmitted ? "https://linkedin.com/posts/shreya-day12-fastapi" : ""}
              placeholder="https://linkedin.com/posts/activity-id"
              onVerify={(url) => onUpdateProof('linkedin', true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}