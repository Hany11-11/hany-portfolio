import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

interface BackgroundOrbProps {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
}

const BackgroundOrb: React.FC<BackgroundOrbProps> = ({
  position,
  scale,
  color,
  speed = 1,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.002 * speed;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const BackgroundScene: React.FC = () => {
  const { theme } = useTheme();

  const orbColors =
    theme === "dark"
      ? ["#14b8a6", "#22d3ee", "#06b6d4", "#0d9488"]
      : ["#0d9488", "#14b8a6", "#0891b2", "#0f766e"];

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#14b8a6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#22d3ee" />

      {/* Stars */}
      <Stars
        radius={100}
        depth={50}
        count={theme === "dark" ? 3000 : 1000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Floating orbs */}
      <BackgroundOrb
        position={[-15, 5, -20]}
        scale={3}
        color={orbColors[0]}
        speed={0.5}
      />
      <BackgroundOrb
        position={[15, -5, -25]}
        scale={4}
        color={orbColors[1]}
        speed={0.7}
      />
      <BackgroundOrb
        position={[-20, -10, -30]}
        scale={5}
        color={orbColors[2]}
        speed={0.4}
      />
      <BackgroundOrb
        position={[20, 10, -35]}
        scale={3.5}
        color={orbColors[3]}
        speed={0.6}
      />
    </>
  );
};

interface FloatingBackground3DProps {
  children: React.ReactNode;
}

const FloatingBackground3D: React.FC<FloatingBackground3DProps> = ({
  children,
}) => {
  const { theme } = useTheme();

  return (
    <div className="relative">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          style={{
            background:
              theme === "dark"
                ? "linear-gradient(to bottom, #020617, #0f172a, #1e293b)"
                : "linear-gradient(to bottom, #f8fafc, #f1f5f9, #e2e8f0)",
          }}
        >
          <Suspense fallback={null}>
            <BackgroundScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FloatingBackground3D;
