import { StyleSheet } from 'react-native';
import styleValues from '../components/utils/enums/styleValues';
import ColorSystem from './color/ColorSystem';

const CommonStyles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: ColorSystem.gray!(20),
    borderRadius: styleValues.r10,
  },
  cardFullRadius: {
    borderWidth: 1,
    borderColor: ColorSystem.gray!(20),
    borderRadius: styleValues.r50,
  },
  grayCard: { backgroundColor: ColorSystem.gray!(20), borderWidth: 0, }

});
export default CommonStyles;
export const borderColor = ColorSystem.gray!(20);
