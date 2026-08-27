"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "social-media",
    number: "01",
    title: "Social Media Management",
    description:
      "We manage your social media from scheduling and publishing to community management, analytics, and growth tracking.",
    accent: "rgba(204, 255, 0, 0.15)",
  },
  {
    id: "content-strategy",
    number: "02",
    title: "Content Strategy",
    description:
      "We research topics, develop content ideas, write hooks, plan scripts, and create monthly content calendars.",
    accent: "rgba(204, 255, 0, 0.15)",
  },
  {
    id: "short-form",
    number: "03",
    title: "Short-Form Video Editing",
    description:
      "We create Reels, TikToks, and YouTube Shorts with captions, motion graphics, and platform-optimized editing.",
    accent: "rgba(204, 255, 0, 0.15)",
  },
  {
    id: "podcast-production",
    number: "04",
    title: "Podcast Production",
    description:
      "We edit podcasts, create clips, prepare episodes for YouTube, and create podcast thumbnails.",
    accent: "rgba(204, 255, 0, 0.15)",
  },
  {
    id: "thumbnail-design",
    number: "05",
    title: "Thumbnail & Creative Design",
    description:
      "We create YouTube thumbnails, podcast thumbnails, and other social media creative assets.",
    accent: "rgba(204, 255, 0, 0.15)",
  },
  {
    id: "ecommerce-ads",
    number: "06",
    title: "E-Commerce Video Ads",
    description:
      "We create product videos, UGC-style ads, and social media advertisements designed for your products.",
    accent: "rgba(204, 255, 0, 0.15)",
  },
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative py-28 sm:py-40 bg-black overflow-visible select-none"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span className="font-ui text-[10px] font-bold tracking-[0.4em] text-[#CCFF00] uppercase">
              OUR SERVICES
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.03em] leading-tight">
            <span
              className="cyber-glitch-loop text-white"
              data-text="What We Do"
            >
              What <span className="text-[#CCFF00] drop-shadow-[0_0_40px_rgba(204,255,0,0.4)]">We Do</span>
            </span>
          </h2>
        </motion.div>

        {/* 
          STACKING SERVICES DECK ON PURE BLACK BACKGROUND:
          Each service moves up and sticks/stacks on top of the preceding service
        */}
        <div className="relative space-y-10 sm:space-y-14 pb-16">
          {SERVICES_DATA.map((service, index) => {
            const isHovered = hoveredService === service.id;
            const topOffset = 110 + index * 24;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: "easeOut" }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  top: `${topOffset}px`,
                  zIndex: index + 10,
                }}
                className="sticky rounded-[28px] bg-gradient-to-br from-[#0e140e] via-[#090d09] to-[#040604] border-t border-l border-r border-white/15 hover:border-[#CCFF00]/70 p-8 sm:p-12 lg:p-14 shadow-[0_-20px_50px_rgba(0,0,0,0.95)] transition-all duration-300 backdrop-blur-2xl group overflow-hidden"
              >
                {/* Top Glowing Laser Edge */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent shadow-[0_0_20px_#CCFF00] transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-40"
                  }`}
                />

                {/* Content Layout (NO PILL TAG) */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                  
                  {/* Left: Prominent Number Only (No pill badge) */}
                  <div className="lg:col-span-3 flex items-center lg:items-start">
                    <span className="font-ui text-3xl sm:text-5xl font-bold text-[#CCFF00] tracking-wider transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-1 drop-shadow-[0_0_15px_rgba(204,255,0,0.4)]">
                      {service.number}
                    </span>
                  </div>

                  {/* Center: Main Title */}
                  <div className="lg:col-span-5 space-y-2">
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-[2rem] text-white group-hover:text-[#CCFF00] transition-colors duration-300 tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Description & Action Arrow Beacon */}
                  <div className="lg:col-span-4 flex items-start justify-between gap-6">
                    <p className="font-body text-sm sm:text-[13px] text-zinc-300 leading-[1.85]">
                      {service.description}
                    </p>

                    <div className="shrink-0 p-3 rounded-full border border-white/15 text-white/50 group-hover:border-[#CCFF00] group-hover:text-black group-hover:bg-[#CCFF00] group-hover:shadow-[0_0_20px_#CCFF00] transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
