import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';
import ScrollToTop from './components/ScrollToTop';

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
      <ScrollToTop />
      <StarryBackground />
      <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-transparent text-zinc-900 dark:text-zinc-50 font-sans transition-colors duration-300 relative z-10">
        
        <Header isDark={isDark} toggleTheme={toggleTheme} />

        <div className="pt-24"></div>

        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        
      </div>
    </Router>
  );
}