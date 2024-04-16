import React, { forwardRef, memo, useImperativeHandle, useRef, useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Item from "./Item";
import { _safe_charAt, replaceAt } from "./utils/functions";
import { CText } from "../../atoms/Ctext";
import ColorSystem from "../../../configs/color/ColorSystem";
import TextHelper from "../../../utilities/TextHelper";
import DateTimeHelper from "../../../utilities/DateTimeHelper";
import ICOdometerPicker from "./ICOdometerPicker";
import Picker from "./Picker";
import styler from "../../../utilities/styler";




export default forwardRef(({ numbers, decimals, _bigNum, set_bigNum, fontSize, focusIndex }: ICOdometerPicker, ref) => {

    useImperativeHandle(ref, () => { return { _setToStart, _clearFocus } })
    const refPicker = useRef<any>()


    const _setToStart = () => {
        refPicker.current._setExternalIndex(0)
    }

    const _clearFocus = () => {
        refPicker.current._setExternalIndex(-1)

    }


    return (
        <>
            {numbers &&
                <View style={styler({ flexDirection: 'row' })}>
                    <CText text={'.'} fontSize={fontSize} />
                    <Picker
                        ref={refPicker}

                        focusIndex={focusIndex}
                        _bigNum={_bigNum}
                        set_bigNum={set_bigNum}
                        numbers={numbers}
                        fontSize={fontSize}
                        decimals={1}
                    />
                </View>
            }
        </>
    )
})