/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        carpenter: "url('/images/backgroundcarpenter1.jpg')",
        cart: "url('/images/backgroundcart1.jpg')"
      }
    },
  },
  plugins: [],
}
