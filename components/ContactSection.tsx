"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, PhoneCall, Calendar, Mail, MessageSquare, CheckCircle, ArrowUpRight } from "lucide-react";

const HELP_OPTIONS = [
  "Full Social Media Management",
  "Short-Form Video Editing (Reels / TikTok / Shorts)",
  "Long-Form YouTube / Documentary Editing",
  "Podcast Audio & Video Production",
  "Thumbnails & Visual Branding",
  "Ad Creatives & Motion Graphics",
  "Custom / Full Post-Production Retainer",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    helpWith: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-black overflow-hidden select-none border-t border-white/[0.08]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-14 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#CCFF00]" />
            <span className="font-body text-[10px] font-bold tracking-[0.35em] text-[#CCFF00] uppercase">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.01em] leading-tight text-white">
            Let&apos;s Work{" "}
            <span className="text-[#CCFF00]">
              Together
            </span>
          </h2>

          <p className="font-body text-xs sm:text-sm text-zinc-400 max-w-xl leading-[1.85]">
            Tell us about your project and how we can help.
          </p>
        </div>

        {/* 2-Column Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Action & Quick Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Book a Call Card */}
            <div className="relative p-8 sm:p-9 rounded-2xl bg-[#0a0a0a] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]">
                  <Calendar className="w-5 h-5 stroke-[2]" />
                </div>

                <div className="space-y-2 pt-1">
                  <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide uppercase">
                    Book A Call
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-zinc-400 leading-[1.85]">
                    Skip the form and schedule a direct 15-minute video call with our production directors.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-btn-primary font-body w-full py-4 px-6 rounded-full text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-3 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-black stroke-[2.5]" />
                  <span>BOOK A CALL</span>
                  <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Direct Channels Bar */}
            <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-black border border-white/[0.06]">
                <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-body font-bold text-zinc-500 uppercase tracking-wider">Email Us</div>
                  <div className="text-xs font-body text-zinc-200 truncate">hello@editorsstreet.com</div>
                </div>
              </div>

              <a
                href="https://wa.me/12393732623"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-black border border-white/[0.06] hover:border-[#CCFF00]/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/10 group-hover:bg-[#CCFF00] group-hover:text-black flex items-center justify-center text-[#CCFF00] shrink-0 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-body font-bold text-zinc-500 uppercase tracking-wider group-hover:text-[#CCFF00] transition-colors">WhatsApp</div>
                  <div className="text-xs font-body text-zinc-200 truncate">+1 (239) 373-2623</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0a0a] border border-white/[0.08]">
              {formState === "success" ? (
                <div className="py-16 text-center space-y-6">
                  <CheckCircle className="w-14 h-14 text-[#CCFF00] mx-auto" />
                  <h3 className="font-heading text-3xl sm:text-4xl text-white uppercase">
                    Message Received
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Thank you! Our team will review your inquiry and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setForm({ name: "", email: "", whatsapp: "", company: "", helpWith: "", message: "" });
                    }}
                    className="font-body text-xs font-bold text-[#CCFF00] border border-[#CCFF00]/30 hover:bg-[#CCFF00]/10 px-6 py-3 rounded-full uppercase tracking-wider transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-body text-xs font-bold text-zinc-300 uppercase tracking-wider">
                        Name *
                      </label>
                      <div
                        className={`relative rounded-xl bg-black border transition-all duration-200 ${
                          focused === "name"
                            ? "border-[#CCFF00]"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          placeholder="Alex Morgan"
                          className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-sm placeholder:text-zinc-500 outline-none cyber-input"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-body text-xs font-bold text-zinc-300 uppercase tracking-wider">
                        Email *
                      </label>
                      <div
                        className={`relative rounded-xl bg-black border transition-all duration-200 ${
                          focused === "email"
                            ? "border-[#CCFF00]"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-sm placeholder:text-zinc-500 outline-none cyber-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-body text-xs font-bold text-zinc-300 uppercase tracking-wider">
                        WhatsApp / Phone
                      </label>
                      <div
                        className={`relative rounded-xl bg-black border transition-all duration-200 ${
                          focused === "whatsapp"
                            ? "border-[#CCFF00]"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <input
                          type="tel"
                          name="whatsapp"
                          value={form.whatsapp}
                          onChange={handleChange}
                          onFocus={() => setFocused("whatsapp")}
                          onBlur={() => setFocused(null)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-sm placeholder:text-zinc-500 outline-none cyber-input"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-body text-xs font-bold text-zinc-300 uppercase tracking-wider">
                        Company / Channel
                      </label>
                      <div
                        className={`relative rounded-xl bg-black border transition-all duration-200 ${
                          focused === "company"
                            ? "border-[#CCFF00]"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          onFocus={() => setFocused("company")}
                          onBlur={() => setFocused(null)}
                          placeholder="Brand or Channel Name"
                          className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-sm placeholder:text-zinc-500 outline-none cyber-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div className="space-y-2">
                    <label className="font-body text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      How Can We Help? *
                    </label>
                    <div
                      className={`relative rounded-xl bg-black border transition-all duration-200 ${
                        focused === "helpWith"
                          ? "border-[#CCFF00]"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <select
                        name="helpWith"
                        required
                        value={form.helpWith}
                        onChange={handleChange}
                        onFocus={() => setFocused("helpWith")}
                        onBlur={() => setFocused(null)}
                        className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-sm outline-none appearance-none cursor-pointer cyber-select"
                      >
                        <option value="" disabled className="bg-black text-zinc-400">
                          Select a service / scope...
                        </option>
                        {HELP_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-black text-white py-2">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="font-body text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Project Details
                    </label>
                    <div
                      className={`relative rounded-xl bg-black border transition-all duration-200 ${
                        focused === "message"
                          ? "border-[#CCFF00]"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <textarea
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell us about your project, goals, or timeline..."
                        className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-sm placeholder:text-zinc-500 outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="luxury-btn-primary font-body group px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-2.5 transition-all"
                    >
                      {formState === "submitting" ? (
                        <>
                          <span className="w-3.5 h-3.5 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-4 h-4 text-black stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <span className="font-body text-[11px] text-zinc-500">
                      Or book a call directly on the left
                    </span>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
