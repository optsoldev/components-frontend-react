import { sideAppbarWidth } from '../../components/OptSideAppbar/styles';
import { LocalStorageKeys } from '../../shared/constants';
import { OptFullTheme, OptTheme } from '../../shared/styles/theme';
import { DarkTheme } from '../../shared/styles/theme/darkTheme';
import { LightTheme } from '../../shared/styles/theme/lightTheme';

export interface CustomOptTheme {
  light?: OptTheme;
  dark?: OptTheme;
}

export interface ThemeState {
  usingDarkTheme: boolean;
  theme: {
    dark: OptFullTheme;
    light: OptFullTheme;
  };
  customTheme: CustomOptTheme;
  currentTheme: OptFullTheme;
  currentSideAppbarWidth: number;
}

const usingDarkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme);

export const THEME_INITIAL_STATE: ThemeState = {
  usingDarkTheme,
  customTheme: {},
  theme: { dark: DarkTheme, light: LightTheme },
  currentTheme: usingDarkTheme ? DarkTheme : LightTheme,
  currentSideAppbarWidth: sideAppbarWidth,
};
