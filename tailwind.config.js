/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container : {
      center : true,
      padding : "1rem",
      screens : {
        lg : "1366px",
        xl : "1366px"
      }
    },
  },
  plugins: [],
}

