import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Page-wide reading progress — a thin accent bar pinned above everything.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-gradient-to-r from-accent via-accent-glow to-accent"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
