module.exports = {
  env: {
    browser: true
  },
  extends: [
    'eslint-config-airbnb', // airbnb react module
    'eslint-config-yc-base',
    './rules/react'
  ].map(require.resolve),
  plugins: ['react', 'jsx-a11y']
};
