import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Flame,
  Sparkles,
} from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { sampleProjects } from '../data/mockData';

export function LandingPage() {
  const steps = [
    { num: "01", title: "Pick Your Track", desc: "Select Full-Stack, Backend, or AI Engineering tailored for Indian college syllabus." },
    { num: "02", title: "Build Today's Project", desc: "Get daily curated specifications, real endpoint designs, and starter code guides." },
    { num: "03", title: "Push to GitHub", desc: "Commit your code. Build a green GitHub contribution graph that recruiters love." },
    { num: "04", title: "Share on LinkedIn", desc: "Publish standard proof-of-work updates. Build public credibility effortlessly." }
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-12 bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-8 pb-12 sm:pt-16 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="emerald" className="mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Designed for Indian College Students
          </Badge>
          
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
            60 DAYS. <br className="sm:hidden" />
            60 BUILDS. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">
              ONE PORTFOLIO.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Build something every day. Push it to GitHub. Share your progress on LinkedIn. Turn consistency into proof of work that recruiters can't ignore.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <Link to="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" fullWidth icon={ArrowRight}>
                Start the 60-Day Challenge
              </Button>
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" fullWidth>
                See How It Works
              </Button>
            </a>
          </div>

          {/* Hero Visual Mockup: Live Progress */}
          <div className="mt-10 p-4 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xl max-w-md mx-auto text-left relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-slate-400 ml-2">student_streak_tracker.py</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                <Flame className="w-3 h-3 fill-amber-500" /> 11 Day Streak
              </span>
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">Day 12: Build a REST API with FastAPI</span>
                <span className="text-emerald-600 font-bold">100% Proven</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">GitHub Pushed</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">LinkedIn Shared</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realistic Proof Metrics */}
      <section className="py-8 bg-white border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">10,000+</div>
            <div className="text-xs text-slate-500 mt-0.5">Students Enrolled</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">60 Days</div>
            <div className="text-xs text-slate-500 mt-0.5">Structured Roadmap</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">1 Daily Build</div>
            <div className="text-xs text-slate-500 mt-0.5">Late-Night Friendly</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-600">2 Proof Points</div>
            <div className="text-xs text-slate-500 mt-0.5">GitHub + LinkedIn</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="emerald" className="mb-2">Simple Workflow</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How ABTalks Works</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">Four clean steps to transform your developer profile</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <Card key={s.num} className="relative overflow-hidden">
              <span className="text-3xl font-black text-slate-200 block mb-2">{s.num}</span>
              <h3 className="font-bold text-slate-900 text-sm">{s.title}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why 60 Days: Transformation */}
      <section className="py-12 bg-slate-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="emerald" className="mb-3">The Shift</Badge>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Why 60 Days?</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
            Stop watching endless tutorials. Start producing tangible proof of work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">Before ABTalks</div>
              <h3 className="text-lg font-bold text-white mb-2">"I know tutorials."</h3>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-center gap-2">✕ Blank GitHub contribution grid</li>
                <li className="flex items-center gap-2">✕ Zero recruiter inbound on LinkedIn</li>
                <li className="flex items-center gap-2">✕ Stuck in tutorial hell without projects</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/30">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">After ABTalks</div>
              <h3 className="text-lg font-bold text-white mb-2">"I have 60 verified builds."</h3>
              <ul className="text-xs text-emerald-100 space-y-2">
                <li className="flex items-center gap-2">✓ Active green GitHub contribution streak</li>
                <li className="flex items-center gap-2">✓ Public LinkedIn proof and network growth</li>
                <li className="flex items-center gap-2">✓ A full-stack portfolio ready for resume link</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Build */}
      <section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <Badge variant="emerald" className="mb-2">Roadmap</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What You'll Build</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">Realistic production-oriented projects step-by-step</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {sampleProjects.map((p) => (
            <Card key={p.day} className="flex items-start gap-3">
              <div className="text-2xl p-2 rounded-xl bg-slate-50 border border-slate-100">{p.icon}</div>
              <div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase">{p.day}</span>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">{p.title}</h4>
                <div className="flex gap-1 mt-1.5 flex-wrap">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <Card className="bg-linear-to-r from-slate-900 to-slate-800 text-white p-8 border-none">
          <h2 className="text-2xl sm:text-3xl font-black">Your first commit is waiting.</h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
            Build every day. Prove your work. Become impossible to ignore.
          </p>
          <div className="mt-6">
            <Link to="/dashboard">
              <Button size="lg" icon={ArrowRight}>
                Start Day 1 →
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}