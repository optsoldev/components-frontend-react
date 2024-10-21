import { SubRoutes } from './app.routes';

import Table from '@/pages/Table';
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
