import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorSystem from "../../../../../configs/color/ColorSystem";
import { TColorSet } from "../../../../../configs/color/interfaceColor/IBaseColor";
import Coordinate from "../../../../../dataBase/realm/models/basics/Coordinate";
import CoordinateQueries from "../../../../../dataBase/realm/models/basics/Coordinate/CoordinateQueries";
import Expense from "../../../../../dataBase/realm/models/basics/Expense";
import ExpenseQueries from "../../../../../dataBase/realm/models/basics/Expense/ExpenseQueries";
import { distanceFormatter, getTotalDistance } from "../../../../../map/utils/MapHelper";
import { setTripDistance } from "../../../../../redux/actions";
import { useAppSelector } from "../../../../../redux/hooks";
import DateTimeHelper from "../../../../../utilities/DateTimeHelper";
import TextHelper from "../../../../../utilities/TextHelper";
import styler from "../../../../../utilities/styler";
import usePatientVisitsCount from "../../../../hooks/usePatientVisitsCount";
import styleValues from "../../../../utils/enums/styleValues";
import Item, { IItem } from "./Item";
import TripReview from "./TripReview";
import useDistance from "../../../../hooks/useDistance";


var _inter = setInterval(() => { }, 0)

export interface ITrackerHeader { colorSet?: TColorSet; }

export default () => {
    const _refTripReview = useRef<any>()
    const coordinateQueries = CoordinateQueries()

    const _trip_startOdometer = useAppSelector((s) => s.ongoingTripeSlice.startOdometer)
    const _trip_endOdometer = useAppSelector((s) => s.ongoingTripeSlice.endOdometer)
    const _trip_uuid = useAppSelector((s) => s.ongoingTripeSlice.uuid)
    const _trip_departure = useAppSelector((state) => state.ongoingTripeSlice.departure)
    const _trip_arrival = useAppSelector((s) => s.ongoingTripeSlice.arrival)

    const state = useAppSelector((s) => s.ongoingTripeSliceStatusInfo.status)

    const _distance = useDistance()
    const [_time, set_time] = useState(0)
    const ptVisitsCount = usePatientVisitsCount(_trip_uuid!)








    useEffect(() => {
        if (_trip_arrival) {
            clearInterval(_inter)
            setTripDistance({ distance: _trip_endOdometer! - _trip_startOdometer! })


        } else {


            _inter = setInterval(() => {

                const coordList: Coordinate[] = coordinateQueries.getAll!({ getBy: { value: _trip_uuid, name: 'tripUuid' } })

                setTripDistance({ distance: TextHelper.safeParsFloat(getTotalDistance(coordList)) })

                set_time(DateTimeHelper._dateDifferenceSec(_trip_departure, new Date().toString()))

            }, 1000)

        }
    }, [_trip_arrival])

    const expenseQueries = ExpenseQueries()
    const exps: Expense[] = expenseQueries.getAll!({ getBy: { value: _trip_uuid, name: 'tripUid' }, byQuery: true })

    const _expenses = () => {
        let totalExpenses = 0;
        exps.forEach(element => { totalExpenses = totalExpenses + element.amount });
        return totalExpenses;
    }



    const list: IItem[] = [
        { name: 'Travel Time', value: DateTimeHelper._timeCalculation(_time!).total },
        { name: 'Distance Traveled', value: `${_distance!} mi` },
        { name: 'Expenses', value: `$${TextHelper.thousandSeprator(_expenses()?.toFixed(2))}` },
        { name: 'Patients Visited', value: `${ptVisitsCount}` },

    ]


    const colorCaller = () => {
        switch (state) {
            case 'odometerEnd':
            case 'odometerStart':
                return ColorSystem.confirmOdometerColors.header

            case 'moving':
            case 'break':
                return ColorSystem.drivingColors!.header!

            default:
                return undefined
        }

    }
    const _goToReview = () => {
        if (state === 'conclusion') {
            return
        } else {

            _refTripReview.current.show()
        }
    }

    return (
        <View style={[styler({ backgroundColor: colorCaller()?.backGround }), defStyl.main]}>
            <TripReview ref={_refTripReview} />
            <View onTouchEnd={_goToReview}
                style={defStyl.inner}>
                {list.map((item) => (<Item {...item} color={colorCaller()?.fontColor} />))}
            </View>


        </View>)
}

const defStyl = StyleSheet.create({
    main: {
        flexDirection: 'row', borderBottomColor: ColorSystem.Border, borderBottomWidth: 1
    },
    inner: { flex: 4, flexDirection: 'row', justifyContent: 'space-between', padding: styleValues.p02 }
})