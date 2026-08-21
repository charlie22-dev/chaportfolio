import React from 'react';
import IdCard from './IdCard';
import { personalInfo } from '../data/portfolioData';

export default function IdSection() {
  const creativeTools = [
    { name: 'Photoshop / UI', short: 'Ps' },
    { name: 'Illustrator / Vector', short: 'Ai' },
    { name: 'Premiere / Video', short: 'Pr' },
    { name: 'Lightroom / Photo', short: 'Lr' },
    { name: 'React.js', short: 'Re' },
    { name: 'PHP / Laravel', short: 'PHP' },
    { name: 'Python / Flask', short: 'Py' },
    { name: 'Tailwind CSS', short: 'Tw' },
  ];

  return (
    <section className="w-full bg-[#0044ff] text-[#fcfff7] py-12 sm:py-16 px-4 sm:px-10 lg:px-16 border-b-4 border-[#0a0a0a] overflow-hidden">
      {/* Top Header Decorators */}
      <div className="max-w-[1400px] mx-auto mb-8 sm:mb-12 flex items-center justify-between">
        <div className="font-bold text-2xl sm:text-4xl tracking-[6px] sm:tracking-[8px] text-[#c2ff01] select-none">
          •••
        </div>
        <div className="text-2xl sm:text-4xl font-black text-[#0a0a0a] select-none mr-auto ml-8 sm:ml-24 md:ml-48">
          →
        </div>
      </div>

      {/* 3-Column Estella Layout */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.35fr_1fr_1.15fr] gap-8 sm:gap-10 xl:gap-14 items-start">

        {/* COLUMN 1: Horizontal ID Card */}
        <div className="w-full flex justify-center lg:justify-start">
          <IdCard />
        </div>

        {/* COLUMN 2: EXPERIENCE */}
        <div className="space-y-7">
          {/* Orange Block Badge */}
          <div>
            <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-8 py-2.5 text-xl font-bold tracking-wider rounded-lg shadow-md border-2 border-[#ff4502]">
              EXPERIENCE
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="inline-block bg-[#c2ff01] text-[#0a0a0a] font-silkscreen text-xs font-bold px-4 py-1 rounded-full mb-2">
                2026-PRESENT
              </span>
              <p className="font-space font-bold text-base sm:text-lg text-white flex items-center gap-2">
                <span>★</span>
                <span>BS Information Technology Student</span>
              </p>
              <p className="font-space text-sm text-white/80 mt-0.5">
                Global Reciprocal Colleges
              </p>
            </div>

            <div>
              <span className="inline-block bg-[#c2ff01] text-[#0a0a0a] font-silkscreen text-xs font-bold px-4 py-1 rounded-full mb-2">
                2024-2026
              </span>
              <p className="font-space font-bold text-base sm:text-lg text-white flex items-center gap-2">
                <span>★</span>
                <span>IT Support &amp; Tech Volunteer</span>
              </p>
              <p className="font-space text-sm text-white/80 mt-0.5">
                Part-time &amp; Tech Maintenance
              </p>
            </div>

            <div>
              <span className="inline-block bg-[#c2ff01] text-[#0a0a0a] font-silkscreen text-xs font-bold px-4 py-1 rounded-full mb-2">
                2024
              </span>
              <p className="font-space font-bold text-base sm:text-lg text-white flex items-center gap-2">
                <span>★</span>
                <span>School Hackathon Competitor</span>
              </p>
              <p className="font-space text-sm text-white/80 mt-0.5">
                Global Reciprocal Colleges
              </p>
            </div>

            <div>
              <span className="inline-block bg-[#c2ff01] text-[#0a0a0a] font-silkscreen text-xs font-bold px-4 py-1 rounded-full mb-2">
                2023
              </span>
              <p className="font-space font-bold text-base sm:text-lg text-white flex items-center gap-2">
                <span>★</span>
                <span>Started Coding Journey</span>
              </p>
              <p className="font-space text-sm text-white/80 mt-0.5">
                Wrote first line of code in Python &amp; Web
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 3: EDUCATION, CREATIVE TOOLS, CONTACT */}
        <div className="space-y-8">
          {/* 1. EDUCATION */}
          <div>
            <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-8 py-2.5 text-xl font-bold tracking-wider rounded-lg shadow-md border-2 border-[#ff4502] mb-4">
              EDUCATION
            </div>

            <div className="space-y-5">
              <div>
                <span className="inline-block bg-[#c2ff01] text-[#0a0a0a] font-silkscreen text-xs font-bold px-4 py-1 rounded-full mb-2">
                  PRESENT
                </span>
                <p className="font-space font-bold text-base text-white flex items-center gap-2">
                  <span>★</span>
                  <span>Global Reciprocal Colleges (GRC)</span>
                </p>
                <p className="font-space text-sm text-white/80 mt-0.5">
                  1st Year | Bachelor of Science in Information Technology
                </p>
              </div>

              <div>
                <span className="inline-block bg-[#c2ff01] text-[#0a0a0a] font-silkscreen text-xs font-bold px-4 py-1 rounded-full mb-2">
                  2022-2024
                </span>
                <p className="font-space font-bold text-base text-white flex items-center gap-2">
                  <span>★</span>
                  <span>Senior High School Graduate</span>
                </p>
                <p className="font-space text-sm text-white/80 mt-0.5">
                  Information &amp; Communications Technology (ICT)
                </p>
              </div>
            </div>
          </div>

          {/* 2. CREATIVE TOOLS */}
          <div>
            <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-8 py-2.5 text-xl font-bold tracking-wider rounded-lg shadow-md border-2 border-[#ff4502] mb-4">
              CREATIVE TOOLS
            </div>

            <div className="flex flex-wrap gap-2">
              {creativeTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#c2ff01] text-[#0a0a0a] font-black font-space flex items-center justify-center text-xs border-2 border-[#0a0a0a] shadow-[1.5px_1.5px_0px_#0a0a0a] hover:scale-105 transition-transform cursor-default select-none"
                  title={tool.name}
                >
                  {tool.short}
                </div>
              ))}
            </div>
          </div>

          {/* 3. CONTACT */}
          <div>
            <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-8 py-2.5 text-xl font-bold tracking-wider rounded-lg shadow-md border-2 border-[#ff4502] mb-4">
              CONTACT
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-space">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#c2ff01] transition-colors"
              >
                <span>📱</span>
                <span>@charlie22-dev</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-[#c2ff01] transition-colors truncate"
                title={personalInfo.email}
              >
                <span>✉️</span>
                <span className="truncate">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#c2ff01] transition-colors"
              >
                <span>📘</span>
                <span>Charlie Mer Libatod</span>
              </a>

              <a
                href="tel:09279132322"
                className="flex items-center gap-2 hover:text-[#c2ff01] transition-colors"
              >
                <span>📞</span>
                <span>+63 0927 913 2322</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
