import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import './Shuffle.css';

const DEFAULT_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

const Shuffle = ({
  text = '',
  className = '',
  style = {},
  shuffleDirection = 'right',
  duration = 0.35,
  maxDelay = 0,
  ease = 'power3.out',
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'h1',
  textAlign = 'left',
  onShuffleComplete,
  shuffleTimes = 2,
  animationMode = 'evenodd',
  loop = false,
  loopDelay = 0,
  stagger = 0.04,
  scrambleCharset = DEFAULT_CHARSET,
  colorFrom,
  colorTo,
  triggerOnce = true,
  respectReducedMotion = true,
  triggerOnHover = true
}) => {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const isPlayingRef = useRef(false);
  const stripsRef = useRef([]);

  const chars = useMemo(() => text.split(''), [text]);

  const generateShuffledChars = useCallback((char, count) => {
    const pool = scrambleCharset || DEFAULT_CHARSET;
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(pool.charAt(Math.floor(Math.random() * pool.length)));
    }
    return result;
  }, [scrambleCharset]);

  const playAnimation = useCallback(() => {
    if (!stripsRef.current.length) return;
    isPlayingRef.current = true;

    const strips = stripsRef.current.filter(Boolean);
    const isVertical = shuffleDirection === 'up' || shuffleDirection === 'down';

    // Reset initial positions
    strips.forEach((strip) => {
      if (!strip) return;
      const startX = strip.getAttribute('data-start-x') || '0';
      const startY = strip.getAttribute('data-start-y') || '0';
      gsap.set(strip, {
        x: parseFloat(startX),
        y: parseFloat(startY),
        color: colorFrom || 'inherit'
      });
    });

    const tl = gsap.timeline({
      repeat: loop ? -1 : 0,
      repeatDelay: loop ? loopDelay : 0,
      onComplete: () => {
        isPlayingRef.current = false;
        if (colorTo) gsap.set(strips, { color: colorTo });
        onShuffleComplete?.();
      }
    });

    if (animationMode === 'evenodd') {
      const odd = strips.filter((_, i) => i % 2 === 1);
      const even = strips.filter((_, i) => i % 2 === 0);

      const addStaggerTween = (targets, offset) => {
        tl.to(
          targets,
          {
            x: (i, target) => parseFloat(target.getAttribute('data-final-x') || '0'),
            y: (i, target) => parseFloat(target.getAttribute('data-final-y') || '0'),
            color: colorTo || 'inherit',
            duration,
            ease,
            stagger,
            force3D: true
          },
          offset
        );
      };

      addStaggerTween(odd, 0);
      addStaggerTween(even, duration * 0.3);
    } else {
      strips.forEach((strip) => {
        const delay = Math.random() * maxDelay;
        tl.to(
          strip,
          {
            x: parseFloat(strip.getAttribute('data-final-x') || '0'),
            y: parseFloat(strip.getAttribute('data-final-y') || '0'),
            color: colorTo || 'inherit',
            duration,
            ease,
            force3D: true
          },
          delay
        );
      });
    }
  }, [
    shuffleDirection,
    duration,
    ease,
    loop,
    loopDelay,
    stagger,
    animationMode,
    maxDelay,
    colorFrom,
    colorTo,
    onShuffleComplete
  ]);

  useEffect(() => {
    if (!containerRef.current) return;
    if (respectReducedMotion && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReady(true);
      return;
    }

    setReady(true);
    playAnimation();
  }, [text, playAnimation, respectReducedMotion]);

  const handleMouseEnter = () => {
    if (!triggerOnHover || isPlayingRef.current) return;
    playAnimation();
  };

  const Tag = tag || 'h1';

  return (
    <Tag
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`shuffle-parent ${ready ? 'is-ready' : ''} ${className}`.trim()}
      style={{ textAlign, cursor: triggerOnHover ? 'pointer' : 'default', ...style }}
    >
      {chars.map((ch, idx) => {
        if (ch === ' ') {
          return <span key={idx} className="inline-block w-[0.35em]">&nbsp;</span>;
        }

        const interim = generateShuffledChars(ch, shuffleTimes);
        const allItems = shuffleDirection === 'right' || shuffleDirection === 'down'
          ? [ch, ...interim, ch]
          : [...interim, ch];

        const steps = allItems.length - 1;
        let startX = 0;
        let finalX = 0;
        let startY = 0;
        let finalY = 0;

        if (shuffleDirection === 'right') {
          startX = -steps * 100;
          finalX = 0;
        } else if (shuffleDirection === 'left') {
          startX = 0;
          finalX = -steps * 100;
        } else if (shuffleDirection === 'down') {
          startY = -steps * 100;
          finalY = 0;
        } else if (shuffleDirection === 'up') {
          startY = 0;
          finalY = -steps * 100;
        }

        return (
          <span
            key={idx}
            className="shuffle-char-wrapper inline-block overflow-hidden align-bottom"
          >
            <span
              ref={(el) => (stripsRef.current[idx] = el)}
              data-start-x={`${startX}%`}
              data-final-x={`${finalX}%`}
              data-start-y={`${startY}%`}
              data-final-y={`${finalY}%`}
              className={`inline-flex ${
                shuffleDirection === 'up' || shuffleDirection === 'down' ? 'flex-col' : 'flex-row'
              }`}
              style={{
                transform: `translate(${startX}%, ${startY}%)`,
                willChange: 'transform'
              }}
            >
              {allItems.map((glyph, gIdx) => (
                <span
                  key={gIdx}
                  className="shuffle-char inline-block text-center select-none"
                >
                  {glyph}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </Tag>
  );
};

export default Shuffle;
