# 🌟 AB Talks Challenge Platform (PS1)

An immersive, gamified web platform engineered with **React 18**, **Vite**, and **Tailwind CSS**. Built to tackle **AB Talks Problem Statement 1 (PS1)**, this application empowers users to commit to daily challenges, maintain streaks, track progress, and submit proof of completion—all within a seamless, mobile-first responsive environment.

[![Live App](https://img.shields.io/badge/Live_App-ab--talks--ps1.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ab-talks-ps1.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 📸 Key Features & Visual Walkthrough

- 🎯 **Interactive Analytics Dashboard:** Real-time visibility into overall challenge completion rates, active streak counters, and earned badges.
- 📅 **Daily Challenge Breakdown:** Dedicated daily views featuring structured action checklists, attached learning resources, and instructions.
- 🔥 **Gamified Streak & Badge Engine:** Visual feedback loops via custom streak cards and unlockable achievement rewards.
- 📤 **Proof Submission System:** Standardized interface for users to submit proof cards as evidence for completed tasks.
- 📱 **Mobile-First UX:** Seamless navigation with responsive top navigation and persistent mobile bottom nav bars.

---

## 🛠️ Tech Stack & Dependencies

```mermaid
flowchart LR
    subgraph Frontend["Frontend Layer"]
        A[React 18]
        B[Tailwind CSS]
    end

    subgraph Tooling["Build & Tooling"]
        C[Vite Engine]
        D[ESLint Config]
    end

    subgraph Deployment["Deployment Layer"]
        E[Vercel Edge]
        F[vercel.json Rewrites]
    end

    Frontend <--> Tooling
    Tooling <--> Deployment
