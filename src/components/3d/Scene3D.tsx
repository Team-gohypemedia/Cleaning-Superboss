"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.35;
      meshRef.current.rotation.y += delta * 0.45;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh ref={meshRef} position={[2.4, 0.4, 0]} scale={1.25}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <MeshDistortMaterial
          color="#6366f1"
          roughness={0.1}
          metalness={0.85}
          distort={0.25}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.25;
      meshRef.current.rotation.z += delta * 0.35;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={1.8} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[-2.6, -0.6, -1]} scale={1.15}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          roughness={0.15}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.05}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.25;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[0.2, -2.2, -2]} scale={0.95}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#0284c7"
          roughness={0.1}
          metalness={0.7}
          distort={0.35}
          speed={2.5}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#818cf8" />
        <pointLight position={[5, 5, 5]} intensity={1.8} color="#c084fc" />

        <Stars
          radius={50}
          depth={50}
          count={1200}
          factor={3}
          saturation={0}
          fade
          speed={1.2}
        />

        <FloatingKnot />
        <FloatingIcosahedron />
        <FloatingSphere />
      </Canvas>
    </div>
  );
}
