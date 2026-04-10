import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import TelegramIcon from "../icons/TelegramIcon";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-[#354F52]/20 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <span className="font-bold text-xl tracking-tighter text-[#1A1C1E]">
            SJ.
          </span>
          <p className="text-sm text-[#1A1C1E]/60 font-light">
            © 2024 Shivaji Jadhav. Engineering interfaces that move the web.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-medium text-sm text-[#1A1C1E]/80">
          <a href="https://github.com/GrabbyGrabby" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#354F52] transition-colors">
            <GitHubLogoIcon /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/shivaji-jadhav-003b1733b" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#354F52] transition-colors">
            <LinkedInLogoIcon /> LinkedIn
          </a>
          <a href="https://t.me/GrabClips" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#354F52] transition-colors">
            <TelegramIcon className="w-4 h-4" /> Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}