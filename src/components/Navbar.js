import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { fireConfetti } from './fx/confetti';
import Magnetic from './fx/Magnetic';

const navItems = [
  { name: 'Home', to: '#hero', id: 'hero' },
  { name: 'Skills', to: '#skills', id: 'skills' },
  { name: 'Projects', to: '#projects', id: 'projects' },
  { name: 'Experience', to: '#experience', id: 'experience' },
  { name: 'Contact', to: '#contact', id: 'contact' },
];

const scrollTo = (selector) => {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Track which section currently crosses the middle of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const onLogoClick = (e) => {
    fireConfetti(e.clientX, e.clientY, 36);
    scrollTo('#hero');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="section-shell flex items-center justify-between px-5 md:px-10 py-4">
          <button
            onClick={onLogoClick}
            className="font-nunito font-extrabold text-lg md:text-xl tracking-tight text-black dark:text-white"
            title="🎉"
          >
            SIMRAN<span className="text-accent">.</span>BARDHAN
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.name} className="relative">
                    <button
                      onClick={() => scrollTo(item.to)}
                      className={`relative z-10 px-4 py-2 text-[15px] font-medium transition-colors ${
                        isActive
                          ? 'text-black dark:text-black'
                          : 'text-black dark:text-white hover:text-accent-deep dark:hover:text-accent'
                      }`}
                    >
                      {item.name}
                    </button>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-accent"
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <motion.span
                key={isDarkMode ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="inline-flex"
              >
                {isDarkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
              </motion.span>
            </button>

            <Magnetic strength={0.3}>
              <button onClick={() => scrollTo('#contact')} className="btn-pill">
                <span className="btn-pill__icon">
                  <FaArrowRight className="w-3.5 h-3.5" />
                </span>
                Start Project
              </button>
            </Magnetic>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="p-2 rounded-full text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <HiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white dark:bg-surface-darkAlt z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
                <span className="font-nunito font-extrabold text-base text-black dark:text-white">
                  SIMRAN<span className="text-accent">.</span>BARDHAN
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-full text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex flex-col p-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <button
                      onClick={() => {
                        scrollTo(item.to);
                        setMobileOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                        activeId === item.id
                          ? 'bg-accent text-black'
                          : 'text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto p-4">
                <button
                  onClick={() => {
                    scrollTo('#contact');
                    setMobileOpen(false);
                  }}
                  className="btn-pill w-full justify-center"
                >
                  <span className="btn-pill__icon">
                    <FaArrowRight className="w-3.5 h-3.5" />
                  </span>
                  Start Project
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
