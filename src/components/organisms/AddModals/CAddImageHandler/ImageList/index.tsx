import { ScrollView } from "react-native"
import Item from "./Item"

import { Asset } from "react-native-image-picker"
import JsonHelper from "../../../../../utilities/JsonHelper"
import CImageGide from "../../../CImageGide"
import { useRef } from "react"

export default ({ deleteAnItem, imgList, scale, }: IImageHandler) => {
    const refImageGide = useRef<any>()



    // const _removeImage = (img?: Asset) => {
    //     var l = [...imgList]
    //     l = JsonHelper.removeByItem(imgList, img)
    //     returnImageList && returnImageList(l)
    // }

    const _openImages = () => { refImageGide.current!?._openUp!(imgList) }



    return (
        <ScrollView horizontal >

            <CImageGide ref={refImageGide} />
            {imgList.map((it) => <Item asset={it}
                onItemClick={_openImages}
                scale={scale}
                deleteAnItem={deleteAnItem}
            />)}

        </ScrollView >)
}



export interface IImageHandler {
    // returnImageList?: (assets: Asset[]) => void;
    deleteAnItem?: (a: Asset) => void;
    scale?: number;
    imgList: Asset[]
}