import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import {
  sectionContainer,
  eyebrowSlide,
  headlineReveal,
  fadeUp,
  softFade,
  inViewport,
} from '../../utils/motion';
import ExperienceTimeline from '../ExperienceTimeline';

// Top row: companies, communities, programs Simran has been part of.
const trackOne = [
  { name: 'Apollo Global Management', solid: true },
  { name: 'SigmaRed Technologies' },
  { name: 'Safwhigre' },
  { name: 'DJ Unicode', solid: true },
  { name: 'DJ ACM' },
  { name: 'Google Student Dev Club' },
  { name: 'DJ Sanghvi College', solid: true },
  { name: 'Make4Thon Winner' },
  { name: 'GCCP — Google Cloud' },
];

// Bottom row: roles, focus areas, tech, hats Simran has worn.
const trackTwo = [
  { name: 'Software Developer' },
  { name: 'Frontend Developer', solid: true },
  { name: 'UX Designer' },
  { name: 'AEM', solid: true },
  { name: 'Lit · Web Components' },
  { name: 'React · Next.js · TypeScript', solid: true },
  { name: 'MCP Servers' },
  { name: 'n8n Automation', solid: true },
  { name: 'ML · NLP' },
  { name: 'Published Researcher' },
];


const Marquee = ({ items, duration = 30, direction = 'left' }) => {
  const xKeyframes = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];
  return (
    <div
      className="relative overflow-hidden py-2"
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: xKeyframes }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item.name}-${i}`}
            className={
              'chip-company shrink-0 ' +
              (item.solid ? 'chip-company--solid' : 'chip-company--outline')
            }
          >
            {item.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-pad bg-white dark:bg-surface-dark relative">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          variants={sectionContainer(0.12, 0.05)}
        >
          <motion.div variants={eyebrowSlide} className="flex items-center gap-3 mb-6">
            <span className="eyebrow-pill text-black dark:text-white">
              <FaArrowRight className="w-3 h-3" /> Experience
            </span>
          </motion.div>

          <motion.h2
            variants={headlineReveal}
            className="font-bold tracking-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-black dark:text-white max-w-5xl"
          >
            Computer Engineering{' '}
            <span className="pill-highlight pill-highlight--accent">Student</span>
            <br />& Software <span className="pill-highlight pill-highlight--accent">Developer.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base md:text-lg text-ink-lightMuted dark:text-ink-darkMuted leading-relaxed"
          >
            B-Tech in Computer Engineering with Honours in Intelligent Computing from Dwarkadas
            Jivanlal Sanghvi College of Engineering, Mumbai. Hands-on across full-stack development
            and UI/UX design.
          </motion.p>
        </motion.div>

        {/* Previously worked on - dual-row marquee, opposing directions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer(0.08, 0.1)}
          className="mt-16 mb-24"
        >
          <motion.h3
            variants={fadeUp}
            className="text-base md:text-lg font-bold uppercase tracking-[0.18em] text-black dark:text-white text-center mb-8 leading-tight"
          >
            PREVIOUSLY WORKED ON
          </motion.h3>

          <motion.div variants={softFade} className="space-y-3">
            <Marquee items={trackOne} duration={32} direction="left" />
            <Marquee items={trackTwo} duration={28} direction="right" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-driven career timeline — sticky panel + year rail */}
      <ExperienceTimeline />
    </section>
  );
};

export default Experience;
