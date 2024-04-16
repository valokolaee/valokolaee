import { StyleSheet, View } from "react-native";
import CText from "../../../atoms/Ctext";
import { IHeader } from "./interfaces/IHeader";
import UserInfo from "../../CHeader/component/UserInfo";
import { memo } from "react";



export default memo(({ }: IHeader) => {
    return (
        <View style={defStyl.main}>
            <UserInfo />
        </View>)
})
const defStyl = StyleSheet.create({
    main: {
        flexDirection: 'row'
    },
    header: {



    },

});
