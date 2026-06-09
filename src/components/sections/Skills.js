import React from 'react';
import { motion } from 'framer-motion';
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
import {
  HiCode,
  HiChevronLeft,
  HiChevronRight,
  HiCube,
  HiLightningBolt,
} from 'react-icons/hi';
import {
  sectionContainer,
  eyebrowSlide,
  headlineReveal,
  fadeUp,
  cardPop,
  slideInRight,
  inViewport,
} from '../../utils/motion';

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
  return (
    <section id="skills" className="section-pad bg-white dark:bg-surface-dark">
      <div className="section-shell">
        <div className="panel-dark">
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

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
              {/* Left column: title + cards */}
              <div className="md:col-span-8">
                <motion.h2
                  variants={headlineReveal}
                  className="font-bold tracking-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-10"
                >
                  My Extensive
                  <br />
                  List of <span className="pill-highlight pill-highlight--accent">Skills</span>
                </motion.h2>

                <motion.div
                  variants={sectionContainer(0.1, 0.1)}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.title}
                      variants={cardPop}
                      whileHover={{ rotate: 4, y: -6 }}
                      className="bg-surface-darkAlt2 rounded-3xl p-6 h-full flex flex-col border border-white/5 transition-shadow hover:shadow-card"
                    >
                      <div className="flex flex-wrap gap-2 items-center mb-5">
                        {skill.icons.map(({ Icon, color, label }, iconIdx) => (
                          <div
                            key={iconIdx}
                            title={label}
                            className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10"
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
                className="md:col-span-4 flex flex-col justify-between gap-10 md:text-right md:items-end"
              >
                <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-md md:ml-auto">
                  Specialized in MERN-stack development, UI/UX design, and machine learning —
                  building innovative solutions with modern technologies and a designer's eye.
                </p>

                <motion.div variants={fadeUp} className="flex md:justify-end gap-3">
                  <button
                    aria-label="Previous"
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-colors hover:border-accent hover:bg-accent/10"
                  >
                    <HiChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    aria-label="Next"
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-colors hover:border-accent hover:bg-accent/10"
                  >
                    <HiChevronRight className="w-5 h-5 text-white" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
