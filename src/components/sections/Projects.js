import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaTrophy,
  FaRobot,
  FaArrowRight,
  FaBookOpen,
} from 'react-icons/fa';
import {
  sectionContainer,
  eyebrowSlide,
  headlineReveal,
  fadeUp,
  cardPop,
  inViewport,
} from '../../utils/motion';

const projects = [
  {
    title: 'AI-Driven Foul Message Flagging',
    blurb:
      'Co-authored a published research paper on a novel ensemble for hate-speech and sarcasm detection — combining BERT, Hierarchical Attention Networks, Word-Level LSTM and Zero-Shot Classification.',
    highlights: [
      'Categorical classification with softmax + cross-entropy loss',
      'Data augmentation for cross-cultural adaptability',
      'Real-time flagging with rule-based + sentiment context',
    ],
    technologies: ['NLP', 'BERT', 'HAN', 'LSTM', 'Research'],
    link: 'https://doi.org/10.53555/kuey.v30i5.7446',
    type: 'research',
    award: 'Published',
    accent: '#1F1F1F',
    bg: 'linear-gradient(135deg, #1F1F1F 0%, #0A0A0A 100%)',
    invert: true,
  },
  {
    title: 'Vector Borne Disease Prediction',
    blurb:
      'Predicted dengue incidence in Mumbai by correlating climate factors with reported cases. Built a custom 85-entry dataset across temperature, humidity, precipitation and location.',
    highlights: [
      'Modeled with Linear Regression, KNN, Decision Tree, SVR, NuSVR, K-Means',
      'NuSVR delivered the best fit (MSE 2860.05)',
      'Found dengue peaks in Aug–Sep at 26–27°C',
    ],
    technologies: ['Machine Learning', 'Python', 'Data Science'],
    type: 'ml',
    accent: '#FF9800',
    bg: 'linear-gradient(135deg, #FFD27F 0%, #FF9800 100%)',
  },
  {
    title: 'SigmaRed AI Platform',
    blurb:
      'Designed and built the SigmaRed AI Platform from scratch as Frontend Developer — and contributed to the Cyber AI Platform with intuitive UI layouts and modern interaction patterns.',
    highlights: [
      'Designed product UI end-to-end alongside development',
      'Maintained timely content updates and feature delivery',
      'Modern interaction patterns for AI/security workflows',
    ],
    technologies: ['React', 'TypeScript', 'UI/UX'],
    link: 'https://www.sigmared.ai/',
    type: 'web',
    accent: '#9ACD32',
    bg: 'linear-gradient(135deg, #C5E869 0%, #9ACD32 100%)',
  },
  {
    title: 'Make4Thon — Mental Health App',
    blurb:
      'Front-end design for a mental-health app that took 1st place at Make4Thon (Thapar College × Microsoft Learn Student Ambassadors).',
    highlights: [
      'Bilingual yoga & meditation modules',
      'Group video calls and anonymous posting',
      'User feedback loop integrated',
    ],
    technologies: ['UI/UX', 'React', 'Prototyping'],
    repository: 'https://github.com/simran1362/Make4thon_MedCare.git',
    type: 'web',
    award: '1st Place',
    accent: '#2196F3',
    bg: 'linear-gradient(135deg, #6FB5FF 0%, #2196F3 100%)',
    invert: true,
  },
  {
    title: 'RecipePool',
    blurb:
      'Designed and shipped a recipe-sharing app on the Google Play Store as the UI/UX lead for DJ Unicode.',
    highlights: [
      'Owned the entire visual system — palette, typography, components',
      'Intuitive flows for a delightful first-run experience',
    ],
    technologies: ['UI/UX', 'Mobile App', 'Play Store'],
    link: 'https://play.google.com/store/apps/details?id=com.djunicode.recipepool',
    type: 'mobile',
    accent: '#9ACD32',
    bg: 'linear-gradient(135deg, #F6F7F4 0%, #E1F0B8 100%)',
  },
  {
    title: 'Paathshaala — Learning App',
    blurb:
      'Independently designed Paathshaala as UX Designer at Safwhigre — owning the product from concept to execution with an intuitive, engaging interface for student learning.',
    highlights: [
      'End-to-end UX from research to high-fidelity design',
      'Engaging, interactive learning patterns',
      'Visual system tuned for younger audiences',
    ],
    technologies: ['UX Research', 'Figma', 'Prototyping'],
    type: 'mobile',
    accent: '#FF6B35',
    bg: 'linear-gradient(135deg, #FFB59A 0%, #FF6B35 100%)',
  },
];

const ProjectIcon = ({ type, className }) => {
  switch (type) {
    case 'mobile':
      return <FaGooglePlay className={className} />;
    case 'ml':
      return <FaRobot className={className} />;
    case 'research':
      return <FaBookOpen className={className} />;
    default:
      return <FaExternalLinkAlt className={className} />;
  }
};

const projectTypeLabel = (type) => {
  switch (type) {
    case 'mobile':
      return 'Mobile App';
    case 'ml':
      return 'Machine Learning';
    case 'research':
      return 'Research Paper';
    default:
      return 'Web App';
  }
};

const Projects = () => {
  return (
    <section id="projects" className="section-pad bg-white dark:bg-surface-dark relative">
      <div className="section-shell relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          variants={sectionContainer(0.12, 0.05)}
        >
          <motion.div variants={eyebrowSlide} className="flex items-center gap-3 mb-6">
            <span className="eyebrow-pill text-black dark:text-white">
              <FaArrowRight className="w-3 h-3" /> Work
            </span>
          </motion.div>

          <motion.h2
            variants={headlineReveal}
            className="font-bold tracking-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-black dark:text-white max-w-4xl"
          >
            Take a look at the{' '}
            <span className="pill-highlight pill-highlight--accent">latest projects</span> I've done.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base md:text-lg text-ink-lightMuted dark:text-ink-darkMuted leading-relaxed"
          >
            From mobile apps and award-winning hackathon builds to ML research and design systems —
            here's a curated selection of work I'm proud of.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          variants={sectionContainer(0.1, 0.1)}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardPop}
              whileHover={{ y: -8 }}
              className="group flex flex-col rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-surface-lightAlt dark:bg-surface-darkAlt shadow-soft"
            >
              {/* Visual banner — hidden on mobile, shown from sm+ */}
              <div
                className="relative h-48 hidden lg:flex items-end p-5"
                style={{ background: project.bg }}
              >
                {project.award && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-black/85 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    <FaTrophy className="w-3 h-3 text-accent" /> {project.award}
                  </div>
                )}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    project.invert ? 'bg-white/15 text-white' : 'bg-black/85 text-white'
                  } backdrop-blur-sm`}
                >
                  <ProjectIcon type={project.type} className="w-5 h-5" />
                </div>
                <div
                  className={`ml-3 text-xs font-semibold uppercase tracking-wider ${
                    project.invert ? 'text-white/80' : 'text-black/70'
                  }`}
                >
                  {projectTypeLabel(project.type)}
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-[15px] text-ink-lightMuted dark:text-ink-darkMuted leading-relaxed mb-4">
                  {project.blurb}
                </p>

                <ul className="mb-5 space-y-1.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-ink-lightMuted dark:text-ink-darkMuted"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: project.accent }}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {project.link && (
                    <button
                      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                      style={{ backgroundColor: project.accent }}
                    >
                      <ProjectIcon type={project.type} className="w-3.5 h-3.5" />
                      {project.type === 'mobile'
                        ? 'View on Play Store'
                        : project.type === 'research'
                        ? 'Read Paper'
                        : 'Live Demo'}
                    </button>
                  )}
                  {project.repository && (
                    <button
                      onClick={() =>
                        window.open(project.repository, '_blank', 'noopener,noreferrer')
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-black/15 dark:border-white/20 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      Source
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
