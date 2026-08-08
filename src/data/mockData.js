export const initialStudentData = {
  name: "Shreya",
  college: "IIT Bombay",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
  streak: 11,
  currentDay: 12,
  completedDays: 11,
  totalDays: 60,
  githubConnected: true,
  linkedinConnected: true,
  track: "Full-Stack Web Development",
  missedYesterday: false,
  deadlineCountdown: "03h 42m 15s"
};

export const challengeDayData = {
  12: {
    day: 12,
    title: "Build a REST API with FastAPI",
    difficulty: "Intermediate",
    estimatedTime: "2–3 hrs",
    category: "Backend Development",
    description: "Create a task-management REST API with full CRUD operations, input validation, and automatic Swagger documentation.",
    goal: "Build a simple task-management REST API that allows users to create, read, update, and delete tasks with proper JSON responses.",
    endpoints: [
      { method: "GET", path: "/tasks", desc: "List all existing tasks with filtering" },
      { method: "POST", path: "/tasks", desc: "Create a new task with validation" },
      { method: "PUT", path: "/tasks/{id}", desc: "Update an existing task status" },
      { method: "DELETE", path: "/tasks/{id}", desc: "Remove a task by identifier" }
    ],
    requirements: [
      { id: 1, text: "Create and configure FastAPI project environment", completed: true },
      { id: 2, text: "Build CRUD endpoints for task management", completed: true },
      { id: 3, text: "Add Pydantic data validation schema", completed: false },
      { id: 4, text: "Test API locally using Swagger UI docs", completed: false },
      { id: 5, text: "Write concise README with setup steps", completed: false },
      { id: 6, text: "Push code repository to GitHub", completed: false },
      { id: 7, text: "Publish progress post on LinkedIn", completed: false }
    ],
    resources: [
      { title: "FastAPI Official Documentation", desc: "First steps and tutorial user guide", link: "https://fastapi.tiangolo.com/tutorial/", type: "Docs" },
      { title: "RESTful API Design Standards", desc: "Best practices for response codes & paths", link: "https://restfulapi.net/", type: "Guide" },
      { title: "ABTalks FastAPI Starter Template", desc: "Pre-configured boilerplate repo", link: "https://github.com", type: "GitHub Repo" }
    ]
  }
};

export const sampleProjects = [
  { day: "Day 01", title: "Responsive Portfolio", tags: ["HTML/CSS", "Design"], icon: "🎨" },
  { day: "Day 12", title: "REST API", tags: ["FastAPI", "Python"], icon: "⚡" },
  { day: "Day 27", title: "AI Chatbot", tags: ["OpenAI", "React"], icon: "🤖" },
  { day: "Day 45", title: "Full-Stack Application", tags: ["Next.js", "PostgreSQL"], icon: "🚀" },
  { day: "Day 60", title: "Capstone Project", tags: ["Microservices", "Docker"], icon: "🏆" }
];

export const userAchievements = [
  { id: 1, title: "7 Day Streak", desc: "Maintained 7 consecutive builds", icon: "🔥", unlocked: true },
  { id: 2, title: "10 Builds", desc: "Pushed 10 projects to GitHub", icon: "🏗️", unlocked: true },
  { id: 3, title: "100% This Week", desc: "Zero missed days in the current week", icon: "📈", unlocked: true },
  { id: 4, title: "First Week Complete", desc: "Finished Days 1 through 7", icon: "🚀", unlocked: true },
  { id: 5, title: "Halfway Hero", desc: "Reach 30 completed days", icon: "🎯", unlocked: false }
];