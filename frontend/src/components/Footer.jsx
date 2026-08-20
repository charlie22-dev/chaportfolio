import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#222] text-center font-silkscreen text-xs text-[#fcfff7]/60 mt-16">
      <div className="flex items-center justify-center gap-3 mb-3 text-[#c2ff01] text-base">
        <span>•••</span>
      </div>
      <p className="tracking-widest uppercase">
        © {new Date().getFullYear()} {personalInfo.name.toUpperCase()}
      </p>
      <p className="text-[10px] text-[#ff4502] tracking-wider mt-1">
        DESIGNED FOR IMPACT · BUILT WITH REACT & VITE
      </p>
    </footer>
  );
}
