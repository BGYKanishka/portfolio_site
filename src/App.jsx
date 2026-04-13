import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import ContactForm from './components/ContactForm'; 
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans transition-colors duration-300">
      
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="text-xl font-bold tracking-tighter">YEHAN K.</div>
        <div className="flex items-center space-x-6">
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} className="text-zinc-400 hover:text-white" /> : <Moon size={20} className="text-zinc-600 hover:text-black" />}
          </button>

        </div>
      </nav>

      <section id="contact" className="flex-grow pt-32 pb-24 px-6 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <Footer />
      
    </div>
  );
}