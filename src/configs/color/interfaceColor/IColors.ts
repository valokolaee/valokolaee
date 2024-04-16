import { IBaseColor } from './IBaseColor';

export interface IColors extends IBaseColor {
  Black?: string;
  White?: string;
  gray?: (percent: 1 | 2 | 3 | 4 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95) => string;
}
