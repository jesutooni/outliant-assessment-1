/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#636262",
        secondary: "#ECECEC",
        image: {
          100: "#C4C4C4",
          200: "#9D9D9D",
        },
      },
    },
  },
  plugins: [],
};
