import React from 'react';
import { CustomOptTheme, ThemeState } from './themeState';
declare type ThemeProps = {
    children: React.ReactNode;
};
declare function OptThemeProvider({ children }: ThemeProps): JSX.Element;
declare function useOptTheme(): {
    state: ThemeState;
    currentTheme: import("../..").OptFullTheme;
    setDarkTheme: (darkTheme: boolean) => void;
    setCustomTheme: (customTheme: CustomOptTheme) => void;
    resetTheme: () => void;
    setCurrentSideAppbarWidth: (width: number) => void;
};
export { OptThemeProvider, useOptTheme };
