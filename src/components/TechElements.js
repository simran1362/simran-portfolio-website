import React from 'react';
import { Box } from '@mui/material';
import { Code, Memory, Storage, Speed, CloudQueue, DataObject } from '@mui/icons-material';

const TechElements = () => {
  return (
    <>
      {/* Floating 3D Geometric Shapes */}
      <Box className="tech-shapes">
        {/* Floating Cube */}
        <Box className="floating-cube cube-1">
          <Box className="cube-face front"></Box>
          <Box className="cube-face back"></Box>
          <Box className="cube-face right"></Box>
          <Box className="cube-face left"></Box>
          <Box className="cube-face top"></Box>
          <Box className="cube-face bottom"></Box>
        </Box>

        <Box className="floating-cube cube-2">
          <Box className="cube-face front"></Box>
          <Box className="cube-face back"></Box>
          <Box className="cube-face right"></Box>
          <Box className="cube-face left"></Box>
          <Box className="cube-face top"></Box>
          <Box className="cube-face bottom"></Box>
        </Box>

        {/* Floating Pyramids */}
        <Box className="floating-pyramid pyramid-1">
          <Box className="pyramid-face front"></Box>
          <Box className="pyramid-face back"></Box>
          <Box className="pyramid-face right"></Box>
          <Box className="pyramid-face left"></Box>
        </Box>

        <Box className="floating-pyramid pyramid-2">
          <Box className="pyramid-face front"></Box>
          <Box className="pyramid-face back"></Box>
          <Box className="pyramid-face right"></Box>
          <Box className="pyramid-face left"></Box>
        </Box>
      </Box>

      {/* Floating Tech Icons */}
      <Box className="floating-tech-icons">
        <Box className="tech-icon icon-1">
          <Code sx={{ fontSize: '2rem', color: '#9ACD32' }} />
        </Box>
        <Box className="tech-icon icon-2">
          <Memory sx={{ fontSize: '1.8rem', color: '#7BA428' }} />
        </Box>
        <Box className="tech-icon icon-3">
          <Storage sx={{ fontSize: '2.2rem', color: '#9ACD32' }} />
        </Box>
        <Box className="tech-icon icon-4">
          <Speed sx={{ fontSize: '2rem', color: '#6B8E23' }} />
        </Box>
        <Box className="tech-icon icon-5">
          <CloudQueue sx={{ fontSize: '2.4rem', color: '#9ACD32' }} />
        </Box>
        <Box className="tech-icon icon-6">
          <DataObject sx={{ fontSize: '1.9rem', color: '#7BA428' }} />
        </Box>
      </Box>

      {/* Animated Circuit Lines */}
      <Box className="circuit-lines">
        <svg className="circuit-svg" viewBox="0 0 1200 800" fill="none">
          <path
            className="circuit-path path-1"
            d="M700 150 L900 150 L900 300 L1100 300 L1100 450"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            className="circuit-path path-2"
            d="M800 100 L1000 100 L1000 250 L1150 250"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
          />
          <path
            className="circuit-path path-3"
            d="M750 400 L950 400 L950 200 L1050 200 L1050 50"
            stroke="url(#gradient3)"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Circuit nodes */}
          <circle className="circuit-node node-1" cx="900" cy="150" r="4" fill="#9ACD32" />
          <circle className="circuit-node node-2" cx="1100" cy="300" r="4" fill="#7BA428" />
          <circle className="circuit-node node-3" cx="1000" cy="100" r="4" fill="#9ACD32" />
          <circle className="circuit-node node-4" cx="950" cy="400" r="4" fill="#6B8E23" />
          <circle className="circuit-node node-5" cx="1050" cy="200" r="4" fill="#9ACD32" />

          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9ACD32" stopOpacity="0" />
              <stop offset="50%" stopColor="#9ACD32" stopOpacity="1" />
              <stop offset="100%" stopColor="#9ACD32" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7BA428" stopOpacity="0" />
              <stop offset="50%" stopColor="#7BA428" stopOpacity="1" />
              <stop offset="100%" stopColor="#7BA428" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6B8E23" stopOpacity="0" />
              <stop offset="50%" stopColor="#6B8E23" stopOpacity="1" />
              <stop offset="100%" stopColor="#6B8E23" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Box>

      {/* Floating Particles */}
      <Box className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <Box key={i} className={`particle particle-${i + 1}`}></Box>
        ))}
      </Box>
    </>
  );
};

export default TechElements;
