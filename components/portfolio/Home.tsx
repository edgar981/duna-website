"use client";
import GridBackground from "@/components/portfolio/GridBackground";
import SystemTicker from "@/components/portfolio/SystemTicker";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import SectionDivider from "@/components/portfolio/SectionDivider";
import SolutionMatrix from "@/components/portfolio/SolutionMatrix";
import LogicFlow from "@/components/portfolio/LogicFlow";
import AboutSection from "@/components/portfolio/AboutSection";
import PrecisionInquiry from "@/components/portfolio/PrecisionInquiry";
import KineticFooter from "@/components/portfolio/PageFooter";

const HERO_IMAGE: string =
  "https://media.base44.com/images/public/69e15e7507bf7c5ca7f49a69/b12c4dbe7_generated_image.png";

const PROJECT_IMAGES: string[] = [
  "https://media.base44.com/images/public/69e15e7507bf7c5ca7f49a69/10f7fb457_generated_image.png",
  "https://media.base44.com/images/public/69e15e7507bf7c5ca7f49a69/5d0c1e075_generated_image.png",
  "https://media.base44.com/images/public/69e15e7507bf7c5ca7f49a69/879945645_generated_image.png",
  "https://media.base44.com/images/public/69e15e7507bf7c5ca7f49a69/353d64b8b_generated_image.png",
  "https://media.base44.com/images/public/69e15e7507bf7c5ca7f49a69/31c013f59_generated_image.png",
  "https://media.base44.com/images/public/69e15e7507bf7c5ca7f49a69/678069f8f_generated_image.png",
];

export default function Home() {
  return (
    <GridBackground className="min-h-screen">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />

      <SectionDivider label="Soluciones" id="solutions" />
      <SolutionMatrix projectImages={PROJECT_IMAGES} />

      <SectionDivider label="Cómo" id="process" />
      <LogicFlow />

      <SectionDivider label="Nosotros" id="about" />
      <AboutSection />

      <SectionDivider label="Contacto" id="contact" />
      <PrecisionInquiry />

      <KineticFooter />
    </GridBackground>
  );
}