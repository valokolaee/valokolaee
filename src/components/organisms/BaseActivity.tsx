import React, { FC, memo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { useGlobalContext } from '../../context';
import JsonHelper from '../../utilities/JsonHelper';
import { IBaseActivity } from '../utils/interfacesUI/IBaseActivity';

const BaseActivity: FC<IBaseActivity> = React.forwardRef(
  ({ children, header, style, bodyColorSet: backgroundColor, route }, ref) => {

    const { Route: { setRoute } } = useGlobalContext()


    useFocusEffect(() => { setRoute(JsonHelper.getObjectValueByString(route, 'name')) })

    return (
      <SafeAreaView style={[defStyl.body, style, { backgroundColor: backgroundColor?.backGround }]}>
        {children}
      </SafeAreaView>
    );
  },
);
export default memo(BaseActivity);

const defStyl = StyleSheet.create({ body: { flex: 1, }, });
