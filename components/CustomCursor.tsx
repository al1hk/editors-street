"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const cursor = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursorContainer = cursorRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!cursorContainer || !ring || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        cursorContainer.style.opacity = "1";
        // Initialize position directly on first movement to avoid snap
        cursor.current.x = e.clientX;
        cursor.current.y = e.clientY;
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (cursorContainer) cursorContainer.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      if (cursorContainer) cursorContainer.style.opacity = "1";
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, .glitch-btn-master, .nav-glitch-link, .cursor-pointer, [data-interactive]"
      );
      
      const hovered = !!interactive;
      if (hovered !== isHovered.current) {
        isHovered.current = hovered;
        if (ring && dot) {
          if (hovered) {
            ring.style.transform = "scale(1.7)";
            ring.style.backgroundColor = "rgba(204, 255, 0, 0.15)";
            ring.style.borderColor = "#CCFF00";
            ring.style.boxShadow = "0 0 20px rgba(204, 255, 0, 0.45)";
            dot.style.transform = "scale(0.5)";
          } else {
            ring.style.transform = "scale(1)";
            ring.style.backgroundColor = "rgba(204, 255, 0, 0.04)";
            ring.style.borderColor = "rgba(204, 255, 0, 0.85)";
            ring.style.boxShadow = "0 0 10px rgba(204, 255, 0, 0.25)";
            dot.style.transform = "scale(1)";
          }
        }
      }
    };

    // Fast 144Hz interpolation loop for buttery-smooth tracking
    const updateCursor = () => {
      // 0.35 lerp speed gives immediate responsiveness while staying silky smooth
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.35;
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.35;

      if (cursorContainer) {
        cursorContainer.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    rafId.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[999999] opacity-0 select-none"
      style={{
        willChange: "transform",
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      {/* Outer Halo Ring (Centered at 0,0) */}
      <div
        ref={ringRef}
        className="absolute -top-4 -left-4 w-8 h-8 rounded-full border border-[#CCFF00]/85 bg-[#CCFF00]/[0.04] pointer-events-none"
        style={{
          boxShadow: "0 0 10px rgba(204, 255, 0, 0.25)",
          transition: "transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease",
          willChange: "transform",
        }}
      />

      {/* Center Dot (Centered at 0,0) */}
      <div
        ref={dotRef}
        className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#CCFF00] pointer-events-none shadow-[0_0_8px_#CCFF00]"
        style={{
          transition: "transform 0.15s ease",
          willChange: "transform",
        }}
      />
    </div>
  );
}
