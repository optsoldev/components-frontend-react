import React, { createContext, useReducer } from 'react';
import { BreadcrumbActions } from './breadcrumbActions';
import { BreadcrumbDispatch, BreadcrumbReducer, BREADCRUMB_INITIAL_DISPATCH } from './breadcrumbReducer';
import { BreadcrumbDictionary, BreadcrumbState, BREADCRUMB_INITIAL_STATE } from './breadcrumbState';

const BreadcrumbStateContext = createContext<BreadcrumbState>(BREADCRUMB_INITIAL_STATE);
const BreadcrumbDispatchContext = createContext<BreadcrumbDispatch>(BREADCRUMB_INITIAL_DISPATCH);

type BreadcrumbProps = { children: React.ReactNode };

function BreadcrumbProvider({ children }: BreadcrumbProps) {
  const [state, dispatch] = useReducer(BreadcrumbReducer, BREADCRUMB_INITIAL_STATE);

  return (
    <BreadcrumbStateContext.Provider value={state}>
      <BreadcrumbDispatchContext.Provider value={dispatch}>{children}</BreadcrumbDispatchContext.Provider>
    </BreadcrumbStateContext.Provider>
  );
}

function useBreadcrumb() {
  const state = React.useContext(BreadcrumbStateContext);

  if (state === undefined) {
    throw new Error('useBreadcrumbState deve ser utilizando dentro de um BreadcrumbProvider');
  }

  const dispatch = React.useContext(BreadcrumbDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useBreadcrumbDispatch deve ser utilizando dentro de um BreadcrumbProvider');
  }

  const actions = BreadcrumbActions;

  function setDictionary(...arrayDictonary: [string, string | null][]) {
    const dictionary: BreadcrumbDictionary = arrayDictonary
      .filter((d) => d[0])
      .map((d) => ({
        key: d[0],
        value: d[1],
      }));

    dispatch({ type: actions.SET_VALUES, payload: dictionary });
  }

  function resetValues() {
    dispatch({ type: actions.RESET_VALUES });
  }

  return { state, setDictionary, resetValues };
}

export { BreadcrumbProvider, useBreadcrumb };
