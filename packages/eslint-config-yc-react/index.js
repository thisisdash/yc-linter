module.exports = {
  extends: [
    'eslint-config-airbnb', // airbnb react module
    'eslint-config-yc-base',
    './rules/react',
  ].map(require.resolve),
};
