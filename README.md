# 🚀 ABTalks — AI Learning & Progress OS

<p align="center">
  <img src="https://img.shields.io/badge/AI-Learning%20Platform-6366F1?style=for-the-badge&logo=openai&logoColor=white" alt="AI Learning">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-Fast-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</p>

<p align="center">
  <strong>Learn. Build. Prove. Progress.</strong>
</p>

<p align="center">
  A modern, proof-driven learning platform designed to turn an AI engineering curriculum into a measurable and engaging learning journey.
</p>

<p align="center">

🌐 **[Live Demo](https://ab-talks-ps1.vercel.app/)**

</p>

---

## 🧠 What is ABTalks?

**ABTalks** is a gamified AI-learning platform built around a structured **31-day AI Engineering journey**.

Instead of simply consuming educational content, learners follow a complete loop:

> **Learn → Practice → Build → Submit Proof → Track Progress → Repeat**

The platform combines **learning management, progress tracking, streaks, milestones, and proof-of-work verification** into one unified experience.

---

# ✨ Core Features

<table>
<tr>
<td width="50%">

### 📊 Smart Dashboard

A centralized dashboard for:

* Learning progress
* Completed tasks
* Pending activities
* Current streak
* Milestones
* Overall completion

</td>

<td width="50%">

### 📚 Structured Learning

A day-by-day learning journey that guides users through the complete AI engineering roadmap.

</td>
</tr>

<tr>
<td width="50%">

### 🔥 Streak System

Encourages consistency by tracking consecutive learning activity.

</td>

<td width="50%">

### 🏆 Milestones

Visual milestone tracking helps learners understand how far they have progressed.

</td>
</tr>

<tr>
<td width="50%">

### 🔗 Proof of Work

Learners can submit GitHub/project URLs as evidence of completed work.

</td>

<td width="50%">

### 👤 Learner Profile

A personalized profile for tracking learner identity, progress, and achievements.

</td>
</tr>

<tr>
<td width="50%">

### ⚡ Responsive UI

Designed for a clean experience across different screen sizes.

</td>

<td width="50%">

### 🎨 Modern Product Design

Reusable cards, badges, progress indicators, icons, and interactive components create a modern learning experience.

</td>
</tr>
</table>

---

# 🎯 The Problem

Traditional online learning often follows:

```text
Watch Course → Take Notes → Move On
```

This creates a gap between **learning concepts** and **actually demonstrating them**.

Learners may finish courses without having:

* Built practical projects
* Maintained consistency
* Tracked meaningful progress
* Collected evidence of their work

---

# 💡 The ABTalks Solution

ABTalks transforms passive learning into a proof-driven workflow:

```text
       📚 LEARN
          ↓
       🧠 PRACTICE
          ↓
       💻 BUILD
          ↓
       🔗 PROVE
          ↓
       📊 TRACK
          ↓
       🏆 ACHIEVE
```

The platform encourages learners to turn every learning milestone into **practical, verifiable progress**.

---

# 🏗️ System Architecture

```mermaid
flowchart TB

    USER["👤 Learner"]

    subgraph APP["🖥️ ABTalks Application"]
        
        UI["⚛️ React Frontend"]

        subgraph PAGES["📄 Application Pages"]
            DASH["📊 Dashboard"]
            JOURNEY["📚 Learning Journey"]
            TASKS["✅ Tasks"]
            PROOF["🔗 Proof Submission"]
            PROFILE["👤 Profile"]
        end

        subgraph COMPONENTS["🧩 Reusable Components"]
            CARD["Card"]
            BUTTON["Button"]
            BADGE["Badge"]
            PROGRESS["Progress Bar"]
            STREAK["Streak Card"]
            PROOFCARD["Proof Card"]
        end

        STATE["⚙️ Application State"]

        STORAGE["💾 Local Persistence"]
    end

    DEPLOY["▲ Vercel"]

    USER --> UI

    UI --> PAGES

    DASH --> COMPONENTS
    JOURNEY --> COMPONENTS
    TASKS --> COMPONENTS
    PROOF --> COMPONENTS
    PROFILE --> COMPONENTS

    UI --> STATE
    STATE --> STORAGE

    UI --> DEPLOY
```

---

# 🔄 Complete User Workflow

```mermaid
flowchart LR

    A["👤 User"] --> B["🌐 Open ABTalks"]

    B --> C["📊 Dashboard"]

    C --> D["📚 Learning Journey"]

    D --> E["📅 Select Daily Task"]

    E --> F["📖 Learn"]

    F --> G["🧠 Practice"]

    G --> H["💻 Build"]

    H --> I["🔗 Submit Proof"]

    I --> J{"✅ Valid?"}

    J -->|Yes| K["🎉 Complete Task"]

    J -->|No| L["⚠️ Fix Submission"]

    L --> I

    K --> M["📈 Update Progress"]

    M --> N["🔥 Update Streak"]

    N --> O["🏆 Check Milestone"]

    O --> P["➡️ Next Task"]

    P --> D
```

---

# 🔗 Proof-of-Work Workflow

A major part of ABTalks is converting learning into **verifiable work**.

```mermaid
flowchart TD

    A["💻 Complete Assignment"]

    A --> B["🚀 Build / Deploy Project"]

    B --> C["🔗 GitHub / Project URL"]

    C --> D["📋 Submit Proof"]

    D --> E["🔍 Verification"]

    E --> F{"Proof Valid?"}

    F -->|YES| G["✅ Verified"]

    F -->|NO| H["❌ Invalid"]

    H --> I["🔄 Resubmit"]

    I --> D

    G --> J["📊 Progress Updated"]

    J --> K["🔥 Streak Updated"]

    K --> L["🏆 Milestone Checked"]
```

---

# 📈 Progress Tracking

Every completed task contributes to the learner's overall journey.

```mermaid
flowchart TD

    TASK["✅ Task Completed"]

    TASK --> COUNT["📊 Completion Count"]

    COUNT --> PROGRESS["📈 Progress Calculation"]

    PROGRESS --> BAR["Progress Bar"]

    PROGRESS --> MILESTONE["🏆 Milestone"]

    PROGRESS --> STREAK["🔥 Streak"]

    BAR --> DASHBOARD["📊 Dashboard"]

    MILESTONE --> DASHBOARD

    STREAK --> DASHBOARD
```

---

# 🗺️ 31-Day AI Engineering Journey

The platform organizes the learning journey into progressive AI engineering concepts.

```mermaid
flowchart LR

    A["01–05<br/>🤖 AI Foundations"]

    B["06–10<br/>✍️ Prompt Engineering"]

    C["11–15<br/>🔎 RAG & Embeddings"]

    D["16–20<br/>🗄️ Vector Databases"]

    E["21–24<br/>🧠 Agentic AI"]

    F["25–27<br/>🔌 MCP"]

    G["28–29<br/>🚀 AI Deployment"]

    H["30–31<br/>🏭 Production AI"]

    A --> B --> C --> D --> E --> F --> G --> H
```

---

# 🧩 Learning Philosophy

ABTalks is built around three principles:

### 01 — Learn by Doing

Every concept should lead toward practical implementation.

### 02 — Proof Over Promises

Completion should be supported by actual evidence of work.

### 03 — Consistency Creates Progress

Streaks, milestones, and progress indicators encourage learners to maintain momentum.

---

# 🎨 Product Design

The UI focuses on:

| Principle         | Implementation                            |
| ----------------- | ----------------------------------------- |
| 🎯 Clarity        | Clear information hierarchy               |
| 📊 Feedback       | Progress bars, badges & completion states |
| 🧩 Reusability    | Modular React components                  |
| ⚡ Interaction     | Interactive controls and states           |
| 🎨 Consistency    | Unified visual language                   |
| 📱 Responsiveness | Responsive layouts                        |

---

# 🛠️ Tech Stack

### Frontend

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white">
</p>

### UI & Icons

<p>
<img src="https://img.shields.io/badge/Lucide_React-F56565?style=flat-square">
<img src="https://img.shields.io/badge/Responsive_UI-Enabled-success?style=flat-square">
</p>

### Development

<p>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white">
</p>

### Deployment

<p>
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white">
</p>

---

# 📁 Project Structure

```text
ABTalks/
│
├── public/
│
├── src/
│   │
│   ├── Components/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── ProofCard.jsx
│   │   └── StreakCard.jsx
│   │
│   ├── Pages/
│   │   ├── Dashboard.jsx
│   │   ├── Journey.jsx
│   │   ├── Profile.jsx
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone <your-repository-url>
```

### 2️⃣ Navigate to the project

```bash
cd ABTalks
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start development server

```bash
npm run dev
```

### 5️⃣ Build for production

```bash
npm run build
```

---

# 🌐 Deployment Architecture

ABTalks is deployed on **Vercel**.

```mermaid
flowchart LR

    DEV["👩‍💻 Developer"]

    DEV --> LOCAL["💻 Local Development"]

    LOCAL --> COMMIT["📦 Git Commit"]

    COMMIT --> GITHUB["🐙 GitHub"]

    GITHUB --> VERCEL["▲ Vercel"]

    VERCEL --> BUILD["⚙️ Production Build"]

    BUILD --> LIVE["🌐 Live ABTalks"]

    LIVE --> USERS["👥 Learners"]
```

---

# 🔮 Future Roadmap

```mermaid
flowchart LR

    A["Current Platform"]

    B["🔐 Authentication"]

    C["☁️ Cloud Persistence"]

    D["🗄️ Backend Database"]

    E["🤖 AI Learning Assistant"]

    F["🔗 Automated GitHub Verification"]

    G["📊 Advanced Analytics"]

    H["🏆 Leaderboards"]

    I["👥 Community Learning"]

    A --> B --> C --> D --> E --> F --> G --> H --> I
```

### 🚧 Planned Enhancements

* [ ] 🔐 Authentication
* [ ] ☁️ Cloud profile persistence
* [ ] 🗄️ Backend database
* [ ] 🤖 AI learning assistant
* [ ] 🔗 Automated GitHub verification
* [ ] 📊 Advanced analytics
* [ ] 🏆 Leaderboards
* [ ] 🏅 Certificates
* [ ] 🔔 Notifications
* [ ] 👥 Community learning

---

# 💡 Product Vision

ABTalks aims to evolve from a learning tracker into a complete **AI Engineering Learning OS**.

```mermaid
flowchart TD

    LEARN["📚 Learn"]

    BUILD["💻 Build"]

    PROVE["🔗 Prove"]

    TRACK["📊 Track"]

    IMPROVE["🧠 Improve"]

    ACHIEVE["🏆 Achieve"]

    LEARN --> BUILD
    BUILD --> PROVE
    PROVE --> TRACK
    TRACK --> IMPROVE
    IMPROVE --> LEARN

    ACHIEVE --> LEARN
```

> **Learning should not end with consuming content.
> It should end with something you can build, prove, and show.**

---

# 👩‍💻 Author

## Shreya Goel

**B.Tech CSE — ABES Engineering College**

<p>
<a href="https://github.com/goelshreya3001-droid">
<img src="https://img.shields.io/badge/GitHub-Shreya%20Goel-181717?style=for-the-badge&logo=github">
</a>
</p>

---

# 🌐 Live Project

<p align="center">

<a href="https://ab-talks-ps1.vercel.app/">

<img src="https://img.shields.io/badge/🚀%20OPEN%20ABTALKS-LIVE%20DEMO-6366F1?style=for-the-badge">

</a>

</p>

---

<p align="center">

### ⭐ If you like the project, consider giving it a star!

**ABTalks**

### Learn → Build → Prove → Progress 🚀

</p>
