module.exports = {
  purge: {
    mode: "production",
    content: ["./src/**/*.html"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
