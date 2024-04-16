import { IModal } from '../../organisms/CModal/IModal';
import { IText } from '../../atoms/Ctext/IText';

export interface IBottomDrawer extends IModal {
  titlButton?: string;
  isList?: boolean;
}
