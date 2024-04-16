import { forwardRef, useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import WheelPicker from 'react-native-wheely';
import ColorSystem from "../../../configs/color/ColorSystem";
import TextHelper from "../../../utilities/TextHelper";
import styler from "../../../utilities/styler";
import styleValues from "../../utils/enums/styleValues";
import lister, { maxType } from "./utils/lister";


const itemHeight = styleValues.verticalPaddingW * 4;


export default forwardRef(({ length, onChange, selectedIndex, _editableNumber, set_editable, thisIndex, changeFocus, fontSize }: IPickerItem, ref) => {

    const inpRef = useRef<any>(`ref${thisIndex}`)

    const _editable = _editableNumber === thisIndex
    const [_bigNum, set_bigNum] = useState<string>('0')
    const [_index, set_index] = useState<number>(selectedIndex)





    const set_indexHelper = (i: number) => {
        set_index(_outOfBoundsProtector(i))
    }
    const _giveNextFocus = (i: number) => {

        changeFocus!(i)
    }

    function _picker() {

        return (
            <WheelPicker

                options={lister(length)}
                selectedIndex={_index!}

                onChange={(index) => {
                    onChangeHandler(false, index)
                    set_indexHelper(index)

                }}
                containerStyle={{ height: heightPercentageToDP(40), }}
                itemTextStyle={{ ...defStyle.itemTextStyle, fontSize }}
                itemStyle={defStyle.itemStyle}
                selectedIndicatorStyle={defStyle.selectedIndicatorStyle}
                itemHeight={itemHeight}

            />
        );
    }

    useEffect(() => {

        set_editable!(_editableNumber!)

        if (_editable) {
            inpRef.current.focus()
        } else {

            // inpRef.current.blur()
        }





    }, [_editableNumber])


    const _outOfBoundsProtector = (i: number) => {
        const l = length - 1
        return i = i > l ? l : i

    }

    const onChangeHandler = (isEditText: boolean, i: number) => {
        i = _outOfBoundsProtector(i)

        const r = lister(length)[i]
        set_bigNum(r)
        onChange!(r || '')

        if (isEditText) {

            if (i >= 0) { _giveNextFocus(thisIndex + 1) }
            set_indexHelper(i)

        } else {

            // set_editable(-1)

        }

    }



    const keyboardShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
            // Alert.alert('Keyboard is open')
        }
    );
    const keyboardHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
            set_editable!(-1)
        }
    );



    return (
        <View
            onTouchMove={() => { set_editable!(-1) }}
            onTouchEnd={() => { set_editable!(thisIndex) }}

            // onLongPress={() => { set_editable!(thisIndex) }}
            style={styler({ flexDirection: 'row' })}
        >

            {_picker()}



            <TextInput
                ref={inpRef}
                selectTextOnFocus
                // autoFocus



                returnKeyType='next'

                autoCapitalize='none'
                style={[defStyle.inp, defStyle.itemTextStyle,
                { fontSize },
                { display: _editable ? 'flex' : 'none', },
                { backgroundColor: _editable ? '#ccccc5' : 'transparent', },
                { color: _editable ? ColorSystem.White : ColorSystem.Black, },
                ]}



                onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === 'Backspace') {
                        _giveNextFocus(thisIndex - 1)

                    }
                }}

                onSubmitEditing={() => {
                    _giveNextFocus(thisIndex + 1)

                }}

                onBlur={() => {
                    inpRef.current.blur()
                    if (_editableNumber! < 0) {

                        Keyboard.dismiss()
                    }
                }}
                onPressIn={() => {
                    set_editable!(thisIndex)
                }}
                onFocus={() => {
                    set_bigNum('')
                }}
                onTouchEndCapture={() => {
                    set_bigNum('')
                }}

                keyboardType='numeric'

                value={_editable ? _bigNum : ''}
                onChangeText={text => { onChangeHandler(true, parseInt(TextHelper.numOnly(text) || '0')) }}
                maxLength={1}

            >

            </TextInput>
        </View>
    )
}
)

const defStyle = StyleSheet.create({
    itemTextStyle: { fontWeight: 'bold', color: ColorSystem.Black },

    itemStyle: { backgroundColor: 'transparent', },
    selectedIndicatorStyle: {
        backgroundColor: 'transparent', borderWidth: 0.5,
        borderEndWidth: 0, borderStartWidth: 0,

        borderColor: ColorSystem.Border,
    },
    inp: {
        // borderWidth: 1,
        // borderRadius: styleValues.r10,
        backgroundColor: ColorSystem.White,
        height: '15%',
        width: '100%',
        position: 'absolute',
        alignSelf: 'center',
        textAlign: 'center',
        // padding: styleValues.p03,
        color: ColorSystem.Black
    },
})

export { defStyle as itemDefStyle };



export interface IPickerItem {
    length: maxType;
    onChange?: (value: string) => void;
    selectedIndex: number;
    _editableNumber?: number;
    set_editable: (index: number) => void
    thisIndex: number;
    changeFocus?: (i: number) => void
    fontSize?: number;
}
