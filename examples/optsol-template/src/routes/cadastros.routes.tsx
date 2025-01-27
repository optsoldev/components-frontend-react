import Table from '@/pages/Table';

import { SubRoutes } from './app.routes';

export const cadastroRoutes: SubRoutes[] = [
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
