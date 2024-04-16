import { ImagePickerResponse, launchCamera } from "react-native-image-picker";
import Xml from "../../../../utils/svgs/Xml";
import Item from "./Item";

export default ({ result }: { result: (res: ImagePickerResponse) => void }) => {


    const _callCam = async () => {

        const res = await launchCamera({ mediaType: 'photo', maxHeight: 100, saveToPhotos: false });

        result(res)
    }


    return <Item func={_callCam} icon={Xml.camera()} />



}