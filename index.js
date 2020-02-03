import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppRegistry } from 'react-native';
import Root from './src/navigators';
import { name as appName } from './app.json';

const App = () => {
  return (
    <SafeAreaProvider>
      <Root />
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);
