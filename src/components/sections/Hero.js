import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaArrowRight,
} from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import {
  sectionContainer,
  headlineReveal,
  fadeUp,
  chipPop,
} from '../../utils/motion';

const socials = [
  { Icon: FaGithub, label: 'GitHub', href: 'https://github.com/simran1362' },
  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/simran-bardhan/' },
  { Icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/' },
  { Icon: FaEnvelope, label: 'Email', href: 'mailto:simranbardhan13@gmail.com' },
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobYRight = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden pt-28 md:pt-32 bg-white dark:bg-surface-dark"
    >
      {/* Decorative green blobs with slight scroll parallax */}
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute -top-32 -left-40 w-[700px] h-[700px] blob-green animate-blob"
      />
      <motion.div
        aria-hidden
        style={{ y: blobYRight }}
        className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] blob-green opacity-80 animate-blob"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionContainer(0.14, 0.1)}
        className="section-shell section-pad relative z-10"
      >
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Vertical social rail (lg+) */}
          <motion.aside
            variants={fadeUp}
            className="hidden lg:flex col-span-1 flex-col items-center gap-5 pt-6"
          >
            <motion.div
              variants={sectionContainer(0.08, 0)}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3"
            >
              {socials.map(({ Icon, label, href }) => (
                <motion.button
                  key={label}
                  variants={chipPop}
                  type="button"
                  onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.button>
              ))}
            </motion.div>
            <span
              className="text-xs font-medium tracking-wider text-black/70 dark:text-white/70 mt-2"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              @simran1362
            </span>
            <div className="w-px h-16 bg-black/30 dark:bg-white/30" />
          </motion.aside>

          {/* Main column */}
          <div className="col-span-12 lg:col-span-11 text-center lg:text-left">
            <motion.h1
              variants={headlineReveal}
              className="font-bold tracking-tight text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[1.05] text-black dark:text-white"
            >
              Software <span className="pill-highlight">Developer</span>
              <br />& UI/UX <span className="pill-highlight">Designer.</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <p className="lg:col-span-7 lg:col-start-6 text-base md:text-lg text-ink-lightMuted dark:text-ink-darkMuted leading-relaxed max-w-[640px] mx-auto lg:mx-0">
                Hi, I'm <strong className="text-black dark:text-white">Simran Bardhan</strong> —
                Mumbai-based, currently building enterprise web at{' '}
                <strong className="text-black dark:text-white">Apollo Global Management</strong>{' '}
                with AEM, Lit and Web Components. MERN, Next.js and a designer's eye come standard.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <button
                onClick={() => window.open('mailto:simranbardhan13@gmail.com', '_blank')}
                className="btn-pill w-full sm:w-auto justify-center"
              >
                <span className="btn-pill__icon">
                  <HiPhone className="w-4 h-4" />
                </span>
                Schedule a Call
              </button>

              <button
                onClick={() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-pill btn-pill--solid w-full sm:w-auto justify-center"
              >
                <span className="btn-pill__icon">
                  <FaArrowRight className="w-3.5 h-3.5" />
                </span>
                View Projects
              </button>
            </motion.div>

            {/* Mobile + tablet social row (desktop has the vertical rail) */}
            <motion.div
              variants={fadeUp}
              className="lg:hidden mt-10 flex items-center justify-center gap-2"
            >
              {socials.map(({ Icon, label, href }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-black/15 dark:border-white/15 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
