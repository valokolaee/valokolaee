

export default interface ICOdometerPicker {
    focusIndex?: (index: number) => void;
    _bigNum: string;
    set_bigNum: (v: string) => void;
    numbers: number;
    decimals?: number;
    fontSize?: number

}
