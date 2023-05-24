/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1D202B",
        lightBlue: "#262B42",
      },
    },
  },
  plugins: [],
};
