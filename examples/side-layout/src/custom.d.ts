/* eslint-disable @typescript-eslint/no-empty-interface */

import { OptFullTheme } from './shared/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends OptFullTheme {}
}
