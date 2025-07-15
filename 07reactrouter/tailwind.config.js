/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // for extra custom styling defining custom animation behavior fade-in
       keyframes: {
        'fade-in': {
          // at start 0% opacity -0
          '0%': { opacity: '0' },
          // at end opacity is 0.2
          '100%': { opacity: '0.20' }, // matches your desired transparency
        },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}

