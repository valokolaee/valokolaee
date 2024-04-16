import { ViewStyle } from "react-native";
import { IStyle } from "./IStyle";

export interface ISvgModel extends IStyle<ViewStyle> {
    XML: (color: string) => string;
    position?: "right" | "left";
    size?: number;
    color?: string;
}