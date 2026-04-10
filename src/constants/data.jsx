import React from "react";
import {
  CodeIcon,
  MagicWandIcon,
  BoxModelIcon,
  CubeIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";

export const projects = [
  {
    title: "Cloud PMS",
    year: "2024",
    stack: ["React", "Tailwind", "Next.js"],
    desc: "Cloud Based property management system designed for seamless operations.",
    link: "https://xpress-pms-by-grabby.vercel.app",
    repo: "https://github.com/GrabbyGrabby/XpressPMS",
  },
  {
    title: "Spotify Clone",
    year: "2023",
    stack: ["React", "Tailwind"],
    desc: "A high-fidelity minimalist replica of the Spotify web interface.",
    link: "https://spotify-clone-by-grabby.vercel.app",
    repo: "https://github.com/GrabbyGrabby/Spotify-Clone-",
  },
  {
    title: "Demo PMS",
    year: "2024",
    stack: ["React", "Tailwind", "Next.js"],
    desc: "Interactive spatial computing environment and dashboard concept.",
    link: "https://demopms-grabby.vercel.app",
    repo: "https://github.com/GrabbyGrabby/Hotel-PMS-Demo",
  },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces with modern JavaScript.",
    icon: <CodeIcon className="w-6 h-6" />,
    skills: ["React", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
    theme: {
      cardBg: "bg-[#A2C3A4]",
      textColor: "text-[#1A1C1E]",
      pillBg: "bg-[#E6F4E6]",
      iconBg: "bg-[#CAD2C5]/30",
    },
  },
  {
    title: "UI/UX Design",
    desc: "Designing visually appealing layouts and seamless user experiences.",
    icon: <MagicWandIcon className="w-6 h-6" />,
    skills: ["Figma", "Tailwind CSS", "CSS3"],
    theme: {
      cardBg: "bg-[#354F52]",
      textColor: "text-white",
      pillBg: "bg-[#6F7F7F]",
      iconBg: "bg-white/10",
    },
  },
  {
    title: "State Management",
    desc: "Managing application state efficiently.",
    icon: <BoxModelIcon className="w-6 h-6" />,
    skills: ["Redux", "Context API", "React Toolkit"],
    theme: {
      cardBg: "bg-[#354F52]",
      textColor: "text-white",
      pillBg: "bg-[#6F7F7F]",
      iconBg: "bg-white/10",
    },
  },
  {
    title: "Build Tools",
    desc: "Streamlining development workflows.",
    icon: <CubeIcon className="w-6 h-6" />,
    skills: ["Webpack", "Vite"],
    theme: {
      cardBg: "bg-[#A2C3A4]",
      textColor: "text-[#1A1C1E]",
      pillBg: "bg-[#E6F4E6]",
      iconBg: "bg-[#CAD2C5]/30",
    },
  },
  {
    title: "Version Control",
    desc: "Collaborating and managing code architecture.",
    icon: <UpdateIcon className="w-6 h-6" />,
    skills: ["Git", "GitHub", "GitLab"],
    theme: {
      cardBg: "bg-[#354F52]",
      textColor: "text-white",
      pillBg: "bg-[#6F7F7F]",
      iconBg: "bg-white/10",
    },
  },
];