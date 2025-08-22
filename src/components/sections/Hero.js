import React from 'react';
import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import TechElements from '../TechElements';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        pt: 12,
      }}
    >
      <Container maxWidth="false" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            padding: '90px 40px',
            position: 'relative',
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Add 3D Tech Elements */}
          <TechElements />
          {/* Social Media Icons - Left Side */}
          <Box
            sx={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              alignItems: 'center',
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                fontSize: '0.9rem',
                color: '#000000',
                fontWeight: 500,
                mb: 2,
              }}
            >
              @simran1362
            </Typography>
            <IconButton
              onClick={() => window.open('https://github.com/simran1362', '_blank')}
              sx={{
                color: '#000000',
                width: '32px',
                height: '32px',
                mb: 1,
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' }
              }}
            >
              <GitHub fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => window.open('https://www.linkedin.com/in/simran-bardhan/', '_blank')}
              sx={{
                color: '#000000',
                width: '32px',
                height: '32px',
                mb: 1,
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' }
              }}
            >
              <LinkedIn fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => window.open('mailto:simranbardhan13@gmail.com', '_blank')}
              sx={{
                color: '#000000',
                width: '32px',
                height: '32px',
                mb: 1,
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' }
              }}
            >
              <Email fontSize="small" />
            </IconButton>
            <Box
              sx={{
                width: '2px',
                height: '60px',
                background: '#000000',
                mt: 2,
              }}
            />
          </Box>

          {/* Main Content */}
          <Box sx={{ textAlign: 'left', maxWidth: '1000px', ml: 8, position: 'relative', zIndex: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                color: '#000000',
                lineHeight: 1.2,
                mb: 4,
              }}
            >
              Hi, I'm {' '} <br/>
              <Box
                component="span"
                sx={{
                  background: '#000000',
                  color: '#ffffff',
                  py: 0.05,
                  px: 2,
                  borderRadius: '8px',
                  display: 'inline-block',
                }}
              >
                Simran
              </Box>{' '}
              Bardhan
            </Typography>
            {/* <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                color: '#000000',
                lineHeight: 1.1,
                mb: 6,
              }}
            >
              Software{' '}
              <Box
                component="span"
                sx={{
                  background: '#000000',
                  color: '#FFFFFF',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  display: 'inline-block',
                }}
              >
                Developer
              </Box>
            </Typography> */}
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: '#000000',
                lineHeight: 1.6,
                mb: 1,
                maxWidth: '600px',
              }}
            >
              Specializing in{' '}
              <Box component="span" sx={{ textDecoration: 'underline' }}>
                MERN Stack
              </Box>
              , Next.js, and UI/UX Design.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: '#000000',
                lineHeight: 1.6,
                mb: 4,
                maxWidth: '600px',
              }}
            >
              Creating innovative digital solutions and exceptional user experiences.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="outlined"
                onClick={() => window.open('mailto:simranbardhan13@gmail.com', '_blank')}
                sx={{
                  background: '#FFFFFF',
                  color: '#000000',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  px: 4,
                  py: 2,
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  border: '2px solid #000000',
                  '&:hover': {
                    background: '#000000',
                    color: '#FFFFFF',
                    border: '2px solid #000',
                  },
                }}
              >
                <Email sx={{ fontSize: '20px', mr: 1 }} />
                Get In Touch
              </Button>

              <Button
                variant="outlined"
                onClick={() => window.open('https://fyle-internship-challenge-theta.vercel.app/', '_blank')}
                sx={{
                  background: 'transparent',
                  color: '#000000',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  px: 4,
                  py: 2,
                  borderRadius: '30px',
                  border: '2px solid #000000',
                  '&:hover': {
                    background: '#000000',
                    color: '#FFFFFF',
                    border: '2px solid #000',
                  },
                }}
              >
                View Portfolio
              </Button>
            </Box>
          </Box>
        </Box>
      </Container >
    </Box >
  );
};

export default Hero;
