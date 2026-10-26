/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071022', // rich deep midnight navy (not pitch black)
          900: '#0c1a38', // deep royal corporate navy
          850: '#112248', // executive navy
          800: '#172e5e', // steel navy
          700: '#213e7d', // slate navy
          600: '#2e53a3',
          100: '#e8edf7',
          50: '#f3f6fc'
        },
        steel: {
          950: '#0b1324',
          900: '#13213d',
          800: '#1d3159',
          700: '#2a4478',
          600: '#3d5f9f',
          400: '#6f93cf',
          200: '#c5d5f0'
        },
        charcoal: {
          950: '#0d131f',
          900: '#141d2d',
          800: '#1c283d',
          700: '#273650',
          600: '#374b6e'
        },
        gold: {
          600: '#a8811b',
          500: '#c59b27',
          400: '#dfb15b',
          300: '#ebd173',
          200: '#f5e3a3',
          100: '#faf4df'
        },
        brand: {
          blue: '#1b3b7e',
          red: '#c0262d',
          dark: '#0a1428'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ken-burns': 'kenburns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.0) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        }
      }
    },
  },
  plugins: [],
}
