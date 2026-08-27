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
      className="relative py-28 sm:py-36 bg-black overflow-hidden select-none border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-20">

        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#CCFF00]" />
            <span className="font-body text-[10px] font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
              POST PRODUCTION TALENT
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.01em] leading-tight text-white">
            Meet Our{" "}
            <span className="text-[#CCFF00]">
              Team
            </span>
          </h2>

          <p className="font-body text-xs sm:text-sm text-zinc-400 leading-[1.85] max-w-xl">
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="group relative overflow-hidden"
            >
              {/* Photo Area */}
              <div
                className={`relative w-full aspect-[4/5] bg-gradient-to-br ${member.bg} rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden`}
              >
                {/* Number badge — top left */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="text-xs font-body font-bold tracking-wider text-[#CCFF00] bg-black/80 px-2.5 py-1 rounded border border-white/10">
                    [{member.num}]
                  </span>
                </div>

                {/* Placeholder silhouette */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <svg
                    viewBox="0 0 80 100"
                    className="w-24 sm:w-32 opacity-10 text-white"
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
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-heading uppercase tracking-wide text-white group-hover:text-[#CCFF00] transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-xs font-body uppercase tracking-wider text-zinc-400">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
