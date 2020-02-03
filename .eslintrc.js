module.exports = {
  plugins: ['react', 'react-native'],
  extends: [
    'airbnb',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-console': 'off',
    'global-require': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ], // disable the rule for variables, but enable it for functions and classes
    'no-underscore-dangle': 'off', // We have some dangling vars in React Native
    'react/jsx-one-expression-per-line': 'off',
  },
  globals: {
    jasmine: 'readonly',
    device: 'readonly',
    element: 'readonly',
    by: 'readonly',
  },
};
