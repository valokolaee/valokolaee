import React, { memo } from 'react';
import { View } from 'react-native';
import resizer from '../../utils/enums/resizer';

export default memo(({ thick = 1, vertical }: { thick?: number; vertical?: boolean }) => {
  return (
    <View
      style={
        !vertical

          ? {
            width: resizer(thick),
          }
          : { height: resizer(thick) }
      }
    />
  );
});
