import { StyleSheet } from "react-native";
import { CText } from "../../../atoms/Ctext";
import { EnumFontSize } from "../../../utils/enums/EnumFontSize";
import ColorSystem from "../../../../configs/color/ColorSystem";

export default ({ show, msg }: { show?: boolean; msg: string }) => (<>{
    !show &&
    <CText text={msg} fontSize={EnumFontSize.h7} style={defStyle.txt} />}</>)

const defStyle = StyleSheet.create({
    txt: {
        borderBottomWidth: 0.5,
        borderBottomColor: ColorSystem.gray!(20)
    }
})