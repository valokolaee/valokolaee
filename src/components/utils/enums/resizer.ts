import isTablet from '../../../utilities/isTablet';

export default (v: number) => {
  return isTablet() ? v / 2.9 : v;
};
