import { GenericContext } from '../genericContext';
import { BreadcrumbActions } from './breadcrumbActions';
import { BreadcrumbDictionary, BreadcrumbState } from './breadcrumbState';

export type BreadcrumbDispatch = (action: BreadcrumbAction) => void;
export const BREADCRUMB_INITIAL_DISPATCH = (action: BreadcrumbAction): void => {
  throw Error(`Dispatch not implemented. Action: ${action}`);
};

export function BreadcrumbReducer(
  state: BreadcrumbState,
  action: BreadcrumbAction
): BreadcrumbState {
  switch (action.type) {
    case BreadcrumbActions.SET_VALUES: {
      const newDictionary: BreadcrumbDictionary = [];

      if (action.payload) {
        action.payload.forEach((p) => {
          newDictionary.push(p);
        });
      }

      return { ...state, dictionary: newDictionary };
    }
    case BreadcrumbActions.RESET_VALUES: {
      return { ...state, dictionary: [] };
    }
    default: {
      // eslint-disable-next-line
      throw new Error(`Ação não identificada: ${(action as any)?.type}`);
    }
  }
}

type BreadcrumbAction =
  | GenericContext<BreadcrumbActions.SET_VALUES, BreadcrumbDictionary>
  | GenericContext<BreadcrumbActions.RESET_VALUES>;
