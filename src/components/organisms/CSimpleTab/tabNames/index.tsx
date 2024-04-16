import { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorSystem from '../../../../configs/color/ColorSystem';
import CText from '../../../atoms/Ctext';
import styleValues from '../../../utils/enums/styleValues';
import { ISimpleTab } from '../ISimpleTab';

export default ({ list, select, selectedIndex }: { list: ISimpleTab[]; select: (index: number) => void; selectedIndex: number }) => {
  return (
    <View style={defStyle.main}>
      {list.map((item, index) => (
        <Fragment key={index}>
          <CText
            text={item.name}
            style={[defStyle.item, list[selectedIndex] === item ? { color: ColorSystem.Primary } : {}]}
            events={{
              onPress() {
                select(index);
              },
            }}
          />
        </Fragment>
      ))}
    </View>
  );
};
const defStyle = StyleSheet.create({
  main: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: ColorSystem.gray!(10)
  },
  item: { flex: 1, textAlign: 'center', textAlignVertical: 'center', paddingVertical: styleValues.p05 },
});
