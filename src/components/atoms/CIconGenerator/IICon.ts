import { ViewStyle } from 'react-native';
import { IEvent } from '../../utils/interfacesUI/IEvent';
import { IStyle } from '../../utils/interfacesUI/IStyle';

export interface IICon extends IStyle<ViewStyle> {
  size?: number;
  iconName: iconName;
}
export type iconName = string | ((color?: string | undefined) => string);

