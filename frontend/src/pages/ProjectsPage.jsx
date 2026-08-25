import React, { useState, useRef, useEffect, useCallback } from "react";
import Ticker from "../components/Ticker";
import Footer from "../components/Footer";
import ChatbotDrawer from "../components/ChatbotDrawer";
import { sound } from "../utils/audio";

const fullStackProjects = [
  {
    id: "mimalicious",category: "frontend",title: "MIMALICIOUS BURGER HOUSE",subtitle: "HIGH-END RESTAURANT WEB APP",
    tech: ["HTML5","CSS3","JavaScript","Responsive UI"],year: "2026",url: "https://charlie22-dev.github.io/newproflect/",host: "charlie22-dev.github.io",
    accent: "#ff4502",image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    desc: "Artisan burger house platform featuring custom parallax menus, interactive item selectors, and responsive ordering UX."
  },
  {
    id: "tipid-tracker",category: "fullstack",title: "TIPID TRACKER",subtitle: "PYTHON FLASK FINANCE SYSTEM",
    tech: ["Python","Flask","MySQL","Chart.js","Jinja2"],year: "2025",url: "https://charlie22.pythonanywhere.com/",host: "charlie22.pythonanywhere.com",
    accent: "#0055ff",image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    desc: "Personal expense tracking system with automated budget analytics, category breakdowns, and secure MySQL data storage."
  },
  {
    id: "portfolio-ai",category: "fullstack",title: "CHARLIE PORTFOLIO & AI",subtitle: "LARAVEL + GROQ LLM ASSISTANT",
    tech: ["Laravel","PHP","Tailwind CSS","Groq API","MySQL"],year: "2026",url: "https://chaportfolio-1.onrender.com/",host: "chaportfolio.onrender.com",
    accent: "#c2ff01",image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    desc: "Full-stack portfolio architecture featuring AI conversational agent with ultra-low latency Groq llama-3 inference."
  },
  {
    id: "task-manager",category: "backend",title: "TASK MANAGER PRO",subtitle: "CRUD WORKFLOW SCHEDULER",
    tech: ["Laravel","PHP","MySQL","Railway","Blade"],year: "2026",url: "https://taskmanagerapp-production-234.up.railway.app",host: "taskmanagerapp.up.railway.app",
    accent: "#ff00aa",image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    desc: "Full-stack task priority scheduler with relational MySQL schema, authentication, due dates, and status filters."
  },
  {
    id: "appreciation-letter",category: "frontend",title: "APPRECIATION LETTER",subtitle: "INTERACTIVE REACT CALENDAR",
    tech: ["React.js","Tailwind CSS","Vite","Audio FX"],year: "2026",url: "https://charlie22-dev.github.io/appreciation-letterv2/",host: "charlie22-dev.github.io",
    accent: "#ffaa00",image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    desc: "Calendar-based interactive message portal with responsive animated letter reveals and custom themes."
  },
  {
    id: "sky-cast",category: "frontend",title: "SKY CAST WEATHER",subtitle: "GLOBAL WEATHER & FORECAST SPA",
    tech: ["React.js","Tailwind CSS","Weather API","Geolocation"],year: "2026",url: "https://charlie22-dev.github.io/weather_app/",host: "charlie22-dev.github.io",
    accent: "#00d2ff",image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
    desc: "Sleek weather application featuring global location search, real-time temperature, atmospheric metrics, and dynamic hourly/7-day forecasts."
  },
  {
    id: "rest-api-engine",category: "backend",title: "REST API & MICROSERVICES",subtitle: "SECURE AUTH & CRUD ENDPOINTS",
    tech: ["Python","Flask-RESTful","JWT Auth","Postman"],year: "2025",url: "https://github.com/charlie22-dev",host: "github.com/charlie22-dev",
    accent: "#00f0ff",image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    desc: "Structured backend API architecture implementing JWT bearer token verification, CORS security, and database caching."
  }
];

function LivePreviewPanel({ project, anchorRect, visible }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    setIframeLoaded(false);
    setIframeError(false);
  }, [project?.id]);

  if (!project || !visible) return null;

  const PANEL_W = 420;
  const PANEL_H = 300;
  const MARGIN = 16;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let left = (anchorRect?.right ?? 0) + MARGIN;
  let top = (anchorRect?.top ?? 0);

  if (left + PANEL_W > vw - MARGIN) {
    left = (anchorRect?.left ?? PANEL_W + MARGIN) - PANEL_W - MARGIN;
  }
  if (top + PANEL_H > vh - MARGIN) top = vh - PANEL_H - MARGIN;
  if (top < MARGIN) top = MARGIN;

  return (
    <>
      <style>{`
        @keyframes previewFadeIn { from{opacity:0;transform:scale(0.95) translateY(6px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes spin { to{transform:rotate(360deg)} }
      `}</style>
      <div style={{ position:"fixed",left,top,width:PANEL_W,height:PANEL_H+52,zIndex:9999,pointerEvents:"none",animation:"previewFadeIn 0.18s cubic-bezier(0.16,1,0.3,1) both" }}>
        <div style={{ width:"100%",height:"100%",background:"#0e0e0e",border:`2px solid ${project.accent}`,borderRadius:14,overflow:"hidden",boxShadow:`0 24px 60px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.06),0 0 40px ${project.accent}33`,display:"flex",flexDirection:"column" }}>
          {/* Browser chrome */}
          <div style={{ background:"#141414",borderBottom:"1px solid #2a2a2a",padding:"8px 12px",display:"flex",alignItems:"center",gap:8,flexShrink:0 }}>
            <div style={{ display:"flex",gap:5 }}>
              <div style={{ width:10,height:10,borderRadius:"50%",background:"#ff5f56" }} />
              <div style={{ width:10,height:10,borderRadius:"50%",background:"#ffbd2e" }} />
              <div style={{ width:10,height:10,borderRadius:"50%",background:"#27c93f" }} />
            </div>
            <div style={{ flex:1,background:"#0a0a0a",border:"1px solid #2a2a2a",borderRadius:6,padding:"3px 10px",fontFamily:"monospace",fontSize:10,color:"#888",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>
              {project.url}
            </div>
            <div style={{ fontFamily:"'Silkscreen',monospace",fontSize:8,color:project.accent,border:`1px solid ${project.accent}`,borderRadius:4,padding:"2px 6px",flexShrink:0 }}>LIVE</div>
          </div>
          {/* Viewport */}
          <div style={{ flex:1,position:"relative",overflow:"hidden",background:"#050505" }}>
            {!iframeLoaded && !iframeError && (
              <div style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,background:"#080808" }}>
                <div style={{ width:32,height:32,border:`3px solid ${project.accent}33`,borderTopColor:project.accent,borderRadius:"50%",animation:"spin 0.8s linear infinite" }} />
                <span style={{ fontFamily:"'Silkscreen',monospace",fontSize:9,color:"#555",letterSpacing:"0.1em" }}>LOADING PREVIEW...</span>
              </div>
            )}
            {iframeError && (
              <div style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,background:"#080808",overflow:"hidden" }}>
                <img src={project.image} alt="" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:0.18,filter:"blur(3px)" }} />
                <span style={{ position:"relative",fontFamily:"'Silkscreen',monospace",fontSize:9,color:"#666",letterSpacing:"0.08em",textAlign:"center",padding:"0 20px",lineHeight:1.8 }}>
                  PREVIEW RESTRICTED<br/><span style={{color:"#444",fontSize:8}}>X-Frame-Options policy</span>
                </span>
              </div>
            )}
            <iframe
              key={project.id}
              src={project.url}
              title={`Preview: ${project.title}`}
              sandbox="allow-scripts allow-same-origin allow-forms"
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeError(true)}
              style={{ width:"200%",height:"200%",transform:"scale(0.5)",transformOrigin:"0 0",border:"none",opacity:iframeLoaded?1:0,transition:"opacity 0.3s ease",pointerEvents:"none" }}
            />
          </div>
          {/* Footer bar */}
          <div style={{ background:"#0d0d0d",borderTop:"1px solid #1a1a1a",padding:"6px 12px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0 }}>
            <span style={{ fontFamily:"'Silkscreen',monospace",fontSize:8,color:"#555",letterSpacing:"0.08em" }}>{project.host}</span>
            <span style={{ fontFamily:"'Silkscreen',monospace",fontSize:8,color:project.accent,letterSpacing:"0.08em" }}>HOVER TO PREVIEW</span>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project, onHover, onLeave }) {
  return (
    <div
      onClick={() => { sound.playClick(); if (project.url) window.open(project.url, "_blank"); }}
      onMouseEnter={(e) => { sound.playHover(); onHover(project, e.currentTarget.getBoundingClientRect()); }}
      onMouseLeave={onLeave}
      className="group cursor-pointer flex flex-col justify-between bg-[#0e0e0e] rounded-2xl overflow-hidden border-2 border-[#1c1c1c] hover:border-[#c2ff01] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(194,255,1,0.18)]"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#070707] border-b border-[#222]">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="font-silkscreen text-[9px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider text-white" style={{ backgroundColor: project.accent || "#ff4502" }}>{project.category}</span>
          <span className="font-silkscreen text-[9px] font-bold px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-white/20 text-[#c2ff01]">● {project.year}</span>
        </div>
        {/* Live preview pill */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-sm border border-[#c2ff01]/50 rounded-full px-3 py-1 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c2ff01] animate-pulse" />
            <span className="font-silkscreen text-[8px] text-[#c2ff01] tracking-wider">LIVE PREVIEW</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-20 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-[#c2ff01] text-black px-4 py-2.5 flex items-center justify-between font-silkscreen text-xs font-bold shadow-[0_-4px_20px_rgba(194,255,1,0.4)]">
          <div className="flex items-center gap-2"><span className="animate-pulse">►</span><span className="tracking-wider">VISIT LIVE APP</span></div>
          <div className="flex items-center gap-1 text-[10px] font-mono tracking-tight bg-black/10 px-2 py-0.5 rounded"><span>{project.host}</span><span className="group-hover:translate-x-1 transition-transform">↗</span></div>
        </div>
      </div>
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-3">
        <div>
          <h3 className="font-space font-bold text-lg sm:text-xl text-white group-hover:text-[#c2ff01] transition-colors leading-tight mb-1">{project.title}</h3>
          <p className="font-silkscreen text-[11px] text-[#ff4502] tracking-wider mb-2">{project.subtitle}</p>
          <p className="font-space text-xs text-white/70 line-clamp-2 leading-relaxed">{project.desc}</p>
        </div>
        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5">
          {project.tech.map((t, idx) => (
            <span key={idx} className="font-silkscreen text-[9px] bg-[#141414] text-[#c2ff01] border border-[#c2ff01]/30 px-2 py-0.5 rounded">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [previewProject, setPreviewProject] = useState(null);
  const [previewRect, setPreviewRect] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const hideTimerRef = useRef(null);

  const handleCategoryChange = (cat) => { sound.playClick(); setActiveCategory(cat); };

  const handleCardHover = useCallback((project, rect) => {
    clearTimeout(hideTimerRef.current);
    setPreviewProject(project);
    setPreviewRect(rect);
    setPreviewVisible(true);
  }, []);

  const handleCardLeave = useCallback(() => {
    hideTimerRef.current = setTimeout(() => setPreviewVisible(false), 120);
  }, []);

  useEffect(() => () => clearTimeout(hideTimerRef.current), []);

  const filteredProjects = activeCategory === "all" ? fullStackProjects : fullStackProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#000000] text-[#fcfff7] select-none font-space">
      <section className="max-w-6xl mx-auto px-4 sm:px-12 pt-6 sm:pt-8 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 my-6 sm:my-8">
          <button onClick={() => handleCategoryChange("frontend")} onMouseEnter={() => sound.playHover()} className={`border-2 px-5 sm:px-8 py-3.5 sm:py-6 rounded-lg font-silkscreen text-base sm:text-xl md:text-2xl font-bold tracking-wider sm:tracking-widest uppercase transition-all cursor-pointer w-full sm:w-auto text-center ${activeCategory==="frontend"?"border-[#ff4502] text-[#ff4502] shadow-[0_0_25px_#ff4502] scale-105 bg-[#ff4502]/10":"border-[#ff4502]/70 text-[#ff4502]/90 hover:border-[#ff4502] hover:text-[#ff4502] bg-black"}`}>
            <div>FRONTEND</div><div>&amp; UI/UX</div>
          </button>
          <button onClick={() => handleCategoryChange("all")} onMouseEnter={() => sound.playHover()} className={`relative px-8 sm:px-12 md:px-16 py-5 sm:py-7 md:py-8 rounded-[100px] font-silkscreen text-xl sm:text-2xl md:text-4xl font-black tracking-tight text-black transition-transform cursor-pointer -rotate-2 sm:-rotate-6 md:-rotate-12 shadow-[0_0_60px_#c2ff01,0_0_100px_#c2ff01] max-w-full ${activeCategory==="all"?"bg-[#c2ff01] scale-105 sm:scale-110":"bg-[#c2ff01] hover:scale-105"}`}>
            <div className="absolute inset-0 rounded-[100px] bg-[#c2ff01] blur-xl opacity-60 -z-10 animate-pulse" />
            <div className="leading-tight text-center"><div>FULL-STACK</div><div>DEVELOPER</div></div>
          </button>
          <button onClick={() => handleCategoryChange("backend")} onMouseEnter={() => sound.playHover()} className={`border-2 px-5 sm:px-8 py-3.5 sm:py-6 rounded-lg font-silkscreen text-base sm:text-xl md:text-2xl font-bold tracking-wider sm:tracking-widest uppercase transition-all cursor-pointer w-full sm:w-auto text-center ${activeCategory==="backend"?"border-[#0055ff] text-[#00aaff] shadow-[0_0_25px_#0055ff] scale-105 bg-[#0055ff]/10":"border-[#0055ff]/70 text-[#0088ff] hover:border-[#0055ff] hover:text-[#00aaff] bg-black"}`}>
            <div>BACKEND</div><div>&amp; DATABASE</div>
          </button>
        </div>
      </section>

      <Ticker text="FULL-STACK DEV →" items={["FULL-STACK DEV →","WEB APPLICATIONS →","SYSTEM ARCHITECTURE →","CODE ARCHIVE →","REST APIS & DATABASE →","CLOUD DEPLOYMENT →"]} bgColor="#c2ff01" textColor="#0a0a0a" borderColor="#0a0a0a" className="py-3.5 sm:py-5 text-lg sm:text-3xl font-silkscreen font-bold" />

      <section className="w-full bg-[#ff4502] text-[#fcfff7] py-10 sm:py-16 px-4 sm:px-12 lg:px-20 border-b-4 border-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-3xl">
            <h1 className="font-space font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-none text-white drop-shadow-sm break-words">FULL-STACK ENGINEERING &amp; APPS</h1>
            <p className="font-silkscreen text-[11px] sm:text-sm text-black/80 mt-3 tracking-wider sm:tracking-widest uppercase">PRODUCTION WEB APPS · REST APIS · DATABASE SYSTEMS · UI/UX LAB</p>
          </div>
          <div className="font-space font-semibold text-sm sm:text-lg lg:text-xl text-white space-y-1 sm:space-y-1.5 md:text-right border-l-2 md:border-l-0 md:border-r-2 border-white/40 pl-3.5 sm:pl-4 md:pl-0 md:pr-6">
            <p className="hover:text-black transition-colors cursor-default">React.js · Next.js · TypeScript</p>
            <p className="hover:text-black transition-colors cursor-default">PHP · Laravel · MySQL</p>
            <p className="hover:text-black transition-colors cursor-default">Python · Flask · REST APIs</p>
            <p className="hover:text-black transition-colors cursor-default">Tailwind CSS · Node.js · Docker</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 py-10 sm:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <span className="font-silkscreen text-xs text-[#c2ff01] tracking-[3px] uppercase block">// SOFTWARE ARCHIVE</span>
            <h2 className="font-silkscreen text-xl sm:text-2xl font-bold text-white tracking-wider mt-1">DEPLOYED APPLICATIONS ({filteredProjects.length})</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[{key:"all",label:"ALL SYSTEMS"},{key:"frontend",label:"FRONTEND & UI"},{key:"fullstack",label:"FULL-STACK"},{key:"backend",label:"BACKEND & APIS"}].map(({key,label}) => (
              <button key={key} onClick={() => handleCategoryChange(key)} className={`font-silkscreen text-[10px] sm:text-xs px-3 py-1.5 rounded border transition-colors ${activeCategory===key?"bg-[#c2ff01] text-black border-[#c2ff01] font-bold":"bg-transparent text-white/70 border-white/20 hover:border-white/40"}`}>{label}</button>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center gap-2 text-white/30">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c2ff01]/50 animate-pulse" />
          <span className="font-silkscreen text-[9px] tracking-[2px] uppercase">Hover over a project to preview the live site</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onHover={handleCardHover} onLeave={handleCardLeave} />
          ))}
        </div>
      </section>

      <Footer />
      <ChatbotDrawer />
      <LivePreviewPanel project={previewProject} anchorRect={previewRect} visible={previewVisible} />
    </div>
  );
}
