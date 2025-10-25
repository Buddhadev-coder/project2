/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode with .dark class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan your files for Tailwind classes
  ],
  theme: {
    extend: {
    
    },
  },
  plugins: [],
}
