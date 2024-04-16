import TextHelper from '../../../utilities/TextHelper';
import { en, fa } from './fontLists/fontsList';
import { IFont } from './IFont/IFont';

const FontService = {
  _fontFamily: (text: string, fontFamillyTag: 'light' | 'regular' | 'bold' | 'medium') => {
    var isRtl: boolean = TextHelper.isRTL(text);
    var ifont: IFont;

    ifont = isRtl ? fa : en;

    return fa[fontFamillyTag];
  },
};

export default FontService;
