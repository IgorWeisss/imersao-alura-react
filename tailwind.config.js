/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundBase: "var(--backgroundBase)",
        backgroundLevel1: "var(--backgroundLevel1)",
        backgroundLevel2: "var(--backgroundLevel2)",
        borderBase: "var(--borderBase)",
        textColorBase: "var(--textColorBase)",
        textInput: "var(--textInput)",
        overlay: "var(--overlay)",
        videoCardOverlay: "var(--videoCardOverlay)",
        themeSwitcherBackground: "#333333",
        themeSwitcherThumb: "#FAFAFA",
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--videoCardOverlay), #7F1D1D)'
      },
      fontFamily: {
        sans: "Helvetica"
      }
    },
  },
  plugins: [],
}
