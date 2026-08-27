"use client";

import React from "react";
import { motion } from "framer-motion";

interface TeamMember {
  num: string;
  name: string;
  role: string;
  bg: string; // placeholder gradient representing the photo area
}

const TEAM: TeamMember[] = [
  {
    num: "01",
    name: "NAME",
    role: "Editor",
    bg: "from-zinc-900 via-zinc-800 to-zinc-950",
  },
  {
    num: "02",
    name: "NAME",
    role: "Social Media Manager",
    bg: "from-zinc-950 via-zinc-800 to-zinc-900",
  },
  {
    num: "03",
    name: "NAME",
    role: "Content Strategist",
    bg: "from-zinc-900 via-zinc-800 to-zinc-950",
  },
  {
    num: "04",
    name: "NAME",
    role: "Designer",
    bg: "from-zinc-950 via-zinc-800 to-zinc-900",
  },
];

export default function TeamSection() {
  return (
    <section
      id="our-team"
      className="relative py-28 sm:py-40 bg-black overflow-hidden select-none border-t border-white/[0.06]"
    >
      {/* Subtle Cyber Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Lime Glow */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[700px] h-[700px] bg-[#CCFF00]/[0.04] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-[#CCFF00]/[0.035] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-20">

        {/* Header */}
        <div className="space-y-5 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span className="font-ui text-[10px] font-bold tracking-[0.4em] text-[#CCFF00] uppercase">
              POST PRODUCTION TALENT
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.03em] leading-tight text-white">
            <span className="cyber-glitch-loop" data-text="Meet Our Team">
              Meet Our{" "}
              <span className="text-[#CCFF00] drop-shadow-[0_0_40px_rgba(204,255,0,0.4)]">
                Team
              </span>
            </span>
          </h2>

          <p className="font-body text-sm sm:text-base text-zinc-400 leading-[1.8] max-w-xl">
            Our team of editors, designers, strategists, and social media
            specialists works together to create and manage content for our
            clients.
          </p>
        </div>

        {/* 2×2 PHOTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden"
            >
              {/* ─── LARGE PHOTO PLACEHOLDER ─── */}
              <div
                className={`relative w-full aspect-[4/5] bg-gradient-to-br ${member.bg} border border-white/[0.08] group-hover:border-[#CCFF00]/60 transition-all duration-500 overflow-hidden`}
              >
                {/* Subtle scanlines over photo */}
                <div className="absolute inset-0 scanline-overlay opacity-20 pointer-events-none z-10" />

                {/* Photo-area inner grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Number badge — top left */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#CCFF00] bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-[#CCFF00]/30">
                    [{member.num}]
                  </span>
                </div>

                {/* Corner HUD decals */}
                <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-[#CCFF00] transition-colors z-20" />
                <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/20 group-hover:border-[#CCFF00] transition-colors z-20" />

                {/* Neon lime top scanner line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#CCFF00] shadow-[0_0_14px_#CCFF00] opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20" />

                {/* Placeholder silhouette / fill icon */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <svg
                    viewBox="0 0 80 100"
                    className="w-24 sm:w-32 opacity-10 text-[#CCFF00]"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="40" cy="28" rx="20" ry="22" />
                    <path d="M0 100 C0 70 80 70 80 100Z" />
                  </svg>
                </div>

                {/* Bottom gradient fade into name block */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

                {/* Name + role inside the photo at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-6 pt-4">
                  <h3 className="text-2xl sm:text-3xl font-black font-['Space_Grotesk',sans-serif] uppercase tracking-wider text-white group-hover:text-[#CCFF00] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-zinc-400 group-hover:text-zinc-200 transition-colors mt-1">
                    {member.role}
                  </p>

                  {/* Expanding lime underline */}
                  <div className="mt-3 h-[1.5px] w-8 bg-[#CCFF00]/50 group-hover:w-full group-hover:bg-[#CCFF00] transition-all duration-500 shadow-[0_0_8px_rgba(204,255,0,0.5)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
