import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPaintBrush,
  FaCode,
  FaGraduationCap,
} from 'react-icons/fa';

const experiences = [
  {
    label: '2024',
    sub: 'Jun · Present',
    period: 'Jun 2024 — Present',
    company: 'Apollo Global Management',
    role: 'Software Developer',
    location: 'Mumbai, India',
    body:
      'Leading the redesign and rebuild of the corporate intranet in Adobe Experience Manager — improving productivity across teams and giving content owners direct, developer-free ownership of their pages.',
    highlights: [
      'Built a scalable Web Components + Lit library for cross-team reuse',
      'Reduced developer dependency via self-service AEM workflows',
      'Tracked emerging tech: Lab42, MCP, Apollo AI Core Platform',
    ],
    Icon: FaBriefcase,
    accent: '#9ACD32',
  },
  {
    label: '2024',
    sub: 'Mar · Jun',
    period: 'Mar 2024 — Jun 2024',
    company: 'SigmaRed Technologies',
    role: 'Frontend Developer · Internship',
    location: 'Remote',
    body:
      'Frontend lead on the SigmaRed AI Platform — designed and built it from the ground up, alongside contributions to the Cyber AI Platform with intuitive, modern UI layouts.',
    highlights: [
      'Designed product UI end-to-end alongside development',
      'Modern interaction patterns for AI / security workflows',
      'Maintained timely content updates and feature delivery',
    ],
    Icon: FaCode,
    accent: '#FF6B35',
  },
  {
    label: '2023',
    sub: 'Jun · Aug',
    period: 'Jun 2023 — Aug 2023',
    company: 'Apollo Global Management',
    role: 'Software Developer · Internship',
    location: 'Mumbai, India',
    body:
      'First Apollo stint. Built a subscription tracker inside the Employee Investment Portal for real-time fund-status visibility, and authored end-to-end docs for a React component library used across teams.',
    highlights: [
      'Subscription tracker integrated into the Employee Investment Portal',
      'Comprehensive React component-library documentation',
      'Adopted across teams for clarity, usability and onboarding',
    ],
    Icon: FaBriefcase,
    accent: '#9ACD32',
  },
  {
    label: '2022',
    sub: 'Aug · Nov',
    period: 'Aug 2022 — Nov 2022',
    company: 'Safwhigre',
    role: 'UX Designer · Internship',
    location: 'Remote',
    body:
      'Independently designed Paathshaala — an interactive learning application — from raw concept through to high-fidelity execution. Owned the visual system, flows and prototypes end-to-end.',
    highlights: [
      'End-to-end UX from research to high-fidelity design',
      'Engaging, interactive patterns for student learning',
      'Visual system tuned for younger audiences',
    ],
    Icon: FaPaintBrush,
    accent: '#2196F3',
  },
  {
    label: '2020',
    sub: 'May · May',
    period: 'May 2020 — May 2024',
    company: 'DJ Sanghvi College',
    role: 'B.Tech Computer Engineering · Honours in Intelligent Computing',
    location: 'Mumbai, India',
    body:
      'Earned a B.Tech in Computer Engineering with Honours in Intelligent Computing from DJSCE. Mentored juniors across DJ Unicode and DJ ACM, helping them build strong foundations in frontend development.',
    highlights: [
      'Honours in Intelligent Computing',
      'DJ Unicode & DJ ACM community mentor',
      'GCCP Cloud Practitioner via Google Student Dev Club',
    ],
    Icon: FaGraduationCap,
    accent: '#FF9800',
  },
];

const ExperienceTimeline = () => {
  const sectionRef = useRef(null);
  const isJumpingRef = useRef(false);
  const jumpTimeoutRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // Suppress scroll-driven active updates while a programmatic jump
    // is in flight — otherwise the smooth-scroll passes through every
    // intermediate experience and you see them flash by.
    if (isJumpingRef.current) return;
    const clamped = Math.max(0, Math.min(0.9999, v));
    const idx = Math.min(
      experiences.length - 1,
      Math.floor(clamped * experiences.length),
    );
    if (idx !== active) setActive(idx);
  });

  const scrollToIndex = (idx) => {
    const node = sectionRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const scrollableLen = node.offsetHeight - window.innerHeight;
    const segment = scrollableLen / experiences.length;
    const targetY = sectionTop + segment * idx + segment * 0.5;

    // Lock active immediately to the clicked index so the content panel
    // jumps straight to it, then unlock once the smooth scroll settles.
    isJumpingRef.current = true;
    setActive(idx);
    window.scrollTo({ top: targetY, behavior: 'smooth' });

    if (jumpTimeoutRef.current) clearTimeout(jumpTimeoutRef.current);
    jumpTimeoutRef.current = setTimeout(() => {
      isJumpingRef.current = false;
    }, 900);
  };

  useEffect(() => () => {
    if (jumpTimeoutRef.current) clearTimeout(jumpTimeoutRef.current);
  }, []);

  const exp = experiences[active];
  const ExpIcon = exp.Icon;

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${experiences.length * 85}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center py-8 md:py-12">
        <div className="section-shell w-full">
          <div className="panel-dark relative overflow-hidden">
            {/* Decorative accent blob — picks up the active experience color */}
            <motion.div
              key={`blob-${active}`}
              aria-hidden
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 0.18, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full blur-3xl"
              style={{ background: exp.accent }}
            />

            {/* Eyebrow */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8 md:mb-10 relative z-10">
              <span className="eyebrow-pill text-white border-white/40">
                <FaArrowRight className="w-3 h-3 text-accent" /> Career Timeline
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wider text-white/40">
                {String(active + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
              </span>
            </div>

            <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-12 relative z-10">
              {/* Year rail */}
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <div className="flex md:flex-col gap-4 md:gap-2 overflow-x-auto md:overflow-visible -mx-2 md:mx-0 px-2 md:px-0 pb-2 md:pb-0">
                  {experiences.map((e, i) => {
                    const isActive = i === active;
                    return (
                      <button
                        key={`${e.label}-${i}`}
                        type="button"
                        onClick={() => scrollToIndex(i)}
                        className="text-left flex md:flex-row items-baseline md:items-center gap-3 group shrink-0 md:shrink py-2 md:py-2.5"
                      >
                        {/* Marker dot — mobile hidden, desktop visible */}
                        <span
                          className={`hidden md:flex w-2.5 h-2.5 rounded-full transition-all ${
                            isActive
                              ? 'scale-125'
                              : 'bg-white/15 group-hover:bg-white/30'
                          }`}
                          style={isActive ? { backgroundColor: e.accent } : undefined}
                        />
                        <span
                          className={`block font-bold leading-none transition-all whitespace-nowrap ${
                            isActive
                              ? 'text-2xl md:text-4xl text-white'
                              : 'text-base md:text-2xl text-white/25 group-hover:text-white/55'
                          }`}
                        >
                          {e.label}
                          <span
                            className={`hidden md:inline-block ml-2 align-middle text-[10px] tracking-widest font-semibold uppercase transition-colors ${
                              isActive ? 'text-white/60' : 'text-white/20'
                            }`}
                          >
                            {e.sub}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="col-span-12 md:col-span-8 lg:col-span-9 min-h-[420px] md:min-h-[460px]">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={active}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center text-black"
                        style={{ backgroundColor: exp.accent }}
                      >
                        <ExpIcon className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                      <span className="text-xs md:text-sm uppercase tracking-[0.18em] text-white/60 font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.05] mb-3">
                      {exp.company}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6 md:mb-7">
                      <span className="text-base md:text-xl text-white/80">{exp.role}</span>
                      <span className="hidden sm:inline text-white/30">·</span>
                      <span className="inline-flex items-center gap-1.5 text-white/50 text-sm">
                        <FaMapMarkerAlt className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>

                    <p className="text-white/70 leading-relaxed mb-6 md:mb-7 max-w-2xl text-sm md:text-base">
                      {exp.body}
                    </p>

                    <ul className="space-y-2.5 max-w-2xl">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-sm md:text-[15px] text-white/80"
                        >
                          <span
                            className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: exp.accent }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </AnimatePresence>
              </div>
            </div>

            {/* Scroll progress bar */}
            <div className="mt-10 md:mt-12 relative z-10">
              <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ width: progressWidth, backgroundColor: exp.accent }}
                />
              </div>
              <div className="mt-3 flex justify-between text-[10px] md:text-xs uppercase tracking-widest text-white/30 font-medium">
                <span>{experiences[experiences.length - 1].label}</span>
                <span className="text-white/50">scroll to explore</span>
                <span>{experiences[0].label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
