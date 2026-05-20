import React from 'react';
import { projectsData } from '../data/projectsData';
import { Github, ExternalLink } from 'lucide-react';
import PageTitle from '../components/PageTitle';

export default function ProjectsSection() {
  return (
    <>
      <PageTitle title="Projects" />
      <section className="px-6 flex flex-col justify-center min-h-[calc(100vh-6rem)] pt-28 pb-16 md:pt-20 md:pb-20 transition-colors duration-300 relative">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-blue-500 blur-[150px] opacity-10 dark:opacity-20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
            Featured <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
              Projects.
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
            A selection of my technical work, focusing on systems engineering, distributed architecture, and full-stack development.
          </p>
        </div>

        {/* Dynamic Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-[#151312] border border-zinc-200 dark:border-[#2a2420] rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-500 group flex flex-col h-full"
            >
              

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border transition-colors duration-300 ${
                      project.status === 'Completed'
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-500/20'
                        : 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-500/20'
                    }`}>
                      {project.status}
                    </span>
                  )}
                </div>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 rounded-full text-xs font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center space-x-4 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 mt-auto">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium text-sm"
                    >
                      <Github size={18} />
                      <span>View Source</span>
                    </a>
                  )}
                  
                  {project.auxLink && (
                    <a 
                      href={project.auxLink.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm ml-auto"
                    >
                      <ExternalLink size={18} />
                      <span>{project.auxLink.label}</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
    </>
  );
}