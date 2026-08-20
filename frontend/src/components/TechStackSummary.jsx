import React from 'react';
import { Link } from 'react-router-dom';
import Lanyard from './Lanyard';

const techStack = [
  { name: 'REACT.JS', color: '#61dafb' },
  { name: 'LARAVEL', color: '#ff2d20' },
  { name: 'PYTHON', color: '#3776ab' },
  { name: 'TAILWIND CSS', color: '#38bdf8' },
  { name: 'JAVASCRIPT', color: '#f7df1e' },
  { name: 'PHP', color: '#777bb4' },
  { name: 'MYSQL', color: '#00758f' },
  { name: 'DOCKER', color: '#2496ed' },
  { name: 'GIT', color: '#f05032' },
  { name: 'FIGMA', color: '#f24e1e' },
  { name: 'FLASK', color: '#ffffff' },
  { name: 'HTML5 & CSS3', color: '#e34f26' },
];

export default function TechStackSummary() {
  return (
    <section id="stack" className="w-full relative bg-[#0a0a0a] border-b-2 border-[#1a1a1a] overflow-hidden">
      {/* Header */}
      <div className="w-full py-8 px-4 sm:px-8 lg:px-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#1c1c1c]">
        <div>
          <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-6 py-2.5 text-base sm:text-lg font-bold tracking-wider rounded-lg shadow-md mb-2">
            TECH STACK &amp; CAPABILITIES
          </div>
          <p className="font-silkscreen text-xs text-[#c2ff01] tracking-widest flex items-center gap-2">
            <span>✦</span>
            <span>PHYSICS LANYARD · GRAB &amp; DRAG THE CARD</span>
          </p>
        </div>

        <Link
          to="/tech-stack"
          className="btn-brutalist self-start sm:self-auto font-silkscreen text-xs bg-[#c2ff01] text-[#0a0a0a] font-bold px-6 py-3 rounded-xl border-2 border-[#0a0a0a] flex items-center gap-2 shadow-[2px_2px_0px_#0a0a0a]"
        >
          <span>VIEW FULL STACK LIST</span>
          <span>→</span>
        </Link>
      </div>

      {/* Two-column layout: Lanyard (left) + Tech list (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[680px]">
        {/* LEFT: Physics Lanyard Canvas */}
        <div className="relative h-[500px] lg:h-auto bg-[#080808] border-b-2 lg:border-b-0 lg:border-r-2 border-[#1c1c1c]">
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#c2ff01]/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none z-10">
            <span className="font-silkscreen text-[10px] bg-black/80 backdrop-blur-md text-[#c2ff01] px-3 py-1 rounded-full border border-[#c2ff01]/40">
              ● GRAB &amp; DRAG THE LANYARD CARD
            </span>
          </div>
          <Lanyard
            position={[0, 0, 26]}
            gravity={[0, -40, 0]}
            fov={20}
            transparent={true}
            lanyardWidth={0.8}
            frontImage="/images/charlie.jpg"
            backImage="/images/charlie2.png"
            imageFit="cover"
          />
        </div>

        {/* RIGHT: Tech Stack Grid List */}
        <div className="px-6 sm:px-10 py-10 flex flex-col justify-center gap-6">
          <div>
            <span className="font-silkscreen text-xs text-[#ff4502] font-bold tracking-widest block mb-3">
              ► CORE TECHNOLOGIES:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techStack.map((tech, i) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2.5 bg-[#0d0d0d] border border-[#2a2a2a] hover:border-[#c2ff01] rounded-xl px-3.5 py-2.5 transition-all duration-200"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-[0_0_8px_var(--dot-color)] transition-all"
                    style={{ backgroundColor: tech.color, '--dot-color': tech.color }}
                  />
                  <span className="font-silkscreen text-[9px] sm:text-[10px] font-bold text-[#fcfff7] group-hover:text-[#c2ff01] transition-colors leading-tight">
                    {tech.name}
                  </span>
                  <span className="ml-auto font-silkscreen text-[8px] text-[#c2ff01]/50 font-bold hidden sm:block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="flex flex-wrap gap-4 pt-2 border-t-2 border-[#1c1c1c]">
            <div className="text-center">
              <div className="font-space font-black text-3xl text-[#c2ff01]">12+</div>
              <div className="font-silkscreen text-[9px] text-white/50">TECHNOLOGIES</div>
            </div>
            <div className="text-center">
              <div className="font-space font-black text-3xl text-[#ff4502]">5+</div>
              <div className="font-silkscreen text-[9px] text-white/50">LIVE PROJECTS</div>
            </div>
            <div className="text-center">
              <div className="font-space font-black text-3xl text-[#fcfff7]">2+</div>
              <div className="font-silkscreen text-[9px] text-white/50">YRS EXPERIENCE</div>
            </div>
            <div className="text-center">
              <div className="font-space font-black text-3xl text-[#c2ff01]">3</div>
              <div className="font-silkscreen text-[9px] text-white/50">CLOUD PLATFORMS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
