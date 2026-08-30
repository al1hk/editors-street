"use client";

import React from "react";
import { motion } from "framer-motion";

interface TeamMember {
  num: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
  bg?: string;
}

const TEAM: TeamMember[] = [
  {
    num: "01",
    name: "Musab",
    role: "Video Editor",
    image: "/assets/musab.jpeg",
    bio: "Musab specializes in short-form video editing, social media content, and creative visual storytelling.",
  },
  {
    num: "02",
    name: "Muhammad Hunain",
    role: "Creative Director",
    image: "/assets/hunain.png",
    bio: "I lead the creative team at Editors Street and work with our team to create high-quality content for creators, businesses, and brands.",
  },
  {
    num: "03",
    name: "Editors Street",
    role: "Post Production",
    image: "/assets/original-5b5da76b0b82c5d24ded9c30b9979fc1.webp",
    bio: "Dedicated creative talent delivering world-class motion graphics, sound design, and viral social content.",
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

        {/* 3 COLUMN PHOTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="group relative flex flex-col rounded-2xl border border-white/[0.08] hover:border-[#CCFF00]/40 bg-[#0a0a0a] transition-all duration-300 overflow-hidden"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-[4/5] bg-zinc-900 overflow-hidden">
                {/* Number badge — top left */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-xs font-body font-bold tracking-wider text-[#CCFF00] bg-black/80 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
                    [{member.num}]
                  </span>
                </div>

                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
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
                )}

                {/* Bottom gradient fade into card info */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10 pointer-events-none" />
              </div>

              {/* Text / Info Area */}
              <div className="p-6 pt-2 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-heading uppercase tracking-wide text-white group-hover:text-[#CCFF00] transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-xs font-body uppercase font-bold tracking-wider text-[#CCFF00]">
                    {member.role}
                  </p>
                </div>
                {member.bio && (
                  <p className="text-xs font-body text-zinc-400 leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
