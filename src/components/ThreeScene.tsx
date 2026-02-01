import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sparkles, Float, Icosahedron, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSphere() {
  const ref = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={new Float32Array(3000 * 3).map(() => (Math.random() - 0.5) * 15)} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#818cf8"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
        
        // Simpler mouse interaction for global bg
        const x = (state.pointer.x * Math.PI) / 10;
        const y = (state.pointer.y * Math.PI) / 10;
        meshRef.current.rotation.x += y;
        meshRef.current.rotation.y += x;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron args={[3, 1]} ref={meshRef}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          wireframe
          transparent
          opacity={0.1}
        />
      </Icosahedron>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <Canvas 
        camera={{ position: [0, 0, 8] }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#a855f7" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#6366f1" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <Sparkles 
          count={200} 
          scale={15} 
          size={4}
          speed={0.4} 
          opacity={0.6} 
          color="#a855f7"
        />
        
        <ParticleSphere />
        <AnimatedShape />
        
        <fog attach="fog" args={['#0f172a', 5, 30]} />
      </Canvas>
    </div>
  );
}
