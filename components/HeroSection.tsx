"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HERO_VIDEOS = [
  {
    src: "/assets/comp/Aislinn Phelan v.3.mp4",
    offset: "translate-y-2 md:translate-y-4",
    play: true,
  },
  {
    src: "/assets/comp/Red PAddle.mp4",
    offset: "-translate-y-4 md:-translate-y-6",
    play: true,
  },
  {
    src: "/assets/comp/3 Mixed Doubles Mistakes Most Players Make Web (1).mp4",
    offset: "translate-y-1 md:translate-y-2",
    play: true,
  },
  {
    src: "/assets/comp/Chantal v.1.mp4",
    offset: "-translate-y-3 md:-translate-y-5",
    play: true,
  },
  {
    src: "/assets/comp/Natalie v.2.mp4",
    offset: "translate-y-3 md:translate-y-6",
    play: true,
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Start the middle active videos and pause when out of view
  useEffect(() => {
    const playVideos = () => {
      videoRefs.current.forEach((video) => {
        if (video) video.play().catch(() => {});
      });
    };

    const pauseVideos = () => {
      videoRefs.current.forEach((video) => {
        if (video && !video.paused) video.pause();
      });
    };

    playVideos();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideos();
        } else {
          pauseVideos();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[85vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-black py-16 sm:py-24 select-none"
    >
      {/* Dynamic Staggered Visual Collage — Middle Cards Playing Real Video, Flanking Cards Showing Real Video Frames */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-55">
        <div className="w-[110%] -ml-[5%] h-[114%] -mt-[3%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 transform -rotate-1 scale-105">
          {HERO_VIDEOS.map((item, i) => (
            <div
              key={`collage-card-${i}`}
              className={`flex flex-col justify-center ${item.offset} ${
                i >= 4 ? "hidden lg:flex" : i >= 3 ? "hidden md:flex" : i === 2 ? "hidden sm:flex" : "flex"
              }`}
            >
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.8)] [transform:translateZ(0)]">
                {item.play ? (
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    className="w-full h-full object-cover [transform:translateZ(0)]"
                    style={{ willChange: "transform" }}
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    className="w-full h-full object-cover [transform:translateZ(0)]"
                    style={{ willChange: "transform" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Overlays (balanced for clear video visibility + crisp text) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#CCFF00]/[0.06] blur-[120px] rounded-full pointer-events-none" />

      {/* Central Foreground Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-7">

        {/* Main Hero Headline */}
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

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-xs sm:text-base md:text-lg text-zinc-200 max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
        >
          We help creators, businesses, and brands create, manage, and grow their content across social media.
        </motion.p>

        {/* Primary CTA Button */}
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
  );
}