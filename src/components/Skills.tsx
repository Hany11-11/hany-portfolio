import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench, Layers } from 'lucide-react';
import { portfolioData } from '../data';

const icons = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

const colors = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-emerald-500 to-teal-500",
  Database: "from-orange-500 to-amber-500",
  Tools: "from-pink-500 to-rose-500",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="mb-4 p-3 bg-white/5 rounded-2xl border border-white/10"
          >
            <Layers className="w-8 h-8 text-indigo-400" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Tech <span className="text-gradient">Stack</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            A curated set of technologies and tools I use to build scalable, high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioData.skills.map((skillGroup, idx) => {
            const Icon = icons[skillGroup.category as keyof typeof icons] || Code;
            const colorGradient = colors[skillGroup.category as keyof typeof colors] || "from-indigo-500 to-purple-500";
            
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Hover Gradient Border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${colorGradient} rounded-3xl opacity-20 group-hover:opacity-100 transition duration-500 blur-[2px] group-hover:blur-[5px]`} />
                
                <div className="relative h-full bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-transparent transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${colorGradient} shadow-lg`}>
                      <Icon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <motion.div 
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (idx * 0.1) + (skillIdx * 0.05) }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700/80 border border-white/5 hover:border-white/20 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-all cursor-default shadow-sm hover:shadow-md"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
