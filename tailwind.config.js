/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "bg-black": "#151312",
        "bg-grey": "#1C1A19",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "max-lg": { max: "1400px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "630px" },
      },
    },
  },
  plugins: [],
};
