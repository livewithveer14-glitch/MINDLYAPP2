/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'SF Pro Text', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        'aeiron-bg': '#020617',
        'aeiron-glass': 'rgba(15,23,42,0.8)',
        'aeiron-accent': '#38bdf8',
        'aeiron-accent-soft': '#0ea5e9',
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
      },
      animation: {
        'float-soft': 'float-soft 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

