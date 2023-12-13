/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationRoot} from './src/navigation/NavigationRoot';

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      {/* <AsyncGate> */}
      <NavigationRoot />
      {/* </AsyncGate> */}
    </SafeAreaProvider>
  );
};

export default App;
