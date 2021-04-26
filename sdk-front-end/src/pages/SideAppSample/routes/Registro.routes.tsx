import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { OptSideLayoutPortalContainer, OptSideLayoutPortalContent } from '../../../lib/components/OptSideLayout';
import { FiltroRegistro } from '../Registro/FiltroRegistro/FiltroRegistro';
import { FiltroRegistroSidebar } from '../Registro/FiltroRegistroSidebar/FiltroRegistroSidebar';
import { RegistroListaRoutes } from './RegistroLista.routes';
import { Routes } from './SideAppSample.routes';

export const RegistroRoutes = () => {
  const match = useRouteMatch({
    path: [Routes.Registro.Principal],
    exact: false,
  });

  return (
    <OptSideLayoutPortalContainer>
      <FiltroRegistroSidebar rotaAtual={!!match?.isExact} />

      <OptSideLayoutPortalContent>
        <Switch>
          <Route exact path={Routes.Registro.Principal} component={FiltroRegistro} />

          <Route path={Routes.Registro.Filtros().ListaRegistro} component={RegistroListaRoutes} />
        </Switch>
      </OptSideLayoutPortalContent>
    </OptSideLayoutPortalContainer>
  );
};
