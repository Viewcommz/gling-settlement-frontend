import 'styled-components';
import { FontSize, Color, DeviceSizes, Device } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: FontSize;
    colors: Color;
    deviceSizes:DeviceSizes;
    device: Device;
  }
}