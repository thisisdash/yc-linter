module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'extends': [
    'airbnb-base',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  'plugins': [
    'jsx-a11y',
    'react',
    'jest'
  ],
  'rules': {
    'arrow-body-style': 1,
    'arrow-parens': [
      'warn', 'as-needed', { requireForBlockBody: true },
    ],
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    'consistent-return': 1,
    'function-paren-newline': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 1,
    'jsx-a11y/label-has-for': 0,
    'jsx-quotes': [
      'warn',
      'prefer-single'
    ],
    'max-len': [
      'warn', { 'code': 120 },
    ],
    'no-console': 1,
    'no-debugger': 1,
    'no-mixed-operators': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': 1,
    'no-param-reassign': 1,
    'no-plusplus': 0,
    'no-restricted-globals': 0,
    'no-shadow': [
      'warn'
    ],
    'no-throw-literal': 1,
    'no-underscore-dangle': 0,
    'no-unreachable': 1,
    'no-unused-vars': 1,
    'no-use-before-define': 1,
    'object-curly-newline': 0,
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'one-var': 0,
    'prefer-const': 1,
    'prefer-rest-params': 1,
    'prefer-template': 1,
    'quotes': 1,
    'react/no-unused-prop-types': 1,
    'react/prop-types': 1,
    'semi': 1,
    'space-before-blocks': 1,
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'space-in-parens': 1
  }
};
