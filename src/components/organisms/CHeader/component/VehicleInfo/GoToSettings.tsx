import { TouchableOpacity } from "react-native"
import ColorSystem from "../../../../../configs/color/ColorSystem"
import { TColorSet } from "../../../../../configs/color/interfaceColor/IBaseColor"
import { mainRoutsEnum } from "../../../../../navigation/mainRouter/mainRoutsEnum"
import CIconGenerator from "../../../../atoms/CIconGenerator"
import useMyNavigation from "../../../../hooks/useMyNavigation"
import Xml from "../../../../utils/svgs/Xml"
import defStyle from "./defStyle"


export default ({ colorSet }: { colorSet?: TColorSet; }) => {

    const nav = useMyNavigation()
    const _goToSettings = () => { nav.navigate(mainRoutsEnum.Settings) }

    return (
        <TouchableOpacity onPress={_goToSettings} style={[defStyle(colorSet?.fontColor).inCommon, defStyle().refresh]}  >
            <CIconGenerator iconName={Xml.settings(colorSet?.fontColor || ColorSystem.Black)} size={20} />
        </TouchableOpacity>)
}

