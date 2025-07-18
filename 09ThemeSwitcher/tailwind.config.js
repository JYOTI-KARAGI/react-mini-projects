/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  // to enable the dark mode based on calss on<html>

  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}

