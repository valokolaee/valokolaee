import { useNetInfoInstance } from '@react-native-community/netinfo';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import { _isTripOnGoing } from '../../../interfaces/TTripStatus';
import { useAppSelector } from '../../../redux/hooks';
import styleValues from '../../utils/enums/styleValues';
import { IHeader } from './component/IHeader';
import TrackerHeader from './component/TrackerHeader';
import UserInfo from './component/UserInfo';
import VehicleInfo from './component/VehicleInfo';
import Warning from './component/Warning';
import InspectionBar from '../../../routs/main/routs/VehicleInspecting/components/inspectionBar';



export default memo(React.forwardRef(({ }: IHeader, ref) => {

  const _trip_status = useAppSelector((state) => state.ongoingTripeSliceStatusInfo.status)

  const { netInfo: { type, isConnected }, refresh } = useNetInfoInstance();


  const colorCaller = () => {


    switch (_trip_status) {
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





  return (<>
    <View style={[defStyle.main, { backgroundColor: colorCaller()?.backGround, borderColor: colorCaller()?.fontColor }]}>
      <UserInfo colorSet={colorCaller()} />
      <VehicleInfo colorSet={colorCaller()} />
    </View>
    {_isTripOnGoing(_trip_status!) && <TrackerHeader />}
    {_trip_status === 'inspecting' && <InspectionBar />}

    <Warning show={isConnected!} msg='Please turn on Wi-Fi or cellular data to keep the trip information in sync.' />

  </>
  );
}))

const defStyle = StyleSheet.create({
  main: {
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: styleValues.p02,
    paddingHorizontal: styleValues.p04
  },


});
