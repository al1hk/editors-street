import type { Metadata } from "next";
import { Unbounded, Space_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Editors Street | Post-Production & Video Editing Agency",
  description: "High-impact video editing, color grading, sound design, and motion graphics for creators, commercial brands, and businesses.",
  keywords: ["Video Editing", "Post-Production", "Color Grading", "Editors Street", "Motion Graphics", "Content Agency"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${spaceMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-body selection:bg-[#CCFF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
