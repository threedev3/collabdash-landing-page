/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navigationText: "#BABABA",
        heroColor: "#FFAE00",
        purpleGrad: "#7300FF",
        featureCard: "#121212",
        hoverfeature: "#191919",
        testimonialsBg: "#151515",
        testimonialsCard: "#232323",
        stepBg: "#222222",
        inputBg: "#161616",
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
