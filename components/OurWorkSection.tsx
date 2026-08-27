"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

interface VideoShowcase {
  id: string;
  views: string;
  image: string;
}

const VIDEOS_9_16: VideoShowcase[] = [
  {
    id: "video-1",
    views: "1.2M Views",
    image: "/assets/hero/clip1.jpg",
  },
  {
    id: "video-2",
    views: "640K Views",
    image: "/assets/hero/clip2.jpg",
  },
  {
    id: "video-3",
    views: "350K Views",
    image: "/assets/hero/clip3.jpg",
  },
];

export default function OurWorkSection() {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  return (
    <section
      id="our-work"
      className="relative py-28 sm:py-40 bg-transparent overflow-hidden select-none"
    >
      {/* 
        =========================================================
        LIME GREEN COLOR SHADING ON OUR WORK SECTION
        =========================================================
      */}
      <div className="absolute top-1/4 -left-20 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] bg-[#CCFF00]/[0.08] rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] bg-[#CCFF00]/[0.07] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[400px] bg-[#142614]/40 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Cyber Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Space_Grotesk',sans-serif] uppercase tracking-[-0.03em] leading-tight">
            <span
              className="cyber-glitch-loop text-white"
              data-text="Our Work"
            >
              Our <span className="text-[#CCFF00] drop-shadow-[0_0_40px_rgba(204,255,0,0.4)]">Work</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-normal max-w-2xl leading-relaxed">
            A selection of content we&apos;ve created for our clients.
          </p>
        </div>

        {/* 
          3x1 9:16 VERTICAL CINEMATIC VIDEO GRID (CLEAN VISUALS & VIEW METRIC BADGES)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {VIDEOS_9_16.map((item, idx) => {
            const isHovered = hoveredVideo === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                onMouseEnter={() => setHoveredVideo(item.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                className="group relative flex flex-col justify-between cursor-pointer"
              >
                {/* 9:16 Vertical Video Frame */}
                <div className="relative aspect-[9/16] w-full rounded-[32px] overflow-hidden border-2 border-white/15 hover:border-[#CCFF00] shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-all duration-500 bg-zinc-950">
                  
                  {/* High-Res Video Still with Scale Hover */}
                  <img
                    src={item.image}
                    alt={item.views}
                    className="w-full h-full object-cover transition-transform duration-700 brightness-90 group-hover:scale-105 group-hover:brightness-100"
                  />

                  {/* Scanline Texture Overlay */}
                  <div className="absolute inset-0 scanline-overlay opacity-30 pointer-events-none" />

                  {/* Gradient Depth Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />

                  {/* Top Glowing Neon Laser Edge on Hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent shadow-[0_0_20px_#CCFF00] transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Center Animated Play Beacon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-16 h-16 rounded-full bg-black/75 backdrop-blur-md border-2 border-[#CCFF00] flex items-center justify-center text-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-all duration-300 group-hover:scale-115 group-hover:bg-[#CCFF00] group-hover:text-black">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom View Metric Badge Only */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-center">
                    <div className="px-5 py-2 rounded-full bg-black/85 backdrop-blur-xl border border-[#CCFF00]/50 group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-300">
                      <span className="text-sm sm:text-base font-mono font-black tracking-wider text-[#CCFF00] group-hover:text-black transition-colors duration-300">
                        {item.views}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
