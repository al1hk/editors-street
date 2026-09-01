"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoItem {
  id: string;
  title: string;
  image: string;
  metrics: string;
  url?: string;
  video?: string;
  tag?: string;
}

const LONG_FORM_DATA: VideoItem[] = [
  {
    id: "long-1",
    title: "LONG FORM PRODUCTION // 01",
    image: "https://img.youtube.com/vi/ZAW7F4lg848/hqdefault.jpg",
    url: "https://youtu.be/ZAW7F4lg848?si=CVUVRMAoAsfIAy2q",
    metrics: "Narrative pacing, archival research, cinematic grade & master sound.",
  },
  {
    id: "long-2",
    title: "LONG FORM PRODUCTION // 02",
    image: "https://img.youtube.com/vi/G5qiktcrB8k/hqdefault.jpg",
    url: "https://youtu.be/G5qiktcrB8k?si=se5509hzW-yDDchU",
    metrics: "Multicam editing, dynamic typography, retention hooks & sound design.",
  },
  {
    id: "long-3",
    title: "LONG FORM PRODUCTION // 03",
    image: "https://img.youtube.com/vi/y7MeLsFJCAE/hqdefault.jpg",
    url: "https://youtu.be/y7MeLsFJCAE?si=09304DbNZiVdmIEP",
    metrics: "Documentary storytelling, color grade & master audio delivery.",
  },
];

const REAL_ESTATE_DATA: VideoItem[] = [
  {
    id: "re-1",
    title: "Real Estate 01",
    image: "/assets/hero/clip2.jpg",
    video: "/assets/compressed/Aislinn Phelan v.3.mp4",
    metrics: "",
  },
  {
    id: "re-2",
    title: "Real Estate 02",
    image: "/assets/hero/clip3.jpg",
    video: "/assets/compressed/Chantal v.1.mp4",
    metrics: "",
  },
  {
    id: "re-3",
    title: "Real Estate 03",
    image: "/assets/hero/clip4.jpg",
    video: "/assets/compressed/Natalie v.2.mp4",
    metrics: "",
  },
];

export default function OurWorkSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lock body scroll and hide navbar when modal is open
  useEffect(() => {
    const navbar = document.querySelector("header") as HTMLElement | null;
    if (activeVideo) {
      document.body.style.overflow = "hidden";
      if (navbar) navbar.style.display = "none";
    } else {
      document.body.style.overflow = "";
      if (navbar) navbar.style.display = "";
    }
    return () => {
      document.body.style.overflow = "";
      if (navbar) navbar.style.display = "";
    };
  }, [activeVideo]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
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
          </div>

          {/* ============================
              LONG FORM — WIDESCREEN
             ============================ */}
          <div className="space-y-8">
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
                    </a>
                  </motion.div>
                ))}
              </div>
          </div>

          {/* ============================
              REAL ESTATE VIDEOS — VERTICAL GRID
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {REAL_ESTATE_DATA.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="group relative cursor-pointer"
                  onClick={() => {
                    if (item.video) setActiveVideo(item.video);
                  }}
                >
                  {/* Vertical 9:16 Video Thumbnail Container */}
                  <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-[#CCFF00]/60 transition-all duration-300 shadow-2xl">
                    <video
                      src={item.video}
                      muted
                      playsInline
                      disablePictureInPicture
                      preload="metadata"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.04]"
                      onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                      onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-14 h-14 rounded-full bg-black/80 border-2 border-[#CCFF00]/40 flex items-center justify-center text-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                        <Play className="w-5 h-5 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          VIDEO PLAYER MODAL
         ============================ */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all duration-200"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Container - vertical (9:16) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                src={activeVideo}
                autoPlay
                controls
                playsInline
                disablePictureInPicture
                controlsList="nodownload noplaybackrate nopictureinpicture"
                className="w-full h-full object-cover bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}