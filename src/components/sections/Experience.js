import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Experience = () => {
  // const companies = [
  //   { name: 'Apollo Global Management', style: 'dark' },
  //   { name: 'Safwhigre', style: 'light' },
  //   { name: 'DJ Unicode', style: 'light' },
  //   { name: 'DJ ACM', style: 'light' },
  //   { name: 'Google Cloud', style: 'light' },
  //   { name: 'Younity.in', style: 'light' }
  // ];

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        px: 4,
        backgroundColor: '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* About Button - Top Right */}
        <Box
          sx={{
            position: 'absolute',
            top: 40,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              border: '2px solid #000000',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}
          >
            <Typography sx={{ color: '#000000', fontSize: '1.2rem', fontWeight: 'bold' }}>
              +
            </Typography>
          </Box>
          <Button
            sx={{
              border: '2px solid #000000',
              borderRadius: '25px',
              color: '#000000',
              px: 3,
              py: 1,
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 500,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            About
          </Button>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                color: '#000000',
                lineHeight: 1.1,
                mb: 4,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Computer Engineering{' '}
              <Box
                component="span"
                sx={{
                  backgroundColor: '#000000',
                  color: '#9ACD32',
                  px: 2,
                  py: 1,
                  borderRadius: '10px',
                  display: 'inline-block',
                  mx: 1,
                }}
              >
                Student
              </Box>
              <br />
              & Software{' '}
              <Box
                component="span"
                sx={{
                  backgroundColor: '#000000',
                  color: '#9ACD32',
                  px: 2,
                  py: 1,
                  borderRadius: '10px',
                  display: 'inline-block',
                  mx: 1,
                }}
              >
                Developer
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#333333',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
                maxWidth: '800px',
                mx: 'auto',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
              }}
            >
              B-Tech in Computer Engineering with Honours in Intelligent Computing from 
              Dwarkadas Jivanlal Sanghvi College Of Engineering, Mumbai. Experienced in 
              full-stack development and UI/UX design.
            </Typography>
          </Box>

          {/* Previously Worked On Section */}
          <Box sx={{ mt: 8, display: 'flex', alignItems: 'center', gap: 4, mb: 8, justifyContent: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                color: '#000000',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 700,
                fontFamily: '"Inter", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                whiteSpace: 'nowrap',
              }}
            >
              PREVIOUSLY<br />WORKED ON
            </Typography>

            {/* Company Pills - Smaller Row Layout */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
                alignItems: 'center',
              }}
            >
              {/* Apollo Global Management - dark pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: '#000000',
                    color: '#9ACD32',
                    px: 2,
                    py: 0.8,
                    borderRadius: '20px',
                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px) rotate(-8deg)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Apollo Global Management
                </Box>
              </motion.div>

              {/* Safwhigre */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    px: 2,
                    py: 0.8,
                    borderRadius: '20px',
                    border: '2px solid #000000',
                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px) rotate(5deg)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Safwhigre
                </Box>
              </motion.div>

              {/* DJ Unicode */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    px: 2,
                    py: 0.8,
                    borderRadius: '20px',
                    border: '2px solid #000000',
                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px) rotate(-3deg)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  DJ Unicode
                </Box>
              </motion.div>

              {/* DJ ACM */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 7 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    px: 2,
                    py: 0.8,
                    borderRadius: '20px',
                    border: '2px solid #000000',
                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px) rotate(7deg)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  DJ ACM
                </Box>
              </motion.div>

              {/* Google Cloud */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    px: 2,
                    py: 0.8,
                    borderRadius: '20px',
                    border: '2px solid #000000',
                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px) rotate(-5deg)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Google Cloud
                </Box>
              </motion.div>

              {/* Younity.in */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    px: 2,
                    py: 0.8,
                    borderRadius: '20px',
                    border: '2px solid #000000',
                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px) rotate(4deg)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Younity.in
                </Box>
              </motion.div>
            </Box>
          </Box>

          {/* My Work Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                backgroundColor: '#000000',
                borderRadius: '20px',
                p: 4,
                position: 'relative',
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Box
                  sx={{
                    width: '40px',
                    height: '40px',
                    border: '2px solid #FFFFFF',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                  }}
                >
                  <Typography sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    +
                  </Typography>
                </Box>
                <Button
                  sx={{
                    border: '2px solid #FFFFFF',
                    borderRadius: '25px',
                    color: '#FFFFFF',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 500,
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Work Process
                </Button>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#FFFFFF',
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 700,
                    fontFamily: '"Inter", sans-serif',
                    ml: 2,
                  }}
                >
                  My Work Process
                </Typography>
              </Box>

              {/* Process Grid */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3,
                }}
              >
                {/* Apollo Global Management */}
                <Box
                  sx={{
                    backgroundColor: '#1a1a1a',
                    borderRadius: '15px',
                    p: 3,
                    position: 'relative',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: '#9ACD32',
                        color: '#000000',
                        px: 2,
                        py: 0.5,
                        borderRadius: '15px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                      }}
                    >
                      Software Developer
                    </Box>
                    <Typography sx={{ color: '#FFFFFF', fontSize: '0.9rem' }}>
                      Jun '23 – Aug '23
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#CCCCCC',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Worked with team to build software applications across platforms. Maintained and improved the official website with new user-facing and mobile features.
                  </Typography>
                </Box>

                {/* Safwhigre */}
                <Box
                  sx={{
                    backgroundColor: '#9ACD32',
                    borderRadius: '15px',
                    p: 3,
                    position: 'relative',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: '#000000',
                        color: '#9ACD32',
                        px: 2,
                        py: 0.5,
                        borderRadius: '15px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                      }}
                    >
                      UX Design Lead
                    </Box>
                    <Typography sx={{ color: '#000000', fontSize: '0.9rem' }}>
                      Aug '22 - Nov '22
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#000000',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Built scalable and reusable designs across platforms. Took design decisions as the Design Lead and refined design skills to meet industry standards.
                  </Typography>
                </Box>

                {/* Education */}
                <Box
                  sx={{
                    backgroundColor: '#1a1a1a',
                    borderRadius: '15px',
                    p: 3,
                    position: 'relative',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: '#9ACD32',
                        color: '#000000',
                        px: 2,
                        py: 0.5,
                        borderRadius: '15px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                      }}
                    >
                      Education
                    </Box>
                    <Typography sx={{ color: '#FFFFFF', fontSize: '0.9rem' }}>
                      DJ Sanghvi College
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#CCCCCC',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                    }}
                  >
                    B-Tech in Computer Engineering with Honours in Intelligent Computing. Member of DJ Unicode and DJ ACM organizations.
                  </Typography>
                </Box>

                {/* Accomplishments */}
                <Box
                  sx={{
                    backgroundColor: '#1a1a1a',
                    borderRadius: '15px',
                    p: 3,
                    position: 'relative',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: '#9ACD32',
                        color: '#000000',
                        px: 2,
                        py: 0.5,
                        borderRadius: '15px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                      }}
                    >
                      Achievements
                    </Box>
                    <Typography sx={{ color: '#FFFFFF', fontSize: '0.9rem' }}>
                      → Certifications
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: '#CCCCCC',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                    }}
                  >
                    GCCP Cloud Practitioner selected by Google Student Developer Club. Completed 21-day Social Media Marketing Internship at Younity.in.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
