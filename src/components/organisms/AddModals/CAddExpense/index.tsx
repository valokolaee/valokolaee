import { DateTimePickerEvent } from "@react-native-community/datetimepicker"
import { forwardRef, useRef, useState } from "react"
import { View } from "react-native"
import { Asset } from "react-native-image-picker"
import { v4 } from "uuid"
import ColorSystem from "../../../../configs/color/ColorSystem"
import ExpenseQueries from "../../../../dataBase/realm/models/basics/Expense/ExpenseQueries"
import ExpenseTag from "../../../../dataBase/realm/models/basics/ExpenseTag"
import MetaPicture from "../../../../dataBase/realm/models/basics/MetaPictur"
import MetaPictureQueries from "../../../../dataBase/realm/models/basics/MetaPictur/MetaPictureQueries"
import { useAppSelector } from "../../../../redux/hooks"
import TextHelper from "../../../../utilities/TextHelper"
import Toast from "../../../../utilities/Toast"
import styler from "../../../../utilities/styler"
import CDescription from "../../../atoms/CDescription"
import styleValues from "../../../utils/enums/styleValues"
import Xml from "../../../utils/svgs/Xml"
import CBottomDrawer from "../../CBottomDrawer"
import CDatePicker from "../../CDatePicker"
import Pricer from "./Pricer"
import Tags from "./Tags"
import CAddImageHandler from "../CAddImageHandler"
import myLogs from "../../../../utilities/mrvLogs"


let desc = ''
let imageList: Asset[] = []
var _tags: String[] = []

export default forwardRef(({ stopUid }: { stopUid?: string }, ref: any) => {
    const uuid = v4();
    const refTextInput = useRef<any>()
    const expenseQuery = ExpenseQueries()
    const metaPictureQueries = MetaPictureQueries()
    const _trip_uuid = useAppSelector((s) => s.ongoingTripeSlice.uuid)
    const [_cost, set_cost] = useState('0')
    const [_date, set_date] = useState<string | undefined>(new Date().toString())



    const _hide = () => { ref.current.hide() }

    const _createExpense = () => {
        const cost = TextHelper.safeParsFloat(_cost)

        if (cost < 1) {
            refTextInput.current.focus()
            Toast('Enter some cost')
            return
        }

        expenseQuery.create!({
            uuid,
            tripUid: _trip_uuid,
            stopUid,
            amount: cost / 100,
            categoryName: _tags.length > 0 ? JSON.stringify(_tags) : 'Unspecified',
            discretion: desc,
            dateTime: _date
        })
        set_cost('0')
        _saveImages()
    }

    const _saveImages = () => {

        imageList.forEach(element => {

            const asset: Partial<MetaPicture> = {
                dateTime: new Date().toString(),
                filename: element?.fileName!,
                parentTableName: 'Expense',
                parentTableUid: uuid,
                grandParentTableName: "Stop",
                grandParentTableUid: stopUid,
                uuid: v4(),
                physicalAddress: element?.uri!,

            }

            metaPictureQueries.create!(asset);
        });
        _hide()
    }

    const _getTags = (tags: ExpenseTag[]) => {

        _tags = []
        tags.forEach(element => {
            _tags.push(element.name)
        });


    }

    const _returnImageList = (assets: Asset[]) => { imageList = assets };
    const _onDateChange = (event: DateTimePickerEvent, date?: Date) => { set_date(date?.toString()) };
    const _onDescChangeText = (text: string) => { desc = text }


    const _reset = () => {
        set_cost('0')
        desc = ''
        imageList = []
        _tags = []
    }


    const _deleteAnItemHelper = (a: Asset) => {
        myLogs(a)
    }

    return (
        <CBottomDrawer
            onClose={_reset}
            ref={ref} title={{ text: `Add${stopUid ? '' : ' independent'} expense` }}
            baseView={{
                doubleBtn: {
                    color: ColorSystem.drivingStopColors!.header?.backGround,
                    left: { icon: Xml.delete, label: 'Discard', func: _hide },
                    right: { label: 'Submit', position: 'start', icon: Xml.tik, func: _createExpense },
                },
            }}
        >
            <View style={styler({ padding: styleValues.p05, })}>
                <Pricer ref={refTextInput} onChange={set_cost} />
                <Tags onChange={_getTags} />
                <CAddImageHandler returnImageList={_returnImageList} deleteAnItem={_deleteAnItemHelper} />
                <CDatePicker onChange={_onDateChange} style={styler({ marginBottom: styleValues.p05 })} />
                <CDescription onChangeText={_onDescChangeText} />
            </View>



        </CBottomDrawer>
    )
})

