import { mdiOneUp, mdiViewList } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useMemo } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { OptMenuSection } from '../../../lib/components/OptDrawer';
import { OptSideLayoutPortal } from '../../../lib/components/OptSideLayout/OptSideLayoutPortal';
import { ColorPalette } from '../../../lib/shared/styles/colors';
import { AppSideRegistroItem } from '../AppSideRegistroItem';
import { AppSideRegistro } from './AppSideRegistro';

export const AppSideRegistroPortal = () => {
  const { path, url } = useRouteMatch();

  const sections = useMemo(
    (): OptMenuSection[] => [
      {
        items: [
          {
            icon: <Icon size={1} path={mdiViewList} color={ColorPalette.primary} />,
            path: `${url}`,
            title: 'Principal',
            activeShouldBeExact: true,
          },
          {
            icon: <Icon size={1} path={mdiOneUp} color={ColorPalette.primary} />,
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
