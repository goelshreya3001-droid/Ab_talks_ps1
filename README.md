# 🔄 ABTalks — Complete System Flow

```mermaid
flowchart TB

    %% ENTRY
    USER(["👤 Learner"])

    USER --> LANDING["🌐 ABTalks Landing Page"]

    LANDING --> PROFILE{"👤 Profile Setup?"}

    PROFILE -->|New User| PROFILE_FORM["📝 Enter Name + College"]
    PROFILE_FORM --> SAVE["💾 Save Profile"]
    SAVE --> DASHBOARD["📊 Dashboard"]

    PROFILE -->|Already Set| DASHBOARD


    %% DASHBOARD
    subgraph DASH["📊 ABTalks Dashboard"]

        DASHBOARD --> STREAK["🔥 Learning Streak"]

        DASHBOARD --> MISSION["🎯 Today's Mission"]

        DASHBOARD --> PROGRESS["📈 60-Day Progress"]

        DASHBOARD --> PROOF_STATUS["🔗 Proof Status"]

        DASHBOARD --> ACHIEVEMENTS["🏆 Achievements"]

        DASHBOARD --> FREEZE["🛡️ Streak Freeze"]

    end


    %% DAILY CHALLENGE
    MISSION --> CHALLENGE["📅 Challenge Day"]

    CHALLENGE --> DESCRIPTION["📖 Read Challenge"]

    DESCRIPTION --> CHECKLIST["☑️ Complete Checklist"]

    CHECKLIST --> RESOURCES["📚 Explore Resources"]

    RESOURCES --> BUILD["💻 Complete Coding Task"]


    %% PROOF
    BUILD --> GITHUB["🐙 GitHub Proof"]

    BUILD --> LINKEDIN["💼 LinkedIn Proof"]

    GITHUB --> SUBMIT["🚀 Submit Proof"]

    LINKEDIN --> SUBMIT

    SUBMIT --> VERIFY{"🔍 Proof Submitted?"}

    VERIFY -->|No| FIX["⚠️ Complete Required Fields"]

    FIX --> SUBMIT

    VERIFY -->|Yes| COMPLETE["✅ Challenge Completed"]


    %% PROGRESS
    COMPLETE --> UPDATE["📊 Update Progress"]

    UPDATE --> PROGRESS

    UPDATE --> STREAK_UPDATE["🔥 Update Streak"]

    STREAK_UPDATE --> STREAK


    %% ACHIEVEMENTS
    UPDATE --> MILESTONE{"🏆 Achievement Reached?"}

    MILESTONE -->|Yes| UNLOCK["🎉 Unlock Achievement"]

    MILESTONE -->|No| NEXT

    UNLOCK --> ACHIEVEMENTS


    %% NEXT DAY
    ACHIEVEMENTS --> NEXT["➡️ Continue Journey"]

    NEXT --> MISSION


    %% STREAK FREEZE
    STREAK --> MISSED{"⚠️ Missed Day?"}

    MISSED -->|No| MISSION

    MISSED -->|Yes| FREEZE_CHECK{"🛡️ Freeze Available?"}

    FREEZE_CHECK -->|Yes| PROTECT["✅ Protect Streak"]

    FREEZE_CHECK -->|No| STREAK_BREAK["❌ Streak Interrupted"]

    PROTECT --> MISSION

    STREAK_BREAK --> MISSION


    %% PERSISTENCE
    SAVE --> STORAGE["💾 Browser localStorage"]

    STORAGE --> DASHBOARD


    %% DEPLOYMENT
    subgraph DEPLOY["▲ Deployment"]
        CODE["⚛️ React + Vite"]
        GITHUB_REPO["🐙 GitHub Repository"]
        VERCEL["▲ Vercel"]
        LIVE["🌐 Live Application"]
        
        CODE --> GITHUB_REPO
        GITHUB_REPO --> VERCEL
        VERCEL --> LIVE
    end

    LIVE --> LANDING
```

---

## 🧠 How the Entire System Connects

```mermaid
flowchart LR

    LEARN["📚 LEARN"]

    BUILD["💻 BUILD"]

    PROVE["🔗 PROVE"]

    TRACK["📊 TRACK"]

    STREAK["🔥 STREAK"]

    ACHIEVE["🏆 ACHIEVE"]

    NEXT["➡️ NEXT DAY"]

    LEARN --> BUILD
    BUILD --> PROVE
    PROVE --> TRACK
    TRACK --> STREAK
    STREAK --> ACHIEVE
    ACHIEVE --> NEXT
    NEXT --> LEARN
```

### The core loop

> **Learn → Build → Prove → Track → Maintain Streak → Achieve → Repeat**

This makes the product easy to understand at a glance: the learner enters through the landing page, reaches the dashboard, completes the daily challenge, submits proof, gets progress/streak feedback, reaches achievements, and returns to the next challenge.
