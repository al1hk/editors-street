"use client";

import React, { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  age: number;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const isHovered = useRef(false);
  const isMouseDown = useRef(false);
  const isVisible = useRef(false);
  const trail = useRef<TrailPoint[]>([]);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!canvas || !dot || !ring) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
      }

      // Add to trail
      trail.current.push({ x: e.clientX, y: e.clientY, age: 1.0 });

      // Fast precise snap for the center dot
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(${
        isMouseDown.current ? 0.7 : isHovered.current ? 1.5 : 1
      })`;
    };

    const onMouseDown = () => {
      isMouseDown.current = true;
      if (ring) {
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${
          ringPos.current.y
        }px, 0) scale(${isHovered.current ? 1.5 : 0.8})`;
      }
    };

    const onMouseUp = () => {
      isMouseDown.current = false;
      if (ring) {
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${
          ringPos.current.y
        }px, 0) scale(${isHovered.current ? 2.0 : 1})`;
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer, [data-interactive]"
      );

      const hovered = !!interactive;
      if (hovered !== isHovered.current) {
        isHovered.current = hovered;
        if (ring) {
          if (hovered) {
            ring.style.borderColor = "#CCFF00";
            ring.style.backgroundColor = "transparent";
            ring.style.boxShadow = "0 0 15px rgba(204, 255, 0, 0.4)";
          } else {
            ring.style.borderColor = "rgba(204, 255, 0, 0.45)";
            ring.style.backgroundColor = "transparent";
            ring.style.boxShadow = "none";
          }
        }
      }
    };

    // Smooth animation loop: draw glowing trailing line + update ring lerp
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Glowing Trail Line
      if (trail.current.length > 1) {
        for (let i = 0; i < trail.current.length - 1; i++) {
          const p1 = trail.current[i];
          const p2 = trail.current[i + 1];

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(204, 255, 0, ${p1.age * 0.65})`;
          ctx.lineWidth = Math.max(1, p1.age * 3.5);
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.shadowColor = "#CCFF00";
          ctx.shadowBlur = p1.age * 12;
          ctx.stroke();
        }
      }

      // Age points and remove dead ones
      for (let i = 0; i < trail.current.length; i++) {
        trail.current[i].age -= 0.045; // Decay rate
      }
      trail.current = trail.current.filter((p) => p.age > 0);

      // Lerp ring position smoothly
      const ease = isHovered.current ? 0.24 : 0.18;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * ease;

      const scale = isMouseDown.current
        ? isHovered.current
          ? 1.5
          : 0.8
        : isHovered.current
        ? 2.0
        : 1;

      ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${scale})`;

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* High-performance glowing trail canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[999990] select-none hidden md:block"
      />

      {/* Smooth Trailing Halo Ring (no blur backdrop) */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 -ml-5 -mt-5 w-10 h-10 rounded-full border border-[#CCFF00]/45 z-[999995] opacity-0 select-none hidden md:block"
        style={{
          willChange: "transform",
          transform: "translate3d(-200px, -200px, 0)",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      />

      {/* High-Precision Center Neon Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00] z-[999999] opacity-0 select-none hidden md:block"
        style={{
          willChange: "transform",
          transform: "translate3d(-200px, -200px, 0)",
          transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </>
  );
}
