/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import Ctext from './src/components/atoms/Ctext';
import COdometerPicker from './src/components/organisms/COdometerPicker';
import { EnumFontSize } from './src/components/utils/enums/EnumFontSize';
import styleValues from './src/components/utils/enums/styleValues';
import ColorSystem from './src/configs/color/ColorSystem';

const number = 5
const decimals = 3


function App(): JSX.Element {

  const [_res, set_res] = useState<string>('0')


  return (
    <SafeAreaView style={styles.main}>

      <COdometerPicker
        _bigNum='0'
        numbers={number}
        decimals={decimals}
        set_bigNum={set_res}
      />

      <Ctext text={_res} color={ColorSystem.White} fontSize={EnumFontSize.b0} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: ColorSystem.Success
  },
  initMainView: {
    flexDirection: "row",
    paddingHorizontal: styleValues.p05,
    alignContent: 'center',

  },
  initView: {
    flexDirection: "row"
  },
  initInput: {
    backgroundColor: ColorSystem.White,
    flex: 1,
    padding: styleValues.p03,

    borderWidth: 1,
    borderRadius: styleValues.r20,
    borderColor: ColorSystem.Border

  },
  card: {
  }

});

export default App;
