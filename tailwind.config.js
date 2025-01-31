/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#084887',
        'custom-blue-light': 'rgba(8, 72, 135, 0.8)',
      }
    },
  },
  plugins: [],
}