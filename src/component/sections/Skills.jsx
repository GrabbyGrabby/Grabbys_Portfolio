/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import { LayersIcon } from "@radix-ui/react-icons";
import { skillCategories } from "../../constants/data";
import { staggerContainer, fadeInUp } from "../../utils/animation";

export default function Skills() {
  return (
    <motion.section
      id="stack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative z-10 space-y-12"
    >
      <motion.div
        variants={fadeInUp}
        className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#354F52]/20 pb-8 gap-4"
      >
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1A1C1E]">
            Technical Arsenal
          </h2>
          <p className="text-[#1A1C1E]/60 font-light">
            The tools I use to architect modern web experiences.
          </p>
        </div>
        <div className="flex items-center gap-2 text-[#354F52]">
          <LayersIcon className="w-8 h-8" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`group relative flex flex-col ${category.theme.cardBg} ${category.theme.textColor} border border-transparent rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${category.theme.iconBg} rounded-bl-full rounded-tr-3xl -z-10 transition-colors duration-500`}></div>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-black/10 text-current group-hover:bg-[#1A1C1E] group-hover:text-white transition-colors duration-500 shadow-inner">
              {category.icon}
            </div>
            <div className="space-y-3 mb-8 flex-1">
              <h3 className="text-2xl font-bold tracking-tight">{category.title}</h3>
              <p className="text-sm font-light leading-relaxed max-w-sm opacity-90">{category.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: "#1A1C1E", color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`text-xs font-semibold tracking-wide ${category.theme.pillBg} ${category.theme.textColor} px-4 py-2 rounded-full cursor-default border border-transparent shadow-sm`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}