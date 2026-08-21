import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sound } from '../utils/audio';
import { personalInfo } from '../data/portfolioData';

export default function QuickMenuDrawer({ isOpen, onClose }) {
  const location = useLocation();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        sound.playClose();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { num: '01', title: 'HOME', subtitle: 'Main portal & 3D Title', path: '/' },
    { num: '02', title: 'SELECTED WORKS', subtitle: 'Interactive project gallery', path: '/projects' },
    { num: '03', title: 'TECH STACK', subtitle: 'Languages, frameworks & tools', path: '/tech-stack' },
    { num: '04', title: 'GET IN TOUCH', subtitle: 'Collaboration & inquiries', path: '/contact' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-[#000000]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={() => {
          sound.playClose();
          onClose();
        }}
      />

      {/* Slide-out Drawer Panel */}
      <div className="relative w-full max-w-full sm:max-w-lg bg-[#050505] border-l-2 border-[#c2ff01]/40 h-full flex flex-col justify-between p-5 sm:p-10 shadow-2xl z-10 overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#222] pb-5 sm:pb-6">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c2ff01] animate-ping" />
            <span className="font-silkscreen text-[11px] sm:text-xs text-[#c2ff01] tracking-wider sm:tracking-widest font-bold">
              SYS.MENU // {time}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClose();
              onClose();
            }}
            onMouseEnter={() => sound.playHover()}
            className="w-10 h-10 rounded-full border border-[#333] hover:border-[#c2ff01] text-[#fcfff7] hover:text-[#c2ff01] flex items-center justify-center font-silkscreen text-base transition-colors"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>

        {/* Center Navigation Links */}
        <div className="py-8 space-y-6">
          <p className="font-silkscreen text-[11px] text-[#c2ff01]/60 tracking-[3px]">
            ► QUICK NAVIGATION
          </p>

          <div className="space-y-4">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.num}
                  to={item.path}
                  onClick={() => {
                    sound.playClick();
                    onClose();
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`group flex items-start gap-4 p-3.5 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-[#c2ff01]/10 border-[#c2ff01] text-[#c2ff01]'
                      : 'border-transparent hover:border-[#333] hover:bg-[#111] text-[#fcfff7]'
                  }`}
                >
                  <span className="font-silkscreen text-xs font-bold text-[#c2ff01] opacity-70 group-hover:opacity-100 pt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-space font-black text-xl tracking-tight group-hover:text-[#c2ff01] transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-space text-xs text-[#fcfff7]/50 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="ml-auto font-silkscreen text-sm text-[#c2ff01] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom System Status & Links */}
        <div className="border-t border-[#222] pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-[11px] font-silkscreen text-[#fcfff7]/60">
            <div>
              <span className="text-[#c2ff01]">DEV:</span> {personalInfo.name.toUpperCase()}
            </div>
            <div>
              <span className="text-[#c2ff01]">CORE:</span> REACT 19 + VITE
            </div>
            <div>
              <span className="text-[#c2ff01]">FPS:</span> 60.0 NOMINAL
            </div>
            <div>
              <span className="text-[#c2ff01]">STATUS:</span> ONLINE 200
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="font-silkscreen text-xs text-[#c2ff01] hover:underline flex items-center gap-1"
            >
              <span>GITHUB</span>
              <span>↗</span>
            </a>
            <span className="text-[#333]">/</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="font-silkscreen text-xs text-[#c2ff01] hover:underline flex items-center gap-1"
            >
              <span>LINKEDIN</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
