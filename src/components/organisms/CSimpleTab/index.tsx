import React, { useState, useImperativeHandle, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ISimpleTab } from './ISimpleTab';
import TabNames from './tabNames';
import Tabs from './tabs';

export default React.forwardRef(({ list, indexReporter }: { list: ISimpleTab[], indexReporter?: (index: number) => void }, ref) => {
  useImperativeHandle(ref, () => {
    return { movForward, jumpTo };
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    indexReporter!(selectedIndex)
  }, [selectedIndex])
  const movForward = () => {
    // mrvTxtTest.TSTtoast('movForward');
    var next = selectedIndex + 1;
    next < list?.length && setSelectedIndex(selectedIndex + 1);
  };

  const jumpTo = (tabIndex: number) => {
    setSelectedIndex(tabIndex);
  };
  return (
    <View

      style={defStyle.main}>
      <TabNames
        list={list}
        selectedIndex={selectedIndex}
        select={(i) => {
          // indexReporter!(i)
          setSelectedIndex(i);
        }}

      />
      <Tabs list={list} selected={selectedIndex} />
    </View>
  );
});
const defStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
});
