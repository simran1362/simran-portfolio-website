import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '3+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
];

const Statistics = () => {
  return (
    <section
      id="statistics"
      className="py-16 relative"
      style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(255, 27, 141, 0.05) 0%, transparent 50%),
          #0A0A0A
        `,
      }}
    >
      <div className="max-w-[1536px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {stats.map((stat, index) => {
            const useBrand = index === 0 || index === 2;
            const gradient = useBrand
              ? 'linear-gradient(135deg, #FF1B8D 0%, #FF6B35 100%)'
              : 'linear-gradient(135deg, #00D4FF 0%, #8B5CF6 100%)';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center py-8"
              >
                <p
                  className="font-bold text-4xl md:text-5xl mb-1"
                  style={{
                    background: gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.number}
                </p>
                <p className="text-base font-medium text-neutral-400 capitalize">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
