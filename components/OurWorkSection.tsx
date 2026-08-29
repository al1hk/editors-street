"use client";

import React, { useState } from "react";
import { Play, Film, Building2, ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface VideoItem {
  id: string;
  title: string;
  views: string;
  image: string;
  metrics: string;
  url?: string;
  tag?: string;
}

const LONG_FORM_DATA: VideoItem[] = [
  {
    id: "long-1",
    title: "LONG FORM PRODUCTION // 01",
    views: "198K Views",
    image: "https://img.youtube.com/vi/ZAW7F4lg848/hqdefault.jpg",
    url: "https://youtu.be/ZAW7F4lg848?si=CVUVRMAoAsfIAy2q",
    metrics: "Narrative pacing, archival research, cinematic grade & master sound.",
  },
  {
    id: "long-2",
    title: "LONG FORM PRODUCTION // 02",
    views: "186K Views",
    image: "https://img.youtube.com/vi/G5qiktcrB8k/hqdefault.jpg",
    url: "https://youtu.be/G5qiktcrB8k?si=se5509hzW-yDDchU",
    metrics: "Multicam editing, dynamic typography, retention hooks & sound design.",
  },
  {
    id: "long-3",
    title: "LONG FORM PRODUCTION // 03",
    views: "118K Views",
    image: "https://img.youtube.com/vi/y7MeLsFJCAE/hqdefault.jpg",
    url: "https://youtu.be/y7MeLsFJCAE?si=09304DbNZiVdmIEP",
    metrics: "Documentary storytelling, color grade & master audio delivery.",
  },
];

const REAL_ESTATE_DATA: VideoItem[] = [
  {
    id: "re-1",
    title: "LUXURY MODERN VILLA CINEMATIC TOUR",
    views: "420K Views",
    image: "/assets/hero/clip2.jpg",
    metrics: "FPV drone integration, dynamic speed ramping & luxury color grade.",
    tag: "Luxury Listing",
  },
  {
    id: "re-2",
    title: "ARCHITECTURAL PENTHOUSE SHOWCASE",
    views: "310K Views",
    image: "/assets/hero/clip3.jpg",
    metrics: "Stabilized 4K walkthrough, twilight transition & ambient audio design.",
    tag: "Penthouse",
  },
  {
    id: "re-3",
    title: "ESTATE PROPERTY WALKTHROUGH & AGENT SPOTLIGHT",
    views: "250K Views",
    image: "/assets/hero/clip4.jpg",
    metrics: "Agent soundbite editing, branded lower-thirds & aerial property mapping.",
    tag: "Commercial / Estate",
  },
];

export default function OurWorkSection() {
  return (
    <section
      id="our-work"
      className="relative py-24 sm:py-32 bg-black overflow-hidden select-none border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#CCFF00]" />
            <span className="font-body text-[10px] font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
              PORTFOLIO SHOWCASE
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-none text-white">
            OUR <span className="text-[#CCFF00]">WORK</span>
          </h2>

          <p className="font-body text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
            Engineered for maximum viewer retention, viral growth, and cinematic polish.
          </p>
        </div>

        {/* ============================
            LONG FORM — WIDESCREEN
           ============================ */}
        <div className="space-y-8">
          <div className="space-y-3 border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#CCFF00]" />
                <span className="font-body text-[10px] font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
                  NARRATIVE &amp; TALKING HEAD
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
                  LONG FORM &amp; <span className="text-[#CCFF00]">DOCUMENTARIES</span>
                </h3>
                <p className="font-body text-xs sm:text-sm text-zinc-400 max-w-sm">
                  Full-length cinematic cuts, podcasts, and narrative storytelling.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {LONG_FORM_DATA.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="group relative cursor-pointer"
                >
                  <a
                    href={item.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-[#CCFF00]/60 transition-all duration-300 shadow-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-12 h-12 rounded-full bg-black/80 border border-[#CCFF00]/40 flex items-center justify-center text-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                      </div>
                    </div>

                    {/* Views Count Only */}
                    <div className="absolute bottom-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#CCFF00] text-[10px] sm:text-xs font-body font-bold text-black uppercase tracking-wider shadow-lg">
                        <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
                        {item.views}
                      </span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
        </div>

        {/* ============================
            REAL ESTATE VIDEOS — GALLERY
           ============================ */}
        <div className="space-y-8 pt-6">
          <div className="space-y-3 border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#CCFF00]" />
                <span className="font-body text-[10px] font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
                  PROPERTY PORTFOLIO
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
                  REAL ESTATE <span className="text-[#CCFF00]">VIDEOS</span>
                </h3>
                <p className="font-body text-xs sm:text-sm text-zinc-400 max-w-sm">
                  A selection of our real estate video work.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {REAL_ESTATE_DATA.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="group relative cursor-pointer"
                >
                  {/* Video Thumbnail Container */}
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-[#CCFF00]/60 transition-all duration-300 shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-12 h-12 rounded-full bg-black/80 border border-[#CCFF00]/40 flex items-center justify-center text-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                      </div>
                    </div>

                    {/* Views Count Only */}
                    <div className="absolute bottom-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#CCFF00] text-[10px] sm:text-xs font-body font-bold text-black uppercase tracking-wider shadow-lg">
                        <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
                        {item.views}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}