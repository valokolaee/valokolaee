export interface IObject {
    [key: string]: any
}
export interface IFont extends IObject {
    light: string,
    regular: string,
    bold: string,
    medium: string
}
