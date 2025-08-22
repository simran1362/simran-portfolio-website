import React from 'react';
import { Box, Typography, Container, Grid, Card, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';
import ShopIcon from '@mui/icons-material/Shop';

const Projects = () => {
  const projects = [
    {
      title: 'RecipePool',
      description: 'Designed and published an app on Google Play Store as UI/UX designer for DJ Unicode.',
      highlights: [
        'Led the entire design process from color palette to interface',
        'Created a visually appealing, user-friendly application'
      ],
      technologies: ['UI/UX Design', 'Mobile App', 'Google Play Store'],
      link: 'https://play.google.com/store/apps/details?id=com.djunicode.recipepool',
      type: 'mobile',
      featured: true
    },
    {
      title: 'Public GitHub Repository Search',
      description: 'Created frontend using AngularJS and GitHub API to search public repositories.',
      highlights: [
        'AngularJS implementation',
        'GitHub API integration',
        'Responsive UI/UX design'
      ],
      technologies: ['AngularJS', 'GitHub API', 'JavaScript', 'UI/UX'],
      type: 'web',
      featured: false
    },
    {
      title: 'Vector Borne Disease Prediction',
      description: 'Used AI/ML to predict dengue risk based on climate data (temperature, humidity, rain).',
      highlights: [
        'Machine Learning implementation',
        'Data preprocessing and analysis',
        'Hyperparameter tuning',
        'Collaborative development'
      ],
      technologies: ['Machine Learning', 'Python', 'Data Science', 'AI'],
      type: 'ml',
      featured: false
    },
    {
      title: 'Make4Thon - Mental Health App',
      description: 'Designed mental health front-end app that won 1st place in Make4Thon hackathon.',
      highlights: [
        'Bilingual yoga and meditation features',
        'Group video calls functionality',
        'Anonymous posting system',
        'User feedback integration'
      ],
      technologies: ['UI/UX Design', 'React', 'Logo Design', 'Prototyping'],
      repository: 'https://github.com/simran1362/Make4thon_MedCare.git',
      type: 'web',
      featured: true,
      award: '1st Place Winner'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills with modern design.',
      highlights: [
        'Responsive design',
        'Modern UI/UX',
        'Interactive animations',
        'Performance optimized'
      ],
      technologies: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
      link: 'https://fyle-internship-challenge-theta.vercel.app/',
      type: 'web',
      featured: false
    }
  ];

  const getProjectIcon = (type) => {
    switch (type) {
      case 'mobile':
        return <ShopIcon />;
      case 'web':
        return <Launch />;
      case 'ml':
        return '🤖';
      default:
        return <Launch />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'mobile':
        return '#4CAF50';
      case 'web':
        return '#2196F3';
      case 'ml':
        return '#FF9800';
      default:
        return '#9ACD32';
    }
  };

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        px: 4,
        backgroundColor: '#ffffff',
        minHeight: '100vh',
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
          {/* Main Heading */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              Featured{' '}
              <Box
                component="span"
                sx={{
                  backgroundColor: '#000000',
                  color: '#fff',
                  px: 2,
                  py: 1,
                  borderRadius: '10px',
                  display: 'inline-block',
                  mx: 1,
                }}
              >
                Projects
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
              A showcase of my technical projects, design work, and innovative solutions. 
              From mobile apps to machine learning models, each project represents a unique challenge solved.
            </Typography>
          </Box>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid 
                item 
                xs={12} 
                md={6} 
                lg={4} 
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                  style={{ 
                    transformOrigin: 'center center',
                    cursor: 'pointer'
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '20px',
                      p: 4,
                      border: '2px solid #e0e0e0',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      '&:hover': {
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        borderColor: getTypeColor(project.type),
                      },
                    }}
                  >
                    {/* Award Badge */}
                    {project.award && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -10,
                          right: 20,
                          backgroundColor: '#FFD700',
                          color: '#000000',
                          px: 2,
                          py: 0.5,
                          borderRadius: '15px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          boxShadow: '0 4px 8px rgba(255, 215, 0, 0.3)',
                        }}
                      >
                        🏆 {project.award}
                      </Box>
                    )}

                    {/* Project Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: getTypeColor(project.type),
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                        }}
                      >
                        {getProjectIcon(project.type)}
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: '#000000',
                            fontFamily: '"Inter", sans-serif',
                            mb: 0.5,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Chip
                          label={project.type.toUpperCase()}
                          size="small"
                          sx={{
                            backgroundColor: getTypeColor(project.type),
                            color: '#ffffff',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Project Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666666',
                        lineHeight: 1.6,
                        mb: 3,
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Project Highlights */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: '#000000',
                          mb: 1,
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        Key Features:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {project.highlights.map((highlight, idx) => (
                          <Typography
                            component="li"
                            key={idx}
                            variant="body2"
                            sx={{
                              color: '#666666',
                              mb: 0.5,
                              fontFamily: '"Inter", sans-serif',
                            }}
                          >
                            {highlight}
                          </Typography>
                        ))}
                      </Box>
                    </Box>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: '#e0e0e0',
                              color: '#333333',
                              fontSize: '0.75rem',
                              '&:hover': {
                                backgroundColor: '#d0d0d0',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                      {project.link && (
                        <Button
                          variant="contained"
                          startIcon={project.type === 'mobile' ? <ShopIcon /> : <Launch />}
                          onClick={() => window.open(project.link, '_blank')}
                          sx={{
                            backgroundColor: getTypeColor(project.type),
                            color: '#ffffff',
                            textTransform: 'none',
                            borderRadius: '20px',
                            px: 3,
                            '&:hover': {
                              backgroundColor: getTypeColor(project.type),
                              opacity: 0.9,
                            },
                          }}
                        >
                          {project.type === 'mobile' ? 'View on Play Store' : 'Live Demo'}
                        </Button>
                      )}
                      {project.repository && (
                        <Button
                          variant="outlined"
                          startIcon={<GitHub />}
                          onClick={() => window.open(project.repository, '_blank')}
                          sx={{
                            borderColor: '#333333',
                            color: '#333333',
                            textTransform: 'none',
                            borderRadius: '20px',
                            px: 3,
                            '&:hover': {
                              backgroundColor: '#333333',
                              color: '#ffffff',
                            },
                          }}
                        >
                          Source Code
                        </Button>
                      )}
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
