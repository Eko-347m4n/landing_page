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
        primary: '#0F172A',
        secondary: '#38BDF8',
        accent: '#FACC15',
        backgroundLight: '#F8FAFC',
        backgroundDark: '#0F172A',
        textDark: '#0F172A',
        textLight: '#F8FAFC',
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
