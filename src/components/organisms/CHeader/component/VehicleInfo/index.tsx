import { useRef } from "react"
import { TouchableOpacity, View } from "react-native"
import ColorSystem from "../../../../../configs/color/ColorSystem"
import { useAppSelector } from "../../../../../redux/hooks"
import CIconGenerator from "../../../../atoms/CIconGenerator"
import CText from "../../../../atoms/Ctext"
import Xml from "../../../../utils/svgs/Xml"
import { IHeader } from "../IHeader"
import Sync from "./Sync"
import defStyle from "./defStyle"
import CAddExpense from "../../../AddModals/CAddExpense"
import GoToSettings from "./GoToSettings"


export default ({ colorSet }: IHeader) => {
    const car = useAppSelector((s) => s.carSlice.name)
    const refAddExpense = useRef<any>()

    // const _goToSelectCar = () => { nav.navigate(mainRoutsEnum.VehicleInspecting) }


    const _addExpense = () => {
        refAddExpense.current.show()
    }
    return (
        <View style={defStyle().main}>
            <TouchableOpacity
                style={[defStyle(colorSet?.fontColor).inCommon, defStyle().carInfo]}>
                <CIconGenerator iconName={Xml.car(colorSet?.fontColor || ColorSystem.Black)} />
                <CText text={car || 'No vehicle selected'} style={defStyle(colorSet?.fontColor).carInfoTxt} color={colorSet?.fontColor} />
            </TouchableOpacity>
            <Sync colorSet={colorSet} />

            <TouchableOpacity onPress={_addExpense} style={[defStyle(colorSet?.fontColor).inCommon, defStyle().refresh]}>
                <CIconGenerator iconName={Xml.addExpanse(colorSet?.fontColor || ColorSystem.Black)} size={20} />
                <CAddExpense ref={refAddExpense} />
            </TouchableOpacity>
            {/* <GoToSettings /> */}
        </View>
    )
}
