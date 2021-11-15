import { OptFullTheme } from "../../shared/styles/theme";
import { RecursivePartial } from "../../types/RecursivePartial";
export declare function copyInto<T>(to: T, from?: RecursivePartial<T>): T;
export declare function generateNewTheme(theme: OptFullTheme, customTheme?: RecursivePartial<OptFullTheme>): OptFullTheme;
