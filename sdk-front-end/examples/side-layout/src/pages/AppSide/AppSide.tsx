import {
  mdiApps,
  mdiBell,
  mdiCodeArray,
  mdiIdeogramCjk,
  mdiPacMan,
  mdiTuneVariant
} from '@mdi/js';
import { OptMenuSection, OptSideLayout } from '@optsol/react';
import { Route, Switch } from 'react-router-dom';
import { version } from '../../../package.json';
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
    <Route exact path='/' component={AppSideHome} />
    <Route path='/registro' component={AppSideListaRegistrosRoutes} />
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
        console.log('onManageProfile');
      }}
      appBarConfig={{
        actions: [
          {
            icon: mdiCodeArray,
            onClick: () => {
              console.log('1');
            },
            title: 'Alguma coisa 1',
          },
          {
            icon: mdiTuneVariant,
            onClick: () => {
              console.log('2');
            },
            title: 'Alguma coisa 2',
          },
          {
            icon: mdiApps,
            onClick: () => {
              console.log('3');
            },
            title: 'Alguma coisa 3',
          },
          {
            icon: mdiBell,
            onClick: () => {
              console.log('4');
            },
            title: 'Alguma coisa 4',
          },
        ],
        hideLinkDescription: true,
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
