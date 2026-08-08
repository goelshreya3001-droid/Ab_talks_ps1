import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  CheckCircle2,
  Circle,
  Code2,
  UserRound,
  ArrowRight,
  Moon,
  Flame,
  ShieldAlert,
  Sparkles,
  Trophy,
  User
} from 'lucide-react';

export function DashboardPage({
  student,
  task,
  achievements
}) {
  // =========================================================
  // DEFAULT STUDENT DATA
  // Handles empty profile + first day + missed day
  // =========================================================

  const defaultStudent = {
    name: '',
    college: '',
    track: 'Full-Stack Web Development',
    avatar: null,

    currentDay: 1,
    completedDays: 0,
    totalDays: 60,

    streakCount: 0,

    missedYesterday: false,

    githubConnected: false,
    linkedinConnected: false,

    streakFreezes: 1
  };

  const currentStudent = {
    ...defaultStudent,
    ...(student || {})
  };

  // =========================================================
  // STATES
  // =========================================================

  const [streakFreezes, setStreakFreezes] = useState(
    currentStudent.streakFreezes || 0
  );

  const [streakRestored, setStreakRestored] = useState(false);

  // =========================================================
  // TASK DATA
  // =========================================================

  const currentTask = task || {
    day: currentStudent.currentDay || 1,

    title: 'Set Up Your Development Environment',

    description:
      'Create your first Git repository, add a README.md, and make your first commit.'
  };

  // =========================================================
  // ACHIEVEMENTS
  // =========================================================

  const userAchievements = achievements || [];

  // =========================================================
  // PROFILE CHECK
  // =========================================================

  const hasProfile =
    Boolean(currentStudent.name) ||
    Boolean(currentStudent.college);

  const displayName =
    currentStudent.name || 'New Student';

  const displayCollege =
    currentStudent.college || 'Complete your profile';

  // =========================================================
  // STREAK
  // =========================================================

  const streakCount = currentStudent.streakCount || 0;

  // =========================================================
  // PROGRESS
  // =========================================================

  const completedDays =
    currentStudent.completedDays || 0;

  const totalDays =
    currentStudent.totalDays || 60;

  const progressPercentage = Math.min(
    100,
    Math.round((completedDays / totalDays) * 100)
  );

  // =========================================================
  // TODAY COMPLETE
  // =========================================================

  const isTodayComplete =
    completedDays >= currentStudent.currentDay;

  // =========================================================
  // STREAK FREEZE
  // =========================================================

  const handleUseFreeze = () => {
    if (streakFreezes > 0) {
      setStreakFreezes((previous) => previous - 1);
      setStreakRestored(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-4 max-w-97.5 mx-auto space-y-4">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">

        <div className="flex items-center justify-between">

          {/* Profile */}
          <div className="flex items-center gap-3">

            {currentStudent.avatar ? (
              <img
                src={currentStudent.avatar}
                alt={displayName}
                className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border-2 border-emerald-200">
                {hasProfile ? (
                  <span className="font-extrabold">
                    {displayName.charAt(0).toUpperCase()}
                  </span>
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>
            )}

            <div>
              <h1 className="text-sm font-extrabold text-slate-900">
                {hasProfile
                  ? `Good evening, ${displayName} 👋`
                  : 'Welcome to ABTalks 👋'}
              </h1>

              <p className="text-[11px] text-slate-500 mt-0.5">
                {displayCollege}
              </p>
            </div>

          </div>

          {/* Day Badge */}
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-full border border-emerald-200 whitespace-nowrap">
            Day {currentStudent.currentDay}/60
          </span>

        </div>

        {/* ABTalks Explanation */}
        <div className="mt-3 pt-3 border-t border-slate-100">

          <p className="text-[11px] text-slate-500 leading-relaxed">
            <span className="font-bold text-slate-700">
              ABTalks 60-Day Challenge
            </span>{' '}
            helps you build coding skills by completing one practical
            task every day and sharing your proof of work.
          </p>

        </div>

      </header>

      {/* =====================================================
          EMPTY PROFILE
      ====================================================== */}

      {!hasProfile && (
        <div className="bg-white border border-slate-200 rounded-2xl p-4">

          <div className="flex items-start gap-3">

            <div className="bg-slate-100 p-2 rounded-xl">
              <User className="w-4 h-4 text-slate-600" />
            </div>

            <div className="flex-1">

              <h2 className="text-xs font-bold text-slate-900">
                Complete your profile
              </h2>

              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                Add your name and college to personalize your
                ABTalks challenge experience.
              </p>

              <button
                type="button"
                className="mt-3 bg-slate-900 text-white px-3 py-2 rounded-lg text-[11px] font-bold"
              >
                Complete Profile
              </button>

            </div>

          </div>

        </div>
      )}

      {/* =====================================================
          NIGHT OWL FOCUS MODE
          Thoughtful UX Feature
      ====================================================== */}

      <div className="bg-slate-900 text-white p-4 rounded-2xl">

        <div className="flex items-start justify-between">

          <div className="flex items-start gap-2.5">

            <div className="bg-slate-800 p-2 rounded-lg">
              <Moon className="w-4 h-4 text-amber-400" />
            </div>

            <div>

              <h2 className="text-xs font-bold text-white">
                Night Owl Focus Mode
              </h2>

              <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                Working late after college? Finish your GitHub
                proof first, then submit your LinkedIn proof.
              </p>

            </div>

          </div>

          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />

        </div>

      </div>

      {/* =====================================================
          MISSED DAY
      ====================================================== */}

      {currentStudent.missedYesterday &&
        !streakRestored && (
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl">

            <div className="flex items-start gap-2">

              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />

              <div>

                <h2 className="text-xs font-bold text-amber-900">
                  You missed yesterday
                </h2>

                <p className="text-[11px] text-amber-800 mt-1 leading-relaxed">
                  Don't worry. One missed day doesn't mean your
                  challenge is over.
                </p>

              </div>

            </div>

            <button
              type="button"
              onClick={handleUseFreeze}
              disabled={streakFreezes <= 0}
              className="w-full mt-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-bold py-2.5 rounded-xl text-[11px]"
            >
              {streakFreezes > 0
                ? `Use Streak Freeze (${streakFreezes} left)`
                : 'No Streak Freeze Available'}
            </button>

          </div>
        )}

      {/* =====================================================
          STREAK RESTORED
      ====================================================== */}

      {streakRestored && (
        <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl">

          <div className="flex items-center gap-2">

            <CheckCircle2 className="w-4 h-4 text-emerald-600" />

            <p className="text-[11px] font-bold text-emerald-800">
              Your streak has been protected. Keep going!
            </p>

          </div>

        </div>
      )}

      {/* =====================================================
          STREAK CARD
      ====================================================== */}

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">

        <div className="flex items-center justify-between">

          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Learning Streak
          </span>

          <Flame
            className={`w-5 h-5 ${
              streakCount > 0
                ? 'text-amber-500'
                : 'text-slate-300'
            }`}
          />

        </div>

        {streakCount === 0 ? (

          /* First Day / Zero Streak */

          <div className="mt-3">

            <h2 className="text-lg font-black text-slate-900">
              Start Your Streak Today 🚀
            </h2>

            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Complete today's challenge and submit your proof
              of work to start your 60-day journey.
            </p>

          </div>

        ) : (

          /* Active Streak */

          <div className="mt-2 flex items-baseline gap-2">

            <span className="text-3xl font-black text-slate-900">
              {streakCount}
            </span>

            <span className="text-xs font-semibold text-slate-500">
              day streak 🔥
            </span>

          </div>

        )}

      </div>

      {/* =====================================================
          TODAY'S MISSION
      ====================================================== */}

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">

        <div className="flex items-center justify-between">

          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Today's Mission
          </span>

          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            Day {currentTask.day}
          </span>

        </div>

        <div className="mt-3">

          <h2 className="text-sm font-extrabold text-slate-900 leading-snug">
            {currentTask.title}
          </h2>

          <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
            {currentTask.description}
          </p>

        </div>

        <Link
          to={`/day/${currentTask.day}`}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-xl text-xs"
        >
          {isTodayComplete
            ? 'View Completed Task'
            : 'Start Today’s Task'}

          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

      </div>

      {/* =====================================================
          PROGRESS
      ====================================================== */}

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">

        <div className="flex items-center justify-between">

          <h2 className="text-xs font-bold text-slate-900">
            60-Day Challenge Progress
          </h2>

          <span className="text-[10px] font-bold text-emerald-600">
            {progressPercentage}%
          </span>

        </div>

        {/* Progress Bar */}

        <div className="w-full h-2 bg-slate-100 rounded-full mt-3 overflow-hidden">

          <div
            className="h-full bg-emerald-500 rounded-full transition-all"
            style={{
              width: `${progressPercentage}%`
            }}
          />

        </div>

        <div className="flex justify-between mt-2">

          <span className="text-[9px] text-slate-400">
            Day 1
          </span>

          <span className="text-[9px] text-slate-400">
            Day 30
          </span>

          <span className="text-[9px] text-slate-400">
            Day 60
          </span>

        </div>

      </div>

      {/* =====================================================
          PROOF VERIFICATION
      ====================================================== */}

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">

        <h2 className="text-xs font-bold text-slate-900 mb-3">
          Daily Proof Verification
        </h2>

        {/* GitHub */}

        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">

          <div className="flex items-center gap-2">

            <Code2 className="w-4 h-4 text-slate-700" />

            <span className="text-xs font-semibold text-slate-800">
              GitHub Commit
            </span>

          </div>

          {currentStudent.githubConnected ? (

            <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified
            </span>

          ) : (

            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Circle className="w-3.5 h-3.5" />
              Pending
            </span>

          )}

        </div>

        {/* LinkedIn */}

        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 mt-2">

          <div className="flex items-center gap-2">

            <UserRound className="w-4 h-4 text-sky-600" />

            <span className="text-xs font-semibold text-slate-800">
              LinkedIn Post
            </span>

          </div>

          {currentStudent.linkedinConnected ? (

            <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified
            </span>

          ) : (

            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Circle className="w-3.5 h-3.5" />
              Pending
            </span>

          )}

        </div>

      </div>

      {/* =====================================================
          ACHIEVEMENTS
      ====================================================== */}

      <div>

        <h2 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
          Milestone Achievements
        </h2>

        {userAchievements.length > 0 ? (

          <div className="space-y-2">

            {userAchievements.map((item) => (

              <div
                key={item.id}
                className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3"
              >

                <div className="p-2 bg-amber-50 rounded-lg">
                  <Trophy className="w-4 h-4 text-amber-500" />
                </div>

                <div>

                  <h3 className="text-xs font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-[10px] text-slate-500">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        ) : (

          /* Empty Achievement State */

          <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center">

            <Trophy className="w-5 h-5 text-slate-300 mx-auto" />

            <h3 className="text-xs font-bold text-slate-700 mt-2">
              Your first badge is waiting
            </h3>

            <p className="text-[10px] text-slate-400 mt-1">
              Complete Day 15 to unlock your first milestone badge.
            </p>

          </div>

        )}

      </div>

      {/* Bottom spacing */}
      <div className="h-4" />

    </div>
  );
}