module.exports = {
  theme: {},
  variants: {
    display: ["responsive", "hover", "group-hover", "focus", "focus-within"],
    backgroundColor: ["responsive", "hover", "focus", "focus-within"],
    outline: ["focus", "responsive", "hover"],
    flex: ["responsive", "hover", "group-hover", "focus", "focus-within"],
    padding: ["responsive", "first", "last", "hover", "focus"],
    margin: ["responsive", "first", "last", "hover", "focus", "odd"]
  },
  plugins: [
    require("./themes/default.js"),
    require("tailwindcss-transitions")()
  ]
};
