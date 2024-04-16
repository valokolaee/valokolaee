import React, { FC, memo } from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import { SvgXml } from 'react-native-svg';
import resizer from '../../utils/enums/resizer';
import { IICon } from './IICon';

export const CIconGenerator: FC<IICon> = ({ iconName, size = 20, style, event }) => {

  return (
    <SvgXml
      style={style}
      onPress={event?.onPress}
      width={resizer(RFPercentage(size / 10!))}
      height={resizer(RFPercentage(size / 10!))}
      xml={typeof iconName === 'string' ? iconName : iconName()}
    />);
};

export default memo(CIconGenerator);


