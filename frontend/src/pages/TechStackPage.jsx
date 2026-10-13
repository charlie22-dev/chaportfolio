import React, { useState } from "react";
import Ticker from "../components/Ticker";
import Lanyard from "../components/Lanyard";
import GithubCalendarSection from "../components/GithubCalendarSection";
import Footer from "../components/Footer";
import ChatbotDrawer from "../components/ChatbotDrawer";
import { sound } from "../utils/audio";

const ICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const LEVELS = ["Beginner", "Intermediate", "Proficient", "Advanced"];
const GROUPS = ["Languages", "Frontend", "Backend", "Database & Hardware", "Tools"];

// icon = devicon slug; invert = logo is black and needs flipping on the dark background
const techData = [
  { icon: "javascript", name: "JavaScript", group: "Languages", learning: false, level: "Advanced", color: "#f7df1e",
    desc: "ES6+, async/await, DOM manipulation, Web Audio API and GSAP animations.", projects: ["Mimalicious", "Sky Cast"] },
  { icon: "python", name: "Python", group: "Languages", learning: false, level: "Proficient", color: "#3776ab",
    desc: "Backend services, data handling and MySQL connectivity.", projects: ["Tipid Tracker", "Bookverse"] },
  { icon: "php", name: "PHP", group: "Languages", learning: false, level: "Proficient", color: "#777bb4",
    desc: "Server-side logic, sessions, form handling and MySQL queries.", projects: ["Sndrapark"] },
  { icon: "dart", name: "Dart", group: "Languages", learning: false, level: "Intermediate", color: "#0175c2",
    desc: "Typed, async code for Flutter mobile apps.", projects: ["Bookverse"] },
  { icon: "cplusplus", name: "C++", group: "Languages", learning: false, level: "Intermediate", color: "#00599c",
    desc: "Microcontroller firmware for sensors and hardware control.", projects: ["Sndrapark"] },
  { icon: "typescript", name: "TypeScript", group: "Languages", learning: true, level: "Beginner", color: "#3178c6",
    desc: "Static typing, interfaces and typed React props." },

  { icon: "html5", name: "HTML5", group: "Frontend", learning: false, level: "Advanced", color: "#e34f26",
    desc: "Semantic, accessible markup and responsive page structure.", projects: ["Mimalicious", "Sndrapark"] },
  { icon: "css3", name: "CSS3", group: "Frontend", learning: false, level: "Advanced", color: "#1572b6",
    desc: "Flexbox, grid, animations and responsive layouts.", projects: ["Mimalicious", "Sndrapark"] },
  { icon: "react", name: "React", group: "Frontend", learning: false, level: "Advanced", color: "#61dafb",
    desc: "Components, hooks, state management and Vite-based SPAs.", projects: ["Sky Cast", "This portfolio"] },
  { icon: "tailwindcss", name: "Tailwind CSS", group: "Frontend", learning: false, level: "Advanced", color: "#38bdf8",
    desc: "Utility-first responsive design systems and custom themes.", projects: ["Sky Cast", "This portfolio"] },
  { icon: "flutter", name: "Flutter", group: "Frontend", learning: false, level: "Intermediate", color: "#02569b",
    desc: "Cross-platform mobile UI with widgets and state management.", projects: ["Bookverse"] },
  { icon: "nextjs", name: "Next.js", group: "Frontend", learning: true, level: "Intermediate", color: "#ffffff", invert: true,
    desc: "Server-side rendering, App Router and server actions." },

  { icon: "flask", name: "Flask", group: "Backend", learning: false, level: "Proficient", color: "#ffffff", invert: true,
    desc: "Routing, Jinja2 templates, REST endpoints and auth.", projects: ["Tipid Tracker"] },
  { icon: "laravel", name: "Laravel", group: "Backend", learning: false, level: "Proficient", color: "#ff2d20",
    desc: "MVC, Eloquent ORM, migrations and REST APIs.", projects: ["This portfolio's chatbot API"] },
  { icon: "nodejs", name: "Node.js", group: "Backend", learning: true, level: "Intermediate", color: "#68a063",
    desc: "Express servers, middleware and JWT authentication." },

  { icon: "mysql", name: "MySQL", group: "Database & Hardware", learning: false, level: "Proficient", color: "#00758f",
    desc: "Relational schema design, joins and indexing.", projects: ["Tipid Tracker", "Sndrapark"] },
  { icon: "arduino", name: "Arduino", group: "Database & Hardware", learning: false, level: "Intermediate", color: "#00979d",
    desc: "Sensors and controllers wired to a web system.", projects: ["Sndrapark"] },

  { icon: "git", name: "Git & GitHub", group: "Tools", learning: false, level: "Proficient", color: "#f05032",
    desc: "Branching, pull requests and GitHub Pages deploys.", projects: ["All projects"] },
  { icon: "docker", name: "Docker", group: "Tools", learning: true, level: "Beginner", color: "#2496ed",
    desc: "Dockerfiles, compose and reproducible dev environments." }
];

function LevelDots({ level, color }) {
  const filled = LEVELS.indexOf(level) + 1;
  return (
    <div className="flex gap-1" aria-label={`${level} level`}>
      {LEVELS.map((_, i) => (
        <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: i < filled ? color : "#2a2a2a" }} />
      ))}
    </div>
  );
}

function TechCard({ tech, open, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={() => sound.playHover()}
      aria-expanded={open}
      className={`text-left w-full p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
        open ? "bg-[#141414] border-[#c2ff01]" : "bg-[#0b0b0b] border-[#1c1c1c] hover:border-white/30 hover:bg-[#111111]"
      }`}
    >
      <div className="flex items-center gap-3">
        <img src={`${ICON_CDN}/${tech.icon}/${tech.icon}-original.svg`} alt="" className={`w-8 h-8 flex-shrink-0 ${tech.invert ? "invert" : ""}`} loading="lazy" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-space font-bold text-sm text-white truncate">{tech.name}</h4>
            {tech.learning && (
              <span className="font-silkscreen text-[7px] text-[#c2ff01] border border-[#c2ff01]/40 rounded px-1 py-0.5 flex-shrink-0">LEARNING</span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <LevelDots level={tech.level} color={tech.color} />
            <span className="font-silkscreen text-[8px] text-white/45 uppercase">{tech.level}</span>
          </div>
        </div>
      </div>

      {open && (
        <div className="mt-3 pt-3 border-t border-white/10 text-xs font-space text-white/70">
          <p className="leading-relaxed">{tech.desc}</p>
          {tech.projects && (
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <span className="font-silkscreen text-[8px] text-white/40">USED IN:</span>
              {tech.projects.map((p) => (
                <span key={p} className="font-silkscreen text-[8px] bg-[#1a1a1a] text-[#c2ff01] border border-[#c2ff01]/20 px-1.5 py-0.5 rounded">{p}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </button>
  );
}

export default function TechStackPage() {
  const [filterMode, setFilterMode] = useState("all");
  const [selectedTech, setSelectedTech] = useState(null);

  const filteredTechs = filterMode === "all" ? techData
    : techData.filter(t => t.learning === (filterMode === "learning"));

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
            {[{key:"all",label:`ALL (${techData.length})`},{key:"learned",label:"USING NOW"},{key:"learning",label:"LEARNING"}].map(({key,label}) => (
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

          {/* ── LEFT: SKILLS GROUPED BY CATEGORY (7 Cols) ── */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="border-b border-white/10 pb-3">
              <span className="font-silkscreen text-xs text-[#c2ff01] tracking-[2px] uppercase block">
                // SKILLS &amp; PROFICIENCY
              </span>
              <span className="font-mono text-xs text-white/40 mt-0.5 block">
                {filteredTechs.length} TECHNOLOGIES · TAP ONE FOR DETAILS
              </span>
            </div>

            {GROUPS.map((group) => {
              const items = filteredTechs.filter(t => t.group === group);
              if (!items.length) return null;
              return (
                <section key={group}>
                  <h3 className="font-silkscreen text-[11px] text-white/60 tracking-[2px] uppercase mb-3">{group}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {items.map((tech) => {
                      const open = selectedTech === tech.name;
                      return (
                        <TechCard
                          key={tech.name}
                          tech={tech}
                          open={open}
                          onToggle={() => { sound.playClick(); setSelectedTech(open ? null : tech.name); }}
                        />
                      );
                    })}
                  </div>
                </section>
              );
            })}
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
