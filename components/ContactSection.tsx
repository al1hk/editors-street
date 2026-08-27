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
      className="relative py-28 sm:py-40 bg-black overflow-hidden select-none border-t border-white/[0.06]"
    >
      {/* Background Cyber Matrix Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Atmospheric Neon Shading */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#CCFF00]/[0.035] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[550px] h-[550px] bg-[#CCFF00]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#142614]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-14 sm:space-y-18">
        
        {/* Section Header (Clean, No Pills, Bold Architectural Typography) */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-[-0.03em] leading-[0.98] text-white">
            <span className="cyber-glitch-loop" data-text="Let's Work Together">
              Let&apos;s Work{" "}
              <span className="text-[#CCFF00] drop-shadow-[0_0_45px_rgba(204,255,0,0.45)]">
                Together
              </span>
            </span>
          </h2>

          <p className="font-body text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed pt-2">
            Tell us about your project and how we can help.
          </p>
        </div>

        {/* 2-Column Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Direct Action & Quick Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Book a Call VIP Card */}
            <div className="relative p-8 sm:p-9 rounded-3xl bg-[#080d09] border border-[#CCFF00]/30 hover:border-[#CCFF00]/70 transition-all duration-400 shadow-[0_16px_50px_rgba(0,0,0,0.85),inset_0_0_30px_rgba(204,255,0,0.03)] group overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#CCFF00]/20 transition-all" />
              
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                  <Calendar className="w-6 h-6 stroke-[2]" />
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide uppercase">
                    Book A Call
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Skip the form and schedule a direct 15-minute video call with our production directors.
                  </p>
                </div>
              </div>

              <div className="pt-6 relative z-10">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glitch-btn-master group/btn w-full py-4 px-6 rounded-full text-xs font-bold tracking-[0.22em] uppercase flex items-center justify-center gap-3 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-black stroke-[2.5]" />
                  <span className="btn-glitch-text" data-text="BOOK A CALL">
                    BOOK A CALL
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Direct Channels Bar */}
            <div className="p-6 rounded-3xl bg-[#080a09] border border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-[#CCFF00]/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-ui font-bold text-zinc-400 uppercase tracking-wider">Email Us</div>
                  <div className="text-xs font-body text-white truncate">hello@editorsstreet.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-[#CCFF00]/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00] shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-ui font-bold text-zinc-400 uppercase tracking-wider">WhatsApp</div>
                  <div className="text-xs font-body text-white truncate">Direct Client Desk</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#080a09] border border-white/[0.08] shadow-[0_16px_50px_rgba(0,0,0,0.9)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent" />

              {formState === "success" ? (
                <div className="py-16 text-center space-y-6">
                  <CheckCircle className="w-16 h-16 text-[#CCFF00] mx-auto drop-shadow-[0_0_25px_rgba(204,255,0,0.7)]" />
                  <h3 className="font-heading text-3xl sm:text-4xl text-white uppercase">
                    Message Received
                  </h3>
                  <p className="font-body text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Thank you! Our creative directors will review your inquiry and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setForm({ name: "", email: "", whatsapp: "", company: "", helpWith: "", message: "" });
                    }}
                    className="font-ui text-xs font-bold text-[#CCFF00] border border-[#CCFF00]/40 hover:bg-[#CCFF00]/10 px-7 py-3 rounded-full uppercase tracking-widest transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-ui text-xs font-bold text-zinc-300 uppercase tracking-wider">
                        Name *
                      </label>
                      <div
                        className={`relative rounded-xl border transition-all duration-300 ${
                          focused === "name"
                            ? "border-[#CCFF00] bg-[#CCFF00]/[0.03] shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20"
                        }`}
                      >
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          placeholder="Your name"
                          required
                          className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-[13px] placeholder:text-zinc-500 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-ui text-xs font-bold text-zinc-300 uppercase tracking-wider">
                        Email *
                      </label>
                      <div
                        className={`relative rounded-xl border transition-all duration-300 ${
                          focused === "email"
                            ? "border-[#CCFF00] bg-[#CCFF00]/[0.03] shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20"
                        }`}
                      >
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          placeholder="your@email.com"
                          required
                          className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-[13px] placeholder:text-zinc-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp & Company / Social Media */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-ui text-xs font-bold text-zinc-300 uppercase tracking-wider">
                        WhatsApp
                      </label>
                      <div
                        className={`relative rounded-xl border transition-all duration-300 ${
                          focused === "whatsapp"
                            ? "border-[#CCFF00] bg-[#CCFF00]/[0.03] shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20"
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
                          className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-[13px] placeholder:text-zinc-500 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-ui text-xs font-bold text-zinc-300 uppercase tracking-wider">
                        Company / Social Media
                      </label>
                      <div
                        className={`relative rounded-xl border transition-all duration-300 ${
                          focused === "company"
                            ? "border-[#CCFF00] bg-[#CCFF00]/[0.03] shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20"
                        }`}
                      >
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          onFocus={() => setFocused("company")}
                          onBlur={() => setFocused(null)}
                          placeholder="Company name or @handle"
                          className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-[13px] placeholder:text-zinc-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* What do you need help with? */}
                  <div className="space-y-2">
                    <label className="font-ui text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      What do you need help with? *
                    </label>
                    <div
                      className={`relative rounded-xl border transition-all duration-300 ${
                        focused === "helpWith"
                          ? "border-[#CCFF00] bg-[#CCFF00]/[0.03] shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      <select
                        name="helpWith"
                        value={form.helpWith}
                        onChange={handleChange}
                        onFocus={() => setFocused("helpWith")}
                        onBlur={() => setFocused(null)}
                        required
                        className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-[13px] outline-none cyber-select appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#080a09] text-zinc-400">
                          Select the scope of your project...
                        </option>
                        {HELP_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#080a09] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="font-ui text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Tell us about your project
                    </label>
                    <div
                      className={`relative rounded-xl border transition-all duration-300 ${
                        focused === "message"
                          ? "border-[#CCFF00] bg-[#CCFF00]/[0.03] shadow-[0_0_15px_rgba(204,255,0,0.15)]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        rows={4}
                        placeholder="Tell us about your project, goals, or timeline..."
                        className="w-full px-4 py-3.5 bg-transparent text-white font-body text-xs sm:text-[13px] placeholder:text-zinc-500 outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Action Row with SEND MESSAGE button and alternative OR prompt */}
                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="glitch-btn-master group px-10 py-4 rounded-full text-xs font-bold tracking-[0.22em] uppercase flex items-center justify-center gap-3 transition-all"
                    >
                      {formState === "submitting" ? (
                        <>
                          <span className="w-3.5 h-3.5 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                          <span className="btn-glitch-text" data-text="SENDING...">
                            SENDING...
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="btn-glitch-text" data-text="SEND MESSAGE">
                            SEND MESSAGE
                          </span>
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
