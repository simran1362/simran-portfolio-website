/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#9ACD32',
          dark: '#7BA428',
          deep: '#6B8E23',
          glow: '#C5E869',
        },
        brand: {
          pink: '#FF1B8D',
          orange: '#FF6B35',
        },
        surface: {
          light: '#FFFFFF',
          lightAlt: '#F6F7F4',
          dark: '#0A0A0A',
          darkAlt: '#141414',
          darkAlt2: '#1F1F1F',
        },
        ink: {
          light: '#0A0A0A',
          lightMuted: '#5C6470',
          dark: '#FFFFFF',
          darkMuted: '#A0A6B0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF1B8D 0%, #FF6B35 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #E6186F 0%, #E55A2B 100%)',
        'blob-green':
          'radial-gradient(60% 60% at 30% 30%, rgba(154,205,50,0.55) 0%, rgba(154,205,50,0.18) 45%, rgba(154,205,50,0) 70%)',
        'blob-green-soft':
          'radial-gradient(50% 50% at 50% 50%, rgba(197,232,105,0.45) 0%, rgba(154,205,50,0.18) 45%, rgba(154,205,50,0) 75%)',
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(0, 0, 0, 0.18)',
        card: '0 8px 30px -10px rgba(0, 0, 0, 0.22)',
        glow: '0 0 0 6px rgba(154, 205, 50, 0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'spin-slow': 'spinSlow 10s linear infinite',
        blob: 'blob 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
