import { SubRoutes } from './app.routes';

import Table from '@/pages/Table';
export const cadastroRoutes: SubRoutes[] = [
  {
    label: 'Fabricante',
    path: '/cadastros/fabricante',
    element: <Table />,
    handle: {
      breadcrumb: () => 'Fabricante'
    }
  },
  {
    label: 'Fabricante',
    path: '/cadastros/fabricante/:id',
    element: <Table />,
    handle: {
      breadcrumb: (_, location) => {
        const readOnly = location.state?.readOnly;
        return `${readOnly ? 'Visualizar' : 'Editar'} Fabricante`;
      }
    }
  }
];
