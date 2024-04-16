import { ViewStyle } from 'react-native';
import { IEvent } from './IEvent';
import { IStyle } from './IStyle';

export interface IButtonContainer extends IStyle<ViewStyle> {
  events?: IEvent;
  color: string;
  fill?: 'fill' | 'dim';
  disabled?: boolean;
}
