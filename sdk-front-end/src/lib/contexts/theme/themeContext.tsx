import React, { createContext, useReducer } from 'react';
import { ThemeActions } from './themeActions';
import { ThemeDispatch, ThemeReducer, Theme_INITIAL_DISPATCH } from './themeReducer';
import { CustomOptTheme, ThemeState, Theme_INITIAL_STATE } from './themeState';

const ThemeStateContext = createContext<ThemeState>(Theme_INITIAL_STATE);
const ThemeDispatchContext = createContext<ThemeDispatch>(Theme_INITIAL_DISPATCH);

type ThemeProps = { children: React.ReactNode };

function OptThemeProvider({ children }: ThemeProps) {
  const [state, dispatch] = useReducer(ThemeReducer, Theme_INITIAL_STATE);

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

  function setDarkTheme(darkTheme: boolean) {
    if (darkTheme) {
      dispatch({ type: actions.SET_DARK_THEME });
    } else {
      dispatch({ type: actions.SET_LIGHT_THEME });
    }
  }

  function setCustomTheme(customTheme: CustomOptTheme) {
    dispatch({ type: actions.SET_CUSTOM_THEME, payload: customTheme });
  }

  function resetTheme() {
    dispatch({ type: actions.RESET_THEME });
  }

  return { state, currentTheme: state.currentTheme, setDarkTheme, setCustomTheme, resetTheme };
}

export { OptThemeProvider, useOptTheme };
