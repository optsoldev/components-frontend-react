import {
  mdiClockTimeFive,
  mdiForum,
  mdiKangaroo,
  mdiMusicRestSixteenth,
  mdiOneUp,
  mdiStarThreePoints,
  mdiTwoFactorAuthentication,
  mdiViewList,
} from '@mdi/js';
import Icon from '@mdi/react';
import React, { useMemo } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { OptMenuSection } from '../../../lib/components/OptDrawer';
import { OptSideLayoutPortal } from '../../../lib/components/OptSideLayout/OptSideLayoutPortal';
import { ColorPalette } from '../../../lib/shared/styles/colors';
import { AppSideRegistroPortal } from '../AppSideRegistro/AppSideRegistroPortal';
import { AppSideListaRegistros } from './AppSideListaRegistros';

export const AppSideListaRegistrosPortal = () => {
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
            path: `${url}/1`,
            title: 'Registro 1',
          },
          {
            icon: <Icon size={1} path={mdiTwoFactorAuthentication} color={ColorPalette.primary} />,
            path: `${url}/2`,
            title: 'Registro 2',
          },
          {
            icon: <Icon size={1} path={mdiStarThreePoints} color={ColorPalette.primary} />,
            path: `${url}/3`,
            title: 'Registro 3',
          },
          {
            icon: <Icon size={1} path={mdiForum} color={ColorPalette.primary} />,
            path: `${url}/4`,
            title: 'Registro 4',
          },
          {
            icon: <Icon size={1} path={mdiClockTimeFive} color={ColorPalette.primary} />,
            path: `${url}/5`,
            title: 'Registro 5',
          },
          {
            icon: <Icon size={1} path={mdiMusicRestSixteenth} color={ColorPalette.primary} />,
            path: `${url}/6`,
            title: 'Registro 6',
          },
          {
            icon: <Icon size={1} path={mdiKangaroo} color={ColorPalette.primary} />,
            path: `${url}/1/item`,
            title: 'Registro 1 Item 1',
            activeShouldBeExact: true,
          },
        ],
      },
    ],
    [url],
  );

  return (
    <OptSideLayoutPortal sections={sections}>
      <Switch>
        <Route exact path={path} component={AppSideListaRegistros} />

        <Route path={`${path}/:id`} component={AppSideRegistroPortal} />
      </Switch>
    </OptSideLayoutPortal>
  );
};
