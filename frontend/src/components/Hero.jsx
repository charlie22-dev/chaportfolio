import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import DepthText from './DepthText';
import { sound } from '../utils/audio';

export default function Hero() {
  return (
    <section className="h-[calc(100vh-84px)] min-h-[580px] flex flex-col items-center justify-between text-center px-4 sm:px-8 pt-4 pb-8 relative overflow-hidden bg-[#000000] select-none">
      {/* Large ambient neon lime glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#c2ff01]/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Tag: [2] GRAPHIC DESIGN / FULL-STACK */}
      <div className="font-silkscreen text-xs sm:text-sm text-[#c2ff01] tracking-[3px] z-10 flex items-center justify-center gap-2 mt-2">
        <span>[2] FULL-STACK &amp; ENGINEERING</span>
      </div>

      {/* Center 3D Extruded DepthText Component */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center z-10 my-auto py-4">
        <DepthText
          text="CHARLIE"
          layers={42}
          depth={2.8}
          faceColor="#c2ff01"
          depthColor="#0a1a01"
          tilt={9}
          pointerTracking={true}
          smoothing={0.14}
          perspective={950}
          autoOrbit={true}
          orbitSpeed={0.35}
          fontSize="clamp(3.8rem, 15.5vw, 11rem)"
          fontWeight={900}
          shadow={true}
          className="font-silkscreen font-black tracking-tight select-none cursor-pointer"
        />
      </div>

      {/* Subtitle Tags: [1] on left & [3] on right */}
      <div className="w-full max-w-4xl flex items-center justify-between px-6 sm:px-12 my-2 font-silkscreen text-xs sm:text-sm text-[#c2ff01] tracking-wider z-10">
        <div className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <span>[1] SOFTWARE DEV</span>
        </div>
        <div className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <span>[3] UI/UX &amp; 3D LAB</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 my-3 z-10">
        <Link
          to="/contact"
          onClick={() => sound.playClick()}
          onMouseEnter={() => sound.playHover()}
          className="btn-brutalist font-silkscreen text-xs sm:text-sm bg-[#c2ff01] text-[#000000] font-bold px-6 py-2.5 border-2 border-[#c2ff01] uppercase tracking-wider inline-flex items-center gap-2 hover:bg-transparent hover:text-[#c2ff01] transition-all shadow-[2px_2px_0px_#c2ff01]"
        >
          <span>GET IN TOUCH</span>
          <span>→</span>
        </Link>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sound.playClick()}
          onMouseEnter={() => sound.playHover()}
          className="btn-brutalist font-silkscreen text-xs sm:text-sm bg-transparent text-[#fcfff7] hover:text-[#c2ff01] font-bold px-6 py-2.5 border-2 border-[#333] hover:border-[#c2ff01] uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
        >
          <span>GITHUB</span>
          <span>↗</span>
        </a>
      </div>

      {/* Bottom Footer Credit Line */}
      <div className="text-[11px] sm:text-xs text-[#c2ff01]/60 font-silkscreen tracking-[4px] uppercase z-10">
        CML.DEV LAB | {personalInfo.name.toUpperCase()}
      </div>
    </section>
  );
}
