import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorSpotlight from "@/components/ui/CursorSpotlight";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EndToEndSection from "@/components/sections/EndToEndSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="w-full">
      <CursorSpotlight />
      <Navbar />

      {/* The scroll experience as requested */}
      <HeroSection />
      {/* Marquee is inside HeroSection */}
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <EndToEndSection />
      <ProcessSection />
      <SkillsSection />
      <EducationSection />
      <WhyChooseSection />
      <FaqSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
