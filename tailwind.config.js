/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1A202C',
          dark: '#63B3ED',
        },
        secondary: {
          light: '#4299E1',
          dark: '#2D3748',
        },
        accent: '#F6AD55',
        background: {
          light: '#F7FAFC',
          dark: '#1A202C',
        },
        text: {
          light: '#2D3748',
          dark: '#E2E8F0',
        },
        cardBg: {
          light: '#FFFFFF',
          dark: '#2D3748',
        },
        shadow: {
          light: 'rgba(0, 0, 0, 0.08)',
          dark: 'rgba(0, 0, 0, 0.5)',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
