import { IStyle } from '../../utils/interfacesUI/IStyle';
import { StyleProp, ViewStyle } from 'react-native';



export interface ILogoColors {
  color?: string;
  stroke?: string;
}

export interface ILogo extends IStyle<ViewStyle> {
  colors?: ILogoColors;
  horizontal?: boolean;
  size?: number | string;
}

