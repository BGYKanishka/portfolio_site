import React from 'react';
import ContactForm from '../components/ContactForm';
import { Github, Linkedin, BookOpen, Mail } from 'lucide-react';
import PageTitle from '../components/PageTitle';

export default function ContactSection() {
  return (
    <>
      <PageTitle title="Connect" />
      <section className="px-6 flex items-center min-h-[calc(100vh-6rem)] pt-28 pb-16 md:pt-0 md:pb-0 transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left Column */}
        <div className="flex flex-col items-start text-left z-20 md:ml-8 lg:ml-16">
          
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
              Let's <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
                Connect.
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed">
              I'm always open to discussing software engineering roles, new projects, or collaborative opportunities. Feel free to reach out through the form or any of my social platforms.
            </p>
          </div>

          <div className="flex flex-col space-y-6 w-full">
            
            <a href="mailto:bgykanishka@gmail.com" className="flex items-center space-x-4 group">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl shrink-0 group-hover:-translate-y-1 transition-transform">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Email</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">bgykanishka@gmail.com</p>
              </div>
            </a>
            
            <a href="https://github.com/BGYKanishka" target="_blank" rel="noreferrer" className="flex items-center space-x-4 group">
              <div className="p-3 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl shrink-0 group-hover:-translate-y-1 transition-transform">
                <Github size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base group-hover:text-black dark:group-hover:text-white transition-colors">GitHub</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">Explore my source code</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/yehan-kanishka/" target="_blank" rel="noreferrer" className="flex items-center space-x-4 group">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl shrink-0 group-hover:-translate-y-1 transition-transform">
                <Linkedin size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">LinkedIn</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">Professional network</p>
              </div>
            </a>
            
            <a href="https://medium.com/@bgykanishka" target="_blank" rel="noreferrer" className="flex items-center space-x-4 group">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0 group-hover:-translate-y-1 transition-transform">
                <BookOpen size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Medium</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">Read my technical articles</p>
              </div>
            </a>

          </div>
        </div>

        {/* Right Column */}
        <div className="w-full max-w-xl mx-auto md:mx-0 md:ml-auto relative mt-12 md:mt-0">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 blur-[100px] w-full h-[120%] opacity-10 dark:opacity-20 rounded-full z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>

      </div>
    </section>
    </>
  );
}