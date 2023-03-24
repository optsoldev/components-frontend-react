import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import ItemRegistros from "../pages/ItemRegistros";
import Registros from "../pages/Registros";

import { Routes } from "./index.routes";

export const RegistroRoutes = () => {
  console.log("rotas registro", Routes.Registro.Filtros().Principal);
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Registros />} />
      <Route
        path={Routes.Registro.Filtros().Principal}
        element={<ItemRegistros />}
      />
    </ReactRouterRoutes>
  );
};
