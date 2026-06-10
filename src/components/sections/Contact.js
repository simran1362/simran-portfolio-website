import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
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
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { fireConfettiFrom } from '../fx/confetti';
import Magnetic from '../fx/Magnetic';
import { Heart, ScribbleRing, Squiggle } from '../fx/Doodles';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

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
  const [toast, setToast] = useState({ open: false, type: 'success', message: '' });
  const [planeFlying, setPlaneFlying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitRef = useRef(null);

  useEffect(() => {
    if (!toast.open) return undefined;
    const t = setTimeout(() => setToast((prev) => ({ ...prev, open: false })), 5000);
    return () => clearTimeout(t);
  }, [toast.open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // Surface a clear error during local dev if the .env.local is missing
      // rather than silently appearing to succeed.
      console.error(
        'EmailJS env vars are not configured. Add REACT_APP_EMAILJS_SERVICE_ID, ' +
        'REACT_APP_EMAILJS_TEMPLATE_ID and REACT_APP_EMAILJS_PUBLIC_KEY to .env.local and restart the dev server.',
      );
      setToast({
        open: true,
        type: 'error',
        message: 'Email service not configured yet. Please try again later.',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      fireConfettiFrom(submitRef.current, 48);
      setPlaneFlying(true);
      setTimeout(() => setPlaneFlying(false), 1200);
      setToast({
        open: true,
        type: 'success',
        message: "Message sent! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setToast({
        open: true,
        type: 'error',
        message: "Couldn't send your message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad bg-white dark:bg-surface-dark relative overflow-hidden">
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
            Let's{' '}
            <span className="relative inline-block px-2">
              Connect
              <ScribbleRing className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+24px)] h-[calc(100%+16px)] text-accent" delay={0.7} />
            </span>
            <br />and Create Something{' '}
            <span className="relative inline-block">
              <span className="pill-highlight pill-highlight--accent">Amazing.</span>
              <Heart className="absolute -top-7 -right-7 w-9 h-9 text-brand-pink hidden md:block" delay={1.3} />
            </span>
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
              whileHover={{ y: -4, rotate: -0.5 }}
              type="button"
              onClick={() => {
                if (info.link !== '#') window.open(info.link, '_blank', 'noopener,noreferrer');
              }}
              className="group flex items-center gap-4 text-left rounded-2xl p-5 bg-surface-lightAlt dark:bg-surface-darkAlt border border-black/5 dark:border-white/10 transition-all hover:border-accent hover:shadow-card"
              style={{ cursor: info.link !== '#' ? 'pointer' : 'default' }}
            >
              <span className="w-12 h-12 flex-shrink-0 rounded-full bg-accent text-black flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
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
          className="relative mt-12 max-w-3xl mx-auto rounded-3xl p-6 md:p-10 bg-surface-lightAlt dark:bg-surface-darkAlt border border-black/5 dark:border-white/10"
        >
          <Squiggle className="absolute -top-4 left-10 w-28 h-5 text-accent hidden md:block" delay={0.5} />

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
            <Input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mb-4">
            <Input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mb-6">
            <Textarea
              name="message"
              required
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="resize-y min-h-[140px]"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="text-center">
            <Magnetic strength={0.3}>
              <button
                ref={submitRef}
                type="submit"
                disabled={isSubmitting}
                className="btn-pill btn-pill--solid relative overflow-visible disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="btn-pill__icon relative">
                  <motion.span
                    className="inline-flex"
                    animate={
                      planeFlying
                        ? { x: [0, 60, 140], y: [0, -40, -110], rotate: [0, 12, 24], opacity: [1, 1, 0] }
                        : { x: 0, y: 0, rotate: 0, opacity: 1 }
                    }
                    transition={
                      planeFlying
                        ? { duration: 0.9, ease: 'easeIn' }
                        : { duration: 0 }
                    }
                  >
                    <FaPaperPlane className="w-3.5 h-3.5" />
                  </motion.span>
                </span>
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </Magnetic>
          </motion.div>
        </motion.form>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast.open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-3 px-5 py-3 rounded-full shadow-card font-medium ${
              toast.type === 'success'
                ? 'bg-accent text-black'
                : 'bg-red-500 text-white'
            }`}
            role={toast.type === 'success' ? 'status' : 'alert'}
          >
            {toast.type === 'success' ? (
              <FaCheckCircle className="w-5 h-5" />
            ) : (
              <FaExclamationCircle className="w-5 h-5" />
            )}
            <span>{toast.message}</span>
            <button
              onClick={() => setToast((prev) => ({ ...prev, open: false }))}
              aria-label="Dismiss"
              className="ml-2 opacity-70 hover:opacity-100"
            >
              {'×'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
