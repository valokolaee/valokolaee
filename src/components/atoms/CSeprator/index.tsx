import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ColorSystem from '../../../configs/color/ColorSystem';
import { ISeprator } from './ISeprator';

export default memo(({ color, thickNess: thikNess, margH, margV }: ISeprator) => (
  <View
    style={{
      borderWidth: thikNess ? thikNess : 0.5,
      borderColor: color || ColorSystem.gray!(10),
      marginHorizontal: margH ? wp(margH) : 0,
      marginVertical: margV ? hp(margV) : 0,
    }}
  />
));
