import React, { forwardRef, memo, useImperativeHandle, useState } from "react";
import DateTimeHelper from "../../../utilities/DateTimeHelper";
import { CText } from "../../atoms/Ctext";
import ICOdometerPicker from "./ICOdometerPicker";
import Item from "./Item";
import { _safe_charAt, replaceAt } from "./utils/functions";
import { View } from "react-native";
import styler from "../../../utilities/styler";




export default forwardRef(({ numbers, _bigNum, set_bigNum, fontSize, decimals, focusIndex }: ICOdometerPicker, ref) => {
    useImperativeHandle(ref, () => { return { _setExternalIndex } })



    const [_bigNumS, set_bigNumS] = useState(decimals ? _bigNum.toString() : DateTimeHelper.numberTextStandard(_bigNum.toString(), numbers).toString())
    const [_selectedIndex, set_selectedIndex] = useState<number>(-1)

    const _set_numberHandler = (position: number,) => (n: string) => {


        let v = _bigNumS
        if (position < numbers) {
            v = replaceAt(v, position, n)
            set_bigNum(v)
            set_bigNumS(v)

        }




    }
    const _setExternalIndex = (index: number) => {

        set_selectedIndex(index)
    }

    const set_selectedIndexHandler = (i: number) => {
        focusIndex!(i)

        if (i < 0) {
            set_selectedIndex(0)
            // return
        } else if (i > numbers) {
            i = numbers
        }
        set_selectedIndex(i)
    }



    const _seprator = (i: number) => {
        if (decimals) {
            return (<></>)
        } else {
            return (<>{((numbers - i - 1) % 3 === 0 && i != numbers - 1) && <CText text={','} fontSize={fontSize} />}</>)
        }
    }

    const numberItems = () => {

        var items = [];

        for (let i = 0; i < numbers; i++) {

            items.push(
                <>
                    <Item
                        length={10}
                        thisIndex={i}
                        selectedIndex={_safe_charAt(i, _bigNumS)}
                        _editableNumber={_selectedIndex}
                        onChange={_set_numberHandler(i)}
                        changeFocus={set_selectedIndexHandler}
                        set_editable={(i) => { set_selectedIndex(i) }}
                        fontSize={fontSize}
                    />
                    {_seprator(i)}
                </>
            )
        }
        return items
    }






    return (
        <View style={styler({ flexDirection: 'row' })}>
            {numberItems()}
        </View>
    )
})
