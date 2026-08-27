"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ClientBrand {
  id: string;
  name: string;
  category: string;
  tag: string;
}

// PLACEHOLDER DATA — replace with real client names before launch.
const CLIENT_BRANDS: ClientBrand[] = [
  { id: "client-1", name: "Client Name", category: "Global Brand", tag: "Brand Film" },
  { id: "client-2", name: "Client Name", category: "Top Podcast", tag: "Podcast Edit" },
  { id: "client-3", name: "Client Name", category: "Fashion House", tag: "Fashion Cut" },
  { id: "client-4", name: "Client Name", category: "Content Creator", tag: "Retention Cut" },
  { id: "client-5", name: "Client Name", category: "Venture Capital", tag: "Commercial" },
  { id: "client-6", name: "Client Name", category: "E-Commerce", tag: "Performance Ads" },
  { id: "client-7", name: "Client Name", category: "Business Podcast", tag: "Full Series" },
  { id: "client-8", name: "Client Name", category: "Automotive", tag: "Launch Film" },
];

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative py-28 sm:py-36 bg-black overflow-hidden select-none border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#CCFF00]" />
            <span className="font-body text-[10px] font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
              OUR CLIENTS
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.02em] leading-tight text-white">
            Brands &amp; Creators{" "}
            <span className="text-[#CCFF00]">
              We&apos;ve Worked With
            </span>
          </h2>

          <p className="font-body text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg">
            From top-tier creators to global brands — we bring precision craft, dynamic retention, and cinematic storytelling to every production.
          </p>
        </div>

        {/* Refined Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CLIENT_BRANDS.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.04, ease: "easeOut" }}
              className="group relative rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#CCFF00]/50 transition-all duration-500 min-h-[220px] sm:min-h-[240px] flex flex-col justify-between p-7 sm:p-8 overflow-hidden"
            >
              {/* Soft glow that appears on hover */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#CCFF00]/0 group-hover:bg-[#CCFF00]/[0.08] blur-3xl transition-all duration-500 pointer-events-none" />

              {/* Category — quiet eyebrow */}
              <span className="relative font-body text-[10px] font-medium text-zinc-500 uppercase tracking-[0.25em]">
                {client.category}
              </span>

              {/* Client Name — the one focal element */}
              <h3 className="relative font-heading text-2xl sm:text-3xl uppercase tracking-tight text-white leading-[1.05] my-4">
                {client.name}
              </h3>

              {/* Footer: tag + arrow */}
              <div className="relative flex items-center justify-between">
                <span className="font-body text-[10px] text-zinc-500 group-hover:text-[#CCFF00] uppercase tracking-widest transition-colors duration-300">
                  {client.tag}
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}