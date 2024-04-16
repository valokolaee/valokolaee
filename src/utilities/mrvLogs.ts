import { Alert, Clipboard, ToastAndroid } from 'react-native';
import Toast from './Toast';
// import moment from 'moment';

export const isUnderDevelop = __DEV__;

export default (j: any, name?: string) => {
  if (isUnderDevelop) {
    console.log('\n\n\n\n', name || '', ':\n');
    console.log(JSON.stringify(j));
  }
};




export const logJson = (j: object, name?: string) => {
  try {
    console.log('\n\n\n\n\n\n\n' + name + ':', JSON.stringify(j));
  } catch (error) {
    console.log(name);
    console.log(j);
  }
}

export const logArray = (array: any[], name?: string) => {
  console.log('\n\n\n\n\n\n', name);

  array?.forEach((element) => {
    console?.log(element);
  });
}

export const copy = (txt: string[]) => {
  let s = '';

  for (var i = 0; i < txt?.length; i++) {
    s = s + txt[i] + '\n';
  }

  Clipboard.setString(s);
  ToastAndroid.show(s + 'is copied', ToastAndroid.SHORT);
}



export const copyTest = (txt: string[]) => {
  if (!isUnderDevelop) {
    return;
  }
  let s = '';

  for (var i = 0; i < txt?.length; i++) {
    s = s + txt[i] + '\n';
  }

  Clipboard.setString(s);
  ToastAndroid.show(s + 'is copied', ToastAndroid.SHORT);
}

export const copyJson = (j: object) => {
  if (!isUnderDevelop) {
    return;
  }
  var s = '';
  try {
    s = JSON?.stringify(j);
  } catch (error) {
    s = JSON?.stringify(error);
  }
  Clipboard.setString(s);
  ToastAndroid.show(s?.substring(0, 100) + '\nis copied', ToastAndroid.SHORT);
};



export const copyArray = (txt: any[]) => {
  if (!isUnderDevelop) {
    return;
  }

  var s = '';
  var ss = JSON.stringify(txt).split('},');

  for (var i = 0; i < ss?.length; i++) {
    var b = i == ss?.length - 1 ? '' : '},';
    s = s + ss[i] + b + '\n';
  }

  Clipboard.setString(s);
  ToastAndroid.show(s + 'is copied', ToastAndroid.SHORT);
}

export const alertArray = (txt: any[]) => {
  if (!isUnderDevelop) {
    return;
  }

  var s = '';
  var ss = JSON.stringify(txt).split('},');

  for (var i = 0; i < ss?.length; i++) {
    var b = i == ss?.length - 1 ? '' : '},';
    s = s + ss[i] + b + '\n\n\n';
  }

  Alert.alert(s);
}

export const copyObj = (txt: object) => {
  if (!isUnderDevelop) {
    return;
  }
  var s = '';
  var ss = JSON.stringify(txt).split(',');

  for (var i = 0; i < ss?.length; i++) {
    var b = i == ss?.length - 1 ? '' : ',';
    s = s + ss[i] + '\n' + b;
  }

  Clipboard.setString(s);
  ToastAndroid.show(s + 'is copied', ToastAndroid.SHORT);
}

export const copyArrayOriginal = (Arr: any[]) => {
  if (!isUnderDevelop) {
    return;
  }

  var s = '';

  for (var i = 0; i < Arr?.length; i++) {
    s = s + JSON.stringify(Arr[i]) + '\n';
  }

  Clipboard.setString(s);
  ToastAndroid.show(s + 'is copied', ToastAndroid.SHORT);
}

export const TSToast = (s?: any) => {
  if (!isUnderDevelop) {
    return;
  }
  try {
    s = JSON.stringify(s);
  } catch (error) { }
  if (s) {
    Toast(s);
  } else {
    Toast(s);
  }
}

export const alertObj = (txt: object) => {
  if (!isUnderDevelop) {
    return;
  }

  var s = '';
  var ss = JSON.stringify(txt).split(',');

  for (var i = 0; i < ss?.length; i++) {
    // var b = i == ss?.length - 1 ? '' : '},'
    s = s + ss[i] + '\n';
  }

  Alert.alert(s);
}

