import { wrapPromiseWithState } from "@apollo/client/utilities"
import CImage from "../../molecules/CImage"
import { IImage } from "../../molecules/CImage/IImage"
import { widthPercentageToDP } from "react-native-responsive-screen"
import styleValues from "../../utils/enums/styleValues"
import { StyleSheet } from "react-native"
import CommonStyles from "../../../configs/CommonStyles"
import { memo } from "react"
const dim = widthPercentageToDP(35)
export default memo(({ url, event }: Partial<IImage>) => {


    return (<CImage
        url={url}
        event={event}
        style={[defStyle.main, CommonStyles.card]}
    />)
}
)
const defStyle = StyleSheet.create({
    main: { width: dim, height: dim, margin: styleValues.p03, borderRadius: styleValues.r10, alignSelf: 'center', overflow: 'hidden' }
})