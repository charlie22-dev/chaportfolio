import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import "./FallingText.css";

const FallingText = ({
  className = "",
  text = "",
  highlightWords = [],
  highlightClass = "highlighted",
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = "1rem",
  onWordClick = null,
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const [effectStarted, setEffectStarted] = useState(false);

  // 1) Build word-span HTML
  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(" ");
    textRef.current.innerHTML = words
      .map(word => {
        const isHighlighted = highlightWords.includes(word);
        return `<span class="word ${isHighlighted ? highlightClass : ""}" data-word="${word}">${word}</span>`;
      })
      .join(" ");
  }, [text, highlightWords, highlightClass]);

  // 2) Per-word click handlers (pre-fall only)
  useEffect(() => {
    if (!textRef.current || effectStarted || !onWordClick) return;
    const spans = textRef.current.querySelectorAll(".word");
    const handlers = [];
    spans.forEach(span => {
      const fn = (e) => {
        e.stopPropagation();
        onWordClick(span.getAttribute("data-word"));
      };
      span.addEventListener("click", fn);
      handlers.push([span, fn]);
    });
    return () => handlers.forEach(([s, f]) => s.removeEventListener("click", f));
  }, [text, effectStarted, onWordClick]);

  // 3) Auto / scroll trigger
  useEffect(() => {
    if (trigger === "auto") { setEffectStarted(true); return; }
    if (trigger === "scroll" && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setEffectStarted(true); observer.disconnect(); } },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  // 4) Matter.js physics
  useEffect(() => {
    if (!effectStarted) return;
    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;
    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: { width, height, background: backgroundColor, wireframes },
    });

    const bOpts = { isStatic: true, render: { fillStyle: "transparent" } };
    const floor   = Bodies.rectangle(width / 2, height + 25, width, 50, bOpts);
    const leftW   = Bodies.rectangle(-25, height / 2, 50, height, bOpts);
    const rightW  = Bodies.rectangle(width + 25, height / 2, 50, height, bOpts);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, bOpts);

    const wordSpans = textRef.current.querySelectorAll(".word");
    const wordBodies = [...wordSpans].map(elem => {
      const rect = elem.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;
      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: "transparent" },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2,
      });
      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 5, y: 0 });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
      return { elem, body };
    });

    wordBodies.forEach(({ elem }) => { elem.style.position = "absolute"; });

    const mouse = Mouse.create(containerRef.current);
    const mc = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: mouseConstraintStiffness, render: { visible: false } },
    });
    render.mouse = mouse;

    World.add(engine.world, [floor, leftW, rightW, ceiling, mc, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    let animId;
    const loop = () => {
      wordBodies.forEach(({ body, elem }) => {
        elem.style.left = `${body.position.x}px`;
        elem.style.top  = `${body.position.y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === "click" || trigger === "hover")) setEffectStarted(true);
  };

  return (
    <div
      ref={containerRef}
      className={`falling-text-container ${className}`}
      onClick={trigger === "click" ? handleTrigger : undefined}
      onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div ref={textRef} className="falling-text-target" style={{ fontSize, lineHeight: 1.7 }} />
      <div ref={canvasContainerRef} className="falling-text-canvas" />
    </div>
  );
};

export default FallingText;
