import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Listen for window resize to determine if we are on a mobile screen
  useEffect(() => {
    const handleResize = () => {
      // 768px matches Tailwind's 'md' breakpoint
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initial size on mount
    handleResize(); 
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Rotate the sphere continuously
  useFrame(({ clock }) => {
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
  });

  // Push to the right edge (2.5) on mobile, shift slightly right (1.5) on desktop
  // Note: If you want it on the left edge instead, use -2.5
  const xPosition = isMobile ? 2.5 : 1.5;

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.5} position={[xPosition, 0, 0]}>
      <MeshDistortMaterial
        color="#869b97"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export default function Scene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 7], fov: 45 }} 
        className="outline-none focus:outline-none"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
