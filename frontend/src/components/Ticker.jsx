import React from 'react';

export default function Ticker({
  text = 'ABOUT THE DEVELOPER →',
  items,
  bgColor = '#c2ff01',
  textColor = '#0a0a0a',
  borderColor = '#0a0a0a',
  speedClass = 'animate-ticker',
  className = '',
}) {
  const baseItems = items || [text, text, text, text, text, text];
  const repeatedItems = [...baseItems, ...baseItems, ...baseItems];

  return (
    <div
      className={`w-full font-silkscreen font-bold text-lg sm:text-2xl md:text-3xl py-4 sm:py-5 overflow-hidden whitespace-nowrap select-none border-y-3 sm:border-y-4 z-20 shadow-md ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
      }}
    >
      <div className={`${speedClass} flex items-center`}>
        {repeatedItems.map((item, idx) => (
          <span
            key={idx}
            className="mx-6 sm:mx-8 tracking-widest hover:opacity-85 transition-opacity flex items-center gap-3"
          >
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
