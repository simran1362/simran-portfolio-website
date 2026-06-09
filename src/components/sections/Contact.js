import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';
import {
  sectionContainer,
  eyebrowSlide,
  headlineReveal,
  fadeUp,
  cardPop,
  inViewport,
} from '../../utils/motion';

const contactInfo = [
  {
    Icon: FaEnvelope,
    title: 'Email',
    value: 'simranbardhan13@gmail.com',
    link: 'mailto:simranbardhan13@gmail.com',
  },
  {
    Icon: FaPhone,
    title: 'Phone',
    value: '+91 9769813103',
    link: 'tel:+919769813103',
  },
  {
    Icon: FaMapMarkerAlt,
    title: 'Location',
    value: 'Mumbai, Maharashtra',
    link: '#',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (!toastOpen) return;
    const t = setTimeout(() => setToastOpen(false), 5000);
    return () => clearTimeout(t);
  }, [toastOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setToastOpen(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const fieldClass =
    'w-full px-4 py-3 rounded-xl bg-white dark:bg-surface-darkAlt2 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 border border-black/10 dark:border-white/15 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors';

  return (
    <section id="contact" className="section-pad bg-white dark:bg-surface-dark relative">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          variants={sectionContainer(0.12, 0.05)}
        >
          <motion.div variants={eyebrowSlide} className="flex items-center gap-3 mb-6">
            <span className="eyebrow-pill text-black dark:text-white">
              <FaArrowRight className="w-3 h-3" /> Contact
            </span>
          </motion.div>

          <motion.h2
            variants={headlineReveal}
            className="font-bold tracking-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-black dark:text-white max-w-5xl"
          >
            Let's <span className="pill-highlight pill-highlight--accent">Connect</span>
            <br />and Create Something{' '}
            <span className="pill-highlight pill-highlight--accent">Amazing.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base md:text-lg text-ink-lightMuted dark:text-ink-darkMuted leading-relaxed"
          >
            Always open to discussing new opportunities and interesting projects. Drop me a line and
            I'll get back to you soon.
          </motion.p>
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          variants={sectionContainer(0.1, 0.1)}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {contactInfo.map((info) => (
            <motion.button
              key={info.title}
              variants={cardPop}
              whileHover={{ y: -4 }}
              type="button"
              onClick={() => {
                if (info.link !== '#') window.open(info.link, '_blank', 'noopener,noreferrer');
              }}
              className="flex items-center gap-4 text-left rounded-2xl p-5 bg-surface-lightAlt dark:bg-surface-darkAlt border border-black/5 dark:border-white/10 transition-all hover:border-accent hover:shadow-card"
              style={{ cursor: info.link !== '#' ? 'pointer' : 'default' }}
            >
              <span className="w-12 h-12 flex-shrink-0 rounded-full bg-accent text-black flex items-center justify-center">
                <info.Icon className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-lightMuted dark:text-ink-darkMuted">
                  {info.title}
                </p>
                <p className="text-sm md:text-base font-medium text-black dark:text-white truncate">
                  {info.value}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          variants={sectionContainer(0.08, 0.1)}
          className="mt-12 max-w-3xl mx-auto rounded-3xl p-6 md:p-10 bg-surface-lightAlt dark:bg-surface-darkAlt border border-black/5 dark:border-white/10"
        >
          <motion.h3
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold text-black dark:text-white text-center mb-2"
          >
            Send Me a Message
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-center text-ink-lightMuted dark:text-ink-darkMuted mb-8"
          >
            I'll respond within 24 hours.
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              className={fieldClass}
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className={fieldClass}
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>

          <motion.input
            variants={fadeUp}
            className={`${fieldClass} mb-4`}
            type="text"
            name="subject"
            required
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <motion.textarea
            variants={fadeUp}
            className={`${fieldClass} mb-6 resize-y min-h-[140px]`}
            name="message"
            required
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <motion.div variants={fadeUp} className="text-center">
            <button type="submit" className="btn-pill btn-pill--solid">
              <span className="btn-pill__icon">
                <FaPaperPlane className="w-3.5 h-3.5" />
              </span>
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toastOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-3 bg-accent text-black px-5 py-3 rounded-full shadow-card font-medium"
            role="status"
          >
            <FaCheckCircle className="w-5 h-5" />
            <span>Message sent! I'll get back to you soon.</span>
            <button
              onClick={() => setToastOpen(false)}
              aria-label="Dismiss"
              className="ml-2 opacity-70 hover:opacity-100"
            >
              {'\u00d7'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
