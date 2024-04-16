import { StyleSheet, View } from 'react-native';
import CAllButton from '../../molecules/CAllButton';
import styleValues from '../../utils/enums/styleValues';
import Xml from '../../utils/svgs/Xml';
import styler from '../../../utilities/styler';
import Container from './Container';
import { IStateNavigator } from '../../molecules/CAllButton/stateNavigator';
import { memo } from 'react';

export interface IDoubleButtons {
  color?: string
  left?: IDoubleButtonsItem
  right?: IDoubleButtonsItem
}

export interface IDoubleButtonsItem {
  func?: () => void;
  isDisabled?: boolean;
  label?: string
  icon?: ((color?: string | undefined) => string);
  position?: 'start' | 'end'
  textColor?: string;
  stateNav?: IStateNavigator;

}

export default memo(({ color, left, right }: IDoubleButtons) => {

  return (
    <View style={[defStyle.main]} >

      <Container>
        {left && <CAllButton

          baseViewPosition='left'
          stateNav={left?.stateNav}
          event={{ onPress: left?.func, }}

          button={{
            iText: { text: left?.label },
            style: [defStyle.inCommon, defStyle.left,],
            iIconSvg: {
              icon: { name: left?.icon || Xml.leftArrow, size: 15 },
              position: left?.position || 'start'
            },
            textColor: left?.textColor
          }}
        />}
      </Container>

      <Container>
        <CAllButton
          baseViewPosition='right'
          isDisabled={right?.isDisabled}
          stateNav={right?.stateNav}

          event={{ onPress: right?.func }}
          button={{
            buttonColor: color,
            iText: { text: right?.label },
            mode: 'contained',
            style: [defStyle.inCommon, defStyle.right,],
            iIconSvg: {
              icon: { name: right?.icon || Xml.rightArrow, size: 15 },
              position: right?.position || 'end'
            },
            textColor: right?.textColor,

          }}
        />
      </Container>

    </View>
  );
});
const defStyle = StyleSheet.create({
  main: {
    width: styleValues.centeredItemsWidth,
    alignSelf: 'center',
    // borderWidth: 1,
    flexDirection: 'row',


  },
  inCommon: { minWidth: styleValues.doubleItemsWidth, },
  right: {
    // width: '100%'
    borderWidth: 1,
    // flex: 1

  },
  left: {},

});
