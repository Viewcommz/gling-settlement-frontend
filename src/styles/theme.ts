import { DefaultTheme } from 'styled-components';

/* FONT SIZE */
const fontSizes = {
  small: 14,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 28,
  xxxl: 36,
  titleSize: 48,
}

/* COLOR */
const colors = {
  blue50: '#E0F7FA',
  blue100: '#b2ebf2',
  blue200: '#80deea',
  blue300: '#4dcfe1',
  blue400: '#26c5da',
  blue500: '#00BCD4',
  blue600: '#00abc1',
  blue700: '#0096a7',
  blue800: '#00828f',
  blue900: '#005f64',

  red50: '#ffecef',
  red100: '#ffced4',
  red200: '#f99c9d',
  red300: '#f37476',
  red400: '#FF5252',
  red500: '#ff3e36',
  red600: '#f73536',
  red700: '#e42930',
  red800: '#d72028',
  red900: '#c8111c',

  gray50: '#f8f9fa',
  gray100: '#f1f3f5',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#868e96',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',

  white: '#FFFFFF',
  black: '#121417'
} 

/* DEVICE SIZE 수정필요*/
const deviceSizes = {
  mobile: 375,
  tablet: 600,
  desktop: 1000,
}
const device = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  desktop: `only screen and (max-width: ${deviceSizes.desktop})`,
};

const theme:DefaultTheme = {
  fontSizes,
  colors,
  deviceSizes,
  device
}

export type FontSize = typeof fontSizes;
export type Color = typeof colors;
export type DeviceSizes = typeof deviceSizes;
export type Device = typeof device;

export default theme;