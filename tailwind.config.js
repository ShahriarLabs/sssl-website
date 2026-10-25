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
          950: '#060a12',
          900: '#0a101d',
          850: '#0f172a',
          800: '#15203b',
          700: '#1e2e54',
          600: '#2c437a',
          100: '#e8edf7',
          50: '#f3f6fc'
        },
        charcoal: {
          950: '#090a0d',
          900: '#111318',
          800: '#1a1d24',
          700: '#272b36',
          600: '#383d4c'
        },
        gold: {
          500: '#c59b27',
          400: '#d8af3e',
          300: '#ebd173',
          100: '#faf4df'
        },
        brand: {
          blue: '#1b3b7e',
          red: '#c0262d',
          dark: '#080d19'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
