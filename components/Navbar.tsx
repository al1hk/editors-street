"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about-us" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#our-work" },
  { name: "Clients", href: "#clients" },
  { name: "Our Team", href: "#our-team" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-[#CCFF00]/10 shadow-[0_4px_30px_rgba(204,255,0,0.06)]"
          : "bg-black border-b border-white/[0.06]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="relative flex items-center justify-between md:justify-center pt-4 sm:pt-5 pb-2 sm:pb-3">
          {/* Glowing top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00]/50 to-transparent" />

          {/* Logo with glow backdrop */}
          <div className="flex items-center justify-center select-none pointer-events-none">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-[#CCFF00]/[0.07] rounded-full scale-125 pointer-events-none" />
              <img
                src="/assets/image03.gif"
                alt="Editors Street Logo"
                className="relative h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-w-[80vw] sm:max-w-[540px] object-contain select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-white hover:text-[#CCFF00] focus:outline-none transition-all duration-200 rounded-lg border border-white/10 hover:border-[#CCFF00]/40 hover:bg-[#CCFF00]/5"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center justify-center pb-3.5 pt-2 border-t border-white/[0.06]"
        >
          <ul className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeItem.toLowerCase() === item.name.toLowerCase();
              const isHovered = hoveredItem === item.name;

              return (
                <li
                  key={item.name}
                  className="relative flex items-center"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className="group relative px-3.5 lg:px-4 py-2 text-[11px] lg:text-[12px] font-bold tracking-[0.18em] uppercase transition-all duration-200 rounded-md hover:bg-white/[0.03]"
                  >
                    {/* Active pill background */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-md bg-[#CCFF00]/[0.07] border border-[#CCFF00]/20" />
                    )}

                    {/* Nav text */}
                    <span
                      className={`nav-glitch-link relative z-10 ${
                        isActive ? "text-[#CCFF00] font-extrabold" : "text-white/80"
                      }`}
                      data-text={item.name}
                    >
                      {item.name}
                    </span>

                    {/* Underline */}
                    <span
                      className={`absolute bottom-0.5 left-3.5 right-3.5 h-[1.5px] rounded-full transition-all duration-300 ${
                        isActive || isHovered
                          ? "bg-[#CCFF00] opacity-100 scale-x-100 shadow-[0_0_10px_#CCFF00]"
                          : "bg-[#CCFF00] opacity-0 scale-x-0"
                      }`}
                    />
                  </a>

                  {/* Slim dot divider */}
                  {index < NAV_ITEMS.length - 1 && (
                    <span className="w-[3px] h-[3px] rounded-full bg-white/15 mx-0.5 shrink-0" />
                  )}
                </li>
              );
            })}

            {/* Divider + CTA */}
            <li className="flex items-center pl-3 lg:pl-5 ml-1 border-l border-white/15">
              <a
                href="#contact"
                className="glitch-btn-master group px-4 lg:px-5 py-2 lg:py-2.5 text-[10px] lg:text-[11px] font-black tracking-[0.18em] uppercase flex items-center gap-1.5"
              >
                <PhoneCall className="w-3 h-3 fill-black stroke-black shrink-0 transition-transform duration-200 group-hover:rotate-12" />
                <span className="btn-glitch-text" data-text="BOOK A CALL">
                  BOOK A CALL
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[calc(4.5rem+1px)] bottom-0 bg-black/98 backdrop-blur-2xl border-t border-white/10 z-50 flex flex-col justify-between p-6 animate-in slide-in-from-top duration-300">
          {/* Top lime accent */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00]/50 to-transparent" />

          <ul className="space-y-1 mt-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem.toLowerCase() === item.name.toLowerCase();
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-200 ${
                      isActive
                        ? "text-[#CCFF00] bg-[#CCFF00]/[0.07] border border-[#CCFF00]/20"
                        : "text-white/80 hover:text-white hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all ${
                        isActive
                          ? "bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]"
                          : "bg-white/20"
                      }`}
                    />
                    <span className="nav-glitch-link" data-text={item.name}>
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="glitch-btn-master w-full py-3.5 text-center flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider shadow-lg shadow-[#CCFF00]/25"
            >
              <PhoneCall className="w-4 h-4 fill-black stroke-black" />
              <span className="btn-glitch-text" data-text="BOOK A CALL">
                BOOK A CALL
              </span>
            </a>

            <div className="text-center">
              <div className="text-[10px] font-mono text-[#CCFF00]/60 tracking-[0.3em]">
                ◈ &nbsp; EDITORS STREET &nbsp; ◈
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
