import ContactForm from './ContactForm';
import { Github, Linkedin, BookOpen, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="flex-grow py-24 px-6 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
              Let's Connect.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              I'm always open to discussing software engineering roles, new projects, or collaborative opportunities. Feel free to reach out through the form or any of my social platforms.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <a href="mailto:bgykanishka@gmail.com" className="flex items-center space-x-4 text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors group">
              <Mail size={28} className="group-hover:-translate-y-1 transition-transform" />
              <span className="font-medium text-lg">bgykanishka@gmail.com</span>
            </a>
            
            <a href="https://github.com/BGYKanishka" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors group">
              <Github size={28} className="group-hover:-translate-y-1 transition-transform" />
              <span className="font-medium text-lg">GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/yehan-kanishka/" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors group">
              <Linkedin size={28} className="group-hover:-translate-y-1 transition-transform" />
              <span className="font-medium text-lg">LinkedIn</span>
            </a>
            
            <a href="https://medium.com/@bgykanishka" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors group">
              <BookOpen size={28} className="group-hover:-translate-y-1 transition-transform" />
              <span className="font-medium text-lg">Medium</span>
            </a>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto md:mx-0 md:ml-auto">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}