import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Header({ isDark, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skill', href: '#skill' },
    { name: 'My Project', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Connect me', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <a href="#home" className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
          YEHAN K.
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} className="text-zinc-400 hover:text-white" /> : <Moon size={18} className="text-zinc-600 hover:text-black" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} className="text-zinc-400" /> : <Moon size={18} className="text-zinc-600" />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-900 dark:text-zinc-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}