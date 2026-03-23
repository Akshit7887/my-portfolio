/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    ".index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        accent: "#f43f5e",
        background: "#1e293b",
        text: "#f8f8f8",
      },
    fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },

   },
   plugins: [],
         
};
