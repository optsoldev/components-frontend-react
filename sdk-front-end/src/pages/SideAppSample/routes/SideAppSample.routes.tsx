import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Registro } from '../Registro/Registro';
import { RegistroRoutes } from './Registro.routes';

export const Routes = {
  Home: '/',
  Registro: {
    Principal: '/registros',
    Filtros: (filtro = ':filtro') => ({
      Principal: `/registros/${filtro}`,
      Detalhar: (registroId = ':registroId') => `/registros/${filtro}/registro/${registroId}`,
    }),
  },
} as const;

export const routes = (
  <Switch>
    <Route exact path={Routes.Home} component={Home} />
    <Route exact path={Routes.Registro.Principal} component={RegistroRoutes} />
  </Switch>
);
