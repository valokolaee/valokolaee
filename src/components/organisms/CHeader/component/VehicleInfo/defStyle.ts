import { StyleSheet } from "react-native"
import styleValues from "../../../../utils/enums/styleValues"


const _dotDim = styleValues.p01h

const h = styleValues.p08;
export default (color?: string) => StyleSheet.create({
    main: {
        flexDirection: 'row'
    },
    inCommon: {
        borderWidth: 0.5,
        borderColor: color,
        borderRadius: styleValues.r50,
        height: h,
        flexDirection: 'row',
        alignItems: 'center',

    },
    refresh: {
        width: h,
        justifyContent: 'center',
        marginStart: styleValues.p01

    },
    carInfo: {
        paddingVertical: 0,
        flexDirection: 'row',
        paddingHorizontal: styleValues.p03
    },
    carInfoTxt: {
        marginStart: styleValues.p02,
    },
    dot: { position: 'absolute', width: _dotDim, height: _dotDim, backgroundColor: 'red', right: '5%', bottom: '5%', borderRadius: styleValues.r50 }

})