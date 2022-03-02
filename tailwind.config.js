module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "ha-blue": "#397FFE",
        "main-blue": "#0063B7",
        "light-gray": "#9CA1AC",
        "almost-white": "#F9F9F9",
        "half-black": "rgba(0, 0, 0, 0.5)",
      },
      fontSize: {
        tiny: ".875rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
