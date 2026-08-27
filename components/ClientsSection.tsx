"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, Cpu, Terminal, Zap, Radio, Globe2, Crosshair } from "lucide-react";

interface ClientBrand {
  id: string;
  name: string;
  category: string;
  code: string;
  region: string;
  symbol: string;
}

const CLIENT_BRANDS: ClientBrand[] = [
  {
    id: "apex",
    name: "APEX PERFORMANCE",
    category: "GLOBAL BRAND",
    code: "APX.01",
    region: "US // NYC",
    symbol: "▲",
  },
  {
    id: "after-hours",
    name: "AFTER HOURS",
    category: "TOP 50 PODCAST",
    code: "AFT.02",
    region: "US // LA",
    symbol: "◎",
  },
  {
    id: "vhronos",
    name: "VHRONOS PARIS",
    category: "HIGH FASHION",
    code: "VHR.03",
    region: "FR // PAR",
    symbol: "❖",
  },
  {
    id: "jordan-fitz",
    name: "JORDAN FITZ",
    category: "1.8M CREATOR",
    code: "JFT.04",
    region: "UK // LON",
    symbol: "◈",
  },
  {
    id: "neoventures",
    name: "NEOVENTURES",
    category: "VENTURE CAPITAL",
    code: "NEO.05",
    region: "US // SF",
    symbol: "◆",
  },
  {
    id: "level-up",
    name: "LEVEL UP LABS",
    category: "E-COMMERCE",
    code: "LVL.06",
    region: "CA // TOR",
    symbol: "⬡",
  },
  {
    id: "founders-table",
    name: "FOUNDERS TABLE",
    category: "BUSINESS PODCAST",
    code: "FND.07",
    region: "US // AUS",
    symbol: "◬",
  },
  {
    id: "kinetic",
    name: "KINETIC MOTORS",
    category: "AUTOMOTIVE",
    code: "KNT.08",
    region: "DE // BER",
    symbol: "◉",
  },
  {
    id: "sony-artist",
    name: "SONY MUSIC ARTIST",
    category: "MUSIC RECORD",
    code: "SNY.09",
    region: "US // MIA",
    symbol: "✦",
  },
  {
    id: "chrono",
    name: "CHRONO STUDIO",
    category: "920K CREATOR",
    code: "CHR.10",
    region: "UK // MAN",
    symbol: "⬢",
  },
  {
    id: "quantum-tech",
    name: "QUANTUM CORP",
    category: "AI HARDWARE",
    code: "QTM.11",
    region: "JP // TYO",
    symbol: "⯁",
  },
  {
    id: "zenith",
    name: "ZENITH MEDIA",
    category: "2.4M GAMING",
    code: "ZNT.12",
    region: "AU // SYD",
    symbol: "⬟",
  },
];

export default function ClientsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="clients"
      className="relative py-28 sm:py-40 bg-black overflow-hidden select-none border-t border-white/[0.06]"
    >
      {/* Background Subtle Cyber Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Faint Ambient Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#CCFF00]/[0.03] rounded-full blur-[190px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          {/* Small Neon Lime Top Label */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span className="text-xs font-mono font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
              OUR CLIENTS
            </span>
          </div>

          {/* Large Bold Futuristic Heading with Glitch Loop */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Space_Grotesk',sans-serif] uppercase tracking-[-0.03em] leading-[1.05] text-white">
            <span
              className="cyber-glitch-loop"
              data-text="Creators, Businesses & Brands"
            >
              Creators, Businesses &amp; Brands
            </span>
            <br />
            <span className="text-[#CCFF00] drop-shadow-[0_0_35px_rgba(204,255,0,0.35)]">
              We&apos;ve Worked With
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-zinc-400 font-normal leading-relaxed pt-1">
            Creators, businesses, podcasts, and brands we&apos;ve worked with.
          </p>
        </div>

        {/* 
          FUTURISTIC 4-COLUMN DIGITAL INTERFACE CLIENT GRID
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {CLIENT_BRANDS.map((client, idx) => {
            const isHovered = hoveredId === client.id;

            return (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.04, ease: "easeOut" }}
                onMouseEnter={() => setHoveredId(client.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#080b08] border border-white/[0.09] hover:border-[#CCFF00] hover:bg-[#0e140e] transition-all duration-300 flex flex-col justify-between min-h-[170px] sm:min-h-[190px] shadow-[0_8px_30px_rgba(0,0,0,0.85)] hover:shadow-[0_0_30px_rgba(204,255,0,0.22)] cursor-default overflow-hidden"
              >
                {/* Subtle Inner Corner Decal */}
                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-[#CCFF00] transition-colors" />
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 border-t border-r border-white/20 group-hover:border-[#CCFF00] transition-colors" />
                <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 border-b border-l border-white/20 group-hover:border-[#CCFF00] transition-colors" />
                <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-[#CCFF00] transition-colors" />

                {/* Top Subtle Telemetry Line */}
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  <span className="tracking-widest group-hover:text-[#CCFF00] transition-colors">
                    [{client.code}]
                  </span>
                  <span className="tracking-wider">{client.region}</span>
                </div>

                {/* Centered Client Logo Emblem + Name */}
                <div className="my-auto py-3 text-center space-y-2.5">
                  <div className="text-xl sm:text-2xl text-zinc-400 group-hover:text-[#CCFF00] group-hover:scale-115 transition-all duration-300 drop-shadow-[0_0_12px_rgba(204,255,0,0.5)]">
                    {client.symbol}
                  </div>

                  <h3 className="text-sm sm:text-base font-black font-['Space_Grotesk',sans-serif] tracking-wider text-zinc-200 group-hover:text-white uppercase transition-colors">
                    {client.name}
                  </h3>
                </div>

                {/* Bottom Category Subtitle */}
                <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] group-hover:border-[#CCFF00]/30 transition-colors text-[9px] sm:text-[10px] font-mono text-zinc-500">
                  <span className="tracking-wider uppercase">{client.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#CCFF00] group-hover:shadow-[0_0_6px_#CCFF00] transition-all" />
                </div>

                {/* Top Neon Scanner Beam on Hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[1.5px] bg-[#CCFF00] shadow-[0_0_12px_#CCFF00] transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
