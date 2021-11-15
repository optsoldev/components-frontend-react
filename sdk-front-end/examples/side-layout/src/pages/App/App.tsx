import { mdiAbTesting, mdiIdeogramCjk, mdiPacMan } from '@mdi/js';
import { OptLayout, OptMenuSection } from '@optsol/react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { version } from '../../../package.json';
import { Images } from '../../shared/images/images';
import { AppbarActions } from './AppbarActions';
import { RotaListaRegistro } from './RotaListaRegistro';
import { RotaNaoEncontrada } from './RotaNaoEncontrada';
import { RotaPrincipal } from './RotaPrincipal';
import { RotaRegistro } from './RotaRegistro';

const LazyRotaTeste = React.lazy(() => {
  return import('./RotaLazy');
});

const sections: OptMenuSection[] = [
  {
    items: [
      {
        icon: mdiPacMan,
        path: '/',
        title: 'Início',
        activeShouldBeExact: true,
      },
      {
        icon: mdiAbTesting,
        path: '/lazy',
        title: 'Lazy',
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
        path: '/registro/1/item/1/editar',
        title: 'Registro 1 Item 1',
        activeShouldBeExact: true,
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/1/item/2/editar',
        title: 'Registro 1 Item 2',
        activeShouldBeExact: true,
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/2/item/2/editar',
        title: 'Registro 2 Item 2',
        activeShouldBeExact: true,
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/2/item/2/editar',
        title: 'Registro 2 Item 2',
        activeShouldBeExact: true,
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/2/item/2/editar',
        title: 'Registro 2 Item 2',
        activeShouldBeExact: true,
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/2/item/2/editar',
        title: 'Registro 2 Item 2',
        activeShouldBeExact: true,
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/2/item/2/editar',
        title: 'Registro 2 Item 2',
        activeShouldBeExact: true,
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/2/item/2/editar',
        title: 'Registro 2 Item 2',
        activeShouldBeExact: true,
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/2/item/2/editar',
        title: 'Registro 2 Item 2',
        activeShouldBeExact: true,
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/2/item/2/editar',
        title: 'Registro 2 Item 2',
        activeShouldBeExact: true,
      },
      {
        icon: mdiIdeogramCjk,
        path: '/registro/2/item/2/editar',
        title: 'Registro 2 Item 2',
        activeShouldBeExact: true,
      },
    ],
  },
];

const routes = (
  <Switch>
    <Route path="/lazy" component={LazyRotaTeste} />
    <Route path="/registro/:id/item/:itemId/editar" component={RotaRegistro} />
    <Route path="/registro/:id/item/:itemId" component={RotaRegistro} />
    <Route path="/registro/:id" component={RotaRegistro} />
    <Route path="/registro" component={RotaListaRegistro} />
    <Route exact path="/" component={RotaPrincipal} />
    <Route component={RotaNaoEncontrada} />
  </Switch>
);

const App = () => {
  return (
    <OptLayout
      sections={sections}
      routes={routes}
      onLogout={() => {
        console.log('onLogout');
      }}
      onManageProfile={() => {
        console.log('onConfigurarPerfil');
      }}
      appBarConfig={{
        hideBreadcrumb: true,
        actions: <AppbarActions />,
      }}
      profile={{
        email: 'usuario@optsol.com.br',
        name: 'Usuário A B',
        avatarSrc: undefined,
      }}
      version={`Versão ${version}`}
      drawerLogo={<img src={Images.LogoDrawer} alt="Banner da OPTSOL" />}
    />
  );
};

export default App;
