const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        pokecard: "pokecard 0.2s 1",
      },
      fontFamily: {
        sans: ["Flexo Bold", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        pokecard: {
          "50%": {
            animationTimingFunction: "ease-in-out",
            transform: "translateY(-5px)",
          },
        },
      },
    },
  },
  plugins: [],
};
