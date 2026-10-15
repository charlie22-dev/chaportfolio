import React, { useState } from "react";
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
    id: "sky-cast",category: "frontend",title: "SKY CAST WEATHER",subtitle: "GLOBAL WEATHER & FORECAST SPA",
    tech: ["React.js","Tailwind CSS","Weather API","Geolocation"],year: "2026",url: "https://charlie22-dev.github.io/weather_app/",host: "charlie22-dev.github.io",
    accent: "#00d2ff",image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
    desc: "Sleek weather application featuring global location search, real-time temperature, atmospheric metrics, and dynamic hourly/7-day forecasts."
  },
  {
    id: "Bookverse", category: "fullstack", title: "BOOKVERSE", subtitle: "Eccommerce app",
    tech: ["Flutter", "Dart", "Python"], year: "2026", url: "https://github.com/charlie22-dev/Ecommerve_flutter.git", host: "github.com/charlie22-dev",
    accent: "#F0E68C", image: null, desc: "A Flutter & Dart e-commerce mobile app with Python backend."
  },
  {
    id: "Sndrapark", category: "fullstack", title: "SNDRAPARK", subtitle: "Web-Based Smart Parking Reservation System",
    tech: ["Php", "HTML5", "CSS3", "C++", "Arduino", "Mysql"], year: "2026", url: "https://github.com/charlie22-dev/sndara_for_caps.git", host: "charlie22-dev.github.io",
    accent: "#0000, #FFFF", image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80", desc: "A parking reservation platform for a multi-floor car park. A driver reserves a specific bay before arriving and gets a barcode pass."
  }
];

function ProjectCard({ project }) {
  return (
    <div
      onClick={() => { sound.playClick(); if (project.url) window.open(project.url, "_blank"); }}
      onMouseEnter={() => sound.playHover()}
      className="group cursor-pointer flex flex-col justify-between bg-[#0e0e0e] rounded-2xl overflow-hidden border-2 border-[#1c1c1c] hover:border-[#c2ff01] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(194,255,1,0.18)]"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#070707] border-b border-[#222]">
        {project.image
          ? <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100" loading="lazy" />
          : <div className="w-full h-full bg-[#111] flex items-center justify-center font-silkscreen text-xs text-white/30 tracking-widest">NO PREVIEW</div>
        }
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="font-silkscreen text-[9px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider text-white" style={{ backgroundColor: project.accent || "#ff4502" }}>{project.category}</span>
          <span className="font-silkscreen text-[9px] font-bold px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-white/20 text-[#c2ff01]">● {project.year}</span>
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

  const handleCategoryChange = (cat) => { sound.playClick(); setActiveCategory(cat); };
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


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Footer />
      <ChatbotDrawer />
    </div>
  );
}

// ProjectsPage: full archive catalog of web and mobile software
