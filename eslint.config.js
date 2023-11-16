const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  overrides: {
    javascript: {
      'no-console': 'off',
    },
  },
})
