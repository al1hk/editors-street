"use client";

import React, { useState } from "react";
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
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-black border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Logo Section */}
        <div className="relative flex items-center justify-between md:justify-center pt-5 sm:pt-7 pb-3 sm:pb-4 bg-black">
          {/* Centered Non-Clickable Logo */}
          <div className="flex items-center justify-center select-none pointer-events-none">
            <img
              src="/assets/image03.gif"
              alt="Editors Street Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-w-[80vw] sm:max-w-[540px] object-contain select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#CCFF00] focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links + Inline "Book a Call" Button */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center justify-center pb-4 pt-2.5 border-t border-white/[0.07] bg-black"
        >
          <ul className="flex items-center space-x-1 lg:space-x-3.5 xl:space-x-5">
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
                    className="group relative px-3.5 lg:px-4 py-2 text-xs lg:text-[13px] font-bold tracking-[0.16em] uppercase transition-all duration-200"
                  >
                    {/* Cyber Glitch Text on Hover */}
                    <span
                      className={`nav-glitch-link ${
                        isActive ? "text-[#CCFF00] font-extrabold" : "text-white/90"
                      }`}
                      data-text={item.name}
                    >
                      {item.name}
                    </span>

                    {/* Animated Neon Lime Underline */}
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#CCFF00] rounded-full transition-all duration-300 ${
                        isActive || isHovered
                          ? "opacity-100 scale-x-100 shadow-[0_0_12px_#CCFF00]"
                          : "opacity-0 scale-x-0"
                      }`}
                    />
                  </a>

                  {/* Divider slash between items */}
                  {index < NAV_ITEMS.length - 1 && (
                    <span className="text-white/15 text-xs select-none pointer-events-none ml-1 lg:ml-2">
                      /
                    </span>
                  )}
                </li>
              );
            })}

            {/* Divider pipe before Book a Call */}
            <li className="pl-1 lg:pl-3 flex items-center">
              <span className="text-white/25 text-xs select-none pointer-events-none mr-3 lg:mr-4">
                |
              </span>

              {/* Inline "BOOK A CALL" Glitch Button */}
              <a
                href="#contact"
                className="glitch-btn-master group px-4 lg:px-5 py-2 lg:py-2.5 text-[11px] lg:text-xs font-black tracking-[0.16em] uppercase flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 fill-black stroke-black shrink-0 transition-transform duration-200 group-hover:rotate-12" />
                <span className="btn-glitch-text" data-text="BOOK A CALL">
                  BOOK A CALL
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[calc(4.5rem+1px)] bottom-0 bg-black/98 backdrop-blur-2xl border-t border-white/10 z-50 flex flex-col justify-between p-6 animate-in slide-in-from-top duration-300">
          <ul className="space-y-3 divide-y divide-white/5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem.toLowerCase() === item.name.toLowerCase();
              return (
                <li key={item.name} className="pt-3">
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between text-base font-bold tracking-wider uppercase transition-colors ${
                      isActive ? "text-[#CCFF00]" : "text-white hover:text-[#CCFF00]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
                      )}
                      <span className="nav-glitch-link" data-text={item.name}>
                        {item.name}
                      </span>
                    </div>
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
              <div className="text-[11px] font-mono text-[#CCFF00]">
                EDITORS STREET // PREMIER POST-PRODUCTION
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
