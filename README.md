<div align="center">

# ⚡ ABTalks

### **60 Days. 60 Builds. One Consistent Journey.**

A focused coding challenge platform that helps learners  
**learn → build → prove → track → grow.**

<br/>

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-ab--talks--ps1.vercel.app-0F766E?style=for-the-badge)](https://ab-talks-ps1.vercel.app/)
[![GitHub](https://img.shields.io/badge/💻%20Repository-Ab__talks__ps1-181717?style=for-the-badge&logo=github)](https://github.com/goelshreya3001-droid/Ab_talks_ps1)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

</div>

---

## 🎯 What is ABTalks?

ABTalks turns a coding challenge into a **visible daily journey**.

Instead of simply solving a problem and moving on, the learner:

**gets a mission → learns → builds → submits proof → tracks progress → protects the streak → unlocks milestones → continues.**

### 🔄 Core Product Loop

```mermaid
flowchart LR
    A["🎯 Daily Mission"] --> B["📚 Learn"]
    B --> C["💻 Build"]
    C --> D["🔗 Prove"]
    D --> E["📊 Track"]
    E --> F["🔥 Streak"]
    F --> G["🏆 Achievement"]
    G --> A
```

---

# 🌟 Why ABTalks?

ABTalks is designed around one simple idea:

> **Daily coding effort should become visible, measurable, and valuable.**

<div align="center">

| 🎯 | 🔥 | ⭐ |
|---|---|---|
| **Learn with Purpose** | **Stay Consistent** | **Show Your Growth** |
| Follow focused learning tracks and daily challenges that turn active practice into meaningful skills. | Build daily coding habits with interactive streak tracking, gamified badges, and progress milestones. | Submit proof of completion through `ProofCard` to turn your journey into visible proof of work. |

| 💼 | 🏆 | 🚀 |
|---|---|---|
| **Discover Opportunities** | **Grow Together** | **Build Your Future** |
| Connect your skills and progress with real-world opportunities. | Learn, compete, share, and grow within a student-first coding community. | Transform daily effort into proof, visibility, community recognition, and career opportunities. |

</div>

---

# 🌟 Features at a Glance

### 🎯 Structured Coding Challenges

Follow focused learning tracks and build a consistent coding habit through daily task units, difficulty tiers, and step-by-step interactive checklists using `Checklist`.

### 🔥 Streak & Progress Tracking

Maintain daily check-in streaks with `StreakCard`, evaluate completed vs. pending tasks dynamically, and track unlockable achievement milestones using `AchievementCard` and `Badge`.

### 📣 Build in Public & Proof Verification

Share project milestones and submit proof-of-work evidence through the integrated verification portal powered by `ProofCard`.

### 🤖 Learning Tracks & Embedded Guides

Explore structured learning tracks with contextual instructional material through `ResourceCard`.

### 🏆 Achievement Badges

Earn dynamic badges by completing daily challenges, maintaining streaks, and verifying completed tasks.

### 📱 Responsive Mobile UX

Experience ABTalks across devices with a persistent top navigation system through `Navbar` and a dedicated mobile navigation experience through `BottomNav`.

---

# 🧭 The ABTalks Journey

> **Learn → Build → Prove → Track → Get Discovered**

```mermaid
flowchart LR

    A["👋 JOIN<br/>ABTalks"]
    B["🎯 CHOOSE<br/>Learning Track"]
    C["⚡ BUILD<br/>Daily Challenge"]
    D["🔥 MAINTAIN<br/>Your Streak"]
    E["📤 SUBMIT<br/>Proof of Work"]
    F["📊 TRACK<br/>Your Progress"]
    G["🏆 UNLOCK<br/>Badges"]
    H["💼 DISCOVER<br/>Opportunities"]
    I["🚀 GET<br/>DISCOVERED"]

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H --> I

    classDef primary fill:#0F766E,stroke:#0F766E,color:#FFFFFF,stroke-width:3px;
    classDef secondary fill:#FFF7E6,stroke:#F59E0B,color:#172033,stroke-width:2px;
    classDef highlight fill:#FFF1E6,stroke:#F97316,color:#7C2D12,stroke-width:2px;
    classDef opportunity fill:#EEF2FF,stroke:#6366F1,color:#312E81,stroke-width:2px;

    class A,I primary;
    class B,C,F secondary;
    class D,E,G highlight;
    class H opportunity;
```

---

# ⚙️ Detailed User Workflow

The journey inside the application follows a continuous learning loop:

```mermaid
flowchart TD

    A["👤 Open Application"]
    B["🎯 Choose Learning Track / Challenge Day"]
    C["📚 Review Instructional Guides<br/>ResourceCard"]
    D["⚡ Complete Interactive Checklist"]
    E{"✅ All Tasks Completed?"}

    F["📤 Submit Proof of Work<br/>ProofCard"]
    G["🔥 Update Streak"]
    H["⭐ Unlock Achievement Badges"]
    I["📈 Update Dashboard Progress"]
    J["💼 Explore Opportunities"]
    K["🚀 Get Discovered"]

    L["🔁 Continue to Next Daily Challenge"]

    A --> B
    B --> C
    C --> D
    D --> E

    E -->|Yes| F
    E -->|Not Yet| L

    L --> B

    F --> G
    G --> H
    H --> I
    I --> J
    J --> K

    K --> L

    classDef start fill:#0F766E,stroke:#0F766E,color:#FFFFFF,stroke-width:3px;
    classDef learning fill:#FFF7E6,stroke:#F59E0B,color:#172033,stroke-width:2px;
    classDef action fill:#FFF1E6,stroke:#F97316,color:#7C2D12,stroke-width:2px;
    classDef decision fill:#EEF2FF,stroke:#6366F1,color:#312E81,stroke-width:2px;
    classDef opportunity fill:#F3E8FF,stroke:#8B5CF6,color:#4C1D95,stroke-width:2px;

    class A,K start;
    class B,C,L learning;
    class D,F,G,H,I action;
    class E decision;
    class J opportunity;
```

---

# 🏗️ System Architecture

```mermaid
flowchart TB

    USER(["👤 Learner"])

    APP["⚛️ ABTalks React Application"]

    ROUTER["🛣️ React Router"]

    LANDING["🏠 Landing Page"]
    PROFILE["👤 Profile"]
    DASH["📊 Dashboard"]
    CHALLENGE["📅 Challenge Day"]

    USER --> APP
    APP --> ROUTER

    ROUTER --> LANDING
    ROUTER --> PROFILE
    ROUTER --> DASH
    ROUTER --> CHALLENGE

    DASH --> COMPONENTS["🧩 Reusable Components"]
    CHALLENGE --> COMPONENTS

    COMPONENTS --> NAV["🧭 Navbar"]
    COMPONENTS --> BOTTOM["📱 BottomNav"]
    COMPONENTS --> CHECKLIST["☑️ Checklist"]
    COMPONENTS --> RESOURCE["📚 ResourceCard"]
    COMPONENTS --> PROOF["🔗 ProofCard"]
    COMPONENTS --> STREAK["🔥 StreakCard"]
    COMPONENTS --> ACHIEVEMENT["🏆 AchievementCard"]
    COMPONENTS --> BADGE["⭐ Badge"]

    DATA["📦 Challenge / Track Data"]

    DATA --> DASH
    DATA --> CHALLENGE

    PROFILE --> STORAGE["💾 Browser localStorage"]

    STORAGE --> SAVED["👤 Saved Profile Data"]
```

---

# 🔗 Proof of Work Flow

Proof submission is a core part of the ABTalks experience.

```mermaid
flowchart LR

    BUILD["💻 Complete Challenge"]

    BUILD --> PROOF["📤 ProofCard"]

    PROOF --> GH["🐙 GitHub Proof"]
    PROOF --> LI["💼 LinkedIn Proof"]

    GH --> CHECK{"⚡ Required Proof Provided?"}
    LI --> CHECK

    CHECK -->|No| FIX["⚠️ Complete Missing Proof"]
    FIX --> PROOF

    CHECK -->|Yes| SUBMIT["✅ Proof Submitted"]

    SUBMIT --> STATE["🖥️ Update UI State"]

    STATE --> PROGRESS["📈 Update Progress"]
    STATE --> STREAK["🔥 Update Streak"]
    STATE --> BADGE["🏆 Check Badges"]

    SUBMIT -.-> API["ℹ️ No External API Verification"]
```

---

# 🔥 Progress & Streak System

```mermaid
flowchart TD

    COMPLETE["✅ Challenge Complete"]

    COMPLETE --> PROGRESS["📈 Update Progress"]
    COMPLETE --> STREAK["🔥 Update Streak"]

    STREAK --> MISSED{"⚠️ Missed a Day?"}

    MISSED -->|No| ACH["🏆 Check Achievements"]
    MISSED -->|Yes| FREEZE{"🛡️ Freeze Available?"}

    FREEZE -->|Yes| PROTECT["✅ Protect Streak"]
    FREEZE -->|No| BREAK["❌ Streak Interrupted"]

    PROTECT --> ACH
    BREAK --> ACH
    PROGRESS --> ACH

    ACH --> NEXT["➡️ Continue Journey"]

    NEXT --> UI["🖥️ UI State Updated"]
```

---

# 🏆 Achievement Journey

```mermaid
flowchart LR

    S["🌱 Start"]
    A["🔥 7 Day Streak"]
    B["🏗️ 10 Builds"]
    C["📈 100% Week"]
    D["🚀 First Week"]
    E["🎯 Halfway Hero"]

    S --> A
    A --> B
    B --> C
    C --> D
    D --> E

    E --> CHECK["🖥️ Achievement State"]
    CHECK --> NEXT["➡️ Continue Journey"]
```

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ **React 19** | User interface |
| ⚡ **Vite 8** | Development and production build |
| 🎨 **Tailwind CSS 4** | Styling and responsive design |
| 🛣️ **React Router 7** | Client-side routing |
| 🧩 **Lucide React** | Interface icons |
| 💾 **localStorage** | Browser-based profile persistence |
| 🐙 **GitHub** | Version control |
| ▲ **Vercel** | Deployment |

---

# 🌐 Deployment Architecture

```mermaid
flowchart LR

    DEV["👩‍💻 Developer"]
    CODE["⚛️ React + Vite"]
    GIT["🐙 GitHub Repository"]
    V["▲ Vercel"]
    BUILD["⚙️ Production Build"]
    LIVE["🌐 Live ABTalks"]
    USER["👤 Learner"]

    DEV --> CODE
    CODE --> GIT
    GIT --> V
    V --> BUILD
    BUILD --> LIVE
    LIVE --> USER
```

### 🚀 Live Application

**[https://ab-talks-ps1.vercel.app/](https://ab-talks-ps1.vercel.app/)**

### 💻 Repository

**[https://github.com/goelshreya3001-droid/Ab_talks_ps1](https://github.com/goelshreya3001-droid/Ab_talks_ps1)**

---

# 🎨 Design Direction

ABTalks follows a **dark, focused, action-first interface**.

| 🎯 Focus | 📊 Feedback | 🔥 Motivation | 🔗 Proof | 🧩 Modularity |
|---|---|---|---|---|
| Next action is obvious | Progress stays visible | Streaks reinforce consistency | Work has a visible outcome | Reusable UI keeps the experience consistent |

### Main UI Language

`Profile` · `Mission` · `Progress` · `Streak` · `Proof` · `Achievements`

---

# 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/goelshreya3001-droid/Ab_talks_ps1.git
```

### 2. Enter the project

```bash
cd Ab_talks_ps1
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development server

```bash
npm run dev
```

### 5. Create production build

```bash
npm run build
```

### 6. Preview production build

```bash
npm run preview
```

---

# 🗺️ Routes

| Route | Purpose |
|---|---|
| `/` | 🏠 Landing page |
| `/dashboard` | 📊 Learner dashboard |
| `/day/:dayId` | 📅 Individual challenge |

---

# 🔮 Future Scope

```mermaid
flowchart LR

    CURRENT["🚀 Current Frontend"]

    AUTH["🔐 Authentication"]
    DB["🗄️ Cloud Database"]
    VERIFY["🔍 API Proof Verification"]
    ANALYTICS["📊 Advanced Analytics"]
    COMMUNITY["👥 Community"]
    LEADERBOARD["🏆 Leaderboards"]

    CURRENT --> AUTH
    AUTH --> DB
    DB --> VERIFY
    VERIFY --> ANALYTICS
    ANALYTICS --> COMMUNITY
    COMMUNITY --> LEADERBOARD
```

### Potential Extensions

- 🔐 Authentication
- ☁️ Cloud profile persistence
- 🗄️ Backend database
- 🔍 GitHub API verification
- 💼 LinkedIn integration
- 📊 Persistent analytics
- 🔔 Notifications
- 👥 Community features
- 🏆 Leaderboards

---

# 💡 Product Philosophy

> **Don't just solve code. Build evidence of consistency.**

ABTalks connects the things that usually stay separate:

```text
LEARNING
   ↓
 BUILD
   ↓
 PROVE
   ↓
 TRACK
   ↓
 GROW
```

### The goal is simple:

**Make progress visible. Make consistency rewarding.**

---

# 👩‍💻 Author

<div align="center">

### **Shreya Goel**

B.Tech CSE · ABES Engineering College

[![GitHub](https://img.shields.io/badge/GitHub-Shreya%20Goel-181717?style=for-the-badge&logo=github)](https://github.com/goelshreya3001-droid)

</div>

---

<div align="center">

### 🚀 [Try ABTalks Live](https://ab-talks-ps1.vercel.app/)

**60 Days · Build Daily · Prove Your Work**

</div>
