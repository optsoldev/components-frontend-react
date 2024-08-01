import {
  AddRegular,
  CalendarRegular,
  DataPieRegular
} from '@fluentui/react-icons';
import { ReactElement } from 'react';
import { RouteProps } from 'react-router-dom';

import { cadastroRoutes } from './cadastros.routes';

import Cadastro from '@/pages/Cadastro';

enum Claim {
  COMERCIAL = 'Comercial'
}

export type CustomRoute = RouteProps & {
  path: string;
  label: string;
  claim?: Claim;
  icon?: ReactElement;
  routes?: SubRoutes[];
};

export type SubRoutes = CustomRoute & {
  internal?: boolean;
};
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
