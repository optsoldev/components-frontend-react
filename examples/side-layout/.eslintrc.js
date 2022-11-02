module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react-hooks"],
  extends: ["plugin:import/typescript"],
  rules: {
    "no-shadow": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
  },
};
