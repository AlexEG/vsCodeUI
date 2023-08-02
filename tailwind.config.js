/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        mainLayoutCols: "47px 220px 1fr",
      },
      gridTemplateRows: {
        mainLayoutRows: "35px 1fr 22px",
      },
    },
  },
  plugins: [],
};
