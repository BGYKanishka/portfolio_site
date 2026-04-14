import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
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
    <Router>
      <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans transition-colors duration-300">
        
        <Header isDark={isDark} toggleTheme={toggleTheme} />

        <div className="pt-24"></div>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
        
      </div>
    </Router>
  );
}