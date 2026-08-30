"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="relative py-28 sm:py-40 bg-black overflow-hidden select-none border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-24">
        
        {/* Section Header with Cyberpunk Glitch Loop */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#CCFF00]" />
            <span className="font-ui text-[10px] font-bold tracking-[0.4em] text-[#CCFF00] uppercase">
              ABOUT US
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.03em] leading-[1.02]">
            <span
              className="cyber-glitch-loop text-white"
              data-text="About Editors Street"
            >
              About <span className="text-[#CCFF00]">Editors Street</span>
            </span>
          </h2>
        </div>

        {/* Free-Flowing Editorial Story (No Cards, Pure Elegant Typography) */}
        <div className="space-y-12 sm:space-y-16 max-w-4xl">
          
          {/* Paragraph 1: Main Statement */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-[#CCFF00]">
            <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#CCFF00]" />
            <p className="font-body text-xl sm:text-2xl lg:text-3xl font-normal text-white leading-snug">
              Editors Street is a content agency helping{" "}
              <span className="text-[#CCFF00]">creators, businesses, and brands</span>{" "}
              manage and produce content for social media.
            </p>
          </div>

          {/* Minimalist Futuristic Divider */}
          <div className="w-full h-px bg-gradient-to-r from-white/20 via-[#CCFF00]/40 to-transparent" />

          {/* Paragraph 2 & 3: Editorial Narrative Stream */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 pt-2">
            
            {/* Paragraph 2: Scope */}
            <div className="space-y-3">
              <div className="font-ui text-[10px] font-bold text-[#CCFF00] tracking-[0.3em] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                <span>SCOPE &amp; PRODUCTION</span>
              </div>
              <p className="font-body text-sm sm:text-base text-zinc-300 leading-[1.85]">
                Our team handles everything from content planning and video editing to social media management, podcast production, and creative design.
              </p>
            </div>

            {/* Paragraph 3: Partnership */}
            <div className="space-y-3">
              <div className="font-ui text-[10px] font-bold text-[#CCFF00] tracking-[0.3em] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                <span>CLIENT COLLABORATION</span>
              </div>
              <p className="font-body text-sm sm:text-base text-zinc-300 leading-[1.85]">
                We work closely with our clients to create consistent, high-quality content that fits their brand and goals.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}