"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="relative py-28 sm:py-40 bg-transparent overflow-hidden select-none"
    >
      {/* 
        =========================================================
        LIME GREEN COLOR SHADING ON ABOUT SECTION
        =========================================================
      */}
      <div className="absolute top-1/4 -left-20 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] bg-[#CCFF00]/[0.085] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] bg-[#CCFF00]/[0.075] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[400px] bg-[#142614]/50 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-24">
        
        {/* Section Header with Cyberpunk Glitch Loop */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span className="text-xs font-mono font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
              ABOUT US
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Space_Grotesk',sans-serif] uppercase tracking-[-0.03em] leading-[1.02]">
            <span
              className="cyber-glitch-loop text-white"
              data-text="About Editors Street"
            >
              About <span className="text-[#CCFF00] drop-shadow-[0_0_40px_rgba(204,255,0,0.4)]">Editors Street</span>
            </span>
          </h2>
        </div>

        {/* Free-Flowing Editorial Story (No Cards, Pure Elegant Typography) */}
        <div className="space-y-12 sm:space-y-16 max-w-4xl">
          
          {/* Paragraph 1: Main Statement */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-[#CCFF00]">
            <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Editors Street is a content agency helping{" "}
              <span className="text-[#CCFF00] drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">creators, businesses, and brands</span>{" "}
              manage and produce content for social media.
            </p>
          </div>

          {/* Minimalist Futuristic Divider */}
          <div className="w-full h-px bg-gradient-to-r from-white/20 via-[#CCFF00]/40 to-transparent" />

          {/* Paragraph 2 & 3: Editorial Narrative Stream */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 pt-2">
            
            {/* Paragraph 2: Scope */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono text-[#CCFF00] tracking-[0.25em] uppercase font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_6px_#CCFF00]" />
                <span>SCOPE &amp; PRODUCTION</span>
              </div>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Our team handles everything from content planning and video editing to social media management, podcast production, and creative design.
              </p>
            </div>

            {/* Paragraph 3: Partnership */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono text-[#CCFF00] tracking-[0.25em] uppercase font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_6px_#CCFF00]" />
                <span>CLIENT COLLABORATION</span>
              </div>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                We work closely with our clients to create consistent, high-quality content that fits their brand and goals.
              </p>
            </div>

          </div>

        </div>

        {/* "LEARN MORE ABOUT US" Glitch Button */}
        <div className="pt-2">
          <a
            href="#contact"
            className="glitch-btn-master group px-10 sm:px-14 py-4 sm:py-4.5 rounded-full text-xs sm:text-sm font-black tracking-[0.22em] uppercase flex items-center gap-3 transition-all duration-300 w-fit"
          >
            <span className="btn-glitch-text" data-text="LEARN MORE ABOUT US">
              LEARN MORE ABOUT US
            </span>
            <ArrowRight className="w-4 h-4 text-black stroke-[3] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
