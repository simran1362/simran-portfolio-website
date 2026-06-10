import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { name: 'Home', to: '#hero' },
  { name: 'Skills', to: '#skills' },
  { name: 'Projects', to: '#projects' },
  { name: 'Experience', to: '#experience' },
  { name: 'Contact', to: '#contact' },
];

const scrollTo = (selector) => {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
            onClick={() => scrollTo('#hero')}
            className="font-nunito font-extrabold text-lg md:text-xl tracking-tight text-black dark:text-white"
          >
            SIMRAN<span className="text-accent">.</span>BARDHAN
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollTo(item.to)}
                    className="relative text-[15px] font-medium text-black dark:text-white hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="btn-pill"
            >
              <span className="btn-pill__icon">
                <FaArrowRight className="w-3.5 h-3.5" />
              </span>
              Start Project
            </button>
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
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        scrollTo(item.to);
                        setMobileOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg font-medium text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
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
