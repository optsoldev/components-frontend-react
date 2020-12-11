/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { IThemeOptSol } from '../../models/ThemeOptSol';

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeOptSol {}
}
