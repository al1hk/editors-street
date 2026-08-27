"use client";

import React, { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
  size: number;
  alpha: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Spawn glowing trail particles along mouse movement path
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        size: isHovered ? 6 : 4,
        alpha: 0.9,
      });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest(
        "a, button, [role='button'], input, textarea, select, .glitch-btn-master, .nav-glitch-link"
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // 60fps Continuous Trail Render Loop
    const renderTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        pt.age += 1;
        pt.alpha *= 0.90; // Smooth decay
        pt.size *= 0.96;

        if (pt.alpha > 0.02) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, Math.max(pt.size, 1), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(204, 255, 0, ${pt.alpha})`;
          ctx.shadowColor = "#CCFF00";
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.restore();
        }
      }

      // Continuous luminous lime ribbon between recent points
      if (points.length > 2) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          const xc = (points[i].x + points[i - 1].x) / 2;
          const yc = (points[i].y + points[i - 1].y) / 2;
          ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
        }
        ctx.strokeStyle = "rgba(204, 255, 0, 0.35)";
        ctx.lineWidth = isHovered ? 3.5 : 2;
        ctx.shadowColor = "#CCFF00";
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.restore();
      }

      pointsRef.current = points.filter((pt) => pt.alpha > 0.02 && pt.age < 35);
      requestRef.current = requestAnimationFrame(renderTrail);
    };

    requestRef.current = requestAnimationFrame(renderTrail);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  return (
    <>
      {/* Trailing Canvas Particles Layer */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[99998] overflow-hidden select-none"
      />

      {/* Main Cursor Head Layer */}
      {isVisible && (
        <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
          {/* Dynamic Outer Cyber Tracking Halo */}
          <div
            className="fixed top-0 left-0 rounded-full border-2 border-[#CCFF00] pointer-events-none transition-transform duration-100 ease-out"
            style={{
              transform: `translate3d(${position.x - (isHovered ? 26 : 18)}px, ${
                position.y - (isHovered ? 26 : 18)
              }px, 0) scale(${isHovered ? 1.4 : 1})`,
              width: isHovered ? "52px" : "36px",
              height: isHovered ? "52px" : "36px",
              backgroundColor: isHovered ? "rgba(204, 255, 0, 0.22)" : "rgba(204, 255, 0, 0.06)",
              boxShadow: isHovered
                ? "0 0 25px rgba(204, 255, 0, 0.9), inset 0 0 10px rgba(204, 255, 0, 0.5)"
                : "0 0 12px rgba(204, 255, 0, 0.5)",
            }}
          />

          {/* Precision Center Neon Lime Dot */}
          <div
            className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#CCFF00] pointer-events-none shadow-[0_0_15px_#CCFF00]"
            style={{
              transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0)`,
            }}
          />
        </div>
      )}
    </>
  );
}
