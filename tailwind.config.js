/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:"#49B88C",
        black: "#333333",
        'blur-black':"rgba(0,0,0,.5)",
        'light-black':"#818181",
        purple:"#9747FF",
        white:"#FEFEFF",
        gray:"#AEB1B7",
        'dark-gray':"#5D6470",
        'light-gray':"#D9DBDE",
        success:"#15CC8A",
        error:"#FA1048",
      }
    },
  },
  plugins: [],
}

