module.exports = {
  extends: "google",
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    quotes: ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"]
  }
};
