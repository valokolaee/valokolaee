import React, { FC, memo, useImperativeHandle } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import { CText } from './../Ctext/index';
import { ITextStared } from './ITextStared';

export const CTextStared: FC<ITextStared> = React.forwardRef(
  ({ text, isNotRquierd }, ref) => {
    useImperativeHandle(ref, () => {
      return {};
    });

    return (
      <View style={[defaultStyle.container]}>
        <CText {...text} />
        {!isNotRquierd && <Text style={defaultStyle.star}>*</Text>}
      </View>
    );
  },
);
export default memo(CTextStared);

const defaultStyle = StyleSheet.create({
  container: { flexDirection: 'row' },
  star: { color: ColorSystem.Error },
});
