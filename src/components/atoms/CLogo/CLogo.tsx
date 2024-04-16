import React, { FC, memo, useImperativeHandle } from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { SvgXml } from 'react-native-svg';
import { ILogo, ILogoColors } from './ILogo';
import Xml from './../../utils/svgs/Xml';
import ColorSystem from '../../../configs/color/ColorSystem';

export default memo(({ size = 20, style, colors }: ILogo) => {


  return (
    <View style={[defStyle.main, style]}>
      <SvgXml width={wp(size) * 2.2} height={wp(size)} xml={colors?.color ? Xml.fullLogoWithColor(colors) : Xml.solidLogo} />
    </View>
  );
});


const defStyle = StyleSheet.create({
  main: { flexDirection: 'row', justifyContent: 'center' },
});
