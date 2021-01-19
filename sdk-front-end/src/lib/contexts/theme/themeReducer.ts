import { LocalStorageKeys } from '../../shared/constants';
import { OptTheme } from '../../shared/styles/theme';
import { DarkTheme } from '../../shared/styles/theme/darkTheme';
import { LightTheme } from '../../shared/styles/theme/lightTheme';
import { RecursivePartial } from '../../shared/types';
import { GenericContext } from '../genericContext';
import { ThemeActions } from './themeActions';
import { CustomOptTheme, ThemeState } from './themeState';

function copyInto<T>(to: T, from?: RecursivePartial<T>) {
  if (from) {
    Object.entries(from)
      .filter((kv) => kv[1])
      .forEach((kv) => {
        const [key, value] = kv;
        if (value) {
          if (typeof value === 'object') {
            copyInto((to as any)[key], value as any);
          } else {
            (to as any)[key] = value;
          }
        }
      });
  }

  return to;
}

function generateNewTheme(theme: OptTheme, customTheme?: RecursivePartial<OptTheme>) {
  let newTheme = JSON.parse(JSON.stringify(theme)) as OptTheme;

  if (customTheme) {
    newTheme = copyInto(newTheme, customTheme);
  }

  return newTheme;
}

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
      localStorage.setItem(LocalStorageKeys.DarkTheme, '1');

      const currentTheme = generateNewTheme(state.theme.dark, state.customTheme.dark);

      return { ...state, usingDarkTheme: true, currentTheme };
    }
    case ThemeActions.SET_LIGHT_THEME: {
      localStorage.removeItem(LocalStorageKeys.DarkTheme);

      const currentTheme = generateNewTheme(state.theme.light, state.customTheme.light);

      return { ...state, usingDarkTheme: false, currentTheme };
    }
    case ThemeActions.SET_CUSTOM_THEME: {
      const usingDarkTheme = !!localStorage.getItem(LocalStorageKeys.DarkTheme);

      const currentTheme = generateNewTheme(
        usingDarkTheme ? state.theme.dark : state.theme.light,
        usingDarkTheme ? action.payload!.dark : action.payload!.light,
      );

      return { ...state, customTheme: action.payload!, currentTheme };
    }
    default: {
      // eslint-disable-next-line
      throw new Error(`Ação não identificada: ${action!.type}`);
    }
  }
}

type ThemeAction =
  | GenericContext<ThemeActions.RESET_THEME>
  | GenericContext<ThemeActions.SET_DARK_THEME>
  | GenericContext<ThemeActions.SET_LIGHT_THEME>
  | GenericContext<ThemeActions.SET_CUSTOM_THEME, CustomOptTheme>;
