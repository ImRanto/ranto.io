import ModifierNom from "@/components/ModifierNom";
import HeroSection from "../components/HeroSection";
import Tech from "./components/Tech";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/project-section";

export default function Home() {
  return (
    <div >
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
    </div>
  );
}
