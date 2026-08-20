import React, { useEffect, useRef } from 'react';

export default function TextLoopDivider({ text = 'EXPERIENCE ✦ CHARLIE MER ✦ SOFTWARE DEV ✦ ' }) {
  const pathRef = useRef(null);
  const measureRef = useRef(null);
  const headRef = useRef(null);
  const tailRef = useRef(null);

  useEffect(() => {
    const pathEl = pathRef.current;
    const measureEl = measureRef.current;
    const headEl = headRef.current;
    const tailEl = tailRef.current;
    if (!pathEl || !measureEl || !headEl || !tailEl) return;

    let length = 0;
    try {
      length = pathEl.getTotalLength();
    } catch {
      length = 2000;
    }

    let unitWidth = 200;
    try {
      unitWidth = measureEl.getComputedTextLength() || 200;
    } catch {
      unitWidth = 200;
    }

    const reps = Math.max(2, Math.ceil(length / unitWidth) + 1);
    const loopText = text.repeat(reps);

    headEl.textContent = loopText;
    tailEl.textContent = loopText;

    const apply = (offset) => {
      const partner = offset >= 0 ? offset - length : offset + length;
      headEl.setAttribute('startOffset', String(offset));
      tailEl.setAttribute('startOffset', String(partner));
    };

    apply(0);

    const speed = 70;
    let offset = 0;
    let lastTime = null;
    let animId;

    const step = (t) => {
      if (lastTime === null) lastTime = t;
      const dt = (t - lastTime) / 1000;
      lastTime = t;
      offset += speed * dt;
      if (offset >= length) offset -= length;
      apply(offset);
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      if (animId) {
        cancelAnimationFrame(animId);
      }
    };
  }, [text]);

  return (
    <div className="w-full h-[140px] sm:h-[180px] md:h-[210px] overflow-hidden select-none bg-[#0a0a0a] relative z-10">
      <svg
        viewBox="0 0 1200 520"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Experience divider"
        className="w-full h-full block"
      >
        {/* Ribbon Loop Path - Thick White Ribbon */}
        <path
          ref={pathRef}
          id="loopPath"
          d="M-320,260 Q-160,62 0,260 T320,260 T640,260 T960,260 T1280,260 T1520,260"
          fill="none"
          stroke="#ffffff"
          strokeWidth="84"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Hidden measurement text */}
        <text
          ref={measureRef}
          className="font-silkscreen font-bold"
          style={{ fontSize: '38px', letterSpacing: '3px', visibility: 'hidden', pointerEvents: 'none' }}
        >
          {text}
        </text>

        {/* Crisp, high-contrast text inside the white ribbon loop */}
        <text
          className="font-silkscreen font-bold uppercase select-none"
          style={{
            fontSize: '36px',
            letterSpacing: '3px',
            fill: '#0044ff',
            fontWeight: 800,
          }}
          dominantBaseline="central"
        >
          <textPath ref={headRef} href="#loopPath" startOffset="0" />
        </text>

        <text
          className="font-silkscreen font-bold uppercase select-none"
          style={{
            fontSize: '36px',
            letterSpacing: '3px',
            fill: '#0044ff',
            fontWeight: 800,
          }}
          dominantBaseline="central"
        >
          <textPath ref={tailRef} href="#loopPath" startOffset="0" />
        </text>
      </svg>
    </div>
  );
}
