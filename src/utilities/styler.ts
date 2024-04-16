import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export default (def: ViewStyle | TextStyle | ImageStyle) => StyleSheet.create({ def }).def