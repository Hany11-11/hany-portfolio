import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "../data";

type Project = (typeof portfolioData.projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/10"
    >
      <div className="relative h-36 mb-3 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/20 to-transparent z-10" />

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <>
            <div className="w-full h-full bg-linear-to-br from-indigo-500/20 via-cyan-500/20 to-emerald-500/20" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </>
        )}

        <div className="absolute bottom-2 left-2 right-2 z-20">
          <div className="flex flex-wrap gap-1">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="text-[9px] font-semibold uppercase tracking-wide bg-slate-950/60 backdrop-blur border border-white/15 px-1.5 py-0.5 rounded text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-1.5 group-hover:text-indigo-300 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-3 line-clamp-2 min-h-10">
          {project.description}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={project.link}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-indigo-300 transition-colors"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <Github size={14} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-18 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full"
          >
            My Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-slate-400 max-w-2xl"
          >
            A collection of projects that showcase my skills in full-stack
            development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
