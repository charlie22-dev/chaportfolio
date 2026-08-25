import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ticker from "../components/Ticker";
import Lanyard from "../components/Lanyard";
import GithubCalendarSection from "../components/GithubCalendarSection";
import Footer from "../components/Footer";
import ChatbotDrawer from "../components/ChatbotDrawer";
import { sound } from "../utils/audio";

const techData = [
  {
    tag: "React.js", percent: 80, icon: "⚛️",
    name: "React.js", category: "Frontend", status: "Learned & Active", level: "Advanced",
    color: "#00d8ff",
    desc: "Component architecture, custom hooks, state management, Vite, and Next.js SPA/SSR applications.",
    projects: ["Sky Cast", "Appreciation Letter", "Portfolio UI System"]
  },
  {
    tag: "Laravel", percent: 68, icon: "🐘",
    name: "PHP & Laravel", category: "Backend", status: "Learned & Active", level: "Proficient",
    color: "#ff2d20",
    desc: "MVC architecture, Eloquent ORM, RESTful API endpoints, Blade templates, authentication, and database migrations.",
    projects: ["Task Manager Pro", "Charlie Portfolio"]
  },
  {
    tag: "Python", percent: 65, icon: "🐍",
    name: "Python & Flask", category: "Backend / AI", status: "Learned & Active", level: "Proficient",
    color: "#3776ab",
    desc: "Backend routing, API services, data manipulation, MySQL database connectivity, and lightweight microservices.",
    projects: ["Tipid Tracker", "API Microservices Engine"]
  },
  {
    tag: "JavaScript", percent: 85, icon: "⚡",
    name: "JavaScript (ES6+)", category: "Core Language", status: "Learned & Active", level: "Advanced",
    color: "#f7df1e",
    desc: "Asynchronous programming, DOM manipulation, Web Audio API, GSAP animations, and event-driven architectures.",
    projects: ["Sky Cast", "Mimalicious", "Audio SFX Engine"]
  },
  {
    tag: "Tailwind", percent: 92, icon: "🎨",
    name: "Tailwind CSS", category: "Styling", status: "Learned & Active", level: "Mastered",
    color: "#38bdf8",
    desc: "Utility-first responsive layouts, brutalist design systems, custom themes, and high-performance CSS animations.",
    projects: ["Portfolio Theme", "Task Manager", "All Web Apps"]
  },
  {
    tag: "MySQL", percent: 65, icon: "🗄️",
    name: "MySQL Database", category: "Database", status: "Learned & Active", level: "Proficient",
    color: "#00758f",
    desc: "Relational database schema modeling, indexing, ACID transactions, complex joins, and query optimization.",
    projects: ["Tipid Tracker", "Task Manager Pro"]
  },
  {
    tag: "HTML5", percent: 95, icon: "🌐",
    name: "HTML5 & Semantic Web", category: "Core", status: "Learned & Active", level: "Mastered",
    color: "#e34f26",
    desc: "Clean accessible markup, SEO optimization, responsive layout structures, and cross-browser standard compatibility.",
    projects: ["Mimalicious", "Web App Skeletons"]
  },
  {
    tag: "Next.js", percent: 45, icon: "▲",
    name: "Next.js & SSR", category: "Currently Learning", status: "In Progress", level: "Intermediate",
    color: "#ffffff",
    desc: "Server-side rendering, static site generation (SSG), App Router, server actions, and edge API routes.",
    projects: ["Modern Fullstack Apps", "Next.js Lab"]
  },
  {
    tag: "TypeScript", percent: 42, icon: "🔷",
    name: "TypeScript", category: "Currently Learning", status: "In Progress", level: "Intermediate",
    color: "#3178c6",
    desc: "Static typing, generics, interfaces, strict mode type safety, and typed React component props.",
    projects: ["Typed API Interfaces", "Fullstack Modules"]
  },
  {
    tag: "Node.js", percent: 48, icon: "🟢",
    name: "Node.js & Express", category: "Currently Learning", status: "In Progress", level: "Intermediate",
    color: "#68a063",
    desc: "Event loop architecture, non-blocking I/O server scripts, middleware pipelines, and JWT authentication services.",
    projects: ["Microservice Endpoints", "Backend Workers"]
  },
  {
    tag: "Docker", percent: 28, icon: "🐳",
    name: "Docker & DevOps", category: "Currently Learning", status: "In Progress", level: "Fundamental",
    color: "#2496ed",
    desc: "Containerization, Dockerfile recipes, multi-container compose, environment reproducibility, and cloud deployments.",
    projects: ["Local Dev Containers", "Railway Cloud Deploy"]
  },
  {
    tag: "Git", percent: 72, icon: "🐙",
    name: "Git & GitHub Workflows", category: "Workflow", status: "Learned & Active", level: "Proficient",
    color: "#f05032",
    desc: "Branching strategies, pull requests, semantic commit conventions, GitHub Pages, and CI/CD pipelines.",
    projects: ["All Repositories", "Open Source Projects"]
  }
];

export default function TechStackPage() {
  const navigate = useNavigate();
  const [filterMode, setFilterMode] = useState("all");
  const [selectedTech, setSelectedTech] = useState(null);

  const filteredTechs = filterMode === "all" ? techData
    : filterMode === "learned" ? techData.filter(t => t.status === "Learned & Active")
    : techData.filter(t => t.status === "In Progress");

  const handleFilterChange = (mode) => {
    sound.playClick();
    setFilterMode(mode);
    setSelectedTech(null);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#fcfff7] select-none font-space pb-20">
      {/* ── HEADER TICKER ── */}
      <Ticker
        text="FULL-STACK TECH STACK & ARCHITECTURE →"
        items={["TECH STACK & TOOLING →","LANGUAGES & FRAMEWORKS →","DATABASES & SERVERS →","DEVELOPER PROFILE →","CONTINUOUS LEARNING →"]}
        bgColor="#c2ff01"
        textColor="#0a0a0a"
        borderColor="#0a0a0a"
        className="py-4 sm:py-5 text-xl sm:text-3xl font-silkscreen font-bold"
      />

      {/* ── ORANGE DISPLAY BANNER ── */}
      <section className="w-full bg-[#ff4502] text-[#fcfff7] py-8 sm:py-12 px-4 sm:px-12 lg:px-20 border-b-4 border-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-silkscreen text-[10px] sm:text-xs text-black font-bold tracking-[2px] sm:tracking-[3px] uppercase block mb-1">
              // DEVELOPER MATRIX
            </span>
            <h1 className="font-space font-black text-2xl xs:text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none break-words">
              TECH STACK &amp; PROFILE
            </h1>
            <p className="font-silkscreen text-[10px] sm:text-xs text-white/80 mt-2 tracking-wider sm:tracking-widest uppercase">
              LANGUAGES, FRAMEWORKS &amp; GITHUB ACTIVITY METRICS
            </p>
          </div>

          <div className="flex flex-wrap gap-2 font-silkscreen text-[10px] sm:text-xs">
            {[{key:"all",label:`ALL (${techData.length})`},{key:"learned",label:"LEARNED"},{key:"learning",label:"LEARNING"}].map(({key,label}) => (
              <button
                key={key}
                onClick={() => handleFilterChange(key)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold border-2 transition-all ${
                  filterMode === key ? "bg-[#c2ff01] text-black border-[#0a0a0a] shadow-md" : "bg-black/30 text-white border-white/30 hover:border-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN INTERFACE ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── LEFT: FIXED PERCENTAGE BENCHMARKS GRID (7 Cols) ── */}
          <div className="lg:col-span-7 flex flex-col space-y-5">

            {/* Header row */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="font-silkscreen text-xs text-[#c2ff01] tracking-[2px] uppercase block">
                  // SKILLS &amp; PROFICIENCY MATRIX
                </span>
                <span className="font-mono text-xs text-white/40 mt-0.5 block">
                  {filteredTechs.length} TECHNOLOGIES TRACKED
                </span>
              </div>
            </div>

            {/* Fixed Percentage Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredTechs.map((tech) => {
                const isSelected = selectedTech?.name === tech.name;
                return (
                  <div
                    key={tech.name}
                    onClick={() => {
                      sound.playClick();
                      setSelectedTech(isSelected ? null : tech);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#141414] border-[#c2ff01] shadow-[0_0_20px_rgba(194,255,1,0.18)] scale-[1.02]"
                        : "bg-[#0b0b0b] border-[#1c1c1c] hover:border-white/30 hover:bg-[#111111]"
                    }`}
                  >
                    {/* Top row: Icon + Name + Percentage */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-2xl flex-shrink-0">{tech.icon}</span>
                        <div className="min-w-0">
                          <h4 className="font-silkscreen text-xs font-bold text-white truncate leading-tight">
                            {tech.name}
                          </h4>
                          <span className="font-space text-[10px] text-white/50 block">
                            {tech.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span
                          className="font-silkscreen font-bold text-lg leading-none block"
                          style={{ color: tech.color }}
                        >
                          {tech.percent}%
                        </span>
                        <span className="font-silkscreen text-[8px] text-white/40 uppercase">
                          {tech.level}
                        </span>
                      </div>
                    </div>

                    {/* Animated Progress bar */}
                    <div className="h-2 bg-[#161616] rounded-full overflow-hidden border border-white/5">
                      <div
                        style={{
                          width: `${tech.percent}%`,
                          height: "100%",
                          background: `linear-gradient(90deg, ${tech.color}44, ${tech.color})`,
                          borderRadius: "9999px",
                          boxShadow: `0 0 10px ${tech.color}44`,
                          transition: "width 0.8s cubic-bezier(0.16,1,0.3,1)"
                        }}
                      />
                    </div>

                    {/* Expanded description on click */}
                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-white/10 text-xs font-space text-white/70 animate-in fade-in">
                        <p className="mb-2 leading-relaxed">{tech.desc}</p>
                        {tech.projects && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <span className="font-silkscreen text-[8px] text-white/40">PROJECTS:</span>
                            {tech.projects.map((p, i) => (
                              <span key={i} className="font-silkscreen text-[8px] bg-[#1a1a1a] text-[#c2ff01] border border-[#c2ff01]/20 px-1.5 py-0.5 rounded">
                                {p}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: LANYARD CARD (5 Cols) ── */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center sticky top-8">
            <div className="w-full" style={{ height: "560px" }}>
              <Lanyard
                position={[0, 0, 15]}
                gravity={[0, -40, 0]}
                fov={22}
                frontImage="/images/lanyard.jpg"
                backImage="/images/Lanyard image.jpg"
                imageFit="cover"
              />
            </div>
          </div>
        </div>

        {/* ── GITHUB CONTRIBUTIONS SECTION ── */}
        <GithubCalendarSection />
      </main>

      <Footer />
      <ChatbotDrawer />
    </div>
  );
}
