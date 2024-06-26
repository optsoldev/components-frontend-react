import { DataPieRegular } from '@fluentui/react-icons';

import { ReactElement } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../components/Layout';
import Cadastro from '../pages/Cadastro';
enum Claim {
  COMERCIAL = 'Comercial',
}

export type Route = {
  path: string;
  title: string;
  claim?: Claim;
  icon?: ReactElement;
  children?: SubRoutes[];
};

export type SubRoutes = {
  path: string;
  title: string;
  claim?: Claim;
};

export type Routes = {
  [key: string]: Route;
};

export const routes: Routes = {
  home: {
    path: '/',
    title: 'Home',
    icon: <DataPieRegular fontSize={28} />,
  },
  accessDenied: { path: '/access-denied', title: 'Acesso negado' },
  naoEncontrado: { path: '*', title: '404' },
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout routes={routes} />}>
      <Route
        index
        element={<Cadastro />}
        handle={{ breadcrumb: () => 'Home' }}
      />

      <Route
        path={routes.accessDenied.path}
        element={
          <span>Você não possui permissão para acessar este conteúdo!</span>
        }
      />
      <Route path="*" element={<span>404</span>} />
    </Route>,
  ),
);
