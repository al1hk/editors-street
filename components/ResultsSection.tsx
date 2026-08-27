"use client";

import React from "react";
import { motion } from "framer-motion";

interface ResultStat {
  value: string;
  label: string;
}

const RESULTS_DATA: ResultStat[] = [
  {
    value: "100+",
    label: "Clients",
  },
  {
    value: "1M+",
    label: "Views",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "X,XXX+",
    label: "Videos Created",
  },
];

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="relative py-28 sm:py-40 bg-black overflow-hidden select-none border-t border-white/[0.06]"
    >
      {/* Subtle Background Cyber Matrix Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Neon Lime Glow Pools — Rich Color Shading */}
      <div className="absolute top-1/4 -left-20 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] bg-[#CCFF00]/[0.10] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] bg-[#CCFF00]/[0.09] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#142614]/50 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span className="text-xs font-mono font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
              RESULTS
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Space_Grotesk',sans-serif] uppercase tracking-[-0.03em] leading-tight">
            <span
              className="cyber-glitch-loop text-white"
              data-text="Our Results"
            >
              Our <span className="text-[#CCFF00] drop-shadow-[0_0_40px_rgba(204,255,0,0.4)]">Results</span>
            </span>
          </h2>
        </div>

        {/* 
          CARDLESS FUTURISTIC METRIC TELEMETRY GRID (4 COLUMNS, PURE TYPOGRAPHY & LASER DIVIDERS)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-4">
          {RESULTS_DATA.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="relative space-y-4 group"
            >
              {/* Neon Dot Accent */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_6px_#CCFF00] inline-block" />

              {/* Massive Bold Metric Numeral */}
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black font-mono tracking-tighter text-[#CCFF00] drop-shadow-[0_0_25px_rgba(204,255,0,0.35)] transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-1">
                {item.value}
              </div>

              {/* Label */}
              <p className="text-lg sm:text-xl font-bold font-['Space_Grotesk',sans-serif] text-white group-hover:text-zinc-200 transition-colors uppercase tracking-wider">
                {item.label}
              </p>

              {/* Bottom Subtle Futuristic Laser Line */}
              <div className="w-full h-[2px] bg-gradient-to-r from-[#CCFF00]/40 via-white/10 to-transparent group-hover:from-[#CCFF00] transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
