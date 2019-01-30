/* eslint import/no-dynamic-require: 0 */
const path = require('path');

const prettierConfig = require(path.resolve(__dirname, '../.prettierrc.js'));

module.exports = {
  rules: {
    'prettier/prettier': ['error', prettierConfig]
  }
};
