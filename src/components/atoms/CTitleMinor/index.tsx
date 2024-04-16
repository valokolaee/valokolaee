import { memo } from "react";
import styler from "../../../utilities/styler";
import { EnumFontSize } from "../../utils/enums/EnumFontSize";
import styleValues from "../../utils/enums/styleValues";
import CText from "../Ctext";
import { IText } from "../Ctext/IText";

export default memo(({ txt }: { txt: string }) => (<CText
    text={txt}
    style={styler({ textAlign: 'left', marginBottom: styleValues.p01, marginTop: styleValues.p02 })} fontSize={EnumFontSize.h6} />))