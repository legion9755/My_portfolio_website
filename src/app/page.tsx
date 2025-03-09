import { HeroSection } from "@/sections/Hero";
import { Header } from "../sections/Header"
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection /> 
      <AboutSection />
    </div>
  );
}
