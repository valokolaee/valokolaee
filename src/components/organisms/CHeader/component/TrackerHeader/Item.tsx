import { StyleSheet, View } from "react-native";
import CText from "../../../../atoms/Ctext";
import { EnumFontSize } from "../../../../utils/enums/EnumFontSize";
import styleValues from "../../../../utils/enums/styleValues";

export interface IItem {
    name: string;
    value: string;
    color?: string;

}
export default ({ name, value, color }: IItem) => {
    return (
        <View style={defStyle.main}>
            <CText text={`${name}: `} fontSize={EnumFontSize.h8} color={color + '99'} />
            <CText text={value} fontSize={EnumFontSize.h7} color={color} />
        </View>
    )
}
const defStyle = StyleSheet.create({
    main: { flexDirection: 'row', justifyContent: 'center', }
})