import React from 'react';
import { experienceList } from '../data/portfolioData';

export default function Experience() {
  return (
    <div id="experience" className="w-full">
      <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-5 py-2 text-sm sm:text-base font-bold tracking-wider rounded-md mb-6 shadow-md">
        EXPERIENCE & MILESTONES
      </div>

      <div className="flex flex-col gap-6">
        {experienceList.map((item, index) => (
          <div key={index} className="group border-l-2 border-[#c2ff01]/40 pl-5 relative hover:border-[#c2ff01] transition-colors">
            {/* Pulsing dot on timeline */}
            <span
              className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full border-2 border-[#0044ff] ${
                item.current ? 'bg-[#c2ff01] shadow-[0_0_8px_#c2ff01]' : 'bg-[#fcfff7]'
              }`}
            />
            <div className="mb-2">
              <span className="inline-block bg-[#c2ff01] text-[#0a0a0a] font-silkscreen text-[11px] font-bold px-3 py-1 rounded-full tracking-wider shadow-sm">
                {item.current ? `${item.year} - PRESENT` : item.year}
              </span>
            </div>
            <p className="font-space font-bold text-base sm:text-lg text-[#fcfff7] leading-snug flex items-center gap-2">
              <span className="text-[#c2ff01]">★</span>
              <span>{item.role}</span>
            </p>
            <p className="font-space text-xs sm:text-sm text-[#fcfff7]/80 mt-1 leading-relaxed">
              {item.organization}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
