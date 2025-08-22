import React from 'react';
import { Box, Typography, Button, Container, Grid, Card } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Images */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ position: 'relative' }}>
                {/* Profile Image Card */}
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '15px',
                    p: 2,
                    mb: 3,
                    transform: 'rotate(-5deg)',
                  }}
                >
                  <Box
                    sx={{
                      width: '150px',
                      height: '200px',
                      background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: '#FFFFFF', fontSize: '3rem' }}>👨‍💻</Typography>
                  </Box>
                </Card>

                {/* Additional Image Card */}
                <Card
                  sx={{
                    position: 'absolute',
                    top: '100px',
                    right: '20px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '15px',
                    p: 1,
                    transform: 'rotate(10deg)',
                  }}
                >
                  <Box
                    sx={{
                      width: '100px',
                      height: '120px',
                      background: 'linear-gradient(135deg, #9ACD32 0%, #7CB342 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: '#000000', fontSize: '2rem' }}>💻</Typography>
                  </Box>
                </Card>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
