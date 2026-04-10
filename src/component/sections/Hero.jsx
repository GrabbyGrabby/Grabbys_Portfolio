/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Scene from "../3D/Scene";
import ModernStatusBadge from "../ui/ModernStatusBadge";
import { staggerContainer, fadeInUp } from "../../utils/animation";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[85vh]">
      <div className="absolute inset-0 z-0 pointer-events-auto flex items-center justify-center md:justify-end ">
        <div className="w-[75vw] h-[75vw] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]">
          <Scene />
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-2xl space-y-8 pointer-events-none mt-10 md:mt-0"
      >
        <ModernStatusBadge />

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] text-[#1A1C1E] block w-full text-left bg-white/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl p-2 md:p-0"
        >
          SHIVAJI <br />
          <span className="text-[#1A1C1E]">JADHAV.</span>
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-[#1A1C1E]/80 w-full leading-relaxed font-light backdrop-blur-md bg-white/40 p-4 rounded-xl border border-white/50 shadow-sm"
        >
          Aspiring Web Developer combining technical precision with creative
          flair using React, Tailwind, Next.js, and Three.js.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-6 pointer-events-auto">
          <a
            href="https://github.com/GrabbyGrabby"
            target="_blank"
            rel="noreferrer"
            className="bg-[#1A1C1E] text-white px-8 py-4 rounded-full font-medium shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <GitHubLogoIcon className="w-5 h-5" /> View GitHub
          </a>
          <a
            href="#work"
            className="bg-white/80 backdrop-blur-md text-[#1A1C1E] border border-white/40 px-8 py-4 rounded-full font-medium hover:bg-white transition-all shadow-sm"
          >
            View Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}