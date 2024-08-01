import { SubRoutes } from './app.routes';

import Table from '@/pages/Table';

export const cadastroRoutes: SubRoutes[] = [
  {
    label: 'Cliente',
    path: '/cadastros/cliente',
    element: <span>Cliente</span>,
    handle: {
      breadcrumb: () => 'Clientes',
      path: '/cadastros/cliente'
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
