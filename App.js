import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { styles } from './src/assets/styles';
import AppNavigator from './src/Navigator/AppNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <AppNavigator />
    </SafeAreaView>
  );
};


export default App;