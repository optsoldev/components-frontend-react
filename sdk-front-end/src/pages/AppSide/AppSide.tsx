import { mdiIdeogramCjk, mdiPacMan } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { version } from '../../../package.json';
import { OptMenuSection } from '../../lib/components/OptDrawer';
import { OptSideLayout } from '../../lib/components/OptSideLayout';
import { ColorPalette } from '../../lib/shared/styles/colors';
import { AppbarActions } from '../App/AppbarActions';
import { RotaNaoEncontrada } from '../App/RotaNaoEncontrada';
import { AppSideHome } from './AppSideHome';
import { AppSideListaRegistrosPortal } from './AppSideListaRegistros/AppSideListaRegistrosPortal';

const sections: OptMenuSection[] = [
  {
    items: [
      {
        icon: <Icon size={1} path={mdiPacMan} color={ColorPalette.secondary} />,
        path: '/',
        title: 'Início',
        activeShouldBeExact: true,
      },
    ],
  },
  {
    items: [
      {
        icon: <Icon size={1} path={mdiIdeogramCjk} color={ColorPalette.primary} />,
        path: '/registro',
        title: 'Registros',
      },
      {
        icon: <Icon size={1} path={mdiIdeogramCjk} color={ColorPalette.primary} />,
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
    <Route path="/registro" component={AppSideListaRegistrosPortal} />
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
      onConfigurarPerfil={() => {
        console.log('onConfigurarPerfil');
      }}
      appBarConfig={{
        actions: <AppbarActions />,
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
