import { sidebarMenuWidth } from '../../components/OptSidebar/styles';
import { LocalStorageKeys } from '../../shared/constants';
import { OptTheme } from '../../shared/styles/theme';
import { DarkTheme } from '../../shared/styles/theme/darkTheme';
import { LightTheme } from '../../shared/styles/theme/lightTheme';
import { RecursivePartial } from '../../types/RecursivePartial';

export interface CustomOptTheme {
  light?: RecursivePartial<OptTheme>;
  dark?: RecursivePartial<OptTheme>;
}

export interface ThemeState {
  usingDarkTheme: boolean;
  theme: {
    dark: OptTheme;
    light: OptTheme;
  };
  customTheme: CustomOptTheme;
  currentTheme: OptTheme;
  currentSideAppbarWidth: number;
}

const usingDarkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme);

export const Theme_INITIAL_STATE: ThemeState = {
  usingDarkTheme,
  customTheme: {},
  theme: { dark: DarkTheme, light: LightTheme },
  currentTheme: usingDarkTheme ? DarkTheme : LightTheme,
  currentSideAppbarWidth: sidebarMenuWidth,
};
