import Table from '@/pages/Table';
import { SubRoutes } from './app.routes';

export const cadastroRoutes: SubRoutes[] = [
  {
    label: 'Cliente',
    path: '/cadastros/cliente',
    element: <span>Cliente</span>,
    handle: {
      breadcrumb: () => 'Clientes',
      path: '/cadastros/cliente',
    },
  },
  {
    label: 'Fabricante',
    path: '/cadastros/fabricante',
    element: <Table />,
    handle: {
      breadcrumb: () => 'Fabricante',
      path: '/cadastros/fabricante',
    },
  },
];
