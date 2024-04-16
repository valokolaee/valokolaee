import React, { FC, memo, useEffect, useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import styler from '../../utilities/styler';
import CText from '../atoms/Ctext';
import CAllButton from '../molecules/CAllButton';
import styleValues from '../utils/enums/styleValues';
import { IBaseView } from '../utils/interfacesUI/IBaseView';
import DoubleButtons from './DoubleButtons';


const BaseView: FC<IBaseView> = React.forwardRef(
  ({ children, style, doubleBtn, singleBtn, header }, ref) => {
    const [_show, set_show] = useState(false)
    useEffect(() => {
      setTimeout(() => {

        set_show(true)
      }, 10);
    }, [])
    return (
      // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[defStyl.main]}>
        {header}
        <View style={[defStyl.body, style,]}>
          <View style={styler({
            flex: 1
          })}>
            {children}
          </View>

          {doubleBtn && <DoubleButtons {...doubleBtn} />}
          {(doubleBtn && singleBtn) && <CText />}
          {singleBtn && <CAllButton
            {...singleBtn}
            baseViewPosition='single'
          // button={singleBtn}
          // isDisabled={singleBtn.isDisabled}
          // style={styler({ width: styleValues.centeredItemsWidth })}
          />}
        </View>
      </View>

    );
  },
);
export default memo(BaseView);

const defStyl = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: styleValues.p10,
    paddingVertical: styleValues.p05
  },
});
