🚀 ABTalks — 60-Day Coding Challenge

<p align="center">
  <img src="https://img.shields.io/badge/🚀-ABTalks-111827?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-Live-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

<h3 align="center">Build code daily. Prove your consistency. Get noticed.</h3>

<p align="center">
  A focused 60-day coding challenge experience that turns daily practice into
  measurable progress, streaks, achievements, and proof of work.
</p>

<p align="center">
  <a href="https://ab-talks-ps1.vercel.app/">
    <img src="https://img.shields.io/badge/🌐%20LIVE%20DEMO-Open%20ABTalks-10B981?style=for-the-badge" />
  </a>
  &nbsp;
  <a href="https://github.com/goelshreya3001-droid/Ab_talks_ps1">
    <img src="https://img.shields.io/badge/💻%20SOURCE-GitHub-181717?style=for-the-badge&logo=github" />
  </a>
</p>

⚡ The Idea

Most coding challenges tell you what to solve.

ABTalks is designed around the complete loop:

        📅 DAILY CHALLENGE
               ↓
          💻 BUILD IT
               ↓
        🔗 SUBMIT PROOF
               ↓
          📊 TRACK IT
               ↓
          🔥 KEEP STREAK
               ↓
          🏆 EARN ACHIEVEMENTS
               ↓
            🔁 REPEAT

60 days. One daily mission. Consistent proof of progress.

✨ Why ABTalks?

<table>
<tr>
<td align="center" width="25%">

📅

60 Days

Structured coding journey

</td>
<td align="center" width="25%">

🔥

Streaks

Stay consistent every day

</td>
<td align="center" width="25%">

🔗

Proof

Submit your work

</td>
<td align="center" width="25%">

🏆

Achievements

Celebrate milestones

</td>
</tr>
</table>

🎯 What Problem Does It Solve?

A typical coding journey can become:

Solve → Forget → Lose Track → Stop

ABTalks turns it into:

Choose Mission
      ↓
Complete Work
      ↓
Submit Proof
      ↓
Track Progress
      ↓
Protect Streak
      ↓
Reach Milestone
      ↓
Continue

The product focuses on consistency + visibility + accountability rather than simply showing a list of tasks.

🧩 Feature Highlights

<table>
<tr>
<td width="50%">

📊 Smart Dashboard

The dashboard brings the learner's current journey into one place:

Personalized profile

Current challenge day

Today's mission

60-day progress

Learning streak

Daily proof status

Achievements

Streak freeze

Focus mode

</td>

<td width="50%">

🎯 Daily Mission

Each challenge day provides:

Day number

Challenge title

Description

Deadline

Checklist

Learning resources

Practical coding task

Proof submission

</td>
</tr>

<tr>
<td>

🔥 Streak System

The experience encourages daily consistency with:

Current streak

Missed-day warning

Streak freeze interaction

Daily completion flow

</td>

<td>

🏆 Achievement System

Milestones represent progress such as:

7-day streak

10 builds

100% weekly completion

First week complete

Halfway milestone

</td>
</tr>

<tr>
<td>

👤 Personalized Profile

Learners can provide:

Name

College

The current implementation stores this profile information locally in the browser.

</td>

<td>

🔗 Proof of Work

Daily challenges provide proof fields for:

GitHub repository / commit

LinkedIn post

The UI gives immediate submission and verification feedback.

</td>
</tr>
</table>

🏗️ Application Architecture

flowchart TB

    USER["👤 Learner"]

    subgraph APP["⚛️ ABTalks React Application"]

        ROUTER["🛣️ React Router"]

        LANDING["🏠 Landing Page"]
        DASH["📊 Dashboard Page"]
        DAY["📅 Challenge Day Page"]

        subgraph UI["🧩 Reusable UI Components"]
            NAV["Navbar / BottomNav"]
            CARD["Cards"]
            TASK["TaskCard"]
            PROOF["ProofCard"]
            STREAK["StreakCard"]
            ACHIEVE["AchievementCard"]
            PROGRESS["ProgressBar"]
            RESOURCE["ResourceCard"]
            CHECKLIST["Checklist"]
            BUTTON["Buttons / Badges"]
        end

        DATA["📦 mockData.js"]
        STORAGE["💾 Browser localStorage"]
    end

    DEPLOY["▲ Vercel"]

    USER --> ROUTER

    ROUTER --> LANDING
    ROUTER --> DASH
    ROUTER --> DAY

    DASH --> UI
    DAY --> UI

    DATA --> DASH
    DATA --> DAY

    DASH --> STORAGE

    APP --> DEPLOY

🔄 Complete User Journey

flowchart LR

    A["👤 Start"] --> B["🏠 Landing Page"]

    B --> C["📊 Dashboard"]

    C --> D["🎯 Today's Mission"]

    D --> E["📅 Challenge Day"]

    E --> F["📖 Read Mission"]

    F --> G["💻 Complete Coding Task"]

    G --> H["🔗 Submit GitHub Proof"]

    H --> I["🔗 Submit LinkedIn Proof"]

    I --> J{"✅ Proof Submitted?"}

    J -->|No| K["⚠️ Complete Required Fields"]
    K --> H

    J -->|Yes| L["🎉 Completed State"]

    L --> M["📊 Return to Dashboard"]

    M --> N["🔥 Track Streak"]

    N --> O["🏆 Check Achievements"]

    O --> P["➡️ Continue Challenge"]

    P --> D

📅 Challenge Page Workflow

flowchart TD

    START["📅 Open /day/:dayId"]

    START --> HEADER["🎯 Challenge Header"]

    HEADER --> DESCRIPTION["📖 Mission Description"]

    DESCRIPTION --> CHECK["☑️ Checklist"]

    CHECK --> RESOURCES["📚 Learning Resources"]

    RESOURCES --> BUILD["💻 Build / Complete Task"]

    BUILD --> GITHUB["🐙 GitHub Proof"]

    BUILD --> LINKEDIN["💼 LinkedIn Proof"]

    GITHUB --> SUBMIT["🚀 Submit Proof"]
    LINKEDIN --> SUBMIT

    SUBMIT --> VERIFIED["✅ Frontend Verified State"]

    VERIFIED --> COMPLETE["🎉 Challenge Completed"]

Implementation note: the current verification interaction is frontend-only. The app does not currently call GitHub or LinkedIn APIs for server-side verification.

📈 Progress System

The challenge is represented as a 60-day journey.

flowchart TD

    TASK["✅ Completed Day"]

    TASK --> COUNT["📊 Completed Days"]

    COUNT --> CALC["🧮 Progress Calculation"]

    CALC --> BAR["📈 Progress Bar"]

    CALC --> DAY["📅 Current Day"]

    CALC --> ACHIEVE["🏆 Achievement Progress"]

    BAR --> DASH["📊 Dashboard"]
    DAY --> DASH
    ACHIEVE --> DASH

The progress indicator is based on the number of completed challenge days relative to the 60-day challenge.

🔥 Streak & Streak Freeze

ABTalks includes a dedicated consistency experience.

flowchart TD

    START["📅 Daily Challenge"]

    START --> COMPLETE{"Completed?"}

    COMPLETE -->|Yes| KEEP["🔥 Keep Streak"]
    COMPLETE -->|No| MISSED["⚠️ Missed Day"]

    MISSED --> FREEZE{"🛡️ Streak Freeze?"}

    FREEZE -->|Available| PROTECT["✅ Protect Streak"]
    FREEZE -->|Unavailable| BREAK["Streak Impact"]

    KEEP --> NEXT["➡️ Next Challenge"]
    PROTECT --> NEXT
    BREAK --> NEXT

    NEXT --> START

🏆 Achievement Journey

flowchart LR

    A["🌱 Start"] --> B["🔥 7 Day Streak"]

    B --> C["🏗️ 10 Builds"]

    C --> D["📈 100% This Week"]

    D --> E["🚀 First Week Complete"]

    E --> F["🎯 Halfway Hero"]

    F --> G["🏆 Continue the Journey"]

The current achievement data includes:

🏆 Achievement

🎯 Goal

🔥 7 Day Streak

Maintain 7 consecutive builds

🏗️ 10 Builds

Push 10 projects to GitHub

📈 100% This Week

Zero missed days in the week

🚀 First Week Complete

Finish Days 1–7

🎯 Halfway Hero

Reach 30 completed days

👤 Profile Persistence

Profile setup is intentionally lightweight in the current frontend.

flowchart LR

    USER["👤 Learner"]

    USER --> FORM["📝 Profile Form"]

    FORM --> NAME["Name"]
    FORM --> COLLEGE["College"]

    NAME --> SAVE["💾 Save"]
    COLLEGE --> SAVE

    SAVE --> LS["Browser localStorage"]

    LS --> DASH["📊 Personalized Dashboard"]

Current behavior

Name is stored locally

College is stored locally

Dashboard reads the saved values

No backend account/database is used

📚 Learning Resources

Daily challenges can provide external learning resources.

flowchart LR

    DAY["📅 Challenge"]

    DAY --> RESOURCE["📚 Resource Card"]

    RESOURCE --> DOCS["📖 Documentation"]
    RESOURCE --> GUIDE["🧠 Guide"]
    RESOURCE --> REPO["💻 Repository / Template"]

    DOCS --> EXT["🌐 External Link"]
    GUIDE --> EXT
    REPO --> EXT

The current challenge data includes resources such as:

FastAPI Official Documentation

RESTful API Design Standards

ABTalks FastAPI Starter Template

🛣️ Application Routes

Route

Page

Purpose

/

🏠 Landing

Introduces the challenge and starts the experience

/dashboard

📊 Dashboard

Tracks profile, mission, progress, streak, proof and achievements

/day/:dayId

📅 Challenge Day

Displays a daily mission and proof submission

🧩 Component Architecture

src/
│
├── Components/
│   ├── AchievementCard
│   ├── Badge
│   ├── BottomNav
│   ├── Button
│   ├── Card
│   ├── Checklist
│   ├── Navbar
│   ├── ProgressBar
│   ├── ProofCard
│   ├── ResourceCard
│   ├── StreakCard
│   └── TaskCard
│
├── data/
│   └── mockData.js
│
├── pages/
│   ├── LandingPage
│   ├── DashboardPage
│   └── ChallengeDayPage
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

🛠️ Tech Stack

<p align="center">

Technology

Role

⚛️ React 19

UI development

⚡ Vite 8

Build tooling

🎨 Tailwind CSS 4

Styling & responsive design

🛣️ React Router 7

Client-side routing

🧩 Lucide React

Icons

💾 localStorage

Local profile persistence

🐙 GitHub

Version control

▲ Vercel

Deployment

</p>

🎨 Design Direction

ABTalks uses a compact, modern interface designed around:

┌──────────────────────────────┐
│  👤 Profile       🔥 Streak  │
├──────────────────────────────┤
│                              │
│       🎯 Today's Mission     │
│                              │
├──────────────────────────────┤
│       📈 Your Progress       │
├──────────────────────────────┤
│       🔗 Proof of Work       │
├──────────────────────────────┤
│       🏆 Achievements        │
├──────────────────────────────┤
│      🧭 Navigation            │
└──────────────────────────────┘

The design emphasizes quick scanning, clear progress feedback, and action-oriented cards.

🚀 Run Locally

# Clone
git clone https://github.com/goelshreya3001-droid/Ab_talks_ps1.git

# Enter project
cd Ab_talks_ps1

# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

🌐 Deployment Flow

flowchart LR

    DEV["👩‍💻 Developer"]

    DEV --> CODE["⚛️ React + Vite"]

    CODE --> GIT["🐙 GitHub"]

    GIT --> VERCEL["▲ Vercel"]

    VERCEL --> BUILD["⚙️ Production Build"]

    BUILD --> LIVE["🌐 ABTalks"]

    LIVE --> USER["👥 Learner"]

🔗 Live Application

https://ab-talks-ps1.vercel.app/

💻 Repository

https://github.com/goelshreya3001-droid/Ab_talks_ps1

🔮 Future Scope

The following are future possibilities, not current implemented features:

flowchart LR

    CURRENT["🚀 Current Frontend"]

    CURRENT --> AUTH["🔐 Authentication"]
    AUTH --> CLOUD["☁️ Cloud Profiles"]
    CLOUD --> DB["🗄️ Backend Database"]
    DB --> API["🔍 Real Proof Verification"]
    API --> ANALYTICS["📊 Advanced Analytics"]
    ANALYTICS --> COMMUNITY["👥 Community / Leaderboards"]

Potential extensions:

🔐 Real authentication

☁️ Cloud profile persistence

🗄️ Backend/database

🔍 Real GitHub API verification

💼 LinkedIn integration

📊 Persistent challenge history

🏆 Dynamic achievement unlocking

🔔 Notifications

👥 Community and leaderboard features

💡 Product Vision

ABTalks is built around one simple loop:

       📚 LEARN
          ↓
       💻 BUILD
          ↓
       🔗 PROVE
          ↓
       📊 TRACK
          ↓
       🔥 STAY CONSISTENT
          ↓
       🏆 ACHIEVE
          ↓
         REPEAT

Don't just say you are coding.

Build it. Prove it. Track it.

👩‍💻 Author

Shreya Goel

B.Tech CSE — ABES Engineering College

<p align="center">
  <a href="https://github.com/goelshreya3001-droid">
    <img src="https://img.shields.io/badge/GitHub-Shreya%20Goel-181717?style=for-the-badge&logo=github" />
  </a>
</p>

<p align="center">
  <a href="https://ab-talks-ps1.vercel.app/">
    <img src="https://img.shields.io/badge/🚀%20TRY%20ABTALKS-LIVE%20DEMO-10B981?style=for-the-badge" />
  </a>
</p>

<p align="center">
  <strong>Build code daily. Prove your consistency. 🚀</strong>
</p>
