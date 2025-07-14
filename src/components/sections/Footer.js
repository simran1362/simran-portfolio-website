import React from 'react';
import { Box, Typography, Container, Grid, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, Email, Favorite } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: <GitHub />,
      url: 'https://github.com/simran1362',
      label: 'GitHub',
    },
    {
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/in/simran-bardhan/',
      label: 'LinkedIn',
    },
    {
      icon: <Email />,
      url: 'mailto:simranbardhan13@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ffffff',
        pt: 8,
        pb: 4,
        borderTop: '2px solid #e0e0e0',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={6}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#2c3e50',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                SIMRAN BARDHAN
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666666',
                  lineHeight: 1.6,
                  mb: 4,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Software Developer specializing in MERN Stack, Next.js, and UI/UX Design. 
                Passionate about creating innovative digital solutions and user experiences.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconButton
                      onClick={() => handleSocialClick(social.url)}
                      sx={{
                        color: '#666666',
                        backgroundColor: '#f8f9fa',
                        border: '2px solid #e0e0e0',
                        borderRadius: '50%',
                        width: 50,
                        height: 50,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#ffffff',
                          backgroundColor: '#2c3e50',
                          borderColor: '#2c3e50',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 10px 20px rgba(44, 62, 80, 0.3)',
                        },
                      }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: '#2c3e50',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666666',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '1.1rem',
                        '&:hover': {
                          color: '#2c3e50',
                          transform: 'translateX(10px)',
                        },
                      }}
                      onClick={() => scrollToSection(link.href)}
                    >
                      → {link.name}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: '#2c3e50',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Get In Touch
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666666',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '1.1rem',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: '#2c3e50',
                        color: '#ffffff',
                        borderRadius: '50%',
                        width: 30,
                        height: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Email sx={{ fontSize: 16 }} />
                    </Box>
                    simranbardhan13@gmail.com
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666666',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '1.1rem',
                    }}
                  >
                    Mumbai, Maharashtra
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#2c3e50',
                      lineHeight: 1.6,
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Available for software development and UI/UX design opportunities.
                  </Typography>
                </motion.div>
              </Box>
            </Grid>
          </Grid>

          <Divider
            sx={{
              my: 6,
              borderColor: '#e0e0e0',
              borderWidth: 1,
            }}
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#666666',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                © {new Date().getFullYear()} Simran Bardhan. Made with{' '}
                <Favorite sx={{ fontSize: 18, color: '#e74c3c' }} /> and React
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#666666',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                All rights reserved.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
