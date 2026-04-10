/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import TelegramIcon from "../icons/TelegramIcon";
import { staggerContainer, fadeInUp } from "../../utils/animation";

export default function Contact() {
  const links = [
    { icon: EnvelopeClosedIcon, title: "Inquiries", desc: "thedeadcurse@gmail.com", link: "mailto:thedeadcurse@gmail.com" },
    { icon: TelegramIcon, title: "Telegram", desc: "Chat with me instantly.", link: "https://t.me/GrabClips" },
    { icon: GitHubLogoIcon, title: "Source", desc: "Explore experiments.", link: "https://github.com/GrabbyGrabby" },
    { icon: LinkedInLogoIcon, title: "Network", desc: "Professional history.", link: "https://www.linkedin.com/in/shivaji-jadhav-003b1733b" },
  ];

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10 relative"
    >
      {links.map((item, i) => (
        <motion.a
          variants={fadeInUp}
          key={i}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -5, scale: 1.02 }}
          className="group p-8 bg-[#1A1C1E] border border-white/10 rounded-3xl flex flex-col justify-between aspect-auto md:aspect-square text-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:border-[#354F52] transition-all"
        >
          <div className="flex justify-between items-start mb-12 md:mb-0">
            <item.icon className="w-8 h-8 group-hover:text-[#A2C3A4] transition-colors duration-500" />
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#A2C3A4] group-hover:text-[#1A1C1E] transition-colors">
              <ExternalLinkIcon className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold tracking-tight mb-2">{item.title}</h4>
            <p className="opacity-60 text-sm font-light truncate">{item.desc}</p>
          </div>
        </motion.a>
      ))}
    </motion.section>
  );
}