import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileText, Sparkles } from 'lucide-react';
import { portfolioData } from '../data';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 px-4",
        isScrolled ? "top-4" : "top-6"
      )}>
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn(
            "flex items-center justify-between w-full max-w-5xl rounded-full px-6 transition-all duration-300",
            isScrolled 
              ? "py-3 bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-lg shadow-indigo-500/10" 
              : "py-4 bg-transparent border border-transparent"
          )}
        >
          {/* Logo */}
          <motion.a 
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-1.5 bg-indigo-600 rounded-lg">
              <Sparkles size={16} fill="white" />
            </div>
            <span>
              HANY<span className="text-indigo-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/5">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <a href={portfolioData.socials.find(s => s.name === 'GitHub')?.url} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href={portfolioData.socials.find(s => s.name === 'LinkedIn')?.url} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
               <a 
                href="/Hariram_CV.pdf" 
                target="_blank" 
                className="group flex items-center gap-2 text-xs font-bold text-slate-900 bg-white px-4 py-2 rounded-full hover:bg-indigo-50 transition-colors"
              >
                <FileText size={14} className="text-indigo-600 group-hover:text-indigo-700" />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden flex items-center justify-center"
          >
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-8 p-6 w-full max-w-sm">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={link.href}
                  className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="w-full h-px bg-white/10 my-4" />
              
              <div className="flex items-center gap-6">
                <a href={portfolioData.socials.find(s => s.name === 'GitHub')?.url} target="_blank" className="p-3 bg-white/5 rounded-full text-white">
                  <Github size={24} />
                </a>
                <a href={portfolioData.socials.find(s => s.name === 'LinkedIn')?.url} target="_blank" className="p-3 bg-white/5 rounded-full text-white">
                  <Linkedin size={24} />
                </a>
              </div>
              
              <a 
                href="/Hariram_CV.pdf" 
                target="_blank" 
                className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-500/20"
              >
                <FileText size={20} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
