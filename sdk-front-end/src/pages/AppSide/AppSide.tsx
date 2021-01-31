import { mdiIdeogramCjk, mdiPacMan } from '@mdi/js';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { version } from '../../../package.json';
import { OptMenuSection } from '../../lib/components/OptDrawer';
import { OptSideLayout } from '../../lib/components/OptSideLayout';
import { AppbarActions } from '../App/AppbarActions';
import { RotaNaoEncontrada } from '../App/RotaNaoEncontrada';
import { AppSideHome } from './AppSideHome';
import { AppSideListaRegistrosRoutes } from './AppSideListaRegistros/AppSideListaRegistros.routes';

const sections: OptMenuSection[] = [
  {
    items: [
      {
        icon: mdiPacMan,
        path: '/',
        title: 'Início',
        activeShouldBeExact: true,
      },
    ],
  },
  {
    items: [
      {
        icon: mdiIdeogramCjk,
        path: '/registro',
        title: 'Registros',
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/1/item',
        title: 'Registro 1 Item 1',
        activeShouldBeExact: true,
      },
    ],
  },
];

const routes = (
  <Switch>
    <Route exact path="/" component={AppSideHome} />
    <Route path="/registro" component={AppSideListaRegistrosRoutes} />
    <Route component={RotaNaoEncontrada} />
  </Switch>
);

export const AppSide = () => {
  return (
    <OptSideLayout
      sections={sections}
      routes={routes}
      onLogout={() => {
        console.log('onLogout');
      }}
      onManageProfile={() => {
        console.log('onConfigurarPerfil');
      }}
      appBarConfig={{
        actions: <AppbarActions />,
        noLinkDescription: true,
      }}
      profile={{
        email: 'usuario@optsol.com.br',
        name: 'Usuário A B',
        avatarSrc: undefined,
      }}
      version={`Versão ${version}`}
    />
  );
};
