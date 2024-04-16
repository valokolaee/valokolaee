import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { IHeader } from '../../organisms/CHeader/component/IHeader';
import { IDoubleButtons } from '../../organisms/DoubleButtons';
import { IButton } from '../../molecules/CButton/IButton';
import { IAllButton } from '../../molecules/CAllButton/IAllButton';

export interface IBaseView {
  doubleBtn?: IDoubleButtons;
  singleBtn?: IAllButton;
  ref?: any;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode | ReactNode[];
  header?: ReactNode | ReactNode[];
}
