import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HeroSection from '../pages/HeroSection';
import AboutSection from '../pages/AboutSection';
import SkillsSection from '../pages/SkillsSection';
import ProjectsSection from '../pages/ProjectsSection';
import ContactSection from '../pages/ContactSection';
import PageTransition from './PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HeroSection /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutSection /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><SkillsSection /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectsSection /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactSection /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
