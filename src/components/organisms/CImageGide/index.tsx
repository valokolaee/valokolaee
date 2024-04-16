import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import ImageViewer from "react-native-image-zoom-viewer";
import { IImageInfo } from "react-native-image-zoom-viewer/built/image-viewer.type";
import MetaPicture from "../../../dataBase/realm/models/basics/MetaPictur";
import CModal from "../CModal";
import IImageGide from "./IImageGide";



export default forwardRef(({ }: {}, ref: any) => {
    useImperativeHandle(ref, () => { return { _openUp } })
    const refModal = useRef<any>()
    const [_meta, set_meta] = useState<IImageGide | undefined>()

    const _openUp = (imageUrls: MetaPicture[], index?: number) => {

        let l: IImageInfo[] = []

        imageUrls.forEach(element => {
            const img: IImageInfo = {
                url: element.physicalAddress
            }
            l.push(img)
        });
        set_meta({ imageUrls: l, index: index })
        refModal?.current?.show()
    }

    return (
        <CModal ref={refModal} screenMode="fullScreen">
            <ImageViewer imageUrls={_meta?.imageUrls!} index={_meta?.index} />
        </CModal>
    )

})



