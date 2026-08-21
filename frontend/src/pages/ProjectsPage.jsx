import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import Footer from '../components/Footer';
import ChatbotDrawer from '../components/ChatbotDrawer';
import { sound } from '../utils/audio';

// Full-Stack Engineering & Software Applications Showcase
const fullStackProjects = [
  {
    id: 'mimalicious',
    category: 'frontend',
    title: 'MIMALICIOUS BURGER HOUSE',
    subtitle: 'HIGH-END RESTAURANT WEB APP',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    year: '2026',
    url: 'https://charlie22-dev.github.io/newproflect/',
    host: 'charlie22-dev.github.io',
    type: 'webapp',
    accent: '#ff4502',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    desc: 'Artisan burger house platform featuring custom parallax menus, interactive item selectors, and responsive ordering UX.'
  },
  {
    id: 'tipid-tracker',
    category: 'fullstack',
    title: 'TIPID TRACKER',
    subtitle: 'PYTHON FLASK FINANCE SYSTEM',
    tech: ['Python', 'Flask', 'MySQL', 'Chart.js', 'Jinja2'],
    year: '2025',
    url: 'https://charlie22.pythonanywhere.com/',
    host: 'charlie22.pythonanywhere.com',
    type: 'webapp',
    accent: '#0055ff',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    desc: 'Personal expense tracking system with automated budget analytics, category breakdowns, and secure MySQL data storage.'
  },
  {
    id: 'portfolio-ai',
    category: 'fullstack',
    title: 'CHARLIE PORTFOLIO & AI',
    subtitle: 'LARAVEL + GROQ LLM ASSISTANT',
    tech: ['Laravel', 'PHP', 'Tailwind CSS', 'Groq API', 'MySQL'],
    year: '2026',
    url: 'https://chaportfolio-1.onrender.com/',
    host: 'chaportfolio.onrender.com',
    type: 'webapp',
    accent: '#c2ff01',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    desc: 'Full-stack portfolio architecture featuring AI conversational agent with ultra-low latency Groq llama-3 inference.'
  },
  {
    id: 'task-manager',
    category: 'backend',
    title: 'TASK MANAGER PRO',
    subtitle: 'CRUD WORKFLOW SCHEDULER',
    tech: ['Laravel', 'PHP', 'MySQL', 'Railway', 'Blade'],
    year: '2026',
    url: 'https://taskmanagerapp-production-234.up.railway.app',
    host: 'taskmanagerapp.up.railway.app',
    type: 'webapp',
    accent: '#ff00aa',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
    desc: 'Full-stack task priority scheduler with relational MySQL schema, authentication, due dates, and status filters.'
  },
  {
    id: 'appreciation-letter',
    category: 'frontend',
    title: 'APPRECIATION LETTER',
    subtitle: 'INTERACTIVE REACT CALENDAR',
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'Audio FX'],
    year: '2026',
    url: 'https://charlie22-dev.github.io/appreciation-letterv2/',
    host: 'charlie22-dev.github.io',
    type: 'webapp',
    accent: '#ffaa00',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    desc: 'Calendar-based interactive message portal with responsive animated letter reveals and custom themes.'
  },
  {
    id: 'sky-cast',
    category: 'frontend',
    title: 'SKY CAST WEATHER',
    subtitle: 'GLOBAL WEATHER & FORECAST SPA',
    tech: ['React.js', 'Tailwind CSS', 'Weather API', 'Geolocation'],
    year: '2026',
    url: 'https://charlie22-dev.github.io/weather_app/',
    host: 'charlie22-dev.github.io',
    type: 'webapp',
    accent: '#00d2ff',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80',
    desc: 'Sleek weather application featuring global location search, real-time temperature, atmospheric metrics, and dynamic hourly/7-day forecasts.'
  },
  {
    id: 'rest-api-engine',
    category: 'backend',
    title: 'REST API & MICROSERVICES',
    subtitle: 'SECURE AUTH & CRUD ENDPOINTS',
    tech: ['Python', 'Flask-RESTful', 'JWT Auth', 'Postman'],
    year: '2025',
    url: 'https://github.com/charlie22-dev',
    host: 'github.com/charlie22-dev',
    type: 'webapp',
    accent: '#00f0ff',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    desc: 'Structured backend API architecture implementing JWT bearer token verification, CORS security, and database caching.'
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedModalItem, setSelectedModalItem] = useState(null);

  const handleCategoryChange = (cat) => {
    sound.playClick();
    setActiveCategory(cat);
  };

  const filteredProjects = activeCategory === 'all'
    ? fullStackProjects
    : fullStackProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#000000] text-[#fcfff7] select-none font-space">
      {/* ── HERO INTERACTIVE CATEGORY CLUSTER (Screenshot 1 Layout) ──── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-12 pt-6 sm:pt-8 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 my-6 sm:my-8">

          {/* 1. Left Option: FRONTEND & UI (Orange border card) */}
          <button
            onClick={() => handleCategoryChange('frontend')}
            onMouseEnter={() => sound.playHover()}
            className={`border-2 px-5 sm:px-8 py-3.5 sm:py-6 rounded-lg font-silkscreen text-base sm:text-xl md:text-2xl font-bold tracking-wider sm:tracking-widest uppercase transition-all cursor-pointer w-full sm:w-auto text-center ${
              activeCategory === 'frontend'
                ? 'border-[#ff4502] text-[#ff4502] shadow-[0_0_25px_#ff4502] scale-105 bg-[#ff4502]/10'
                : 'border-[#ff4502]/70 text-[#ff4502]/90 hover:border-[#ff4502] hover:text-[#ff4502] bg-black'
            }`}
          >
            <div>FRONTEND</div>
            <div>&amp; UI/UX</div>
          </button>

          {/* 2. Center Pill: FULL-STACK DEV (Big Tilted Glowing Lime Oval) */}
          <button
            onClick={() => handleCategoryChange('all')}
            onMouseEnter={() => sound.playHover()}
            className={`relative px-8 sm:px-12 md:px-16 py-5 sm:py-7 md:py-8 rounded-[100px] font-silkscreen text-xl sm:text-2xl md:text-4xl font-black tracking-tight text-black transition-transform cursor-pointer -rotate-2 sm:-rotate-6 md:-rotate-12 shadow-[0_0_60px_#c2ff01,0_0_100px_#c2ff01] max-w-full ${
              activeCategory === 'all'
                ? 'bg-[#c2ff01] scale-105 sm:scale-110'
                : 'bg-[#c2ff01] hover:scale-105'
            }`}
          >
            {/* Ambient intense glow blur */}
            <div className="absolute inset-0 rounded-[100px] bg-[#c2ff01] blur-xl opacity-60 -z-10 animate-pulse" />
            <div className="leading-tight text-center">
              <div>FULL-STACK</div>
              <div>DEVELOPER</div>
            </div>
          </button>

          {/* 3. Right Option: BACKEND & APIS (Blue border card) */}
          <button
            onClick={() => handleCategoryChange('backend')}
            onMouseEnter={() => sound.playHover()}
            className={`border-2 px-5 sm:px-8 py-3.5 sm:py-6 rounded-lg font-silkscreen text-base sm:text-xl md:text-2xl font-bold tracking-wider sm:tracking-widest uppercase transition-all cursor-pointer w-full sm:w-auto text-center ${
              activeCategory === 'backend'
                ? 'border-[#0055ff] text-[#00aaff] shadow-[0_0_25px_#0055ff] scale-105 bg-[#0055ff]/10'
                : 'border-[#0055ff]/70 text-[#0088ff] hover:border-[#0055ff] hover:text-[#00aaff] bg-black'
            }`}
          >
            <div>BACKEND</div>
            <div>&amp; DATABASE</div>
          </button>
        </div>
      </section>

      {/* ── ENLARGED MOVING GREEN TICKER ──────────────────────── */}
      <Ticker
        text="FULL-STACK DEV →"
        items={[
          'FULL-STACK DEV →',
          'WEB APPLICATIONS →',
          'SYSTEM ARCHITECTURE →',
          'CODE ARCHIVE →',
          'REST APIS & DATABASE →',
          'CLOUD DEPLOYMENT →'
        ]}
        bgColor="#c2ff01"
        textColor="#0a0a0a"
        borderColor="#0a0a0a"
        className="py-3.5 sm:py-5 text-lg sm:text-3xl font-silkscreen font-bold"
      />

      {/* ── MASSIVE ORANGE DISPLAY BANNER ────────────────────── */}
      <section className="w-full bg-[#ff4502] text-[#fcfff7] py-10 sm:py-16 px-4 sm:px-12 lg:px-20 border-b-4 border-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          {/* Left: Giant Bold Typography */}
          <div className="max-w-3xl">
            <h1 className="font-space font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-none text-white drop-shadow-sm break-words">
              FULL-STACK ENGINEERING &amp; APPS
            </h1>
            <p className="font-silkscreen text-[11px] sm:text-sm text-black/80 mt-3 tracking-wider sm:tracking-widest uppercase">
              PRODUCTION WEB APPS · REST APIS · DATABASE SYSTEMS · UI/UX LAB
            </p>
          </div>

          {/* Right: Stacked Technologies List */}
          <div className="font-space font-semibold text-sm sm:text-lg lg:text-xl text-white space-y-1 sm:space-y-1.5 md:text-right border-l-2 md:border-l-0 md:border-r-2 border-white/40 pl-3.5 sm:pl-4 md:pl-0 md:pr-6">
            <p className="hover:text-black transition-colors cursor-default">React.js · Next.js · TypeScript</p>
            <p className="hover:text-black transition-colors cursor-default">PHP · Laravel · MySQL</p>
            <p className="hover:text-black transition-colors cursor-default">Python · Flask · REST APIs</p>
            <p className="hover:text-black transition-colors cursor-default">Tailwind CSS · Node.js · Docker</p>
          </div>
        </div>
      </section>

      {/* ── 3-COLUMN PROJECT GRID GALLERY ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 py-10 sm:py-16">
        {/* Section Subtitle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-white/10 pb-4">
          <div>
            <span className="font-silkscreen text-xs text-[#c2ff01] tracking-[3px] uppercase block">
              // SOFTWARE ARCHIVE
            </span>
            <h2 className="font-silkscreen text-xl sm:text-2xl font-bold text-white tracking-wider mt-1">
              DEPLOYED APPLICATIONS ({filteredProjects.length})
            </h2>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`font-silkscreen text-[10px] sm:text-xs px-3 py-1.5 rounded border transition-colors ${
                activeCategory === 'all' ? 'bg-[#c2ff01] text-black border-[#c2ff01] font-bold' : 'bg-transparent text-white/70 border-white/20'
              }`}
            >
              ALL SYSTEMS
            </button>
            <button
              onClick={() => handleCategoryChange('frontend')}
              className={`font-silkscreen text-[10px] sm:text-xs px-3 py-1.5 rounded border transition-colors ${
                activeCategory === 'frontend' ? 'bg-[#c2ff01] text-black border-[#c2ff01] font-bold' : 'bg-transparent text-white/70 border-white/20'
              }`}
            >
              FRONTEND &amp; UI
            </button>
            <button
              onClick={() => handleCategoryChange('fullstack')}
              className={`font-silkscreen text-[10px] sm:text-xs px-3 py-1.5 rounded border transition-colors ${
                activeCategory === 'fullstack' ? 'bg-[#c2ff01] text-black border-[#c2ff01] font-bold' : 'bg-transparent text-white/70 border-white/20'
              }`}
            >
              FULL-STACK
            </button>
            <button
              onClick={() => handleCategoryChange('backend')}
              className={`font-silkscreen text-[10px] sm:text-xs px-3 py-1.5 rounded border transition-colors ${
                activeCategory === 'backend' ? 'bg-[#c2ff01] text-black border-[#c2ff01] font-bold' : 'bg-transparent text-white/70 border-white/20'
              }`}
            >
              BACKEND &amp; APIS
            </button>
          </div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                sound.playClick();
                if (project.url) {
                  window.open(project.url, '_blank');
                }
              }}
              onMouseEnter={() => sound.playHover()}
              className="group cursor-pointer flex flex-col justify-between bg-[#0e0e0e] rounded-2xl overflow-hidden border-2 border-[#1c1c1c] hover:border-[#c2ff01] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(194,255,1,0.18)]"
            >
              {/* Image Preview Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#070707] border-b border-[#222]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
                  <span
                    className="font-silkscreen text-[9px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider text-white"
                    style={{ backgroundColor: project.accent || '#ff4502' }}
                  >
                    {project.category}
                  </span>
                  <span className="font-silkscreen text-[9px] font-bold px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-white/20 text-[#c2ff01]">
                    ● {project.year}
                  </span>
                </div>

                {/* Animated Bottom Slide-Up Action Bar ("Go To Link") */}
                <div className="absolute inset-x-0 bottom-0 z-20 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-[#c2ff01] text-black px-4 py-2.5 flex items-center justify-between font-silkscreen text-xs font-bold shadow-[0_-4px_20px_rgba(194,255,1,0.4)]">
                  <div className="flex items-center gap-2">
                    <span className="animate-pulse">►</span>
                    <span className="tracking-wider">VISIT LIVE APP</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono tracking-tight bg-black/10 px-2 py-0.5 rounded">
                    <span>{project.host}</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-3">
                <div>
                  <h3 className="font-space font-bold text-lg sm:text-xl text-white group-hover:text-[#c2ff01] transition-colors leading-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="font-silkscreen text-[11px] text-[#ff4502] tracking-wider mb-2">
                    {project.subtitle}
                  </p>
                  <p className="font-space text-xs text-white/70 line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Tech stack badges */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-silkscreen text-[9px] bg-[#141414] text-[#c2ff01] border border-[#c2ff01]/30 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER & CHATBOT ─────────────────────────────────── */}
      <Footer />
      <ChatbotDrawer />
    </div>
  );
}
