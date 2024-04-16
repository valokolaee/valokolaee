import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import { CText } from "../../../../atoms/Ctext";
import styleValues from "../../../../utils/enums/styleValues";
import ColorSystem from "../../../../../configs/color/ColorSystem";
import ExpenseTag from "../../../../../dataBase/realm/models/basics/ExpenseTag";

export default (prop: ITagItem) => {
    const { item, onSelect } = prop
    const { name } = item


    const [selected, set_selected] = useState<boolean>(false)

    const set_statusHelper = () => {
        set_selected(!selected)
        onSelect({ item, selected })
    };

    return (
        <TouchableOpacity style={defStyle.main} onPress={set_statusHelper}>
            <Checkbox.Android style={{ margin: 0, marginVertical: 0 }} status={selected ? 'checked' : 'unchecked'} />
            <CText text={name} />
        </TouchableOpacity>)
}
const defStyle = StyleSheet.create({
    main: {
        borderWidth: 1,
        flexDirection: 'row',
        marginEnd: styleValues.p03,
        borderRadius: styleValues.r50,
        paddingHorizontal: styleValues.p04,
        // height: styleValues.verticalPaddingEW * 2,
        borderBottomColor: ColorSystem.Primary,
        borderTopColor: ColorSystem.PrimaryText,

    }
})


export interface ITagItem {
    item: ExpenseTag;
    onSelect: (sel: onSelectInPuts) => void
}

export type onSelectInPuts = {
    item: ExpenseTag;
    selected: boolean
}