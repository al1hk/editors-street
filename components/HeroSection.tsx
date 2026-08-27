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
      <div className="absolute inset-0 flex flex-col justify-center gap-3 sm:gap-4 pointer-events-none opacity-60 scale-105">
        {/* Row 1: Left scrolling */}
        <div className="flex gap-4 w-[200%] animate-marquee overflow-hidden" style={{ willChange: 'transform', contain: 'layout' }}>
          {ROW_1_TILES.map((clip, i) => (
            <div
              key={`r1-${i}`}
              className="relative w-64 sm:w-80 md:w-96 aspect-video overflow-hidden shrink-0 border border-[#CCFF00]/20 bg-zinc-900"
            >
              <img
                src={clip.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 bg-black/90 text-[#CCFF00] border border-[#CCFF00]/40 tracking-wider">
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
              className="relative w-64 sm:w-80 md:w-96 aspect-video overflow-hidden shrink-0 border border-[#CCFF00]/20 bg-zinc-900"
            >
              <img
                src={clip.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 bg-black/90 text-[#CCFF00] border border-[#CCFF00]/40 tracking-wider">
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
              className="relative w-64 sm:w-80 md:w-96 aspect-video overflow-hidden shrink-0 border border-[#CCFF00]/20 bg-zinc-900"
            >
              <img
                src={clip.img}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 bg-black/90 text-[#CCFF00] border border-[#CCFF00]/40 tracking-wider">
                  {clip.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic overlay — flatter than before so the collage stays visible like the reference */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/60 pointer-events-none" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-72 bg-black/60 pointer-events-none" />

      {/* Central Foreground Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-5 sm:space-y-6">

        {/* Main Hero Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] text-white">
          Social Media &amp;{" "}
          <span className="text-[#CCFF00]">
            Content Agency
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="font-mono text-base sm:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed tracking-wide">
          We help creators, businesses, and brands create, manage, and grow their content across social media.
        </p>

        {/* Primary CTA Button */}
        <div className="pt-2">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 px-9 sm:px-12 py-4 sm:py-5 rounded-full bg-[#CCFF00] text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-[0_0_30px_rgba(204,255,0,0.25)] hover:shadow-[0_0_45px_rgba(204,255,0,0.45)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}