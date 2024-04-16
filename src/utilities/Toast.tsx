import { Alert, Platform, ToastAndroid } from 'react-native';

export default (s: string | number) => {
  // Toast.show({
  //     text: s,
  //     duration: 2500,

  //     position: 'absolute',
  //     textStyle: { textAlign: 'center' },
  //     buttonText: 'Okay',
  // });
  if (Platform.OS === 'android') {
    ToastAndroid.show(s?.toString(), ToastAndroid.LONG);
  } else {
    Alert.alert(s?.toString());
  }
};
