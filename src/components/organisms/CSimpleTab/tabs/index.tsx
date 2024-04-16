import { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { ISimpleTab } from '../ISimpleTab';

export default ({ list, selected }: { list: ISimpleTab[]; selected: number }) => {
  // mrvTxtTest.alertObj(selected);
  return (
    <View style={defStyle.main}>
      {list.map((item, index) => (
        <Fragment key={index}>
          <View style={{ display: list[index] === list[selected] ? 'flex' : 'none' }}>{item.item}</View>
        </Fragment>
      ))}
    </View>
  );
};
const defStyle = StyleSheet.create({
  main: { flex: 1 },
  item: {},
});
