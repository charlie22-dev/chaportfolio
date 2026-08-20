import React from 'react';
import { aboutText } from '../data/portfolioData';

export default function About() {
  return (
    <div id="about" className="w-full">
      <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-5 py-2 text-sm sm:text-base font-bold tracking-wider rounded-md mb-6 shadow-md">
        ABOUT ME
      </div>

      <div className="bg-[#111] border-2 border-[#262626] hover:border-[#c2ff01]/60 transition-colors rounded-2xl p-6 sm:p-7 text-[#fcfff7] space-y-4 text-sm sm:text-base leading-relaxed">
        {aboutText.map((paragraph, index) => (
          <p key={index} className="text-[#fcfff7]/90 font-space">
            {paragraph}
          </p>
        ))}

        <div className="pt-3 border-t border-[#262626] flex flex-wrap gap-2 font-silkscreen text-[10px] sm:text-xs">
          <span className="bg-[#0a0a0a] text-[#c2ff01] border border-[#c2ff01]/40 px-3 py-1 rounded">
            LOC: MALABON, PH
          </span>
          <span className="bg-[#0a0a0a] text-[#ff4502] border border-[#ff4502]/40 px-3 py-1 rounded">
            EXP: 3+ YEARS DEV
          </span>
          <span className="bg-[#0a0a0a] text-[#0044ff] border border-[#0044ff] text-white px-3 py-1 rounded">
            STATUS: ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}
