import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home/Home';
import { RegistroRoutes } from './Registro.routes';

export const Routes = {
  Home: '/',
  Registro: {
    Principal: '/registros',
    Filtros: (filtro = ':filtro') =>
      ({
        Principal: `/registros/${filtro}`,
        ListaRegistro: `/registros/${filtro}`,
        Detalhar: (registroId = ':registroId') => `/registros/${filtro}/registro/${registroId}`,
        Criar: `/registros/${filtro}/registro/criar`,
        Editar: (id = ':id') => `/registros/${filtro}/registro/${id}`,
      } as const),
  },
} as const;

export const routes = (
  <Switch>
    <Route exact path={Routes.Home} component={Home} />
    <Route path={Routes.Registro.Principal} component={RegistroRoutes} />
  </Switch>
);
