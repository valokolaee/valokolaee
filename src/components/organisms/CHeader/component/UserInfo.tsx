import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ColorSystem from '../../../../configs/color/ColorSystem';
import { useGlobalContext } from '../../../../context';
import { _isTripOpen } from '../../../../interfaces/TTripStatus';
import { authRoutsEnum } from '../../../../navigation/authRouter/authRoutsEnum';
import { mainRoutsEnum } from '../../../../navigation/mainRouter/mainRoutsEnum';
import { setCar, setOngoingTripe, setOngoingTripeStatusInfo, setService, setToken, setTripDistance, setTripTime, setUser } from '../../../../redux/actions';
import { useAppSelector } from '../../../../redux/hooks';
import TextHelper from '../../../../utilities/TextHelper';
import navigationManager from '../../../../utilities/navigationManager';
import CIconGenerator from '../../../atoms/CIconGenerator';
import CText from '../../../atoms/Ctext';
import useMyNavigation from '../../../hooks/useMyNavigation';
import styleValues from '../../../utils/enums/styleValues';
import Xml from '../../../utils/svgs/Xml';
import { IHeader } from './IHeader';
import JsonHelper from '../../../../utilities/JsonHelper';
import mrvTxtTest, { isUnderDevelop } from '../../../../utilities/mrvLogs';

export default memo(({ colorSet: color }: IHeader) => {

  const user = useAppSelector((s) => s.userSlice)
  const status = useAppSelector((s) => s.ongoingTripeSliceStatusInfo)
  const { Route: { route, setRoute } } = useGlobalContext()


  const nav = useMyNavigation()
  const homie = [mainRoutsEnum.Dashboard, mainRoutsEnum.Settings];

  const _isInHomie = () => {
    return homie.includes(route! as mainRoutsEnum)
  }
  const _shallGoBack = () => { return _isInHomie() && _isTripOpen(status?.status!) }


  const _goTo = () => { if (_shallGoBack()) { navigationManager({ nav, status }) } else { nav.navigate(mainRoutsEnum.Dashboard) } }



  const _reset = () => {
    _resetRedux()
    nav.replace(authRoutsEnum.Splash)
  }

  return (
    <View style={defStyle.main}>
      <TouchableOpacity {...{ onPress: _goTo }}>
        <CIconGenerator iconName={_shallGoBack() ? Xml.goBack(color?.fontColor || ColorSystem.Black) : Xml.home(color?.fontColor || ColorSystem.Black)} size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={_reset} disabled={!isUnderDevelop}>
        <CText capitalize text={`${user.firstName} ${TextHelper.capitalize(user.lastName!)}`} holderStyle={defStyle.text} color={color?.fontColor} />
      </TouchableOpacity>
    </View>
  )
});

const defStyle = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginStart: styleValues.p01,
  },
});


export const _resetRedux = () => {
  setToken(undefined)
  setOngoingTripe(undefined)
  setOngoingTripeStatusInfo(undefined)
  setUser(undefined)
  setCar(undefined)
  setService(undefined)
  setTripTime(undefined)
  setTripDistance(undefined)
}