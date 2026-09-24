"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const VIDEOS = [
  "/assets/compressed/Natalie v.2.mp4",
  "/assets/compressed/Red PAddle.mp4",
  "/assets/compressed/3 Mixed Doubles Mistakes Most Players Make Web (1).mp4",
  "/assets/compressed/Aislinn Phelan v.3.mp4",
  "/assets/compressed/Chantal v.1.mp4",
  "/assets/compressed/video01.mp4",
  "/assets/compressed/video03.mp4",
];

// 7 videos duplicated once = 14 items per row for a perfectly seamless 50% translation loop
// Total: 28 video elements (down from 112!), saving 75% GPU decoding bandwidth for rock-solid 60 FPS
const ROW_1 = [...VIDEOS, ...VIDEOS];
const ROW_2 = [...VIDEOS.slice().reverse(), ...VIDEOS.slice().reverse()];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const strip1Ref = useRef<HTMLDivElement>(null);
  const strip2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Control animation and pause actual video decoders when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        const playState = isVisible ? "running" : "paused";

        if (strip1Ref.current) strip1Ref.current.style.animationPlayState = playState;
        if (strip2Ref.current) strip2Ref.current.style.animationPlayState = playState;

        const videos = section.querySelectorAll<HTMLVideoElement>("video");
        videos.forEach((video) => {
          if (isVisible) {
            if (video.paused) video.play().catch(() => {});
          } else {
            if (!video.paused) video.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .hero-marquee-row {
          display: flex;
          gap: 16px;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="home"
        className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 sm:py-28 select-none"
      >
        {/* ── Cinematic Marquee Background ── */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden opacity-45"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center gap-4 sm:gap-6">
            {/* Row 1 → scrolls left */}
            <div className="overflow-hidden">
              <div
                ref={strip1Ref}
                className="hero-marquee-row"
                style={{
                  animation: "marquee-left 38s linear infinite",
                }}
              >
                {ROW_1.map((src, i) => (
                  <VideoCard key={`r1-${i}`} src={src} />
                ))}
              </div>
            </div>

            {/* Row 2 → scrolls right */}
            <div className="overflow-hidden">
              <div
                ref={strip2Ref}
                className="hero-marquee-row"
                style={{
                  animation: "marquee-right 46s linear infinite",
                }}
              >
                {ROW_2.map((src, i) => (
                  <VideoCard key={`r2-${i}`} src={src} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── GPU-Friendly Lighting Overlays (Zero-blur radial gradients) ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(204,255,0,0.12) 0%, rgba(204,255,0,0) 65%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.85) 100%)",
          }}
        />

        {/* ── Hero Foreground Content ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8">

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.92] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]"
          >
            Social Media &amp;{" "}
            <span className="text-[#CCFF00] drop-shadow-[0_0_35px_rgba(204,255,0,0.4)]">
              Content Agency
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-mono text-xs sm:text-base md:text-lg text-zinc-200 max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            We help creators, businesses, and brands produce, manage, and scale high-impact content across social media.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-9 sm:px-11 py-4 sm:py-4.5 rounded-full bg-[#CCFF00] text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-[0_0_35px_rgba(204,255,0,0.35)] hover:shadow-[0_0_55px_rgba(204,255,0,0.65)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#our-work"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:py-4.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 font-mono text-xs sm:text-sm uppercase tracking-[0.16em] transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>EXPLORE WORK</span>
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
      className="relative flex-shrink-0 w-[140px] sm:w-[170px] md:w-[190px] aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.1] shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
      style={{
        contain: "strict",
      }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        className="w-full h-full object-cover"
      />
      {/* Subtle glass rim highlight */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
    </div>
  );
}