import React from 'react';
import { FaCode, FaMicrochip, FaDatabase, FaBolt, FaCloud } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';

const TechElements = () => {
  return (
    <>
      <div className="tech-shapes">
        <div className="floating-cube cube-1">
          <div className="cube-face front" />
          <div className="cube-face back" />
          <div className="cube-face right" />
          <div className="cube-face left" />
          <div className="cube-face top" />
          <div className="cube-face bottom" />
        </div>

        <div className="floating-cube cube-2">
          <div className="cube-face front" />
          <div className="cube-face back" />
          <div className="cube-face right" />
          <div className="cube-face left" />
          <div className="cube-face top" />
          <div className="cube-face bottom" />
        </div>

        <div className="floating-pyramid pyramid-1">
          <div className="pyramid-face front" />
          <div className="pyramid-face back" />
          <div className="pyramid-face right" />
          <div className="pyramid-face left" />
        </div>

        <div className="floating-pyramid pyramid-2">
          <div className="pyramid-face front" />
          <div className="pyramid-face back" />
          <div className="pyramid-face right" />
          <div className="pyramid-face left" />
        </div>
      </div>

      <div className="floating-tech-icons">
        <div className="tech-icon icon-1">
          <FaCode style={{ fontSize: '2rem', color: '#9ACD32' }} />
        </div>
        <div className="tech-icon icon-2">
          <FaMicrochip style={{ fontSize: '1.8rem', color: '#7BA428' }} />
        </div>
        <div className="tech-icon icon-3">
          <FaDatabase style={{ fontSize: '2.2rem', color: '#9ACD32' }} />
        </div>
        <div className="tech-icon icon-4">
          <FaBolt style={{ fontSize: '2rem', color: '#6B8E23' }} />
        </div>
        <div className="tech-icon icon-5">
          <FaCloud style={{ fontSize: '2.4rem', color: '#9ACD32' }} />
        </div>
        <div className="tech-icon icon-6">
          <VscJson style={{ fontSize: '1.9rem', color: '#7BA428' }} />
        </div>
      </div>

      <div className="circuit-lines">
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
      </div>

      <div className="floating-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>
    </>
  );
};

export default TechElements;
