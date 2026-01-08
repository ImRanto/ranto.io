import HeroSection from "../components/HeroSection";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/project-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
