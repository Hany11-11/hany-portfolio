import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

interface FloatingShapeProps {
  position: [number, number, number];
  geometry: "sphere" | "box" | "torus" | "octahedron" | "icosahedron";
  scale?: number;
  color?: string;
  speed?: number;
  distort?: number;
}

export const FloatingShape: React.FC<FloatingShapeProps> = ({
  position,
  geometry,
  scale = 1,
  color,
  speed = 1,
  distort = 0.3,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  const defaultColor = theme === "dark" ? "#14b8a6" : "#0d9488";
  const shapeColor = color || defaultColor;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * speed;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "sphere":
        return <sphereGeometry args={[1, 64, 64]} />;
      case "box":
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case "torus":
        return <torusGeometry args={[1, 0.4, 32, 100]} />;
      case "octahedron":
        return <octahedronGeometry args={[1.2]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1.2]} />;
      default:
        return <sphereGeometry args={[1, 64, 64]} />;
    }
  };

  return (
    <Float speed={speed * 2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {renderGeometry()}
        <MeshDistortMaterial
          color={shapeColor}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

export const FloatingParticles: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { theme } = useTheme();

  const particleCount = 200;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color = new THREE.Color(theme === "dark" ? "#14b8a6" : "#0d9488");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, [theme]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.8} />
    </points>
  );
};

export default FloatingShape;
