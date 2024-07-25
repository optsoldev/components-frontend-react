import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { CustomRoute, CustomRoutes, routes } from './app.routes';

const createRoutes = (routes: CustomRoutes) => {
  const generateRoutesTree = (route: CustomRoute, parentKey: string) => {
    if (!route.routes || route.index) {
      return <Route key={parentKey} {...route} />;
    }

    const { routes, ...routeProps } = route;

    return (
      <Route key={parentKey} {...routeProps}>
        {routes.map((childRoute, childIndex) =>
          generateRoutesTree(childRoute, childIndex.toString()),
        )}
      </Route>
    );
  };

  const parsedRoutes = Object.entries(routes).map(([key, route]) =>
    generateRoutesTree(route, key),
  );

  return createRoutesFromElements(
    <Route path="/" element={<Layout routes={routes} />}>
      {parsedRoutes}
      <Route key={'not-found'} path={'*'} element={<span>404</span>} />
    </Route>,
  );
};

export const router = createBrowserRouter(createRoutes(routes));
