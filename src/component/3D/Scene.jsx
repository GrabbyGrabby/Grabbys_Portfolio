import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  // Rotate the sphere continuously
  useFrame(({ clock }) => {
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
  });

  return (
    // Shifted slightly to the right (x: 1.5) so it balances the left-aligned text
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.5} position={[1.5, 0, 0]}>
      <MeshDistortMaterial
        color="#A2C3A4"
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
    // absolute inset-0 makes it fill whatever container it is placed in perfectly
    <div className="absolute inset-0 w-full h-full">
      <Canvas 
        // Moved camera back to 7 so the larger sphere fits beautifully
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