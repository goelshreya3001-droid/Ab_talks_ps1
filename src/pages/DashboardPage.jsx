
import React from 'react';
import {
  CheckCircle2,
  Circle
} from 'lucide-react';

import { Badge } from '../Components/Badge';
import { Card } from '../Components/Card';
import { ProgressBar } from '../Components/ProgressBar';
import { StreakCard } from '../Components/StreakCard';
import { TaskCard } from '../Components/TaskCard';
import { AchievementCard } from '../Components/AchievementCard';

export function DashboardPage({
  student,
  task,
  achievements,
  onResumeStreak
}) {
  const isTodayComplete =
    student?.completedDays >= student?.currentDay;

  return (
    <div className="space-y-6">

      {/* Top Welcome Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Good evening, {student?.name} 👋
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          {student?.college} • {student?.track}
        </p>

        <div className="mt-3">
          <Badge variant="emerald" size="md">
            Day {student?.currentDay} of 60
          </Badge>
        </div>
      </div>

      {/* Streak Safety & Momentum Card */}
      <StreakCard
        student={student}
        onResume={onResumeStreak}
      />

      {/* Main Mission Card */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Today's Mission
          </h2>

          <span className="text-xs font-semibold text-emerald-600">
            Day {task?.day} / 60
          </span>
        </div>

        <TaskCard
          task={task}
          completed={isTodayComplete}
        />
      </div>

      {/* Overall Progression Bar */}
      <Card>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-slate-900">
            60-Day Progress
          </h3>

          <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
            {Math.round(
              ((student?.completedDays || 0) /
                (student?.totalDays || 60)) *
                100
            )}
            % Complete
          </span>
        </div>

        <ProgressBar
          current={student?.completedDays || 0}
          total={student?.totalDays || 60}
          showLabel={false}
        />

        {/* Milestones Visual Row */}
        <div className="grid grid-cols-4 gap-2 mt-4 text-center">
          {[15, 30, 45, 60].map((m) => {
            const isPassed =
              (student?.completedDays || 0) >= m;

            return (
              <div
                key={m}
                className={`p-2 rounded-xl border text-xs font-semibold ${
                  isPassed
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <div>Day {m}</div>

                <div className="text-[10px] font-normal mt-0.5">
                  {isPassed ? '✓ Achieved' : 'Locked'}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Proof-Of-Work Verification Integration Status */}
      <Card>
        <h3 className="text-sm font-bold text-slate-900 mb-3">
          Daily Proof Verification Status
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          {/* GitHub */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">

              <svg
                className="w-4 h-4 text-slate-900"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>

              <span>GitHub</span>
            </div>

            {student?.githubConnected ? (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Connected
              </span>
            ) : (
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Circle className="w-3.5 h-3.5" />
                Not submitted
              </span>
            )}
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">

              <svg
                className="w-4 h-4 text-sky-600"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
              </svg>

              <span>LinkedIn</span>
            </div>

            {student?.linkedinConnected ? (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Today's post submitted
              </span>
            ) : (
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Circle className="w-3.5 h-3.5" />
                Not submitted
              </span>
            )}
          </div>

        </div>
      </Card>

      {/* Achievements Showcase */}
      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
          Milestone Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {achievements?.map((a) => (
            <AchievementCard
              key={a.id}
              achievement={a}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

