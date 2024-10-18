import { SubRoutes } from './app.routes';

import Table from '@/pages/Table';
import { TimelinePage } from '@/pages/Timeline';

export const cadastroRoutes: SubRoutes[] = [
  {
    label: 'Timeline',
    path: '/cadastros/timeline',
    element: <TimelinePage />,
    handle: {
      breadcrumb: () => 'timelines',
      path: '/cadastros/timeline'
    }
  },
  {
    label: 'Fabricante',
    path: '/cadastros/fabricante',
    element: <Table />,
    handle: {
      breadcrumb: () => 'Fabricante',
      path: '/cadastros/fabricante'
    }
  }
];
