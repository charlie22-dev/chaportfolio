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
    desc: 'Artisan burger house platform featuring custom parallax menus, interactive item selectors, and responsive ordering UX.',
    renderGraphic: () => (
      <div className="w-full h-full p-5 flex flex-col justify-between relative overflow-hidden bg-[#111111] text-[#fcfff7] rounded-lg border-2 border-[#ff4502]">
        <div className="flex justify-between items-center z-10">
          <span className="font-silkscreen text-xs text-[#ff4502] font-bold">FRONTEND</span>
          <span className="bg-[#ff4502] text-white font-silkscreen text-[9px] px-2 py-0.5 rounded font-bold">LIVE APP ↗</span>
        </div>
        
        {/* Terminal / Code Visual */}
        <div className="my-auto text-center space-y-3 z-10">
          <div className="text-5xl sm:text-6xl drop-shadow-[0_0_25px_#ff4502]">🍔</div>
          <h3 className="font-silkscreen text-xl sm:text-2xl font-bold text-[#ff4502] tracking-wider">
            MIMALICIOUS
          </h3>
          <div className="bg-black/60 p-2.5 rounded border border-white/10 text-left font-mono text-[10px] text-white/80 space-y-0.5">
            <p><span className="text-[#c2ff01]">const</span> cart = <span className="text-[#00f0ff]">useMenuStore</span>();</p>
            <p className="text-white/50">// Dynamic cart dispatch &amp; checkout</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-white/50 border-t border-white/10 pt-2 z-10">
          <span>GITHUB PAGES</span>
          <span className="text-[#c2ff01] font-bold">LAUNCH APP →</span>
        </div>
      </div>
    )
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
    desc: 'Personal expense tracking system with automated budget analytics, category breakdowns, and secure MySQL data storage.',
    renderGraphic: () => (
      <div className="w-full h-full p-5 flex flex-col justify-between relative overflow-hidden bg-[#0a121e] text-[#fcfff7] rounded-lg border-2 border-[#0055ff]">
        <div className="flex justify-between items-center z-10">
          <span className="font-silkscreen text-xs text-[#00aaff] font-bold">FULL-STACK</span>
          <span className="bg-[#0055ff] text-white font-silkscreen text-[9px] px-2 py-0.5 rounded font-bold">LIVE APP ↗</span>
        </div>

        <div className="my-auto text-center space-y-3 z-10">
          <div className="text-5xl sm:text-6xl drop-shadow-[0_0_25px_#0055ff]">📈</div>
          <h3 className="font-silkscreen text-xl sm:text-2xl font-bold text-[#00f0ff] tracking-wider">
            TIPID TRACKER
          </h3>
          <div className="bg-black/60 p-2.5 rounded border border-white/10 text-left font-mono text-[10px] text-white/80 space-y-0.5">
            <p><span className="text-[#ff4502]">@app.route</span>(<span className="text-[#c2ff01]">'/api/expenses'</span>)</p>
            <p><span className="text-[#00f0ff]">def</span> get_analytics(): <span className="text-white/50"># MySQL query</span></p>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-white/50 border-t border-white/10 pt-2 z-10">
          <span>PYTHONANYWHERE</span>
          <span className="text-[#00f0ff] font-bold">LAUNCH APP →</span>
        </div>
      </div>
    )
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
    desc: 'Full-stack portfolio architecture featuring AI conversational agent with ultra-low latency Groq llama-3 inference.',
    renderGraphic: () => (
      <div className="w-full h-full p-5 flex flex-col justify-between relative overflow-hidden bg-[#10140c] text-[#fcfff7] rounded-lg border-2 border-[#c2ff01]">
        <div className="flex justify-between items-center z-10">
          <span className="font-silkscreen text-xs text-[#c2ff01] font-bold">AI + LARAVEL</span>
          <span className="bg-[#c2ff01] text-black font-silkscreen text-[9px] px-2 py-0.5 rounded font-bold">LIVE APP ↗</span>
        </div>

        <div className="my-auto text-center space-y-3 z-10">
          <div className="text-5xl sm:text-6xl drop-shadow-[0_0_25px_#c2ff01]">🤖</div>
          <h3 className="font-silkscreen text-xl sm:text-2xl font-bold text-[#c2ff01] tracking-wider">
            CHARLIE DEV LAB
          </h3>
          <div className="bg-black/60 p-2.5 rounded border border-white/10 text-left font-mono text-[10px] text-white/80 space-y-0.5">
            <p><span className="text-[#c2ff01]">Route::post</span>(<span className="text-[#ff4502]">'/chatbot/chat'</span>);</p>
            <p className="text-[#c2ff01]/80">Groq::stream(model: 'llama-3.3-70b')</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-white/50 border-t border-white/10 pt-2 z-10">
          <span>RENDER CLOUD</span>
          <span className="text-[#c2ff01] font-bold">LAUNCH APP →</span>
        </div>
      </div>
    )
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
    desc: 'Full-stack task priority scheduler with relational MySQL schema, authentication, due dates, and status filters.',
    renderGraphic: () => (
      <div className="w-full h-full p-5 flex flex-col justify-between relative overflow-hidden bg-[#160c18] text-[#fcfff7] rounded-lg border-2 border-[#ff00aa]">
        <div className="flex justify-between items-center z-10">
          <span className="font-silkscreen text-xs text-[#ff00aa] font-bold">BACKEND &amp; DB</span>
          <span className="bg-[#ff00aa] text-white font-silkscreen text-[9px] px-2 py-0.5 rounded font-bold">LIVE APP ↗</span>
        </div>

        <div className="my-auto text-center space-y-3 z-10">
          <div className="text-5xl sm:text-6xl drop-shadow-[0_0_25px_#ff00aa]">⚡</div>
          <h3 className="font-silkscreen text-xl sm:text-2xl font-bold text-[#ff66cc] tracking-wider">
            TASK MANAGER
          </h3>
          <div className="bg-black/60 p-2.5 rounded border border-white/10 text-left font-mono text-[10px] text-white/80 space-y-0.5">
            <p><span className="text-[#00f0ff]">Schema::create</span>(<span className="text-[#c2ff01]">'tasks'</span>, table);</p>
            <p className="text-white/50">$table-&gt;enum('priority', ['high', 'urgent']);</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-white/50 border-t border-white/10 pt-2 z-10">
          <span>RAILWAY DEPLOY</span>
          <span className="text-[#ff00aa] font-bold">LAUNCH APP →</span>
        </div>
      </div>
    )
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
    desc: 'Calendar-based interactive message portal with responsive animated letter reveals and custom themes.',
    renderGraphic: () => (
      <div className="w-full h-full p-5 flex flex-col justify-between relative overflow-hidden bg-[#18150c] text-[#fcfff7] rounded-lg border-2 border-[#ffaa00]">
        <div className="flex justify-between items-center z-10">
          <span className="font-silkscreen text-xs text-[#ffaa00] font-bold">REACT APP</span>
          <span className="bg-[#ffaa00] text-black font-silkscreen text-[9px] px-2 py-0.5 rounded font-bold">LIVE APP ↗</span>
        </div>

        <div className="my-auto text-center space-y-3 z-10">
          <div className="text-5xl sm:text-6xl drop-shadow-[0_0_25px_#ffaa00]">💌</div>
          <h3 className="font-silkscreen text-xl sm:text-2xl font-bold text-[#ffcc00] tracking-wider">
            LETTER CALENDAR
          </h3>
          <div className="bg-black/60 p-2.5 rounded border border-white/10 text-left font-mono text-[10px] text-white/80 space-y-0.5">
            <p><span className="text-[#ffaa00]">export default</span> CalendarView = () =&gt;</p>
            <p className="text-white/50">Interactive daily letter reveal portal</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-white/50 border-t border-white/10 pt-2 z-10">
          <span>GITHUB PAGES</span>
          <span className="text-[#ffaa00] font-bold">LAUNCH APP →</span>
        </div>
      </div>
    )
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
    desc: 'Structured backend API architecture implementing JWT bearer token verification, CORS security, and database caching.',
    renderGraphic: () => (
      <div className="w-full h-full p-5 flex flex-col justify-between relative overflow-hidden bg-[#0c1618] text-[#fcfff7] rounded-lg border-2 border-[#00f0ff]">
        <div className="flex justify-between items-center z-10">
          <span className="font-silkscreen text-xs text-[#00f0ff] font-bold">BACKEND API</span>
          <span className="bg-[#00f0ff] text-black font-silkscreen text-[9px] px-2 py-0.5 rounded font-bold">GITHUB ↗</span>
        </div>

        <div className="my-auto text-center space-y-3 z-10">
          <div className="text-5xl sm:text-6xl drop-shadow-[0_0_25px_#00f0ff]">🛡️</div>
          <h3 className="font-silkscreen text-xl sm:text-2xl font-bold text-[#00f0ff] tracking-wider">
            API SYSTEM ENGINE
          </h3>
          <div className="bg-black/60 p-2.5 rounded border border-white/10 text-left font-mono text-[10px] text-white/80 space-y-0.5">
            <p><span className="text-[#ff4502]">GET /api/v1/health</span> <span className="text-[#c2ff01]">200 OK</span></p>
            <p><span className="text-[#00f0ff]">POST /api/v1/auth/login</span> <span className="text-[#c2ff01]">200 OK</span></p>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-white/50 border-t border-white/10 pt-2 z-10">
          <span>MICROSERVICES</span>
          <span className="text-[#00f0ff] font-bold">VIEW SOURCE →</span>
        </div>
      </div>
    )
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
    desc: 'Sleek weather application featuring global location search, real-time temperature, atmospheric metrics, and dynamic hourly/7-day forecasts.',
    renderGraphic: () => (
      <div className="w-full h-full p-5 flex flex-col justify-between relative overflow-hidden bg-[#071726] text-[#fcfff7] rounded-lg border-2 border-[#00d2ff]">
        <div className="flex justify-between items-center z-10">
          <span className="font-silkscreen text-xs text-[#00d2ff] font-bold">WEATHER SPA</span>
          <span className="bg-[#00d2ff] text-black font-silkscreen text-[9px] px-2 py-0.5 rounded font-bold">LIVE APP ↗</span>
        </div>

        <div className="my-auto text-center space-y-3 z-10">
          <div className="text-5xl sm:text-6xl drop-shadow-[0_0_25px_#00d2ff]">🌤️</div>
          <h3 className="font-silkscreen text-xl sm:text-2xl font-bold text-[#00d2ff] tracking-wider">
            SKY CAST
          </h3>
          <div className="bg-black/60 p-2.5 rounded border border-white/10 text-left font-mono text-[10px] text-white/80 space-y-0.5">
            <p><span className="text-[#c2ff01]">const</span> forecast = <span className="text-[#00d2ff]">await</span> fetchWeather(city);</p>
            <p className="text-white/50">// 7-day outlook &amp; live metrics</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-white/50 border-t border-white/10 pt-2 z-10">
          <span>GITHUB PAGES</span>
          <span className="text-[#00d2ff] font-bold">LAUNCH APP →</span>
        </div>
      </div>
    )
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
      <section className="max-w-6xl mx-auto px-6 sm:px-12 pt-8 pb-16 relative">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 my-8">

          {/* 1. Left Option: FRONTEND & UI (Orange border card) */}
          <button
            onClick={() => handleCategoryChange('frontend')}
            onMouseEnter={() => sound.playHover()}
            className={`border-2 px-8 py-6 rounded-lg font-silkscreen text-lg sm:text-2xl font-bold tracking-widest uppercase transition-all cursor-pointer ${
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
            className={`relative px-12 sm:px-16 py-8 rounded-[100px] font-silkscreen text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-black transition-transform cursor-pointer -rotate-6 sm:-rotate-12 shadow-[0_0_60px_#c2ff01,0_0_100px_#c2ff01] ${
              activeCategory === 'all'
                ? 'bg-[#c2ff01] scale-110'
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
            className={`border-2 px-8 py-6 rounded-lg font-silkscreen text-lg sm:text-2xl font-bold tracking-widest uppercase transition-all cursor-pointer ${
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
        className="py-4 sm:py-5 text-xl sm:text-3xl font-silkscreen font-bold"
      />

      {/* ── MASSIVE ORANGE DISPLAY BANNER ────────────────────── */}
      <section className="w-full bg-[#ff4502] text-[#fcfff7] py-14 sm:py-16 px-6 sm:px-12 lg:px-20 border-b-4 border-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Giant Bold Typography */}
          <div className="max-w-3xl">
            <h1 className="font-space font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-none text-white drop-shadow-sm">
              FULL-STACK ENGINEERING &amp; APPS
            </h1>
            <p className="font-silkscreen text-xs sm:text-sm text-black/80 mt-3 tracking-widest uppercase">
              PRODUCTION WEB APPS · REST APIS · DATABASE SYSTEMS · UI/UX LAB
            </p>
          </div>

          {/* Right: Stacked Technologies List */}
          <div className="font-space font-semibold text-base sm:text-lg lg:text-xl text-white space-y-1.5 md:text-right border-l-2 md:border-l-0 md:border-r-2 border-white/40 pl-4 md:pl-0 md:pr-6">
            <p className="hover:text-black transition-colors cursor-default">React.js · Next.js · TypeScript</p>
            <p className="hover:text-black transition-colors cursor-default">PHP · Laravel · MySQL</p>
            <p className="hover:text-black transition-colors cursor-default">Python · Flask · REST APIs</p>
            <p className="hover:text-black transition-colors cursor-default">Tailwind CSS · Node.js · Docker</p>
          </div>
        </div>
      </section>

      {/* ── 3-COLUMN PROJECT GRID GALLERY ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                sound.playClick();
                if (project.url) {
                  window.open(project.url, '_blank');
                } else {
                  setSelectedModalItem(project);
                }
              }}
              onMouseEnter={() => sound.playHover()}
              className="group cursor-pointer flex flex-col justify-between bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 hover:border-[#c2ff01] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(194,255,1,0.15)]"
            >
              {/* Interactive App Canvas Container */}
              <div className="w-full aspect-[3/4] p-3 bg-black flex items-center justify-center relative overflow-hidden">
                {project.renderGraphic()}
              </div>

              {/* Card Meta Footer */}
              <div className="p-4 bg-[#0e0e0e] border-t border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="font-silkscreen text-xs sm:text-sm font-bold text-white group-hover:text-[#c2ff01] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-space text-[11px] text-white/50 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
                <span className="font-silkscreen text-xs text-[#c2ff01] opacity-0 group-hover:opacity-100 transition-opacity">
                  LAUNCH ↗
                </span>
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
