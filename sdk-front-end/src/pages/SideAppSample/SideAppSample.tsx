import { mdiBellOutline } from '@mdi/js';
import React, { version } from 'react';
import { OptSideLayout } from '../../lib/components/OptSideLayout';
import { routes } from './routes/SideAppSample.routes';
import { sections } from './SideAppSample.sections';

export const SideAppSample = () => {
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
            icon: mdiBellOutline,
            onClick: () => {
              console.log('Notificações');
            },
            title: 'Notificações',
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
