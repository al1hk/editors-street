"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const VIDEOS = [
  "/assets/comp/Natalie v.2.mp4",
  "/assets/comp/Red PAddle.mp4",
  "/assets/comp/3 Mixed Doubles Mistakes Most Players Make Web (1).mp4",
];

// 12-card base, doubled → 24 total per row for a seamless -50% translate loop
const BASE = [...VIDEOS, ...VIDEOS, ...VIDEOS, ...VIDEOS];
const ROW_1 = [...BASE, ...BASE];
const ROW_2 = [...BASE].reverse().concat([...BASE].reverse());

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // Direct refs to the moving strips — no React state, no re-renders
  const strip1Ref = useRef<HTMLDivElement>(null);
  const strip2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const setPlayState = (state: "running" | "paused") => {
      [strip1Ref, strip2Ref].forEach(({ current: el }) => {
        if (el) el.style.animationPlayState = state;
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => setPlayState(entry.isIntersecting ? "running" : "paused"),
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes ticker-left {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes ticker-right {
          from { transform: translate3d(-50%, 0, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="home"
        className="relative min-h-[85vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-black py-16 sm:py-24 select-none"
      >
        {/* ── Marquee Background ── */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden opacity-50"
          style={{ isolation: "isolate", contain: "layout style paint" }}
        >
          <div
            className="absolute inset-0 flex flex-col justify-center gap-5"
            style={{ transform: "rotate(-4deg) scale(1.1)" }}
          >
            {/* Row 1 → scrolls left */}
            <div className="overflow-hidden" style={{ contain: "layout" }}>
              <div
                ref={strip1Ref}
                className="flex gap-3 w-max"
                style={{
                  animation: "ticker-left 42s linear infinite",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                {ROW_1.map((src, i) => (
                  <VideoCard key={`r1-${i}`} src={src} />
                ))}
              </div>
            </div>

            {/* Row 2 → scrolls right */}
            <div className="overflow-hidden" style={{ contain: "layout" }}>
              <div
                ref={strip2Ref}
                className="flex gap-3 w-max"
                style={{
                  animation: "ticker-right 52s linear infinite",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                {ROW_2.map((src, i) => (
                  <VideoCard key={`r2-${i}`} src={src} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/55 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#CCFF00]/[0.06] blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-7">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.92] text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.95)]"
          >
            Social Media &amp;{" "}
            <span className="text-[#CCFF00] drop-shadow-[0_0_30px_rgba(204,255,0,0.35)]">
              Content Agency
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs sm:text-base md:text-lg text-zinc-200 max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            We help creators, businesses, and brands create, manage, and grow their content across social media.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-9 sm:px-12 py-4 sm:py-5 rounded-full bg-[#CCFF00] text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-[0_0_35px_rgba(204,255,0,0.3)] hover:shadow-[0_0_55px_rgba(204,255,0,0.55)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}

function VideoCard({ src }: { src: string }) {
  return (
    <div
      className="relative flex-shrink-0 w-[130px] sm:w-[150px] md:w-[160px] aspect-[9/16] rounded-xl overflow-hidden bg-zinc-950 border border-white/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.7)]"
      style={{ contain: "layout style paint" }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        disablePictureInPicture
        className="w-full h-full object-cover"
        style={{ transform: "translate3d(0,0,0)" }}
      />
    </div>
  );
}