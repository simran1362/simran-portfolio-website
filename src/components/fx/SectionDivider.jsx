import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Full-width hand-drawn squiggle that inks itself in as it scrolls through
// the viewport — progress is tied directly to scroll position, so scrubbing
// back and forth redraws/undraws the line.
const SectionDivider = ({ className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'end 0.35'],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className={`section-shell px-5 md:px-10 ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 80"
        fill="none"
        className="w-full h-10 md:h-16 text-accent"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M10 50 C 80 10, 140 10, 210 50 S 340 90, 410 50 S 540 10, 610 50 S 740 90, 810 50 S 940 10, 1010 50 S 1140 80, 1190 40"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
