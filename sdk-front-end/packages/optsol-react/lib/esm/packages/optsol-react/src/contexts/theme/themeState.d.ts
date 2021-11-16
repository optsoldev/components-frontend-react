import { OptFullTheme } from '../../shared/styles/theme';
export interface CustomOptTheme {
    light?: OptFullTheme;
    dark?: OptFullTheme;
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
export declare const THEME_INITIAL_STATE: ThemeState;
