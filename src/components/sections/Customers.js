import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const Customers = () => {
  const customers = [
    {
      id: 1,
      avatar: '👨‍💼',
      name: 'John Smith',
      role: 'CEO, TechCorp',
      testimonial: 'Outstanding work quality and attention to detail.',
    },
    {
      id: 2,
      avatar: '👩‍💻',
      name: 'Sarah Johnson',
      role: 'Product Manager',
      testimonial: 'Delivered exactly what we needed, on time.',
    },
    {
      id: 3,
      avatar: '👨‍🎨',
      name: 'Mike Davis',
      role: 'Creative Director',
      testimonial: 'Exceptional design skills and creativity.',
    },
  ];

  return (
    <Box
      id="customers"
      sx={{
        py: 10,
        background: `
          radial-gradient(circle at 30% 40%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(255, 27, 141, 0.1) 0%, transparent 50%),
          #0A0A0A
        `,
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: '#FFFFFF',
              textAlign: 'center',
              mb: 8,
            }}
          >
            Client Testimonials
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
            flexWrap: 'wrap',
          }}
        >
          {customers.map((customer, index) => (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    background: `linear-gradient(135deg, 
                      ${index === 0 ? '#FF1B8D, #FF6B35' : 
                        index === 1 ? '#00D4FF, #8B5CF6' : 
                        '#10B981, #F59E0B'})`,
                    fontSize: '2rem',
                    mb: 2,
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {customer.avatar}
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    mb: 0.5,
                  }}
                >
                  {customer.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#B0B0B0',
                    fontSize: '0.8rem',
                    textAlign: 'center',
                    mb: 1,
                  }}
                >
                  {customer.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#B0B0B0',
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    maxWidth: '200px',
                  }}
                >
                  "{customer.testimonial}"
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Customers;
