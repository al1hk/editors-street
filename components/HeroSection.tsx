"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const ROW_1_TILES = [
  { img: "/assets/hero/clip1.jpg", title: "Cyber Drift // 8K", tag: "COMMERCIAL" },
  { img: "/assets/hero/clip2.jpg", title: "Eclipse Music Video", tag: "MUSIC VIDEO" },
  { img: "/assets/hero/clip3.jpg", title: "Vhronos Fashion Cut", tag: "FASHION" },
  { img: "/assets/hero/clip4.jpg", title: "Neon Chronicles Suite", tag: "COLOR GRADE" },
  { img: "/assets/hero/clip1.jpg", title: "Cyber Drift // 8K", tag: "COMMERCIAL" },
  { img: "/assets/hero/clip2.jpg", title: "Eclipse Music Video", tag: "MUSIC VIDEO" },
  { img: "/assets/hero/clip3.jpg", title: "Vhronos Fashion Cut", tag: "FASHION" },
  { img: "/assets/hero/clip4.jpg", title: "Neon Chronicles Suite", tag: "COLOR GRADE" },
];

const ROW_2_TILES = [
  { img: "/assets/hero/clip3.jpg", title: "Vhronos Fashion Cut", tag: "BRAND FILM" },
  { img: "/assets/hero/clip4.jpg", title: "Neon Chronicles Suite", tag: "COLOR SUITE" },
  { img: "/assets/hero/clip1.jpg", title: "Cyber Drift // 8K", tag: "SPEED RAMP" },
  { img: "/assets/hero/clip2.jpg", title: "Eclipse Music Video", tag: "VFX MOTION" },
  { img: "/assets/hero/clip3.jpg", title: "Vhronos Fashion Cut", tag: "BRAND FILM" },
  { img: "/assets/hero/clip4.jpg", title: "Neon Chronicles Suite", tag: "COLOR SUITE" },
  { img: "/assets/hero/clip1.jpg", title: "Cyber Drift // 8K", tag: "SPEED RAMP" },
  { img: "/assets/hero/clip2.jpg", title: "Eclipse Music Video", tag: "VFX MOTION" },
];

const ROW_3_TILES = [
  { img: "/assets/hero/clip2.jpg", title: "Eclipse Music Video", tag: "REEL MASTER" },
  { img: "/assets/hero/clip1.jpg", title: "Cyber Drift // 8K", tag: "RAW TIMELINE" },
  { img: "/assets/hero/clip4.jpg", title: "Neon Chronicles Suite", tag: "DOLBY MIX" },
  { img: "/assets/hero/clip3.jpg", title: "Vhronos Fashion Cut", tag: "SHORTS MASTER" },
  { img: "/assets/hero/clip2.jpg", title: "Eclipse Music Video", tag: "REEL MASTER" },
  { img: "/assets/hero/clip1.jpg", title: "Cyber Drift // 8K", tag: "RAW TIMELINE" },
  { img: "/assets/hero/clip4.jpg", title: "Neon Chronicles Suite", tag: "DOLBY MIX" },
  { img: "/assets/hero/clip3.jpg", title: "Vhronos Fashion Cut", tag: "SHORTS MASTER" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-16 sm:py-24 select-none"
    >
      {/* Background Animated Video Mosaic Grid */}
      <div className="absolute inset-0 flex flex-col justify-center gap-3 sm:gap-4 pointer-events-none opacity-40 scale-105">
        {/* Row 1: Left scrolling */}
        <div className="flex gap-4 w-[200%] animate-marquee overflow-hidden" style={{ willChange: 'transform', contain: 'layout' }}>
          {ROW_1_TILES.map((clip, i) => (
            <div
              key={`r1-${i}`}
              className="relative w-64 sm:w-80 md:w-96 aspect-video rounded-2xl overflow-hidden shrink-0 border border-white/10 brightness-85 bg-zinc-900"
            >
              <img
                src={clip.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-black/80 text-[#CCFF00] border border-[#CCFF00]/30 tracking-wider">
                  {clip.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Right scrolling */}
        <div
          className="flex gap-4 w-[200%] overflow-hidden"
          style={{ animation: 'marquee 32s linear infinite reverse', willChange: 'transform', contain: 'layout' }}
        >
          {ROW_2_TILES.map((clip, i) => (
            <div
              key={`r2-${i}`}
              className="relative w-64 sm:w-80 md:w-96 aspect-video rounded-2xl overflow-hidden shrink-0 border border-white/10 brightness-85 bg-zinc-900"
            >
              <img
                src={clip.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-black/80 text-[#CCFF00] border border-[#CCFF00]/30 tracking-wider">
                  {clip.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3: Left scrolling */}
        <div
          className="hidden sm:flex gap-4 w-[200%] overflow-hidden"
          style={{ animation: 'marquee 38s linear infinite', willChange: 'transform', contain: 'layout' }}
        >
          {ROW_3_TILES.map((clip, i) => (
            <div
              key={`r3-${i}`}
              className="relative w-64 sm:w-80 md:w-96 aspect-video rounded-2xl overflow-hidden shrink-0 border border-white/10 brightness-85 bg-zinc-900"
            >
              <img
                src={clip.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-black/80 text-[#CCFF00] border border-[#CCFF00]/30 tracking-wider">
                  {clip.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Vignette Overlays & Center Spotlight */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[45vh] bg-[#CCFF00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-80 bg-black/60 backdrop-blur-[2px] pointer-events-none" />

      {/* Central Foreground Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-7 sm:space-y-9">
        
        {/* Main Hero Headline with Cyberpunk Glitch Loop */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase tracking-[-0.03em] leading-[1.04]">
          <span
            className="cyber-glitch-loop text-[#CCFF00] drop-shadow-[0_4px_45px_rgba(204,255,0,0.45)]"
            data-text="Social Media & Content Agency"
          >
            Social Media &amp; Content Agency
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="font-body text-sm sm:text-base md:text-[15px] lg:text-base text-white/80 max-w-xl mx-auto leading-[1.8] tracking-wide drop-shadow-md">
          We help creators, businesses, and brands create, manage, and grow their content across social media.
        </p>

        {/* "GET IN TOUCH" Button with Glitch Effect */}
        <div className="pt-2 sm:pt-4">
          <a
            href="#contact"
            className="glitch-btn-master font-ui group px-9 sm:px-14 py-4 sm:py-4.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.22em] uppercase shadow-[0_0_35px_rgba(204,255,0,0.5)] hover:shadow-[0_0_65px_rgba(204,255,0,0.9)] flex items-center gap-3 transition-all duration-300"
          >
            <span className="btn-glitch-text" data-text="GET IN TOUCH">
              GET IN TOUCH
            </span>
            <ArrowRight className="w-4 h-4 text-black stroke-[3] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
