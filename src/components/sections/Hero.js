import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaArrowRight,
} from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { sectionContainer, fadeUp, chipPop } from '../../utils/motion';
import SplitText from '../fx/SplitText';
import MorphBlob from '../fx/MorphBlob';
import Magnetic from '../fx/Magnetic';
import OrbitBadge from '../fx/OrbitBadge';
import {
  Sparkle,
  Star,
  Spiral,
  LoopArrow,
  Asterisk,
  ScribbleUnderline,
} from '../fx/Doodles';

const socials = [
  { Icon: FaGithub, label: 'GitHub', href: 'https://github.com/simran1362' },
  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/simran-bardhan/' },
  { Icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/essssbeeee/' },
  { Icon: FaEnvelope, label: 'Email', href: 'mailto:simranbardhan13@gmail.com' },
];

// Pill words pop in after the anime.js letters have mostly landed.
const pillPop = (delay) => ({
  initial: { opacity: 0, scale: 0.4, rotate: -12 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  transition: { delay, type: 'spring', stiffness: 260, damping: 13 },
});

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const blobYRight = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Mouse parallax — doodles drift at different depths as the cursor roams.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });
  // Custom hook: maps the smoothed mouse offset to a parallax layer depth.
  const useDepth = (d) => ({
    x: useTransform(smx, (v) => v * d),
    y: useTransform(smy, (v) => v * d),
  });
  const layer1 = useDepth(18);
  const layer2 = useDepth(-26);
  const layer3 = useDepth(38);
  const layer4 = useDepth(-44);

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const open = (href) => window.open(href, '_blank', 'noopener,noreferrer');

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden pt-28 md:pt-32 min-h-screen flex flex-col bg-white dark:bg-surface-dark"
    >
      {/* Morphing gradient blobs with scroll parallax */}
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute hidden md:block -top-40 -left-48 w-[640px] h-[640px] blur-2xl"
      >
        <MorphBlob className="w-full h-full" seed={7} opacity={0.4} />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: blobYRight }}
        className="pointer-events-none absolute top-1/4 -right-44 w-[520px] h-[520px] blur-2xl"
      >
        <MorphBlob className="w-full h-full" seed={23} opacity={0.32} from="#9ACD32" to="#C5E869" />
      </motion.div>

      {/* Floating doodles — mouse parallax layers */}
      <motion.div aria-hidden style={layer1} className="pointer-events-none absolute top-[18%] left-[6%] hidden md:block text-accent">
        <Sparkle className="w-12 h-12 animate-bobble" delay={1.2} />
      </motion.div>
      <motion.div aria-hidden style={layer2} className="pointer-events-none absolute top-[14%] right-[22%] hidden md:block text-brand-pink">
        <Star className="w-9 h-9 animate-float" delay={1.5} />
      </motion.div>
      <motion.div aria-hidden style={layer3} className="pointer-events-none absolute bottom-[26%] left-[12%] hidden lg:block text-brand-orange">
        <Spiral className="w-14 h-14" delay={1.8} />
      </motion.div>
      <motion.div aria-hidden style={layer4} className="pointer-events-none absolute top-[42%] right-[8%] hidden lg:block text-accent-deep dark:text-accent">
        <Asterisk className="w-10 h-10 animate-bobble" delay={2} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionContainer(0.14, 0.1)}
        style={{ y: contentY }}
        className="section-shell section-pad relative z-10 flex-1 flex flex-col justify-center !py-10 md:!py-14"
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
                <motion.div key={label} variants={chipPop}>
                  <Magnetic strength={0.5}>
                    <button
                      type="button"
                      onClick={() => open(href)}
                      aria-label={label}
                      className="w-9 h-9 flex items-center justify-center rounded-full text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  </Magnetic>
                </motion.div>
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
          <div className="col-span-12 lg:col-span-11 text-center lg:text-left relative">
            {/* Orbiting "open to work" badge */}
            <div className="hidden xl:block absolute -top-6 right-10 w-32 h-32 text-black/70 dark:text-white/70">
              <OrbitBadge>
                <span className="text-3xl animate-bobble">✦</span>
              </OrbitBadge>
            </div>

            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-black/15 dark:border-white/20 text-sm font-medium text-black dark:text-white"
            >
              <motion.span
                animate={{ rotate: [0, 18, -8, 18, 0] }}
                transition={{ delay: 1.4, duration: 1.2, repeat: Infinity, repeatDelay: 3.5 }}
                className="inline-block origin-[70%_70%]"
              >
                👋
              </motion.span>
              Hi, I'm Simran Bardhan
            </motion.p>

            <h1 className="font-bold tracking-tight text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1.08] text-black dark:text-white">
              <SplitText text="Software" delay={150} className="mr-4" />
              <motion.span {...pillPop(0.85)} className="pill-highlight pill-highlight--accent inline-block align-middle">
                Developer
              </motion.span>
              <br />
              <SplitText text="& UI/UX" delay={450} className="mr-4" />
              <span className="relative inline-block align-middle">
                <motion.span {...pillPop(1.1)} className="pill-highlight inline-block">
                  Designer.
                </motion.span>
                <ScribbleUnderline
                  className="absolute -bottom-5 left-2 right-2 h-5 text-brand-pink"
                  delay={1.6}
                />
              </span>
            </h1>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <p className="lg:col-span-7 text-base md:text-lg text-ink-lightMuted dark:text-ink-darkMuted leading-relaxed max-w-[640px] mx-auto lg:mx-0">
                Mumbai-based, currently building enterprise web at{' '}
                <strong className="text-black dark:text-white">Apollo Global Management</strong>{' '}
                with AEM, Lit and Web Components. Incoming{' '}
                <strong className="text-black dark:text-white">M.S. Computer Science</strong>{' '}
                student at <strong className="text-black dark:text-white">NYU Tandon School of Engineering</strong>.
                MERN, Next.js and a designer's eye come standard.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Magnetic strength={0.25} className="w-full sm:w-auto">
                <button
                  onClick={() => open('mailto:simranbardhan13@gmail.com')}
                  className="btn-pill w-full sm:w-auto justify-center"
                >
                  <span className="btn-pill__icon">
                    <HiPhone className="w-4 h-4" />
                  </span>
                  Schedule a Call
                </button>
              </Magnetic>

              <Magnetic strength={0.25} className="w-full sm:w-auto">
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
              </Magnetic>

              {/* Looping arrow doodle pointing back at the CTAs */}
              <LoopArrow
                className="hidden lg:block w-16 h-14 text-accent-deep dark:text-accent -scale-x-100 rotate-12"
                delay={2.2}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        aria-label="Scroll to skills"
        onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="relative z-10 mx-auto mb-8 mt-16 flex flex-col items-center gap-2 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-1.5">
          <motion.span
            className="w-1 h-2 rounded-full bg-current"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.button>
    </section>
  );
};

export default Hero;
