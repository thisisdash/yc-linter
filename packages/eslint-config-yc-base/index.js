module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/best-practices',
  ].map(require.resolve).concat([
    'plugin:jest/recommended',
  ]),
};
