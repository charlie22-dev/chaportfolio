import React, { useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import PixelTransition from './PixelTransition';
import GradualBlur from './GradualBlur';

export default function IdCard() {
  const cardRef = useRef(null);
  const [shineStyle, setShineStyle] = useState({ opacity: 0 });
  const [cardTransform, setCardTransform] = useState({
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)',
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    setCardTransform({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    });
    setShineStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,69,2,0.15), rgba(194,255,1,0.1), transparent 70%)`,
    });
  };

  const handleMouseLeave = () => {
    setCardTransform({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)' });
    setShineStyle({ opacity: 0 });
  };

  return (
    <div className="w-full">
      <div
        ref={cardRef}
        className="relative w-full bg-[#fcfff7] text-[#111] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border-3 sm:border-4 border-[#0a0a0a] select-none cursor-pointer overflow-hidden transition-transform duration-200"
        style={{
          transformStyle: 'preserve-3d',
          ...cardTransform,
          backgroundImage: `radial-gradient(#d1d5db 1px, transparent 1px), radial-gradient(#d1d5db 1px, #fcfff7 1px)`,
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0, 8px 8px',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[repeating-linear-gradient(45deg,#000_0,#000_2px,transparent_0,transparent_8px)]" />

        <div className="relative z-10 flex flex-col sm:flex-row gap-5 items-stretch">

          {/* LEFT: Photo — responsive width/height */}
          <div className="w-full max-w-[240px] sm:w-[200px] mx-auto sm:mx-0 shrink-0">
            <div
              className="relative rounded-2xl overflow-hidden border-2 border-[#111] bg-[#0a0a0a] shadow-md h-[220px] sm:h-[260px]"
            >
              <PixelTransition
                firstContent={
                  <img
                    src={personalInfo.avatar1}
                    alt={personalInfo.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                }
                secondContent={
                  <img
                    src={personalInfo.avatar2}
                    alt={`${personalInfo.name} alternate`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                }
                gridSize={10}
                pixelColor="#c2ff01"
                animationStepDuration={0.35}
                aspectRatio="0%"
                className="absolute inset-0 w-full h-full"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              />

              <GradualBlur
                position="bottom"
                height="3rem"
                strength={2}
                divCount={4}
                curve="bezier"
                hoverIntensity={1.5}
                opacity={0.85}
              />

              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none z-20">
                <span className="bg-[#0a0a0a]/90 text-[#c2ff01] font-silkscreen text-[8px] font-bold px-1.5 py-0.5 rounded border border-[#c2ff01]/40">
                  PIXEL
                </span>
                <span className="bg-[#ff4502] text-[#fcfff7] font-silkscreen text-[8px] font-bold px-1.5 py-0.5 rounded">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Info */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-3 text-center sm:text-left">
                <h2
                  className="font-silkscreen text-2xl xs:text-3xl sm:text-4xl font-black text-[#ff4502] tracking-tight leading-none"
                  style={{ textShadow: '3px 3px 0px #0a0a0a' }}
                >
                  DEVELOPER
                </h2>
                <p className="font-silkscreen text-[10px] sm:text-[11px] tracking-[4px] sm:tracking-[6px] text-[#333] font-bold mt-1.5">
                  L I C E N S E
                </p>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2.5 sm:gap-y-3 pt-3 border-t-2 border-[#111]/10 font-mono text-left">
                <div>
                  <label className="block text-[8px] sm:text-[9px] font-bold text-[#555] tracking-widest uppercase">Name</label>
                  <span className="block text-[11px] sm:text-xs font-bold text-[#111] truncate">LIBATOD, CHARLIE</span>
                </div>
                <div>
                  <label className="block text-[8px] sm:text-[9px] font-bold text-[#555] tracking-widest uppercase">Pronouns</label>
                  <span className="block text-[11px] sm:text-xs font-bold text-[#111]">HE / HIM</span>
                </div>
                <div>
                  <label className="block text-[8px] sm:text-[9px] font-bold text-[#555] tracking-widest uppercase">Date of Birth</label>
                  <span className="block text-[11px] sm:text-xs font-bold text-[#111]">2004-10-22</span>
                </div>
                <div>
                  <label className="block text-[8px] sm:text-[9px] font-bold text-[#555] tracking-widest uppercase">Position</label>
                  <span className="block text-[11px] sm:text-xs font-bold text-[#111]">FULL-STACK DEV</span>
                </div>
                <div className="col-span-2 flex items-center gap-2 pt-1">
                  <span className="text-[8px] sm:text-[9px] font-bold text-[#555] tracking-widest">SEX:</span>
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <span className="w-5 h-5 rounded-full bg-[#ff4502] text-[#fcfff7] flex items-center justify-center text-[10px] font-bold">M</span>
                    <span className="text-[#777]">/ F / OTHER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer: Barcode + Branding + Mini Photo */}
            <div className="flex items-end justify-between pt-3 mt-2 border-t-2 border-[#111]/10 gap-2">
              <div className="flex flex-col items-start">
                <div className="flex items-end gap-[1.5px] h-6 sm:h-7">
                  {[3,1,2,4,1,3,2,1,4,2,1,3,2,4,1,2,3,1,2].map((w, i) => (
                    <div key={i} className="bg-[#111] h-full" style={{ width: `${w}px` }} />
                  ))}
                </div>
                <span className="font-silkscreen text-[7px] text-[#444] tracking-[1.5px] sm:tracking-[2px] mt-0.5">D O P A . C M L</span>
              </div>

              <div className="flex items-center gap-1 font-silkscreen text-[8px] sm:text-[9px] font-bold text-[#111]">
                <span className="text-[#ff4502] text-xs sm:text-sm">✦</span>
                <span>CHARLIE.LAB</span>
              </div>

              <div className="w-8 h-10 sm:w-9 sm:h-11 rounded border-2 border-[#111] overflow-hidden shrink-0 bg-[#ddd]">
                <img
                  src={personalInfo.avatar2 || personalInfo.avatar1}
                  alt="Mini ID"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-200 z-30"
          style={shineStyle}
        />
      </div>
    </div>
  );
}
