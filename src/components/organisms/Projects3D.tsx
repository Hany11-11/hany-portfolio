import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Folder,
  Eye,
  X,
} from "lucide-react";
import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";
import { Card, CardContent } from "@/components/atoms/card";
import { portfolioData, Project } from "@/mockData";

// Project Detail Modal
const ProjectModal: React.FC<{
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 transition-colors shadow-lg"
        >
          <X className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        </button>

        {/* Project Image */}
        {project.image && (
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl shadow-lg shadow-teal-500/30">
              <Folder className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
            {project.description || "Project details coming soon..."}
          </p>

          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack
                .filter((t) => t)
                .map((tech, idx) => (
                  <Badge
                    key={idx}
                    className="px-3 py-1 text-sm bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20"
                  >
                    {tech}
                  </Badge>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Project Card
const ProjectCard: React.FC<{
  project: Project;
  onClick: () => void;
}> = ({ project, onClick }) => {
  return (
    <Card
      className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden group hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 h-full flex flex-col cursor-pointer"
      onClick={onClick}
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        </div>
      )}

      <CardContent className="p-5 flex-1 flex flex-col">
        {/* Title */}
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg shadow-lg shadow-teal-500/30">
            <Folder className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2 flex-1">
          {project.description || "Project details coming soon..."}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack
            .filter((t) => t)
            .map((tech, idx) => (
              <Badge
                key={idx}
                className="text-xs bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20"
              >
                {tech}
              </Badge>
            ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white text-xs"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.liveLink, "_blank");
            }}
            disabled={project.liveLink === "#"}
          >
            <Eye className="w-3 h-3 mr-1" />
            Demo
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 text-xs"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubLink, "_blank");
            }}
            disabled={project.githubLink === "#"}
          >
            <Github className="w-3 h-3 mr-1" />
            Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  // Get projects for current page
  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        {/* Projects Grid - 2x2 */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        {/* Pagination - Only show if more than 1 page */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 scale-125"
                      : "bg-slate-300 dark:bg-slate-700 hover:bg-teal-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              className="rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        )}

        {/* Page indicator text */}
        {totalPages > 1 && (
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
            Showing {startIndex + 1}-
            {Math.min(startIndex + projectsPerPage, projects.length)} of{" "}
            {projects.length} projects
          </p>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
