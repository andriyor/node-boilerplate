const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  overrides: {
    javascript: {
      'no-console': 'off',
    },
  },
})
