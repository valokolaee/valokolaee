import { IStyle } from '../../utils/interfacesUI/IStyle';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IEvent } from '../../utils/interfacesUI/IEvent';

export interface IText extends IStyle<TextStyle> {
  holderStyle?: StyleProp<ViewStyle>;
  // events?: IEvent;
  text?: string | number;
  bold?: boolean;
  disabled?: boolean;
  fontSize?: number;
  color?: string;
  capitalize?: boolean
}
