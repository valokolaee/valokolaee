import { forwardRef, memo, useEffect } from "react"
import { StyleSheet } from "react-native"
import CModal from "../CModal"
import Image from "./components/Image"
import styleValues from "../../utils/enums/styleValues"
import { ImagePickerResponse } from "react-native-image-picker"

export default memo(forwardRef(({ result }: { result: (res: ImagePickerResponse) => void }, ref: any) => {

    // useEffect(() => {
    //     ref.current.show()

    // }, [])

    return (
        <CModal
            style={defStyle.main}
            ref={ref}>
            <Image result={result} />
        </CModal>
    )
}))


const defStyle = StyleSheet.create({
    main: {
        width: undefined,
        padding: styleValues.p02
        // marginHorizontal: styleValues.p10,
        // height: '65%'
    }
})