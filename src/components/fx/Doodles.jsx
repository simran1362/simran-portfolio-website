import React from 'react';
import { motion } from 'framer-motion';

// Hand-drawn SVG doodles that draw themselves in when scrolled into view.
// All strokes inherit `currentColor` so they recolor via text-* classes.

const draw = (delay = 0, duration = 1.2) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true, margin: '-40px' },
  transition: {
    pathLength: { delay, duration, ease: [0.65, 0, 0.35, 1] },
    opacity: { delay, duration: 0.01 },
  },
});

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const Sparkle = ({ className, delay = 0, strokeWidth = 6 }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <motion.path
      d="M50 8 C53 32 60 42 88 50 C60 58 53 68 50 92 C47 68 40 58 12 50 C40 42 47 32 50 8 Z"
      strokeWidth={strokeWidth}
      {...strokeProps}
      {...draw(delay, 0.9)}
    />
  </svg>
);

export const Star = ({ className, delay = 0, strokeWidth = 6 }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <motion.path
      d="M50 10 L60 38 L90 40 L66 58 L74 88 L50 70 L26 88 L34 58 L10 40 L40 38 Z"
      strokeWidth={strokeWidth}
      {...strokeProps}
      {...draw(delay, 1)}
    />
  </svg>
);

export const Spiral = ({ className, delay = 0, strokeWidth = 5 }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <motion.path
      d="M50 50 C56 44 62 48 60 56 C57 66 44 68 36 60 C26 50 30 32 44 26 C60 19 78 28 82 46 C86 66 72 84 50 86 C26 88 8 70 8 48"
      strokeWidth={strokeWidth}
      {...strokeProps}
      {...draw(delay, 1.6)}
    />
  </svg>
);

export const Squiggle = ({ className, delay = 0, strokeWidth = 6 }) => (
  <svg viewBox="0 0 200 40" className={className} aria-hidden preserveAspectRatio="none">
    <motion.path
      d="M5 20 C20 5 30 5 45 20 C60 35 70 35 85 20 C100 5 110 5 125 20 C140 35 150 35 165 20 C180 5 185 8 195 16"
      strokeWidth={strokeWidth}
      {...strokeProps}
      {...draw(delay, 1.4)}
    />
  </svg>
);

export const LoopArrow = ({ className, delay = 0, strokeWidth = 5 }) => (
  <svg viewBox="0 0 120 100" className={className} aria-hidden>
    <motion.path
      d="M10 80 C20 40 60 14 86 30 C104 42 96 64 80 62 C66 60 70 40 88 42 C100 44 106 56 104 68"
      strokeWidth={strokeWidth}
      {...strokeProps}
      {...draw(delay, 1.3)}
    />
    <motion.path
      d="M94 56 L104 70 L114 58"
      strokeWidth={strokeWidth}
      {...strokeProps}
      {...draw(delay + 1.1, 0.4)}
    />
  </svg>
);

// Rough oval that encircles a word — absolutely position over the target.
export const ScribbleRing = ({ className, delay = 0, strokeWidth = 4 }) => (
  <svg viewBox="0 0 220 80" className={className} aria-hidden preserveAspectRatio="none">
    <motion.path
      d="M115 8 C50 4 8 18 8 40 C8 64 60 76 118 74 C176 72 212 58 212 38 C212 16 170 4 105 7 C80 8 55 12 38 18"
      strokeWidth={strokeWidth}
      {...strokeProps}
      {...draw(delay, 1.4)}
    />
  </svg>
);

// Hand-drawn double underline — absolutely position under the target.
export const ScribbleUnderline = ({ className, delay = 0, strokeWidth = 5 }) => (
  <svg viewBox="0 0 300 30" className={className} aria-hidden preserveAspectRatio="none">
    <motion.path
      d="M6 14 C60 6 140 4 294 10"
      strokeWidth={strokeWidth}
      {...strokeProps}
      {...draw(delay, 0.7)}
    />
    <motion.path
      d="M30 24 C110 17 200 16 270 21"
      strokeWidth={strokeWidth}
      {...strokeProps}
      {...draw(delay + 0.55, 0.6)}
    />
  </svg>
);

export const Asterisk = ({ className, delay = 0, strokeWidth = 7 }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <motion.path d="M50 12 L50 88" strokeWidth={strokeWidth} {...strokeProps} {...draw(delay, 0.4)} />
    <motion.path d="M17 31 L83 69" strokeWidth={strokeWidth} {...strokeProps} {...draw(delay + 0.25, 0.4)} />
    <motion.path d="M83 31 L17 69" strokeWidth={strokeWidth} {...strokeProps} {...draw(delay + 0.5, 0.4)} />
  </svg>
);

export const Burst = ({ className, delay = 0, strokeWidth = 6 }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    {[
      'M50 6 L50 24',
      'M81 19 L69 31',
      'M94 50 L76 50',
      'M81 81 L69 69',
      'M50 94 L50 76',
      'M19 81 L31 69',
      'M6 50 L24 50',
      'M19 19 L31 31',
    ].map((d, i) => (
      <motion.path
        key={d}
        d={d}
        strokeWidth={strokeWidth}
        {...strokeProps}
        {...draw(delay + i * 0.06, 0.3)}
      />
    ))}
  </svg>
);

export const Heart = ({ className, delay = 0, strokeWidth = 6 }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <motion.path
      d="M50 84 C20 62 8 44 14 30 C20 16 40 16 50 32 C60 16 80 16 86 30 C92 44 80 62 50 84 Z"
      strokeWidth={strokeWidth}
      {...strokeProps}
      {...draw(delay, 1)}
    />
  </svg>
);
