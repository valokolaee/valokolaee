import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface model {
    children: ReactNode;

}
export default ({ children }: model) => <View style={defStyle}>{children}</View>
const defStyle: ViewStyle = StyleSheet.create({
    def: {

        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        alignContent: 'center',
    }
}).def