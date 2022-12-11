/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SFDisplay: ["SF Pro Display", "sans-serif"],
      },
      backgroundImage: {
        logo: "url('/src/img/logo.png')",
      },
    },
  },
  plugins: [],
}
