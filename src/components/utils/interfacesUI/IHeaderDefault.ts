import { ViewStyle } from 'react-native';
import { IEvent } from './IEvent';
import { IICon } from '../../atoms/CIconGenerator/IICon';
import { IStyle } from './IStyle';
import { IText } from '../../atoms/Ctext/IText';

export interface IHeaderDefault extends IStyle<ViewStyle> {
  title?: IText;
  showIconMenu?: boolean;
  iconEnd?: IICon;
  iconEndEvent?: IEvent;
}
