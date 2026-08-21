import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { sound } from '../utils/audio';

const cards = [
  {
    id: 'certificates',
    label: 'CERTIFICATES',
    sublabel: 'ACHIEVEMENTS & CREDENTIALS',
    to: '/certifications',
    accentColor: '#ff4502',
    glowColor: 'rgba(255, 69, 2, 0.6)',
    borderColor: '#ff4502',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="6" width="40" height="30" rx="2" fill="#ff4502" />
        <rect x="8" y="10" width="32" height="4" fill="#0a0a0a" />
        <rect x="8" y="18" width="20" height="3" fill="#0a0a0a" />
        <rect x="8" y="24" width="14" height="3" fill="#0a0a0a" />
        <circle cx="34" cy="36" r="8" fill="#ff4502" stroke="#0a0a0a" strokeWidth="2" />
        <path d="M30 36l3 3 5-5" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="19" y="38" width="10" height="4" fill="#ff4502" />
      </svg>
    ),
    pixelRows: [
      [0,0,1,1,1,1,0,0],
      [0,1,1,1,1,1,1,0],
      [1,1,0,1,1,0,1,1],
      [1,1,1,1,1,1,1,1],
      [0,1,1,1,1,1,1,0],
      [0,0,1,0,0,1,0,0],
      [0,1,1,0,0,1,1,0],
      [1,1,0,0,0,0,1,1],
    ]
  },
  {
    id: 'projects',
    label: 'PROJECTS',
    sublabel: 'SELECTED WORKS & DEMOS',
    to: '/projects',
    accentColor: '#c2ff01',
    glowColor: 'rgba(194, 255, 1, 0.6)',
    borderColor: '#c2ff01',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="8" width="40" height="28" rx="3" fill="#c2ff01" />
        <rect x="8" y="12" width="32" height="18" rx="1" fill="#0a0a0a" />
        <circle cx="12" cy="16" r="1.5" fill="#c2ff01" />
        <circle cx="17" cy="16" r="1.5" fill="#c2ff01" />
        <path d="M14 24l5-4-5-4" stroke="#c2ff01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="22" y1="24" x2="28" y2="24" stroke="#c2ff01" strokeWidth="2" strokeLinecap="round" />
        <rect x="18" y="36" width="12" height="4" fill="#c2ff01" />
        <rect x="12" y="40" width="24" height="2" fill="#c2ff01" />
      </svg>
    ),
    pixelRows: [
      [1,1,1,1,1,1,1,1],
      [1,0,0,0,0,0,0,1],
      [1,0,1,1,0,0,0,1],
      [1,0,0,1,1,0,0,1],
      [1,0,0,0,1,1,0,1],
      [1,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1],
      [0,0,1,1,1,1,0,0],
    ]
  },
  {
    id: 'tech-stack',
    label: 'TECH STACK',
    sublabel: 'TOOLS & TECHNOLOGIES',
    to: '/tech-stack',
    accentColor: '#0055ff',
    glowColor: 'rgba(0, 85, 255, 0.6)',
    borderColor: '#0055ff',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="4" width="40" height="40" rx="4" fill="#0055ff" />
        <path d="M14 18l-6 6 6 6" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 18l6 6-6 6" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 12l-8 24" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    pixelRows: [
      [0,0,0,1,1,0,0,0],
      [0,0,1,1,1,1,0,0],
      [0,1,1,0,0,1,1,0],
      [1,1,0,0,0,0,1,1],
      [1,1,0,0,0,0,1,1],
      [0,1,1,0,0,1,1,0],
      [0,0,1,1,1,1,0,0],
      [0,0,0,1,1,0,0,0],
    ]
  }
];

export default function ExploreCards() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation: cards fade in smoothly
      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15,
        }
      );

      // Pixel scanline flicker on each card icon
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const iconBox = card.querySelector('.explore-icon-box');
        if (!iconBox) return;

        // Subtle pulse glow loop
        gsap.to(iconBox, {
          boxShadow: `0 0 25px var(--card-glow), 0 0 50px var(--card-glow)`,
          repeat: -1,
          yoyo: true,
          duration: 1.4,
          ease: 'sine.inOut'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index) => {
    sound.playHover();
    const card = cardRefs.current[index];
    if (!card) return;
    gsap.to(card, { y: -8, scale: 1.03, duration: 0.35, ease: 'power2.out' });
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: 'power3.out' });
  };

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#000000] py-14 sm:py-20 px-4 sm:px-8 lg:px-14 overflow-hidden select-none"
      style={{ fontFamily: "'Silkscreen', monospace" }}
    >
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14 px-2">
        <p className="font-silkscreen text-[11px] sm:text-xs text-[#c2ff01]/70 tracking-[0.25em] sm:tracking-[0.3em] mb-2 sm:mb-3">
          · · · EXPLORE · · ·
        </p>
        <h2 className="font-silkscreen text-xl sm:text-3xl md:text-4xl font-bold text-[#fcfff7] tracking-wider sm:tracking-widest">
          SELECT YOUR DESTINATION
        </h2>
        <p className="font-silkscreen text-[10px] sm:text-xs text-white/40 tracking-wider sm:tracking-widest mt-2">
          CLICK A CARD TO NAVIGATE
        </p>
      </div>

      {/* 3 Arcade Cards (Certificates, Projects, Tech Stack) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <Link
            to={card.to}
            key={card.id}
            ref={el => (cardRefs.current[i] = el)}
            onClick={() => sound.playClick()}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            className="cursor-target block group relative rounded-2xl p-0 overflow-hidden"
            style={{
              '--card-accent': card.accentColor,
              '--card-glow': card.glowColor,
              background: '#050505',
              border: `2px solid ${card.borderColor}`,
              boxShadow: `0 0 20px ${card.glowColor}, inset 0 0 30px rgba(0,0,0,0.8)`,
            }}
          >
            {/* Corner dots (arcade machine aesthetic) */}
            <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.accentColor }} />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.accentColor }} />
            <span className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.accentColor }} />
            <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.accentColor }} />

            {/* Card inner content */}
            <div className="p-6 sm:p-8 flex flex-col items-center gap-5">

              {/* Label top */}
              <div className="text-center">
                <p className="font-silkscreen text-xs sm:text-sm font-bold tracking-[0.2em]" style={{ color: card.accentColor }}>
                  {card.sublabel}
                </p>
              </div>

              {/* Icon box */}
              <div
                className="explore-icon-box relative rounded-xl overflow-hidden flex items-center justify-center"
                style={{
                  width: '130px',
                  height: '100px',
                  backgroundColor: `${card.accentColor}18`,
                  border: `2px solid ${card.accentColor}`,
                  '--card-glow': card.glowColor,
                }}
              >
                {/* Pixel grid rows overlay */}
                <div className="absolute inset-0 grid gap-[1px] p-2 opacity-30" style={{ gridTemplateRows: 'repeat(8, 1fr)' }}>
                  {card.pixelRows.map((row, ri) => (
                    <div key={ri} className="flex gap-[1px] justify-center">
                      {row.map((cell, ci) => (
                        <div
                          key={ci}
                          className="flex-1 rounded-[1px]"
                          style={{ backgroundColor: cell ? card.accentColor : 'transparent', maxWidth: '14px' }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                {/* SVG Icon */}
                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16">
                  {card.icon}
                </div>
              </div>

              {/* Title label */}
              <div className="text-center">
                <h3
                  className="font-silkscreen text-lg sm:text-xl md:text-2xl font-bold tracking-wider leading-tight"
                  style={{ color: card.accentColor, textShadow: `0 0 20px ${card.accentColor}` }}
                >
                  {card.label}
                </h3>
              </div>

              {/* Visit button */}
              <div
                className="font-silkscreen text-[10px] sm:text-xs font-bold px-4 py-2 rounded-lg tracking-widest transition-all group-hover:scale-105"
                style={{
                  backgroundColor: card.accentColor,
                  color: card.id === 'projects' ? '#0a0a0a' : '#fcfff7',
                  boxShadow: `0 0 12px ${card.glowColor}`
                }}
              >
                ENTER →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom scanline decoration */}
      <div className="mt-16 text-center">
        <p className="font-silkscreen text-[10px] text-white/20 tracking-[0.4em]">
          © 2026 · CHARLIE22-DEV · PORTFOLIO SYSTEM
        </p>
      </div>
    </section>
  );
}
