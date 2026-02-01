import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CustomCursor from './components/CustomCursor';
import ThreeScene from './components/ThreeScene';
import LoadingScreen from './components/LoadingScreen';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { portfolioData } from './data';

function App() {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-slate-200 selection:bg-indigo-500/30 font-sans cursor-none">
      <LoadingScreen loaded={loaded} />
      
      <ThreeScene />
      
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="relative z-10 space-y-0">
        <Hero />
        
        <About />

        <Projects />
        
        <Skills />
          
        <section id="contact" className="py-24 container mx-auto px-6">
          <div className="glass-card max-w-4xl mx-auto p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's build something <span className="text-gradient">amazing</span> together.</h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col items-center gap-8">
              <a 
                href="mailto:rs11hari@gmail.com"
                className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                Say Hello
              </a>

              <div className="flex items-center gap-6">
                <a 
                  href={portfolioData.socials.find(s => s.name === 'GitHub')?.url} 
                  target="_blank" 
                  className="p-4 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <Github size={24} />
                </a>
                <a 
                  href={portfolioData.socials.find(s => s.name === 'LinkedIn')?.url} 
                  target="_blank" 
                  className="p-4 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Ratnasothy Hariram. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
