/* tailwind.config.js */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'navy-primary': '#0B1F3A',
        'secondary-blue': '#1D4ED8',
        
        // Accent Colors
        'accent-orange': '#F59E0B',
        
        // Background Colors
        'background-light': '#F9FAFB',
        'gray-subtle': '#E5E7EB',
        
        // Text Colors
        'text-dark': '#111827',
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
};