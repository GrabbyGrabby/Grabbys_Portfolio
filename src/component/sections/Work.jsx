/* eslint-disable no-unused-vars */
import React from "react";
import {
  ArrowRightIcon,
  MixIcon,
  GitHubLogoIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { projects } from "../../constants/data";
import { staggerContainer, fadeInUp } from "../../utils/animation";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="space-y-12 relative z-10"
    >
      <motion.div
        variants={fadeInUp}
        className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#354F52]/20 pb-8 gap-4"
      >
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1A1C1E]">
            Selected Works
          </h2>
          <p className="text-[#1A1C1E]/60 font-light">
            Bespoke digital experiences built with precision.
          </p>
        </div>
        <a
          href="https://github.com/GrabbyGrabby"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-[#354F52] flex items-center gap-2 hover:gap-4 transition-all group pb-2"
        >
          View full archive{" "}
          <ArrowRightIcon className="w-4 h-4 group-hover:text-[#354F52] transition-colors" />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div variants={fadeInUp} key={i} className="group block">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              /* Outer Card: Slate 800 */
              className="relative flex flex-col bg-slate-800 border border-slate-700 rounded-3xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all h-full"
            >
              {/* Inner Image Container: Slate 600 (Mist) */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative flex items-center justify-center bg-slate-600">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <MixIcon className="w-20 h-20 text-white opacity-90 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-sm" />
                </motion.div>
                
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-800/80 backdrop-blur-sm text-white hover:bg-slate-900 transition-colors duration-300 shadow-inner"
                  >
                    <GitHubLogoIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-800/80 backdrop-blur-sm text-white hover:bg-slate-900 transition-colors duration-300 shadow-inner"
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="px-3 pb-3 space-y-3 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  {/* Text inverted to white for dark slate background */}
                  <h3 className="font-semibold text-xl text-white tracking-tight">
                    {project.title}
                  </h3>
                  {/* Badge matching the dark theme */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white px-2 py-1 bg-slate-900 rounded-md">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-sm text-white/80 font-light flex-1">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#ffffff",
                        color: "#0f172a", // slate-900 text on hover
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="text-[10px] font-medium tracking-wide bg-slate-700 px-3 py-1.5 rounded-full text-white cursor-default transition-colors border border-transparent shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}