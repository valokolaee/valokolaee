import TextHelper from './TextHelper';

export default class JsonHelper {
  constructor() {}

  static isObjEmpty(obj) {
    // return true;
    return Object.keys(obj)?.length === 0;
  }

  static interfaceObjectToJson(o) {
    return JSON.parse(JSON.stringify(o));
  }
  static itemProps(o) {
    return Object.keys(JSON.parse(JSON.stringify(o)));
  }

  static deepClone(a) {
    try {
      return JSON.parse(JSON.stringify(a));
    } catch (e) {
      console.log(e);
    }
  }

  static removeByIndex(array, index) {
    var pd = [];
    array.forEach((element, i) => {
      i !== index && pd.push(element);
    });
    return pd;
  }

  static removeByItem(array, item) {
    return array.filter((i) => i !== item);
  }

  static getItemByProp(array, prop, item) {
    return array.filter((i) => i[prop] === item)[0];
  }
  static isArrayEmpty(array) {
    if (array) {
      return array?.length < 1;
    } else {
      return true;
    }
  }

  static getObjectValueByString(obj, prop) {
    if (TextHelper.empty(obj)) {
      return;
    }
    return obj[prop];
  }
}
