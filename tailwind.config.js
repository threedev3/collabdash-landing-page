/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navigationText: "#BABABA",
        heroColor: "#FFAE00",
        purpleGrad: "#7300FF",
      },

      // animation: {
      //   marquee: "marquee 20s linear infinite",
      //   marquee2: "marquee 20s linear infinite",
      // },
      // keyframes: {
      //   marquee: {
      //     "0%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      //   marquee2: {
      //     "100%": { transform: "translateX(100%)" },
      //     "0%": { transform: "translateX(-100%)" },
      //   },
      // },
    },
  },
  plugins: [],
};
