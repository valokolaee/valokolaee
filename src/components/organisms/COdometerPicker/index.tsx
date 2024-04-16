import React, { memo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import ColorSystem from "../../../configs/color/ColorSystem";
import Decimals from "./Decimals";
import ICOdometerPicker from "./ICOdometerPicker";
import Numbers from "./Numbers";


var d = ''
var n = ''

export default ({ numbers, decimals, _bigNum, set_bigNum, fontSize }: ICOdometerPicker) => {

    const refNumbers = useRef<any>()
    const refDecimals = useRef<any>()



    const splitBigNum = _bigNum.toString().split('.')
    let _dotNum = splitBigNum?.length > 1 ? splitBigNum[1] : '0'
    let _num = splitBigNum?.length > 0 ? splitBigNum[0] : '0'




    const _onChange = (decimal: boolean) => (num: string) => {

        // mrvTxtTest.log(num, 'num')

        if (decimal) {
            d = '.' + num
        } else {
            n = num
        }


        set_bigNum(n + d)
    }




    return (
        <View style={defStyle.main}>


            <Numbers
                ref={refNumbers}
                focusIndex={(i) => {
                    if (i >= numbers) {
                        refDecimals.current._setToStart()
                    }
                }}
                numbers={numbers}
                _bigNum={_num}
                set_bigNum={_onChange(false)}
                fontSize={fontSize}


            />
            <Decimals
                ref={refDecimals}
                focusIndex={(i) => {
                    if (i < 0) {
                        refNumbers.current._setToEnd()
                    }
                }}
                numbers={decimals!}
                _bigNum={_dotNum}
                set_bigNum={_onChange(true)}
                fontSize={fontSize}
            />


        </View>)
}
const defStyle = StyleSheet.create({
    main: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
    inp: { backgroundColor: ColorSystem.White, borderWidth: 1, flex: 1, textAlign: 'center', color: ColorSystem.Black }
})

