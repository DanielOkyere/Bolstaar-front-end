module.exports = {
  mode : "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: ["Poppins","sans-serif"],
    extend: {
      colors :{
        firstGreen : "var(--firstGreen)",
        SecondGreen : "var(--SecondGreen)",
        TernaryGreen : "var(--TernaryGreen)",
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 255,255,0.17)"
    
      }
    },
  },
  plugins: [],
}