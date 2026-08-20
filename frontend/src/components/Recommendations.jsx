import React from 'react';
import { recommendationsList } from '../data/portfolioData';

// Duplicate list to ensure smooth infinite loop
const infiniteRecos = [...recommendationsList, ...recommendationsList];

export default function Recommendations() {
  return (
    <div className="w-full">
      <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-5 py-2 text-sm sm:text-base font-bold tracking-wider rounded-md mb-6 shadow-md">
        RECOMMENDATIONS
      </div>

      <div className="relative h-[440px] overflow-hidden rounded-2xl border-2 border-[#222] bg-[#111] p-4">
        {/* Gradient fades top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#111] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111] to-transparent z-10 pointer-events-none" />

        <div id="recoScroll" className="flex flex-col gap-3.5 animate-scroll-y">
          {infiniteRecos.map((reco, index) => (
            <div
              key={index}
              className="bg-[#181818] border border-[#2a2a2a] hover:border-[#c2ff01]/60 transition-colors rounded-xl p-4 sm:p-5"
            >
              <div className="flex items-center gap-1.5 text-[#c2ff01] font-silkscreen text-xs mb-2">
                <span>✦</span>
                <span>ENDORSEMENT</span>
              </div>
              <p className="font-space text-xs sm:text-sm text-[#fcfff7]/90 leading-relaxed mb-3 italic">
                "{reco.text}"
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[#262626]">
                <p className="font-space font-bold text-xs sm:text-sm text-[#fcfff7]">{reco.author}</p>
                <p className="font-silkscreen text-[10px] text-[#ff4502]">{reco.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
