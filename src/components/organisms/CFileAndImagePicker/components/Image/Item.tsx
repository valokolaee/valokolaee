import { StyleSheet, TouchableOpacity } from "react-native";
import styler from "../../../../../utilities/styler";
import CIconGenerator from "../../../../atoms/CIconGenerator";
import styleValues from "../../../../utils/enums/styleValues";
import CommonStyles from "../../../../../configs/CommonStyles";

export default ({ func, icon }: { func: () => void; icon: string }) => {
    return (
        <TouchableOpacity
            onPress={func}
            style={[CommonStyles.card, defStyle.main]}
        >
            <CIconGenerator iconName={icon}
                size={80}
            />
        </TouchableOpacity>
    )
}

const defStyle = StyleSheet.create({
    main: {
        padding: styleValues.p10,
        margin: styleValues.p02
    }
})