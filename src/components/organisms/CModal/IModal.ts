import { Node } from '@babel/core';
import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { IEvent } from '../../utils/interfacesUI/IEvent';
import { IStyle } from '../../utils/interfacesUI/IStyle';

export interface IModal extends IStyle<ViewStyle> {
  children?: ReactNode | ReactNode[];
  events?: IEvent;
  screenMode?: 'fullScreen' | 'bottom' | 'alert';
  backDropDontClose?: boolean;
  name?: string;
  noHeader?: boolean;
  keyboardAvoidingView?: boolean

}