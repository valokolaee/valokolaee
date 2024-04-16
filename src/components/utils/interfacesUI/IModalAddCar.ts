import { ViewStyle } from 'react-native';
import { IEvent } from './IEvent';
import { IHeader } from '../../organisms/CHeader/component/IHeader';
import { IStyle } from './IStyle';

export interface IModal extends IStyle<ViewStyle> {
  events?: IEvent;
  fullScreen?: boolean;
  backDropClose?: boolean;
  _iHeader?: IHeader;
}
