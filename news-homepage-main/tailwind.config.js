/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "375px",
    },
    extend: {
      colors: {
        softOrange: "hsl(35, 77%, 62%)",
        softRed: "hsl(5, 85%, 63%)",
        offWhite: "hsl(36, 100%, 99%)",
        grayishBlue: "hsl(233, 8%, 79%)",
        darkGrayishBlue: "hsl(236, 13%, 42%)",
        veryDarkBlue: "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      fontSize: {
        paragraph: "15px",
      },
    },
  },
  plugins: [],
};
