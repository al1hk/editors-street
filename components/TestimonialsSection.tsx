"use client";

import React from "react";
import { Star } from "lucide-react";

interface Review {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating?: number;
}

const ROW_1_REVIEWS: Review[] = [
  {
    id: "r1-1",
    quote:
      "“Editors Street has been great to work with. The quality of the editing and communication has been excellent.”",
    name: "Marcus Vance",
    role: "Founder, Apex Performance",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "r1-2",
    quote:
      "“I was skeptical at first, but Editors Street saved our studio hours of work. The turnaround time is unmatched.”",
    name: "Sarah Linden",
    role: "Executive Producer, After Hours",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "r1-3",
    quote:
      "“The pacing of every cut and the color grade elevated our visual identity across all social platforms. It's like having a 24/7 post-production studio.”",
    name: "Julian Reyes",
    role: "Creator, Chrono Studio",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "r1-4",
    quote:
      "“Their ability to edit raw podcast footage into viral short clips is unmatched. Completely frictionless workflow from day one.”",
    name: "David Chen",
    role: "Head of Growth, Level Up Labs",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

const ROW_2_REVIEWS: Review[] = [
  {
    id: "r2-1",
    quote:
      "“I've never seen a post-production agency this responsive and consistent. They integrated seamlessly into our weekly publishing schedule.”",
    name: "Emily Rodriguez",
    role: "Content Director, Zenith Media",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "r2-2",
    quote:
      "“Sound design, motion graphics, and audio mastering are always on point. Our audience immediately noticed the quality jump.”",
    name: "Michael Chang",
    role: "Host, Founders Table Podcast",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "r2-3",
    quote:
      "“Editors Street has boosted our channel retention tenfold. The storytelling and hook pacing are spot-on and so helpful!”",
    name: "Olivia Harper",
    role: "Brand Lead, Vhronos Paris",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "r2-4",
    quote:
      "“The communication and creative execution are phenomenal. They truly act like a dedicated in-house team and deliver results every week.”",
    name: "James Carter",
    role: "Operations Manager, Quantum Corp",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 bg-black overflow-hidden select-none border-t border-white/[0.08]"
    >
      <div className="relative z-10 space-y-14 sm:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-3 text-center flex flex-col items-center">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#CCFF00]" />
            <span className="font-body text-[10px] font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
              CLIENT TESTIMONIALS
            </span>
            <span className="w-8 h-[2px] bg-[#CCFF00]" />
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.01em] leading-tight text-white max-w-3xl">
            What Our{" "}
            <span className="text-[#CCFF00]">
              Clients Say
            </span>
          </h2>
        </div>

        {/* 
          INFINITE DUAL-ROW CAROUSEL / MARQUEE
        */}
        <div className="relative w-full overflow-hidden space-y-5 sm:space-y-6">
          
          {/* Left & Right Edge Gradient Fade Masks for seamless loop effect */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 lg:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 lg:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

          {/* ROW 1: Scrolling Left */}
          <div className="flex gap-5 sm:gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...ROW_1_REVIEWS, ...ROW_1_REVIEWS, ...ROW_1_REVIEWS].map((item, idx) => (
              <div
                key={`r1-${item.id}-${idx}`}
                className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 p-6 sm:p-7 rounded-2xl bg-[#0a0a0a] border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] group cursor-default"
              >
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating || 5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-3.5 h-3.5 fill-[#CCFF00] text-[#CCFF00]"
                    />
                  ))}
                </div>

                {/* Quote Text (Space Mono) */}
                <p className="font-body text-xs sm:text-[13px] text-zinc-300 leading-[1.8] font-normal py-4">
                  {item.quote}
                </p>

                {/* Client Avatar + Name + Role */}
                <div className="flex items-center gap-3.5 pt-2 border-t border-white/[0.06]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
                  />
                  <div className="space-y-0.5 min-w-0">
                    <h3 className="font-heading text-sm sm:text-base text-white group-hover:text-[#CCFF00] uppercase truncate transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-body text-[10px] sm:text-[11px] text-zinc-500 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 2: Scrolling Right / Reverse */}
          <div
            className="flex gap-5 sm:gap-6 w-max hover:[animation-play-state:paused]"
            style={{ animation: "marquee 32s linear infinite reverse", willChange: "transform", backfaceVisibility: "hidden" }}
          >
            {[...ROW_2_REVIEWS, ...ROW_2_REVIEWS, ...ROW_2_REVIEWS].map((item, idx) => (
              <div
                key={`r2-${item.id}-${idx}`}
                className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 p-6 sm:p-7 rounded-2xl bg-[#0a0a0a] border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] group cursor-default"
              >
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating || 5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-3.5 h-3.5 fill-[#CCFF00] text-[#CCFF00]"
                    />
                  ))}
                </div>

                {/* Quote Text (Space Mono) */}
                <p className="font-body text-xs sm:text-[13px] text-zinc-300 leading-[1.8] font-normal py-4">
                  {item.quote}
                </p>

                {/* Client Avatar + Name + Role */}
                <div className="flex items-center gap-3.5 pt-2 border-t border-white/[0.06]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
                  />
                  <div className="space-y-0.5 min-w-0">
                    <h3 className="font-heading text-sm sm:text-base text-white group-hover:text-[#CCFF00] uppercase truncate transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-body text-[10px] sm:text-[11px] text-zinc-500 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
