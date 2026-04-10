// src/App.jsx
import React from "react";
import useSmoothScroll  from "../src/hooks/useSmoothScroll"
import Hero from "./component/sections/Hero";
import Skills from "./component/sections/Skills";
import Work from "./component/sections/Work";
import Contact from "./component/sections/Contact";
import Navigation from "../src/component/ui/Navigation";
import Footer from "../src/component/ui/Footer";
export default function App() {
  // Initialize lenis smooth scrolling globally
  useSmoothScroll();


  return (
    <div
      className="bg-[#CAD2C5] text-[#1A1C1E] min-h-screen overflow-x-hidden selection:bg-[#354F52] selection:text-white pb-20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Navigation />

      <main className="pt-32 px-2 max-w-6xl mx-auto space-y-40">
        <Hero />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}