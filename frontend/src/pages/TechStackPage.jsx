import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Ticker from '../components/Ticker';
import OptionWheel from '../components/OptionWheel';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';
import ChatbotDrawer from '../components/ChatbotDrawer';
import { sound } from '../utils/audio';

const techData = [
  // Learned & Mastered
  {
    name: 'React.js',
    category: 'Frontend',
    status: 'Learned & Active',
    level: 'Advanced',
    icon: '⚛️',
    color: '#00d8ff',
    desc: 'Component architecture, custom hooks, state management, Vite, and Next.js SPA/SSR applications.',
    projects: ['Appreciation Letter', 'Portfolio UI System']
  },
  {
    name: 'PHP & Laravel',
    category: 'Backend',
    status: 'Learned & Active',
    level: 'Proficient',
    icon: '🐘',
    color: '#ff2d20',
    desc: 'MVC architecture, Eloquent ORM, RESTful API endpoints, Blade templates, authentication, and database migrations.',
    projects: ['Task Manager Pro', "Charlie's Portfolio"]
  },
  {
    name: 'Python & Flask',
    category: 'Backend / AI',
    status: 'Learned & Active',
    level: 'Proficient',
    icon: '🐍',
    color: '#3776ab',
    desc: 'Backend routing, API services, data manipulation, MySQL database connectivity, and lightweight microservices.',
    projects: ['Tipid Tracker', 'API Microservices Engine']
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Core Language',
    status: 'Learned & Active',
    level: 'Advanced',
    icon: '⚡',
    color: '#f7df1e',
    desc: 'Asynchronous programming, DOM manipulation, Web Audio API, GSAP animations, and event-driven architectures.',
    projects: ['Mimalicious', 'Audio SFX Engine', 'Interactive Wheel']
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    status: 'Learned & Active',
    level: 'Mastered',
    icon: '🎨',
    color: '#38bdf8',
    desc: 'Utility-first responsive layouts, brutalist design systems, custom themes, and high-performance CSS animations.',
    projects: ['Portfolio Theme', 'Task Manager', 'All Web Apps']
  },
  {
    name: 'MySQL Database',
    category: 'Database',
    status: 'Learned & Active',
    level: 'Proficient',
    icon: '🗄️',
    color: '#00758f',
    desc: 'Relational database schema modeling, indexing, ACID transactions, complex joins, and query optimization.',
    projects: ['Tipid Tracker', 'Task Manager Pro']
  },
  {
    name: 'HTML5 & Semantic Web',
    category: 'Core',
    status: 'Learned & Active',
    level: 'Mastered',
    icon: '🌐',
    color: '#e34f26',
    desc: 'Clean accessible markup, SEO optimization, responsive layout structures, and cross-browser standard compatibility.',
    projects: ['Mimalicious', 'Web App Skeletons']
  },

  // Currently Learning
  {
    name: 'Next.js & SSR',
    category: 'Currently Learning',
    status: 'In Progress',
    level: 'Intermediate',
    icon: '▲',
    color: '#ffffff',
    desc: 'Server-side rendering, static site generation (SSG), App Router, server actions, and edge API routes.',
    projects: ['Modern Fullstack Apps', 'Next.js Lab']
  },
  {
    name: 'TypeScript',
    category: 'Currently Learning',
    status: 'In Progress',
    level: 'Intermediate',
    icon: '🔷',
    color: '#3178c6',
    desc: 'Static typing, generics, interfaces, strict mode type safety, and typed React component props.',
    projects: ['Typed API Interfaces', 'Fullstack Modules']
  },
  {
    name: 'Node.js & Express',
    category: 'Currently Learning',
    status: 'In Progress',
    level: 'Intermediate',
    icon: '🟢',
    color: '#68a063',
    desc: 'Event loop architecture, non-blocking I/O server scripts, middleware pipelines, and JWT authentication services.',
    projects: ['Microservice Endpoints', 'Backend Workers']
  },
  {
    name: 'Docker & DevOps',
    category: 'Currently Learning',
    status: 'In Progress',
    level: 'Fundamental',
    icon: '🐳',
    color: '#2496ed',
    desc: 'Containerization, Dockerfile recipes, multi-container compose, environment reproducibility, and cloud deployments.',
    projects: ['Local Dev Containers', 'Railway Cloud Deploy']
  },
  {
    name: 'Git & GitHub Workflows',
    category: 'Workflow',
    status: 'Learned & Active',
    level: 'Proficient',
    icon: '🐙',
    color: '#f05032',
    desc: 'Branching strategies, pull requests, semantic commit conventions, GitHub Pages, and CI/CD pipelines.',
    projects: ['All Repositories', 'Open Source Projects']
  }
];

export default function TechStackPage() {
  const navigate = useNavigate();
  const [filterMode, setFilterMode] = useState('all');
  const [selectedIdx, setSelectedIdx] = useState(0);

  const filteredItems = filterMode === 'all'
    ? techData
    : filterMode === 'learned'
    ? techData.filter(t => t.status === 'Learned & Active')
    : techData.filter(t => t.status === 'In Progress');

  const currentItem = filteredItems[selectedIdx] || filteredItems[0] || techData[0];
  const wheelLabels = filteredItems.map(t => t.name);

  const handleFilterChange = (mode) => {
    sound.playClick();
    setFilterMode(mode);
    setSelectedIdx(0);
  };

  const handleWheelChange = (index) => {
    sound.playHover();
    setSelectedIdx(index);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#fcfff7] select-none font-space pb-20">
      {/* ── HEADER TICKER ────────────────────────────────────── */}
      <Ticker
        text="FULL-STACK TECH STACK & ARCHITECTURE →"
        items={[
          'TECH STACK & TOOLING →',
          'LANGUAGES & FRAMEWORKS →',
          'DATABASES & SERVERS →',
          'DEVELOPER PROFILE →',
          'CONTINUOUS LEARNING →'
        ]}
        bgColor="#c2ff01"
        textColor="#0a0a0a"
        borderColor="#0a0a0a"
        className="py-4 sm:py-5 text-xl sm:text-3xl font-silkscreen font-bold"
      />

      {/* ── MASSIVE ORANGE DISPLAY BANNER ────────────────────── */}
      <section className="w-full bg-[#ff4502] text-[#fcfff7] py-12 px-6 sm:px-12 lg:px-20 border-b-4 border-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-silkscreen text-xs text-black font-bold tracking-[3px] uppercase block mb-1">
              // DEVELOPER MATRIX
            </span>
            <h1 className="font-space font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
              TECH STACK &amp; PROFILE
            </h1>
            <p className="font-silkscreen text-xs text-white/80 mt-2 tracking-widest uppercase">
              INTERACTIVE TOOL WHEEL (LEFT) &amp; 3D PROFILE HOLOCARD (RIGHT)
            </p>
          </div>

          <div className="flex gap-2 font-silkscreen text-xs">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 py-2 rounded-lg font-bold border-2 transition-all ${
                filterMode === 'all'
                  ? 'bg-[#c2ff01] text-black border-[#0a0a0a] shadow-md'
                  : 'bg-black/30 text-white border-white/30 hover:border-white'
              }`}
            >
              ALL ({techData.length})
            </button>
            <button
              onClick={() => handleFilterChange('learned')}
              className={`px-4 py-2 rounded-lg font-bold border-2 transition-all ${
                filterMode === 'learned'
                  ? 'bg-[#c2ff01] text-black border-[#0a0a0a] shadow-md'
                  : 'bg-black/30 text-white border-white/30 hover:border-white'
              }`}
            >
              LEARNED
            </button>
            <button
              onClick={() => handleFilterChange('learning')}
              className={`px-4 py-2 rounded-lg font-bold border-2 transition-all ${
                filterMode === 'learning'
                  ? 'bg-[#c2ff01] text-black border-[#0a0a0a] shadow-md'
                  : 'bg-black/30 text-white border-white/30 hover:border-white'
              }`}
            >
              LEARNING
            </button>
          </div>
        </div>
      </section>

      {/* ── TWO COLUMN MAIN INTERFACE ────────────────────────── */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[580px]">

          {/* ── LEFT COLUMN: INTERACTIVE OPTION WHEEL & TECH DETAIL (7 Cols) ─ */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-silkscreen text-xs text-[#c2ff01] tracking-[3px] uppercase">
                  ◄ SCROLL / DRAG WHEEL TO EXPLORE ►
                </span>
                <span className="font-mono text-xs text-white/50">
                  {selectedIdx + 1} / {filteredItems.length}
                </span>
              </div>

              {/* OptionWheel Container */}
              <div className="h-[280px] sm:h-[320px] bg-[#070707] border-2 border-[#1c1c1c] rounded-2xl relative overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
                {/* Cyber grid backdrop */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c2ff01_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Center marker beam */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-14 bg-[#c2ff01]/5 border-y border-[#c2ff01]/30 pointer-events-none z-0" />
                <div className="absolute top-1/2 left-3 -translate-y-1/2 font-silkscreen text-sm text-[#c2ff01] font-bold pointer-events-none z-10">
                  ►
                </div>

                <OptionWheel
                  key={filterMode}
                  items={wheelLabels}
                  defaultSelected={0}
                  textColor="#444444"
                  activeColor="#c2ff01"
                  side="left"
                  fontSize={1.8}
                  spacing={1.3}
                  curve={1.2}
                  tilt={8}
                  blur={1.5}
                  fade={0.28}
                  smoothing={180}
                  inset={35}
                  loop={false}
                  draggable={true}
                  onChange={handleWheelChange}
                />
              </div>
            </div>

            {/* Selected Item Detail Panel */}
            <div className="bg-[#0c0c0c] border-2 border-[#ff4502] p-6 rounded-2xl relative overflow-hidden shadow-[0_0_20px_rgba(255,69,2,0.15)] transition-all">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{currentItem.icon}</span>
                  <div>
                    <h3 className="font-silkscreen text-xl sm:text-2xl font-bold text-white tracking-wider">
                      {currentItem.name}
                    </h3>
                    <span className="font-space text-xs text-[#ff4502] font-semibold">
                      {currentItem.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-silkscreen text-[10px]">
                  <span className="bg-[#111] text-white border border-white/20 px-2.5 py-1 rounded">
                    {currentItem.level}
                  </span>
                  <span className={`px-2.5 py-1 rounded font-bold ${
                    currentItem.status.includes('Learned')
                      ? 'bg-[#c2ff01] text-black'
                      : 'bg-[#0055ff] text-white'
                  }`}>
                    {currentItem.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-space text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                {currentItem.desc}
              </p>

              {/* Projects Built */}
              {currentItem.projects && currentItem.projects.length > 0 && (
                <div className="border-t border-white/10 pt-3 flex flex-wrap items-center gap-2">
                  <span className="font-silkscreen text-[10px] text-white/50">APPLIED IN:</span>
                  {currentItem.projects.map((proj, pIdx) => (
                    <span
                      key={pIdx}
                      className="font-silkscreen text-[10px] bg-[#141414] text-[#c2ff01] border border-[#c2ff01]/30 px-2 py-0.5 rounded"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN: 3D HOLOGRAPHIC PROFILE CARD (5 Cols) ─ */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="mb-4 text-center">
              <span className="font-silkscreen text-xs text-[#ff4502] tracking-[3px] uppercase block">
                // 3D TILT HOLOCARD
              </span>
              <p className="font-space text-xs text-white/60 mt-0.5">
                Hover to tilt · Interactive Hologram
              </p>
            </div>

            {/* ProfileCard Component from React Bits */}
            <div className="w-full flex justify-center">
              <ProfileCard
                name="Charlie Mer Libatod"
                title="Full-Stack Developer"
                handle="charlie22-dev"
                status="Available for Work"
                contactText="LET'S TALK →"
                avatarUrl="/images/charlie2.png"
                miniAvatarUrl="/images/charlie.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowEnabled={true}
                behindGlowColor="rgba(194, 255, 1, 0.7)"
                behindGlowSize="50%"
                innerGradient="linear-gradient(145deg, #091a03 0%, #002244 100%)"
                onContactClick={() => {
                  sound.playClick();
                  navigate('/contact');
                }}
              />
            </div>
          </div>

        </div>
      </main>

      {/* ── FOOTER & CHATBOT ─────────────────────────────────── */}
      <Footer />
      <ChatbotDrawer />
    </div>
  );
}
