import { StyleSheet, TouchableOpacity, View } from "react-native"
import ColorSystem from "../../../../../configs/color/ColorSystem"
import { TColorSet } from "../../../../../configs/color/interfaceColor/IBaseColor"
import CIconGenerator from "../../../../atoms/CIconGenerator"
import styleValues from "../../../../utils/enums/styleValues"
import Xml from "../../../../utils/svgs/Xml"
import defStyle from "./defStyle"


export default ({ colorSet }: { colorSet?: TColorSet; }) => {
    // const _isConnected = await isConnected()

    return (
        <TouchableOpacity
            style={[defStyle(colorSet?.fontColor).inCommon, defStyle().refresh]}
        >
            <CIconGenerator iconName={Xml.refresh(colorSet?.fontColor || ColorSystem.Black)} size={20} />
            <View style={defStyle().dot} />
        </TouchableOpacity>)
}

