import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/Home';

import { RegistroRoutes } from './registro.routes';

export const Routes = {
  Home: '/',
  Registro: {
    Principal: '/registros/*',
    Filtros: (filtro = ':filtro') => ({ Principal: filtro } as const),
  } as const,
} as const;

export const routes = () => (
  <ReactRoutes>
    <Route path={Routes.Home} element={<Home />} />
    <Route path={Routes.Registro.Principal} element={<RegistroRoutes />} />
  </ReactRoutes>
);
