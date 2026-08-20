import React from 'react';
import { certificationsList } from '../data/portfolioData';

export default function Certifications() {
  return (
    <div className="w-full">
      <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-5 py-2 text-sm sm:text-base font-bold tracking-wider rounded-md mb-6 shadow-md">
        CERTIFICATIONS
      </div>

      <div className="flex flex-col gap-3">
        {certificationsList.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            className="flex items-center justify-between p-4 rounded-xl bg-[#111] border-2 border-[#222] hover:border-[#c2ff01] transition-all group"
          >
            <div className="flex-1 min-w-0 pr-2">
              <p className="font-space font-bold text-sm sm:text-base text-[#fcfff7] group-hover:text-[#c2ff01] transition-colors truncate">
                {cert.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-silkscreen text-[10px] text-[#ff4502]">PROVIDER:</span>
                <span className="font-space text-xs text-[#fcfff7]/70 truncate">
                  {cert.provider}
                </span>
              </div>
            </div>
            <span className="font-silkscreen text-xs text-[#c2ff01] border border-[#c2ff01]/40 px-2 py-1 rounded bg-[#0a0a0a] group-hover:bg-[#c2ff01] group-hover:text-[#0a0a0a] transition-all shrink-0">
              VERIFIED ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
