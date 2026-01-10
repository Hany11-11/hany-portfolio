import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { portfolioData } from "@/mockData";
import { useTheme } from "@/context/ThemeContext";

// Animated wave - BRIGHTER
const WaveMesh: React.FC<{ theme: string }> = ({ theme }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      const position = geometry.attributes.position;

      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        const wave1 = Math.sin(x * 2 + state.clock.elapsedTime * 1.5) * 0.15;
        const wave2 = Math.sin(y * 3 + state.clock.elapsedTime * 2) * 0.15;
        position.setZ(i, wave1 + wave2);
      }
      position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[20, 10, 32, 32]} />
      <meshStandardMaterial
        color="#14b8a6"
        emissive="#14b8a6"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

// Floating logo - BRIGHTER and LARGER
const FloatingLogo: React.FC<{ theme: string }> = ({ theme }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.015;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[0.8, 0.2, 32, 64]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.65, 0.15, 32, 64]} />
        <meshStandardMaterial
          color="#14b8a6"
          emissive="#14b8a6"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#f1f5f9"
          emissive="#22d3ee"
          emissiveIntensity={1}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
};

const FooterScene: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <>
      <FloatingLogo theme={theme} />
      <WaveMesh theme={theme} />

      <Stars
        radius={30}
        depth={20}
        count={theme === "dark" ? 1500 : 800}
        factor={3}
        saturation={0}
        fade
        speed={1}
      />

      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#14b8a6" />
      <pointLight position={[-5, 5, -5]} intensity={1.5} color="#22d3ee" />
      <directionalLight position={[0, 5, 5]} intensity={1} />
    </>
  );
};

const Footer3D: React.FC = () => {
  const { personal, social } = portfolioData;
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIcons: Record<string, React.ComponentType<any>> = {
    Github,
    Linkedin,
    Twitter,
    Mail,
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <FooterScene theme={theme} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <span className="text-white font-bold text-xl">
                    {personal.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {personal.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{personal.title}</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-xs">{personal.intro}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {social.map((s) => {
                  const IconComponent = socialIcons[s.icon] || Mail;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-teal-500 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-teal-500/20"
                      aria-label={s.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
                <a
                  href={`mailto:${personal.email}`}
                  className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-teal-500 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-teal-500/20"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-6">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm flex items-center gap-1">
                © {currentYear} {personal.name}. Made with
                <Heart className="w-4 h-4 text-red-500 fill-red-500 inline animate-pulse" />
              </p>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-teal-500 text-slate-400 hover:text-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/20 group"
              >
                <span className="text-sm">Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3D;
