import { ViewStyle } from 'react-native';
import { IEvent } from './IEvent';
import { IStyle } from './IStyle';
import { IICon } from '../../atoms/CIconGenerator/IICon';

export interface IIconSvg extends IStyle<ViewStyle> {
  icon?: {
    size?: number;
    name: ((color?: string | undefined) => string);
  };
  position?: 'start' | 'end';

}
