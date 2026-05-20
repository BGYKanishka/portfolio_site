import React from 'react';
import { skillsData } from '../data/skillsData';
import PageTitle from '../components/PageTitle';

export default function SkillsSection() {
  return (
    <>
      <PageTitle title="Skills" />
      <section className="px-6 flex flex-col justify-center min-h-[calc(100vh-6rem)] pt-28 pb-16 md:pt-20 md:pb-20 transition-colors duration-300 relative">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500 blur-[120px] opacity-10 dark:opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500 blur-[120px] opacity-10 dark:opacity-20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
            Technical <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
              Stack.
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
            A comprehensive overview of the languages, frameworks, and tools I use to build robust applications from the metal up.
          </p>
        </div>

        {/* Dynamic Skill Categories */}
        <div className="space-y-16">
          {skillsData.map((category, index) => (
            <div key={index}>
              
              {/* Category Title */}
              <div className="flex items-center mb-6">
                <div className="w-8 h-[2px] bg-blue-500 mr-4 rounded-full"></div>
                <h3 className="text-xl font-bold tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                  {category.category}
                </h3>
              </div>

              {/* Rectangular Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  
                  <div 
                    key={skillIndex} 
                    className="flex items-center p-4 bg-white dark:bg-[#151312] border border-zinc-200 dark:border-[#2a2420] rounded-2xl hover:-translate-y-1 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
                  >
                    
                    {/* Left Side */}
                    <div className="w-14 h-14 bg-zinc-50 dark:bg-[#1f1b19] rounded-xl flex items-center justify-center mr-4 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={skill.icon} 
                        alt={skill.title} 
                        className="w-8 h-8 object-contain"
                        loading="lazy" 
                      />
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col items-start mt-1">
                      <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-1.5">
                        {skill.title}
                      </h4>
                      
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border 
                        ${skill.level === 'Advanced' 
                            ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-500/20' 
                        : skill.level === 'Intermediate' 
                            ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-500/20' 
                        : 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-500/20'}`}
                      >
                        {skill.level}
                      </span>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}