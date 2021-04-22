import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { OptSideLayoutPortalContainer, OptSideLayoutPortalContent } from '../../../lib/components/OptSideLayout';
import { FiltroRegistroSidebar } from '../Registro/FiltroRegistroSidebar/FiltroRegistroSidebar';
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
          <Route exact path={Routes.Registro.Principal}>
            <h2>Registros</h2>
            <p>Por favor, selecione algum filtro para continuar</p>
          </Route>

          {/* <Route path={Routes.Registro.Filtros().ListaRegistro} component={RegistroListaRoutes} key={Date.now()} /> */}
        </Switch>
      </OptSideLayoutPortalContent>
    </OptSideLayoutPortalContainer>
  );
};
