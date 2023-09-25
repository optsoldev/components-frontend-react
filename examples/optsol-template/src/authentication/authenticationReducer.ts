import { AuthenticationActions } from './authenticationActions';
import { AuthenticationState, UserInfo } from './authenticationState';

type AuthenticationAction =
  | GenericContext<AuthenticationActions.CARREGAR_USER_INFO, UserInfo | null>
  | GenericContext<AuthenticationActions.LOADING_USER_INFO, boolean>
  | GenericContext<AuthenticationActions.DEFINIR_TENANT, string>
  | GenericContext<AuthenticationActions.DEFINIR_TOKEN, string | undefined>;

export type AuthenticationDispatch = (action: AuthenticationAction) => void;

export const AUTHENTICATION_INITIAL_DISPATCH = (
  action: AuthenticationAction
): void => {
  console.log(action);
  throw Error('Dispatch not implemented! Action: ' + action);
};

export interface GenericContext<T, P = object> {
  type: T;
  payload?: P;
}

export function AuthenticationReducer(
  state: AuthenticationState,
  action: AuthenticationAction
): AuthenticationState {
  switch (action.type) {
    case AuthenticationActions.LOADING_USER_INFO: {
      return { ...state };
    }
    case AuthenticationActions.CARREGAR_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload ?? null
      };
    }
    case AuthenticationActions.DEFINIR_TENANT: {
      return { ...state, tenantId: action.payload };
    }
    case AuthenticationActions.DEFINIR_TOKEN: {
      return { ...state, token: action.payload };
    }
    default: {
      // eslint-disable-next-line
      throw new Error(`Ação não identificada: ${(action as any).type}`);
    }
  }
}
