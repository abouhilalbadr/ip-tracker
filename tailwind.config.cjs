/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          vdg: "hsl(0, 0%, 17%)",
          dg: "hsl(0, 0%, 59%)"
        }
      }
    },
  },
  plugins: [],
}
