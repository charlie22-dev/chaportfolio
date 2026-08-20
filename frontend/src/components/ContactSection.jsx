import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full">
      <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-5 py-2 text-sm sm:text-base font-bold tracking-wider rounded-md mb-6 shadow-md">
        DIRECT CONTACT
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href={`mailto:${personalInfo.email}`}
          className="bg-[#111] border-2 border-[#222] hover:border-[#c2ff01] rounded-2xl p-6 transition-all group flex flex-col justify-between min-h-[120px]"
        >
          <div>
            <p className="font-silkscreen text-[11px] text-[#c2ff01] font-bold tracking-widest uppercase mb-2">
              ► EMAIL DIRECT
            </p>
            <p className="font-space font-bold text-sm sm:text-base text-[#fcfff7] group-hover:text-[#c2ff01] transition-colors break-all">
              {personalInfo.email}
            </p>
          </div>
          <p className="font-silkscreen text-[10px] text-[#ff4502] mt-4 flex items-center gap-1">
            <span>CLICK TO SEND INQUIRY</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </p>
        </a>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#111] border-2 border-[#222] hover:border-[#c2ff01] rounded-2xl p-6 transition-all group flex flex-col justify-between min-h-[120px]"
        >
          <div>
            <p className="font-silkscreen text-[11px] text-[#c2ff01] font-bold tracking-widest uppercase mb-2">
              ► GITHUB PROFILE
            </p>
            <p className="font-space font-bold text-sm sm:text-base text-[#fcfff7] group-hover:text-[#c2ff01] transition-colors">
              charlie22-dev
            </p>
          </div>
          <p className="font-silkscreen text-[10px] text-[#ff4502] mt-4 flex items-center gap-1">
            <span>EXPLORE REPOSITORIES</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </p>
        </a>
      </div>
    </section>
  );
}
