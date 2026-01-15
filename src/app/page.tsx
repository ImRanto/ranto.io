import HeroSection from "../components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/FooterSection";
import Navbar from "@/components/NavbarSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import ProfilePopup from "@/components/ProfilePopup";
import PhilosophySection from "@/components/PhylosophySection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <ProfilePopup />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
