/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sfpro: ["sfpro", "sans-serif"],
      },
      backgroundImage: {
        logo: "url('/src/img/profile.png')",
      },
    },
  },
  plugins: [],
}
