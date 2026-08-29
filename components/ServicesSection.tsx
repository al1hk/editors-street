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
  {
    id: "ai-real-estate",
    number: "07",
    title: "AI Real Estate Videos",
    description:
      "Turn property photos into professional AI videos for your listings. We provide the script, create the AI footage, and edit everything into a finished video ready for social media.",
    accent: "rgba(204, 255, 0, 0.15)",
  },
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 bg-black overflow-visible select-none border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-3"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#CCFF00]" />
            <span className="font-body text-[10px] font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
              OUR SERVICES
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.01em] leading-tight text-white">
            What <span className="text-[#CCFF00]">We Do</span>
          </h2>
        </motion.div>

        {/* 
          STACKING SERVICES DECK ON PURE BLACK BACKGROUND:
          Each service moves up and sticks/stacks on top of the preceding service
        */}
        <div className="relative space-y-8 sm:space-y-12 pb-16">
          {SERVICES_DATA.map((service, index) => {
            const isHovered = hoveredService === service.id;
            const topOffset = 100 + index * 20;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  top: `${topOffset}px`,
                  zIndex: index + 10,
                }}
                className="sticky rounded-2xl sm:rounded-3xl bg-[#0a0a0a] border border-white/[0.08] hover:border-white/20 p-8 sm:p-10 lg:p-12 shadow-[0_-15px_40px_rgba(0,0,0,0.9)] transition-all duration-300 group overflow-hidden"
              >
                {/* Content Layout */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  
                  {/* Left: Prominent Number (Anton) */}
                  <div className="lg:col-span-2 flex items-center lg:items-start">
                    <span className="font-heading text-3xl sm:text-5xl text-[#CCFF00] tracking-wider transition-transform duration-200 group-hover:translate-x-0.5">
                      {service.number}
                    </span>
                  </div>

                  {/* Center: Main Title (Anton) */}
                  <div className="lg:col-span-5 space-y-1">
                    <h3 className="font-heading text-2xl sm:text-3xl text-white group-hover:text-[#CCFF00] transition-colors duration-200 tracking-[0.01em]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Description (Space Mono) & Action Icon */}
                  <div className="lg:col-span-5 flex items-start justify-between gap-6">
                    <p className="font-body text-xs sm:text-sm text-zinc-400 leading-[1.85]">
                      {service.description}
                    </p>

                    <div className="shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-zinc-400 group-hover:border-[#CCFF00] group-hover:text-black group-hover:bg-[#CCFF00] transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
