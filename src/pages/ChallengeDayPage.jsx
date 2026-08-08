import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Code2,
  UserRound,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

export function ChallengeDayPage() {
  const { dayId = '12' } = useParams();

  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (githubUrl && linkedinUrl) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-4 max-w-97.5 mx-auto space-y-4">

      {/* Top Header */}
      <div className="flex items-center justify-between">
        <Link
          to="/dashboard"
          className="flex items-center gap-1 text-xs font-semibold text-slate-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          Day {dayId} / 60
        </span>
      </div>

      {/* Task Description */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold">
          <Clock className="w-3.5 h-3.5" />
          Submit by 11:59 PM Tonight
        </div>

        <h1 className="text-base font-extrabold text-slate-900">
          Build a REST API with Authentication
        </h1>

        <p className="text-xs text-slate-600 leading-relaxed">
          Create an Express.js backend with JWT authentication.
          Implement login, registration, and password hashing using bcrypt.
        </p>
      </div>

      {/* Night-Owl Tip */}
      <div className="bg-slate-900 text-white p-3.5 rounded-2xl text-xs space-y-1">
        <div className="flex items-center gap-1.5 font-bold text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          Night Owl Tip
        </div>

        <p className="text-slate-300 text-[11px]">
          Working late after classes? Push code to a public GitHub repo
          before drafting your LinkedIn post!
        </p>
      </div>

      {/* Submission Card */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Submit Daily Proof of Work
        </h2>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />

            <h3 className="text-sm font-bold text-emerald-900">
              Day {dayId} Completed!
            </h3>

            <p className="text-xs text-emerald-700">
              Your streak has been updated for today.
            </p>

            <Link
              to="/dashboard"
              className="inline-block mt-2 text-xs font-bold text-emerald-600 underline"
            >
              Return to Dashboard
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">

            {/* GitHub URL */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
                <Code2 className="w-3.5 h-3.5" />
                GitHub Repository / Commit URL
              </label>

              <input
                type="url"
                required
                placeholder="https://github.com/username/repo"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* LinkedIn URL */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
                <UserRound className="w-3.5 h-3.5 text-sky-600" />
                LinkedIn Post URL
              </label>

              <input
                type="url"
                required
                placeholder="https://linkedin.com/posts/..."
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-xl text-xs transition-all shadow-xs"
            >
              Submit Proof of Work
            </button>

          </form>
        )}
      </div>

    </div>
  );
}