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
import { useMemo } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { OptMenuSection, OptSideLayoutPortal } from '@optsol/react';
import { AppSideRegistroPortal } from '../AppSideRegistro/AppSideRegistro.routes';
import { AppSideListaRegistros } from './AppSideListaRegistros';

export const AppSideListaRegistrosRoutes = () => {
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
            path: `${url}/1`,
            title: 'Registro 1',
          },
          {
            icon: mdiTwoFactorAuthentication,
            path: `${url}/2`,
            title: 'Registro 2',
          },
          {
            icon: mdiStarThreePoints,
            path: `${url}/3`,
            title: 'Registro 3',
          },
          {
            icon: mdiForum,
            path: `${url}/4`,
            title: 'Registro 4',
          },
          {
            icon: mdiClockTimeFive,
            path: `${url}/5`,
            title: 'Registro 5',
          },
          {
            icon: mdiMusicRestSixteenth,
            path: `${url}/6`,
            title: 'Registro 6',
          },
          {
            icon: mdiKangaroo,
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
