import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import resizer from './resizer';
const x = 10
export default {
  p01: resizer(wp(1)),
  p01h: resizer(wp(1.5)),
  p02: resizer(wp(2)),
  p03: resizer(wp(3)),
  p04: resizer(wp(4)),
  p05: resizer(wp(5)),
  p06: resizer(wp(6)),
  p07: resizer(wp(7)),
  p08: resizer(wp(8)),
  p09: resizer(wp(9)),
  p10: resizer(wp(10)),
  p11: resizer(wp(12)),
  p12: resizer(wp(14)),
  p13: resizer(wp(16)),
  p14: resizer(wp(18)),
  p15: resizer(wp(20)),
  p16: resizer(wp(22)),
  p17: resizer(wp(24)),
  p18: resizer(wp(26)),
  p19: resizer(wp(28)),
  p20: resizer(wp(30)),

  r03: wp(3 / x),
  r05: wp(5 / x),
  r10: wp(10 / x),
  r15: wp(15 / x),
  r20: wp(20 / x),
  r25: wp(25 / x),
  r30: wp(30 / x),
  r35: wp(35 / x),
  r40: wp(40 / x),
  r45: wp(45 / x),
  r50: wp(50 / x),



  verticalPaddingN: resizer(hp(0.5)),
  verticalPaddingM: resizer(hp(1)),
  verticalPaddingW: resizer(hp(2)),
  verticalPaddingEW: resizer(hp(3)),

  centeredItemsWidthS: wp(70),
  centeredItemsWidth: wp(80),
  doubleItemsWidth: wp(30),
  fullItemsWidth: wp(90),

};
