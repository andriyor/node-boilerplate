const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  overrides: {
    typescript: {
      'ts/no-redeclare': 'off',
      'ts/switch-exhaustiveness-check': 'error',
    },
    javascript: {
      'no-console': 'off',
    },
  },
})
