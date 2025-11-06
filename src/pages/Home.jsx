import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsCarousel } from "../components/ProjectsCarousel"; 
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import Loader from "../components/Loader";

export const Home = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader onFinish={() => setLoading(false)} />;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsCarousel />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
