module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      modules: true
    }
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100
      }
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    "@typescript-eslint/no-unused-vars": "error"
  }
};
