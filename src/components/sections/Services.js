import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const uiuxFeatures = [
  'User Interface design',
  'User Experience Design',
  'Mobile Application design',
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 relative"
      style={{
        background: `
          radial-gradient(circle at 70% 30%, rgba(255, 27, 141, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 30% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
          #0A0A0A
        `,
      }}
    >
      <div className="max-w-[1536px] mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-6xl text-white text-center mb-16"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-3xl md:text-4xl text-white mb-4">UI/UX Design</h3>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-[500px]">
              Passionate about creating exceptional user experiences through thoughtful design and
              clean code. I specialize in modern web technologies and have extensive experience in
              both frontend and backend development.
            </p>

            <ul className="mb-8 space-y-3">
              {uiuxFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-white text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="px-7 py-3 rounded-lg border border-white/30 text-white text-sm font-semibold transition-all hover:border-brand-pink hover:bg-brand-pink/10">
              VIEW PROJECTS →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center h-[400px]"
          >
            <div className="relative w-[400px] h-[300px]">
              <div
                className="absolute top-5 left-12 w-[200px] h-[150px] rounded-xl p-3 flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, #FF1B8D 0%, #FF6B35 100%)',
                  boxShadow: '0 10px 30px rgba(255, 27, 141, 0.3)',
                }}
              >
                <div className="flex gap-1 mb-3">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="h-2 bg-white/80 rounded w-4/5" />
                  <div className="h-2 bg-white/60 rounded w-3/5" />
                  <div className="h-2 bg-white/40 rounded w-[90%]" />
                </div>
              </div>

              <div
                className="absolute top-20 right-5 w-20 h-[140px] rounded-xl p-1.5 flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #00D4FF 100%)',
                  boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
                }}
              >
                <div className="h-1 bg-white/80 rounded mb-2" />
                <div className="flex-1 flex flex-col gap-1">
                  <div className="h-1 bg-white/60 rounded w-[70%]" />
                  <div className="h-1 bg-white/40 rounded w-[50%]" />
                  <div className="h-1 bg-white/60 rounded w-[80%]" />
                </div>
              </div>

              <div
                className="absolute bottom-5 left-5 w-32 h-20 rounded-lg p-2 flex items-end justify-around"
                style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #F59E0B 100%)',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                }}
              >
                <span className="w-2 h-5 bg-white/80 rounded" />
                <span className="w-2 h-9 bg-white/80 rounded" />
                <span className="w-2 h-6 bg-white/80 rounded" />
                <span className="w-2 h-10 bg-white/80 rounded" />
              </div>

              <div
                className="absolute top-2.5 right-20 w-10 h-10 rounded-full flex items-center justify-center animate-spin-slow"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F59E0B 100%)',
                  boxShadow: '0 5px 15px rgba(255, 107, 53, 0.3)',
                }}
              >
                <span className="text-white text-xl">⚙️</span>
              </div>

              <div className="absolute bottom-16 right-10 glass rounded-lg px-3 py-1">
                <span className="text-white text-xs font-semibold">UI/UX</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
