"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HERO_VIDEOS = [
  "/assets/hero/3 Mixed Doubles Mistakes Most Players Make Web.mp4",
  "/assets/hero/Red PAddle.mp4",
  "/assets/realestate/Aislinn Phelan v.3.mp4",
  "/assets/realestate/Chantal v.1.mp4",
  "/assets/realestate/Natalie v.2.mp4",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const currentVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  const advanceVideo = useCallback(() => {
    const next = (currentIndex + 1) % HERO_VIDEOS.length;
    setNextIndex(next);
    setIsFading(true);
  }, [currentIndex]);

  // When fade completes, swap videos
  useEffect(() => {
    if (!isFading) return;
    const timer = setTimeout(() => {
      setCurrentIndex(nextIndex!);
      setNextIndex(null);
      setIsFading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isFading, nextIndex]);

  // Auto-play the next video element when nextIndex changes
  useEffect(() => {
    if (nextIndex !== null && nextVideoRef.current) {
      nextVideoRef.current.play().catch(() => {});
    }
  }, [nextIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-16 sm:py-24 select-none"
    >
      {/* Background Fullscreen Video Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Current Video */}
        <video
          ref={currentVideoRef}
          key={`current-${currentIndex}`}
          src={HERO_VIDEOS[currentIndex]}
          autoPlay
          muted
          playsInline
          onEnded={advanceVideo}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: isFading ? 0 : 0.8 }}
        />

        {/* Next Video (crossfades in) */}
        {nextIndex !== null && (
          <video
            ref={nextVideoRef}
            key={`next-${nextIndex}`}
            src={HERO_VIDEOS[nextIndex]}
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: isFading ? 0.8 : 0 }}
          />
        )}
      </div>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 pointer-events-none" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-72 bg-black/30 pointer-events-none" />

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