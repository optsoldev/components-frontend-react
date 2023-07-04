import { mdiAnchor, mdiLadder } from '@mdi/js';
import { OptMenuSection } from '@optsol/react';
import { Routes } from '../routes/index.routes';

export const useSections = () => {
  const sections: OptMenuSection[] = [
    {
      title: 'Stowage',
      items: [
        {
          icon: mdiAnchor,
          path: Routes.Home,
          title: 'Home'
        },
        {
          icon: mdiLadder,
          path: Routes.Form,
          title: 'Form'
        }
      ]
    }
  ];

  return sections;
};
