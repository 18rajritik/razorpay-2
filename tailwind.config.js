/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        deepBlue:"#02042B",
        lightBlue:"#0000FF",   // ✔ Correct location
      },
    },
  },
  plugins: [],
};

 
