/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'etc'],
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "etc/no-const-enum": "error"
  }
};
