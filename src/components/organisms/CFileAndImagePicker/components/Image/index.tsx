import { StyleSheet, View } from "react-native"
import Camera from "./Camera"
import CommonStyles from "../../../../../configs/CommonStyles"
import styleValues from "../../../../utils/enums/styleValues"
import Gallery from "./Gallery"
import { ImagePickerResponse } from "react-native-image-picker"


export default ({ result }: { result: (res: ImagePickerResponse) => void }) => {
    return (
        <View style={[defStyle.main]}>
            <Camera result={result} />
            <Gallery result={result} />
        </View>
    )
}
const defStyle = StyleSheet.create({
    main: { flexDirection: 'row' }
})