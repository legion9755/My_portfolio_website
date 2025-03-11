import { HeroSection } from "@/sections/Hero";
import { Header } from "../sections/Header"
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection id='home'/>
      <ProjectsSection id='projects'/>
      <TapeSection /> 
      <AboutSection id='about'/>
      <ContactSection id='contact'/>
      <Footer />
    </div>
  );
}
