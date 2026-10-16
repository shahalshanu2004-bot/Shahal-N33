import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorSpotlight from "@/components/ui/CursorSpotlight";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TrackingCapabilitiesSection from "@/components/sections/TrackingCapabilitiesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="w-full">
      <CursorSpotlight />
      <Navbar />

      {/* The streamlined homepage experience */}
      <HeroSection />
      {/* Marquee is inside HeroSection */}
      <AboutSection />
      <ServicesSection />
      <StatisticsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ProcessSection />
      <SkillsSection />
      <TrackingCapabilitiesSection />
      <CertificationsSection />
      <FaqSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
