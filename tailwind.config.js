/** @type {import('tailwindcss').Config} */
export default {
  content: [
          "./public/src/js/**/*.js",
          "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ "Noto Sans JP"]
      },
      scale:{
        '200': '2.0'
      }
    },
  },
  plugins: [],
}

