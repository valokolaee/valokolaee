import { StyleSheet } from 'react-native';
import mrvTxtTest, { isUnderDevelop } from '../../../utilities/mrvLogs';

export const testStyles = StyleSheet.create({
  b: isUnderDevelop ? { borderColor: 'blue', borderWidth: 1 } : {},
  r: isUnderDevelop ? { borderColor: 'red', borderWidth: 1 } : {},
  g: isUnderDevelop ? { borderColor: 'green', borderWidth: 2 } : {},
  y: isUnderDevelop ? { borderColor: 'orange', borderWidth: 2 } : {},
  p: isUnderDevelop ? { borderColor: 'purple', borderWidth: 1 } : {},
  none: {},
});

export default testStyles;
