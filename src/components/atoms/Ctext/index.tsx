import React, { FC, memo, useImperativeHandle } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import TextHelper from '../../../utilities/TextHelper';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import { IText } from './IText';

export const CText: FC<IText> = React.forwardRef(
  ({ text, event, style, disabled, bold, color, fontSize, holderStyle, capitalize }, ref) => {
    useImperativeHandle(ref, () => {
      return {};
    });

    return (
      <View style={[defaultStyle.main, holderStyle,
        // testStyles.r
      ]}>

        <Text
          onPress={event?.onPress!}
          style={[
            defaultStyle.txtStyle,
            bold && { fontWeight: 'bold' },
            disabled && { color: ColorSystem.gray!(35) },
            { fontSize: fontSize || EnumFontSize.h5, color: color || ColorSystem.DefaulText },
            // testStyles.g,
            style,
          ]}>
          {capitalize ? TextHelper.capitalize(text!?.toString()) : text?.toString()}
        </Text>
      </View>
    );
  },
);
export default memo(CText);

const defaultStyle = StyleSheet.create({
  main: {

    justifyContent: 'center',
    // borderWidth: 1,
    // flex: 1
    height: 'auto',

  },
  txtStyle: {
    // fontSize: EnumFontSize.h5,
    color: ColorSystem.gray!(70),
    // overflow: 'hidden',
    textAlign: 'center',

  },
});
