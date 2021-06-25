import React, { createContext, useReducer } from 'react';
import { LocalStorageKeys } from '../../shared/constants';
import { ThemeActions } from './themeActions';
import { generateNewTheme } from './themeFunctions';
import { ThemeDispatch, ThemeReducer, THEME_INITIAL_DISPATCH } from './themeReducer';
import { CustomOptTheme, ThemeState, THEME_INITIAL_STATE } from './themeState';

const ThemeStateContext = createContext<ThemeState>(THEME_INITIAL_STATE);
const ThemeDispatchContext = createContext<ThemeDispatch>(THEME_INITIAL_DISPATCH);

type ThemeProps = { children: React.ReactNode };

function OptThemeProvider({ children }: ThemeProps) {
  const [state, dispatch] = useReducer(ThemeReducer, THEME_INITIAL_STATE);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function useOptTheme() {
  const state = React.useContext(ThemeStateContext);

  if (state === undefined) {
    throw new Error('useThemeState deve ser utilizando dentro de um ThemeProvider');
  }

  const dispatch = React.useContext(ThemeDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useThemeDispatch deve ser utilizando dentro de um ThemeProvider');
  }

  const actions = ThemeActions;

  function setCurrentTheme(darkTheme: boolean) {
    if (darkTheme) {
      localStorage.setItem(LocalStorageKeys.DarkTheme, '1');

      const currentTheme = generateNewTheme(state.theme.dark, state.customTheme.dark);

      dispatch({ type: actions.SET_DARK_THEME, payload: currentTheme });
    } else {
      localStorage.removeItem(LocalStorageKeys.DarkTheme);

      const currentTheme = generateNewTheme(state.theme.light, state.customTheme.light);

      dispatch({ type: actions.SET_LIGHT_THEME, payload: currentTheme });
    }
  }

  function setCustomTheme(customTheme: CustomOptTheme) {
    dispatch({ type: actions.SET_CUSTOM_THEME, payload: customTheme });
  }

  function resetTheme() {
    dispatch({ type: actions.RESET_THEME });
  }

  function setCurrentSideAppbarWidth(width: number) {
    dispatch({ type: actions.SET_CURRENT_SIDEAPPBARWIDTH, payload: width });
  }

  return {
    state,
    currentTheme: state.currentTheme,
    setDarkTheme: setCurrentTheme,
    setCustomTheme,
    resetTheme,
    setCurrentSideAppbarWidth,
  };
}

export { OptThemeProvider, useOptTheme };
