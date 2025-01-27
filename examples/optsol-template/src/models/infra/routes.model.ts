import { ReactElement } from 'react';
import { RouteProps } from 'react-router-dom';

export type CustomRoute = RouteProps & {
  path: string;
  label: string;
  claim?: string;
  icon?: ReactElement;
  routes?: SubRoutes[];
};

export type SubRoutes = CustomRoute & {
  internal?: boolean;
};
