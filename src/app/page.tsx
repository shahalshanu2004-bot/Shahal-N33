import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorSpotlight from "@/components/ui/CursorSpotlight";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TrackingCapabilitiesSection from "@/components/sections/TrackingCapabilitiesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";

export default function Home() {
  return (
    <main className="w-full">
      <CursorSpotlight />
      <Navbar />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Experience and Statistics */}
      <StatisticsSection />

      {/* 3. Selected Case Studies */}
      <CaseStudiesSection />

      {/* 4. Core Services */}
      <ServicesSection />

      {/* 5. Marketing Process */}
      <ProcessSection />

      {/* 6. Why Work With Shahal N. */}
      <WhyChooseSection />

      {/* 7. Tracking, Skills & Certifications */}
      <TrackingCapabilitiesSection />
      <SkillsSection />
      <CertificationsSection />

      {/* 8. Genuine Testimonials (renders nothing if array is empty) */}
      <TestimonialsSection />

      {/* 9. FAQs */}
      <FaqSection />

      {/* 10. Free Ad Account Audit & Contact */}
      <ContactSection />

      <Footer />
    </main>
  );
}
