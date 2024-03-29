import { mdiBellOutline, mdiMolecule } from '@mdi/js';
import { OptSideLayout } from '@optsol/react';
import { version } from 'react';

import { Routes, routes } from './routes/SideAppSample.routes';
import { sections } from './SideAppSample.sections';

export const SideAppSample = () => {
  return (
    <OptSideLayout
      logo={{ icon: mdiMolecule, path: Routes.Home }}
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
            icon: mdiBellOutline,
            onClick: () => {
              console.log('Notificações');
            },
            title: 'Notificações',
          },
        ],
        hideLinkDescription: true,
        sideAppbarWidth: 75,
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
