module.exports = {
  preset: 'react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jestSetupFile.js',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native-community|@fortawesome|react-native|react-navigation|@react-navigation.*))',
  ],
  testPathIgnorePatterns: ['e2e/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
