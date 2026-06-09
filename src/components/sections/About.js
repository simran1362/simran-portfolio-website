import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative"
      style={{
        background: 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)',
      }}
    >
      <div className="max-w-[1536px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className="relative">
              <div
                className="glass rounded-2xl p-3 mb-3"
                style={{ transform: 'rotate(-5deg)' }}
              >
                <div
                  className="w-[150px] h-[200px] rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
                  }}
                >
                  <span className="text-white text-5xl">👨‍💻</span>
                </div>
              </div>

              <div
                className="glass absolute top-[100px] right-5 rounded-2xl p-2"
                style={{ transform: 'rotate(10deg)' }}
              >
                <div
                  className="w-[100px] h-[120px] rounded-lg flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #9ACD32 0%, #7CB342 100%)',
                  }}
                >
                  <span className="text-black text-3xl">💻</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
