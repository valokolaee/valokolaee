import { ImagePickerResponse, launchCamera, launchImageLibrary } from "react-native-image-picker";
import Xml from "../../../../utils/svgs/Xml";
import Item from "./Item";

export default ({ result }: { result: (res: ImagePickerResponse) => void }) => {


    const _callCam = async () => {

        const res = await launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 0
        });

        result(res)
    }


    return <Item func={_callCam} icon={Xml.gallery()} />



}