import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/fx/ScrollProgress';
import CursorFollower from './components/fx/CursorFollower';
import SectionDivider from './components/fx/SectionDivider';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white text-ink-light dark:bg-surface-dark dark:text-ink-dark transition-colors duration-300">
        <ScrollProgress />
        <CursorFollower />
        <div className="grain-overlay" aria-hidden />
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider className="rotate-180" />
          <Experience />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
