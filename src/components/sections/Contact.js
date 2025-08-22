import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'simranbardhan13@gmail.com',
      link: 'mailto:simranbardhan13@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 9769813103',
      link: 'tel:+919769813103',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Mumbai, Maharashtra',
      link: '#',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        px: 4,
        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
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
                color: isDarkMode ? '#FFFFFF' : '#000000',
                lineHeight: 1.1,
                mb: 4,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Let's{' '}
              <Box
                component="span"
                sx={{
                  backgroundColor: '#9ACD32',
                  color: '#000000',
                  px: 2,
                  py: 1,
                  borderRadius: '10px',
                  display: 'inline-block',
                  mx: 1,
                }}
              >
                Connect
              </Box>
              <br />
              and Create Something{' '}
              <Box
                component="span"
                sx={{
                  backgroundColor: '#9ACD32',
                  color: '#000000',
                  px: 2,
                  py: 1,
                  borderRadius: '10px',
                  display: 'inline-block',
                  mx: 1,
                }}
              >
                Amazing
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: isDarkMode ? '#CCCCCC' : '#666666',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
                maxWidth: '800px',
                mx: 'auto',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
              }}
            >
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and create something amazing together!
            </Typography>
          </Box>

          {/* Contact Information Cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
              gap: 3,
              mb: 8,
            }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: '#1a1a1a',
                    borderRadius: '15px',
                    p: 3,
                    border: '2px solid #333333',
                    transition: 'all 0.3s ease',
                    cursor: info.link !== '#' ? 'pointer' : 'default',
                    '&:hover': {
                      borderColor: '#9ACD32',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(154, 205, 50, 0.2)',
                    },
                  }}
                  onClick={() => {
                    if (info.link !== '#') {
                      window.open(info.link, '_blank');
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: '#9ACD32',
                      color: '#000000',
                      mb: 3,
                      mx: 'auto',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#FFFFFF',
                      mb: 1,
                      textAlign: 'center',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#CCCCCC',
                      textAlign: 'center',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {info.value}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                backgroundColor: '#1a1a1a',
                borderRadius: '20px',
                p: 4,
                border: '2px solid #333333',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Send Me a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#2a2a2a',
                          '& fieldset': {
                            borderColor: '#444444',
                          },
                          '&:hover fieldset': {
                            borderColor: '#9ACD32',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#9ACD32',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#CCCCCC',
                          '&.Mui-focused': {
                            color: '#9ACD32',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: '#FFFFFF',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#2a2a2a',
                          '& fieldset': {
                            borderColor: '#444444',
                          },
                          '&:hover fieldset': {
                            borderColor: '#9ACD32',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#9ACD32',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#CCCCCC',
                          '&.Mui-focused': {
                            color: '#9ACD32',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: '#FFFFFF',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#2a2a2a',
                          '& fieldset': {
                            borderColor: '#444444',
                          },
                          '&:hover fieldset': {
                            borderColor: '#9ACD32',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#9ACD32',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#CCCCCC',
                          '&.Mui-focused': {
                            color: '#9ACD32',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: '#FFFFFF',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#2a2a2a',
                          '& fieldset': {
                            borderColor: '#444444',
                          },
                          '&:hover fieldset': {
                            borderColor: '#9ACD32',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#9ACD32',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#CCCCCC',
                          '&.Mui-focused': {
                            color: '#9ACD32',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: '#FFFFFF',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        sx={{
                          backgroundColor: '#9ACD32',
                          color: '#000000',
                          px: 4,
                          py: 1.5,
                          borderRadius: '25px',
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: '1.1rem',
                          fontFamily: '"Inter", sans-serif',
                          '&:hover': {
                            backgroundColor: '#8BC34A',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 10px 20px rgba(154, 205, 50, 0.3)',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </motion.div>
        </motion.div>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: '100%' }}
          >
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
