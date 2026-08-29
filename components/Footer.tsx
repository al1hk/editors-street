"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

// Clean custom SVG icons for social platforms
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const NAV_LINKS = [
    { name: "Our Work", href: "#our-work" },
    { name: "Services", href: "#services" },
    { name: "Our Team", href: "#our-team" },
    { name: "About Us", href: "#about-us" },
    { name: "Contact", href: "#contact" },
  ];

  const SOCIAL_LINKS = [
    { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    { name: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
    { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/[0.08] select-none">
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-12 space-y-14">
        
        {/* Top & Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Brand Column (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00]" />
              <span className="font-heading text-2xl sm:text-3xl tracking-wide text-white uppercase">
                Editors Street
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Social Media &amp; Content Agency
            </p>

            <p className="font-body text-xs text-zinc-500 max-w-sm leading-relaxed">
              Helping creators, businesses, and brands produce and scale high-impact content across social media.
            </p>
          </div>

          {/* Navigation Links Column (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-body text-xs font-bold text-[#CCFF00] tracking-[0.2em] uppercase">
              Navigation
            </h4>

            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-xs text-zinc-400 hover:text-[#CCFF00] tracking-wider uppercase transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-[#CCFF00] transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Back to Top (3 Cols) */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <h4 className="font-body text-xs font-bold text-[#CCFF00] tracking-[0.2em] uppercase">
                Connect
              </h4>

              <div className="flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <React.Fragment key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-xs text-zinc-400 hover:text-[#CCFF00] tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors group"
                      >
                        <Icon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#CCFF00] transition-colors" />
                        {social.name}
                      </a>
                      {idx < SOCIAL_LINKS.length - 1 && (
                        <span className="text-zinc-700 select-none">·</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="group px-4 py-2.5 rounded-full border border-white/10 hover:border-[#CCFF00] bg-[#0a0a0a] hover:bg-[#CCFF00]/10 transition-all duration-200 inline-flex items-center gap-2 text-xs font-body text-zinc-400 hover:text-white"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#CCFF00] group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Large Architectural Watermark */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col items-center">
          <div className="w-full text-center overflow-hidden py-2">
            <span className="font-heading text-4xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight uppercase text-white/[0.04] block select-none pointer-events-none leading-none">
              EDITORS STREET
            </span>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-body text-zinc-500">
            <p>© 2026 Editors Street. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
