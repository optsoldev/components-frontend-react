import { Theme } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import { OptTheme } from "../../shared/styles/theme";
declare module "@mui/styles/defaultTheme" {
    interface DefaultTheme extends Theme {
    }
}
export interface OptLayoutProviderProps {
    darkTheme?: boolean;
    theme: OptTheme;
    noRouter?: boolean;
}
export declare const OptLayoutProvider: ({ children, noRouter, ...props }: PropsWithChildren<OptLayoutProviderProps>) => JSX.Element;
