"use client";

import { useScroll, motion } from "framer-motion";
import CursorGlow from "@/components/CursorGlow";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress" 
        style={{ scaleX: scrollYProgress }} 
      />
      
      {/* Core theme/visual controls */}
      <CursorGlow />
      <ThemeToggle />

      {/* Sections layout with horizontal dividers */}
      <div className="flex flex-col">
        <Hero />
        
        <div className="w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-card-border to-transparent" />
        <About />
        
        <div className="w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-card-border to-transparent" />
        <Skills />
        
        <div className="w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-card-border to-transparent" />
        <Projects />
        
        <div className="w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-card-border to-transparent" />
        <Experience />
        
        <div className="w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-card-border to-transparent" />
        <Education />
        
        <div className="w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-card-border to-transparent" />
        <Achievements />
        
        <div className="w-[80%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-card-border to-transparent" />
        <Contact />
        
        <Footer />
      </div>
    </main>
  );
}
