import React from 'react';
import { StyleSheet, View } from 'react-native';
import CGap from '../../atoms/CGap';
import { ITabletCulomn } from './ITabletCulomn';
export default ({ start, end }: ITabletCulomn) => {
  return (
    <View style={[defStyle.baseView]}>
      <View style={defStyle.part}>{start}</View>
      <CGap thick={30} />
      <View style={defStyle.part}>{end}</View>
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: { flexDirection: 'row' },
  part: { flex: 10 },
});
