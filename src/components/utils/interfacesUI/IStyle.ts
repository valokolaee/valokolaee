import { StyleProp } from 'react-native';
import { IEvent } from './IEvent';

export interface IStyle<T> {
  event?: IEvent
  style?: StyleProp<T>;
  ref?: any;
}
