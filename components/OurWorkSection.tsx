"use client";

import React, { useState } from "react";
import { Play, Film, Smartphone, ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface ReelItem {
  id: string;
  title: string;
  views: string;
  image: string;
  metrics: string;
}

interface LongFormItem {
  id: string;
  title: string;
  views: string;
  image: string;
  metrics: string;
}

const REELS_DATA: ReelItem[] = [
  {
    id: "reel-1",
    title: "VIRAL TALKING HEAD & RETENTION CUT",
    views: "1.8M Views",
    image: "/assets/hero/clip1.jpg",
    metrics: "High-paced captions, motion graphics, and audio mix.",
  },
  {
    id: "reel-2",
    title: "HIGH-ENERGY PRODUCT VFX & SOUND DESIGN",
    views: "940K Views",
    image: "/assets/hero/clip2.jpg",
    metrics: "Multi-layer sound FX, speed ramping, and color suite.",
  },
];

const LONG_FORM_DATA: LongFormItem[] = [
  {
    id: "long-1",
    title: "DOCUMENTARY MASTERCLASS",
    views: "1.4M Views",
    image: "/assets/hero/clip3.jpg",
    metrics: "Cinematic grade, archive research & narrative editing.",
  },
  {
    id: "long-2",
    title: "SILICON VALLEY TECH FOUNDER",
    views: "680K Views",
    image: "/assets/hero/clip4.jpg",
    metrics: "Multicam timeline cut, dynamic lower thirds & audio master.",
  },
  {
    id: "long-3",
    title: "STUDIO PODCAST & VISUAL CUT",
    views: "920K Views",
    image: "/assets/hero/clip1.jpg",
    metrics: "Multi-track sync, Dolby audio mix & dynamic video highlights.",
  },
];

export default function OurWorkSection() {
  const [activeTab, setActiveTab] = useState<"all" | "reels" | "longform">("all");

  const showReels = activeTab === "all" || activeTab === "reels";
  const showLongForm = activeTab === "all" || activeTab === "longform";

  return (
    <section
      id="our-work"
      className="relative py-24 sm:py-32 bg-black overflow-hidden select-none border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-14 sm:space-y-18">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-md bg-zinc-950 border border-white/10 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-sm text-[10px] sm:text-[11px] font-body font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "all"
                  ? "bg-[#CCFF00] text-black shadow-md shadow-[#CCFF00]/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              ALL WORK
            </button>
            <button
              onClick={() => setActiveTab("reels")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-sm text-[10px] sm:text-[11px] font-body font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "reels"
                  ? "bg-[#CCFF00] text-black shadow-md shadow-[#CCFF00]/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-3 h-3" />
              REELS
            </button>
            <button
              onClick={() => setActiveTab("longform")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-sm text-[10px] sm:text-[11px] font-body font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "longform"
                  ? "bg-[#CCFF00] text-black shadow-md shadow-[#CCFF00]/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Film className="w-3 h-3" />
              LONG FORM
            </button>
          </div>
        </div>

        {/* ============================
            REELS — VERTICAL
           ============================ */}
        {showReels && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
              <Smartphone className="w-4 h-4 text-[#CCFF00]" />
              <h3 className="font-heading text-sm sm:text-base text-white uppercase tracking-wider">
                REELS &amp; SHORTS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
              {REELS_DATA.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="group relative flex flex-col space-y-4 cursor-pointer"
                >
                  {/* Video Thumbnail Container */}
                  <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-[#CCFF00]/60 transition-all duration-300 shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-14 h-14 rounded-full bg-black/80 border border-[#CCFF00]/40 flex items-center justify-center text-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                        <Play className="w-5 h-5 fill-current translate-x-0.5" />
                      </div>
                    </div>

                    {/* View Count */}
                    <div className="absolute bottom-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-sm bg-[#CCFF00] text-[10px] font-body font-bold text-black uppercase">
                        {item.views}
                      </span>
                    </div>
                  </div>

                  {/* Below Thumbnail: Title, Description & Action Button */}
                  <div className="space-y-3 pt-1">
                    <h4 className="font-heading text-lg sm:text-xl text-[#CCFF00] uppercase tracking-tight leading-snug group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h4>

                    <p className="font-body text-xs text-zinc-400 leading-relaxed">
                      {item.metrics}
                    </p>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#CCFF00] hover:bg-[#E5FE00] text-black font-body font-bold text-[10px] uppercase tracking-widest transition-all duration-200"
                    >
                      <span>VIEW EDIT</span>
                      <ArrowRight className="w-3 h-3 text-black stroke-[2.5]" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ============================
            LONG FORM — WIDESCREEN
           ============================ */}
        {showLongForm && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
              <Film className="w-4 h-4 text-[#CCFF00]" />
              <h3 className="font-heading text-sm sm:text-base text-white uppercase tracking-wider">
                LONG FORM &amp; DOCUMENTARIES
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {LONG_FORM_DATA.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="group relative flex flex-col space-y-4 cursor-pointer"
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
                  </div>

                  {/* Below Thumbnail: Views, Title, Description & Action Button */}
                  <div className="space-y-3 pt-1">
                    <span className="flex items-center gap-1.5 text-xs font-body font-bold text-[#CCFF00]">
                      <Eye className="w-3.5 h-3.5" />
                      {item.views}
                    </span>

                    <h4 className="font-heading text-lg text-[#CCFF00] uppercase tracking-tight leading-snug group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h4>

                    <p className="font-body text-xs text-zinc-400 leading-relaxed">
                      {item.metrics}
                    </p>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#CCFF00] hover:bg-[#E5FE00] text-black font-body font-bold text-[10px] uppercase tracking-widest transition-all duration-200"
                    >
                      <span>WATCH REEL</span>
                      <ArrowRight className="w-3 h-3 text-black stroke-[2.5]" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}