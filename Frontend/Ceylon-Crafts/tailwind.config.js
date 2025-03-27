/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ubuntu: ['Ubuntu','sans-serif'],
        unna: ['Unna','sans-serif'],
        outfit: ['Outfit','sans-serif'],
        instrumentSerif: ['Instrument Serif','sans-serif'],
        spaceMono: ['Space Mono','sans-serif'],
        hedvigLettersSerif: ['Hedvig Letters Serif','sans-serif']
      }
    },
  },
  plugins: [],
}

