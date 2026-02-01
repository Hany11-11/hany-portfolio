import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, MapPin, User } from 'lucide-react';
import { portfolioData } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 container mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        <div className="h-1.5 w-20 bg-indigo-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Profile & Story */}
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="relative"
        >
          {/* Decorative Float Elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

          {/* Profile Card */}
          <div className="relative glass p-8 rounded-3xl border border-white/10 overflow-hidden">
             
             {/* Image with Glowing Ring */}
             <div className="relative w-48 h-48 mx-auto mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-indigo-500 to-purple-600">
                   <img 
                     src={portfolioData.personal.profileImage} 
                     alt={portfolioData.personal.name}
                     className="w-full h-full object-cover rounded-full border-4 border-slate-900"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"; 
                     }}
                   />
                </div>
             </div>

             <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                   <User className="text-indigo-400" size={24} />
                   My Story
                </h3>
                <div className="h-1 w-12 bg-indigo-600 rounded-full mb-6 mx-auto md:mx-0" />
                
                <p className="text-slate-300 leading-relaxed mb-6">
                  {portfolioData.personal.intro}
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  I specialize in building scalable, real-time web applications. My passion lies in bridging the gap between elegant design and robust engineering.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-900/50 px-4 py-2 rounded-lg border border-white/5">
                    <MapPin size={18} className="text-indigo-400" />
                    {portfolioData.personal.location}
                  </div>
                  
                  <a 
                    href="/Hariram_CV.pdf" 
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-2 bg-white text-slate-900 hover:bg-indigo-50 rounded-full font-bold transition-all shadow-lg hover:scale-105"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Right Column: Experience & Education */}
        <div className="space-y-10">
          
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg text-white shadow-lg"><Briefcase size={20} /></span>
              Professional Experience
            </h3>

            <div className="space-y-6">
              {portfolioData.experience.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                   {/* Gradient Border Effect */}
                   <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-500 blur-[2px] group-hover:blur-[4px]" />
                   
                   <div className="relative p-6 bg-slate-900 rounded-2xl border border-white/10 hover:border-transparent transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                         <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{item.role}</h4>
                         <span className="text-xs font-semibold px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                            {item.period}
                         </span>
                      </div>
                      
                      <div className="text-indigo-400 font-medium mb-4">{item.company}</div>
                      
                      <p className="text-slate-400 text-sm leading-relaxed">
                         {item.description}
                      </p>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg text-white shadow-lg"><GraduationCap size={20} /></span>
              Education
            </h3>

            <div className="space-y-6">
              {portfolioData.education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="group relative"
                >
                   {/* Gradient Border Effect */}
                   <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-500 blur-[2px] group-hover:blur-[4px]" />
                   
                   <div className="relative p-6 bg-slate-900 rounded-2xl border border-white/10 hover:border-transparent transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                         <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{item.degree}</h4>
                         <span className="text-xs font-semibold px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                            {item.period}
                         </span>
                      </div>
                      <div className="text-purple-400 font-medium">{item.school}</div>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
