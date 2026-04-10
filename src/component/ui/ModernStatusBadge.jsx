/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import LiquidOrb from "../3D/LiquidOrb";
import { fadeInUp } from "../../utils/animation";

export default function ModernStatusBadge() {
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
}