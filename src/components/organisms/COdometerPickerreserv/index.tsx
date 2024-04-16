import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorSystem from "../../../configs/color/ColorSystem";
import DateTimeHelper from "../../../utilities/DateTimeHelper";
import TextHelper from "../../../utilities/TextHelper";
import CText from "../../atoms/Ctext";
import { EnumFontSize } from "../../utils/enums/EnumFontSize";
import styleValues from "../../utils/enums/styleValues";
import Item from "./Item";

export interface ICOdometerPicker {

    _bigNum: string;
    set_bigNum: (v: string) => void;

}


export default memo(({ _bigNum, set_bigNum }: ICOdometerPicker) => {

    const splitBigNum = _bigNum.toString().split('.')
    let _dotNum = splitBigNum?.length > 1 ? TextHelper.safeParsInt(splitBigNum[1]) : 0
    const _bigNumS = DateTimeHelper.numberTextStandard(splitBigNum[0], 6).toString()
    const [_selectedIndex, set_selectedIndex] = useState<number>(-1)


    const set_selectedIndexHandler = (i: number) => {
        if (i < 0) {
            i = 0
        } else if (i > 6) {
            i = 6
        }
        set_selectedIndex(i)
    }

    function replaceAt(original: string, index: number, replacement: string) {
        return original.substring(0, index) + replacement + original.substring(index + replacement?.length);
    }

    const _set_numberHandler = (position: 0 | 1 | 2 | 3 | 4 | 5 | 6) => (n: string) => {

        let v = _bigNumS
        if (position < 6) {
            v = replaceAt(v, position, n)

        } else {
            v = v + '.' + n
        }
        set_bigNum(v)


    }

    const _safe_charAt = (index: number) => index > _bigNumS?.length - 1 ? 0 : parseInt(_bigNumS.charAt(index))


    return (
        <>
            <View style={defStyle.main}>

                <Item
                    length={10}
                    thisIndex={0}
                    selectedIndex={_safe_charAt(0)}
                    _editableNumber={_selectedIndex}
                    onChange={_set_numberHandler(0)}
                    changeFocus={set_selectedIndexHandler}
                    set_editable={(i) => { set_selectedIndex(i) }}
                />

                <Item
                    length={10}
                    thisIndex={1}
                    selectedIndex={_safe_charAt(1)}
                    _editableNumber={_selectedIndex}
                    onChange={_set_numberHandler(1)}
                    changeFocus={set_selectedIndexHandler}
                    set_editable={(i) => { set_selectedIndex(i) }}
                />

                <Item
                    length={10}
                    thisIndex={2}
                    selectedIndex={_safe_charAt(2)}
                    _editableNumber={_selectedIndex}
                    onChange={_set_numberHandler(2)}
                    changeFocus={set_selectedIndexHandler}
                    set_editable={(i) => { set_selectedIndex(i) }}
                />
                <CText bold text={','} fontSize={EnumFontSize.h0} />

                <Item
                    length={10}
                    thisIndex={3}
                    selectedIndex={_safe_charAt(3)}
                    _editableNumber={_selectedIndex}
                    onChange={_set_numberHandler(3)}
                    changeFocus={set_selectedIndexHandler}
                    set_editable={(i) => { set_selectedIndex(i) }}
                />

                <Item
                    length={10}
                    thisIndex={4}
                    selectedIndex={_safe_charAt(4)}
                    _editableNumber={_selectedIndex}
                    onChange={_set_numberHandler(4)}
                    changeFocus={set_selectedIndexHandler}
                    set_editable={(i) => { set_selectedIndex(i) }}
                />

                <Item
                    length={10}
                    thisIndex={5}
                    selectedIndex={_safe_charAt(5)}
                    _editableNumber={_selectedIndex}
                    onChange={_set_numberHandler(5)}
                    changeFocus={set_selectedIndexHandler}
                    set_editable={(i) => { set_selectedIndex(i) }}
                />
                <CText bold text={'.'} fontSize={EnumFontSize.h0} />

                <Item
                    length={10}
                    thisIndex={6}
                    selectedIndex={_dotNum}
                    _editableNumber={_selectedIndex}
                    onChange={_set_numberHandler(6)}
                    changeFocus={set_selectedIndexHandler}
                    set_editable={(i) => { set_selectedIndex(i) }}
                />
            </View>

        </>
    )
})
const defStyle = StyleSheet.create({
    main: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
    inp: { backgroundColor: ColorSystem.White, borderWidth: 1, flex: 1, marginTop: styleValues.p05, textAlign: 'center', padding: styleValues.p03, margin: styleValues.p02, color: ColorSystem.Black }
})

