import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', to: '#hero' },
    { name: 'Skills', to: '#skills' },
    { name: 'Projects', to: '#projects' },
    { name: 'Experience', to: '#experience' },
    { name: 'Contact', to: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
        <IconButton
          onClick={toggleTheme}
          sx={{
            color: 'text.primary',
            '&:hover': {
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name}
            onClick={() => {
              const element = document.querySelector(item.to);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
              setMobileOpen(false);
            }}
            sx={{
              '&:hover': {
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <ListItemText 
              primary={item.name} 
              sx={{ 
                color: 'text.primary',
                '& .MuiListItemText-primary': {
                  fontWeight: 600,
                }
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'background.paper',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          boxShadow: isDarkMode ? '0 2px 10px rgba(255, 255, 255, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
          borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 }, py: 2 }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            fontFamily="Nunito"
            sx={{
              fontWeight: 700,
              fontSize: '1.5rem',
              color: 'text.primary',
              letterSpacing: '0.05em',
            }}
          >
            SOFTWARE DEVELOPER
          </Typography>

          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Box sx={{ display: 'flex', gap: 4 }}>
                {navItems.map((item) => (
                  <Box
                    key={item.name}
                    sx={{
                      position: 'relative',
                      display: 'inline-block',
                    }}
                  >
                    <Button
                      color="inherit"
                      onClick={() => {
                        const element = document.querySelector(item.to);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'text.primary',
                        textTransform: 'none',
                        textDecoration: 'none',
                        position: 'relative',
                        padding: '12px 20px',
                        borderRadius: 0,
                        borderBottom: '2px solid transparent',
                        transition: '0.4s',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          borderBottom: `2px solid ${theme.palette.text.primary}`,
                          transform: 'translateY(-5px)',
                        },
                        '&:active': {
                          transform: 'translateY(-5px)',
                          transition: 'transform 0.1s ease',
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </Box>
                ))}
              </Box>
              
              <IconButton
                onClick={toggleTheme}
                sx={{
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, #FF1B8D 0%, #FF6B35 100%)' 
                    : 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                  color: '#FFFFFF',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: isDarkMode 
                      ? 'linear-gradient(135deg, #E6186F 0%, #E55A2B 100%)' 
                      : 'linear-gradient(135deg, #333333 0%, #555555 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: isDarkMode 
                      ? '0 10px 30px rgba(255, 27, 141, 0.4)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
