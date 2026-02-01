import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="mb-4 p-3 bg-indigo-500/10 rounded-2xl"
          >
            <Briefcase className="w-8 h-8 text-indigo-400" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <p className="text-slate-400 max-w-xl">
            My journey in the tech industry and the valuable experience I've gained along the way.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Vertical Gradient Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent transform -translate-x-1/2 hidden md:block opacity-30" />

          <div className="space-y-16">
            {portfolioData.experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-4 border-indigo-500 transform -translate-x-1/2 hidden md:flex items-center justify-center z-10 shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                    <div className="w-2 h-2 bg-indigo-200 rounded-full animate-pulse" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 group">
                  <div className={`
                    relative p-10 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-md
                    hover:bg-slate-800/90 hover:border-indigo-500/50 transition-all duration-500
                    hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]
                    ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                  `}>
                    {/* Decorative corner glow */}
                    <div className="absolute top-0 right-0 -mr-px -mt-px w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col gap-2 mb-6">
                        <h3 className="text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {item.role}
                        </h3>
                        <div className="flex items-center gap-2 text-indigo-300 font-semibold text-base tracking-wide uppercase">
                            <Briefcase size={18} />
                            {item.company}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-300 mb-8 bg-indigo-500/10 w-fit px-5 py-2.5 rounded-full border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
                      <Calendar size={16} />
                      {item.period}
                    </div>

                    <p className="text-slate-300 leading-relaxed text-lg border-t border-white/10 pt-6 group-hover:border-white/20 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
