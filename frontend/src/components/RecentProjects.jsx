import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccordionGallery from './AccordionGallery';
import { sound } from '../utils/audio';

const projects = [
  {
    id: 'mimalicious',
    index: '01',
    label: '01 · MIMALICIOUS',
    title: 'MIMALICIOUS',
    category: 'E-COMMERCE & RESTAURANT',
    tagline: 'High-end gourmet burger ordering & dining platform',
    desc: 'A vibrant restaurant ordering platform featuring interactive menu filters, customizable burger topping selectors, dynamic cart calculation, and responsive mobile-first UI design.',
    url: 'https://charlie22-dev.github.io/newproflect/',
    host: 'charlie22-dev.github.io/newproflect',
    tags: ['HTML5', 'Modern CSS', 'JavaScript', 'Responsive UI', 'Figma'],
    accent: '#ff4502',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Interactive Burger Menu & Real-time Filter System',
      'Instant Cart Total & Dynamic Checkout Calculation',
      'Chef Story, Customer Reviews & Social Proof',
      'Mobile-First Touch Controls with 60fps Animations'
    ]
  },
  {
    id: 'tipid-tracker',
    index: '02',
    label: '02 · TIPID TRACKER',
    title: 'TIPID TRACKER',
    category: 'FINTECH & BUDGET ANALYTICS',
    tagline: 'Personal finance & budget ceiling manager built with Flask',
    desc: 'Smart personal finance web application built with Python and MySQL. Helps users track daily expenses, visualize cash flow via Chart.js, and set category-based budget thresholds.',
    url: 'https://charlie22.pythonanywhere.com/',
    host: 'charlie22.pythonanywhere.com',
    tags: ['Python', 'Flask', 'MySQL', 'Chart.js', 'Jinja2'],
    accent: '#c2ff01',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    features: [
      'CRUD Expense & Income Logging with Category Pills',
      'Visual Spend Breakdown via Chart.js Donut Graphs',
      'Smart Budget Ceiling Alerts & Savings Milestones',
      'Production Cloud MySQL on PythonAnywhere Server'
    ]
  },
  {
    id: 'task-manager',
    index: '03',
    label: '03 · TASK MANAGER APP',
    title: 'TASK MANAGER APP',
    category: 'FULL-STACK PRODUCTIVITY',
    tagline: 'Full-stack task prioritization & workflow platform',
    desc: 'Robust task management web system built with Laravel and MySQL. Features priority level color codes, deadline countdowns, workspace categorization, and dark mode.',
    url: 'https://taskmanagerapp-production-234.up.railway.app',
    host: 'taskmanagerapp.up.railway.app',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
    accent: '#0044ff',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Kanban Pipeline & Multi-Column Task Board',
      'Priority Level Assignment (Urgent, High, Normal)',
      'Workspace Categories for School, Freelance & Personal',
      'Automated CI/CD Deployment on Railway Cloud'
    ]
  },
  {
    id: 'appreciation-letter',
    index: '04',
    label: '04 · APPRECIATION LETTER',
    title: 'APPRECIATION LETTER',
    category: 'CREATIVE INTERACTIVE SPA',
    tagline: 'Calendar-based interactive note and memory platform',
    desc: 'Heartfelt interactive calendar web app built in React. Users unlock daily personalized notes, memories, music soundtracks, and animated photo polaroids.',
    url: 'https://charlie22-dev.github.io/appreciation-letterv2/',
    host: 'charlie22-dev.github.io/appreciation-letterv2',
    tags: ['React.js', 'CSS Motion', 'LocalStorage', 'Web Audio'],
    accent: '#ff4502',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Unlockable Daily Letter Envelopes with 3D Flip',
      'Polaroid Scrapbook Lightbox Photo Viewer',
      'Background Lo-Fi Soundtrack Player with Audio Controls',
      'Hardware-Accelerated HTML5 Canvas Confetti'
    ]
  },
  {
    id: 'charlie-portfolio',
    index: '05',
    label: "05 · CHARLIE'S PORTFOLIO",
    title: "CHARLIE'S PORTFOLIO",
    category: 'FULL-STACK AI PORTFOLIO',
    tagline: 'Cyber-brutalist portfolio with Groq AI chatbot integration',
    desc: 'Complete full-stack developer portfolio featuring React Bits components, retro-futuristic aesthetic, dynamic project showcase, and an integrated AI assistant powered by Groq LLM.',
    url: 'https://chaportfolio-1.onrender.com/',
    host: 'chaportfolio.onrender.com',
    tags: ['React', 'Laravel', 'Groq AI', 'Tailwind', 'Motion'],
    accent: '#c2ff01',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Real-Time Groq AI Chatbot Assistant with Tool Calling',
      'Interactive React Bits Components (PixelTransition, Velocity, Accordion)',
      'Neo-Brutalist & Cyber Design System Tokens',
      'Full-Stack Architecture with PHP / Laravel API'
    ]
  },
  {
    id: 'sky-cast',
    index: '06',
    label: '06 · SKY CAST',
    title: 'SKY CAST',
    category: 'WEATHER & FORECAST SPA',
    tagline: 'Real-time weather tracking & atmospheric analytics web app',
    desc: 'Interactive weather forecast web application delivering live meteorological data, hourly updates, 7-day extended forecast outlook, and global city search.',
    url: 'https://charlie22-dev.github.io/weather_app/',
    host: 'charlie22-dev.github.io/weather_app',
    tags: ['React.js', 'Tailwind CSS', 'Weather API', 'JavaScript'],
    accent: '#00d2ff',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Live Real-Time Conditions & Atmospheric Metrics',
      'Interactive Hourly & 7-Day Extended Forecasts',
      'Worldwide City Search & Instant Weather Discovery',
      'Dynamic Responsive Design with Atmospheric Theme'
    ]
  }
];

export default function RecentProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] || projects[0];

  const galleryItems = projects.map((p) => ({
    image: p.image,
    label: p.label,
    link: p.url,
    alt: p.title
  }));

  const handleActiveChange = (idx) => {
    setActiveIndex(idx);
    sound.playBeep(480 + idx * 80, 0.04, 'triangle', 0.04);
  };

  return (
    <section id="projects" className="w-full py-12 px-4 sm:px-8 lg:px-14 bg-[#000000]">
      {/* Top Header Bar */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-6 py-2.5 text-base sm:text-lg font-bold tracking-wider rounded-lg shadow-md mb-2">
            SELECTED WORKS
          </div>
          <p className="font-silkscreen text-xs text-[#c2ff01] tracking-widest flex items-center gap-2">
            <span>✦</span>
            <span>HOVER / CLICK PANELS TO EXPAND PROJECT SHOWCASE</span>
          </p>
        </div>

        <Link
          to="/projects"
          onClick={() => sound.playClick()}
          onMouseEnter={() => sound.playHover()}
          className="btn-brutalist self-start sm:self-auto font-silkscreen text-xs bg-[#c2ff01] text-[#0a0a0a] font-bold px-6 py-3 rounded-xl border-2 border-[#0a0a0a] flex items-center gap-2 shadow-[2px_2px_0px_#0a0a0a]"
        >
          <span>VIEW ALL ARCHIVE</span>
          <span>→</span>
        </Link>
      </div>

      {/* React Bits <AccordionGallery /> Component */}
      <div className="w-full mb-8">
        <AccordionGallery
          items={galleryItems}
          defaultIndex={0}
          expandRatio={0.48}
          height={520}
          gap={12}
          radius={22}
          accentColor="#c2ff01"
          overlayColor="#000000"
          textColor="#fcfff7"
          grayscale={true}
          tilt={6}
          parallax={0.4}
          duration={0.6}
          trigger="hover"
          showLabels={true}
          onActiveChange={handleActiveChange}
        />
      </div>

      {/* Active Project Details Card */}
      <div className="w-full rounded-3xl bg-[#080808] border-3 border-[#222] hover:border-[#c2ff01] p-6 sm:p-8 lg:p-10 transition-colors shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          {/* Left Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-silkscreen text-xs font-bold bg-[#ff4502] text-white px-3.5 py-1 rounded-md shadow">
                {activeProject.category}
              </span>
              <span className="font-silkscreen text-xs text-[#c2ff01] font-bold">
                PROJECT [{activeProject.index} / {String(projects.length).padStart(2, '0')}]
              </span>
            </div>

            <div>
              <h3 className="font-space font-black text-3xl sm:text-4xl text-[#fcfff7] tracking-tight">
                {activeProject.title}
              </h3>
              <p className="font-space font-bold text-sm sm:text-base text-[#c2ff01] mt-1">
                {activeProject.tagline}
              </p>
            </div>

            <p className="font-space text-xs sm:text-sm text-[#fcfff7]/80 leading-relaxed max-w-2xl">
              {activeProject.desc}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {activeProject.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  onMouseEnter={() => sound.playHover()}
                  className="font-silkscreen text-[9px] sm:text-[10px] font-bold bg-[#000000] text-[#c2ff01] border border-[#c2ff01]/30 px-3 py-1 rounded-md hover:border-[#c2ff01] transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Features & Launch Action */}
          <div className="space-y-5 lg:border-l-2 lg:border-[#222] lg:pl-8">
            <div className="space-y-2">
              <span className="font-silkscreen text-xs text-[#ff4502] font-bold tracking-wider block">
                ► KEY CAPABILITIES:
              </span>
              {activeProject.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm font-space text-[#fcfff7]/90">
                  <span className="text-[#c2ff01] font-bold">★</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="btn-brutalist flex-1 font-silkscreen text-xs sm:text-sm bg-[#c2ff01] text-[#000000] font-bold px-7 py-3.5 rounded-xl border-2 border-[#000000] flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000000] hover:scale-105 transition-transform"
              >
                <span>LAUNCH LIVE SITE</span>
                <span>↗</span>
              </a>
              <span className="font-silkscreen text-xs text-white/50">
                {activeProject.host}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
