import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaHeart,
  FaArrowRight,
} from 'react-icons/fa';
import {
  sectionContainer,
  fadeUp,
  chipPop,
  inViewport,
} from '../../utils/motion';

const socialLinks = [
  { Icon: FaGithub, url: 'https://github.com/simran1362', label: 'GitHub' },
  { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/simran-bardhan/', label: 'LinkedIn' },
  { Icon: FaInstagram, url: 'https://instagram.com/', label: 'Instagram' },
  { Icon: FaEnvelope, url: 'mailto:simranbardhan13@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const handleSocialClick = (url) => window.open(url, '_blank', 'noopener,noreferrer');
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-dark text-white relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] blob-green opacity-60"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={inViewport}
        variants={sectionContainer(0.1, 0.05)}
        className="section-shell relative px-5 md:px-10 pt-20 pb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand block */}
          <motion.div variants={fadeUp} className="md:col-span-5">
            <h3 className="font-nunito text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              SIMRAN<span className="text-accent">.</span>BARDHAN
            </h3>
            <p className="text-base text-white/70 leading-relaxed mb-6 max-w-md">
              Software Developer specializing in MERN Stack, Next.js, and UI/UX Design. Always
              shipping, always learning.
            </p>
            <button onClick={() => scrollToSection('#contact')} className="btn-pill">
              <span className="btn-pill__icon">
                <FaArrowRight className="w-3.5 h-3.5" />
              </span>
              Start a Project
            </button>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp} className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60 mb-5">
              Navigate
            </h4>
            <motion.ul
              variants={sectionContainer(0.06, 0.05)}
              className="flex flex-col gap-2.5"
            >
              {quickLinks.map((link) => (
                <motion.li key={link.name} variants={fadeUp}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="text-base text-white/80 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Get in touch */}
          <motion.div variants={fadeUp} className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60 mb-5">
              Get in Touch
            </h4>
            <a
              href="mailto:simranbardhan13@gmail.com"
              className="block text-lg md:text-xl font-semibold text-white hover:text-accent transition-colors mb-4"
            >
              simranbardhan13@gmail.com
            </a>
            <p className="text-base text-white/70 mb-6">Mumbai, Maharashtra · Open to remote</p>

            <motion.div variants={sectionContainer(0.06, 0.05)} className="flex gap-2">
              {socialLinks.map(({ Icon, url, label }) => (
                <motion.button
                  key={label}
                  variants={chipPop}
                  type="button"
                  aria-label={label}
                  onClick={() => handleSocialClick(url)}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:text-black hover:border-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p className="flex items-center gap-2 text-sm text-white/60">
            © {new Date().getFullYear()} Simran Bardhan. Made with{' '}
            <FaHeart className="w-3.5 h-3.5 text-brand-pink" /> and React.
          </p>
          <p className="text-sm text-white/60">All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
