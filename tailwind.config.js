/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        main:["Roboto Condensed", 'sans-serif'],
        
        Mukta:["Mukta", 'sans-serif'],
        oswald:[ "Oswald", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

