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
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
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
          >
            <ListItemText primary={item.name} />
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
          bgcolor: '#ffffff',
          backdropFilter: 'none',
          transition: 'all 0.3s ease',
          boxShadow: 'none',
          borderBottom: 'none',
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
              color: '#000000',
              letterSpacing: '0.05em',
            }}
          >
            SOFTWARE DEVELOPER
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
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
                        color: '#000000',
                        textTransform: 'none',
                        textDecoration: 'none',
                        position: 'relative',
                        padding: '12px 20px',
                        borderRadius: 0,
                        borderBottom: '2px solid transparent',
                        transition: '0.4s',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          borderBottom: '2px solid #000',
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
              
              <Button
                variant="contained"
                onClick={() => window.open('mailto:simranbardhan13@gmail.com', '_blank')}
                sx={{
                  background: '#000000',
                  color: '#FFFFFF',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  px: 3,
                  py: 1.5,
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  border: '2px solid #000000',
                  '&:hover': {
                    background: '#333333',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 1,
                  }}
                >
                  <Typography sx={{ color: '#FFFFFF', fontSize: '1rem' }}>→</Typography>
                </Box>
                Hire Me
              </Button>
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
