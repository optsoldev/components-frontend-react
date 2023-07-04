import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useAuthenticationContext } from '../authentication/authenticationContext';
import { UserInfo } from '../authentication/authenticationState';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
}

interface Context {
  loading: boolean;
  usuario: Usuario | null;
  userInfo?: UserInfo | null;
  refreshUserInfo: () => Promise<void>;
}

const UserContext = createContext<Context | null>(null);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const { token, userInfo } = useAuthenticationContext();
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const refreshUserInfo = useCallback(() => {
    return  Promise.resolve()
  }, []);

  useEffect(() => {
    if (!token) return;

    setLoading(true);
    refreshUserInfo().finally(() => setLoading(false));
  }, [refreshUserInfo, token]);

  const values = useMemo(
    () => ({
      loading,
      usuario,
      userInfo,
      refreshUserInfo
    }),
    [loading, usuario, userInfo, refreshUserInfo]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

function useUserContext() {
  const context = useContext(UserContext);
  if (context === null)
    throw new Error('UserContext must be rendered inside UserProvider!');

  const { loading, usuario, userInfo, refreshUserInfo } = context;

  if (loading || !userInfo) return { ...context, loading: true };

  return { loading, usuario, userInfo, refreshUserInfo };
}

export { UserProvider, useUserContext };

