<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <strong>Build code daily. Get noticed by top recruiters.</strong>
</p>

<p align="center">
  ABTalks is a mobile-first React web experience for a structured 60-day coding challenge,
  combining daily coding missions, progress tracking, streaks, achievements, and proof-of-work submission.
</p>

<p align="center">
  <a href="https://ab-talks-ps1.vercel.app/">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-ABTalks-10B981?style=for-the-badge" alt="Live Demo" />
  </a>
  <a href="https://github.com/goelshreya3001-droid/Ab_talks_ps1">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository" />
  </a>
</p>

🧠 What is ABTalks?

ABTalks is a 60-day coding challenge platform concept built to encourage consistent, practical development.

The experience is centered around:

Choose a challenge → Complete the daily mission → Submit proof → Track progress → Maintain your streak

The current frontend provides a landing page, personalized dashboard, daily challenge page, profile setup, progress tracking, streak protection, achievements, learning resources, and GitHub/LinkedIn proof submission.

✨ Features

<table>
<tr>
<td width="50%">

📅 60-Day Challenge

A structured 60-day coding journey with a current-day indicator and overall completion progress.

</td>
<td width="50%">

🎯 Daily Mission

The dashboard highlights the current coding mission and provides a direct route to its challenge page.

</td>
</tr>

<tr>
<td width="50%">

🔥 Learning Streak

Displays the learner's current streak and encourages completing the daily challenge before the deadline.

</td>
<td width="50%">

🛡️ Streak Freeze

When a previous day is missed, the dashboard provides a streak-freeze interaction to protect the streak.

</td>
</tr>

<tr>
<td width="50%">

📈 Progress Tracking

A progress bar calculates completion percentage from completed days out of the 60-day challenge.

</td>
<td width="50%">

🏆 Achievements

The dashboard displays milestone achievements such as streaks, builds, weekly completion, and challenge milestones.

</td>
</tr>

<tr>
<td width="50%">

👤 Profile Setup

Learners can enter their name and college to personalize the dashboard.

</td>
<td width="50%">

💾 Local Profile Persistence

The entered name and college are stored in browser localStorage and loaded again by the dashboard.

</td>
</tr>

<tr>
<td width="50%">

🔗 Proof of Work

The challenge page accepts GitHub repository/commit and LinkedIn post URLs as daily proof.

</td>
<td width="50%">

📚 Learning Resources

Challenge resources can be opened directly through external links such as documentation, guides, and repositories.

</td>
</tr>

<tr>
<td width="50%">

☀️ / 🌙 Focus Experience

The dashboard includes a "Night Owl Focus Mode" section with a late-night productivity message.

</td>
<td width="50%">

📱 Mobile-First UI

The interface uses compact cards, responsive utility classes, and a narrow application layout designed around a mobile-first experience.

</td>
</tr>
</table>

🔄 Product Workflow

flowchart LR
    A["👤 Learner"] --> B["🌐 Landing Page"]
    B --> C["📊 Dashboard"]
    C --> D["📅 Today's Mission"]
    D --> E["💻 Challenge Day"]
    E --> F["📝 Complete Requirements"]
    F --> G["🔗 Submit GitHub Proof"]
    G --> H["🔗 Submit LinkedIn Proof"]
    H --> I["✅ Submission State"]
    I --> C

🏗️ Application Architecture

The current implementation is a frontend-only React application with route-based pages and local browser persistence for the profile.

flowchart TB

    USER["👤 Learner"]

    subgraph REACT["⚛️ React Application"]
        ROUTER["React Router"]

        LANDING["🏠 LandingPage"]
        DASHBOARD["📊 DashboardPage"]
        DAY["📅 ChallengeDayPage"]

        COMPONENTS["🧩 Reusable Components"]

        CARD["Card"]
        BUTTON["Button"]
        BADGE["Badge"]
        PROGRESS["ProgressBar"]
        PROOF["ProofCard"]
        TASK["TaskCard"]
        CHECKLIST["Checklist"]
        RESOURCE["ResourceCard"]
        ACHIEVEMENT["AchievementCard"]
        STREAK["StreakCard"]
        NAV["Navbar / BottomNav"]
    end

    DATA["📦 mockData.js"]
    STORAGE["💾 Browser localStorage"]
    DEPLOY["▲ Vercel"]

    USER --> ROUTER

    ROUTER --> LANDING
    ROUTER --> DASHBOARD
    ROUTER --> DAY

    LANDING --> DASHBOARD
    DASHBOARD --> DAY

    DASHBOARD --> COMPONENTS
    DAY --> COMPONENTS

    DATA --> DASHBOARD
    DATA --> DAY

    DASHBOARD --> STORAGE

    REACT --> DEPLOY

🗺️ Page & Route Flow

The application currently exposes three main routes:

flowchart TD
    ROOT["/"] --> LANDING["🏠 Landing Page"]

    LANDING --> DASH["/dashboard"]
    DASH --> DAY["/day/:dayId"]

    DAY --> DASH

Route

Page

Purpose

/

Landing Page

Introduces the 60-day challenge and starts the experience

/dashboard

Dashboard Page

Shows profile, streak, mission, progress, proof status, and achievements

/day/:dayId

Challenge Day Page

Shows a daily challenge and accepts GitHub + LinkedIn proof URLs

📊 Dashboard Workflow

flowchart TD
    DASH["📊 Dashboard"]

    DASH --> PROFILE["👤 Profile"]
    DASH --> STREAK["🔥 Learning Streak"]
    DASH --> MISSION["🎯 Today's Mission"]
    DASH --> PROGRESS["📈 60-Day Progress"]
    DASH --> PROOF["🔗 Daily Proof Status"]
    DASH --> ACHIEVEMENTS["🏆 Milestone Achievements"]

    PROFILE --> STORAGE["💾 localStorage"]
    MISSION --> CHALLENGE["📅 Challenge Page"]

Dashboard includes

Personalized greeting

Name and college

Current day / 60

Profile completion prompt

Profile editing form

Learning streak

Missed-day warning

Streak freeze interaction

Night Owl Focus Mode

Today's mission

60-day progress bar

GitHub proof status

LinkedIn proof status

Milestone achievements

👤 Profile Persistence

The profile form currently collects:

Name

College

The values are stored in browser storage.

flowchart LR
    A["👤 User"] --> B["Complete Profile"]
    B --> C["Enter Name + College"]
    C --> D["Save Profile"]
    D --> E["localStorage"]
    E --> F["Dashboard Reload"]
    F --> G["Personalized Profile"]

Current implementation note: profile persistence is client-side through browser localStorage. There is no backend account/database system in the current version.

🔥 Streak & Streak Freeze

The dashboard provides two streak-related experiences.

Active streak

🔥 Current Streak
       ↓
Complete today's challenge
       ↓
Keep the momentum alive

Missed day

flowchart TD
    A["Missed Previous Day"] --> B["⚠️ Missed-Day Warning"]
    B --> C{"Streak Freeze Available?"}
    C -->|Yes| D["🛡️ Use Streak Freeze"]
    D --> E["✅ Streak Protected"]
    C -->|No| F["No Freeze Available"]

📝 Daily Challenge Workflow

The challenge page contains:

Day number

Submission deadline

Challenge title

Challenge description

Night Owl Tip

GitHub repository/commit URL field

LinkedIn post URL field

Proof submission button

Completed state

flowchart TD
    A["📅 Open Challenge"] --> B["📖 Read Mission"]
    B --> C["💻 Complete Coding Work"]
    C --> D["🔗 Enter GitHub URL"]
    D --> E["🔗 Enter LinkedIn URL"]
    E --> F["Submit Proof"]
    F --> G{"Both URLs Provided?"}
    G -->|No| H["⚠️ Complete Required Fields"]
    H --> D
    G -->|Yes| I["✅ Completed State"]
    I --> J["Return to Dashboard"]

🔗 Proof Submission

The current UI supports two proof types:

GitHub Proof

Learners can provide:

GitHub repository URL

GitHub commit URL

LinkedIn Proof

Learners can provide:

LinkedIn post URL

The ProofCard component also provides a short "Verifying..." UI state before marking the submitted link as verified in the frontend state.

Important: the current version does not perform server-side GitHub or LinkedIn API verification. The verification interaction is currently frontend-only.

🏆 Achievement System

The current mock data includes achievements such as:

Achievement

Description

🔥 7 Day Streak

Maintained 7 consecutive builds

🏗️ 10 Builds

Pushed 10 projects to GitHub

📈 100% This Week

Zero missed days in the current week

🚀 First Week Complete

Finished Days 1 through 7

🎯 Halfway Hero

Reach 30 completed days

Achievements can appear as unlocked or locked states.

📚 Challenge Resources

The challenge data supports external resources with:

Resource title

Description

Type

External URL

Examples in the current data include:

FastAPI Official Documentation

RESTful API Design Standards

ABTalks FastAPI Starter Template

Resources open in a new browser tab.

🧩 Reusable Components

The project contains reusable UI components including:

src/Components/
│
├── AchievementCard.jsx
├── Badge.jsx
├── BottomNav.jsx
├── Button.jsx
├── Card.jsx
├── Checklist.jsx
├── Navbar.jsx
├── ProgressBar.jsx
├── ProofCard.jsx
├── ResourceCard.jsx
├── StreakCard.jsx
└── TaskCard.jsx

This component-based structure keeps common UI patterns reusable across the application.

🛠️ Tech Stack

Technology

Usage

⚛️ React 19

Frontend UI

🛣️ React Router 7

Client-side routing

⚡ Vite 8

Development server and build tool

🎨 Tailwind CSS 4

Styling and responsive UI

🧩 Lucide React

Icons

💾 Browser localStorage

Profile persistence

🐙 GitHub

Source control

▲ Vercel

Deployment

📁 Project Structure

Ab_talks_ps1/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── Components/
│   │   ├── AchievementCard.jsx
│   │   ├── Badge.jsx
│   │   ├── BottomNav.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Checklist.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── ProofCard.jsx
│   │   ├── ResourceCard.jsx
│   │   ├── StreakCard.jsx
│   │   └── TaskCard.jsx
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── ChallengeDayPage.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md

🚀 Getting Started

1. Clone the repository

git clone https://github.com/goelshreya3001-droid/Ab_talks_ps1.git

2. Navigate into the project

cd Ab_talks_ps1

3. Install dependencies

npm install

4. Start the development server

npm run dev

5. Create a production build

npm run build

6. Preview the production build

npm run preview

🌐 Deployment

The current application is deployed on Vercel.

flowchart LR
    DEV["👩‍💻 Developer"] --> CODE["💻 React + Vite Project"]
    CODE --> GIT["🐙 GitHub Repository"]
    GIT --> VERCEL["▲ Vercel"]
    VERCEL --> LIVE["🌐 Live ABTalks"]

🔗 Live Demo

https://ab-talks-ps1.vercel.app/

📦 GitHub Repository

https://github.com/goelshreya3001-droid/Ab_talks_ps1

🔮 Future Scope

The current application is frontend-focused. Possible future extensions include:

🔐 Real user authentication

☁️ Cloud-based profile storage

🗄️ Backend/database integration

🔍 Real GitHub API verification

🔗 Real LinkedIn verification/integration

📊 Persistent challenge completion history

🏆 Dynamic achievement unlocking

🔔 Challenge reminders

👥 Community and leaderboard features

These are future possibilities, not current implemented features.

🎯 Product Vision

ABTalks is designed around a simple idea:

       BUILD
         ↓
      DOCUMENT
         ↓
       PROVE
         ↓
      PROGRESS
         ↓
       REPEAT

The long-term goal is to make consistent coding practice easier to follow, easier to document, and easier to demonstrate.

👩‍💻 Author

Shreya Goel

B.Tech CSE — ABES Engineering College

<p align="center">
  <a href="https://github.com/goelshreya3001-droid">
    <img src="https://img.shields.io/badge/GitHub-Shreya%20Goel-181717?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
</p>

<p align="center">
  <a href="https://ab-talks-ps1.vercel.app/">
    <img src="https://img.shields.io/badge/🚀%20TRY%20ABTALKS-LIVE%20DEMO-10B981?style=for-the-badge" alt="Try ABTalks" />
  </a>
</p>

<p align="center">
  <strong>Build code daily. Prove your consistency. 🚀</strong>
</p>
