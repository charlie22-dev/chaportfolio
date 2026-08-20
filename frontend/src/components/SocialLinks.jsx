import React from 'react';
import { socialLinks } from '../data/portfolioData';

export default function SocialLinks() {
  return (
    <div className="w-full">
      <div className="inline-block font-silkscreen bg-[#ff4502] text-[#fcfff7] px-5 py-2 text-sm sm:text-base font-bold tracking-wider rounded-md mb-6 shadow-md">
        SOCIAL & NETWORK
      </div>

      <div className="flex flex-col gap-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#111] border-2 border-[#222] hover:border-[#c2ff01] transition-all group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl bg-[#0a0a0a] border border-[#333] w-10 h-10 rounded-lg flex items-center justify-center group-hover:border-[#c2ff01] transition-colors">
                {social.icon}
              </span>
              <div>
                <span className="font-space font-bold text-sm sm:text-base text-[#fcfff7] group-hover:text-[#c2ff01] transition-colors block">
                  {social.name}
                </span>
                <span className="font-silkscreen text-[10px] text-[#ff4502] block mt-0.5">
                  {social.handle}
                </span>
              </div>
            </div>
            <span className="text-[#c2ff01] text-lg font-bold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
