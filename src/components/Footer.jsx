import React from 'react';
import { Github, Linkedin, BookOpen, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 py-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center transition-colors duration-300">
      
   
      <div className="flex space-x-8 mb-6">
        
        <a 
          href="https://github.com/BGYKanishka" 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition duration-300"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>

        <a 
          href="https://www.linkedin.com/in/yehan-kanishka/" 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>

        <a 
          href="https://medium.com/@bgykanishka" 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition duration-300"
          aria-label="Medium"
        >
          <BookOpen size={24} />
        </a>

        <a 
          href="mailto:bgykanishka@gmail.com" 
          className="text-zinc-500 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition duration-300"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>

      </div>

      <p className="text-zinc-500 dark:text-zinc-600 text-sm font-medium tracking-wide">
        &copy; {currentYear} Yehan Kanishka. All rights reserved.
      </p>
      
    </footer>
  );
}