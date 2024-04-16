import { ViewStyle } from "react-native";
import { IBaseView } from "../../utils/interfacesUI/IBaseView";
import { IStyle } from "../../utils/interfacesUI/IStyle";
import { IText } from "../../atoms/Ctext/IText";

export interface ICBottomDrawer extends IStyle<ViewStyle> {
    children?: JSX.Element | JSX.Element[],
    baseView?: IBaseView
    title?: IText;
    onOpen?: () => void
    onClose?: () => void
}