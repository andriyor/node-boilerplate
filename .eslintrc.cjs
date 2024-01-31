/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "etc"],
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "etc/no-const-enum": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },
};
