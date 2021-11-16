import { mdiHome, mdiMatrix } from '@mdi/js';
import { OptMenuSection } from '@optsol/react';
import { Routes } from './routes/SideAppSample.routes';

export const sections: OptMenuSection[] = [
  {
    items: [
      {
        icon: mdiHome,
        path: Routes.Home,
        title: 'Home',
        activeShouldBeExact: true,
      },
      {
        icon: mdiMatrix,
        path: Routes.Registro.Principal,
        title: 'Registro',
      },
    ],
  },
];
