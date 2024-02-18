/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        roboto : ["Roboto", "sans-serif"]
      },
      animation : {
        spin : "spin 7s linear infinite"
      }
    },
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

