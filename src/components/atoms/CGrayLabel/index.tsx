import React, { memo, useImperativeHandle, useState } from 'react';
import { StyleSheet } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import styleValues from '../../utils/enums/styleValues';
import { IText } from '../Ctext/IText';
import { CText } from './../Ctext/index';

export default memo(React.forwardRef((props: IText, ref) => {
  const [isLoading, setIsloading] = useState(false);

  useImperativeHandle(ref, () => {
    return { _onError, setIsloading };
  });

  const [error, errorSetter] = useState<boolean>(false);
  const _onError = (e: boolean) => {
    errorSetter(e);
  };

  return <CText {...props} style={[defaultStyle.txtStyle, props.style]} />;
}));

const defaultStyle = StyleSheet.create({
  txtStyle: {
    backgroundColor: ColorSystem.gray!(5),
    paddingVertical: styleValues.p03,
    // paddingHorizontal: styleValues.paddin05,
    borderRadius: styleValues.r05,
  },
});
