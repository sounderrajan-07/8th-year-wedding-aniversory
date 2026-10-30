/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0a0408',
          card: '#150811',
          surface: '#1c0a17',
          elevated: '#240d1e',
          border: '#3a162e',
        },
        burgundy: {
          950: '#14030b',
          900: '#220614',
          800: '#380921',
          700: '#520e30',
          600: '#731443',
          500: '#941b57',
        },
        gold: {
          50: '#fdfbf2',
          100: '#fbf5e2',
          200: '#f5e7bf',
          300: '#edd292',
          400: '#dfb75c',
          500: '#d4a337',
          600: '#ba8525',
          700: '#96631b',
        },
        rosewine: {
          light: '#fda4af',
          DEFAULT: '#f472b6',
          soft: '#fb7185',
          dark: '#be185d',
        },
        ivory: {
          DEFAULT: '#fffdfa',
          soft: '#f5f0e8',
          muted: '#dcd4c7',
          dim: '#a89f92',
        }
      },
      fontFamily: {
        tamil: ['"Noto Sans Tamil"', 'system-ui', 'sans-serif'],
        'tamil-serif': ['"Noto Serif Tamil"', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 30px -5px rgba(212, 163, 55, 0.35)',
        'gold-glow-lg': '0 0 50px -5px rgba(212, 163, 55, 0.45)',
        'rose-glow': '0 0 30px -5px rgba(244, 114, 182, 0.3)',
        'cinematic': '0 25px 60px -15px rgba(0, 0, 0, 0.9)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
