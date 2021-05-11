import { OptTheme } from './lib/shared/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends OptTheme {}
}
