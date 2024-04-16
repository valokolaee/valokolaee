import { View } from "react-native"
import Clist from "../../../../atoms/Clist"
import CText from "../../../../atoms/Ctext"
import { EnumFontSize } from "../../../../utils/enums/EnumFontSize"
import styleValues from "../../../../utils/enums/styleValues"
import ExpenseTag from "../../../../../dataBase/realm/models/basics/ExpenseTag"
import ExpenseTagQueries from "../../../../../dataBase/realm/models/basics/ExpenseTag/ExpenseTagQueries"
import styler from "../../../../../utilities/styler"
import Item, { onSelectInPuts } from "./Item"
import CTitleMinor from "../../../../atoms/CTitleMinor"


export default ({ onChange }: { onChange: (expenseTag: ExpenseTag[]) => void }) => {
    var _tags: ExpenseTag[] = []

    const allTags: ExpenseTag[] = ExpenseTagQueries().getAll!()

    const _addRemoveSelection = (inp: onSelectInPuts) => {
        if (inp.selected) {
            _tags = _tags.filter((i) => i._id.toString() !== inp.item._id.toString())
        } else {
            _tags.push(inp.item)
        }
        onChange(_tags)
    }

    return (
        <View>
            <CTitleMinor txt={'Category:'} />
            <Clist
                list={allTags}
                customItem={(item: ExpenseTag) => <Item item={item} onSelect={_addRemoveSelection} />}
                wrap
                noSeparator
                horizontal
            />
        </View>)
}
