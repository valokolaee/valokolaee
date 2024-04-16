import { Light } from './colorThemes/Light';
import { IColors } from './interfaceColor/IColors';

let TypeTheme = false;

const ColorSystem: IColors = Light
// const ColorSystem: IColors = TypeTheme ? Light : Dark;

ColorSystem.White = '#FFFFFF';
ColorSystem.Black = '#000000';
ColorSystem.gray = (x: number) => String(`rgba(0,0,0,${x / 100})`);

export default ColorSystem;
