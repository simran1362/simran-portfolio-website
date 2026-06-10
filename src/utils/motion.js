// Reusable framer-motion variants for scroll-driven reveal choreography.
// Apply on any container with `initial="hidden" whileInView="visible" viewport={inViewport}`.

export const easeOut = [0.22, 1, 0.36, 1];

// Default viewport — fire once, as soon as any part of the element enters
// the viewport. We avoid a fixed `amount` fraction because containers that
// are taller than ~5× the viewport (e.g. a 1-col mobile grid of cards) can
// never reach a 20% threshold, leaving children stuck at opacity 0.
export const inViewport = { once: true, amount: 'some' };

// Section container — staggers its children's `visible` state.
export const sectionContainer = (stagger = 0.12, delayChildren = 0.05) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// Slide-in eyebrow pill (first thing the user notices).
export const eyebrowSlide = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
};

// Headline reveal — soft blur lifts away as it rises into place.
export const headlineReveal = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easeOut },
  },
};

// Subhead / description fade-up.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

// Soft fade-in for blobs / decorative elements.
export const softFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: easeOut } },
};

// Card pop — slight scale + lift, used for grid items.
export const cardPop = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

// Chip / pill pop — bouncy spring, optional final rotate.
export const chipPop = {
  hidden: { opacity: 0, scale: 0.6, y: 8 },
  visible: (rotate = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate,
    transition: { type: 'spring', stiffness: 380, damping: 18 },
  }),
};

// Chip falls from above, tumbles slightly, lands with a spring bounce.
// Pass the desired final rotation as the `custom` prop on the motion element.
export const chipFall = {
  hidden: { opacity: 0, y: -180, rotate: -22, scale: 0.9 },
  visible: (rotate = 0) => ({
    opacity: 1,
    y: 0,
    rotate,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 14,
      mass: 0.9,
      opacity: { duration: 0.25 },
    },
  }),
};

// Natural drop — accelerates with gravity, lands cleanly on the floor.
// No spring overshoot, no impact squash — the chip just falls and stops.
// Pass either `rotate` (number) or `{ rotate, fallY, duration }` as `custom`.
export const ballDrop = {
  hidden: (custom) => {
    const fallY =
      (custom && typeof custom === 'object' && custom.fallY) || -260;
    return { opacity: 0, y: fallY, rotate: 0 };
  },
  visible: (custom) => {
    const isObj = custom && typeof custom === 'object';
    const rotate = isObj ? custom.rotate ?? 0 : custom ?? 0;
    const duration = isObj ? custom.duration ?? 0.55 : 0.55;
    return {
      opacity: 1,
      y: 0,
      rotate,
      transition: {
        duration,
        // Cubic bezier ≈ easeIn → soft settle. Mimics gravity acceleration
        // followed by a quick deceleration at the floor (no rebound).
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: 0.18, ease: 'easeOut' },
      },
    };
  },
};

// Side reveals (used for the right-column descriptors).
export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};
export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};
