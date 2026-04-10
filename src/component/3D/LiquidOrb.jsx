import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function LiquidOrb() {
  const orbRef = useRef();

  useFrame(({ clock }) => {
    orbRef.current.rotation.x = clock.getElapsedTime() * 0.5;
    orbRef.current.rotation.y = clock.getElapsedTime() * 0.8;
  });

  return (
    <Sphere ref={orbRef} args={[1, 32, 32]} scale={1.4}>
      <MeshDistortMaterial
        color="#E0FFFF"
        emissive="#008B8B"
        emissiveIntensity={0.6}
        distort={0.4}
        speed={4}
        roughness={0.2}
        metalness={0.6}
      />
    </Sphere>
  );
}