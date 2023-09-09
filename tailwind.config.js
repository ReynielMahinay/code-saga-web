/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        wide: "1440px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        kanit: ["Kanit", "cursive"],
      },
      colors: {
        primary: "#ECEEFF",
        dark_blue: "#222030",
        darkblueslate: "#161424",
        yellow: "#f4ae1c",
      },
      backgroundImage: {
        hero: "url('assets/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
