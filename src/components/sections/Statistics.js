import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Statistics = () => {
  const stats = [
    {
      number: '50+',
      label: 'Projects Completed',
    },
    {
      number: '3+',
      label: 'Years Experience',
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
    },
    {
      number: '24/7',
      label: 'Support Available',
    },
  ];

  return (
    <Box
      id="statistics"
      sx={{
        py: 8,
        background: `
          radial-gradient(circle at 50% 50%, rgba(255, 27, 141, 0.05) 0%, transparent 50%),
          #0A0A0A
        `,
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    py: 4,
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      color: '#FFFFFF',
                      mb: 1,
                      background: index === 0 || index === 2 
                        ? 'linear-gradient(135deg, #FF1B8D 0%, #FF6B35 100%)'
                        : 'linear-gradient(135deg, #00D4FF 0%, #8B5CF6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#B0B0B0',
                      fontSize: '1rem',
                      fontWeight: 500,
                      textTransform: 'capitalize',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Statistics;
