import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { ArrowDown, Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { portfolioData } from "@/mockData";
import { useTheme } from "@/context/ThemeContext";

// Animated floating orb - BRIGHTER
const FloatingOrb: React.FC<{
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}> = ({ position, color, scale = 1, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * speed;
      meshRef.current.rotation.y += 0.005 * speed;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        roughness={0.3}
        metalness={0.5}
      />
    </mesh>
  );
};

// Animated ring - BRIGHTER
const AnimatedRing: React.FC<{
  position: [number, number, number];
  color: string;
  scale?: number;
}> = ({ position, color, scale = 1 }) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      ringRef.current.rotation.y += 0.008;
      ringRef.current.rotation.z =
        Math.cos(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} position={position} scale={scale}>
      <torusGeometry args={[1.5, 0.04, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

// Particle system
const ParticleField: React.FC<{ theme: string }> = ({ theme }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 500;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0003;
      pointsRef.current.rotation.x += 0.0001;
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
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={theme === "dark" ? "#14b8a6" : "#0d9488"}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const HeroScene: React.FC<{ theme: string }> = ({ theme }) => {
  const tealColor = theme === "dark" ? "#14b8a6" : "#0d9488";
  const cyanColor = theme === "dark" ? "#22d3ee" : "#06b6d4";

  return (
    <>
      {/* Central main orb */}
      <FloatingOrb
        position={[0, 0, 0]}
        color={tealColor}
        scale={1.8}
        speed={0.6}
      />

      {/* Surrounding orbs */}
      <FloatingOrb
        position={[-4, 2, -3]}
        color={cyanColor}
        scale={0.6}
        speed={1.2}
      />
      <FloatingOrb
        position={[4.5, -1.5, -2]}
        color={tealColor}
        scale={0.5}
        speed={0.9}
      />
      <FloatingOrb
        position={[-3.5, -2.5, -1]}
        color={cyanColor}
        scale={0.4}
        speed={1.1}
      />
      <FloatingOrb
        position={[3, 3, -2]}
        color={tealColor}
        scale={0.35}
        speed={1.4}
      />
      <FloatingOrb
        position={[-5, 0, -4]}
        color={cyanColor}
        scale={0.45}
        speed={0.8}
      />
      <FloatingOrb
        position={[5, 1, -3]}
        color={tealColor}
        scale={0.3}
        speed={1.3}
      />

      {/* Animated rings */}
      <AnimatedRing position={[0, 0, 0]} color={cyanColor} scale={1.5} />
      <AnimatedRing position={[0, 0, 0]} color={tealColor} scale={2} />

      {/* Particles */}
      <ParticleField theme={theme} />

      {/* Stars */}
      <Stars
        radius={100}
        depth={50}
        count={theme === "dark" ? 5000 : 2000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Lighting - BRIGHTER */}
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={1.5} color={tealColor} />
      <pointLight position={[0, 10, 5]} intensity={1} color={cyanColor} />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        color="#ffffff"
      />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

const Hero3D: React.FC = () => {
  const { personal } = portfolioData;
  const { theme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>

        {/* Animated blob 1 */}
        <div className="absolute top-0 -left-40 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>

        {/* Animated blob 2 */}
        <div className="absolute top-0 -right-40 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>

        {/* Animated blob 3 */}
        <div className="absolute -bottom-40 left-20 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]"></div>
      </div>

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-[1]">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <HeroScene theme={theme} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/10 dark:bg-slate-900/40 p-8 md:p-12 rounded-3xl border border-white/20 dark:border-slate-700/40 shadow-2xl">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white/60 dark:border-slate-600/60 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Greeting */}
            <p className="text-teal-500 dark:text-teal-400 font-semibold text-lg md:text-xl mb-2 tracking-wide">
              👋 Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-4">
              <span className="text-teal-600 dark:text-teal-400">&lt;</span>
              {personal.title}
              <span className="text-teal-600 dark:text-teal-400"> /&gt;</span>
            </h2>

            {/* Introduction */}
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed">
              {personal.intro}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                Based in {personal.location}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                View My Projects
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-2 border-slate-400/50 dark:border-slate-500/50 hover:border-teal-500 dark:hover:border-teal-400 px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 bg-white/20 dark:bg-slate-800/40 backdrop-blur-sm font-semibold"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3">
              {[
                {
                  href: `mailto:${personal.email}`,
                  icon: Mail,
                  label: "Email",
                },
                {
                  href: "https://github.com/hany11-11",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/hany02/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="p-3 rounded-full border-2 border-slate-300/50 dark:border-slate-600/50 hover:border-teal-500 dark:hover:border-teal-400 hover:bg-teal-500/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="mt-8 animate-bounce cursor-pointer"
            onClick={() => scrollToSection("#about")}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Scroll Down
              </span>
              <ArrowDown className="w-6 h-6 text-teal-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
