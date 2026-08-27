import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import OurWorkSection from "@/components/OurWorkSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResultsSection from "@/components/ResultsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative selection:bg-[#CCFF00] selection:text-black">
      {/* 
        =========================================================
        ATMOSPHERIC LIME GREEN COLOR GRADING ACROSS ENTIRE WEBSITE
        =========================================================
      */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ willChange: 'transform' }}>
        {/* Top-Left Ambient Lime Beam */}
        <div className="absolute -top-40 -left-40 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] bg-[#CCFF00]/[0.045] rounded-full blur-[120px]" />

        {/* Mid-Right Color Grade Spotlight */}
        <div className="absolute top-[35%] -right-40 w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] bg-[#CCFF00]/[0.035] rounded-full blur-[110px]" />

        {/* Deep Olive Tone Wash in Center */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[600px] bg-[#142614]/25 rounded-full blur-[130px]" />

        {/* Bottom-Left Ambient Green Flare */}
        <div className="absolute -bottom-32 -left-32 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] bg-[#CCFF00]/[0.035] rounded-full blur-[120px]" />
      </div>

      {/* Futuristic Custom Cyber Cursor with Particle Trail */}
      <CustomCursor />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <OurWorkSection />
        <ClientsSection />
        <ResultsSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
