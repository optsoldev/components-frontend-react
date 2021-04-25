import React from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { OptSideLayoutPortalContainer, OptSideLayoutPortalContent } from '../../../lib/components/OptSideLayout';
import { FormRegistro } from '../Registro/FormRegistro/FormRegistro';
import { ListaRegistroSidebar } from '../Registro/ListaRegistroSidebar/ListaRegistroSidebar';
import { Routes } from './SideAppSample.routes';

export const RegistroListaRoutes = () => {
  const match = useRouteMatch({
    path: [Routes.Registro.Filtros().ListaRegistro],
    exact: true,
  });

  const { filtro } = useParams<{ filtro: string }>();

  return (
    <OptSideLayoutPortalContainer>
      <ListaRegistroSidebar rotaAtual={!!match?.isExact} filtro={filtro} />

      <OptSideLayoutPortalContent>
        <Switch>
          <Route exact path={Routes.Registro.Filtros().ListaRegistro}>
            <h1>Lista de registros</h1>
          </Route>

          <Route exact path={Routes.Registro.Filtros().Criar} component={FormRegistro} />
          <Route exact path={Routes.Registro.Filtros().Editar()} component={FormRegistro} />
        </Switch>
      </OptSideLayoutPortalContent>
    </OptSideLayoutPortalContainer>
  );
};
