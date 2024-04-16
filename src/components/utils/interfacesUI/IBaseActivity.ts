import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { IHeader } from '../../organisms/CHeader/component/IHeader';
import { TColorSet } from '../../../configs/color/interfaceColor/IBaseColor';

export interface IBaseActivity {

  ref?: any;
  style?: StyleProp<ViewStyle>;
  bodyColorSet?: TColorSet;
  children?: ReactNode | ReactNode[];
  header?: IHeader;
  route?: string;
}
