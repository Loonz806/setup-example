module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "standard",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
