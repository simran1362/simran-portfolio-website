import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Check } from '@mui/icons-material';

const Services = () => {
  const uiuxFeatures = [
    'User Interface design',
    'User Experience Design',
    'Mobile Application design'
  ];

  return (
    <Box
      id="services"
      sx={{
        py: 10,
        background: `
          radial-gradient(circle at 70% 30%, rgba(255, 27, 141, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 30% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
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
            My Skills
          </Typography>
        </motion.div>

        <Grid container spacing={8} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: '#FFFFFF',
                  mb: 3,
                }}
              >
                UI/UX Design
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#B0B0B0',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  mb: 4,
                  maxWidth: '500px',
                }}
              >
                Passionate about creating exceptional user experiences through thoughtful design and clean code. I specialize in modern web technologies and have extensive experience in both frontend and backend development.
              </Typography>

              <Box sx={{ mb: 4 }}>
                {uiuxFeatures.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Check
                      sx={{
                        color: '#10B981',
                        mr: 2,
                        fontSize: '1.2rem',
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#FFFFFF',
                        fontSize: '0.95rem',
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant="outlined"
                sx={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  '&:hover': {
                    borderColor: '#FF1B8D',
                    backgroundColor: 'rgba(255, 27, 141, 0.1)',
                  },
                }}
              >
                VIEW PROJECTS →
              </Button>
            </motion.div>
          </Grid>

          {/* Right Illustration */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '400px',
                  position: 'relative',
                }}
              >
                {/* UI/UX Design Illustration */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '400px',
                    height: '300px',
                  }}
                >
                  {/* Main Dashboard */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '20px',
                      left: '50px',
                      width: '200px',
                      height: '150px',
                      background: 'linear-gradient(135deg, #FF1B8D 0%, #FF6B35 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 2,
                      boxShadow: '0 10px 30px rgba(255, 27, 141, 0.3)',
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: '#FFFFFF' }} />
                      <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: '#FFFFFF' }} />
                      <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: '#FFFFFF' }} />
                    </Box>
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Box sx={{ height: '8px', bgcolor: 'rgba(255,255,255,0.8)', borderRadius: '4px', width: '80%' }} />
                      <Box sx={{ height: '8px', bgcolor: 'rgba(255,255,255,0.6)', borderRadius: '4px', width: '60%' }} />
                      <Box sx={{ height: '8px', bgcolor: 'rgba(255,255,255,0.4)', borderRadius: '4px', width: '90%' }} />
                    </Box>
                  </Box>

                  {/* Mobile UI */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '80px',
                      right: '20px',
                      width: '80px',
                      height: '140px',
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #00D4FF 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 1,
                      boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
                    }}
                  >
                    <Box sx={{ height: '4px', bgcolor: 'rgba(255,255,255,0.8)', borderRadius: '2px', mb: 1 }} />
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      <Box sx={{ height: '4px', bgcolor: 'rgba(255,255,255,0.6)', borderRadius: '2px', width: '70%' }} />
                      <Box sx={{ height: '4px', bgcolor: 'rgba(255,255,255,0.4)', borderRadius: '2px', width: '50%' }} />
                      <Box sx={{ height: '4px', bgcolor: 'rgba(255,255,255,0.6)', borderRadius: '2px', width: '80%' }} />
                    </Box>
                  </Box>

                  {/* Analytics Chart */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      width: '120px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #10B981 0%, #F59E0B 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-around',
                      p: 1,
                      boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <Box sx={{ width: '8px', height: '20px', bgcolor: 'rgba(255,255,255,0.8)', borderRadius: '4px' }} />
                    <Box sx={{ width: '8px', height: '35px', bgcolor: 'rgba(255,255,255,0.8)', borderRadius: '4px' }} />
                    <Box sx={{ width: '8px', height: '25px', bgcolor: 'rgba(255,255,255,0.8)', borderRadius: '4px' }} />
                    <Box sx={{ width: '8px', height: '40px', bgcolor: 'rgba(255,255,255,0.8)', borderRadius: '4px' }} />
                  </Box>

                  {/* Settings Gear */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      right: '80px',
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #FF6B35 0%, #F59E0B 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 5px 15px rgba(255, 107, 53, 0.3)',
                      animation: 'rotate 10s linear infinite',
                    }}
                  >
                    <Typography sx={{ color: '#FFFFFF', fontSize: '1.2rem' }}>⚙️</Typography>
                  </Box>

                  {/* UI/UX Label */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '60px',
                      right: '40px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#FFFFFF',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                      }}
                    >
                      UI/UX
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
};

export default Services;
