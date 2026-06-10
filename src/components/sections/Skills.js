import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';
import { FaReact, FaNodeJs, FaPython, FaFigma, FaCheck } from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiLit,
  SiWebcomponentsdotorg,
  SiFirebase,
  SiOpenai,
  SiTensorflow,
  SiScikitlearn,
  SiGit,
  SiPostman,
} from 'react-icons/si';
import { HiCode, HiCube, HiLightningBolt } from 'react-icons/hi';
import {
  sectionContainer,
  eyebrowSlide,
  headlineReveal,
  cardPop,
  slideInRight,
  inViewport,
} from '../../utils/motion';
import { Burst, Sparkle, Squiggle } from '../fx/Doodles';

const ICON_SIZE = 28;

const skills = [
  {
    title: 'MERN Stack',
    description: 'MongoDB, Express, React, Node — full-stack JavaScript end-to-end.',
    icons: [
      { Icon: SiMongodb, color: '#47A248', label: 'MongoDB' },
      { Icon: SiExpress, color: '#FFFFFF', label: 'Express' },
      { Icon: FaReact, color: '#61DAFB', label: 'React' },
      { Icon: FaNodeJs, color: '#339933', label: 'Node.js' },
    ],
  },
  {
    title: 'Modern Frontend',
    description: 'React, Next.js and TypeScript for production-grade web apps.',
    icons: [
      { Icon: SiNextdotjs, color: '#FFFFFF', label: 'Next.js' },
      { Icon: SiTypescript, color: '#3178C6', label: 'TypeScript' },
      { Icon: SiJavascript, color: '#F7DF1E', label: 'JavaScript' },
    ],
  },
  {
    title: 'AEM & Web Components',
    description: 'Building scalable component libraries in Adobe Experience Manager with Lit.',
    icons: [
      { Icon: HiCube, color: '#FF6F00', label: 'AEM' },
      { Icon: SiLit, color: '#324FFF', label: 'Lit' },
      { Icon: SiWebcomponentsdotorg, color: '#29ABE2', label: 'Web Components' },
      { Icon: SiFirebase, color: '#FFCA28', label: 'Firebase' },
    ],
  },
  {
    title: 'AI & Automation',
    description: 'MCP servers, n8n workflows, ML and NLP — wiring intelligence into products.',
    icons: [
      { Icon: SiOpenai, color: '#FFFFFF', label: 'MCP' },
      { Icon: HiLightningBolt, color: '#9ACD32', label: 'n8n' },
      { Icon: FaPython, color: '#3776AB', label: 'Python' },
    ],
  },
  {
    title: 'ML & Data Science',
    description: 'Predictive modeling, NLP and ensemble methods — published research.',
    icons: [
      { Icon: SiTensorflow, color: '#FF6F00', label: 'TensorFlow' },
      { Icon: SiScikitlearn, color: '#F7931E', label: 'scikit-learn' },
      { Icon: FaPython, color: '#3776AB', label: 'Python' },
    ],
  },
  {
    title: 'UI/UX & Tooling',
    description: 'Figma-driven design with GitHub, Azure DevOps, Postman and Cursor in the loop.',
    icons: [
      { Icon: FaFigma, color: '#F24E1E', label: 'Figma' },
      { Icon: SiGit, color: '#F05032', label: 'Git' },
      { Icon: SiPostman, color: '#FF6C37', label: 'Postman' },
      { Icon: HiCode, color: '#9ACD32', label: 'Cursor' },
    ],
  },
];

const Skills = () => {
  const gridRef = useRef(null);

  // anime.js: icon tiles pop in with an elastic stagger sweeping out from
  // the center of the grid once the section scrolls into view.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;
    const tiles = grid.querySelectorAll('[data-skill-icon]');
    if (!tiles.length) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      tiles.forEach((t) => {
        t.style.transform = 'none';
        t.style.opacity = '1';
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          animate(tiles, {
            scale: [0, 1],
            rotate: { from: (el, i) => (i % 2 === 0 ? -30 : 30), to: 0 },
            opacity: [0, 1],
            duration: 900,
            delay: stagger(45, { from: 'center', start: 350 }),
            ease: 'outElastic(1, .6)',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-pad bg-white dark:bg-surface-dark">
      <div className="section-shell">
        <div className="panel-dark">
          {/* Corner doodles */}
          <Burst className="absolute top-8 right-8 w-12 h-12 text-accent/60 hidden md:block" delay={0.4} />
          <Squiggle className="absolute bottom-8 right-12 w-32 h-6 text-white/15 hidden lg:block" delay={0.8} />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={inViewport}
            variants={sectionContainer(0.12, 0.05)}
          >
            {/* Eyebrow */}
            <motion.div variants={eyebrowSlide} className="mb-8 md:mb-10">
              <span className="eyebrow-pill text-white border-white/40">
                <FaCheck className="w-3.5 h-3.5 text-accent" /> Why Choose me
              </span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              {/* Left column: title + cards */}
              <div className="lg:col-span-8">
                <motion.h2
                  variants={headlineReveal}
                  className="font-bold tracking-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-10"
                >
                  My Extensive
                  <br />
                  List of{' '}
                  <span className="relative inline-block">
                    <span className="pill-highlight pill-highlight--accent">Skills</span>
                    <Sparkle className="absolute -top-7 -right-7 w-9 h-9 text-accent" delay={0.9} />
                  </span>
                </motion.h2>

                <motion.div
                  ref={gridRef}
                  variants={sectionContainer(0.1, 0.1)}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.title}
                      variants={cardPop}
                      whileHover={{ rotate: 2, y: -8, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                      className="group bg-surface-darkAlt2 rounded-3xl p-6 h-full flex flex-col border border-white/5 transition-shadow hover:shadow-card hover:border-accent/40"
                    >
                      <div className="flex flex-wrap gap-2 items-center mb-5">
                        {skill.icons.map(({ Icon, color, label }, iconIdx) => (
                          <div
                            key={iconIdx}
                            data-skill-icon
                            title={label}
                            style={{ opacity: 0, transform: 'scale(0)' }}
                            className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 transition-colors group-hover:border-white/25 group-hover:animate-wiggle"
                          >
                            <Icon size={ICON_SIZE} color={color} />
                          </div>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                      <p className="text-sm leading-relaxed text-white/60">{skill.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right column */}
              <motion.div
                variants={slideInRight}
                className="lg:col-span-4 flex flex-col justify-between gap-6 lg:text-right lg:items-end"
              >
                <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-md lg:ml-auto">
                  Specialized in enterprise web at <strong className="text-white">Apollo Global Management</strong>{' '}
                  with AEM and Web Components, plus full-stack MERN, AI / automation tooling, and a
                  designer's eye for clean UI.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
