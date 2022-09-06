import {
  OptSideLayoutPortalContainer,
  OptSideLayoutPortalContent,
} from "@optsol/react";
import {
  Route,
  Routes as ReactRoutes,
  useMatch,
  useParams,
} from "react-router-dom";
import { FormRegistro } from "../Registro/FormRegistro/FormRegistro";
import { ListaRegistro } from "../Registro/ListaRegistro/ListaRegistro";
import { ListaRegistroSidebar } from "../Registro/ListaRegistroSidebar/ListaRegistroSidebar";
import { Routes } from "./SideAppSample.routes";

export const RegistroListaRoutes = () => {
  const match = useMatch({
    path: Routes.Registro.Filtros().ListaRegistro,
  });

  const { filtro } = useParams<{ filtro: string }>();

  return (
    <OptSideLayoutPortalContainer>
      <ListaRegistroSidebar rotaAtual={!!match} filtro={filtro ?? ""} />

      <OptSideLayoutPortalContent>
        <ReactRoutes>
          <Route
            path={Routes.Registro.Filtros().ListaRegistro}
            element={<ListaRegistro />}
          />
          <Route
            path={Routes.Registro.Filtros().Criar}
            element={<FormRegistro />}
          />
          <Route
            path={Routes.Registro.Filtros().Editar()}
            element={<FormRegistro />}
          />
        </ReactRoutes>
      </OptSideLayoutPortalContent>
    </OptSideLayoutPortalContainer>
  );
};
