import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
// import { TextInput } from "react-native-paper"
import { Asset } from "react-native-image-picker"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { v4 } from "uuid"
import ColorSystem from "../../../../configs/color/ColorSystem"
import MetaPictureQueries from "../../../../dataBase/realm/models/basics/MetaPictur/MetaPictureQueries"
import TextHelper from "../../../../utilities/TextHelper"
import styler from "../../../../utilities/styler"
import CTitleMinor from "../../../atoms/CTitleMinor"
import CText from "../../../atoms/Ctext"
import { EnumFontSize } from "../../../utils/enums/EnumFontSize"
import styleValues from "../../../utils/enums/styleValues"





export default forwardRef(({ onChange }: { onChange: (c: string) => void }, ref: any) => {
    useImperativeHandle(ref, () => { return { focus } })
    const refTextInput = useRef<any>()
    const [_cost, set_cost] = useState('0')


    const focus = () => {

        refTextInput.current.focus()
    }



    const _purifyNumber = (rawNum: string | number) => {
        return rawNum.toString().replace('.', '').replaceAll(',', '')

    }

    const _setCostHelper = (v: string) => {
        const c = _purifyNumber(v || '0')
        set_cost(c)
        onChange(c)
    }

    const _numFormatter = () => {
        const num = (TextHelper.safeParsFloat(_cost) / 100)?.toFixed(2).split('.')
        const s = TextHelper.thousandSeprator(num[0])
        return `${s}.${num[1]}`
    }


    return (

        <View >

            <CTitleMinor txt={'Amount:'} />

            <View style={styler({ flexDirection: 'row', })}>
                <CText text={'$'} fontSize={EnumFontSize.h1} />
                <TextInput
                    ref={refTextInput}
                    onChangeText={_setCostHelper}
                    keyboardType="numeric"
                    value={_numFormatter()}
                    style={[styler({ fontSize: EnumFontSize.h1 })]}
                    placeholderTextColor={ColorSystem.Border}

                />
            </View>


        </View>



    )
})
const defStyle = StyleSheet.create({
    main: {
        // paddingHorizontal: 100
    },
    photo: {},
    // txtOutlineStyle: {...sty},
    txt: {
        height: hp(18),
        padding: styleValues.p03,
        color: ColorSystem.Black,
        flexWrap: 'wrap',
        borderRadius: styleValues.r10,
    }
})