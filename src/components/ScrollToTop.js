import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const ringProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });

  useEffect(() => {
    const onScroll = () => {
      const scrolledFromTop = window.scrollY > window.innerHeight * 0.6;
      // Hide when user reaches the very bottom of the page so the button
      // doesn't overlap with footer copy / signature.
      const distanceToBottom =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);
      const nearBottom = distanceToBottom < 120;
      setVisible(scrolledFromTop && !nearBottom);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={handleClick}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
        >
          <span className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-accent shadow-card overflow-hidden">
            <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <FaArrowUp className="relative w-4 h-4 md:w-5 md:h-5 group-hover:text-black transition-colors duration-300" />
          </span>
          {/* Scroll-progress ring */}
          <svg
            viewBox="0 0 100 100"
            className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] -rotate-90 pointer-events-none"
            aria-hidden
          >
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="5" className="text-black/10 dark:text-white/15" />
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#9ACD32"
              strokeWidth="5"
              strokeLinecap="round"
              style={{ pathLength: ringProgress }}
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
