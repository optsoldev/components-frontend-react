import {
  AddRegular,
  CalendarRegular,
  DataPieRegular
} from '@fluentui/react-icons';

import Cadastro from '@/pages/Cadastro';

import { CustomRoute } from '@/models/infra/routes.model';
import { cadastroRoutes } from './cadastros.routes';

enum Claim {
  COMERCIAL = 'Comercial'
}

export type CustomRoutes = {
  [key in keyof typeof Views]: CustomRoute;
};

export const Views = {
  HOME: 'HOME',
  CADASTROS: 'CADASTROS',
  CONFIGURACOES: 'CONFIGURACOES',
  NOT_FOUND: 'NOT_FOUND'
} as const;

export const routes: CustomRoutes = {
  [Views.HOME]: {
    path: '/',
    label: 'Home',
    icon: <DataPieRegular fontSize={28} />,
    element: <Cadastro />,
    handle: {
      breadcrumb: () => 'Home',
      path: '/'
    }
  },
  [Views.CADASTROS]: {
    path: '/cadastros',
    label: 'Cadastros',
    handle: {
      breadcrumb: () => 'Cadastros',
      path: '/cadastros'
    },
    icon: <CalendarRegular fontSize={28} />,
    routes: cadastroRoutes
  },
  [Views.CONFIGURACOES]: {
    path: '/configuracoes',
    label: 'Configurações',
    icon: <AddRegular fontSize={28} />,
    element: <span>Configurações</span>,
    handle: {
      breadcrumb: () => 'Configurações',
      path: '/configuracoes'
    }
  },
  [Views.NOT_FOUND]: {
    path: '*',
    label: '404'
  }
};
