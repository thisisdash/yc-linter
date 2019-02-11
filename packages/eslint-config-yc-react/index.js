module.exports = {
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb', // airbnb react module
    'eslint-config-yc-base',
    './rules/react'
  ].map(require.resolve),
  plugins: ['react', 'jsx-a11y']
};
