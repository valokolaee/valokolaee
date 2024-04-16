import { forwardRef, memo, useState } from "react"
import { StyleSheet, View } from "react-native"
import { Asset } from "react-native-image-picker"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { v4 } from "uuid"
import ColorSystem from "../../../../configs/color/ColorSystem"
import MetaPicture from "../../../../dataBase/realm/models/basics/MetaPictur"
import MetaPictureQueries from "../../../../dataBase/realm/models/basics/MetaPictur/MetaPictureQueries"
import styler from "../../../../utilities/styler"
import CText from "../../../atoms/Ctext"
import styleValues from "../../../utils/enums/styleValues"
import Xml from "../../../utils/svgs/Xml"
import CBottomDrawer from "../../CBottomDrawer"

import CDescription from "../../../atoms/CDescription"
import CAddImageHandler from "../CAddImageHandler"
import myLogs from "../../../../utilities/mrvLogs"



let imageList: Asset[] = []

export default memo(forwardRef(({
    question,
    parentTableUid,
    parentTableName,
    grandParentTableUid,
    grandParentTableName,
    desc,
    throwDesc
}: IAddNote, ref: any) => {
    const metaPictureQueries = MetaPictureQueries()
    const [_desc, set_desc] = useState<string | undefined>(desc)

    const _hide = () => { ref.current.hide() }

    const _updateInspectionToaAddNote = () => {
        throwDesc(_desc!)

        _saveImages()
    }

    const _saveImages = () => {

        imageList.forEach(element => {

            const asset: Partial<MetaPicture> = {
                dateTime: new Date().toString(),
                filename: element?.fileName!,
                parentTableName,
                parentTableUid,
                grandParentTableName,
                grandParentTableUid,
                uuid: v4(),
                physicalAddress: element?.uri!,

            }

            metaPictureQueries.create!(asset);

        });
        _hide()
    }




    const _reset = () => {
        desc = ''
        imageList = []
    }

    const _returnImageList = (assets: Asset[]) => { imageList = assets };
    const _onDescChangeText = (text: string) => { set_desc(text) }

    const _deleteAnItemHelper = (a: Asset) => {
        myLogs(a, '_deleteAnItemHelper')
    }


    return (
        <CBottomDrawer
            onClose={_reset}
            // onOpen={_reset}
            ref={ref} title={{
                text:
                    parentTableUid + ' ' + parentTableName
                // `Add note`
            }}
            baseView={{
                doubleBtn: {
                    color: ColorSystem.drivingStopColors!.header?.backGround,
                    left: { icon: Xml.delete, label: 'Discard', func: _hide },
                    right: { label: 'Submit', position: 'start', icon: Xml.tik, func: _updateInspectionToaAddNote },
                },
            }}
        >
            <View style={styler({ padding: styleValues.p05, })}>
                <CText text={question} holderStyle={defStyle.questionHolderStyle} style={defStyle.questionStyle} />

                <CAddImageHandler returnImageList={_returnImageList} deleteAnItem={_deleteAnItemHelper} />

                <CDescription desc={_desc} onChangeText={_onDescChangeText} />

            </View>



        </CBottomDrawer>
    )
}))
const defStyle = StyleSheet.create({
    main: {
    },
    photo: {},
    txt: {
        height: hp(18),
        flexWrap: 'wrap',
        color: ColorSystem.Black,
        padding: styleValues.p03,
        borderRadius: styleValues.r10,
    },
    questionHolderStyle: {
        borderRadius: styleValues.r10,
        paddingHorizontal: styleValues.r15,
        backgroundColor: ColorSystem.gray!(15),
    },
    questionStyle: {
        textAlign: 'left',
        padding: styleValues.p01,

    }

})






export interface IAddNote {
    parentTableName?: string;
    parentTableUid?: string;
    desc?: string;
    grandParentTableName?: string;
    grandParentTableUid?: string;
    question?: string;
    throwDesc: (desc: string) => void
}