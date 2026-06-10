import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// Springy custom cursor: a snappy dot plus a lazy trailing ring that grows
// over interactive elements. Renders nothing on touch devices or when the
// user prefers reduced motion — the native cursor stays untouched either way.
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, [data-cursor]';

const CursorFollower = () => {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion) return undefined;
    const fine = window.matchMedia('(pointer: fine)');
    if (!fine.matches) return undefined;
    setEnabled(true);

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e) => setHovering(Boolean(e.target.closest(INTERACTIVE)));
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
        style={{ x, y }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden lg:block"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent/70"
          animate={{
            width: hovering ? 56 : 36,
            height: hovering ? 56 : 36,
            scale: pressed ? 0.8 : 1,
            opacity: hovering ? 0.9 : 0.5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        />
      </motion.div>
    </>
  );
};

export default CursorFollower;
