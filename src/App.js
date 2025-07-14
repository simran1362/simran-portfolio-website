import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#9ACD32',
    },
    background: {
      default: '#ffffff',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
