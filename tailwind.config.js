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
    
      }
    },
  },
  plugins: [],
}