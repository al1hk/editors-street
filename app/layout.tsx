import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-heading",
  weight: "400", // Archivo Black only has weight 400 (it IS the black weight)
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Editors Street | Premier Post-Production & Video Editing Studio",
  description: "High-impact video editing, color grading, sound design, and motion graphics for creators, commercial brands, and filmmakers.",
  keywords: ["Video Editing", "Post-Production", "Color Grading", "Editors Street", "Motion Graphics", "Showreel"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0C0E] text-white selection:bg-[#CCFF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
