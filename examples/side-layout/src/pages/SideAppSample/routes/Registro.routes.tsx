import {
  OptSideLayoutPortalContainer,
  OptSideLayoutPortalContent,
} from '@optsol/react';
import { Route, Routes as ReactRoutes, useMatch } from 'react-router-dom';

import { FiltroRegistro } from '../Registro/FiltroRegistro/FiltroRegistro';
import { FiltroRegistroSidebar } from '../Registro/FiltroRegistroSidebar/FiltroRegistroSidebar';

import { RegistroListaRoutes } from './RegistroLista.routes';
import { Routes } from './SideAppSample.routes';

export const RegistroRoutes = () => {
  const match = useMatch(Routes.Registro.Principal);

  return (
    <OptSideLayoutPortalContainer>
      <FiltroRegistroSidebar rotaAtual={!!match} />

      <OptSideLayoutPortalContent>
        <ReactRoutes>
          <Route
            path={Routes.Registro.Principal}
            element={<FiltroRegistro />}
          />

          <Route
            path={Routes.Registro.Filtros().ListaRegistro}
            element={<RegistroListaRoutes />}
          />
        </ReactRoutes>
      </OptSideLayoutPortalContent>
    </OptSideLayoutPortalContainer>
  );
};
