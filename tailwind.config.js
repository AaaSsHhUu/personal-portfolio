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
        spin : "spin 10s linear infinite"
      },
      colors : {
        react : "#00d8ff"
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

