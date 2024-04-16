import React, { forwardRef, memo, useImperativeHandle, useRef } from "react";
import ICOdometerPicker from "./ICOdometerPicker";
import Picker from "./Picker";



export default forwardRef(({ numbers, _bigNum, set_bigNum, fontSize, focusIndex }: ICOdometerPicker, ref) => {
    useImperativeHandle(ref, () => { return { _setToEnd } })
    const refPicker = useRef<any>()


    const _setToEnd = () => { refPicker.current._setExternalIndex(numbers - 1) }




    return (



        <Picker
            ref={refPicker}
            focusIndex={focusIndex}
            _bigNum={_bigNum}
            set_bigNum={set_bigNum}
            numbers={numbers}
            fontSize={fontSize}
        />


    )
})

