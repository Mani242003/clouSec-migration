/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      
      backgroundImage: {
        'custom-bg': "url('/hero-bg.jpg')",
      },
      colors: {
        primary: "#6153CD",
        primary2:"#FF9118",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
        black_ :'#1D2639',
        lightWhite :"#e4edfc"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
