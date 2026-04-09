/* eslint-disable react-hooks/purity */
import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  CodeIcon,
  MixIcon,
  LayersIcon,
  UpdateIcon,
  BoxModelIcon,
  MagicWandIcon,
  CubeIcon,
} from "@radix-ui/react-icons";

import Scene from "./component/Scene.jsx";

const TelegramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
  </svg>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// --- MODERN MAGNETIC STATUS BADGE COMPONENTS ---
const LiquidOrb = () => {
  const orbRef = useRef();

  useFrame(({ clock }) => {
    orbRef.current.rotation.x = clock.getElapsedTime() * 0.5;
    orbRef.current.rotation.y = clock.getElapsedTime() * 0.8;
  });

  return (
    <Sphere ref={orbRef} args={[1, 32, 32]} scale={1.4}>
      <MeshDistortMaterial
        color="#E0FFFF" // Milky light cyan base
        emissive="#008B8B" // Dark cyan glow
        emissiveIntensity={0.6}
        distort={0.4}
        speed={4}
        roughness={0.2} // Increased roughness for a more milky/tactile look
        metalness={0.6}
      />
    </Sphere>
  );
};

const ModernStatusBadge = () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    x.set(middleX / 4);
    y.set(middleY / 4);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="relative z-10 inline-block pointer-events-auto"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-3 px-5 py-2.5 bg-white/70 backdrop-blur-md border border-[#CAD2C5] rounded-full shadow-sm cursor-pointer overflow-hidden group"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#008B8B]/10 to-transparent -skew-x-12 translate-x-[-150%]"
          animate={isHovered ? { translateX: "150%" } : { translateX: "-150%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />

        <div className="relative flex items-center justify-center w-3 h-3">
          <span className="absolute inset-0 rounded-full bg-[#008B8B] opacity-40 animate-ping"></span>

          <div className="absolute inset-0 w-8 h-8 -left-2.5 -top-2.5 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
              <ambientLight intensity={1} />
              <directionalLight position={[2, 2, 2]} intensity={2} />
              <LiquidOrb />
            </Canvas>
          </div>
        </div>

        <span className="text-[11px] font-bold tracking-widest text-[#1A1C1E] uppercase pt-[1px] relative z-10">
          Available for projects
        </span>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const [ setGithubStats] = useState({
    repos: 0,
    followers: 0,
    commitsFallback: 2482,
  });

  useEffect(() => {
    fetch("https://api.github.com/users/GrabbyGrabby")
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos !== undefined) {
          setGithubStats((prev) => ({
            ...prev,
            repos: data.public_repos,
            followers: data.followers,
          }));
        }
      })
      .catch((err) => console.error("Error fetching GitHub stats:", err));
  }, []);

  const projects = [
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
      stack: ["React", "Framer Motion"],
      desc: "A high-fidelity minimalist replica of the Spotify web interface.",
      link: "https://spotify-clone-by-grabby.vercelapp",
      repo: "https://github.com/GrabbyGrabby/Spotify-Clone-",
    },
    {
      title: "Demo PMS",
      year: "2024",
      stack: ["Three.js", "WebGL"],
      desc: "Interactive spatial computing environment and dashboard concept.",
      link: "https://demopms-grabby.vercel.app",
      repo: "https://github.com/GrabbyGrabby/Hotel-PMS-Demo",
    },
  ];

  const skillCategories = [
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

  return (
    <div
      className="bg-[#CAD2C5] text-[#1A1C1E] min-h-screen overflow-x-hidden selection:bg-[#354F52] selection:text-white pb-20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
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
              <a
                href="#work"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Work
              </a>
              <a
                href="#stack"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4 pl-4 md:pl-6 border-l border-white/20">
              <a
                href="https://github.com/GrabbyGrabby"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <GitHubLogoIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivaji-jadhav-003b1733b"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <LinkedInLogoIcon className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/GrabClips"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <TelegramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </nav>
      </motion.div>

      <main className="pt-32 px-6 max-w-6xl mx-auto space-y-40">
        {/* Hero Section */}
        <section className="relative flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 z-0 pointer-events-auto flex items-center justify-center md:justify-end opacity-60 md:opacity-100">
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
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] text-[#1A1C1E] block w-full text-left bg-white/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl p-2 md:p-0 -ml-2 md:ml-0"
            >
              SHIVAJI <br />
              <span className="text-[#1A1C1E]">JADHAV.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-[#1A1C1E]/80 max-w-md leading-relaxed font-light backdrop-blur-md bg-white/40 p-4 rounded-xl border border-white/50 shadow-sm"
            >
              Aspiring Web Developer combining technical precision with creative
              flair using React, Tailwind, Next.js, and Three.js.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-6 pointer-events-auto"
            >
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

        {/* Skills Bento Grid */}
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
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${category.theme.iconBg} rounded-bl-full rounded-tr-3xl -z-10 transition-colors duration-500`}
                ></div>
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-black/10 text-current group-hover:bg-[#1A1C1E] group-hover:text-white transition-colors duration-500 shadow-inner">
                  {category.icon}
                </div>
                <div className="space-y-3 mb-8 flex-1">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed max-w-sm opacity-90">
                    {category.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#1A1C1E",
                        color: "#ffffff",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
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

        {/* Selected Works */}
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
                  className="relative flex flex-col bg-[#FCE8E8] border border-[#FCE8E8] rounded-3xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all h-full"
                >
                  <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden mb-6 relative flex items-center justify-center">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <MixIcon className="w-20 h-20 text-[#1A1C1E] opacity-90 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-sm" />
                    </motion.div>

                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/80 backdrop-blur-md shadow-sm p-3 rounded-full text-[#1A1C1E] hover:bg-white transition-colors"
                      >
                        <GitHubLogoIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/80 backdrop-blur-md shadow-sm p-3 rounded-full text-[#1A1C1E] hover:bg-white transition-colors"
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="px-3 pb-3 space-y-3 flex-1 flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-xl text-[#1A1C1E] tracking-tight">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1C1E]/60 px-2 py-1 bg-white/60 rounded-md">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-[#1A1C1E]/70 font-light flex-1">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{
                            backgroundColor: "#1A1C1E",
                            color: "#ffffff",
                            borderColor: "#1A1C1E",
                          }}
                          transition={{ duration: 0.2 }}
                          className="text-[10px] font-medium tracking-wide bg-white/50 border border-white/80 px-3 py-1.5 rounded-full text-[#1A1C1E] cursor-default transition-colors"
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
        

        {/* Connect Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10 relative"
        >
          {[
            {
              icon: EnvelopeClosedIcon,
              title: "Inquiries",
              desc: "thedeadcurse@gmail.com",
              link: "mailto:thedeadcurse@gmail.com",
            },
            {
              icon: TelegramIcon,
              title: "Telegram",
              desc: "Chat with me instantly.",
              link: "https://t.me/GrabClips",
            },
            {
              icon: GitHubLogoIcon,
              title: "Source",
              desc: "Explore experiments.",
              link: "https://github.com/GrabbyGrabby",
            },
            {
              icon: LinkedInLogoIcon,
              title: "Network",
              desc: "Professional history.",
              link: "https://www.linkedin.com/in/shivaji-jadhav-003b1733b",
            },
          ].map((item, i) => (
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
                <h4 className="text-xl font-bold tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="opacity-60 text-sm font-light truncate">
                  {item.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.section>
      </main>

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
            <a
              href="https://github.com/GrabbyGrabby"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#354F52] transition-colors"
            >
              <GitHubLogoIcon /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shivaji-jadhav-003b1733b"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#354F52] transition-colors"
            >
              <LinkedInLogoIcon /> LinkedIn
            </a>
            <a
              href="https://t.me/GrabClips"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#354F52] transition-colors"
            >
              <TelegramIcon className="w-4 h-4" /> Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
