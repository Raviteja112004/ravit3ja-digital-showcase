
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import { Mesh } from 'three';

export const HeroScene = () => {
  const cubeRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      cubeRef.current.rotation.y += 0.01;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.005;
      torusRef.current.rotation.z += 0.01;
    }
  });

  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />

      {/* Floating geometric shapes */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={cubeRef} position={[-2, 1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            transparent 
            opacity={0.8}
            wireframe={false}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <mesh ref={torusRef} position={[2, -1, -1]}>
          <torusGeometry args={[0.8, 0.3, 16, 32]} />
          <meshStandardMaterial 
            color="#ec4899" 
            transparent 
            opacity={0.7}
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[0, 2, -2]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial 
            color="#06b6d4" 
            transparent 
            opacity={0.6}
            wireframe
          />
        </mesh>
      </Float>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={Math.random() * 2 + 1} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial 
              color={`hsl(${Math.random() * 360}, 70%, 60%)`}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};
