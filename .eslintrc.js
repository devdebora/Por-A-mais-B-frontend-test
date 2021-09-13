module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  globals: { globalThis: 'readonly' },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: 'React',
      },
    ],
    'prefer-const': ['error'],
    'no-throw-literal': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 1,
    'react/display-name': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/test.js', '**/*.test.js'],
      env: { jest: true },
    },
  ],
}
