import { Image, ImageStyle, StyleProp, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP as wp } from "react-native-responsive-screen";
import CIconGenerator from "../../../../atoms/CIconGenerator";
import styleValues from "../../../../utils/enums/styleValues";
import Xml from "../../../../utils/svgs/Xml";
import ColorSystem from "../../../../../configs/color/ColorSystem";
import { Asset } from "react-native-image-picker";
import CommonStyles from "../../../../../configs/CommonStyles";
import styler from "../../../../../utilities/styler";


export default ({ asset, onItemClick, deleteAnItem, scale = 1 }: IItem) => {
    const _scaler = styler({ width: wp(20) / scale, height: wp(20) / scale })


    return (

        <TouchableOpacity onPress={() => { onItemClick(asset!) }}>
            <View
                style={[
                    CommonStyles.grayCard,
                    defStyle.main,
                    defStyle.mainShape,
                    _scaler
                ]}
            >
                {asset ? <Image
                    style={[
                        defStyle.mainShape,
                        _scaler as StyleProp<ImageStyle>

                    ]}
                    source={{ uri: asset.uri }} /> : <CIconGenerator iconName={Xml.camera(ColorSystem.gray!(50))} size={30 / scale} />}
                {(asset && deleteAnItem) &&
                    <Text style={defStyle.delete} onPress={() => { deleteAnItem(asset) }} >
                        <CIconGenerator iconName={Xml.delete(ColorSystem.White)} size={20 / scale} />
                    </Text>
                }
            </View>
        </TouchableOpacity>
    )
}

export interface IItem { asset?: Asset; onItemClick: (asset: Asset) => void; scale?: number, deleteAnItem?: (asset: Asset) => void }


const defStyle = StyleSheet.create({
    mainShape: { borderRadius: styleValues.r10, alignItems: 'center', justifyContent: 'center' },
    main: { margin: heightPercentageToDP(1), marginStart: 0, overflow: 'visible' },
    delete: { position: "absolute", backgroundColor: ColorSystem.Error, borderRadius: styleValues.r50, top: -styleValues.p01, right: -styleValues.p01, padding: styleValues.p01 }
})
