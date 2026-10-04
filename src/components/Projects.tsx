import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Info,
  Check,
  ArrowRight,
  Code2,
} from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const { featuredProjects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-200/90 relative bg-[#F1F4F9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#111827]" />
              <span className="text-xs font-black text-[#111827] tracking-[0.2em] uppercase">
                PORTFOLIO
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              Featured Software Projects
            </h2>
          </div>
          <p className="text-sm text-[#4B5563] max-w-md font-medium">
            Production-focused software, intelligent automation tools, and full-stack web applications.
          </p>
        </div>

        {/* 4 Cards in Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => {
            const hasImageError = failedImages[project.id];
            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-[#111827]/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden shadow-2xs"
              >
                {/* Screenshot Container */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden border-b border-slate-200">
                  {!hasImageError ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-slate-50">
                      <Code2 className="w-8 h-8 text-[#111827] mb-2" />
                      <span className="text-xs font-bold text-[#111827]">{project.title}</span>
                      <span className="text-[11px] text-slate-500">Architecture Preview</span>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-black text-[#111827] bg-white/95 backdrop-blur-xs rounded-md shadow-xs border border-slate-200">
                    {project.category}
                  </span>

                  {/* View Details Quick Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#111827] bg-white/95 hover:bg-white hover:text-black rounded-md shadow-sm border border-slate-200 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View details</span>
                  </button>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-black transition-colors mb-1.5">
                      {project.title}
                    </h3>

                    {/* 1-Line Overview */}
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-snug mb-3.5">
                      {project.overview}
                    </p>

                    {/* 3 Key-Feature Bullets */}
                    <ul className="space-y-1.5 mb-4 text-xs text-[#374151]">
                      {project.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#111827] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-100">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded group-hover:border-slate-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 rounded">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-[#111827] hover:text-white bg-slate-50 hover:bg-[#111827] border border-slate-300 hover:border-[#111827] rounded-lg shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>

                      {project.liveDemoUrl ? (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#111827] hover:bg-black rounded-lg shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer uppercase tracking-wider"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-[#111827] hover:text-white bg-slate-100 hover:bg-[#111827] border border-slate-300 hover:border-[#111827] rounded-lg shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                        >
                          <Info className="w-3.5 h-3.5" />
                          <span>Architecture</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section bottom CTA */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-slate-200">
          <p className="text-xs text-[#4B5563] font-medium">
            Interested in viewing codebase architecture or discussing a custom deployment?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer"
          >
            <span>Inquire about software solutions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
