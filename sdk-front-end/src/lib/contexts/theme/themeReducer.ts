import { LocalStorageKeys } from '../../shared/constants';
import { OptTheme } from '../../shared/styles/theme';
import { DarkTheme } from '../../shared/styles/theme/darkTheme';
import { LightTheme } from '../../shared/styles/theme/lightTheme';
import { GenericContext } from '../genericContext';
import { ThemeActions } from './themeActions';
import { generateNewTheme } from './themeFunctions';
import { CustomOptTheme, ThemeState } from './themeState';

export type ThemeDispatch = (action: ThemeAction) => void;

export const Theme_INITIAL_DISPATCH = (action: ThemeAction): void => {
  throw Error('Dispatch not implemented. Action: ' + action);
};

export function ThemeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case ThemeActions.RESET_THEME: {
      const usingDarkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme);

      return { ...state, customTheme: {}, currentTheme: usingDarkTheme ? DarkTheme : LightTheme };
    }
    case ThemeActions.SET_DARK_THEME: {
      return { ...state, usingDarkTheme: true, currentTheme: action.payload! };
    }
    case ThemeActions.SET_LIGHT_THEME: {
      return { ...state, usingDarkTheme: false, currentTheme: action.payload! };
    }
    case ThemeActions.SET_CUSTOM_THEME: {
      const usingDarkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme);

      const currentTheme = generateNewTheme(
        usingDarkTheme ? state.theme.dark : state.theme.light,
        usingDarkTheme ? action.payload!.dark : action.payload!.light,
      );

      return { ...state, customTheme: action.payload!, currentTheme };
    }
    case ThemeActions.SET_CURRENT_SIDEAPPBARWIDTH: {
      return { ...state, currentSideAppbarWidth: action.payload! };
    }
    default: {
      // eslint-disable-next-line
      throw new Error(`Ação não identificada: ${action!.type}`);
    }
  }
}

type ThemeAction =
  | GenericContext<ThemeActions.RESET_THEME>
  | GenericContext<ThemeActions.SET_DARK_THEME, OptTheme>
  | GenericContext<ThemeActions.SET_LIGHT_THEME, OptTheme>
  | GenericContext<ThemeActions.SET_CUSTOM_THEME, CustomOptTheme>
  | GenericContext<ThemeActions.SET_CURRENT_SIDEAPPBARWIDTH, number>;
