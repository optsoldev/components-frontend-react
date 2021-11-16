import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { OptSideLayoutPortalContainer, OptSideLayoutPortalContent } from '@optsol/react';
import { FormRegistro } from '../Registro/FormRegistro/FormRegistro';
import { ListaRegistro } from '../Registro/ListaRegistro/ListaRegistro';
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
          <Route exact path={Routes.Registro.Filtros().ListaRegistro} component={ListaRegistro} />
          <Route exact path={Routes.Registro.Filtros().Criar} component={FormRegistro} />
          <Route exact path={Routes.Registro.Filtros().Editar()} component={FormRegistro} />
        </Switch>
      </OptSideLayoutPortalContent>
    </OptSideLayoutPortalContainer>
  );
};
