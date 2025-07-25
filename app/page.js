'use client'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative min-h-screen bg-contain bg-no-repeat">
      <Navbar />  
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>

  );
}
