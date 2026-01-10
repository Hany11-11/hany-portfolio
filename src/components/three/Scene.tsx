import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { useTheme } from "@/context/ThemeContext";

interface SceneProps {
  children: React.ReactNode;
}

const Scene: React.FC<SceneProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ background: theme === "dark" ? "#0f172a" : "#f8fafc" }}
    >
      <ambientLight intensity={theme === "dark" ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.5}
        color={theme === "dark" ? "#14b8a6" : "#0d9488"}
      />
      <Stars
        radius={100}
        depth={50}
        count={theme === "dark" ? 5000 : 2000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      {children}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Scene;
