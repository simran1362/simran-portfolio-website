import React from 'react';
import { Box, Typography, Container, Grid, Card, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      title: 'MERN Stack',
      description: 'MongoDB, Express.js, React, Node.js - Full-stack JavaScript development',
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="3" fill="#9ACD32" />
          <g stroke="white" strokeWidth="2" fill="none">
            <ellipse cx="50" cy="50" rx="25" ry="10" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(120 50 50)" />
          </g>
        </svg>
      )
    },
    {
      title: 'Next.js & Angular',
      description: 'Modern React framework and Angular.js for scalable web applications',
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="3" fill="#9ACD32" />
          <g stroke="white" strokeWidth="2" fill="none">
            <ellipse cx="50" cy="50" rx="25" ry="10" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(120 50 50)" />
          </g>
        </svg>
      )
    },
    {
      title: 'TypeScript & JavaScript',
      description: 'Strongly typed and dynamic programming languages for robust applications',
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="3" fill="#9ACD32" />
          <g stroke="white" strokeWidth="2" fill="none">
            <ellipse cx="50" cy="50" rx="25" ry="10" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(120 50 50)" />
          </g>
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      description: 'Figma, Design Prototyping, Logo Design, and Graphic Illustration',
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="3" fill="#9ACD32" />
          <g stroke="white" strokeWidth="2" fill="none">
            <ellipse cx="50" cy="50" rx="25" ry="10" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(120 50 50)" />
          </g>
        </svg>
      )
    },
    {
      title: 'Machine Learning',
      description: 'Data Preprocessing, ML algorithms, and predictive modeling',
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="3" fill="#9ACD32" />
          <g stroke="white" strokeWidth="2" fill="none">
            <ellipse cx="50" cy="50" rx="25" ry="10" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(120 50 50)" />
          </g>
        </svg>
      )
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end application development with modern technologies',
      icon: (
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="3" fill="#9ACD32" />
          <g stroke="white" strokeWidth="2" fill="none">
            <ellipse cx="50" cy="50" rx="25" ry="10" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="25" ry="10" transform="rotate(120 50 50)" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <Box
      id="skills"
      sx={{
        m: 2,
        px: 2,
        backgroundColor: '#000000',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: '#000000',
            borderRadius: '40px',
            p: 6,
            position: 'relative',
          }}
        >
          {/* Why Choose Me Button */}
          <Box sx={{ mb: 4 }}>
            <Button
              sx={{
                border: '2px solid white',
                borderRadius: '25px',
                color: 'white',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 400,
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                '&::before': {
                  content: '"✓"',
                  marginRight: '8px',
                  fontSize: '14px',
                }
              }}
            >
              Why Choose me
            </Button>
          </Box>

          <Grid container spacing={6} alignItems="center">
            {/* Left Side - Title and Skills */}
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                    color: 'white',
                    lineHeight: 1.1,
                    mb: 6,
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  My Extensive<br />
                  List of Skills
                </Typography>

                {/* Skills Cards */}
                <Grid container spacing={3}>
                  {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Card
                          sx={{
                            backgroundColor: '#1a1a1a',
                            borderRadius: '20px',
                            p: 3,
                            height: '280px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            border: 'none',
                            boxShadow: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'rotate(10deg)',
                              backgroundColor: '#2a2a2a',
                            },
                          }}
                        >
                          <Box>
                            {skill.icon}
                          </Box>
                          
                          <Box>
                            <Typography
                              variant="h4"
                              sx={{
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '1.5rem',
                                mb: 2,
                                fontFamily: '"Inter", sans-serif',
                              }}
                            >
                              {skill.title}
                            </Typography>
                            
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#888888',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                fontFamily: '"Inter", sans-serif',
                              }}
                            >
                              {skill.description}
                            </Typography>
                          </Box>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>

            {/* Right Side - Description and Navigation */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    textAlign: 'right',
                    height: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Description Text */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#888888',
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      lineHeight: 1.6,
                      mb: 4,
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    Specialized in MERN Stack development, UI/UX design, and machine learning. 
                    Creating innovative solutions with modern technologies.
                  </Typography>

                  {/* Navigation Arrows */}
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      mt: 4,
                    }}
                  >
                    <Box
                      sx={{
                        width: '50px',
                        height: '50px',
                        border: '2px solid #333333',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: '#9ACD32',
                          backgroundColor: 'rgba(154, 205, 50, 0.1)',
                        },
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Box>
                    <Box
                      sx={{
                        width: '50px',
                        height: '50px',
                        border: '2px solid #333333',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: '#9ACD32',
                          backgroundColor: 'rgba(154, 205, 50, 0.1)',
                        },
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
