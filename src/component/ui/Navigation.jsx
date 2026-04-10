import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import TelegramIcon from "../icons/TelegramIcon";
  import { motion } from "framer-motion";
export default function Navigation() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-full pointer-events-auto max-w-full overflow-hidden">
        <div className="flex items-center px-4 py-3 md:px-6 overflow-x-auto no-scrollbar gap-6 md:gap-10">
          <span className="font-bold text-lg tracking-tighter text-white whitespace-nowrap">
            SJ.
          </span>
          <div className="flex items-center gap-5 text-sm font-medium text-white/70">
            <a href="#work" className="hover:text-white transition-colors whitespace-nowrap">Work</a>
            <a href="#stack" className="hover:text-white transition-colors whitespace-nowrap">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap">Contact</a>
          </div>
          <div className="flex items-center gap-4 pl-4 md:pl-6 border-l border-white/20">
            <a href="https://github.com/GrabbyGrabby" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shivaji-jadhav-003b1733b" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
              <LinkedInLogoIcon className="w-5 h-5" />
            </a>
            <a href="https://t.me/GrabClips" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
              <TelegramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}