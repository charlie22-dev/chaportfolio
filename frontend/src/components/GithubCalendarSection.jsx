import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { sound } from "../utils/audio";
import { personalInfo } from "../data/portfolioData";

export default function GithubCalendarSection() {
  const [stats, setStats] = useState({
    publicRepos: 18,
    totalCommits: 450,
    streak: 14,
    followers: 12
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real stats from Github API if available
    fetch("https://api.github.com/users/charlie22-dev")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos !== undefined) {
          setStats((prev) => ({
            ...prev,
            publicRepos: data.public_repos,
            followers: data.followers
          }));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Theme matching portfolio: deep blacks and neon lime
  const calendarTheme = {
    dark: ["#141414", "#1e3800", "#3a6c00", "#84c400", "#c2ff01"],
    light: ["#141414", "#1e3800", "#3a6c00", "#84c400", "#c2ff01"]
  };

  return (
    <section className="w-full mt-14 pt-10 border-t-2 border-[#1c1c1c]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="font-silkscreen text-[10px] sm:text-xs text-[#c2ff01] tracking-[3px] uppercase block mb-1">
            // CODE ACTIVITY & COMMITS
          </span>
          <h2 className="font-space font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
            GITHUB CONTRIBUTIONS
          </h2>
        </div>

        <a
          href={personalInfo.github || "https://github.com/charlie22-dev"}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0e0e0e] border-2 border-[#222] hover:border-[#c2ff01] hover:text-[#c2ff01] text-white/80 font-silkscreen text-xs transition-all duration-200 group"
        >
          <span>@charlie22-dev</span>
          <span className="group-hover:translate-x-1 transition-transform">↗</span>
        </a>
      </div>

      {/* Main Stats and Calendar Card */}
      <div className="bg-[#0b0b0b] border-2 border-[#1c1c1c] rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#c2ff01]/[0.03] rounded-full blur-3xl pointer-events-none" />

        {/* Quick Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#121212] border border-[#222] p-4 rounded-xl">
            <span className="font-silkscreen text-[9px] text-white/40 uppercase block mb-1">REPOSITORIES</span>
            <span className="font-silkscreen text-xl sm:text-2xl font-bold text-[#c2ff01]">
              {stats.publicRepos}+
            </span>
          </div>
          <div className="bg-[#121212] border border-[#222] p-4 rounded-xl">
            <span className="font-silkscreen text-[9px] text-white/40 uppercase block mb-1">YEAR ACTIVITY</span>
            <span className="font-silkscreen text-xl sm:text-2xl font-bold text-[#ff4502]">
              ACTIVE
            </span>
          </div>
          <div className="bg-[#121212] border border-[#222] p-4 rounded-xl">
            <span className="font-silkscreen text-[9px] text-white/40 uppercase block mb-1">PRIMARY STACK</span>
            <span className="font-silkscreen text-xl sm:text-2xl font-bold text-[#00d8ff]">
              REACT / PHP
            </span>
          </div>
          <div className="bg-[#121212] border border-[#222] p-4 rounded-xl">
            <span className="font-silkscreen text-[9px] text-white/40 uppercase block mb-1">STATUS</span>
            <span className="font-silkscreen text-xl sm:text-2xl font-bold text-[#00ff88] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse inline-block" />
              BUILDING
            </span>
          </div>
        </div>

        {/* GitHub Calendar Container */}
        <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#222] scrollbar-track-transparent">
          <div className="min-w-[700px] flex justify-center py-4 text-white">
            <GitHubCalendar
              username="charlie22-dev"
              colorScheme="dark"
              theme={calendarTheme}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
              style={{
                fontFamily: "Space Grotesk, sans-serif"
              }}
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-white/40 font-mono">
          <span>Source: GitHub API (@charlie22-dev)</span>
          <span className="text-[#c2ff01]">Live Data Feed</span>
        </div>
      </div>
    </section>
  );
}
