/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#C66B63', 
          deep: '#5B2A2A'
        },
        surface: '#0B0B0B',
        panel: '#111111',
        muted: '#9CA3AF'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      borderRadius: {
        xl2: '1rem'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.45)'
      }
    }
  },
  plugins: []
}
