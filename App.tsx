/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import COdometerPicker from './src/components/organisms/COdometerPicker';
import mrvLogs from './src/utilities/mrvLogs';
import ColorSystem from './src/configs/color/ColorSystem';



function App(): JSX.Element {



  return (
    <SafeAreaView style={styles.main}>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}

      <COdometerPicker
        _bigNum='13.25'
        numbers={3}
        decimals={5}
        set_bigNum={(v) => {
          mrvLogs(v)
        }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: ColorSystem.Success
  }

});

export default App;
