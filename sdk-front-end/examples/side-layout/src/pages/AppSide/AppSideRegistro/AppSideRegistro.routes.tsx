import { mdiOneUp, mdiViewList } from '@mdi/js';
import { useMemo } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { OptMenuSection, OptSideLayoutPortal } from '@optsol/react';
import { AppSideRegistroItem } from '../AppSideRegistroItem';
import { AppSideRegistro } from './AppSideRegistro';

export const AppSideRegistroPortal = () => {
  const { path, url } = useRouteMatch();

  const sections = useMemo(
    (): OptMenuSection[] => [
      {
        items: [
          {
            icon: mdiViewList,
            path: `${url}`,
            title: 'Principal',
            activeShouldBeExact: true,
          },
          {
            icon: mdiOneUp,
            path: `${url}/item`,
            title: 'Item',
          },
        ],
      },
    ],
    [url],
  );

  return (
    <OptSideLayoutPortal sections={sections}>
      <Switch>
        <Route exact path={path} component={AppSideRegistro} />

        <Route path={`${path}/item`} component={AppSideRegistroItem} />
      </Switch>
    </OptSideLayoutPortal>
  );
};
