import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import CIconGenerator from "../../atoms/CIconGenerator";
import Xml from "../../utils/svgs/Xml";
import { CText } from "../../atoms/Ctext";
import styler from "../../../utilities/styler";
import CommonStyles from "../../../configs/CommonStyles";
import styleValues from "../../utils/enums/styleValues";
import ColorSystem from "../../../configs/color/ColorSystem";
import DateTimeHelper from "../../../utilities/DateTimeHelper";
import { IStyle } from "../../utils/interfacesUI/IStyle";
import { IText } from "../../atoms/Ctext/IText";
import CTitleMinor from "../../atoms/CTitleMinor";



export default ({ onChange, title, style }: IDatePicker) => {
    const [date, setDate] = useState<Date>(new Date());
    const [mode, setMode] = useState<TMode>('date');
    const [show, setShow] = useState(false);

    const _onChange = (event: DateTimePickerEvent, date?: Date) => {



        onChange(event, date);
        setDate(date!);

        if (mode === 'date' && event.nativeEvent.timestamp > 0) {
            showTimePicker()
        } else {
            hide()
        }
    };

    const showMode = (currentMode: TMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const hide = () => { setShow(false); }
    const showDatePicker = () => { showMode('date'); };

    const showTimePicker = () => { showMode('time'); };

    return (
        <SafeAreaView >

            <CTitleMinor txt="Date & time:" />
            <TouchableOpacity style={[defStyle.dateBtn, CommonStyles.card, style]} onPress={showDatePicker}>

                <View style={styler({ flexDirection: 'row' })}>
                    <CText text={DateTimeHelper._formatDate(date)} event={{ onPress: showDatePicker }} />
                    <CText text={' at '} />
                    <CText text={DateTimeHelper._formatTime(date)} event={{ onPress: showTimePicker }} />
                </View>

                <CIconGenerator iconName={Xml.calender(ColorSystem.Border)} />

            </TouchableOpacity>


            {show && (
                <RNDateTimePicker
                    testID="dateTimePicker"

                    value={date!}
                    mode={mode}
                    is24Hour={true}
                    onChange={_onChange}
                />
            )}
        </SafeAreaView>
    );
};

const defStyle = StyleSheet.create({
    dateBtn: { flexDirection: 'row', justifyContent: 'space-between', padding: styleValues.p02 }
})


export type TMode = 'date' | 'time'
export interface IDatePicker extends IStyle<ViewStyle> {
    onChange: (event: DateTimePickerEvent, date?: Date) => void;
    title?: string;
}