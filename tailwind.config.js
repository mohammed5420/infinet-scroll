module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cusBlue": {
          100: "#2b3945",
          200: "#202c37",
          300: "#111517",
          400: "#858585",
          500: "#fafafa",
          600: "#ffffff",
        },
      },
    },
  },
  fontFamily: {
    body: ["Rubik", "sans-serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
