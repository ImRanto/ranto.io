import HeroSection from "../components/HeroSection";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/project-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div >
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  );
}
