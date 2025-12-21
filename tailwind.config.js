/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // Emerald Green
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        navy: {
          DEFAULT: '#0A192F',
          50: '#E6E9ED',
          100: '#CCD3DB',
          200: '#99A7B7',
          300: '#667B93',
          400: '#334F6F',
          500: '#0A192F',
          600: '#081426',
          700: '#060F1C',
          800: '#040A13',
          900: '#020509',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
