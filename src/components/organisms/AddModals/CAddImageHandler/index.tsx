import { ScrollView, StyleSheet, View } from "react-native"
import Item from "./ImageList/Item"

import { useRef, useState } from "react"
import { Asset, ImagePickerResponse } from "react-native-image-picker"
import CTitleMinor from "../../../atoms/CTitleMinor"
import CFileAndImagePicker from "../../CFileAndImagePicker"
import ImageList from "./ImageList"

export default ({ returnImageList, scale, listOnly, deleteAnItem }: IImageHandler) => {
    const _pickRef = useRef<any>()

    const [_imgList, set_imgList] = useState<Asset[]>([])

    const _pickImage = () => { _pickRef.current.show() }

    const _pickImagHide = () => { _pickRef.current.hide() }

    const _addToImageList = (img: ImagePickerResponse) => {
        const res = img.assets!
        if (res?.length > 0) {
            const _l = [..._imgList, ...res]
            _returnImageListHelper(_l)
            _pickImagHide()
        }
    }

    const _returnImageListHelper = (a: Asset[]) => {
        returnImageList(a)
        set_imgList(a)
    }




    return (
        <View>
            <CTitleMinor txt="Receipt:" />
            <ScrollView horizontal >
                <CFileAndImagePicker result={_addToImageList} ref={_pickRef} />
                <View style={defStyle.main}>
                    {!listOnly && <Item onItemClick={_pickImage} scale={scale} />}
                    {<ImageList imgList={_imgList}

                        deleteAnItem={deleteAnItem}
                        scale={scale} />}
                </View>
            </ScrollView >
        </View>)
}
const defStyle = StyleSheet.create({
    main: {
        flexDirection: 'row', justifyContent: 'space-between'
    }
})


export interface IImageHandler {
    returnImageList: (assets: Asset[]) => void;
    scale?: number;
    listOnly?: boolean,
    deleteAnItem?: (a: Asset) => void;

}