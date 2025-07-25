import React from "react";
import Navbar from "./Navbar";
import TypewriterClient from "../components/ui/TypewriterClient";
import { Link } from "lucide-react";

function Hero() {
  return (
    <div className="relative h-screen w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-slate-900 opacity-40"></div>
      <section className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center bg-transparent">
        <div className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-3xl p-10 md:p-16 max-w-5xl w-full shadow-2xl transition-all duration-300">
          <h1 className="text-6xl md:text-6xl font-extrabold text-gray-100 mb-6 leading-tight drop-shadow-lg">
            Hi, I'm <span className="text-blue-500">Sumit Bansode</span>
          </h1>

          <div className="text-lg md:text-2xl font-medium text-slate-300 mb-10 max-w-3xl mx-auto drop-shadow-sm">
            <TypewriterClient />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-md transition duration-300"
            >
              Contact Me
            </Link>
            <a
              href="https://drive.google.com/file/d/16FDCfrToqxrCFqs7HRkV0keNQ0Ep5PhP/view?usp=sharing" target="_blank"
              className="border border-gray-400 hover:bg-white hover:text-black text-gray-200 font-semibold px-8 py-4 rounded-xl transition duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
