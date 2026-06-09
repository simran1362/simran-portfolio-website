import React from 'react';
import { motion } from 'framer-motion';

const customers = [
  {
    id: 1,
    avatar: '👨‍💼',
    name: 'John Smith',
    role: 'CEO, TechCorp',
    testimonial: 'Outstanding work quality and attention to detail.',
    gradient: 'linear-gradient(135deg, #FF1B8D, #FF6B35)',
  },
  {
    id: 2,
    avatar: '👩‍💻',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    testimonial: 'Delivered exactly what we needed, on time.',
    gradient: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
  },
  {
    id: 3,
    avatar: '👨‍🎨',
    name: 'Mike Davis',
    role: 'Creative Director',
    testimonial: 'Exceptional design skills and creativity.',
    gradient: 'linear-gradient(135deg, #10B981, #F59E0B)',
  },
];

const Customers = () => {
  return (
    <section
      id="customers"
      className="py-24 relative"
      style={{
        background: `
          radial-gradient(circle at 30% 40%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(255, 27, 141, 0.1) 0%, transparent 50%),
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
          Client Testimonials
        </motion.h2>

        <div className="flex flex-wrap justify-center items-start gap-10">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 max-w-xs"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-3"
                style={{
                  background: customer.gradient,
                  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)',
                }}
              >
                {customer.avatar}
              </div>
              <h4 className="text-white text-base font-semibold text-center mb-1">
                {customer.name}
              </h4>
              <p className="text-neutral-400 text-xs text-center mb-2">{customer.role}</p>
              <p className="text-neutral-400 text-sm text-center italic max-w-[200px]">
                "{customer.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
