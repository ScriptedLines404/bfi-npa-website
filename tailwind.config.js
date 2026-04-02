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
          dark: "#0A2540",
          orange: "#F59E0B",
          grey: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        heading: ['"Poppins"', '"Montserrat"', "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}