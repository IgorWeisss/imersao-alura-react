/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundBase: "#F9F9F9",
        backgroundLevel1: "#FFFFFF",
        backgroundLevel2: "#F0F0F0",
        borderBase: "#E5E5E5",
        textColorBase: "#222222"
      },
      fontFamily: {
        sans: "Helvetica"
      }
    },
  },
  plugins: [],
}
