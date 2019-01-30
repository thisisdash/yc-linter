module.exports = {
  env: {
    es6: true,
    'jest/globals': true
  },
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/rules',
    './rules/prettier'
  ]
    .map(require.resolve)
    .concat(['plugin:jest/recommended']),
  plugins: ['jest', 'prettier']
};
