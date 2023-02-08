import { Theme } from 'react-select';

import { ColorPalette } from '../../shared/styles/colors';

// todo tema dinamico
export const colors = {
  primary: ColorPalette.primary,
  primary75: ColorPalette.primaryTints.tint2,
  primary50: ColorPalette.primaryTints.tint6,
  primary25: ColorPalette.primaryTints.tint8,

  danger: ColorPalette.white,
  dangerLight: ColorPalette.ketchup,

  neutral0: ColorPalette.white,
  neutral5: ColorPalette.gray8,
  neutral10: ColorPalette.gray6,
  neutral20: ColorPalette.gray6,
  neutral30: ColorPalette.gray5,
  neutral40: ColorPalette.gray4,
  neutral50: ColorPalette.gray3,
  neutral60: ColorPalette.gray2,
  neutral70: ColorPalette.gray1,
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)',
};

const borderRadius = 4;
// Used to calculate consistent margin/padding on elements
const baseUnit = 4;
// The minimum height of the control
const controlHeight = 56;
// The amount of space between the control and menu */
const menuGutter = baseUnit * 2;

export const spacing = {
  baseUnit,
  controlHeight,
  menuGutter,
};

export const optTagSelectTheme: Theme = {
  borderRadius,
  colors,
  spacing,
};
