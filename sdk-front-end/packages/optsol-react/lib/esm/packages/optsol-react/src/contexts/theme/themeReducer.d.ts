import { OptFullTheme } from '../../shared/styles/theme';
import { GenericContext } from '../genericContext';
import { ThemeActions } from './themeActions';
import { CustomOptTheme, ThemeState } from './themeState';
export declare type ThemeDispatch = (action: ThemeAction) => void;
export declare const THEME_INITIAL_DISPATCH: (action: ThemeAction) => void;
export declare function ThemeReducer(state: ThemeState, action: ThemeAction): ThemeState;
declare type ThemeAction = GenericContext<ThemeActions.RESET_THEME> | GenericContext<ThemeActions.SET_DARK_THEME, OptFullTheme> | GenericContext<ThemeActions.SET_LIGHT_THEME, OptFullTheme> | GenericContext<ThemeActions.SET_CUSTOM_THEME, CustomOptTheme> | GenericContext<ThemeActions.SET_CURRENT_SIDEAPPBARWIDTH, number>;
export {};
