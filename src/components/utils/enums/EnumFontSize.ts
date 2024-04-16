// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import resizer from './resizer';


const _fontSize_resizer = (size: number) => {
  return resizer(size) / 2
}

export enum EnumFontSize {

  h0 = _fontSize_resizer(wp(9.0)),

  h1 = _fontSize_resizer(wp(8.0)),

  h2 = _fontSize_resizer(wp(6.0)),

  h3 = _fontSize_resizer(wp(4.5)),

  h4 = _fontSize_resizer(wp(4.0)),

  h5 = _fontSize_resizer(wp(3.5)),

  h6 = _fontSize_resizer(wp(3.0)),

  h7 = _fontSize_resizer(wp(2.5)),

  h8 = _fontSize_resizer(wp(2.0)),


  b0 = _fontSize_resizer(wp(19.0)),

  b1 = _fontSize_resizer(wp(18.0)),

  b2 = _fontSize_resizer(wp(16.0)),

  b3 = _fontSize_resizer(wp(14.5)),

  b4 = _fontSize_resizer(wp(14.0)),

  b5 = _fontSize_resizer(wp(13.5)),

  b6 = _fontSize_resizer(wp(13.0)),

  b7 = _fontSize_resizer(wp(12.5)),

  b8 = _fontSize_resizer(wp(12.0)),

}

function wp(n: number) {
  return RFPercentage(n)
  // return RFValue(n, 580)
}