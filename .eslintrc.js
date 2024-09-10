module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "no-console": "error",
    "no-unused-vars": "warn",
    "eqeqeq": "error",
    "curly": ["error", "all"],
    "semi": ["error", "always"],
  }
};
