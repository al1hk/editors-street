import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import OurWorkSection from "@/components/OurWorkSection";
import ResultsSection from "@/components/ResultsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative selection:bg-[#CCFF00] selection:text-black">
      {/* Sleek Minimal Custom Cursor */}
      <CustomCursor />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <OurWorkSection />
        <ResultsSection />
        <TeamSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
