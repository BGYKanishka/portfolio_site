import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ContactSection from './components/ContactSection'; 
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
      
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <div id="home" className="pt-24"></div>

      <ContactSection />
      
    </div>
  );
}