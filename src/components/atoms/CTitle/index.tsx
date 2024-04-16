import { memo } from "react";
import styler from "../../../utilities/styler";
import { EnumFontSize } from "../../utils/enums/EnumFontSize";
import styleValues from "../../utils/enums/styleValues";
import CText from "../Ctext";
import { IText } from "../Ctext/IText";

export default memo((props: IText) => (<CText {...props} fontSize={props?.fontSize || EnumFontSize.h4} holderStyle={styler({ marginBottom: styleValues.p05 })} />))